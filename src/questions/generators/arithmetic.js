import { randomInt as r } from "../helpers.js";

function pick(arr) {
  return arr[r(0, arr.length - 1)];
}


/* ==================================================
   足し算ってなに？
================================================== */

function buildAdditionMeaning() {
  const a = r(1, 5);
  const b = r(1, 5);

  const items = [
    { icon: "🍎", name: "りんご", counter: "こ" },
    { icon: "🍪", name: "クッキー", counter: "こ" },
    { icon: "⚽", name: "ボール", counter: "こ" },
    { icon: "🐟", name: "さかな", counter: "ひき" }
  ];

  const item = pick(items);
  const mode = r(0, 1);

  if (mode === 0) {
    return {
      kind: "addition_groups",

      icon: item.icon,
      leftCount: a,
      rightCount: b,

      prompt:
        `${a}${item.counter}と ${b}${item.counter}を あわせます。`,

      question:
        `ぜんぶで なん${item.counter}？`,

      answer: a + b,

      uniqueKey:
        `addition_meaning_merge_${item.name}_${a}_${b}`
    };
  }

  return {
    kind: "addition_increase",

    icon: item.icon,
    firstCount: a,
    addedCount: b,

    prompt:
      `はじめに ${a}${item.counter} あります。`,

    secondPrompt:
      `あとから ${b}${item.counter} ふえました。`,

    question:
      `ぜんぶで なん${item.counter}？`,

    answer: a + b,

    uniqueKey:
      `addition_meaning_increase_${item.name}_${a}_${b}`
  };
}


/* ==================================================
   1けた＋1けた
================================================== */

function buildAdditionSingleDigit() {
  const a = r(1, 9);
  const b = r(1, 9);

  return {
    kind: "text",

    label: `${a} ＋ ${b}`,

    answer: a + b,

    uniqueKey:
      `addition_single_${a}_${b}`
  };
}


/* ==================================================
   1けた＋2けた
================================================== */

function buildAdditionMixedDigit() {
  const oneDigit = r(1, 9);
  const twoDigit = r(10, 19);

  return {
    kind: "text",

    label:
      `${oneDigit} ＋ ${twoDigit}`,

    answer:
      oneDigit + twoDigit,

    uniqueKey:
      `addition_mixed_${oneDigit}_${twoDigit}`
  };
}


/* ==================================================
   フラッシュ足し算
================================================== */

function buildAdditionFlash() {
  const useMixed =
    r(0, 1) === 1;

  let a;
  let b;

  if (useMixed) {
    a = r(1, 9);
    b = r(10, 19);
  } else {
    a = r(1, 9);
    b = r(1, 9);
  }

  return {
    kind: "text",

    prompt:
      `${a} ＋ ${b}`,

    label:
      `${a} ＋ ${b}`,

    className:
      "addition-flash-text",

    answer:
      a + b,

    uniqueKey:
      `addition_flash_${a}_${b}`
  };
}


/* ==================================================
   足し算の文章題
================================================== */
function buildAdditionWord() {
  const a = r(2, 10);
  const b = r(1, 9);

  const patterns = [

    /* 0：公園 */
    {
      scene: "park",
      mainIcon: "🌳",
      subIcon: "🛝",
      peopleIcon: "🧒",
      firstCount: a,
      secondCount: b,

      text:
        `こうえんに ${a}人 いました。\n` +
        `あとから ${b}人 きました。\n` +
        `ぜんぶで なん人？`
    },


    /* 1：風船 */
    {
      scene: "balloon",
      mainIcon: "🎈",
      secondIcon: "🎈",
      firstCount: a,
      secondCount: b,

      text:
        `あかい ふうせんが ${a}こ、\n` +
        `あおい ふうせんが ${b}こ あります。\n` +
        `ぜんぶで なんこ？`
    },


    /* 2：えんぴつ */
    {
      scene: "pencil",
      mainIcon: "✏️",
      subIcon: "📦",
      firstCount: a,
      secondCount: b,

      text:
        `はこに えんぴつが ${a}本 あります。\n` +
        `あとから ${b}本 いれました。\n` +
        `ぜんぶで なん本？`
    },


    /* 3：クッキー */
    {
      scene: "cookie",
      mainIcon: "🍪",
      subIcon: "🍽️",
      firstCount: a,
      secondCount: b,

      text:
        `おさらに クッキーが ${a}こ あります。\n` +
        `${b}こ ふやしました。\n` +
        `ぜんぶで なんこ？`
    },


    /* 4：バス */
    {
      scene: "bus",
      mainIcon: "🚌",
      subIcon: "🚏",
      peopleIcon: "🧒",
      firstCount: a,
      secondCount: b,

      text:
        `バスに ${a}人 のっています。\n` +
        `つぎの ていりゅうじょで ${b}人 のりました。\n` +
        `ぜんぶで なん人？`
    }
  ];


  const patternIndex =
    r(0, patterns.length - 1);


  const selected =
    patterns[patternIndex];


  return {
    /*
      text ではなく、
      足し算文章題専用rendererへ送る
    */
    kind: "addition_word_visual",

    scene:
      selected.scene,

    mainIcon:
      selected.mainIcon,

    subIcon:
      selected.subIcon ?? "",

    secondIcon:
      selected.secondIcon ?? "",

    peopleIcon:
      selected.peopleIcon ?? "",

    firstCount:
      selected.firstCount,

    secondCount:
      selected.secondCount,

    prompt:
      selected.text,

    label:
      selected.text,

    className:
      "addition-word-text",

    answer:
      a + b,

    uniqueKey:
      `addition_word_${a}_${b}_${patternIndex}`
  };
}
/* ==================================================
   足し算の王
================================================== */

function buildAdditionBoss() {
  const roll = r(1, 10);

  if (roll <= 2) {
    return buildAdditionMeaning();
  }

  if (roll <= 4) {
    return buildAdditionSingleDigit();
  }

  if (roll <= 7) {
    return buildAdditionMixedDigit();
  }

  return buildAdditionWord();
}

/* ==================================================
   引き算ってなに？
================================================== */

function buildSubtractionMeaning() {
  const items = [
    { icon: "🍎", name: "りんご", counter: "こ" },
    { icon: "🍪", name: "クッキー", counter: "こ" },
    { icon: "⚽", name: "ボール", counter: "こ" },
    { icon: "🐟", name: "さかな", counter: "ひき" },
    { icon: "🐦", name: "とり", counter: "わ" }
  ];

  const item = pick(items);

  /*
    0 = とりさる
    1 = くらべる
  */
  const mode = r(0, 1);

  if (mode === 0) {
    const total = r(4, 9);
    const removed = r(1, total - 1);

    let actionText = "";

    if (item.name === "さかな") {
      actionText =
        `${removed}${item.counter}が あそびに いきました。`;
    } else if (item.name === "とり") {
      actionText =
        `${removed}${item.counter}が とんで いきました。`;
    } else if (item.name === "クッキー") {
      actionText =
        `${removed}${item.counter}を たべました。`;
    } else if (item.name === "りんご") {
      actionText =
        `${removed}${item.counter}を たべました。`;
    } else {
      actionText =
        `${removed}${item.counter}を つかいました。`;
    }

    return {
      kind: "subtraction_take",

      icon: item.icon,
      itemName: item.name,
      counter: item.counter,

      total,
      removed,

      prompt:
        `${item.name}が ${total}${item.counter} あります。`,

      secondPrompt:
        actionText,

      question:
        `のこりは なん${item.counter} でしょうか？`,

      answer:
        total - removed,

      uniqueKey:
        `subtraction_take_${item.name}_${total}_${removed}`
    };
  }

  const small = r(1, 6);
  const difference = r(1, 3);
  const large = small + difference;

  return {
    kind: "subtraction_compare",

    iconA: "🍎",
    iconB: "🍪",

    large,
    small,

    prompt:
      `りんごと クッキーの かずを くらべてみよう。`,

    question:
      `りんごのほうが なんこ おおい？`,

    answer:
      large - small,

    uniqueKey:
      `subtraction_compare_${large}_${small}`
  };
}

/* ==================================================
   1けた−1けた
================================================== */

function buildSubtractionSingleDigit() {
  const a = r(1, 9);
  const b = r(0, a);

  return {
    kind: "text",

    label:
      `${a} − ${b}`,

    answer:
      a - b,

    uniqueKey:
      `subtraction_single_${a}_${b}`
  };
}


/* ==================================================
   10〜19−1けた
================================================== */

function buildSubtractionTeens() {
  const a = r(10, 19);
  const b = r(1, 9);

  return {
    kind: "text",

    label:
      `${a} − ${b}`,

    answer:
      a - b,

    uniqueKey:
      `subtraction_teens_${a}_${b}`
  };
}


/* ==================================================
   フラッシュ引き算
================================================== */

function buildSubtractionFlash() {
  const useTeen =
    r(0, 1) === 1;

  let a;
  let b;

  if (useTeen) {
    a = r(10, 19);
    b = r(1, 9);
  } else {
    a = r(1, 9);
    b = r(0, a);
  }

  return {
    kind: "text",

    prompt:
      `${a} − ${b}`,

    label:
      `${a} − ${b}`,

    className:
      "subtraction-flash-text",

    answer:
      a - b,

    uniqueKey:
      `subtraction_flash_${a}_${b}`
  };
}

/* ==================================================
   引き算の文章題
================================================== */

function buildSubtractionWord() {
  const total = r(6, 19);

  const removed =
    r(
      1,
      Math.min(
        9,
        total - 1
      )
    );

  const patterns = [
    {
      icon: "🐟",
      text:
        `さかなが ${total}ひき います。\n${removed}ひきが あそびに いきました。\nのこりは なんびき でしょうか？`
    },

    {
      icon: "🐦",
      text:
        `きの えだに とりが ${total}わ とまっています。\n${removed}わが とんで いきました。\nのこりは なんわ でしょうか？`
    },

    {
      icon: "🍪",
      text:
        `おさらに クッキーが ${total}こ あります。\n${removed}こを たべました。\nのこりは なんこ でしょうか？`
    },

    {
      icon: "✏️",
      text:
        `はこに えんぴつが ${total}本 あります。\n${removed}本を つかいました。\nのこりは なん本 でしょうか？`
    },

    {
      icon: "🚌",
      text:
        `バスに ${total}人の おきゃくさんが のっています。\n${removed}人が バスを おりました。\nのこりは なん人 でしょうか？`
    }
  ];

  const patternIndex =
    r(0, patterns.length - 1);

  const selected =
    patterns[patternIndex];

  return {
    kind: "subtraction_word_visual",

    icon:
      selected.icon,

    prompt:
      selected.text,

    className:
      "subtraction-word-text",

    answer:
      total - removed,

    uniqueKey:
      `subtraction_word_${total}_${removed}_${patternIndex}`
  };
}

/* ==================================================
   引き算の王
================================================== */

function buildSubtractionBoss() {
  const roll = r(1, 10);

  if (roll <= 2) {
    return buildSubtractionMeaning();
  }

  if (roll <= 4) {
    return buildSubtractionSingleDigit();
  }

  if (roll <= 7) {
    return buildSubtractionTeens();
  }

  return buildSubtractionWord();
}


/* ==================================================
   旧ステージ互換
================================================== */

function buildLegacyAddition(stage) {
  const max =
    stage.max ?? 20;

  const a =
    r(0, max);

  const b =
    r(0, max - a);

  return {
    kind: "text",

    label:
      `${a} ＋ ${b}`,

    answer:
      a + b,

    uniqueKey:
      `legacy_addition_${a}_${b}`
  };
}


function buildLegacySubtraction(stage) {
  const max =
    stage.max ?? 20;

  const a =
    r(0, max);

  const b =
    r(0, a);

  return {
    kind: "text",

    label:
      `${a} − ${b}`,

    answer:
      a - b,

    uniqueKey:
      `legacy_subtraction_${a}_${b}`
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
    "addition",
    "subtraction",

    /*
      足し算
    */
    "addition_meaning",
    "addition_single",
    "addition_mixed",
    "addition_flash",
    "addition_word",
    "addition_boss",

    /*
      引き算
    */
    "subtraction_meaning",
    "subtraction_single",
    "subtraction_teens",
    "subtraction_flash",
    "subtraction_word",
    "subtraction_boss"
  ],


  build(stage) {

    /* ===============================================
       足し算
    =============================================== */

    if (
      stage.type ===
      "addition_meaning"
    ) {
      return buildAdditionMeaning();
    }


    if (
      stage.type ===
      "addition_single"
    ) {
      return buildAdditionSingleDigit();
    }


    if (
      stage.type ===
      "addition_mixed"
    ) {
      return buildAdditionMixedDigit();
    }


    if (
      stage.type ===
      "addition_flash"
    ) {
      return buildAdditionFlash();
    }


    if (
      stage.type ===
      "addition_word"
    ) {
      return buildAdditionWord();
    }


    if (
      stage.type ===
      "addition_boss"
    ) {
      return buildAdditionBoss();
    }


    /* ===============================================
       引き算
    =============================================== */

    if (
      stage.type ===
      "subtraction_meaning"
    ) {
      return buildSubtractionMeaning();
    }


    if (
      stage.type ===
      "subtraction_single"
    ) {
      return buildSubtractionSingleDigit();
    }


    if (
      stage.type ===
      "subtraction_teens"
    ) {
      return buildSubtractionTeens();
    }


    if (
      stage.type ===
      "subtraction_flash"
    ) {
      return buildSubtractionFlash();
    }


    if (
      stage.type ===
      "subtraction_word"
    ) {
      return buildSubtractionWord();
    }


    if (
      stage.type ===
      "subtraction_boss"
    ) {
      return buildSubtractionBoss();
    }


    /* ===============================================
       旧ステージ互換
    =============================================== */

    if (
      stage.type ===
      "addition"
    ) {
      return buildLegacyAddition(stage);
    }


    if (
      stage.type ===
      "subtraction"
    ) {
      return buildLegacySubtraction(stage);
    }


    /*
      ここに来る場合は
      stage.type の設定ミス
    */
    throw new Error(
      `Unsupported arithmetic type: ${stage.type}`
    );
  }
};