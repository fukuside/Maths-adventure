export default {
  id: "w2-money-1",
  sort: 1,
  world: 2,
  unit: "money",
  unitLabel: "お金",
  name: "50円まで",
  presentation: "persistent",
  isBoss: false,
  keypad: "money",
  type: "money_sum",
  denominations: [1, 5, 10, 50],
  minItems: 2,
  maxItems: 3,
  billChance: 0.0,
  cardId: "022-coin-rabbit",
  rewardGems: 5,
  dropRates: { N: 0.7, SR: 0.25, UR: 0.05 }
};
