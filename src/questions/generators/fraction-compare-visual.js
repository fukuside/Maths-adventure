import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   S2
   分数の大きさ

   4種類を混ぜる

   ① 同分母
   ② 同分子・異分母
   ③ 同じ大きさ
   ④ 分子・分母とも違う
========================================================= */


/* =========================================================
   出題パターン袋

   10問でだいたい
   same-denominator × 3
   same-numerator   × 3
   equivalent       × 2
   mixed            × 2
========================================================= */

let patternBag = [];


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


function nextPattern() {

  if (
    patternBag.length === 0
  ) {

    patternBag =
      shuffle([
        "same-denominator",
        "same-denominator",
        "same-denominator",

        "same-numerator",
        "same-numerator",
        "same-numerator",

        "equivalent",
        "equivalent",

        "mixed",
        "mixed"
      ]);
  }

  return patternBag.shift();
}


/* =========================================================
   分数比較
========================================================= */

function compareFractions(
  leftNumerator,
  leftDenominator,
  rightNumerator,
  rightDenominator
) {

  const leftValue =
    leftNumerator /
    leftDenominator;

  const rightValue =
    rightNumerator /
    rightDenominator;


  if (
    Math.abs(
      leftValue -
      rightValue
    ) < 0.000001
  ) {

    return "B";
  }


  if (
    leftValue >
    rightValue
  ) {

    return "A";
  }


  return "C";
}


/* =========================================================
   共通RETURN
========================================================= */

function makeQuestion({
  pattern,
  leftNumerator,
  leftDenominator,
  rightNumerator,
  rightDenominator,
  guide
}) {

  const leftLabel =
    `${leftNumerator}/${leftDenominator}`;


  const rightLabel =
    `${rightNumerator}/${rightDenominator}`;


  const answer =
    compareFractions(
      leftNumerator,
      leftDenominator,
      rightNumerator,
      rightDenominator
    );


  return {

    kind:
      "fraction-compare-visual",

    pattern,

    prompt:
      "どちらの分数が 大きい？",

    guide,

    leftNumerator,

    leftDenominator,

    rightNumerator,

    rightDenominator,

    leftLabel,

    rightLabel,


    /*
      下の大きいA/B/Cパッドと対応

      A = 左
      B = おなじ
      C = 右
    */

    choices: [
      {
        id: "A",
        label: "左の分数"
      },

      {
        id: "B",
        label: "おなじ"
      },

      {
        id: "C",
        label: "右の分数"
      }
    ],

    answer,

    uniqueKey:
      `fraction-compare-${pattern}-${leftNumerator}-${leftDenominator}-${rightNumerator}-${rightDenominator}`
  };
}


/* =========================================================
   ① 同分母

   例
   2/5 と 4/5
========================================================= */

function buildSameDenominator() {

  const denominators =
    [3, 4, 5, 6];

  const denominator =
    denominators[
      r(
        0,
        denominators.length - 1
      )
    ];


  const leftNumerator =
    r(
      1,
      denominator - 1
    );


  const candidates = [];

  for (
    let n = 1;
    n < denominator;
    n++
  ) {

    if (
      n !== leftNumerator
    ) {
      candidates.push(n);
    }
  }


  const rightNumerator =
    candidates[
      r(
        0,
        candidates.length - 1
      )
    ];


  return makeQuestion({

    pattern:
      "same-denominator",

    leftNumerator,

    leftDenominator:
      denominator,

    rightNumerator,

    rightDenominator:
      denominator,

    guide:
      "同じ大きさに分けています。色がついているところをくらべよう。"
  });
}


/* =========================================================
   ② 同分子・異分母

   例
   1/3 と 1/5

   「分母が大きいほど1こ分は小さい」
   を図で理解する
========================================================= */

function buildSameNumerator() {

  const denominatorPairs = [
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 4],
    [3, 5],
    [3, 6],
    [4, 5],
    [4, 6],
    [5, 6]
  ];


  const pair =
    denominatorPairs[
      r(
        0,
        denominatorPairs.length - 1
      )
    ];


  /*
    同分子で真分数になるように
    小さい方の分母未満まで
  */

  const maxNumerator =
    Math.min(
      pair[0],
      pair[1]
    ) - 1;


  const numerator =
    r(
      1,
      Math.max(
        1,
        maxNumerator
      )
    );


  /*
    左右をランダム入れ替え
  */

  const reverse =
    r(0, 1) === 1;


  const leftDenominator =
    reverse
      ? pair[1]
      : pair[0];


  const rightDenominator =
    reverse
      ? pair[0]
      : pair[1];


  return makeQuestion({

    pattern:
      "same-numerator",

    leftNumerator:
      numerator,

    leftDenominator,

    rightNumerator:
      numerator,

    rightDenominator,

    guide:
      "同じ数だけ色がついています。何こに分けたかにも注目しよう。"
  });
}


/* =========================================================
   ③ 同じ大きさ

   例
   1/2 と 2/4
   1/3 と 2/6
   2/3 と 4/6
========================================================= */

function buildEquivalent() {

  const pairs = [

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
    }
  ];


  const selected =
    pairs[
      r(
        0,
        pairs.length - 1
      )
    ];


  /*
    左右をランダム入れ替え
  */

  const reverse =
    r(0, 1) === 1;


  if (reverse) {

    return makeQuestion({

      pattern:
        "equivalent",

      leftNumerator:
        selected.rightNumerator,

      leftDenominator:
        selected.rightDenominator,

      rightNumerator:
        selected.leftNumerator,

      rightDenominator:
        selected.leftDenominator,

      guide:
        "分け方がちがっても、色のついた大きさが同じことがあります。"
    });
  }


  return makeQuestion({

    pattern:
      "equivalent",

    ...selected,

    guide:
      "分け方がちがっても、色のついた大きさが同じことがあります。"
  });
}


/* =========================================================
   ④ 分子・分母とも違う

   計算や通分はさせず
   図を見て判断できる組み合わせだけ
========================================================= */

function buildMixed() {

  const pairs = [

    {
      leftNumerator: 1,
      leftDenominator: 2,
      rightNumerator: 2,
      rightDenominator: 3
    },

    {
      leftNumerator: 1,
      leftDenominator: 2,
      rightNumerator: 3,
      rightDenominator: 4
    },

    {
      leftNumerator: 2,
      leftDenominator: 3,
      rightNumerator: 3,
      rightDenominator: 5
    },

    {
      leftNumerator: 1,
      leftDenominator: 3,
      rightNumerator: 2,
      rightDenominator: 5
    },

    {
      leftNumerator: 3,
      leftDenominator: 4,
      rightNumerator: 4,
      rightDenominator: 6
    },

    {
      leftNumerator: 2,
      leftDenominator: 5,
      rightNumerator: 1,
      rightDenominator: 3
    },

    {
      leftNumerator: 3,
      leftDenominator: 5,
      rightNumerator: 2,
      rightDenominator: 3
    },

    {
      leftNumerator: 4,
      leftDenominator: 5,
      rightNumerator: 5,
      rightDenominator: 6
    }
  ];


  const selected =
    pairs[
      r(
        0,
        pairs.length - 1
      )
    ];


  const reverse =
    r(0, 1) === 1;


  if (reverse) {

    return makeQuestion({

      pattern:
        "mixed",

      leftNumerator:
        selected.rightNumerator,

      leftDenominator:
        selected.rightDenominator,

      rightNumerator:
        selected.leftNumerator,

      rightDenominator:
        selected.leftDenominator,

      guide:
        "分けた数も、色がついている数もちがいます。図全体の大きさをくらべよう。"
    });
  }


  return makeQuestion({

    pattern:
      "mixed",

    ...selected,

    guide:
      "分けた数も、色がついている数もちがいます。図全体の大きさをくらべよう。"
  });
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_compare_visual"
  ],


  build() {

    const pattern =
      nextPattern();


    switch (pattern) {

      case "same-numerator":
        return buildSameNumerator();


      case "equivalent":
        return buildEquivalent();


      case "mixed":
        return buildMixed();


      case "same-denominator":
      default:
        return buildSameDenominator();
    }
  }
};