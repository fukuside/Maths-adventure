import {
  randomInt as r
} from "../helpers.js";


let patternBag = [];


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


function nextPattern() {
  if (patternBag.length === 0) {
    patternBag = shuffle([
      "tenths-grid",
      "count-tenths",
      "one-tenth",
      "match-picture",
      "number-line"
    ]);
  }

  return patternBag.shift();
}


function makeChoices(
  correct,
  wrongs
) {
  const values = shuffle([
    correct,
    ...wrongs
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
        choice.label === correct
    ).id;

  return {
    choices,
    answer
  };
}


function decimalLabel(
  tenths
) {
  return `0.${tenths}`;
}


function buildTenthsGrid() {
  const filled = r(1, 9);

  const correct =
    decimalLabel(filled);

  const wrong1 =
    decimalLabel(
      filled === 9
        ? 8
        : filled + 1
    );

  const wrong2 =
    decimalLabel(
      filled === 1
        ? 2
        : filled - 1
    );

  return {
    prompt:
      "10このうち、色がついているぶんを 小数であらわすと？",

    guide:
      `10こに分けたうち、${filled}こに色がついています。`,

    visual: {
      mode: "tenths-grid",
      filled
    },

    ...makeChoices(
      correct,
      [wrong1, wrong2]
    ),

    uniqueKey:
      `decimal-grid-${filled}`
  };
}


function buildCountTenths() {
  const count = r(2, 9);

  const correct =
    `${count}こ`;

  const wrong1 =
    `${count === 9
      ? 8
      : count + 1}こ`;

  const wrong2 =
    `${count === 2
      ? 1
      : count - 1}こ`;

  return {
    prompt:
      `${decimalLabel(count)} は、0.1が 何こぶん？`,

    guide:
      "小数点の右の数字に ちゅうもくしよう。",

    visual: {
      mode: "count-tenths",
      count
    },

    ...makeChoices(
      correct,
      [wrong1, wrong2]
    ),

    uniqueKey:
      `decimal-count-${count}`
  };
}


function buildOneTenth() {
  return {
    prompt:
      "1を 10こに おなじ大きさに分けた、1こぶんは？",

    guide:
      "1を10等分した1つ分を、0.1といいます。",

    visual: {
      mode: "one-tenth"
    },

    ...makeChoices(
      "0.1",
      [
        "1.0",
        "0.01"
      ]
    ),

    uniqueKey:
      "decimal-one-tenth"
  };
}


function buildMatchPicture() {
  const filled = r(2, 8);

  const correct =
    decimalLabel(filled);

  const wrong1 =
    `${filled}.0`;

  const wrong2 =
    decimalLabel(
      filled === 8
        ? 7
        : filled + 1
    );

  return {
    prompt:
      "この図に合う小数は？",

    guide:
      "10こに分けたうち、色がついた数を見よう。",

    visual: {
      mode: "match-picture",
      filled
    },

    ...makeChoices(
      correct,
      [wrong1, wrong2]
    ),

    uniqueKey:
      `decimal-match-${filled}`
  };
}


function buildNumberLine() {
  const value = r(1, 9);

  const correct =
    decimalLabel(value);

  const wrong1 =
    decimalLabel(
      value === 9
        ? 8
        : value + 1
    );

  const wrong2 =
    decimalLabel(
      value === 1
        ? 2
        : value - 1
    );

  return {
    prompt:
      "数直線の●があるところは？",

    guide:
      "0から1までを、10こに分けています。",

    visual: {
      mode: "number-line",
      value
    },

    ...makeChoices(
      correct,
      [wrong1, wrong2]
    ),

    uniqueKey:
      `decimal-line-${value}`
  };
}


export default {
  types: [
    "decimal_visual_basic"
  ],

  build() {
    const pattern =
      nextPattern();

    let question;

    switch (pattern) {
      case "count-tenths":
        question =
          buildCountTenths();
        break;

      case "one-tenth":
        question =
          buildOneTenth();
        break;

      case "match-picture":
        question =
          buildMatchPicture();
        break;

      case "number-line":
        question =
          buildNumberLine();
        break;

      case "tenths-grid":
      default:
        question =
          buildTenthsGrid();
        break;
    }

    return {
      kind: "decimal-choice",

      ...question
    };
  }
};