import {
  randomInt as r,
  formatElapsed
} from "../helpers.js";


/* =========================================================
   配列から1つ
========================================================= */

function pick(
  array
) {

  return array[
    r(
      0,
      array.length - 1
    )
  ];
}


/* =========================================================
   時刻表示用

   0分 → 00ふん
   5分 → 5ふん
========================================================= */

function formatMinuteText(
  minute
) {

  return minute === 0
    ? "00ふん"
    : `${minute}ふん`;
}


/* =========================================================
   名前
========================================================= */

const CHILDREN = [
  "たろうくん",
  "はなこさん",
  "じんくん",
  "ろうくん",
  "ななちゃん",
  "そらくん",
  "ゆいちゃん",
  "はるくん",
  "りんちゃん",
  "みおちゃん"
];


/* =========================================================
   習い事
========================================================= */

const LESSONS = [
  "カラテ",
  "サッカー",
  "スイミング",
  "ピアノ",
  "ダンス",
  "そろばん",
  "えいご"
];


/* =========================================================
   ○分後の文章
========================================================= */

function buildAfterStory(
  elapsedMinutes
) {

  const child =
    pick(
      CHILDREN
    );


  const lesson =
    pick(
      LESSONS
    );


  const elapsedText =
    formatElapsed(
      elapsedMinutes
    );


  const patterns = [

    /* -----------------------------------------------
       習い事へ行く
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}あとに\n` +
        `${lesson}へ いきます。\n` +
        `なんじ なんぷんに いえを でる？`,

      storyKey:
        `lesson-go-${child}-${lesson}`
    }),


    /* -----------------------------------------------
       習い事から帰る
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}あとに\n` +
        `${lesson}から かえってきます。\n` +
        `なんじ なんぷんに かえってくる？`,

      storyKey:
        `lesson-return-${child}-${lesson}`
    }),


    /* -----------------------------------------------
       家に帰る約束
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}あとまでに\n` +
        `いえに かえる やくそくです。\n` +
        `なんじ なんぷんまでに かえる？`,

      storyKey:
        `home-${child}`
    }),


    /* -----------------------------------------------
       宿題
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は おうちのひとと\n` +
        `${elapsedText}あとに しゅくだいを する\n` +
        `やくそくをしました。なんじから はじめる？`,

      storyKey:
        `homework-${child}`
    }),


    /* -----------------------------------------------
       お風呂
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}あとに\n` +
        `おふろに はいります。\n` +
        `なんじ なんぷんから はいる？`,

      storyKey:
        `bath-${child}`
    }),


    /* -----------------------------------------------
       お出かけ
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}あとに\n` +
        `おでかけします。\n` +
        `なんじ なんぷんに しゅっぱつする？`,

      storyKey:
        `outing-${child}`
    })
  ];


  return pick(
    patterns
  )();
}


/* =========================================================
   ○分前の文章
========================================================= */

function buildBeforeStory(
  elapsedMinutes
) {

  const child =
    pick(
      CHILDREN
    );


  const lesson =
    pick(
      LESSONS
    );


  const elapsedText =
    formatElapsed(
      elapsedMinutes
    );


  const patterns = [

    /* -----------------------------------------------
       家を出た
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}まえに\n` +
        `${lesson}へ いくため いえを でました。\n` +
        `なんじ なんぷんに いえを でた？`,

      storyKey:
        `lesson-left-${child}-${lesson}`
    }),


    /* -----------------------------------------------
       家に帰った
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}まえに\n` +
        `いえに かえってきました。\n` +
        `なんじ なんぷんに かえってきた？`,

      storyKey:
        `returned-${child}`
    }),


    /* -----------------------------------------------
       宿題開始
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}まえに\n` +
        `しゅくだいを はじめました。\n` +
        `なんじ なんぷんから はじめた？`,

      storyKey:
        `homework-before-${child}`
    }),


    /* -----------------------------------------------
       習い事開始
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}の ${lesson}は\n` +
        `${elapsedText}まえに はじまりました。\n` +
        `なんじ なんぷんに はじまった？`,

      storyKey:
        `lesson-start-${child}-${lesson}`
    }),


    /* -----------------------------------------------
       お風呂
    ------------------------------------------------ */

    () => ({
      prompt:
        `${child}は ${elapsedText}まえに\n` +
        `おふろに はいりました。\n` +
        `なんじ なんぷんに はいった？`,

      storyKey:
        `bath-before-${child}`
    })
  ];


  return pick(
    patterns
  )();
}


/* =========================================================
   GENERATOR
========================================================= */

export default {

  types: [
  "clock_read",
  "clock_minute_read",
  "clock_elapsed",
  "clock_elapsed_after",
  "clock_elapsed_before",
  "clock_24h",
  "clock_boss"
],


  build(
    stage
  ) {

    /* =====================================================
   WORLD2 時刻ボス
   S1〜S6 総復習
===================================================== */

if (
  stage.type ===
  "clock_boss"
) {

  const bossTypes = [

    /*
      時計を読む
    */
    "clock_read",

    /*
      分の読み方
    */
    "clock_minute_read",

    /*
      今から○分後
    */
    "clock_elapsed_after",

    /*
      今から○分前
    */
    "clock_elapsed_before",

    /*
      朝・夜の24時間表記
    */
    "clock_24h"

  ];


  const selectedType =
    pick(
      bossTypes
    );


  /*
    stageそのものは触らず、
    コピーを作る
  */

  stage = {
    ...stage,

    type:
      selectedType
  };
}

    /* =====================================================
       通常の時計読み
    ===================================================== */

    if (
      stage.type ===
      "clock_read"
    ) {

      const minuteChoices =
        Array.isArray(
          stage.minuteChoices
        )
          ? stage.minuteChoices
          : [0];


      const hour =
        r(
          1,
          12
        );


      const minute =
        pick(
          minuteChoices
        );


      return {

        kind:
          "clock",

        mode:
          "read",

        prompt:
          "この とけいは、なんじ なんぷん？",

        guide:
          minute === 0
            ? "みじかい はりが「じ」、ながい はりが「ふん」を あらわします。"
            : "みじかい はりと、ながい はりを よく みよう。",

        hour,

        minute,

        answer:
          hour * 100 +
          minute,

        uniqueKey:
          `clock-read-${hour}-${minute}`
      };
    }


    /* =====================================================
       新S4
       分の読み方
    ===================================================== */

    if (
      stage.type ===
      "clock_minute_read"
    ) {

      const minuteChoices =
        Array.isArray(
          stage.minuteChoices
        )
          ? stage.minuteChoices
          : [
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
            ];


      const hour =
        r(
          1,
          12
        );


      const minute =
        pick(
          minuteChoices
        );


      return {

        kind:
          "clock",

        mode:
          "minute-read",

        prompt:
          "この とけいは\nなんじ なんぷん？",

        guide:
          "ながい はりは、数字を1つ すすむと 5ふん すすむよ。",

        showMinuteGuide:
          true,

        hour,

        minute,

        answer:
          hour * 100 +
          minute,

        uniqueKey:
          `clock-minute-read-${hour}-${minute}`
      };
    }


    /* =====================================================
       朝・夜の24時間表記
    ===================================================== */

    if (
      stage.type ===
      "clock_24h"
    ) {

      const morningHours =
        Array.isArray(
          stage.morningHours
        )
          ? stage.morningHours
          : [
              6,
              7,
              8,
              9,
              10,
              11
            ];


      const nightHours =
        Array.isArray(
          stage.nightHours
        )
          ? stage.nightHours
          : [
              18,
              19,
              20,
              21,
              22,
              23
            ];


      const isNight =
        Math.random() <
        0.5;


      const hour24 =
        pick(
          isNight
            ? nightHours
            : morningHours
        );


      const clockHour =
        hour24 %
          12
        ||
        12;

        return {

  kind:
    "clock",

  mode:
    "24h",


  /*
    24時間表記は
    「20じ」のように数字だけ答える。

    ボス戦でもこの問題だけ
    number keypadへ自動切替。
  */

  keypad:
    "number",


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

  minute:
    0,

  answer:
    hour24,

  answerHour24:
    hour24,

    uniqueKey:
    `clock-24h-${isNight ? "night" : "morning"}-${hour24}`
};


/*
  clock_24h の if を閉じる
*/
}

/* =====================================================
   S5 / S6 共通
===================================================== */
    const minuteChoices =
      Array.isArray(
        stage.minuteChoices
      )
        ? stage.minuteChoices
        : [
            0,
            15,
            30,
            45
          ];


    const elapsedChoices =
      Array.isArray(
        stage.elapsedChoices
      )
        ? stage.elapsedChoices
        : [
            15,
            30,
            45,
            60,
            90,
            120
          ];


    const hour =
      r(
        1,
        12
      );


    const minute =
      pick(
        minuteChoices
      );


    const elapsedMinutes =
      pick(
        elapsedChoices
      );


    const startTotal =
      (
        hour %
        12
      ) *
      60
      +
      minute;


    /* =====================================================
       S6
       ○分前
    ===================================================== */

    if (
      stage.type ===
      "clock_elapsed_before"
    ) {

      /*
        12時間分足してから引くことで
        マイナスを防ぐ
      */

      const answerTotal =
        (
          startTotal
          -
          elapsedMinutes
          +
          12 * 60
        )
        %
        (
          12 *
          60
        );


      const answerHour =
        Math.floor(
          answerTotal /
          60
        )
        %
        12
        ||
        12;


      const answerMinute =
        answerTotal %
        60;


      const story =
        buildBeforeStory(
          elapsedMinutes
        );


      return {

        kind:
          "clock",

        mode:
          "elapsed",

        direction:
          "before",

        prompt:
          story.prompt,

        guide:
          "いまの じこくから、とけいを もどして かんがえよう。",

        hour,

        minute,

        elapsedMinutes,

        answer:
          answerHour *
          100
          +
          answerMinute,

        uniqueKey:
          `clock-before-${hour}-${minute}-${elapsedMinutes}-${story.storyKey}`
      };
    }


    /* =====================================================
       S5
       ○分後

       旧clock_elapsedも互換のためここへ
    ===================================================== */

    const answerTotal =
      startTotal +
      elapsedMinutes;


    const answerHour =
      Math.floor(
        answerTotal /
        60
      )
      %
      12
      ||
      12;


    const answerMinute =
      answerTotal %
      60;


    const story =
      stage.type ===
        "clock_elapsed_after"
        ? buildAfterStory(
            elapsedMinutes
          )
        : null;


    const elapsedText =
      formatElapsed(
        elapsedMinutes
      );

          return {

      kind:
        "clock",

      mode:
        "elapsed",

      direction:
        "after",

      prompt:
        story
          ? story.prompt
          : (
              `いまの とけいをみてね。\n` +
              `${elapsedText}あとは、\n` +
              `なんじ なんぷんでしょう？`
            ),

      guide:
        "いまの じこくから、とけいを すすめて かんがえよう。",

      hour,

      minute,

      elapsedMinutes,

      answer:
        answerHour *
        100
        +
        answerMinute,

      uniqueKey:
        story
          ? `clock-after-${hour}-${minute}-${elapsedMinutes}-${story.storyKey}`
          : `clock-elapsed-${hour}-${minute}-${elapsedMinutes}`
    };
  }
};
