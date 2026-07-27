import { randomInt as r, moneyItem } from "../helpers.js";

const PRODUCTS = [
  { name: "りんご", icon: "🍎" },
  { name: "パン", icon: "🍞" },
  { name: "ドーナツ", icon: "🍩" },
  { name: "ジュース", icon: "🥤" },
  { name: "ノート", icon: "📘" },
  { name: "えんぴつ", icon: "✏️" }
];

export default {
  types: ["money_shopping"],

  build(stage) {
    const payments =
      stage.payments ?? [500, 1000];

    const paid =
      payments[r(0, payments.length - 1)];

    let first =
      PRODUCTS[
        r(0, PRODUCTS.length - 1)
      ];

    let second =
      PRODUCTS[
        r(0, PRODUCTS.length - 1)
      ];

    while (
      second.name === first.name
    ) {
      second =
        PRODUCTS[
          r(0, PRODUCTS.length - 1)
        ];
    }

    const maxEach =
      Math.floor(
        (paid - 20) / 2
      );

    const price1 =
      r(
        1,
        Math.max(
          1,
          Math.floor(maxEach / 10)
        )
      ) * 10;

    const remainingMax =
      paid - price1 - 10;

    const price2 =
      r(
        1,
        Math.max(
          1,
          Math.floor(remainingMax / 10)
        )
      ) * 10;

    const total =
      price1 + price2;

    const answer =
      paid - total;

    return {
      kind: "money",

      prompt:
        `${first.icon} ${first.name} ${price1}円 と ${second.icon} ${second.name} ${price2}円。${paid}円を出したら、おつりはいくら？`,

      items: [
        moneyItem(paid)
      ],

      answer,

      uniqueKey:
        `shopping-${paid}-${first.name}-${price1}-${second.name}-${price2}`
    };
  }
};