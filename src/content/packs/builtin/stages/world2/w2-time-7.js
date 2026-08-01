export default {
  id: "w2-time-7",

  sort: 7,

  world: 2,

  unit: "time",

  unitLabel: "時刻",

  name: "朝と夜の24時間表記",

  presentation: "persistent",

  isBoss: false,

  /*
    24時間表記は0〜23を入力するため、
    通常の数字キーパッドを使用する。
  */
  keypad: "number",

  type: "clock_24h",

  /*
    朝は6〜11時、
    夜は18〜23時を出題する。
  */
  morningHours: [6, 7, 8, 9, 10, 11],

  nightHours: [18, 19, 20, 21, 22, 23],

  cardId: "015-minute-mouse",

  rewardGems: 5,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  }
};