export default {
  id: "w4-fraction-3",

  sort: 3,

  world: 4,

  unit: "fraction",

  unitLabel: "分数",

  name: "同じ大きさの分数",

  isBoss: false,

  type: "fraction_equivalent",

  /* =========================================
     A / B / C パッドを使用
  ========================================= */
  keypad: "choice",

  cardId: "058-quarter-rabbit",

  rewardGems: 5,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  },

  pairs: [
    {
      left: [1, 2],
      right: [2, 4]
    },

    {
      left: [1, 3],
      right: [2, 6]
    },

    {
      left: [2, 3],
      right: [4, 6]
    },

    {
      left: [1, 2],
      right: [3, 6]
    },

    {
      left: [2, 4],
      right: [3, 6]
    }
  ]
};