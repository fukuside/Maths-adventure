const coreModules = import.meta.glob(
  "./*.js",
  {
    eager: true,
    import: "default"
  }
);


const packModules = import.meta.glob(
  "../content/packs/*/keypads/**/*.js",
  {
    eager: true,
    import: "default"
  }
);


const keypads =
  new Map();


/* =========================================================
   Keypad自動登録
========================================================= */

for (
  const [path, item]
  of Object.entries({
    ...coreModules,
    ...packModules
  })
) {

  if (
    !item?.id ||
    typeof item.keys !== "function"
  ) {
    continue;
  }


  if (
    keypads.has(
      item.id
    )
  ) {

    throw new Error(
      `Keypad id is duplicated: ${item.id} (${path})`
    );
  }


  keypads.set(
    item.id,
    item
  );
}


/* =========================================================
   使用するKeypadを判定

   優先順位

   ① question.keypad
   ② A/B/C問題
   ③ 分数丸ごと入力
   ④ stage.keypad
   ⑤ stage.type
========================================================= */

export function inferKeypadType(
  stage,
  question = null
) {

  /* =====================================================
     ① Question自身の指定を最優先

     文章題：
     keypad: "expression"

     など
  ===================================================== */

  if (
    typeof question?.keypad ===
      "string"
    &&
    question.keypad !== ""
  ) {

    return question.keypad;
  }


  /* =====================================================
     ② A/B/C問題
  ===================================================== */

  const isChoiceQuestion =
    Array.isArray(
      question?.choices
    )
    &&
    question.choices.length > 0
    &&
    typeof question?.answer ===
      "string"
    &&
    /^[ABC]$/.test(
      question.answer
    );


  if (
    isChoiceQuestion
  ) {

    return "choice";
  }


  /* =====================================================
     ③ 分数丸ごと入力
  ===================================================== */

  const questionKind =
    String(
      question?.kind ?? ""
    );


  if (
    questionKind ===
      "fraction-add-same-denominator"
    ||
    questionKind ===
      "fraction-subtract-same-denominator"
  ) {

    return "fraction";
  }


  /* =====================================================
     ④ StageがKeypadを明示指定
  ===================================================== */

  if (
    typeof stage?.keypad ===
      "string"
    &&
    stage.keypad !== ""
  ) {

    return stage.keypad;
  }


  /* =====================================================
     ⑤ Stage.typeから推測
  ===================================================== */

  const stageType =
    String(
      stage?.type ?? ""
    );


  /* 時計 */

  if (
    stageType.startsWith(
      "clock_"
    )
  ) {

    return "clock";
  }


  /* お金 */

  if (
    stageType ===
      "money_sum"
  ) {

    return "money";
  }


  /* 分数 */

  if (
    stageType.startsWith(
      "fraction_"
    )
  ) {

    return "fraction";
  }


  /* 小数 */

  if (
    stageType.startsWith(
      "decimal_"
    )
  ) {

    return "decimal";
  }


  /* その他 */

  return "number";
}


/* =========================================================
   Keypad描画
========================================================= */

export function renderKeypadForStage(
  stage,
  {
    escapeHtml,
    inputEnabled,
    input = "",
    question = null
  }
) {

  const type =
    inferKeypadType(
      stage,
      question
    );


  /*
    該当Keypadがなければ
    numberへフォールバック
  */

  const def =
    keypads.get(
      type
    )
    ??
    keypads.get(
      "number"
    );


  if (!def) {

    console.warn(
      `Keypad not found: ${type}`
    );

    return "";
  }


  /* =====================================================
     ボタン生成
  ===================================================== */

  const button = (
    value,
    label = value,
    cls = ""
  ) => `
    <button
      class="key ${cls}"
      data-action="key"
      data-value="${escapeHtml(value)}"
      type="button"
    >
      ${escapeHtml(label)}
    </button>
  `;


  /* =====================================================
     Key一覧生成
  ===================================================== */

  const keys =
    def.keys(
      button,
      {
        input,
        stage,
        question
      }
    );


  /* =====================================================
     HTML
  ===================================================== */

  return `
    <div
      class="
        keypad
        keypad-${escapeHtml(type)}
        ${
          inputEnabled
            ? ""
            : "keypad-disabled"
        }
      "
    >
      ${keys.join("")}
    </div>
  `;
}