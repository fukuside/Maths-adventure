import { randomInt as r, moneyItem } from "../helpers.js";

export default {
  types: ["money_change"],

  build(stage) {
    const payments =
      stage.payments ?? [100, 500, 1000];

    const paid =
      payments[r(0, payments.length - 1)];

    // 支払額によって値段の刻みを変更
    let step = 10;

    if (paid >= 1000) {
      step = 50;
    }

    if (paid >= 5000) {
      step = 100;
    }

    // 商品価格は支払額より必ず安くする
    const minPrice = step;
    const maxPrice = paid - step;

    const priceSteps =
      Math.floor((maxPrice - minPrice) / step);

    const price =
      minPrice + r(0, priceSteps) * step;

    const answer = paid - price;

    return {
      kind: "money",

      prompt:
        `${price}円のおかいもの。${paid}円を出しました。おつりはいくら？`,

      items: [
        moneyItem(paid)
      ],

      answer,

      uniqueKey:
        `change-${paid}-${price}`
    };
  }
};