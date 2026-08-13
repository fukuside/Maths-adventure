import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数 S3
   同じ大きさの分数
========================================================= */


/* =========================================================
   シャッフル
========================================================= */

function shuffle(array) {

  const result =
    [...array];


  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      r(0, i);


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


/* =========================================================
   分数が同じ大きさか判定
========================================================= */

function isEquivalent(
  a,
  b,
  c,
  d
) {

  /*
    a/b と c/d を
    小数にせず掛け算で比較
  */

  return (
    a * d ===
    c * b
  );
}


/* =========================================================
   問題候補

   左右のバー全体は
   必ず同じ長さで描画する
========================================================= */

const QUESTION_PAIRS = [

  /* -------------------------
     同じ大きさ
  ------------------------- */

  {
    leftNumerator: 1,
    leftDenominator: 2,
    rightNumerator: 2,
    rightDenominator: 4
  },

  {
    leftNumerator: 1,
    leftDenominator: 2,
    rightNumerator: 3,
    rightDenominator: 6
  },

  {
    leftNumerator: 1,
    leftDenominator: 3,
    rightNumerator: 2,
    rightDenominator: 6
  },

  {
    leftNumerator: 2,
    leftDenominator: 3,
    rightNumerator: 4,
    rightDenominator: 6
  },

  {
    leftNumerator: 1,
    leftDenominator: 4,
    rightNumerator: 2,
    rightDenominator: 8
  },

  {
    leftNumerator: 3,
    leftDenominator: 4,
    rightNumerator: 6,
    rightDenominator: 8
  },


  /* -------------------------
     大きさが違う
  ------------------------- */

  {
    leftNumerator: 1,
    leftDenominator: 2,
    rightNumerator: 2,
    rightDenominator: 6
  },

  {
    leftNumerator: 1,
    leftDenominator: 3,
    rightNumerator: 3,
    rightDenominator: 6
  },

  {
    leftNumerator: 2,
    leftDenominator: 4,
    rightNumerator: 4,
    rightDenominator: 6
  },

  {
    leftNumerator: 2,
    leftDenominator: 3,
    rightNumerator: 3,
    rightDenominator: 6
  },

  {
    leftNumerator: 1,
    leftDenominator: 4,
    rightNumerator: 3,
    rightDenominator: 8
  },

  {
    leftNumerator: 3,
    leftDenominator: 4,
    rightNumerator: 5,
    rightDenominator: 8
  }
];


/* =========================================================
   問題生成
========================================================= */

function buildEquivalentFraction() {

  const selected =
    QUESTION_PAIRS[
      r(
        0,
        QUESTION_PAIRS.length - 1
      )
    ];


  /*
    左右をたまに反転して
    同じ表示順ばかりにならないようにする
  */

  const reverse =
    r(0, 1) === 1;


  let leftNumerator;
  let leftDenominator;
  let rightNumerator;
  let rightDenominator;


  if (reverse) {

    leftNumerator =
      selected.rightNumerator;

    leftDenominator =
      selected.rightDenominator;

    rightNumerator =
      selected.leftNumerator;

    rightDenominator =
      selected.leftDenominator;

  } else {

    leftNumerator =
      selected.leftNumerator;

    leftDenominator =
      selected.leftDenominator;

    rightNumerator =
      selected.rightNumerator;

    rightDenominator =
      selected.rightDenominator;
  }


  const same =
    isEquivalent(
      leftNumerator,
      leftDenominator,
      rightNumerator,
      rightDenominator
    );


  const leftLabel =
    `${leftNumerator}/${leftDenominator}`;


  const rightLabel =
    `${rightNumerator}/${rightDenominator}`;


  /*
    S3は
    「同じ大きさかどうか」
    を判断する問題。

    A = おなじ
    B = ちがう

    でも2択だけだと当てずっぽうになりやすいので
    Cに「わからない」は入れません。

    代わりに
    A/B/Cで3つの説明を選ばせます。
  */


  const correctLabel =
    same
      ? "同じ大きさ"
      : "ちがう大きさ";


  const distractors =
    same
      ? [
          "左のほうが大きい",
          "右のほうが大きい"
        ]
      : (
          leftNumerator / leftDenominator >
          rightNumerator / rightDenominator
            ? [
                "同じ大きさ",
                "右のほうが大きい"
              ]
            : [
                "同じ大きさ",
                "左のほうが大きい"
              ]
        );


  const labels =
    shuffle([
      correctLabel,
      ...distractors
    ]);


  const letters =
    ["A", "B", "C"];


  const choices =
    labels.map(
      (label, index) => ({
        id: letters[index],
        label
      })
    );


  const answer =
    choices.find(
      choice =>
        choice.label === correctLabel
    )?.id;

 return {

  kind:
    "fraction-equivalent-visual",

  prompt:
    "2つの分数は 同じ大きさ？",

  guide:
    "分け方がちがっても、色のついた大きさに注目しよう。",

  leftNumerator,
  leftDenominator,

  rightNumerator,
  rightDenominator,

  leftLabel,
  rightLabel,

  choices,

  answer,

  uniqueKey:
    `fraction-equivalent-${leftNumerator}-${leftDenominator}-${rightNumerator}-${rightDenominator}`
};
}

/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_equivalent"
  ],


  build() {

    return buildEquivalentFraction();
  }
};