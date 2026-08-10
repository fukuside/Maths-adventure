export default {
  id: "w2-money-can-buy-1",

  sort: 2,

  world: 2,

  unit: "money",
  unitLabel: "お金",

  name: "どれが買えるかな？",

  presentation: "persistent",

  isBoss: false,

  keypad: "choice",

  type: "money_can_buy",

  budgets: [
    100,
    300,
    500
  ],

  cardId: "022-coin-rabbit",

  rewardGems: 5,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  }
};