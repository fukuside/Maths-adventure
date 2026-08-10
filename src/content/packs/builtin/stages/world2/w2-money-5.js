export default {
  id: "w2-money-5",

  sort: 6,

  world: 2,

  unit: "money",
  unitLabel: "お金",

  name: "お札と硬貨を 数えよう",

  presentation: "persistent",

  isBoss: false,

  keypad: "money",

  type: "money_sum",

  denominations: [
    50,
    100,
    500,
    1000,
    5000,
    10000
  ],

  minItems: 2,
  maxItems: 4,

  billChance: 0.85,

  cardId: "026-shop-bird",

  rewardGems: 7,

  dropRates: {
    N: 0.60,
    SR: 0.32,
    UR: 0.08
  }
};