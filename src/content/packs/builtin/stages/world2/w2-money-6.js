export default {
  id: "w2-money-6",
  sort: 10,
  world: 2,
  unit: "money",
  unitLabel: "お金",
  name: "5000円札と硬貨",
  presentation: "persistent",
  isBoss: false,
  keypad: "money",
  type: "money_sum",
  denominations: [50, 100, 500, 1000, 5000],
  minItems: 3,
  maxItems: 4,
  billChance: 0.8,
  cardId: "027-gold-panda",
  rewardGems: 7,
  dropRates: { N: 0.7, SR: 0.25, UR: 0.05 }
};
