export default {
  id: "w2-money-1",

  sort: 2,

  world: 2,

  unit: "money",
  unitLabel: "お金",

  name: "いくら あるかな？",

  presentation: "persistent",

  isBoss: false,

  keypad: "money",

  type: "money_sum",

  /*
    小学2年生の基礎として、
    硬貨を中心に数える。
  */
  denominations: [
    1,
    5,
    10,
    50,
    100,
    500
  ],

  minItems: 2,
  maxItems: 5,

  /*
    Stage2では紙幣はまだ出さない。
  */
  billChance: 0,

  cardId: "022-coin-rabbit",

  rewardGems: 5,

  dropRates: {
    N: 0.60,
    SR: 0.32,
    UR: 0.08
  }
};