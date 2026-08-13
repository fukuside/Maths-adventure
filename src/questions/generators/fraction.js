import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数
   旧互換 + BOSS
========================================================= */


/* =========================================================
   S旧互換
========================================================= */

function buildSameDenominator(stage) {

  const denominator =
    Number(stage?.denominator) || 4;


  const leftNumerator =
    r(
      1,
      denominator - 1
    );


  const rightNumerator =
    r(
      0,
      denominator - leftNumerator
    );


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

    answer:
      leftNumerator +
      rightNumerator,

    uniqueKey:
      `fraction-legacy-add-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   BOSS用 足し算
========================================================= */

function buildBossAdd() {

  const denominators =
    [3, 4, 5, 6, 7, 8];


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


  const rightNumerator =
    r(
      0,
      denominator - leftNumerator
    );


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

    answer:
      leftNumerator +
      rightNumerator,

    uniqueKey:
      `fraction-boss-add-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   BOSS用 引き算
========================================================= */

function buildBossSubtract() {

  const denominators =
    [3, 4, 5, 6, 7, 8];


  const denominator =
    denominators[
      r(
        0,
        denominators.length - 1
      )
    ];


  const leftNumerator =
    r(
      2,
      denominator
    );


  const rightNumerator =
    r(
      1,
      leftNumerator - 1
    );


  return {

    kind:
      "fraction-subtract-same-denominator",

    mode:
      "calculation",

    prompt:
      "□ に はいる 数は？",

    guide:
      "分母が同じときは、分子どうしをひこう。",

    leftNumerator,

    rightNumerator,

    denominator,

    answer:
      leftNumerator -
      rightNumerator,

    uniqueKey:
      `fraction-boss-sub-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   BOSS

   まずは計算を
   足し算・引き算で混ぜる
========================================================= */

function buildMixed() {

  const mode =
    r(0, 1);


  if (
    mode === 0
  ) {
    return buildBossAdd();
  }


  return buildBossSubtract();
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_same_denominator",
    "fraction_mixed"
  ],


  build(stage) {

    if (
      stage.type ===
      "fraction_same_denominator"
    ) {

      return buildSameDenominator(
        stage
      );
    }


    if (
      stage.type ===
      "fraction_mixed"
    ) {

      return buildMixed();
    }


    throw new Error(
      `Unsupported fraction type: ${stage.type}`
    );
  }
};