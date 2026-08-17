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
   左：場面イラスト
   右：文章
================================================== */

function buildAdditionWord() {

  const patterns = [

    /* =====================================================
       公園
    ===================================================== */

    () => {

      const firstCount =
        r(2, 7);

      const addedCount =
        r(1, 5);

      return {
        scene: "park",
        icon: "🌳",

        firstCount,
        addedCount,

        prompt:
          `こうえんで ${firstCount}にんが あそんでいます。\n` +
          `あとから ${addedCount}にんが やってきました。\n` +
          `みんなで なんにん？`,

        answer:
          firstCount + addedCount,

        key:
          `park-${firstCount}-${addedCount}`
      };
    },


    /* =====================================================
       ふうせん
    ===================================================== */

    () => {

      const firstCount =
        r(2, 8);

      const addedCount =
        r(1, 6);

      return {
        scene: "balloon",
        icon: "🎈",

        firstCount,
        addedCount,

        prompt:
          `ふうせんが ${firstCount}こ あります。\n` +
          `あとから ${addedCount}こ もらいました。\n` +
          `ぜんぶで なんこ？`,

        answer:
          firstCount + addedCount,

        key:
          `balloon-${firstCount}-${addedCount}`
      };
    },


    /* =====================================================
       あめ
    ===================================================== */

    () => {

      const firstCount =
        r(3, 8);

      const addedCount =
        r(1, 5);

      return {
        scene: "candy",
        icon: "🍬",

        firstCount,
        addedCount,

        prompt:
          `あめが ${firstCount}こ あります。\n` +
          `おともだちから ${addedCount}こ もらいました。\n` +
          `ぜんぶで なんこ？`,

        answer:
          firstCount + addedCount,

        key:
          `candy-${firstCount}-${addedCount}`
      };
    },

    () => {

  /* =====================================================
     ゲーム

     はじめに 2〜4にん
     あとから 2〜4にん やってくる

     名前も毎回ランダム
  ===================================================== */

  const firstCount =
    r(2, 4);


  const addedCount =
    r(2, 4);


  const names = [
    "じんくん",
    "ろうくん",
    "ななちゃん",
    "そらくん",
    "ゆいちゃん",
    "はるくん",
    "りんちゃん",
    "そうたくん",
    "みおちゃん",
    "れんくん"
  ];


  /* 名前をシャッフル */

  const shuffledNames =
    [...names];


  for (
    let i =
      shuffledNames.length - 1;
    i > 0;
    i--
  ) {

    const j =
      r(0, i);


    [
      shuffledNames[i],
      shuffledNames[j]
    ] = [
      shuffledNames[j],
      shuffledNames[i]
    ];
  }


  /* 必要な人数だけ選ぶ */

  const selectedNames =
    shuffledNames.slice(
      0,
      addedCount
    );


  /* =====================================================
     名前の文章を作る

     2人：
     じんくんと ななちゃん

     3人：
     じんくん、ろうくん、ななちゃん

     4人：
     じんくん、ろうくん、ななちゃん、そらくん
  ===================================================== */

  let nameText = "";


  if (
    selectedNames.length === 2
  ) {

    nameText =
      `${selectedNames[0]}と ${selectedNames[1]}`;

  } else {

    nameText =
      selectedNames.join("、");
  }

  const answer =
    firstCount +
    addedCount;

  return {

    scene:
      "game",

    icon:
      "🎮",

    firstCount,

    addedCount,

    prompt:
      `${firstCount}にんで ゲームを しています。そこへ\n` +
      `${nameText}が「いっしょに ゲームしよ！」と やってきました。\n` +
      `みんなで なんにん？`,

    answer,

    key:
      `game-${firstCount}-${addedCount}-${selectedNames.join("-")}`
  };
},

    /* =====================================================
       バス
    ===================================================== */

    () => {

      const firstCount =
        r(3, 8);

      const addedCount =
        r(1, 5);

      return {
        scene: "bus",
        icon: "🚌",

        firstCount,
        addedCount,

        prompt:
          `バスに ${firstCount}にん のっています。\n` +
          `つぎの ていりゅうじょで ${addedCount}にん のりました。\n` +
          `ぜんぶで なんにん？`,

        answer:
          firstCount + addedCount,

        key:
          `bus-${firstCount}-${addedCount}`
      };
    },


    /* =====================================================
       どうぶつ
    ===================================================== */

    () => {

      const firstCount =
        r(2, 7);

      const addedCount =
        r(1, 5);

      return {
        scene: "dog",
        icon: "🐶",

        firstCount,
        addedCount,

        prompt:
          `こうえんに いぬが ${firstCount}ひき います。\n` +
          `あとから ${addedCount}ひき やってきました。\n` +
          `ぜんぶで なんびき？`,

        answer:
          firstCount + addedCount,

        key:
          `dog-${firstCount}-${addedCount}`
      };
    },


    /* =====================================================
       りんご
    ===================================================== */

    () => {

      const firstCount =
        r(2, 8);

      const addedCount =
        r(1, 5);

      return {
        scene: "apple",
        icon: "🍎",

        firstCount,
        addedCount,

        prompt:
          `りんごが ${firstCount}こ あります。\n` +
          `あとから ${addedCount}こ かってきました。\n` +
          `ぜんぶで なんこ？`,

        answer:
          firstCount + addedCount,

        key:
          `apple-${firstCount}-${addedCount}`
      };
    },


    /* =====================================================
       本
    ===================================================== */

    () => {

      const firstCount =
        r(2, 8);

      const addedCount =
        r(1, 5);

      return {
        scene: "book",
        icon: "📚",

        firstCount,
        addedCount,

        prompt:
          `ほんだなに ほんが ${firstCount}さつ あります。\n` +
          `${addedCount}さつ もどしました。\n` +
          `ほんは ぜんぶで なんさつ？`,

        answer:
          firstCount + addedCount,

        key:
          `book-${firstCount}-${addedCount}`
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
    "addition_word_visual",


  /*
    文章題は式入力
  */

  keypad:
    "expression",


  guide:
    "しきから にゅうりょくしてね。",


  scene:
    q.scene,

  icon:
    q.icon,


  firstCount:
    q.firstCount,

  addedCount:
    q.addedCount,


  prompt:
    q.prompt,


  answer:
    q.answer,


  expression: {

    left:
      q.firstCount,

    operator:
      "+",

    right:
      q.addedCount,

    result:
      q.answer,

    /*
      足し算は
      5+3 と 3+5
      どちらも正解
    */

    commutative:
      true
  },


  uniqueKey:
    `addition_word_${q.key}`
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

   左：
   「減っている出来事」を視覚化

   右：
   文章
================================================== */

function buildSubtractionWord() {

  const patterns = [

    /* =====================================================
       鳥
    ===================================================== */

    () => {

      const total =
        r(6, 12);

      const removed =
        r(
          1,
          Math.min(
            5,
            total - 1
          )
        );

      return {
        scene: "bird",
        icon: "🐦",

        total,
        removed,

        text:
          `きの えだに とりが ${total}わ とまっています。\n` +
          `${removed}わが とんで いきました。\n` +
          `のこりは なんわ？`,

        key:
          `bird-${total}-${removed}`
      };
    },


    /* =====================================================
       公園
    ===================================================== */

    () => {

      const total =
        r(6, 12);

      const removed =
        r(
          1,
          Math.min(
            5,
            total - 1
          )
        );

      return {
        scene: "children",
        icon: "🧒",

        total,
        removed,

        text:
          `こうえんで ${total}にんが あそんでいます。\n` +
          `${removed}にんが おうちに かえりました。\n` +
          `のこりは なんにん？`,

        key:
          `children-${total}-${removed}`
      };
    },


    /* =====================================================
       クッキー
    ===================================================== */

    () => {

      const total =
        r(6, 12);

      const removed =
        r(
          1,
          Math.min(
            5,
            total - 1
          )
        );

      return {
        scene: "cookie",
        icon: "🍪",

        total,
        removed,

        text:
          `クッキーが ${total}こ あります。\n` +
          `${removed}こ たべました。\n` +
          `のこりは なんこ？`,

        key:
          `cookie-${total}-${removed}`
      };
    },


    /* =====================================================
       ケーキ
       2人に1個ずつ
    ===================================================== */

    () => {

      const total =
        r(4, 10);

      const removed = 2;

      return {
        scene: "cake",
        icon: "🍰",

        total,
        removed,

        text:
          `ケーキが ${total}こ あります。\n` +
          `たろうくんと はなこさんに、1こずつ わけました。\n` +
          `のこりは なんこ？`,

        key:
          `cake-share-${total}`
      };
    },


    /* =====================================================
       バス
    ===================================================== */

    () => {

      const total =
        r(7, 15);

      const removed =
        r(
          1,
          Math.min(
            6,
            total - 1
          )
        );

      return {
        scene: "bus",
        icon: "🚌",

        total,
        removed,

        text:
          `バスに ${total}にん のっています。\n` +
          `${removed}にんが バスを おりました。\n` +
          `のこりは なんにん？`,

        key:
          `bus-${total}-${removed}`
      };
    },

    () => {

  /* =====================================================
     新幹線

     3〜4だいが えきに とまっている
     そのうち 1〜2だいが しゅっぱつ

     新幹線の名前も毎回ランダム
  ===================================================== */

  const trains = [
    "こだま",
    "ひかり",
    "のぞみ",
    "さくら",
    "みずほ",
    "つばめ"
  ];


  /* =====================================================
     駅にいる台数

     文章が長くなりすぎないよう
     3〜4台にする
  ===================================================== */

  const total =
    r(3, 4);


  /* =====================================================
     新幹線をシャッフル
  ===================================================== */

  const shuffledTrains =
    [...trains];


  for (
    let i =
      shuffledTrains.length - 1;
    i > 0;
    i--
  ) {

    const j =
      r(0, i);


    [
      shuffledTrains[i],
      shuffledTrains[j]
    ] = [
      shuffledTrains[j],
      shuffledTrains[i]
    ];
  }


  /* 駅に止まっている新幹線 */

  const stoppedTrains =
    shuffledTrains.slice(
      0,
      total
    );


  /* =====================================================
     出発する台数

     3台なら基本1台
     4台なら1〜2台
  ===================================================== */

  const removed =
    total === 3
      ? 1
      : r(1, 2);


  /* =====================================================
     出発する新幹線もランダム
  ===================================================== */

  const leavingCandidates =
    [...stoppedTrains];


  for (
    let i =
      leavingCandidates.length - 1;
    i > 0;
    i--
  ) {

    const j =
      r(0, i);


    [
      leavingCandidates[i],
      leavingCandidates[j]
    ] = [
      leavingCandidates[j],
      leavingCandidates[i]
    ];
  }


  const leavingTrains =
    leavingCandidates.slice(
      0,
      removed
    );


  /* =====================================================
     名前を文章にする
  ===================================================== */

  const stoppedText =
    stoppedTrains.join("、");


  let leavingText = "";


  if (
    leavingTrains.length === 1
  ) {

    leavingText =
      leavingTrains[0];

  } else {

    leavingText =
      leavingTrains.join("と ");
  }


  return {

    scene:
      "train",

    icon:
      "🚄",

    total,

    removed,


    text:
      `${stoppedText}が えきに とまっています。\n` +
      `${leavingText}が しゅっぱつしました。\n` +
      `えきに のこっている しんかんせんは なんだい？`,


    key:
      `shinkansen-${total}-${removed}-${stoppedTrains.join("-")}-${leavingTrains.join("-")}`
  };
},

    /* =====================================================
       あめ
    ===================================================== */

    () => {

      const total =
        r(6, 12);

      const removed =
        r(
          1,
          Math.min(
            5,
            total - 1
          )
        );

      return {
        scene: "candy",
        icon: "🍬",

        total,
        removed,

        text:
          `あめが ${total}こ あります。\n` +
          `${removed}こ たべました。\n` +
          `のこりは なんこ？`,

        key:
          `candy-${total}-${removed}`
      };
    },


    /* =====================================================
       本
    ===================================================== */

    () => {

      const total =
        r(6, 12);

      const removed =
        r(
          1,
          Math.min(
            5,
            total - 1
          )
        );

      return {
        scene: "book",
        icon: "📚",

        total,
        removed,

        text:
          `ほんだなに ほんが ${total}さつ あります。\n` +
          `${removed}さつ かりました。\n` +
          `のこりは なんさつ？`,

        key:
          `book-${total}-${removed}`
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
    "subtraction_word_visual",


  keypad:
    "expression",


  guide:
    "しきから にゅうりょくしてね。",


  scene:
    q.scene,

  icon:
    q.icon,


  total:
    q.total,

  removed:
    q.removed,

  remaining:
    q.total -
    q.removed,


  prompt:
    q.text,


  answer:
    q.total -
    q.removed,


  expression: {

    left:
      q.total,

    operator:
      "-",

    right:
      q.removed,

    result:
      q.total -
      q.removed,

    /*
      引き算は順番固定
    */

    commutative:
      false
  },


  uniqueKey:
    `subtraction_word_${q.key}`
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