import {
  randomInt as r,
  moneyItem,
  shuffle
} from "../helpers.js";


/* =========================================================
   WORLD2 お金ボス戦

   5問を必ずこの順番で出す

   1. お金を数える
   2. 足し算
   3. 引き算
   4. おつり
   5. 2つ買う
========================================================= */

let bossStep = 0;


/* =========================================================
   商品
   現実的な価格帯に固定
========================================================= */

const PRODUCTS = [
  {
    name: "ジュース",
    icon: "🥤",
    price: 120
  },
  {
    name: "ノート",
    icon: "📘",
    price: 150
  },
  {
    name: "パン",
    icon: "🍞",
    price: 180
  },
  {
    name: "りんご",
    icon: "🍎",
    price: 180
  },
  {
    name: "ぎゅうにゅう",
    icon: "🥛",
    price: 220
  },
  {
    name: "けしごむ",
    icon: "🧽",
    price: 100
  },
  {
    name: "えんぴつ",
    icon: "✏️",
    price: 80
  }
];


/* =========================================================
   ① お金を数える
========================================================= */

function buildCountQuestion() {

  const patterns = [

    [1000, 500, 100, 50],

    [5000, 1000, 500, 100],

    [10000, 1000, 500],

    [5000, 500, 100, 100],

    [10000, 5000, 500]
  ];


  const values =
    patterns[
      r(
        0,
        patterns.length - 1
      )
    ];


  const items =
    shuffle(
      values.map(
        value =>
          moneyItem(value)
      )
    );


  const answer =
    values.reduce(
      (sum, value) =>
        sum + value,
      0
    );


  return {
    kind: "money",

    prompt:
      "ぜんぶで いくら？",

    items,

    answer,

    uniqueKey:
      `money-boss-count-${values.join("-")}`
  };
}


/* =========================================================
   ② 足し算
========================================================= */

function buildAddQuestion() {

  const questions = [
    [120, 180],
    [150, 220],
    [180, 120],
    [250, 150],
    [300, 200]
  ];


  const [
    a,
    b
  ] =
    questions[
      r(
        0,
        questions.length - 1
      )
    ];


  return {
    kind: "text",

    prompt:
      `${a}円 ＋ ${b}円 ＝ ？`,

    answer:
      a + b,

    uniqueKey:
      `money-boss-add-${a}-${b}`
  };
}


/* =========================================================
   ③ 引き算
========================================================= */

function buildSubQuestion() {

  const questions = [
    [500, 180],
    [500, 220],
    [1000, 350],
    [1000, 480],
    [5000, 1200]
  ];


  const [
    a,
    b
  ] =
    questions[
      r(
        0,
        questions.length - 1
      )
    ];


  return {
    kind: "text",

    prompt:
      `${a}円 − ${b}円 ＝ ？`,

    answer:
      a - b,

    uniqueKey:
      `money-boss-sub-${a}-${b}`
  };
}


/* =========================================================
   ④ おつり
========================================================= */

function buildChangeQuestion() {

  const payments = [
    500,
    1000
  ];


  const paid =
    payments[
      r(
        0,
        payments.length - 1
      )
    ];


  const affordable =
    PRODUCTS.filter(
      product =>
        product.price < paid
    );


  const product =
    affordable[
      r(
        0,
        affordable.length - 1
      )
    ];


  return {
    kind: "money",

    prompt:
      `${product.icon} ${product.name}は ${product.price}円です。
${paid}円を だしました。
おつりは いくら？`,

    items: [
      moneyItem(paid)
    ],

    answer:
      paid - product.price,

    uniqueKey:
      `money-boss-change-${paid}-${product.name}-${product.price}`
  };
}


/* =========================================================
   ⑤ 2つ買う
========================================================= */

function buildShoppingQuestion() {

  let first =
    PRODUCTS[
      r(
        0,
        PRODUCTS.length - 1
      )
    ];


  let second =
    PRODUCTS[
      r(
        0,
        PRODUCTS.length - 1
      )
    ];


  while (
    second.name ===
    first.name
  ) {
    second =
      PRODUCTS[
        r(
          0,
          PRODUCTS.length - 1
        )
      ];
  }


  const total =
    first.price +
    second.price;


  return {
  kind: "text",

  className:
    "money-boss-shopping",

  prompt:
    `${first.icon} ${first.name} ${first.price}円 と
${second.icon} ${second.name} ${second.price}円を かいます。
ぜんぶで いくら？`,

  answer:
    total,

  uniqueKey:
    `money-boss-shopping-${first.name}-${second.name}-${total}`
};
}


/* =========================================================
   GENERATOR
========================================================= */

export default {

  types: [
    "money_boss"
  ],


  build() {

    const step =
      bossStep % 5;

    bossStep += 1;


    if (step === 0) {
      return buildCountQuestion();
    }


    if (step === 1) {
      return buildAddQuestion();
    }


    if (step === 2) {
      return buildSubQuestion();
    }


    if (step === 3) {
      return buildChangeQuestion();
    }


    return buildShoppingQuestion();
  }
};