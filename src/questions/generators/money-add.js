import {
  randomInt as r
} from "../helpers.js";


const QUESTIONS = [
  { a: 50,  b: 30 },
  { a: 80,  b: 20 },
  { a: 100, b: 50 },
  { a: 120, b: 80 },
  { a: 150, b: 50 },
  { a: 180, b: 120 },
  { a: 200, b: 150 },
  { a: 250, b: 150 },
  { a: 300, b: 200 },
  { a: 350, b: 150 }
];


export default {

  types: [
    "money_add"
  ],


  build() {

    const q =
      QUESTIONS[
        r(
          0,
          QUESTIONS.length - 1
        )
      ];


    return {

      kind: "text",

      prompt:
        `${q.a}円 ＋ ${q.b}円 ＝ ？`,

      answer:
        q.a + q.b,

      uniqueKey:
        `money-add-${q.a}-${q.b}`
    };
  }
};