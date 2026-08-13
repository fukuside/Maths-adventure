import {
  randomInt as r
} from "../helpers.js";


/* =========================================================
   WORLD4 分数 S6
   同分母の引き算＋文章題
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
   計算問題
========================================================= */

function buildCalculation() {

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


  const answer =
    leftNumerator -
    rightNumerator;


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

    answer,

    uniqueKey:
      `fraction-subtract-calc-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   文章題
========================================================= */

const wordPatterns = [

  {
    icon: "🍕",

    build({
      leftNumerator,
      rightNumerator,
      denominator
    }) {

      return (
        `ピザが ${denominator}こに分けてあり、` +
        `${leftNumerator}/${denominator} こ分 ありました。\n` +
        `${rightNumerator}/${denominator} こ分 食べました。\n` +
        `のこりは 何こ分？`
      );
    }
  },


  {
    icon: "🍫",

    build({
      leftNumerator,
      rightNumerator,
      denominator
    }) {

      return (
        `チョコを ${denominator}こに分けました。\n` +
        `${leftNumerator}/${denominator} こ分 あり、` +
        `${rightNumerator}/${denominator} こ分 食べました。\n` +
        `のこりは 何こ分？`
      );
    }
  },


  {
    icon: "🎂",

    build({
      leftNumerator,
      rightNumerator,
      denominator
    }) {

      return (
        `ケーキを ${denominator}こに分けました。\n` +
        `${leftNumerator}/${denominator} こ分 ありました。\n` +
        `${rightNumerator}/${denominator} こ分 食べました。\n` +
        `のこりは 何こ分？`
      );
    }
  },


  {
    icon: "🍎",

    build({
      leftNumerator,
      rightNumerator,
      denominator
    }) {

      return (
        `りんごを ${denominator}こに分けたうち、` +
        `${leftNumerator}/${denominator} こ分 ありました。\n` +
        `${rightNumerator}/${denominator} こ分 使いました。\n` +
        `のこりは 何こ分？`
      );
    }
  }
];


function buildWordProblem() {

  const denominators =
    [4, 5, 6, 8];


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


  const answer =
    leftNumerator -
    rightNumerator;


  const patternIndex =
    r(
      0,
      wordPatterns.length - 1
    );


  const pattern =
    wordPatterns[
      patternIndex
    ];


  return {

    kind:
      "fraction-subtract-same-denominator",

    mode:
      "word",

    prompt:
      "文章を読んで考えよう",

    guide:
      "同じ大きさに分けたものなので、分子どうしをひこう。",

    icon:
      pattern.icon,

    wordText:
      pattern.build({
        leftNumerator,
        rightNumerator,
        denominator
      }),

    leftNumerator,

    rightNumerator,

    denominator,

    answer,

    uniqueKey:
      `fraction-subtract-word-${patternIndex}-${leftNumerator}-${rightNumerator}-${denominator}`
  };
}


/* =========================================================
   10問構成

   計算 6問
   文章 4問
========================================================= */

let bag = [];


function nextMode() {

  if (
    bag.length === 0
  ) {

    bag =
      shuffle([
        "calc",
        "calc",
        "calc",
        "calc",
        "calc",
        "calc",

        "word",
        "word",
        "word",
        "word"
      ]);
  }


  return bag.shift();
}


/* =========================================================
   EXPORT
========================================================= */

export default {

  types: [
    "fraction_subtract_same_denominator"
  ],


  build() {

    const mode =
      nextMode();


    if (
      mode === "word"
    ) {
      return buildWordProblem();
    }


    return buildCalculation();
  }
};