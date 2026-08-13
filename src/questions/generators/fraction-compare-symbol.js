import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数 S4
   分数の大小

   小学4年生向け
   ＜ ＝ ＞ を選ぶ
========================================================= */


/* =========================================================
   シャッフル
========================================================= */

function shuffle(array) {

  const result = [...array];

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
   比較

   内部判定では掛け算を使うが、
   子どもにはこの計算をさせない
========================================================= */

function compareFraction(
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


  if (left < right) {
    return "<";
  }

  if (left > right) {
    return ">";
  }

  return "=";
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
  leftIsWhole = false,
  rightIsWhole = false,
  guide
}) {

  const leftLabel =
    leftIsWhole
      ? String(leftNumerator)
      : `${leftNumerator}/${leftDenominator}`;


  const rightLabel =
    rightIsWhole
      ? String(rightNumerator)
      : `${rightNumerator}/${rightDenominator}`;


  const symbol =
    compareFraction(
      leftNumerator,
      leftDenominator,
      rightNumerator,
      rightDenominator
    );


  let answer = "B";

  if (symbol === "<") {
    answer = "A";
  }

  if (symbol === ">") {
    answer = "C";
  }


  return {

    kind:
      "fraction-compare-symbol",

    pattern,

    prompt:
      "□ に はいる きごうは どれ？",

    guide,

    leftNumerator,
    leftDenominator,

    rightNumerator,
    rightDenominator,

    leftLabel,
    rightLabel,

    choices: [
      {
        id: "A",
        label: "＜"
      },

      {
        id: "B",
        label: "＝"
      },

      {
        id: "C",
        label: "＞"
      }
    ],

    answer,

    uniqueKey:
      `fraction-symbol-${pattern}-${leftLabel}-${rightLabel}`
  };
}


/* =========================================================
   ① 同分母

   2/5 □ 4/5
========================================================= */

function buildSameDenominator() {

  const denominator =
    [3, 4, 5, 6, 7, 8][
      r(0, 5)
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
    leftNumerator ===
    rightNumerator
  ) {

    rightNumerator =
      rightNumerator ===
      denominator - 1
        ? rightNumerator - 1
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
      denominator,

    guide:
      "分母が同じときは、分子に注目しよう。"
  });
}


/* =========================================================
   ② 同分子

   2/3 □ 2/5
========================================================= */

function buildSameNumerator() {

  const candidates = [

    [1, 2, 3],
    [1, 3, 4],
    [1, 3, 5],
    [1, 4, 5],

    [2, 3, 4],
    [2, 3, 5],
    [2, 4, 5],
    [2, 4, 6],

    [3, 4, 5],
    [3, 5, 6]
  ];


  const selected =
    candidates[
      r(
        0,
        candidates.length - 1
      )
    ];


  const numerator =
    selected[0];


  let leftDenominator =
    selected[1];


  let rightDenominator =
    selected[2];


  if (
    r(0, 1) === 1
  ) {

    [
      leftDenominator,
      rightDenominator
    ] = [
      rightDenominator,
      leftDenominator
    ];
  }


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
      "分子が同じときは、1こ分の大きさを考えよう。"
  });
}


/* =========================================================
   ③ 1との比較

   3/4 □ 1
   5/4 □ 1
========================================================= */

function buildCompareWithOne() {

  const denominator =
    [2, 3, 4, 5, 6][
      r(0, 4)
    ];


  const type =
    r(0, 2);


  let numerator;


  /*
    0 = 1より小さい
    1 = 1と同じ
    2 = 1より大きい
  */

  if (type === 0) {

    numerator =
      r(
        1,
        denominator - 1
      );

  } else if (type === 1) {

    numerator =
      denominator;

  } else {

    numerator =
      denominator +
      r(1, 3);
  }


  const reverse =
    r(0, 1) === 1;


  if (reverse) {

    return makeQuestion({

      pattern:
        "compare-one",

      leftNumerator:
        1,

      leftDenominator:
        1,

      rightNumerator:
        numerator,

      rightDenominator:
        denominator,

      leftIsWhole:
        true,

      guide:
        "分子と分母を見て、1より大きいか小さいか考えよう。"
    });
  }


  return makeQuestion({

    pattern:
      "compare-one",

    leftNumerator:
      numerator,

    leftDenominator:
      denominator,

    rightNumerator:
      1,

    rightDenominator:
      1,

    rightIsWhole:
      true,

    guide:
      "分子と分母を見て、1より大きいか小さいか考えよう。"
  });
}


/* =========================================================
   ④ 同じ大きさ

   1/2 □ 2/4
========================================================= */

function buildEquivalent() {

  const pairs = [

    [1, 2, 2, 4],

    [1, 2, 3, 6],

    [1, 3, 2, 6],

    [2, 3, 4, 6],

    [1, 4, 2, 8],

    [3, 4, 6, 8]
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
        "equivalent",

      leftNumerator:
        selected[2],

      leftDenominator:
        selected[3],

      rightNumerator:
        selected[0],

      rightDenominator:
        selected[1],

      guide:
        "分け方がちがっても、同じ大きさになる分数があります。"
    });
  }


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
      selected[3],

    guide:
      "分け方がちがっても、同じ大きさになる分数があります。"
  });
}


/* =========================================================
   10問の構成

   同分母      3問
   同分子      3問
   1との比較   2問
   等価分数    2問
========================================================= */

let patternBag = [];


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

        "compare-one",
        "compare-one",

        "equivalent",
        "equivalent"
      ]);
  }


  return patternBag.shift();
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_compare_symbol"
  ],


  build() {

    const pattern =
      nextPattern();


    switch (pattern) {

      case "same-numerator":
        return buildSameNumerator();


      case "compare-one":
        return buildCompareWithOne();


      case "equivalent":
        return buildEquivalent();


      case "same-denominator":
      default:
        return buildSameDenominator();
    }
  }
};