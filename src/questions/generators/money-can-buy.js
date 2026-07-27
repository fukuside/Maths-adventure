import {
  randomInt as r,
  moneyItem
} from "../helpers.js";


const PRODUCTS = [
  { name: "りんご", icon: "🍎" },
  { name: "パン", icon: "🍞" },
  { name: "ドーナツ", icon: "🍩" },
  { name: "ジュース", icon: "🥤" },
  { name: "ノート", icon: "📘" },
  { name: "えんぴつ", icon: "✏️" },
  { name: "おもちゃ", icon: "🧸" }
];


function moneyItemsForAmount(amount) {

  const denominations = [
    1000,
    500,
    100,
    50,
    10,
    5,
    1
  ];

  const items = [];
  let rest = amount;

  for (const value of denominations) {

    while (rest >= value) {

      items.push(
        moneyItem(value)
      );

      rest -= value;
    }
  }

  return items;
}


function pickDifferentProducts(count) {

  const pool = [...PRODUCTS];

  const picked = [];

  while (
    picked.length < count &&
    pool.length > 0
  ) {

    const index =
      r(0, pool.length - 1);

    picked.push(
      pool.splice(index, 1)[0]
    );
  }

  return picked;
}


export default {

  types: [
    "money_can_buy"
  ],


  build(stage) {

    const budgets =
      stage.budgets ??
      [100, 300, 500];


    const budget =
      budgets[
        r(
          0,
          budgets.length - 1
        )
      ];


    const products =
      pickDifferentProducts(3);


    /*
      1個だけ買える
      2個は買えない
    */

    const affordablePrice =
      Math.max(
        10,
        r(
          1,
          Math.max(
            1,
            Math.floor(
              budget / 10
            )
          )
        ) * 10
      );


    const expensivePrice1 =
      budget +
      r(1, 8) * 10;


    const expensivePrice2 =
      budget +
      r(9, 16) * 10;


    const rawChoices = [

      {
        icon: products[0].icon,
        name: products[0].name,
        price: affordablePrice,
        affordable: true
      },

      {
        icon: products[1].icon,
        name: products[1].name,
        price: expensivePrice1,
        affordable: false
      },

      {
        icon: products[2].icon,
        name: products[2].name,
        price: expensivePrice2,
        affordable: false
      }

    ];


    /*
      順番をシャッフル
    */

    for (
      let i = rawChoices.length - 1;
      i > 0;
      i--
    ) {

      const j =
        r(0, i);

      [
        rawChoices[i],
        rawChoices[j]
      ] = [
        rawChoices[j],
        rawChoices[i]
      ];
    }


    const letters =
      ["A", "B", "C"];


    const choices =
      rawChoices.map(
        (choice, index) => ({
          ...choice,
          id: letters[index]
        })
      );


    const answer =
      choices.find(
        choice =>
          choice.affordable
      ).id;


    return {

      kind:
        "money-choice",

      prompt:
        `${budget}円もっています。買えるのはどれ？`,

      items:
        moneyItemsForAmount(
          budget
        ),

      choices,

      answer,

      uniqueKey:
        `canbuy-${budget}-${choices.map(
          c =>
            `${c.id}-${c.name}-${c.price}`
        ).join("-")}`
    };
  }
};