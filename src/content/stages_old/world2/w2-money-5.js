export default {
  id: "w2-money-5",
  sort: 5,
  world: 2,
  unit: "money",
  unitLabel: "お金",
  name: "1000円札と硬貨",
  presentation: "persistent",
  isBoss: false,
  keypad: "money",
  type: "money_sum",
  denominations: [10, 50, 100, 500, 1000],
  minItems: 3,
  maxItems: 4,
  billChance: 0.8,
  cardId: "026-shop-bird",
  rewardGems: 5,
  dropRates: { N: 0.7, SR: 0.25, UR: 0.05 }
};
