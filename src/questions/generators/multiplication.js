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
  `1ふくろに ${each}この あめが 入っています。\n${groups}ふくろでは ぜんぶで なんこ？`,

  `1はこに ${each}本の えんぴつが 入っています。\n${groups}はこでは ぜんぶで なん本？`,

  `1れつに ${each}人ずつ ならびます。\n${groups}れつでは ぜんぶで なん人？`,

  `1チーム ${each}人です。\n${groups}チームでは ぜんぶで なん人？`,

  `1さらに ${each}この クッキーがあります。\n${groups}さらでは ぜんぶで なんこ？`,

  `1日に ${each}ページずつ 本を よみます。\n${groups}日では なんページ よむ？`,

  `1だいの くるまに ${each}人 のります。\n${groups}だいでは なん人 のれる？`,

  `1はこに ${each}この ボールがあります。\n${groups}はこでは ぜんぶで なんこ？`
];

  const patternIndex =
    r(0, patterns.length - 1);

  return {
  kind: "text",

  prompt:
    patterns[patternIndex],

  label:
    patterns[patternIndex],

  className:
    "multiply-word-text",

  answer:
    each * groups,

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