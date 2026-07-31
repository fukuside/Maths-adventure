export default {
  id: "w2-time-1",

  sort: 1,

  world: 2,

  unit: "time",

  unitLabel: "時刻",

  name: "なんじなんぷん？",

  presentation: "persistent",

  isBoss: false,

  /*
    時計専用キーパッドを使用。
    後ほど中身を、
    「時を選ぶ → 分を選ぶ」方式へ修正する。
  */
  keypad: "clock",

  /*
    現在使用中の時計問題generator。
    generatorを確認するまで変更しない。
  */
  type: "clock_read",

  /*
    ステージ1では「○時ちょうど」だけを出題。
    答えは「○時00分」として入力する。
  */
  minuteChoices: [0],

  cardId: "015-minute-mouse",

  rewardGems: 5,

  dropRates: {
    N: 0.7,
    SR: 0.25,
    UR: 0.05
  }
};