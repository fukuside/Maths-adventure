export default {

  id:
    "w2-time-5",

  sort:
    5,

  world:
    2,

  unit:
    "time",

  unitLabel:
    "時刻",

  name:
    "今からなん分後？",

  presentation:
    "persistent",

  isBoss:
    false,

  keypad:
    "clock",

  type:
    "clock_elapsed_after",


  /*
    スタート時刻
  */

  minuteChoices: [
    0,
    15,
    30,
    45
  ],


  /*
    旧S4〜S6を統合

    15分後
    30分後
    45分後
    1時間後
    1時間30分後
    2時間後
  */

  elapsedChoices: [
    15,
    30,
    45,
    60,
    90,
    120
  ],

  rewardGems:
    5,

};