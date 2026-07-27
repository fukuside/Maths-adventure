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
  types: ["money_change"],

  build(stage) {
    const payments =
      stage.payments ?? [100, 500, 1000];

    const paid =
      payments[r(0, payments.length - 1)];

    const product =
      PRODUCTS[r(0, PRODUCTS.length - 1)];

    let step = 10;

    if (paid >= 1000) {
      step = 50;
    }

    const maxPrice = paid - step;

    const price =
      step *
      r(
        1,
        Math.max(
          1,
          Math.floor(maxPrice / step)
        )
      );

    const answer =
      paid - price;

    return {
      kind: "money",

      prompt:
        `${product.icon} ${product.name}は ${price}円。${paid}円を出しました。おつりはいくら？`,

      items: [
        moneyItem(paid)
      ],

      answer,

      uniqueKey:
        `change-${product.name}-${paid}-${price}`
    };
  }
};