import {
  randomInt as r
} from "../helpers.js";


const QUESTIONS = [
  { a: 100, b: 30 },
  { a: 100, b: 50 },
  { a: 150, b: 50 },
  { a: 200, b: 80 },
  { a: 200, b: 120 },
  { a: 300, b: 100 },
  { a: 300, b: 150 },
  { a: 400, b: 200 },
  { a: 500, b: 200 },
  { a: 500, b: 350 }
];


export default {

  types: [
    "money_sub"
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
        `${q.a}円 − ${q.b}円 ＝ ？`,

      answer:
        q.a - q.b,

      uniqueKey:
        `money-sub-${q.a}-${q.b}`
    };
  }
};