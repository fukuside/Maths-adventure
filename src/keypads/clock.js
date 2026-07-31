export default {
  id: "clock",

  keys(button, { input = "" } = {}) {
    const value = String(input);

    /*
      内部の入力形式

      未選択：
      ""

      時を選択：
      "7|"

      分まで選択：
      "7|30"
    */
    const separatorIndex = value.indexOf("|");
    const hourSelected = separatorIndex >= 0;

    /*
      まだ時を選んでいない場合
      1〜12を表示する
    */
    if (!hourSelected) {
      return [
        ...Array.from(
          { length: 12 },
          (_, index) => {
            const hour = String(index + 1);

            return button(
              `clock-hour:${hour}`,
              hour,
              "clock-hour-key"
            );
          }
        ),

        button(
          "clear",
          "ぜんぶ けす",
          "wide-key clock-clear-key"
        )
      ];
    }

    /*
      時を選択した後
      00〜55分を表示する
    */
    const minuteChoices = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55"
    ];

    return [
      ...minuteChoices.map(minute =>
        button(
          `clock-minute:${minute}`,
          minute,
          "clock-minute-key"
        )
      ),

      button(
        "back",
        "じを えらびなおす",
        "wide-key clock-back-key"
      ),

      button(
        "clear",
        "ぜんぶ けす",
        "wide-key clock-clear-key"
      )
    ];
  }
};