import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   共通
========================================================= */

function shuffle(array) {
  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j = r(0, i);

    [
      result[i],
      result[j]
    ] = [
      result[j],
      result[i]
    ];
  }

  return result;
}


function makeChoices(
  correct,
  wrongs
) {
  const values =
    shuffle([
      String(correct),
      ...wrongs.map(String)
    ]);

  const letters = [
    "A",
    "B",
    "C"
  ];

  const choices =
    values.map(
      (label, index) => ({
        id: letters[index],
        label
      })
    );

  const answer =
    choices.find(
      choice =>
        choice.label ===
        String(correct)
    )?.id;

  return {
    choices,
    answer
  };
}


function decimalFromTenths(
  tenths
) {
  return (
    tenths / 10
  ).toFixed(1);
}

/* =========================================================
   S2
   1をこえる小数

   数字入力式
========================================================= */

function buildOverOne() {

  const whole =
    r(1, 4);

  const tenths =
    r(1, 9);

  const value =
    `${whole}.${tenths}`;


  /*
    0 =
    4.2 は
    4 と 0.1が何こ？

    1 =
    4 と 0.1が2こ
    → あわせた数は？
  */

  const mode =
    r(0, 1);


  /* =====================================================
     パターン1

     4.2 は、
     4 と 0.1が □こ あつまった数
  ===================================================== */

  if (mode === 0) {

    return {

      kind:
        "decimal-over-one",

      mode:
        "count-tenths",

      whole,

      tenths,

      value,

      prompt:
        `${value} は、${whole} と\n0.1が なんこ あつまった数？`,

      guide:
        "小数点の右の数字に ちゅうもくしよう。",

      answer:
        tenths,

      uniqueKey:
        `decimal-over-one-count-${whole}-${tenths}`
    };
  }


  /* =====================================================
     パターン2

     3 と 0.1が7こあります。
     あわせた数は？
  ===================================================== */

  return {

    kind:
      "decimal-over-one",

    mode:
      "make-decimal",

    whole,

    tenths,

    value,

    prompt:
      `${whole} と 0.1が ${tenths}こ あります。\nあわせた数は？`,

    guide:
      `0.1が${tenths}こで 0.${tenths} です。`,

    answer:
      Number(value),

    uniqueKey:
      `decimal-over-one-make-${whole}-${tenths}`
  };
}
/* =========================================================
   S3
   小数と数直線

   1目盛り = 0.1
   ●の位置を数字入力
========================================================= */

function buildNumberline() {

  /*
    0～1
    1～2
    2～3

    のどれかを出す
  */

  const startWhole =
    r(0, 2);


  /*
    両端は答えにしない。
    途中の1～9目盛りを問題にする。
  */

  const offset =
    r(1, 9);


  const startTenths =
    startWhole * 10;


  const valueTenths =
    startTenths +
    offset;


  const value =
    decimalFromTenths(
      valueTenths
    );


  return {

    kind:
      "decimal-numberline",


    prompt:
      "●のところの数は？",


    guide:
      "1目もりは 0.1 です。",


    startWhole,


    startTenths,


    endTenths:
      startTenths + 10,


    valueTenths,


    value,


    answer:
      Number(value),


    uniqueKey:
      `decimal-numberline-${startWhole}-${offset}`
  };
}

/* =========================================================
   S4
   小数の大小

   ① いちばん大きい数
   ② いちばん小さい数
   ③ 小さい順
========================================================= */

function buildCompare() {

  const mode =
    r(0, 2);


  /* =====================================================
     共通
     3つの異なる数を作る

     整数も混ぜる
     例：
     1.8
     2
     2.3
  ===================================================== */

  const base =
    r(8, 27);

  let values = [
    base,
    base + r(1, 3),
    base + r(4, 6)
  ];


  /* 重複防止 */

  values =
    [...new Set(values)];


  while (
    values.length < 3
  ) {

    const candidate =
      r(5, 35);

    if (
      !values.includes(
        candidate
      )
    ) {
      values.push(
        candidate
      );
    }
  }


  /*
    10 → 1
    18 → 1.8
    20 → 2
  */

  const formatValue =
    tenths => {

      if (
        tenths % 10 === 0
      ) {
        return String(
          tenths / 10
        );
      }

      return (
        tenths / 10
      ).toFixed(1);
    };


  const labels =
    values.map(
      formatValue
    );


  /* =====================================================
     ① いちばん大きい数
  ===================================================== */

  if (mode === 0) {

    const shuffled =
      shuffle(
        labels
      );


    const largest =
      formatValue(
        Math.max(
          ...values
        )
      );


    const letters = [
      "A",
      "B",
      "C"
    ];


    const choices =
      shuffled.map(
        (label, index) => ({
          id:
            letters[index],

          label
        })
      );


    const answer =
      choices.find(
        choice =>
          choice.label ===
          largest
      ).id;


    return {

      kind:
        "decimal-compare",

      mode:
        "largest",

      prompt:
        "いちばん大きい数は どれ？",

      guide:
        "まず整数のぶぶんを見よう。",

      choices,

      answer,

      uniqueKey:
        `decimal-compare-largest-${values.join("-")}`
    };
  }


  /* =====================================================
     ② いちばん小さい数
  ===================================================== */

  if (mode === 1) {

    const shuffled =
      shuffle(
        labels
      );


    const smallest =
      formatValue(
        Math.min(
          ...values
        )
      );


    const letters = [
      "A",
      "B",
      "C"
    ];


    const choices =
      shuffled.map(
        (label, index) => ({
          id:
            letters[index],

          label
        })
      );


    const answer =
      choices.find(
        choice =>
          choice.label ===
          smallest
      ).id;


    return {

      kind:
        "decimal-compare",

      mode:
        "smallest",

      prompt:
        "いちばん小さい数は どれ？",

      guide:
        "まず整数のぶぶんを見よう。",

      choices,

      answer,

      uniqueKey:
        `decimal-compare-smallest-${values.join("-")}`
    };
  }


  /* =====================================================
     ③ 小さい順
  ===================================================== */

  const sorted =
    [...values]
      .sort(
        (a, b) =>
          a - b
      )
      .map(
        formatValue
      );


  const correct =
    sorted.join(
      " → "
    );


  const wrong1 = [
    sorted[1],
    sorted[0],
    sorted[2]
  ].join(
    " → "
  );


  const wrong2 = [
    sorted[2],
    sorted[1],
    sorted[0]
  ].join(
    " → "
  );


  const result =
    makeChoices(
      correct,
      [
        wrong1,
        wrong2
      ]
    );


  return {

    kind:
      "decimal-compare",

    mode:
      "order",

    prompt:
      "小さい順にならんでいるのは どれ？",

    guide:
      "左から、小さい数になるように見よう。",

    choices:
      result.choices,

    answer:
      result.answer,

    uniqueKey:
      `decimal-compare-order-${values.join("-")}`
  };
}

/* =========================================================
   S5
   小数の位

   1問目だけ位取りのお手本を表示
   2問目以降は自力問題
========================================================= */

let placeValueQuestionIndex = 0;


function buildPlaceValue() {

  /*
    10問を1セットとして扱う。

    0番目だけチュートリアル表示。
  */

  const slot =
    placeValueQuestionIndex % 10;

  placeValueQuestionIndex++;


  const showTutorial =
    slot === 0;


  /*
    本番問題で使う数。

    チュートリアルの24.63とは
    必ず別の数にする。
  */

  const whole =
    ((slot * 3 + 2) % 9) + 1;

  const tenths =
    ((slot * 5 + 4) % 9) + 1;

  const value =
    `${whole}.${tenths}`;


  /*
    3種類

    0:
    7.5 の5は何の位？

    1:
    4.6 の一の位の数字は？

    2:
    3.8 の10分の1の位の数字は？
  */

  const mode =
    slot % 3;


  /* =====================================================
     ① 数字が何の位か
  ===================================================== */

  if (mode === 0) {

    return {

      kind:
        "decimal-place-value",

      mode:
        "place-name",

      showTutorial,

      tutorialValue:
        "24.63",

      value,

      whole,

      tenths,

      prompt:
        `${value} の ${tenths} は\n何の位の数字？`,

      guide:
        showTutorial
          ? "上のお手本を見て、位のならびを考えよう。"
          : "小数点を手がかりに考えよう。",

      ...makeChoices(
        "10分の1の位",
        [
          "一の位",
          "10の位"
        ]
      ),

      uniqueKey:
        `decimal-place-name-${slot}-${whole}-${tenths}`
    };
  }


  /* =====================================================
     ② 一の位の数字
  ===================================================== */

  if (mode === 1) {

    const wrong1 =
      String(tenths);

    const wrong2 =
      String(
        whole === 9
          ? 8
          : whole + 1
      );


    return {

      kind:
        "decimal-place-value",

      mode:
        "whole-digit",

      showTutorial,

      tutorialValue:
        "24.63",

      value,

      whole,

      tenths,

      prompt:
        `${value} の\n一の位の数字は どれ？`,

      guide:
        showTutorial
          ? "上のお手本で、一の位の場所をたしかめよう。"
          : "小数点の左となりを見よう。",

      ...makeChoices(
        String(whole),
        [
          wrong1,
          wrong2
        ]
      ),

      uniqueKey:
        `decimal-place-whole-${slot}-${whole}-${tenths}`
    };
  }


  /* =====================================================
     ③ 10分の1の位の数字
  ===================================================== */

  const wrong1 =
    String(whole);

  const wrong2 =
    String(
      tenths === 9
        ? 8
        : tenths + 1
    );


  return {

    kind:
      "decimal-place-value",

    mode:
      "tenths-digit",

    showTutorial,

    tutorialValue:
      "24.63",

    value,

    whole,

    tenths,

    prompt:
      `${value} の\n10分の1の位の数字は どれ？`,

    guide:
      showTutorial
        ? "上のお手本で、10分の1の位をたしかめよう。"
        : "小数点の右となりを見よう。",

    ...makeChoices(
      String(tenths),
      [
        wrong1,
        wrong2
      ]
    ),

    uniqueKey:
      `decimal-place-tenths-${slot}-${whole}-${tenths}`
  };
}

/* =========================================================
   S4
   小数のたし算

   最初は繰り上がりなし
========================================================= */

function buildAdd() {

  /*
    0.x + 0.x
    または
    1.x + 0.x
  */

  const mode =
    r(0, 1);


  let aTenths;
  let bTenths;


  if (mode === 0) {

    aTenths =
      r(1, 7);

    bTenths =
      r(
        1,
        9 - aTenths
      );

  } else {

    const first =
      r(1, 7);

    const second =
      r(
        1,
        9 - first
      );

    aTenths =
      10 + first;

    bTenths =
      second;
  }


  const answerTenths =
    aTenths +
    bTenths;


  const a =
    decimalFromTenths(
      aTenths
    );

  const b =
    decimalFromTenths(
      bTenths
    );

  const answer =
    decimalFromTenths(
      answerTenths
    );


  return {

    kind:
      "decimal-calculation",

    operation:
      "add",

    prompt:
      "小数のたし算をしよう。",

    guide:
      "小数点の場所をそろえて考えよう。",

    left:
      a,

    symbol:
      "＋",

    right:
      b,

    label:
      `${a} ＋ ${b}`,

    answer:
      Number(answer),

    uniqueKey:
      `decimal-add-${aTenths}-${bTenths}`
  };
}


/* =========================================================
   S5
   小数のひき算

   最初は繰り下がりなし
========================================================= */

function buildSubtract() {

  const mode =
    r(0, 1);


  let aTenths;
  let bTenths;


  /* 0.x - 0.x */

  if (mode === 0) {

    aTenths =
      r(3, 9);

    bTenths =
      r(
        1,
        aTenths - 1
      );

  }


  /* 1.x - 0.x */

  else {

    const decimalPart =
      r(3, 9);

    aTenths =
      10 +
      decimalPart;

    bTenths =
      r(
        1,
        decimalPart
      );
  }


  const answerTenths =
    aTenths -
    bTenths;


  const a =
    decimalFromTenths(
      aTenths
    );

  const b =
    decimalFromTenths(
      bTenths
    );

  const answer =
    decimalFromTenths(
      answerTenths
    );


  return {

    kind:
      "decimal-calculation",

    operation:
      "subtract",

    prompt:
      "小数のひき算をしよう。",

    guide:
      "小数点の場所をそろえて考えよう。",

    left:
      a,

    symbol:
      "−",

    right:
      b,

    label:
      `${a} − ${b}`,

    answer:
      Number(answer),

    uniqueKey:
      `decimal-subtract-${aTenths}-${bTenths}`
  };
}


/* =========================================================
   S6
   小数の文章題
========================================================= */

function buildWord() {

  const patterns = [

    /* -----------------------------------------
       ジュース・たし算
    ----------------------------------------- */

    () => {

      const first =
        r(11, 15);

      const second =
        r(1, 4);

      const total =
        first +
        second;

      return {

        icon:
          "🥤",

        text:
          `ジュースが ${decimalFromTenths(first)}L あります。\n${decimalFromTenths(second)}L ふやしました。\nぜんぶで なんL でしょうか？`,

        answer:
          Number(
            decimalFromTenths(
              total
            )
          ),

        key:
          `juice-add-${first}-${second}`
      };
    },


    /* -----------------------------------------
       水・ひき算
    ----------------------------------------- */

    () => {

      const start =
        r(14, 19);

      const used =
        r(
          1,
          Math.min(
            5,
            start - 10
          )
        );

      const remain =
        start -
        used;

      return {

        icon:
          "💧",

        text:
          `水が ${decimalFromTenths(start)}L あります。\n${decimalFromTenths(used)}L つかいました。\nのこりは なんL でしょうか？`,

        answer:
          Number(
            decimalFromTenths(
              remain
            )
          ),

        key:
          `water-sub-${start}-${used}`
      };
    },


    /* -----------------------------------------
       リボン・たし算
    ----------------------------------------- */

    () => {

      const first =
        r(11, 15);

      const second =
        r(1, 4);

      const total =
        first +
        second;

      return {

        icon:
          "🎀",

        text:
          `リボンが ${decimalFromTenths(first)}m あります。\n${decimalFromTenths(second)}m つなぎました。\nぜんぶで なんm でしょうか？`,

        answer:
          Number(
            decimalFromTenths(
              total
            )
          ),

        key:
          `ribbon-add-${first}-${second}`
      };
    },


    /* -----------------------------------------
       テープ・ひき算
    ----------------------------------------- */

    () => {

      const start =
        r(14, 19);

      const used =
        r(
          1,
          Math.min(
            5,
            start - 10
          )
        );

      const remain =
        start -
        used;

      return {

        icon:
          "📏",

        text:
          `テープが ${decimalFromTenths(start)}m あります。\n${decimalFromTenths(used)}m つかいました。\nのこりは なんm でしょうか？`,

        answer:
          Number(
            decimalFromTenths(
              remain
            )
          ),

        key:
          `tape-sub-${start}-${used}`
      };
    }

  ];


  const pattern =
    patterns[
      r(
        0,
        patterns.length - 1
      )
    ];


  const q =
    pattern();


  return {

    kind:
      "decimal-word",

    icon:
      q.icon,

    prompt:
      q.text,

    answer:
      q.answer,

    uniqueKey:
      `decimal-word-${q.key}`
  };
}


/* =========================================================
   BOSS
========================================================= */

function buildBoss() {

  const roll =
    r(1, 10);


  /*
    S2
  */

  if (roll <= 2) {
    return buildOverOne();
  }


  /*
    S3
  */

  if (roll <= 4) {
    return buildCompare();
  }


  /*
    S4
  */

  if (roll <= 6) {
    return buildAdd();
  }


  /*
    S5
  */

  if (roll <= 8) {
    return buildSubtract();
  }


  /*
    S6
  */

  return buildWord();
}


/* =========================================================
   旧 decimal_mixed 互換
========================================================= */

function buildLegacyMixed() {

  const a =
    r(0, 50);

  const b =
    r(
      0,
      50
    );

  return {

    kind:
      "text",

    label:
      `${decimalFromTenths(a)} ＋ ${decimalFromTenths(b)}`,

    answer:
      (a + b) / 10,

    uniqueKey:
      `decimal-legacy-${a}-${b}`
  };
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
  "decimal_over_one",
  "decimal_numberline",
  "decimal_compare",
  "decimal_place_value",
  "decimal_add",
  "decimal_subtract",
  "decimal_word",
  "decimal_boss",
  "decimal_mixed"
],

  build(stage) {
  switch (stage.type) {

    case "decimal_over_one":
      return buildOverOne();

    case "decimal_numberline":
      return buildNumberline();

    case "decimal_compare":
      return buildCompare();

    case "decimal_place_value":
      return buildPlaceValue();

    case "decimal_add":
      return buildAdd();

    case "decimal_subtract":
      return buildSubtract();

    case "decimal_word":
      return buildWord();

    case "decimal_boss":
      return buildBoss();

    case "decimal_mixed":
      return buildLegacyMixed();

    default:
      throw new Error(
        `Unsupported decimal type: ${stage.type}`
      );
  }
}
};