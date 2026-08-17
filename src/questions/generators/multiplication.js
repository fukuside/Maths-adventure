import { randomInt as r } from "../helpers.js";

function pick(arr) {
  return arr[r(0, arr.length - 1)];
}


/* ==================================================
   かけ算ってなに？
================================================== */

function buildMeaningQuestion() {
  const each = r(2, 5);
  const groups = r(2, 5);

  const items = [
    { icon: "🍎", name: "りんご", counter: "こ" },
    { icon: "🍪", name: "クッキー", counter: "こ" },
    { icon: "⚽", name: "ボール", counter: "こ" },
    { icon: "✏️", name: "えんぴつ", counter: "本" }
  ];

  const item = pick(items);

  return {
    kind: "multiply_groups",

    icon: item.icon,
    itemName: item.name,
    counter: item.counter,

    each,
    groups,

    prompt:
      `${each}${item.counter}ずつの まとまりが ${groups}つあります。`,

    question:
      `ぜんぶで なん${item.counter}？`,

    answer:
      each * groups,

    uniqueKey:
      `multiply_groups_${item.name}_${each}_${groups}`
  };
}

/* ==================================================
   九九の基本
================================================== */

function buildBasicsQuestion() {
  const tables = [2, 3, 4, 5];

  const a = pick(tables);
  const b = r(1, 9);

  const useVisual =
    Math.random() < 0.4;

  if (useVisual) {
    const icons = [
      "🍎",
      "🍪",
      "⚽",
      "⭐"
    ];

    return {
      kind: "multiply_visual_equation",

      icon: pick(icons),

      each: a,
      groups: b,

      label: `${a} × ${b}`,

      answer: a * b,

      uniqueKey:
        `multiply_basic_visual_${a}_${b}`
    };
  }

  return {
    kind: "text",

    label: `${a} × ${b}`,

    answer: a * b,

    uniqueKey:
      `multiply_basic_${a}_${b}`
  };
}

/* ==================================================
   九九をマスター
================================================== */

function buildMasterQuestion(stage) {
  const minTable =
    stage.minTable ?? 1;

  const maxTable =
    stage.maxTable ?? 9;

  const a =
    r(minTable, maxTable);

  const b =
    r(1, 9);

  return {
  kind: "text",

  prompt: `${a} × ${b}`,
  label: `${a} × ${b}`,

  className: "multiply-master-text",

  answer: a * b,

  uniqueKey:
    `multiply_master_${a}_${b}`
};
}

/* ==================================================
   かけ算の文章題
================================================== */

function buildWordQuestion() {

  const each =
    r(2, 9);

  const groups =
    r(2, 8);


  const patterns = [

    {
      icon: "🍬",

      text:
        `1ふくろに ${each}この あめが 入っています。\n` +
        `${groups}ふくろでは ぜんぶで なんこ？`
    },


    {
      icon: "✏️",

      text:
        `1はこに ${each}本の えんぴつが 入っています。\n` +
        `${groups}はこでは ぜんぶで なん本？`
    },


    {
      icon: "🧒",

      text:
        `1れつに ${each}人ずつ ならびます。\n` +
        `${groups}れつでは ぜんぶで なん人？`
    },


    {
      icon: "⚽",

      text:
        `1チーム ${each}人です。\n` +
        `${groups}チームでは ぜんぶで なん人？`
    },


    {
      icon: "🍪",

      text:
        `1さらに クッキーが ${each}こ あります。\n` +
        `${groups}さらでは ぜんぶで なんこ？`
    },


    {
      icon: "📚",

      text:
        `1日に 本を ${each}ページずつ よみます。\n` +
        `${groups}日では なんページ よむ？`
    },


    {
      icon: "🚗",

      text:
        `1だいの くるまに ${each}人 のります。\n` +
        `${groups}だいでは ぜんぶで なん人 のれる？`
    },


    {
      icon: "⚾",

      text:
        `1はこに ボールが ${each}こ 入っています。\n` +
        `${groups}はこでは ぜんぶで なんこ？`
    },


    {
      icon: "🐙",

      text:
        `1さらに たこやきが ${each}こ あります。\n` +
        `${groups}さらでは ぜんぶで なんこ？`
    },


    {
      icon: "🎮",

      text:
        `1チームに ${each}人ずつ 入って\n` +
        `ゲームを します。\n` +
        `${groups}チームでは ぜんぶで なん人？`
    },


    {
      icon: "🍓",

      text:
        `1さらに いちごが ${each}こ あります。\n` +
        `${groups}さらでは ぜんぶで なんこ？`
    },


    {
      icon: "🎁",

      text:
        `1人に シールを ${each}まいずつ くばります。\n` +
        `${groups}人では ぜんぶで なんまい いる？`
    }
  ];


  const patternIndex =
    r(
      0,
      patterns.length - 1
    );

  const selected =
    patterns[
      patternIndex
    ];

  return {

  kind:
    "multiplication_word_visual",


  keypad:
    "expression",


  guide:
    "しきから にゅうりょくしてね。",


  icon:
    selected.icon,


  each,

  groups,


  prompt:
    selected.text,


  answer:
    each *
    groups,


  expression: {

    left:
      each,

    operator:
      "*",

    right:
      groups,

    result:
      each *
      groups,

    /*
      3×4 / 4×3
      どちらも正解
    */

    commutative:
      true
  },


  uniqueKey:
    `multiply_word_${each}_${groups}_${patternIndex}`
};
}

/* ==================================================
   フラッシュ九九
================================================== */

function buildFlashQuestion() {
  const a =
    r(1, 9);

  const b =
    r(1, 9);

  return {
  kind: "text",

  prompt:
    `${a} × ${b}`,

  label:
    `${a} × ${b}`,

  className:
    "multiply-flash-text",

  answer:
    a * b,

  uniqueKey:
    `multiply_flash_${a}_${b}`
};
}


/* ==================================================
   九九の王
================================================== */

function buildBossQuestion() {
  /*
    ボスでは、
    九九・文章題・意味理解を混ぜる。

    10問の中で毎回完全固定ではなく、
    適度にランダムにする。
  */

  const roll =
    r(1, 10);

  /*
    約20%
    かけ算の意味
  */
  if (roll <= 2) {
    return buildMeaningQuestion();
  }

  /*
    約50%
    九九
  */
  if (roll <= 7) {
    return buildFlashQuestion();
  }

  /*
    約30%
    文章題
  */
  return buildWordQuestion();
}


/* ==================================================
   EXPORT
================================================== */

export default {

  types: [
    /*
      新ステージ
    */
    "multiply_meaning",
    "multiply_basics",
    "multiply_master",
    "multiply_word",
    "multiply_flash",
    "multiply_boss",

    /*
      旧ステージとの互換
    */
    "multiply",
    "multiply_mixed"
  ],


  build(stage) {

    if (
      stage.type ===
      "multiply_meaning"
    ) {
      return buildMeaningQuestion();
    }


    if (
      stage.type ===
      "multiply_basics"
    ) {
      return buildBasicsQuestion();
    }


    if (
      stage.type ===
      "multiply_master"
    ) {
      return buildMasterQuestion(
        stage
      );
    }


    if (
      stage.type ===
      "multiply_word"
    ) {
      return buildWordQuestion();
    }


    if (
      stage.type ===
      "multiply_flash"
    ) {
      return buildFlashQuestion();
    }


    if (
      stage.type ===
      "multiply_boss"
    ) {
      return buildBossQuestion();
    }


    /*
      ============================
      旧 multiply
      ============================
    */

    if (
      stage.type ===
      "multiply"
    ) {
      const b =
        r(
          stage.min ?? 1,
          stage.max ?? 9
        );

      return {
        label:
          `${stage.baseNum} × ${b}`,

        answer:
          stage.baseNum * b,

        uniqueKey:
          `multiply_old_${stage.baseNum}_${b}`
      };
    }


    /*
      ============================
      旧 multiply_mixed
      ============================
    */

    const a =
      r(1, 9);

    const b =
      r(1, 9);

    return {
      label:
        `${a} × ${b}`,

      answer:
        a * b,

      uniqueKey:
        `multiply_mixed_${a}_${b}`
    };
  }
};