import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数 S5
   同分母の足し算
========================================================= */


function buildFractionAddition() {

  const denominators =
    [3, 4, 5, 6, 7, 8];


  const denominator =
    denominators[
      r(
        0,
        denominators.length - 1
      )
    ];


  /*
    答えが1を超えすぎないようにする
  */

  const leftNumerator =
    r(
      1,
      denominator - 2
    );


  const maxRight =
    Math.max(
      1,
      denominator - leftNumerator
    );


  const rightNumerator =
    r(
      1,
      maxRight
    );


  const answer =
    leftNumerator +
    rightNumerator;


  return {

    kind:
      "fraction-add-same-denominator",

    prompt:
      "□ に はいる 数は？",

    guide:
      "分母が同じときは、分子どうしをたそう。",

    leftNumerator,

    rightNumerator,

    denominator,

    answer,

    uniqueKey:
      `fraction-add-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_add_same_denominator"
  ],


  build() {

    return buildFractionAddition();
  }
};