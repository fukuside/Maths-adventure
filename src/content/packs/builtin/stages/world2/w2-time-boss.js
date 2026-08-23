export default {

  id:
    "w2-time-boss",

  sort:
    99,

  world:
    2,

  unit:
    "time",

  unitLabel:
    "時刻",

  name:
    "時刻マスター",

  presentation:
    "persistent",

  isBoss:
    true,

  keypad:
    "clock",

  /*
    ボス専用
  */

  type:
    "clock_boss",


  minuteChoices: [
    0,
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55
  ],


  elapsedChoices: [
    15,
    30,
    45,
    60,
    90,
    120
  ],


  cardId:
    "021-chrono-king",

  rewardGems:
    10,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  }
};