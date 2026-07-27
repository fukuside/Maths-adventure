import { randomInt as r, moneyItem } from "../helpers.js";

const PRODUCTS = [
  { name: "りんご", icon: "🍎" },
  { name: "パン", icon: "🍞" },
  { name: "ドーナツ", icon: "🍩" },
  { name: "ジュース", icon: "🥤" },
  { name: "ノート", icon: "📘" },
  { name: "えんぴつ", icon: "✏️" },
  { name: "おもちゃ", icon: "🧸" }
];

export default {
  types: ["money_can_buy"],

  build(stage) {
    const budgets =
      stage.budgets ?? [100, 300, 500];

    const budget =
      budgets[r(0, budgets.length - 1)];

    const affordable =
      PRODUCTS[
        r(0, PRODUCTS.length - 1)
      ];

    let expensive =
      PRODUCTS[
        r(0, PRODUCTS.length - 1)
      ];

    while (
      expensive.name === affordable.name
    ) {
      expensive =
        PRODUCTS[
          r(0, PRODUCTS.length - 1)
        ];
    }

    const affordablePrice =
      Math.max(
        10,
        Math.floor(
          r(1, Math.floor(budget / 10))
        ) * 10
      );

    const expensivePrice =
      budget +
      r(1, 10) * 10;

    const choices = [
      {
        id: "A",
        label:
          `${affordable.icon} ${affordable.name} ${affordablePrice}円`
      },
      {
        id: "B",
        label:
          `${expensive.icon} ${expensive.name} ${expensivePrice}円`
      }
    ];

    if (Math.random() < 0.5) {
      choices.reverse();
    }

    const answer =
      choices.find(
        c =>
          c.label.includes(
            `${affordablePrice}円`
          )
      )?.id;

    return {
      kind: "money-choice",

      prompt:
        `${budget}円もっています。買えるのはどっち？`,

      items: [
        moneyItem(budget)
      ],

      choices,

      answer,

      uniqueKey:
        `canbuy-${budget}-${affordablePrice}-${expensivePrice}`
    };
  }
};