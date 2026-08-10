export default {
  id: "w2-money-3",
  sort: 3,
  world: 2,
  unit: "money",
  unitLabel: "お金",
  name: "500円まで",
  presentation: "persistent",
  isBoss: false,
  keypad: "money",
  type: "money_sum",
  denominations: [1, 5, 10, 50, 100, 500],
  minItems: 2,
  maxItems: 4,
  billChance: 0.0,
  cardId: "024-wallet-bear",
  rewardGems: 5,
  dropRates: { N: 0.7, SR: 0.25, UR: 0.05 }
};
