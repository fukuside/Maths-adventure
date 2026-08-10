export default {
  id: "w2-money-boss",
  sort: 7,
  world: 2,
  unit: "money",
  unitLabel: "お金",
  name: "お金マスター",
  presentation: "persistent",
  isBoss: true,
  keypad: "money",
  type: "money_sum",
  denominations: [100, 500, 1000, 5000, 10000],
  minItems: 3,
  maxItems: 5,
  billChance: 0.85,
  cardId: "028-money-king",
  rewardGems: 10,
  dropRates: { N: 0.7, SR: 0.25, UR: 0.05 }
};
