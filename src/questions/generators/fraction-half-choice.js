import {
  randomInt as r
} from "../helpers.js";


/*
  5問生成される間に、
  同じ出題パターンが重ならないようにする袋。
*/
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
        "food",
        "share",
        "shade",
        "words",
        "diagram"
      ]);
  }

  return patternBag.shift();
}


function makeChoiceQuestion({
  correct,
  wrongs
}) {
  const values =
    shuffle([
      correct,
      ...wrongs
    ]);

  const letters =
    ["A", "B", "C"];

  const choices =
    values.map(
      (label, index) => ({
        id: letters[index],
        label
      })
    );

  const correctChoice =
    choices.find(
      choice =>
        choice.label === correct
    );

  return {
    choices,
    answer:
      correctChoice.id
  };
}


function fractionLabel(
  taken,
  parts
) {
  return `${taken}/${parts}`;
}


function makeFractionChoices(
  taken,
  parts
) {
  const correct =
    fractionLabel(
      taken,
      parts
    );

  const candidates = [
    fractionLabel(
      parts,
      taken
    ),

    fractionLabel(
      Math.max(
        1,
        taken - 1
      ),
      parts
    ),

    fractionLabel(
      Math.min(
        parts,
        taken + 1
      ),
      parts
    ),

    fractionLabel(
      taken,
      parts + 1
    ),

    fractionLabel(
      1,
      parts
    )
  ];

  const wrongs =
    [...new Set(candidates)]
      .filter(
        value =>
          value !== correct
      )
      .slice(0, 2);

  while (
    wrongs.length < 2
  ) {
    wrongs.push(
      `1/${parts + wrongs.length + 1}`
    );
  }

  return makeChoiceQuestion({
    correct,
    wrongs
  });
}


const FOOD_ITEMS = [
  {
    item: "pizza",
    name: "ピザ",
    emoji: "🍕"
  },

  {
    item: "cake",
    name: "ケーキ",
    emoji: "🎂"
  },

  {
    item: "chocolate",
    name: "チョコ",
    emoji: "🍫"
  }
];


function buildFoodQuestion() {
  const food =
    FOOD_ITEMS[
      r(
        0,
        FOOD_ITEMS.length - 1
      )
    ];

  const parts =
    [2, 3, 4][
      r(0, 2)
    ];

  const taken =
    parts === 2
      ? 1
      : r(
          1,
          parts - 1
        );

  const result =
    makeFractionChoices(
      taken,
      parts
    );

  return {
    pattern:
      "food",

    prompt:
      `${food.name}を ${parts}つに わけました。${taken}つぶんは？`,

    guide:
      `${parts}つに わけたうちの ${taken}つぶんを かんがえよう。`,

    visual: {
      mode:
        "food",

      item:
        food.item,

      emoji:
        food.emoji,

      parts,

      taken
    },

    ...result,

    uniqueKey:
      `fraction-food-${food.item}-${taken}-${parts}`
  };
}


function buildShareQuestion() {
  const food =
    FOOD_ITEMS[
      r(
        0,
        FOOD_ITEMS.length - 1
      )
    ];

  const parts =
    [2, 3, 4][
      r(0, 2)
    ];

  const result =
    makeFractionChoices(
      1,
      parts
    );

  return {
    pattern:
      "share",

    prompt:
      `${food.name}を ${parts}人で おなじ大きさに わけました。1人ぶんは？`,

    guide:
      `${parts}人で おなじ大きさに わけると、1人ぶんは ぜんぶの何分の1かな？`,

    visual: {
      mode:
        "share",

      item:
        food.item,

      emoji:
        food.emoji,

      parts,

      taken:
        1
    },

    ...result,

    uniqueKey:
      `fraction-share-${food.item}-${parts}`
  };
}


function buildShadeQuestion() {
  const parts =
    [3, 4, 5][
      r(0, 2)
    ];

  const taken =
    r(
      1,
      parts - 1
    );

  const result =
    makeFractionChoices(
      taken,
      parts
    );

  return {
    pattern:
      "shade",

    prompt:
      "色がついているところは、何分の何？",

    guide:
      `ぜんぶで ${parts}こ。そのうち ${taken}こに 色がついています。`,

    visual: {
      mode:
        "shade",

      parts,

      taken
    },

    ...result,

    uniqueKey:
      `fraction-shade-${taken}-${parts}`
  };
}


function buildWordsQuestion() {
  const parts =
    [3, 4, 5][
      r(0, 2)
    ];

  const taken =
    r(
      1,
      parts - 1
    );

  const result =
    makeFractionChoices(
      taken,
      parts
    );

  return {
    pattern:
      "words",

    prompt:
      `${parts}つに わけたうちの ${taken}つぶんは？`,

    guide:
      "下の数字は、ぜんぶを何こに分けたか。上の数字は、そのうち何こぶんか。",

    visual: {
      mode:
        "words",

      parts,

      taken
    },

    ...result,

    uniqueKey:
      `fraction-words-${taken}-${parts}`
  };
}


function buildDiagramQuestion() {
  const parts =
    [3, 4, 5][
      r(0, 2)
    ];

  const taken =
    r(
      1,
      parts - 1
    );

  const result =
    makeFractionChoices(
      taken,
      parts
    );

  return {
    pattern:
      "diagram",

    prompt:
      "この図を あらわす分数は？",

    guide:
      "色がついている数と、ぜんぶの数を見よう。",

    visual: {
      mode:
        "diagram",

      parts,

      taken
    },

    ...result,

    uniqueKey:
      `fraction-diagram-${taken}-${parts}`
  };
}


export default {
  types: [
    "fraction_visual_basic"
  ],


  build() {
    const pattern =
      nextPattern();

    let question;

    switch (pattern) {
      case "share":
        question =
          buildShareQuestion();
        break;

      case "shade":
        question =
          buildShadeQuestion();
        break;

      case "words":
        question =
          buildWordsQuestion();
        break;

      case "diagram":
        question =
          buildDiagramQuestion();
        break;

      case "food":
      default:
        question =
          buildFoodQuestion();
        break;
    }

    return {
      kind:
        "fraction-choice",

      ...question
    };
  }
};