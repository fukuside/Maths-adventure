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

    const firstProduct =
      PRODUCTS[r(0, PRODUCTS.length - 1)];

    let secondProduct =
      PRODUCTS[r(0, PRODUCTS.length - 1)];

    while (
      secondProduct.name === firstProduct.name
    ) {
      secondProduct =
        PRODUCTS[r(0, PRODUCTS.length - 1)];
    }

    const affordablePrice =
      Math.max(
        10,
        r(1, Math.max(1, Math.floor(budget / 10))) * 10
      );

    const expensivePrice =
      budget + r(1, 10) * 10;

    let choices = [
      {
        id: "A",
        label:
          `${firstProduct.icon} ${firstProduct.name} ${affordablePrice}円`,
        affordable: true
      },
      {
        id: "B",
        label:
          `${secondProduct.icon} ${secondProduct.name} ${expensivePrice}円`,
        affordable: false
      }
    ];

    if (Math.random() < 0.5) {
      choices = [
        {
          id: "A",
          label:
            `${secondProduct.icon} ${secondProduct.name} ${expensivePrice}円`,
          affordable: false
        },
        {
          id: "B",
          label:
            `${firstProduct.icon} ${firstProduct.name} ${affordablePrice}円`,
          affordable: true
        }
      ];
    }

    const answer =
      choices.find(choice => choice.affordable)?.id;

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
        `canbuy-${budget}-${affordablePrice}-${expensivePrice}-${answer}`
    };
  }
};