import {
  randomInt as r,
  moneyItem
} from "../helpers.js";


/* =========================================================
   商品マスター
   同じジャンルの商品をまとめて管理
========================================================= */

const PRODUCT_GROUPS = [
  {
    shop: "くだものやさん",
    products: [
      {
        name: "りんご",
        icon: "🍎",
        price: 180
      },
      {
        name: "みかん",
        icon: "🍊",
        price: 160
      },
      {
        name: "バナナ",
        icon: "🍌",
        price: 220
      }
    ]
  },

  {
    shop: "パンやさん",
    products: [
      {
        name: "しょくパン",
        icon: "🍞",
        price: 180
      },
      {
        name: "メロンパン",
        icon: "🥐",
        price: 220
      },
      {
        name: "クリームパン",
        icon: "🥖",
        price: 200
      }
    ]
  },

  {
    shop: "のみものやさん",
    products: [
      {
        name: "ジュース",
        icon: "🥤",
        price: 120
      },
      {
        name: "おちゃ",
        icon: "🍵",
        price: 150
      },
      {
        name: "ぎゅうにゅう",
        icon: "🥛",
        price: 180
      }
    ]
  },

  {
    shop: "ぶんぼうぐやさん",
    products: [
      {
        name: "えんぴつ",
        icon: "✏️",
        price: 80
      },
      {
        name: "けしごむ",
        icon: "🧽",
        price: 100
      },
      {
        name: "ノート",
        icon: "📘",
        price: 150
      }
    ]
  }
];


/* =========================================================
   金額を硬貨・紙幣へ変換
========================================================= */

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


/* =========================================================
   配列をシャッフル
========================================================= */

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


/* =========================================================
   通常の「買えるのはどれ？」問題
   正解は1つだけ
========================================================= */

function buildSingleProductQuestion() {
  const group =
    PRODUCT_GROUPS[
      r(
        0,
        PRODUCT_GROUPS.length - 1
      )
    ];

  const products =
    shuffle(
      group.products
    );


  /*
    3商品のうち、
    真ん中くらいの価格を基準に予算を作る。

    例：
    160 / 180 / 220

    予算180円なら
    160円と180円の2つが買えてしまうため、
    「買える」ではなく
    「ちょうど買える」にする場合もある。
  */

  const mode =
    Math.random() < 0.55
      ? "exact"
      : "affordable";


  if (mode === "exact") {
    const target =
      products[
        r(
          0,
          products.length - 1
        )
      ];

    const budget =
      target.price;

    const choices =
      shuffle(
        products
      ).map(
        (
          product,
          index
        ) => ({
          id:
            ["A", "B", "C"][index],

          icon:
            product.icon,

          name:
            product.name,

          price:
            product.price,

          affordable:
            product.price === budget
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
        `${group.shop}です。${budget}円で ちょうど かえるのは どれ？`,

      items:
        moneyItemsForAmount(
          budget
        ),

      choices,

      answer,

      uniqueKey:
        `canbuy-exact-${group.shop}-${budget}-${choices.map(
          c =>
            `${c.id}-${c.name}-${c.price}`
        ).join("-")}`
    };
  }


  /*
    「買えるのはどれ？」は
    正解が必ず1つになる予算を選ぶ
  */

  const sorted =
    [...products].sort(
      (a, b) =>
        a.price - b.price
    );

  /*
    一番安い商品だけ買えるようにする
    予算は一番安い価格以上、
    2番目より安くする
  */

  const cheapest =
    sorted[0];

  const second =
    sorted[1];

  let budget =
    cheapest.price;

  if (
    second.price -
    cheapest.price >= 20
  ) {
    budget =
      cheapest.price +
      10;
  }

  const choices =
    shuffle(
      products
    ).map(
      (
        product,
        index
      ) => ({
        id:
          ["A", "B", "C"][index],

        icon:
          product.icon,

        name:
          product.name,

        price:
          product.price,

        affordable:
          product.price <= budget
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
      `${group.shop}です。${budget}円もっています。かえるのは どれ？`,

    items:
      moneyItemsForAmount(
        budget
      ),

    choices,

    answer,

    uniqueKey:
      `canbuy-${group.shop}-${budget}-${choices.map(
        c =>
          `${c.id}-${c.name}-${c.price}`
      ).join("-")}`
  };
}


/* =========================================================
   セット問題
   2つの商品を足して考える
========================================================= */

function buildSetQuestion() {
  const allProducts =
    PRODUCT_GROUPS.flatMap(
      group =>
        group.products.map(
          product => ({
            ...product,
            shop:
              group.shop
          })
        )
    );

  const shuffled =
    shuffle(
      allProducts
    );

  /*
    セットを3つ作る
  */

  const sets = [];

  let index = 0;

  while (
    sets.length < 3 &&
    index < shuffled.length - 1
  ) {
    const first =
      shuffled[index];

    const second =
      shuffled[index + 1];

    if (
      first.name !==
      second.name
    ) {
      sets.push({
        items: [
          first,
          second
        ],

        total:
          first.price +
          second.price
      });
    }

    index += 2;
  }


  /*
    3セット作れなかった場合は
    通常問題へ戻す
  */

  if (sets.length < 3) {
    return buildSingleProductQuestion();
  }


  /*
    真ん中のセット価格を
    正解の予算にする
  */

  const totals =
    sets
      .map(
        set =>
          set.total
      )
      .sort(
        (a, b) =>
          a - b
      );

  const budget =
    totals[1];


  /*
    「ちょうど」なので
    同額が複数あれば作り直す
  */

  const exactCount =
    sets.filter(
      set =>
        set.total === budget
    ).length;

  if (exactCount !== 1) {
    return buildSingleProductQuestion();
  }


  const choices =
    shuffle(
      sets
    ).map(
      (
        set,
        choiceIndex
      ) => ({
        id:
          ["A", "B", "C"][
            choiceIndex
          ],

        icon:
          set.items
            .map(
              item =>
                item.icon
            )
            .join("＋"),

        name:
          set.items
            .map(
              item =>
                item.name
            )
            .join("＋"),

        price:
          set.total,

        affordable:
          set.total === budget
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
      `${budget}円で ちょうど かえる セットは どれ？`,

    items:
      moneyItemsForAmount(
        budget
      ),

    choices,

    answer,

    uniqueKey:
      `canbuy-set-${budget}-${choices.map(
        c =>
          `${c.id}-${c.name}-${c.price}`
      ).join("-")}`
  };
}


/* =========================================================
   GENERATOR
========================================================= */

export default {
  types: [
    "money_can_buy"
  ],

  build() {

    /*
      約25%でセット問題
      約75%で同ジャンル比較
    */

    if (
      Math.random() < 0.25
    ) {
      return buildSetQuestion();
    }

    return buildSingleProductQuestion();
  }
};