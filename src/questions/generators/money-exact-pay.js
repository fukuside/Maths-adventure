import {
  randomInt as r,
  moneyItem
} from "../helpers.js";


/* =========================================================
   問題データ

   10円・50円・100円を中心に、
   小学生が見て分かりやすい金額に限定。
========================================================= */

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
  },


  {
    shop: "くだものやさん",
    product: "バナナ",
    icon: "🍌",
    price: 130,

    choices: [
      {
        coins: [100, 10, 10, 10],
        correct: true
      },
      {
        coins: [100, 10, 10],
        correct: false
      },
      {
        coins: [100, 50],
        correct: false
      }
    ]
  },


  {
    shop: "ぶんぼうぐやさん",
    product: "えんぴつ",
    icon: "✏️",
    price: 110,

    choices: [
      {
        coins: [100, 10],
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
    shop: "おにぎりやさん",
    product: "おにぎり",
    icon: "🍙",
    price: 140,

    choices: [
      {
        coins: [100, 10, 10, 10, 10],
        correct: true
      },
      {
        coins: [100, 10, 10, 10],
        correct: false
      },
      {
        coins: [100, 50],
        correct: false
      }
    ]
  },


  {
    shop: "おかしやさん",
    product: "クッキー",
    icon: "🍪",
    price: 160,

    choices: [
      {
        coins: [100, 50, 10],
        correct: true
      },
      {
        coins: [100, 50],
        correct: false
      },
      {
        coins: [100, 50, 10, 10],
        correct: false
      }
    ]
  },


  {
    shop: "くだものやさん",
    product: "みかん",
    icon: "🍊",
    price: 170,

    choices: [
      {
        coins: [100, 50, 10, 10],
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
    shop: "アイスやさん",
    product: "アイス",
    icon: "🍨",
    price: 200,

    choices: [
      {
        coins: [100, 100],
        correct: true
      },
      {
        coins: [100, 50],
        correct: false
      },
      {
        coins: [100, 100, 10],
        correct: false
      }
    ]
  },


  {
    shop: "おかしやさん",
    product: "キャンディ",
    icon: "🍬",
    price: 90,

    choices: [
      {
        coins: [50, 10, 10, 10, 10],
        correct: true
      },
      {
        coins: [50, 10, 10, 10],
        correct: false
      },
      {
        coins: [100],
        correct: false
      }
    ]
  },


  {
    shop: "パンやさん",
    product: "クロワッサン",
    icon: "🥐",
    price: 190,

    choices: [
      {
        coins: [
          100,
          50,
          10,
          10,
          10,
          10
        ],
        correct: true
      },
      {
        coins: [
          100,
          50,
          10,
          10,
          10
        ],
        correct: false
      },
      {
        coins: [
          100,
          100
        ],
        correct: false
      }
    ]
  },


  {
    shop: "おもちゃやさん",
    product: "ボール",
    icon: "⚽",
    price: 130,

    choices: [
      {
        coins: [
          100,
          10,
          10,
          10
        ],
        correct: true
      },
      {
        coins: [
          100,
          10,
          10
        ],
        correct: false
      },
      {
        coins: [
          100,
          50
        ],
        correct: false
      }
    ]
  }

];


/* =========================================================
   問題順

   15種類あるので、
   どの位置から10問取っても同じ問題が重複しない。
========================================================= */

let questionIndex = 0;


/* =========================================================
   選択肢シャッフル
========================================================= */

function shuffleChoices(choices) {

  const result =
    choices.map(
      choice => ({
        ...choice,

        coins:
          [...choice.coins]
      })
    );


  for (
    let i =
      result.length - 1;

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
   次の問題を取得

   ランダムで同じ商品を何度も引く方式をやめる。
========================================================= */

function nextQuestion() {

  const question =
    QUESTIONS[
      questionIndex
    ];


  questionIndex =
    (
      questionIndex + 1
    ) %
    QUESTIONS.length;


  return question;
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
      nextQuestion();


    const shuffled =
      shuffleChoices(
        q.choices
      );


    const letters =
      [
        "A",
        "B",
        "C"
      ];


    const choices =
      shuffled.map(
        (
          choice,
          index
        ) => ({

          id:
            letters[index],


          /*
            renderer側で
            お金の選択肢として表示
          */
          moneyItems:
            choice.coins.map(
              value =>
                moneyItem(
                  value
                )
            ),


          correct:
            choice.correct

        })
      );


    const correctChoice =
      choices.find(
        choice =>
          choice.correct
      );


    if (!correctChoice) {
      throw new Error(
        `money_exact_pay: 正解選択肢がありません (${q.product})`
      );
    }


    return {

      kind:
        "money-choice",


      prompt:
        `${q.shop}です。
${q.icon} ${q.product}は ${q.price}円です。
ちょうど はらえるのは どれ？`,


      /*
        このステージでは
        上部に所持金を表示しない。
      */
      items: [],


      choices,


      answer:
        correctChoice.id,


      /*
        商品ごとに別の問題として扱う。
        QUESTIONSが15種類あるので、
        10問生成しても重複しない。
      */
      uniqueKey:
        `exact-${q.shop}-${q.product}-${q.price}`
    };
  }
};