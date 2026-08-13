import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数 S4
   分数の大小
   図なし・数字中心
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
   分数比較
========================================================= */

function compareFractions(
  leftNumerator,
  leftDenominator,
  rightNumerator,
  rightDenominator
) {

  const left =
    leftNumerator *
    rightDenominator;

  const right =
    rightNumerator *
    leftDenominator;


  if (left > right) {
    return "A";
  }

  if (left < right) {
    return "C";
  }

  return "B";
}


/* =========================================================
   共通問題
========================================================= */

function makeQuestion({
  leftNumerator,
  leftDenominator,
  rightNumerator,
  rightDenominator,
  pattern
}) {

  const leftLabel =
    `${leftNumerator}/${leftDenominator}`;

  const rightLabel =
    `${rightNumerator}/${rightDenominator}`;


  return {
    kind:
      "fraction-compare-number",

    pattern,

    prompt:
      "大きい分数は どっち？",

    guide:
      "分子と分母に注目してくらべよう。",

    leftNumerator,
    leftDenominator,

    rightNumerator,
    rightDenominator,

    leftLabel,
    rightLabel,

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

    answer:
      compareFractions(
        leftNumerator,
        leftDenominator,
        rightNumerator,
        rightDenominator
      ),

    uniqueKey:
      `fraction-number-${pattern}-${leftNumerator}-${leftDenominator}-${rightNumerator}-${rightDenominator}`
  };
}


/* =========================================================
   同分母
========================================================= */

function buildSameDenominator() {

  const denominator =
    [3, 4, 5, 6][
      r(0, 3)
    ];


  let leftNumerator =
    r(
      1,
      denominator - 1
    );


  let rightNumerator =
    r(
      1,
      denominator - 1
    );


  if (
    rightNumerator ===
    leftNumerator
  ) {

    rightNumerator =
      rightNumerator ===
      denominator - 1
        ? 1
        : rightNumerator + 1;
  }


  return makeQuestion({
    pattern:
      "same-denominator",

    leftNumerator,

    leftDenominator:
      denominator,

    rightNumerator,

    rightDenominator:
      denominator
  });
}


/* =========================================================
   同分子
========================================================= */

function buildSameNumerator() {

  const numerator =
    r(1, 3);


  const pairs = [
    [2, 3],
    [2, 4],
    [3, 4],
    [3, 5],
    [4, 5],
    [4, 6],
    [5, 6]
  ];


  let pair =
    pairs[
      r(
        0,
        pairs.length - 1
      )
    ];


  /*
    分子より分母が大きくなるものだけ
  */

  const valid =
    pairs.filter(
      ([a, b]) =>
        a > numerator &&
        b > numerator
    );


  pair =
    valid[
      r(
        0,
        valid.length - 1
      )
    ];


  const reverse =
    r(0, 1) === 1;


  return makeQuestion({
    pattern:
      "same-numerator",

    leftNumerator:
      numerator,

    leftDenominator:
      reverse
        ? pair[1]
        : pair[0],

    rightNumerator:
      numerator,

    rightDenominator:
      reverse
        ? pair[0]
        : pair[1]
  });
}


/* =========================================================
   比較しやすい異分母
========================================================= */

function buildMixed() {

  const pairs = [
    [1, 2, 2, 3],
    [1, 2, 3, 4],
    [2, 3, 3, 4],
    [2, 5, 1, 3],
    [3, 5, 2, 3],
    [3, 4, 4, 5],
    [4, 5, 5, 6]
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
        selected[2],

      leftDenominator:
        selected[3],

      rightNumerator:
        selected[0],

      rightDenominator:
        selected[1]
    });
  }


  return makeQuestion({
    pattern:
      "mixed",

    leftNumerator:
      selected[0],

    leftDenominator:
      selected[1],

    rightNumerator:
      selected[2],

    rightDenominator:
      selected[3]
  });
}


/* =========================================================
   同じ大きさ
========================================================= */

function buildEquivalent() {

  const pairs = [
    [1, 2, 2, 4],
    [1, 2, 3, 6],
    [1, 3, 2, 6],
    [2, 3, 4, 6]
  ];


  const selected =
    pairs[
      r(
        0,
        pairs.length - 1
      )
    ];


  return makeQuestion({
    pattern:
      "equivalent",

    leftNumerator:
      selected[0],

    leftDenominator:
      selected[1],

    rightNumerator:
      selected[2],

    rightDenominator:
      selected[3]
  });
}


/* =========================================================
   出題パターン
========================================================= */

const patternBag = [
  "same-denominator",
  "same-denominator",
  "same-denominator",

  "same-numerator",
  "same-numerator",
  "same-numerator",

  "mixed",
  "mixed",
  "mixed",

  "equivalent"
];


let bag = [];


function nextPattern() {

  if (
    bag.length === 0
  ) {
    bag =
      shuffle(patternBag);
  }

  return bag.shift();
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_compare_number"
  ],


  build() {

    const pattern =
      nextPattern();


    switch (pattern) {

      case "same-numerator":
        return buildSameNumerator();

      case "mixed":
        return buildMixed();

      case "equivalent":
        return buildEquivalent();

      case "same-denominator":
      default:
        return buildSameDenominator();
    }
  }
};