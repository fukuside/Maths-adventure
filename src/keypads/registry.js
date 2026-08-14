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
   問題からKeypadを判定

   優先順位

   ① question.keypad
   ② A/B/C問題なら choice
   ③ 分数丸ごと入力なら fraction
   ④ Stage.keypad
   ⑤ Stage.type
========================================================= */

export function inferKeypadType(
  stage,
  question = null
) {

  /*
    Question自身が
    Keypadを指定している場合
  */

  if (
    question?.keypad
  ) {
    return question.keypad;
  }


  /*
    A / B / C の選択問題

    Bossなどで
    Stage内に複数形式が混ざっていても
    自動でchoiceへ切り替える
  */

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


  /*
    分数を丸ごと入力する問題
  */

  const fractionKinds = [
    "fraction-add-same-denominator",
    "fraction-subtract-same-denominator"
  ];


  if (
    fractionKinds.includes(
      String(
        question?.kind ?? ""
      )
    )
  ) {
    return "fraction";
  }


  /*
    Stage指定
  */

  if (
    stage?.keypad
  ) {
    return stage.keypad;
  }


  /*
    時計
  */

  if (
    stage?.type?.startsWith(
      "clock_"
    )
  ) {
    return "clock";
  }


  /*
    お金
  */

  if (
    stage?.type ===
    "money_sum"
  ) {
    return "money";
  }


  /*
    分数
  */

  if (
    stage?.type?.startsWith(
      "fraction_"
    )
  ) {
    return "fraction";
  }


  /*
    小数
  */

  if (
    stage?.type?.startsWith(
      "decimal_"
    )
  ) {
    return "decimal";
  }


  return "number";
}


/* =========================================================
   キーパッド描画
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


  const def =
    keypads.get(
      type
    )
    ??
    keypads.get(
      "number"
    );


  if (
    !def
  ) {
    return "";
  }


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


  const keys =
    def.keys(
      button,
      {
        input,
        stage,
        question
      }
    );


  return `
    <div
      class="
        keypad
        keypad-${type}
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