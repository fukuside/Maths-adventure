import {
  randomInt as r,
  moneyItem
} from "../helpers.js";


const QUESTIONS = [

  {
    shop: "パンやさん",
    product: "しょくパン",
    icon: "🍞",
    price: 180,

    choices: [
      {
        coins: [100, 50, 10, 10, 10],
        correct: true
      },
      {
        coins: [100, 50, 10],
        correct: false
      },
      {
        coins: [100, 100],
        correct: false
      }
    ]
  },


  {
    shop: "のみものやさん",
    product: "ジュース",
    icon: "🥤",
    price: 120,

    choices: [
      {
        coins: [100, 10, 10],
        correct: true
      },
      {
        coins: [100],
        correct: false
      },
      {
        coins: [100, 50],
        correct: false
      }
    ]
  },


  {
    shop: "くだものやさん",
    product: "りんご",
    icon: "🍎",
    price: 180,

    choices: [
      {
        coins: [100, 50, 10, 10, 10],
        correct: true
      },
      {
        coins: [100, 50],
        correct: false
      },
      {
        coins: [100, 100],
        correct: false
      }
    ]
  },


  {
    shop: "ぶんぼうぐやさん",
    product: "ノート",
    icon: "📘",
    price: 150,

    choices: [
      {
        coins: [100, 50],
        correct: true
      },
      {
        coins: [100, 10, 10],
        correct: false
      },
      {
        coins: [100, 100],
        correct: false
      }
    ]
  },


  {
    shop: "ぶんぼうぐやさん",
    product: "けしごむ",
    icon: "🧽",
    price: 100,

    choices: [
      {
        coins: [50, 50],
        correct: true
      },
      {
        coins: [50, 10, 10, 10],
        correct: false
      },
      {
        coins: [100, 10],
        correct: false
      }
    ]
  },


  {
    shop: "のみものやさん",
    product: "おちゃ",
    icon: "🍵",
    price: 150,

    choices: [
      {
        coins: [100, 50],
        correct: true
      },
      {
        coins: [100, 10, 10, 10],
        correct: false
      },
      {
        coins: [100, 100],
        correct: false
      }
    ]
  }

];


/* =========================================================
   選択肢シャッフル
========================================================= */

function shuffleChoices(choices) {

  const result =
    choices.map(
      choice => ({
        ...choice,
        coins: [...choice.coins]
      })
    );

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


/* =========================================================
   GENERATOR
========================================================= */

export default {

  types: [
    "money_exact_pay"
  ],


  build() {

    const q =
      QUESTIONS[
        r(
          0,
          QUESTIONS.length - 1
        )
      ];


    const shuffled =
      shuffleChoices(
        q.choices
      );


    const letters =
      ["A", "B", "C"];


    const choices =
      shuffled.map(
        (choice, index) => ({

          id:
            letters[index],

          /*
            renderer側で
            「お金の選択肢」と判別するための情報
          */
          moneyItems:
            choice.coins.map(
              value =>
                moneyItem(value)
            ),

          correct:
            choice.correct

        })
      );


    const answer =
      choices.find(
        choice =>
          choice.correct
      ).id;


    return {

      kind:
        "money-choice",

      prompt:
        `${q.shop}です。
${q.icon} ${q.product}は ${q.price}円です。
ちょうど はらえるのは どれ？`,

      /*
        上部に所持金は表示しない。
        商品価格だけを問題文で見る。
      */
      items: [],

      choices,

      answer,

      uniqueKey:
        `exact-${q.shop}-${q.product}-${q.price}`
    };
  }
};