import {
  randomInt as r,
  formatElapsed
} from "../helpers.js";


function pick(array) {
  return array[
    r(0, array.length - 1)
  ];
}


export default {
  types: [
    "clock_read",
    "clock_elapsed",
    "clock_24h"
  ],


  build(stage) {

    /* =====================================================
       ステージ1
       時計を見て、何時何分か答える
    ===================================================== */

    if (stage.type === "clock_read") {
      const minuteChoices =
        Array.isArray(stage.minuteChoices)
          ? stage.minuteChoices
          : [0];

      const hour =
        r(1, 12);

      const minute =
        pick(minuteChoices);

      return {
        kind: "clock",

        mode: "read",

        prompt:
          "この とけいは、なんじ なんぷん？",

        guide:
          minute === 0
            ? "みじかい はりが「じ」、ながい はりが「ふん」を あらわします。"
            : "みじかい はりと、ながい はりを よく みよう。",

        hour,

        minute,

        answer:
          hour * 100 + minute,

        uniqueKey:
          `clock-read-${hour}-${minute}`
      };
    }


    /* =====================================================
       朝・夜の24時間表記
    ===================================================== */

    if (stage.type === "clock_24h") {
      const morningHours =
        Array.isArray(stage.morningHours)
          ? stage.morningHours
          : [6, 7, 8, 9, 10, 11];

      const nightHours =
        Array.isArray(stage.nightHours)
          ? stage.nightHours
          : [18, 19, 20, 21, 22, 23];

      const isNight =
        Math.random() < 0.5;

      const hour24 =
        pick(
          isNight
            ? nightHours
            : morningHours
        );

      const clockHour =
        hour24 % 12 || 12;

      return {
        kind: "clock",

        mode: "24h",

        period:
          isNight
            ? "night"
            : "morning",

        prompt:
          isNight
            ? "よるの じかんです。24じかんひょうきでは、なんじ？"
            : "あさの じかんです。24じかんひょうきでは、なんじ？",

        guide:
          isNight
            ? "よるの じこくは、ひるの12じより あとの じこくで かんがえよう。"
            : "あさの じこくは、とけいに かかれた じこくを よもう。",

        hour:
          clockHour,

        minute: 0,

        answer:
          hour24,

        answerHour24:
          hour24,

        uniqueKey:
          `clock-24h-${isNight ? "night" : "morning"}-${hour24}`
      };
    }


    /* =====================================================
       ステージ2〜6
       ○分後・○時間後を答える
    ===================================================== */

    const minuteChoices =
      Array.isArray(stage.minuteChoices)
        ? stage.minuteChoices
        : [0];

    const elapsedChoices =
      Array.isArray(stage.elapsedChoices)
        ? stage.elapsedChoices
        : [30];

    const hour =
      r(1, 12);

    const minute =
      pick(minuteChoices);

    const elapsedMinutes =
      pick(elapsedChoices);

    const startTotal =
      (hour % 12) * 60 +
      minute;

    const answerTotal =
      startTotal +
      elapsedMinutes;

    const answerHour =
      Math.floor(
        answerTotal / 60
      ) % 12 || 12;

    const answerMinute =
      answerTotal % 60;

    const elapsedText =
      formatElapsed(
        elapsedMinutes
      );

    return {
      kind: "clock",

      mode: "elapsed",

      prompt:
        `いまの とけいをみてね。\n${elapsedText}あとは、\nなんじ なんぷんでしょう？`,

      guide:
        "まず いまの じこくを よみ、そのあと じかんを すすめよう。",

      hour,

      minute,

      elapsedMinutes,

      answer:
        answerHour * 100 +
        answerMinute,

      uniqueKey:
        `clock-elapsed-${hour}-${minute}-${elapsedMinutes}`
    };
  }
};