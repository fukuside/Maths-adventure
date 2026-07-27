export default {
  id: "w2-money-change-1",
  sort: 7,
  world: 2,

  unit: "money",
  unitLabel: "お金",

  name: "おつりはいくら？",

  presentation: "persistent",
  isBoss: false,

  keypad: "money",
  type: "money_change",

  payments: [100, 500, 1000],

  cardId: "022-coin-rabbit",

  rewardGems: 5,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  }
};
