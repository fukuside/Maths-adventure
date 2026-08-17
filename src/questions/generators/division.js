import { randomInt as r } from "../helpers.js";


function pick(arr) {
  return arr[r(0, arr.length - 1)];
}


/* ==================================================
   わり算ってなに？
================================================== */

function buildDivisionMeaning() {
  const items = [
    {
      icon: "🍎",
      name: "りんご",
      counter: "こ"
    },
    {
      icon: "🍪",
      name: "クッキー",
      counter: "こ"
    },
    {
      icon: "⚽",
      name: "ボール",
      counter: "こ"
    },
    {
      icon: "🐟",
      name: "さかな",
      counter: "ひき"
    }
  ];

  const item = pick(items);

  /*
    0 = 人数・グループ数に等しく分ける
    1 = ○こずつ分ける
  */
  const mode = r(0, 1);


  /* ==================================================
     等分除

     12こを3人で同じ数ずつ分ける
     → 1人ぶんは4こ
  ================================================== */

  if (mode === 0) {
    const groups = r(2, 4);
    const each = r(2, 5);

    const total =
      groups * each;

    return {
      kind: "division_share",

      icon:
        item.icon,

      itemName:
        item.name,

      counter:
        item.counter,

      total,
      groups,
      each,

      prompt:
        `${item.name}が ${total}${item.counter} あります。`,

      secondPrompt:
        `${groups}人で おなじ数ずつ わけます。`,

      question:
        `1人ぶんは なん${item.counter}？`,

      answer:
        each,

      uniqueKey:
        `division_share_${item.name}_${total}_${groups}`
    };
  }


  /* ==================================================
     包含除

     12こを3こずつ分ける
     → 4グループ
  ================================================== */

  const each = r(2, 5);
  const groups = r(2, 4);

  const total =
    each * groups;

  return {
    kind: "division_group",

    icon:
      item.icon,

    itemName:
      item.name,

    counter:
      item.counter,

    total,
    each,
    groups,

    prompt:
      `${item.name}が ${total}${item.counter} あります。`,

    secondPrompt:
      `${each}${item.counter}ずつに わけます。`,

    question:
      `いくつの まとまりが できますか？`,

    answer:
      groups,

    uniqueKey:
      `division_group_${item.name}_${total}_${each}`
  };
}


/* ==================================================
   わり算のきほん

   まずは 2〜5 で割る問題
================================================== */

function buildDivisionBasic() {
  const divisor =
    r(2, 5);

  const quotient =
    r(1, 9);

  const total =
    divisor * quotient;

  return {
    kind: "text",

    label:
      `${total} ÷ ${divisor}`,

    answer:
      quotient,

    uniqueKey:
      `division_basic_${total}_${divisor}`
  };
}


/* ==================================================
   九九をつかってわり算

   6 × 4 = 24
   だから
   24 ÷ 6 = ?
================================================== */

function buildDivisionFactFamily() {
  const divisor =
    r(2, 9);

  const quotient =
    r(1, 9);

  const total =
    divisor * quotient;

  return {
    kind:
      "division_fact_family",

    multiplication:
      `${divisor} × ${quotient} ＝ ${total}`,

    division:
      `${total} ÷ ${divisor} ＝ ？`,

    divisor,
    quotient,
    total,

    answer:
      quotient,

    uniqueKey:
      `division_fact_${divisor}_${quotient}`
  };
}


/* ==================================================
   1けたでわる

   九九の範囲だけ
   11・12の段なし
================================================== */

function buildDivisionSingle() {
  const divisor =
    r(2, 9);

  const quotient =
    r(1, 9);

  const total =
    divisor * quotient;

  return {
    kind: "text",

    label:
      `${total} ÷ ${divisor}`,

    answer:
      quotient,

    uniqueKey:
      `division_single_${total}_${divisor}`
  };
}

/* ==================================================
   わり算の文章題

   小3で意味が読み取りやすい自然文
================================================== */

function buildDivisionWord() {

  const patterns = [

    /* =====================================================
       クッキーを人数で分ける
    ===================================================== */

    () => {

      const people =
        r(2, 5);

      const each =
        r(2, 6);

      const total =
        people *
        each;

      return {
        icon: "🍪",

        text:
          `クッキーが ${total}こ あります。\n` +
          `${people}人で おなじ数ずつ わけます。\n` +
          `1人ぶんは なんこ？`,

           left:
            total,
            
           right:
            people,

        answer:
          each,

        key:
          `cookie-${total}-${people}`
      };
    },


    /* =====================================================
       あめ
    ===================================================== */

    () => {

      const people =
        r(2, 5);

      const each =
        r(2, 6);

      const total =
        people *
        each;

      return {
        icon: "🍬",

        text:
          `あめが ${total}こ あります。\n` +
          `${people}人で おなじ数ずつ わけます。\n` +
          `1人ぶんは なんこ？`,

           left:
            total,
            
           right:
            people,

        answer:
          each,

        key:
          `candy-${total}-${people}`
      };
    },


    /* =====================================================
       りんごを袋へ
    ===================================================== */

    () => {

      const each =
        r(2, 5);

      const bags =
        r(2, 6);

      const total =
        each *
        bags;

      return {
        icon: "🍎",

        text:
          `りんごが ${total}こ あります。\n` +
          `1ふくろに ${each}こずつ いれます。\n` +
          `なんふくろ できますか？`,

           left:
            total,
            
           right:
            each,

        answer:
          bags,

        key:
          `apple-${total}-${each}`
      };
    },


    /* =====================================================
       えんぴつ
    ===================================================== */

    () => {

      const people =
        r(2, 5);

      const each =
        r(2, 6);

      const total =
        people *
        each;

      return {
        icon: "✏️",

        text:
          `えんぴつが ${total}本 あります。\n` +
          `${people}人で おなじ数ずつ わけます。\n` +
          `1人ぶんは なん本？`,

        left:
          total,
          
        right:
          people,

        answer:
          each,

        key:
          `pencil-${total}-${people}`
      };
    },


    /* =====================================================
       魚
    ===================================================== */

    () => {

      const each =
        r(2, 5);

      const tanks =
        r(2, 5);

      const total =
        each *
        tanks;

      return {
        icon: "🐟",

        text:
          `さかなが ${total}ひき います。\n` +
          `1つの すいそうに ${each}ひきずつ いれます。\n` +
          `すいそうは いくつ いりますか？`,

        left:
          total,
          
        right:
          each,

        answer:
          tanks,

        key:
          `fish-${total}-${each}`
      };
    },


    /* =====================================================
       ボール
    ===================================================== */

    () => {

      const each =
        r(2, 6);

      const boxes =
        r(2, 5);

      const total =
        each *
        boxes;

      return {
        icon: "⚽",

        text:
          `ボールが ${total}こ あります。\n` +
          `1はこに ${each}こずつ いれます。\n` +
          `はこは いくつ いりますか？`,

        left:
          total,
          
        right:
          each,

        answer:
          boxes,

        key:
          `ball-${total}-${each}`
      };
    },


    /* =====================================================
       チーム分け
    ===================================================== */

    () => {

      const each =
        r(2, 5);

      const teams =
        r(2, 5);

      const total =
        each *
        teams;

      return {
        icon: "🎮",

        text:
          `${total}人で ゲームを します。\n` +
          `1チーム ${each}人ずつに わかれます。\n` +
          `なんチーム できますか？`,

          left:
          total,
          
        right:
          each,

        answer:
          teams,

        key:
          `game-${total}-${each}`
      };
    },


    /* =====================================================
       ケーキ
    ===================================================== */

    () => {

      const people =
        r(2, 5);

      const each =
        r(2, 4);

      const total =
        people *
        each;

      return {
        icon: "🍰",

        text:
          `ケーキが ${total}こ あります。\n` +
          `${people}人で おなじ数ずつ わけます。\n` +
          `1人ぶんは なんこ？`,

          left:
          total,
          
        right:
          each,

        answer:
          each,

        key:
          `cake-${total}-${people}`
      };
    },


    /* =====================================================
       シール
    ===================================================== */

    () => {

      const people =
        r(2, 6);

      const each =
        r(2, 5);

      const total =
        people *
        each;

      return {
        icon: "⭐",

        text:
          `シールが ${total}まい あります。\n` +
          `${people}人で おなじ数ずつ わけます。\n` +
          `1人ぶんは なんまい？`,
        
        answer:
          each,

        key:
          `seal-${total}-${people}`
      };
    }
  ];


  const patternIndex =
    r(
      0,
      patterns.length - 1
    );


  const q =
    patterns[
      patternIndex
    ]();


  return {

  kind:
    "division_word_visual",


  keypad:
    "expression",


  guide:
    "しきから にゅうりょくしてね。",


  icon:
    q.icon,


  prompt:
    q.text,


  className:
    "division-word-text",


  answer:
    q.answer,


  expression: {

    left:
      q.left,

    operator:
      "/",

    right:
      q.right,

    result:
      q.answer,

    /*
      割り算は順番固定
    */

    commutative:
      false
  },


  uniqueKey:
    `division_word_${q.key}`
};
}

/* ==================================================
   フラッシュわり算

   1500msは app.js 側で制御
================================================== */

function buildDivisionFlash() {
  const divisor =
    r(2, 9);

  const quotient =
    r(1, 9);

  const total =
    divisor * quotient;

  return {
    kind: "text",

    prompt:
      `${total} ÷ ${divisor}`,

    label:
      `${total} ÷ ${divisor}`,

    className:
      "division-flash-text",

    answer:
      quotient,

    uniqueKey:
      `division_flash_${total}_${divisor}`
  };
}


/* ==================================================
   わり算の王

   フラッシュは混ぜない。
   BOSS自体は persistent のため。
================================================== */

function buildDivisionBoss() {
  const roll =
    r(1, 10);


  /* 意味理解 */

  if (roll <= 2) {
    return buildDivisionMeaning();
  }


  /* 基礎 */

  if (roll <= 4) {
    return buildDivisionBasic();
  }


  /* 九九との関係 */

  if (roll <= 6) {
    return buildDivisionFactFamily();
  }


  /* 通常計算 */

  if (roll <= 8) {
    return buildDivisionSingle();
  }


  /* 文章題 */

  return buildDivisionWord();
}


/* ==================================================
   旧 divide ステージ互換

   ステージ再編中の一時的な安全策
================================================== */

function buildLegacyDivision(stage) {
  const divisor =
    Number(
      stage.baseNum ??
      r(2, 9)
    );

  const min =
    Number(
      stage.min ?? 1
    );

  const max =
    Number(
      stage.max ?? 9
    );

  const quotient =
    r(min, max);

  const total =
    divisor * quotient;

  return {
    kind: "text",

    label:
      `${total} ÷ ${divisor}`,

    answer:
      quotient,

    uniqueKey:
      `legacy_divide_${total}_${divisor}`
  };
}


/* ==================================================
   EXPORT
================================================== */

export default {

  types: [

    /*
      旧タイプ
    */

    "divide",


    /*
      新しい割り算
    */

    "division_meaning",

    "division_basic",

    "division_fact_family",

    "division_single",

    "division_word",

    "division_flash",

    "division_boss"
  ],


  build(stage) {

    /* ===============================================
       わり算ってなに？
    =============================================== */

    if (
      stage.type ===
      "division_meaning"
    ) {
      return buildDivisionMeaning();
    }


    /* ===============================================
       わり算のきほん
    =============================================== */

    if (
      stage.type ===
      "division_basic"
    ) {
      return buildDivisionBasic();
    }


    /* ===============================================
       九九をつかってわり算
    =============================================== */

    if (
      stage.type ===
      "division_fact_family"
    ) {
      return buildDivisionFactFamily();
    }


    /* ===============================================
       1けたでわる
    =============================================== */

    if (
      stage.type ===
      "division_single"
    ) {
      return buildDivisionSingle();
    }


    /* ===============================================
       文章題
    =============================================== */

    if (
      stage.type ===
      "division_word"
    ) {
      return buildDivisionWord();
    }


    /* ===============================================
       フラッシュ
    =============================================== */

    if (
      stage.type ===
      "division_flash"
    ) {
      return buildDivisionFlash();
    }


    /* ===============================================
       BOSS
    =============================================== */

    if (
      stage.type ===
      "division_boss"
    ) {
      return buildDivisionBoss();
    }


    /* ===============================================
       旧 divide
    =============================================== */

    if (
      stage.type ===
      "divide"
    ) {
      return buildLegacyDivision(
        stage
      );
    }


    throw new Error(
      `Unsupported division type: ${stage.type}`
    );
  }
};