import {rewardDay,rewardUnlockStatus,recordRewardClear,rewardUnlockHint,rewardResetNote} from './reward-unlock.js';
import {prepareWritten} from './written-easy.js';
import {rewardLobby,purchaseEntry} from './reward-games.js';
import {surveyLink,surveyInvitation,snoozeSurvey} from './survey-invitation.js';
import {bgmTracks} from './bgm-tracks.js';
import {isSoundEnabled,setSoundEnabled,watchSound,connectSoundOutput} from './sound-preferences.js';
import {createBgmController} from './bgm-controller.js';
import {moveAbacus} from './abacus-lesson.js';
import {isCompleteExpressionInput} from './expression-completeness.js';
import {getRewardAudioContext,addChestLatch} from './reward-audio.js';
import {writtenRetry} from './written-question.js';
import {recordTrail,renderTrail} from './challenge-trails.js';
import {bossUnlockStatus} from './boss-unlock.js';
import {isInlineChoice} from './inline-choices.js';
import { renderPlayerPortrait } from "./player-portrait.js";
import { getStageRewardCards } from "./stage-rewards.js";
import { worlds, stages, cards, getCard, getStage } from "./registry.js";
import "../content/packs/kindergarten/kindergarten.css";
import { generateQuestions } from "./questions.js";
import { renderQuestionByKind } from "../renderers/registry.js";
import { renderKeypadForStage } from "../keypads/registry.js";
import {
  initializeCloud,
  loadLocalState,
  persistState,
  replaceState,
  setSyncListener,
  getPlayers,
  getActivePlayer,
  createPlayer,
  selectPlayer,
  hasLegacySave,
  migrateLegacySave,
  renameActivePlayer,
  importTransferredPlayer
} from "./storage.js";
import {
  consumeTransferCode,
  createTransferCode,
  isFirebaseConfigured,
  recordLearningResult,
  loadParentReportSettings,
  saveParentReportSettings,
  updateLearningReportSchedule,
  requestParentEmailVerification,
} from "./firebase.js";

const rarityRows = [["UR", 0.10, 1.7], ["SR", 0.35, 1.3], ["N", 0.55, 1]];

export function createApp(root) {

  let state = loadLocalState();

  let screen = "landing";
  let activeRewardGame=null;
  // コースは画面の選択状態だけに保持し、既存セーブを変更しない。
  let selectedCourse = "elementary";
  let rewardFromTop=false;
  let shownRewardDay=rewardDay();
  function refreshRewardDay(){const now=rewardDay();if(now===shownRewardDay)return;shownRewardDay=now;if(['landing','title','reward-lobby'].includes(screen))render();}
  setInterval(refreshRewardDay,15000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshRewardDay();});
  function isKindergartenStage(stage = currentStage) {
    return stage?.packId === "kindergarten" || stage?.course === "kindergarten";
  }
  let worldId = null;
  let currentStage = null;
  let questions = [];
  let qi = 0;
  let challengeRunId = null;
  let newlyUnlockedBosses = [];
  let input = "";

  let earned = null;

  let chestOpened = false;
  let chestOpening = false;
  let cardRevealed = false;
  let chestTimer = null;

  let sync = "local", msg = "", err = "";
  let transferCode = "";

  let lives = 3;
  let gameOver = false;
  let wrongMessage = "";

  let flashVisible = true;
  let inputEnabled = false;
  let flashTimer = null;
  let feedbackTimer = null;
  let zoom = null;

  let answerFeedback = null;
  let feedbackPlaying = false;
  let partnerMood = "idle";

  let titleBgmPlaying = false;
  let stageBgmFading = false;
  let bgmScreen = null;

    let playerMessage = "";
  let playerError = "";

    /* =========================================================
     保護者向け学習レポート設定
  ========================================================= */

  let parentReportSettings = {

    email: "",

    reportMode:
      "weekly",

    emailVerified:
      false
  };


  let parentReportMessage =
    "";


  let parentReportError =
    "";

      async function loadCurrentParentReportSettings() {

    const activePlayer =
      getActivePlayer();


    if (
      !activePlayer?.playerId
    ) {

      parentReportSettings = {

        email: "",

        reportMode:
          "weekly",

        emailVerified:
          false
      };


      return;
    }


    try {

      parentReportSettings =
        await loadParentReportSettings(
          activePlayer.playerId
        );


      parentReportError =
        "";

    } catch (error) {

      console.error(
        "保護者向けレポート設定を読み込めませんでした。",
        error
      );


      parentReportError =
        "学習レポート設定を読み込めませんでした。";
    }
  }


  /* =========================================================
     学習レポート：初期テスト用

     まずは最初の通常ステージ1つだけで
     Firestore保存テストをする
  ========================================================= */

  let learningSessionStartedAt =
    null;

  /*
   * このセッションで
   * 一度でも回答した問題番号
   */

  let learningAttemptedQuestions =
    new Set();


  /*
   * 最初の回答で正解した問題番号
   */

  let learningFirstAttemptCorrectQuestions =
    new Set();


  let learningSessionSaved =
    false;

    function resetLearningSession() {

    learningSessionStartedAt =
      Date.now();


    learningAttemptedQuestions =
      new Set();


    learningFirstAttemptCorrectQuestions =
      new Set();


    learningSessionSaved =
      false;
  }

     function shouldRecordLearning() {

    /*
     * 通常ステージ・ボス戦
     * すべて学習記録対象
     */

    return Boolean(
      currentStage?.id
    );
  }


  /* =========================================================
     保護者向け学習レポート表示名

     通常ステージ：
       引き算：フラッシュ引き算
       時計：分の読み方

     ボス戦：
       WORLD1：ボス戦
       WORLD2：ボス戦
  ========================================================= */

  function buildLearningUnitName(stage) {

    if (!stage) {
      return "";
    }


    /*
     * ボス戦
     */

    if (stage.isBoss) {

      return isKindergartenStage(stage) ? `${stage.unitLabel}：まとめ` : `WORLD${stage.world}：ボス戦`;
    }


    /*
     * 通常ステージ
     */

    const unitLabel =
      String(
        stage.unitLabel ??
        stage.unit ??
        ""
      ).trim();


    const stageName =
      String(
        stage.name ??
        ""
      ).trim();


    /*
     * 単元名とステージ名が両方ある場合
     */

    if (
      unitLabel &&
      stageName &&
      unitLabel !== stageName
    ) {

      return `${unitLabel}：${stageName}`;
    }


    /*
     * 片方だけの場合
     */

    return (
      stageName ||
      unitLabel ||
      `WORLD${stage.world}`
    );
  }

    /* =========================================================
     この問題が
     「最初の回答」かどうかを判定

     true
       → この問題への最初の回答

     false
       → 一度間違えた後の再回答
  ========================================================= */

  function markLearningQuestionAttempted() {

    if (
      !shouldRecordLearning()
    ) {
      return false;
    }


    const isFirstAttempt =
      !learningAttemptedQuestions.has(
        qi
      );


    learningAttemptedQuestions.add(
      qi
    );


    return isFirstAttempt;
  }

     /* =========================================================
     最初の回答で正解した問題を記録
  ========================================================= */

  function markLearningQuestionCorrect(
    isFirstAttempt
  ) {

    if (
      !shouldRecordLearning() ||
      !isFirstAttempt
    ) {
      return;
    }


    learningFirstAttemptCorrectQuestions.add(
      qi
    );
  }

    async function saveLearningSession() {

    console.log(
      "学習記録：保存処理を開始",
      {
        stageId:
          currentStage?.id,

        stageName:
          currentStage?.name,

        isBoss:
          currentStage?.isBoss,

        startedAt:
          learningSessionStartedAt,

        attemptedQuestions:
          learningAttemptedQuestions.size,

        firstAttemptCorrectAnswers:
          learningFirstAttemptCorrectQuestions.size
      }
    );


    if (
      !shouldRecordLearning() ||
      learningSessionSaved ||
      !learningSessionStartedAt
    ) {

      console.log(
        "学習記録：保存対象外",
        {
          shouldRecordLearning:
            shouldRecordLearning(),

          learningSessionSaved,

          learningSessionStartedAt
        }
      );

      return;
    }

    const activePlayer =
      getActivePlayer();


    if (
      !activePlayer?.playerId
    ) {

      console.warn(
        "学習記録：アクティブプレイヤーが見つかりません。"
      );

      return;
    }


    const studySeconds =
      Math.max(
        1,
        Math.floor(
          (
            Date.now() -
            learningSessionStartedAt
          ) / 1000
        )
      );


    const totalQuestions =
      learningAttemptedQuestions.size;


    const firstAttemptCorrectAnswers =
      learningFirstAttemptCorrectQuestions.size;


    if (
      totalQuestions <= 0
    ) {
      return;
    }


    learningSessionSaved =
      true;


    try {

            const learningLabel =
        buildLearningUnitName(
          currentStage
        );


      await recordLearningResult({

        playerId:
          activePlayer.playerId,

        studySeconds,

        totalQuestions,

        firstAttemptCorrectAnswers,

        unitName:
          learningLabel,

        stageId:
          currentStage?.id ??
          "",

        stageLabel:
          learningLabel
      });

            /*
       * 学習が終わった時点でも
       * 15分後へ送信予定を更新
       */

      await updateLearningReportSchedule(
        activePlayer.playerId
      );

            console.log(
        "学習記録 保存完了",
        {
          stageId:
            currentStage?.id,

          studySeconds,

          totalQuestions,

          firstAttemptCorrectAnswers
        }
      );

    } catch (error) {

      learningSessionSaved =
        false;


            console.error(
        "学習記録の保存に失敗しました。",
        error
      );
    }
  }


  /* =========================================================
     タイトルBGM
  ========================================================= */

  const titleMusic=createBgmController({
    canPlay:()=>isSoundEnabled()&&!stageBgmFading&&['landing','title','player-select','player-create','legacy-migrate','world'].includes(screen),
    onChange:playing=>{titleBgmPlaying=playing;render();}
  });
  watchSound(value=>{if(!value)stopTitleBgm();render();});


  /* =========================================================
     イベント
  ========================================================= */

  setSyncListener(
  x => {
    sync = x;
    render();
  }
);


/*
  マウス・iPad・タッチ端末を
  pointerup に統一

  clickの遅延・座標ずれを避ける
*/
root.addEventListener(
  "pointerup",
  click
);


root.addEventListener(
  "input",
  onInput
);


root.addEventListener(
  "mousemove",
  tiltMouse
);


root.addEventListener(
  "touchmove",
  tiltTouch,
  {
    passive: false
  }
);

  /* =========================================================
     初期表示
  ========================================================= */

  render();


  initializeCloud(
    state
  )
    .then(
      x => {
        state = x;
        render();
      }
    )
    .catch(
      () => {
        sync = "local";
        render();
      }
    );


  /* =========================================================
     INPUT
  ========================================================= */

  root.addEventListener('change', event => {
    if (event.target.matches('input[name="parent-report-mode"]')) onInput(event);
  });

  function onInput(e) {
    if (e.target.matches('input[name="parent-report-mode"]') && e.target.checked) {
      parentReportSettings = { ...parentReportSettings, reportMode: e.target.value };
      root.querySelectorAll('.parent-report-option-card').forEach(card => {
        card.classList.toggle('selected', card.querySelector('input[name="parent-report-mode"]').checked);
      });
      return;
    }


    /*
      引っ越しコード
      数字6桁だけ
    */

    if (
      e.target.matches(
        "[data-transfer-input]"
      )
    ) {

      e.target.value =
        e.target.value
          .replace(
            /\D/g,
            ""
          )
          .slice(
            0,
            6
          );
    }


    /*
      ニックネーム
      最大20文字
    */

    if (
      e.target.matches(
        "[data-nickname-input], [data-rename-input]"
      )
    ) {

      e.target.value =
        e.target.value.slice(
          0,
          20
        );
    }
  }

  async function click(e) {

  const t =
    e.target.closest(
      "[data-action]"
    );


  if (!t) {
    return;
  }


  /*
    PointerEventでは
    タッチ中のスクロールなどを
    ボタン操作として誤認しにくくする
  */

  let a =
    t.dataset.action;

  if (!a) {
    return;
  }
    if(a==='reward-top'){rewardFromTop=true;screen=getPlayers().length?'player-select':hasLegacySave()?'legacy-migrate':'player-create';render();return;}
    if(a==='reward-enter'){
      if(screen!=='reward-lobby'||!getActivePlayer()||!unlockedPartnerEntries().length)return;
      if(t.dataset.game==='monster-pinball'&&!unlockedPartnerEntries().some(x=>x.rarity==='SR'))return;
      if(['treasure-fishing','monster-path'].includes(t.dataset.game)&&!unlockedPartnerEntries().some(x=>x.rarity==='N'))return;
      if(!rewardUnlockStatus(state).unlocked){render();return;}
      const entry=purchaseEntry(state.gems,t.dataset.game);if(!entry)return;
      activeRewardGame=entry.game;state.gems=entry.gems;screen='reward-play';render();persistState(state);return;
    }
    if (a === "survey-later") { snoozeSurvey(localStorage); render(); return; }
    if (a === "change-course") {
      const course = t.dataset.course;
      if (!["kindergarten", "elementary"].includes(course)) return;
      clearQuestionTimers();
      selectedCourse = course;
      screen = "title";
      render();
      return;
    }
    if (a === "landing-start" || a === "select-course") {
      rewardFromTop=false;
      if (a === "select-course") {
        const course = t.dataset.course;
        if (!["kindergarten", "elementary"].includes(course)) return;
        selectedCourse = course;
      }

  const players = getPlayers();

  if (players.length > 0) {
    screen = "player-select";
  } else if (hasLegacySave()) {
    screen = "legacy-migrate";
  } else {
    screen = "player-create";
  }

  render();
  return;
}

if (a === "player-new") {
  playerMessage = "";
  playerError = "";
  screen = "player-create";
  render();
  return;
}

if (a === "player-select") {

  try {

    const playerId =
      t.dataset.playerId;


    /*
     * まずローカルの
     * プレイヤーを切り替える
     */

    state =
      selectPlayer(
        playerId
      );


    playerMessage = "";
    playerError = "";


    /*
     * 選択したプレイヤー専用の
     * Firebaseデータを読み込む
     */

    try {

      state =
        await initializeCloud(
          state
        );

    } catch (cloudError) {

      console.warn(
        "プレイヤーのクラウド同期に失敗しました。",
        cloudError
      );

      /*
       * Firebaseが失敗しても
       * ローカルデータでゲームは続ける
       */

    }


    screen = rewardFromTop ? "reward-lobby" : "title";
    rewardFromTop=false;


    render();

  } catch (error) {

    playerError =
      error?.message ??
      "プレイヤーを選べませんでした。";


    render();
  }


  return;
}

if (a === "player-create-submit") {
  const nickname =
    root.querySelector("[data-nickname-input]")
      ?.value
      ?.trim() ?? "";

  if (!nickname) {
    playerError =
      "ニックネームを入力してください。";

    render();
    return;
  }

  try {
    const player =
      createPlayer(nickname);

    state = player.state;

    playerMessage = "";
    playerError = "";

    screen = rewardFromTop ? "reward-lobby" : "title";
    rewardFromTop=false;

    render();
  } catch (error) {
    playerError = error.message;
    render();
  }

  return;
}

if (a === "legacy-migrate-submit") {
  const nickname =
    root.querySelector("[data-nickname-input]")
      ?.value
      ?.trim() ?? "";

  if (!nickname) {
    playerError =
      "ニックネームを入力してください。";

    render();
    return;
  }

  try {
    const player =
      migrateLegacySave(nickname);

    state = player.state;

    playerMessage =
      "これまでの冒険データを引き継ぎました！";

    playerError = "";

    screen = "title";

    render();
  } catch (error) {
    playerError = error.message;
    render();
  }

  return;
}

if (a === "toggle-title-bgm") {
  toggleTitleBgm();
  return;
}

if (a === "player-rename-submit") {
  const nickname =
    root.querySelector("[data-rename-input]")
      ?.value
      ?.trim() ?? "";

  if (!nickname) {
    playerError =
      "新しいニックネームを入力してください。";

    render();
    return;
  }

  if (nickname.length > 20) {
    playerError =
      "ニックネームは20文字以内にしてください。";

    render();
    return;
  }

  try {
    renameActivePlayer(nickname);

    playerMessage =
      `なまえを「${nickname}」にかえました！`;

    playerError = "";

    screen = "sync";

    render();

  } catch (error) {
    playerError =
      error?.message ??
      "名前を変更できませんでした。";

    render();
  }

  return;
}

    if (
  feedbackPlaying &&
  ![
    "go",
    "close-zoom",
    "key",
    "submit"
  ].includes(a)
) {
  return;
}
    if (
  a === "go"
) {

  clearQuestionTimers();


  const nextScreen =
    t.dataset.screen;


  /*
   * 引っ越し・設定画面を開くとき
   * 保護者レポート設定も読み込む
   */

  if (
    nextScreen ===
    "sync"
  ) {

    await loadCurrentParentReportSettings();
  }


  screen =
    nextScreen;


  render();

  return;
}
    if (a === "world") { worldId = Number(t.dataset.world); screen = "world"; render(); return; }
    if (a === "stage") {
  if(stageBgmFading)return;

  /*
   * ステージ決定
   */

  const nextStage=getStage(t.dataset.id);
  if(!nextStage||!bossUnlockStatus(state,nextStage,stages).unlocked)return;
  currentStage=nextStage;
  newlyUnlockedBosses=[];


  /*
   * ゲーム画面で使う
   * 現在のパートナー画像を先読み
   */

  preloadCurrentPartnerImage();

  questions =
    generateQuestions(
      currentStage,
      isKindergartenStage() ? 5 : 10
    );

    /*
  ステージ開始前に
  問題画像をまとめて先読み
*/

questions.forEach(
  question => {

    preloadQuestionImages(
      question
    );

  }
);

  qi = 0;
  challengeRunId = crypto.randomUUID();
  input = "";
  earned = null;

  chestOpened = false;

  lives = 3;
  gameOver = false;

  wrongMessage = "";
  answerFeedback = null;

    partnerMood = "start";


  /*
   * 学習レポート用
   * ステージ開始時に計測開始
   */

  resetLearningSession();

    /*
   * 保護者向け学習レポート
   * 学習開始時に送信予定を15分後へ更新
   */

  const activeLearningPlayer =
    getActivePlayer();


  if (
    activeLearningPlayer?.playerId
  ) {

    void updateLearningReportSchedule(
      activeLearningPlayer.playerId
    );
  }

  /*
   * タイトルBGMを
   * ゆっくりフェードアウト
   */

  stageBgmFading=true;
  screen = "game";
  startQuestion();
  await fadeOutTitleBgm(1200);
  stageBgmFading=false;

  return;
}
    if (a === "replay-flash") { if (usesFlash(currentStage) && !answerFeedback) startQuestion(); return; }
    if (a === "key") {

  if (!inputEnabled) {
    return;
  }


  const value =
    t.dataset.value;


  const question =
    questions[qi] ?? null;


  /* =====================================================
   時計入力

   Stageではなく
   現在のQuestionを最優先する。

   ボス戦で
   ・通常時計 → clock
   ・24時間表記 → number

   を切り替えられるようにする。
===================================================== */

const activeKeypad =
  question?.keypad
  ??
  currentStage?.keypad
  ??
  (
    currentStage?.type?.startsWith(
      "clock_"
    )
      ? "clock"
      : "number"
  );


const isClockInputQuestion =
  activeKeypad ===
  "clock";


if (
  isClockInputQuestion
) {

    if (
      value === "clear"
    ) {

      input = "";

      render();
      return;
    }


    if (
      value === "back"
    ) {

      input = "";

      render();
      return;
    }


    if (
      typeof value === "string" &&
      value.startsWith(
        "clock-hour:"
      )
    ) {

      const hour =
        value.slice(
          "clock-hour:".length
        );


      if (
        /^(?:[1-9]|1[0-2])$/.test(
          hour
        )
      ) {

        input =
          `${hour}|`;
      }


      render();
      return;
    }


    if (
      typeof value === "string" &&
      value.startsWith(
        "clock-minute:"
      )
    ) {

      const minute =
        value.slice(
          "clock-minute:".length
        );


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


      if (
        input.includes("|") &&
        minuteChoices.includes(
          minute
        )
      ) {

        const hour =
          input.split("|")[0];


        input =
          `${hour}|${minute}`;
      }


      render();
      return;
    }


    return;
  }


  /* =====================================================
     全消し
  ===================================================== */

  if (
    value === "clear"
  ) {

    input = "";

    render();
    return;
  }


  /* =====================================================
     ひとつ戻す
  ===================================================== */

  if (
    value === "back"
  ) {

    input =
      input.slice(
        0,
        -1
      );


    render();
    return;
  }


  /* =====================================================
     式入力
  ===================================================== */

  if (
    question?.keypad ===
      "expression"
  ) {

    /*
      入力できる文字だけ許可
    */

    const allowed =
      [
        "+",
        "-",
        "*",
        "/",
        "=",
        "."
      ].includes(
        value
      )
      ||
      /^[0-9]$/.test(
        value
      );


    if (!allowed) {

      render();
      return;
    }


    /*
      最大30文字
    */

    if (
      input.length >= 30
    ) {

      render();
      return;
    }


    /*
      演算記号は1個だけ

      例
      5+3
    */

    if (
      [
        "+",
        "-",
        "*",
        "/"
      ].includes(
        value
      )
    ) {

      if (
        /[+\-*/]/.test(
          input
        )
      ) {

        render();
        return;
      }


      /*
        数字より先に
        演算記号は押せない
      */

      if (
        input === ""
      ) {

        render();
        return;
      }
    }


    /*
      ＝は1回だけ
    */

    if (
      value === "="
    ) {

      if (
        input.includes("=")
        ||
        !/[+\-*/]/.test(
          input
        )
      ) {

        render();
        return;
      }
    }


    /*
      ＝を入れたあとは
      ＋－×÷を追加できない
    */

    if (
      input.includes("=")
      &&
      [
        "+",
        "-",
        "*",
        "/",
        "="
      ].includes(
        value
      )
    ) {

      render();
      return;
    }


    input += value;


    render();
    return;
  }


  /* =====================================================
     A / B / C
  ===================================================== */

  const isChoiceQuestion =
    Array.isArray(
      question?.choices
    )
    &&
    typeof question?.answer ===
      "string"
    &&
    /^[ABC]$/.test(
      question.answer
    );


  if (
    isChoiceQuestion
  ) {

    if (
      /^[ABC]$/.test(
        value
      )
    ) {

      input = value;
    }


    render();
    return;
  }


  /* =====================================================
     分数
  ===================================================== */

  const isFractionInputQuestion =
    question?.kind ===
      "fraction-add-same-denominator"
    ||
    question?.kind ===
      "fraction-subtract-same-denominator";


  if (
    isFractionInputQuestion
  ) {

    if (
      value === "/"
    ) {

      if (
        input === ""
        ||
        input.includes("/")
      ) {

        render();
        return;
      }


      input += "/";

      render();
      return;
    }


    if (
      /^[0-9]$/.test(
        value
      )
    ) {

      input += value;
    }


    render();
    return;
  }


  /* =====================================================
     通常入力
  ===================================================== */

  if (
    input.length < (questions[qi]?.kind === 'written-calculation' ? questions[qi].answer.length : 20)
  ) {

    input += value;
  }


  render();
  requestAnimationFrame(() => {
    const area=document.querySelector('.input-dock-game');
    const slot=area?.querySelector('[aria-current="step"]');
    const keys=area?.querySelector('.keypad');
    if(slot && keys){
      const r=slot.getBoundingClientRect(),limit=innerWidth<760?keys.getBoundingClientRect().top-76:innerHeight-20;
      if(r.bottom>limit || r.top<90)window.scrollBy({top:r.top-Math.max(96,(limit-90)/2),behavior:'instant'});
    }
  });
  return;
}
    if(a === 'ruler-align'){
      const q=questions[qi];if(screen!=='game'||!inputEnabled||feedbackPlaying||!q?.requiresRulerAlignment)return;
      q.rulerAligned=true;wrongMessage='';render();return;
    }
    if(a === 'shape-turn'){
      const q=questions[qi];if(screen!=='game'||!inputEnabled||feedbackPlaying||q?.kind!=='shape-build'||q.counting)return;
      input=String(((input===''?q.initial:Number(input))+1)%4);render();return;
    }
    if(a === 'abacus-bead'){
      const q=questions[qi];if(screen!=='game'||!inputEnabled||feedbackPlaying||q?.kind!=='abacus-lesson'||q.mode!=='operate')return;
      const value=moveAbacus(q,input,Number(t.dataset.rod),Number(t.dataset.bead));if(value===null)return;
      input=value;wrongMessage='';render();return;
    }
    if(a === 'mirror-point'){
      const q=questions[qi],value=Number(t.dataset.value);
      if(screen!=='game'||!inputEnabled||feedbackPlaying||q?.kind!=='mirror-grid'||!Number.isInteger(value)||value<0||value>80)return;
      input=String(value);render();return;
    }
    if(a === 'net-face'){
      const q=questions[qi];if(screen!=='game'||!inputEnabled||feedbackPlaying||q?.kind!=='cube-net'||!q.cells.some(c=>String(c.label)===t.dataset.value))return;
      input=t.dataset.value;render();return;
    }
    if(a === 'inline-choice-answer'){
      const q=questions[qi];if(screen!=='game'||!inputEnabled||feedbackPlaying||!isInlineChoice(q)||!q.choices.some(c=>c.id===t.dataset.value))return;
      input=t.dataset.value;a='answer';
    }
    if (a === "k-answer") {
      const question = questions[qi];
      if (screen !== "game" || !isKindergartenStage() || !inputEnabled || feedbackPlaying
        || !question?.choices?.some(choice => choice.id === t.dataset.value)) return;
      input = t.dataset.value;
      a = "answer";
    }
    if (a === "answer") {
      if (!inputEnabled || input === "") return;
      const question = questions[qi];
      if(['fraction-add-same-denominator','fraction-subtract-same-denominator'].includes(question?.kind)&&!/^\d+\/\d+$/.test(input)){wrongMessage='分母、ぶんの、分子の順に、最後まで 入れてね。';render();return;}
      if(question?.keypad==='expression'&&question.expression&&!isCompleteExpressionInput(input)){wrongMessage='しきと、＝のあとの答えまで 入れてね。';render();return;}
      if(question?.kind === 'written-calculation' && input.length !== question.answer.length) return;

            /*
       * この問題への
       * 最初の回答かどうか
       */

      const isFirstLearningAttempt =
        markLearningQuestionAttempted();

const isChoiceAnswer =
  typeof question?.answer ===
    "string"
  &&
  /^[ABC]$/.test(
    question.answer
  );


const isFractionAnswer =
  isFullFractionAnswerQuestion(
    question
  );


const isExpressionAnswer =
  question?.keypad ===
    "expression"
  &&
  question?.expression;

/* =========================================================
   保護者向け学習レポート表示名
========================================================= */

function buildLearningUnitName(
  stage
) {

  if (
    !stage
  ) {
    return "";
  }


  /* =====================================================
     ボス戦

     WORLD1：ボス戦
     WORLD2：ボス戦
  ===================================================== */

  if (
    stage.isBoss
  ) {

    return (
      `WORLD${stage.world}：ボス戦`
    );
  }


  /* =====================================================
     通常ステージ
  ===================================================== */

  const unitLabel =
    String(
      stage.unitLabel ??
      stage.unit ??
      ""
    )
      .trim();


  const stageName =
    String(
      stage.name ??
      ""
    )
      .trim();


  if (
    unitLabel &&
    stageName &&
    unitLabel !== stageName
  ) {

    return (
      `${unitLabel}：${stageName}`
    );
  }


  return (
    stageName ||
    unitLabel ||
    `WORLD${stage.world}`
  );
}

/* =========================================================
   正誤判定

   ① 式入力
   ② A/B/C
   ③ 分数
   ④ 通常数字
========================================================= */

const isCorrect =
  question?.kind === 'written-calculation' ? input === question.answer : isExpressionAnswer

    ? isCorrectExpressionInput(
        input,
        question
      )

    : isChoiceAnswer

      ? input ===
        question.answer

      : isFractionAnswer

        ? isCorrectFractionInput(
            input,
            question
          )

        : Math.abs(
            parseAnswerInput(
              input
            )
            -
            Number(
              question.answer
            )
          ) < 1e-9;

if(question?.requiresRulerAlignment&&!question.rulerAligned){wrongMessage='まず、ものさしの0を 左のはしに あわせよう。';render();return;}
if (isCorrect) {

        /*
         * 学習レポート用
         * 正解した問題数 +1
         */

        markLearningQuestionCorrect(
          isFirstLearningAttempt
        );

        input = "";
        inputEnabled = false;
        wrongMessage = "";
        feedbackPlaying = true;
        state.totalExp = Number(state.totalExp ?? 0) + 10;
        answerFeedback = "correct";
        partnerMood = "correct";
        incrementPartnerStudy();
        render();
        playCorrectSound();
        persistState(state);
        clearFeedback();
        feedbackTimer = setTimeout(() => {
          answerFeedback = null;
          feedbackPlaying = false;
          partnerMood = "idle";
          qi++;
          if (qi >= questions.length) finish();
          else startQuestion();
        }, 1050);
      }
      else {
        const writtenHelp=question?.kind==='written-calculation'?writtenRetry(question,input):null;
        input = writtenHelp?.prefix ?? "";
        if (isKindergartenStage()) {
          wrongMessage = "もういちど みてみよう。";
          partnerMood = "encourage";
          startQuestion();
          return;
        }
        lives -= 1;
        if (lives > 0) {
          wrongMessage = writtenHelp ? writtenHelp.hint : question?.keypad === 'keyboard'
            ? 'いっしょに位を見てみよう。 '+question.guide
            : "バリアが ひとつ こわれた！ もういちど やってみよう。";
          partnerMood = "encourage";
          startQuestion();
                } else {
          gameOver = true;
          inputEnabled = false;
          flashVisible = false;
          clearQuestionTimers();
          wrongMessage = "";

          /*
           * 学習レポート用
           * ゲームオーバーでも途中結果を保存
           */

          void saveLearningSession();

          render();
        }
      }
      return;
    }
    if (a === "open-chest") {
  if (chestOpening || cardRevealed) return;

  chestOpened = true;
  chestOpening = true;
  cardRevealed = false;

  stopTitleBgm();
  playChestOpenSound();

  render();

  clearTimeout(chestTimer);

  const revealDelay =
    earned?.rarity === "UR"
      ? 2200
      : earned?.rarity === "SR"
        ? 1750
        : 1350;

  chestTimer = setTimeout(() => {

    chestOpening = false;
    cardRevealed = true;

    render();

    playCardRevealSound(
      earned?.rarity
    );

  }, revealDelay);

  return;
}

        if (a === "retry-stage") {
      newlyUnlockedBosses=[];

      questions =
        generateQuestions(
          currentStage,
          isKindergartenStage() ? 5 : 10
        );

      qi = 0;
  challengeRunId = crypto.randomUUID();
      input = "";
      lives = 3;
      gameOver = false;
      wrongMessage = "";
      answerFeedback = null;


      /*
       * 再挑戦は新しい学習セッションとして計測
       */

      resetLearningSession();

      if (isKindergartenStage()) screen = "game";
      startQuestion();

      return;
    }
    if (a === "zoom-card") { zoom = { card: getCard(t.dataset.cardId), rarity: t.dataset.rarity }; render(); return; }
    if (a === "close-zoom") { zoom = null; render(); return; }
    if (
  a ===
  "choose-partner"
) {

  state.partnerKey =
    t.dataset.key;


  state.partnerStudy =
    state.partnerStudy ?? {};


  /*
   * N / SR / UR の旧学習記録を
   * 同一モンスターへ統合
   */

  ensurePartnerStudyRecord(
    state.partnerKey
  );


  await persistState(
    state
  );


  msg =
    "パートナーに せっていしました！";


  render();

  return;
}
    if (a === "remove-partner") {
      state.partnerKey = null;
      await persistState(state);
      render();
      return;
    }

    if (
  a ===
  "parent-report-save"
) {

  const activePlayer =
    getActivePlayer();


  if (
    !activePlayer?.playerId
  ) {

    parentReportError =
      "先にプレイヤーを選んでください。";


    parentReportMessage =
      "";


    render();

    return;
  }


  const email =
    root.querySelector(
      "[data-parent-report-email]"
    )
      ?.value
      ?.trim()
      ?? "";


  const reportMode =
    root.querySelector(
      'input[name="parent-report-mode"]:checked'
    )
      ?.value
      ?? "weekly";


  try {

    parentReportSettings =
      await saveParentReportSettings({

        playerId:
          activePlayer.playerId,

        email,

        reportMode
      });


    parentReportMessage =
      "学習レポートの設定を保存しました。";


    parentReportError =
      "";


  } catch (error) {

    parentReportMessage =
      "";


    parentReportError =
      error?.message ??
      "設定を保存できませんでした。";
  }


  render();

  return;
}

/* =========================================================
   保護者メールアドレス確認メール
========================================================= */

if (
  a ===
  "parent-report-verify"
) {

  const activePlayer =
    getActivePlayer();


  if (
    !activePlayer?.playerId
  ) {

    parentReportMessage =
      "";

    parentReportError =
      "先にプレイヤーを選んでください。";

    render();

    return;
  }


  const email =
    String(
      parentReportSettings.email ??
      ""
    )
      .trim();


  if (
    !email
  ) {

    parentReportMessage =
      "";

    parentReportError =
      "先にメールアドレスを保存してください。";

    render();

    return;
  }


  parentReportMessage =
    "確認メールを送信しています…";


  parentReportError =
    "";


  render();


  try {

    const result =
      await requestParentEmailVerification({

        playerId:
          activePlayer.playerId,

        email
      });


    if (
      result?.alreadyVerified ===
      true
    ) {

      parentReportSettings = {
        ...parentReportSettings,

        emailVerified:
          true
      };


      parentReportMessage =
        "このメールアドレスは確認済みです。";

    } else {

      parentReportMessage =
        "確認メールを送信しました。メール内の「メールアドレスを確認」を押してください。";
    }


    parentReportError =
      "";


  } catch (
    error
  ) {

    console.error(
      "確認メールを送信できませんでした。",
      error
    );


    parentReportMessage =
      "";


    parentReportError =
      error?.message ??
      "確認メールを送信できませんでした。";
  }


  render();

  return;
}
    
    if (a === "transfer-create") {

  try {

    const activePlayer =
      getActivePlayer();


    if (!activePlayer) {

      throw new Error(
        "引っ越すプレイヤーが選ばれていません。"
      );
    }


    /*
      =========================================
      引っ越しデータ Version 2

      playerId も一緒に持たせる。

      同じプレイヤーを再度引っ越した場合は
      引っ越し先で更新できる。
      =========================================
    */

    const transferData = {

      version: 2,

      player: {

        playerId:
          activePlayer.playerId,

        nickname:
          activePlayer.nickname ??
          "プレイヤー",

        state
      }
    };


    transferCode =
      await createTransferCode(
        transferData
      );


    /*
      一般メッセージ欄には
      コードを入れない
    */

    msg = "";
    err = "";


  } catch (error) {

    transferCode = "";

    err =
      error?.message ??
      "引っ越しコードを発行できませんでした。";
  }


  render();
  return;
}

if (a === "transfer-use") {
  const code =
    root.querySelector(
      "[data-transfer-input]"
    )?.value?.trim() ?? "";

  if (!/^\d{6}$/.test(code)) {
    err =
      "6桁の引っ越しコードを入力してください。";

    msg = "";

    render();
    return;
  }

  try {
    const transferredData =
      await consumeTransferCode(code);

    /*
      =========================================
      新方式 Version 2

      nickname + state をまとめて復元
      =========================================
    */
    if (
      transferredData?.version === 2 &&
      transferredData?.player?.state
    ) {
      const importedPlayer =
  importTransferredPlayer({

    playerId:
      transferredData.player.playerId ??
      null,

    nickname:
      transferredData.player.nickname ??
      "プレイヤー",

    state:
      transferredData.player.state
  });

      state =
        importedPlayer.state;
    }

    /*
      =========================================
      旧方式との互換

      以前の引っ越しコードは
      state だけが保存されているため、
      そのまま復元する。
      =========================================
    */
    else {
      state =
        await replaceState(
          transferredData
        );
    }

    msg =
  `「${importedPlayer.nickname}」のデータを引き継ぎました！`;

    err = "";

    screen = "title";

  } catch (error) {
    err =
      error?.message ??
      "データを引き継げませんでした。";

    msg = "";
  }

  render();
  return;
}
  }

  function usesFlash(stage) {
  return stage?.presentation === "flash";
}

/* =========================================================
   モンスター画像の先読み
========================================================= */

const preloadedMonsterImages =
  new Set();


function preloadMonsterImage(
  src
) {

  if (
    typeof src !== "string" ||
    src === "" ||
    preloadedMonsterImages.has(src)
  ) {
    return;
  }


  const img =
    new Image();


  img.decoding =
    "async";


  try {

    img.fetchPriority =
      "high";

  } catch {
    // 未対応ブラウザはそのまま
  }


  img.src =
    src;


  preloadedMonsterImages.add(
    src
  );
}


/* =========================================================
   現在のパートナー画像を先読み
========================================================= */

function preloadCurrentPartnerImage() {

  const p =
    selectedPartner();


  if (!p) {
    return;
  }


  preloadMonsterImage(
    image(
      p.card,
      p.rarity
    )
  );
}

/* =========================================================
   問題画像の先読み
========================================================= */

const preloadedQuestionImages =
  new Set();


function preloadQuestionImage(
  src
) {

  if (
    typeof src !==
      "string"
    ||
    src === ""
    ||
    preloadedQuestionImages.has(
      src
    )
  ) {
    return;
  }


  const img =
    new Image();


  /*
    問題表示用なので
    lazyにはしない
  */

  img.decoding =
    "async";


  /*
    ブラウザが対応していれば
    優先度を上げる
  */

  try {

    img.fetchPriority =
      "high";

  } catch {
    // 未対応ブラウザはそのまま
  }


  img.src =
    src;


  preloadedQuestionImages.add(
    src
  );
}


/* =========================================================
   1問分の画像を探して先読み
========================================================= */

function preloadQuestionImages(
  question
) {

  if (!question) {
    return;
  }


  /* -----------------------------------------------------
     money問題
  ----------------------------------------------------- */

  if (
    Array.isArray(
      question.items
    )
  ) {

    question.items.forEach(
      item => {

        if (
          item?.image
        ) {

          preloadQuestionImage(
            item.image
          );
        }

      }
    );
  }


  /* -----------------------------------------------------
     money-choiceなど
     選択肢の中にもお金画像がある
  ----------------------------------------------------- */

  if (
    Array.isArray(
      question.choices
    )
  ) {

    question.choices.forEach(
      choice => {

        if (
          choice?.image
        ) {

          preloadQuestionImage(
            choice.image
          );
        }


        if (
          Array.isArray(
            choice?.moneyItems
          )
        ) {

          choice.moneyItems.forEach(
            item => {

              if (
                item?.image
              ) {

                preloadQuestionImage(
                  item.image
                );
              }

            }
          );
        }

      }
    );
  }


  /* -----------------------------------------------------
     将来の問題画像にも対応
  ----------------------------------------------------- */

  [
    question.image,
    question.imageSrc,
    question.iconImage
  ].forEach(
    src => {

      if (
        typeof src ===
          "string"
      ) {

        preloadQuestionImage(
          src
        );
      }

    }
  );
}


/* =========================================================
   現在＋次の問題を先読み
========================================================= */

function preloadNearbyQuestions() {

  preloadQuestionImages(
    questions[
      qi
    ]
  );


  preloadQuestionImages(
    questions[
      qi + 1
    ]
  );


  preloadQuestionImages(
    questions[
      qi + 2
    ]
  );
}

  function startQuestion() {

  clearFlash();
  clearFeedback();

  answerFeedback =
    null;


  /*
    現在の問題＋
    次の2問の画像を先読み
  */

  preloadNearbyQuestions();


  if (
    !usesFlash(
      currentStage
    )
  ) {

    flashVisible =
      true;

    inputEnabled =
      true;

    render();
    requestAnimationFrame(() => {
      const area=document.querySelector('.input-dock-game');
      if(!area)return;
      window.scrollTo({top:0,behavior:'instant'});
      const slot=area.querySelector('[aria-current="step"]'),keys=area.querySelector('.keypad');
      if(slot && keys){
        const r=slot.getBoundingClientRect(),limit=innerWidth<760?keys.getBoundingClientRect().top-76:innerHeight-20;
        if(r.bottom>limit || r.top<90)window.scrollBy({top:r.top-Math.max(96,(limit-90)/2),behavior:'instant'});
      }
    });

    return;
  }


  flashVisible =
    true;

  inputEnabled =
    false;


  render();


  flashTimer =
    setTimeout(
      () => {

        flashVisible =
          false;

        inputEnabled =
          true;

        render();

      },
      flashDuration()
    );
}

  function clearFlash() {
    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = null;
  }

  function clearFeedback() {
    if (feedbackTimer) clearTimeout(feedbackTimer);
    feedbackTimer = null;
  }

  function clearQuestionTimers() {
    clearFlash();
    clearFeedback();
  }

  function flashDuration() {
  return 1500;
}

  function playCorrectSound() {
  if(!isSoundEnabled())return;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const master = context.createGain();
      connectSoundOutput(context,master);
      const now = context.currentTime;
      master.gain.setValueAtTime(0.0001, now);
      master.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      master.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      [
        { frequency: 523.25, start: 0.00 },
        { frequency: 659.25, start: 0.10 },
        { frequency: 783.99, start: 0.20 }
      ].forEach(note => {
        const oscillator = context.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(note.frequency, now + note.start);
        oscillator.connect(master);
        oscillator.start(now + note.start);
        oscillator.stop(now + note.start + 0.22);
      });
      setTimeout(() => context.close().catch(() => {}), 800);
    } catch {
      // 音声が使えない環境でも、画面演出はそのまま続けます。
    }
  }

  async function playChestOpenSound() {
  if(!isSoundEnabled())return;
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context = getRewardAudioContext(); if (!context) return;
    // Resume within the tap, then schedule against the running audio clock.
    if(context.state!=='running')await context.resume();
    if(!isSoundEnabled()||context.state!=='running')return;
    const now = context.currentTime;

    const master = context.createGain();
    connectSoundOutput(context,master);

    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.95, now + 0.015);
    master.gain.setValueAtTime(0.95, now + 0.85);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

    addChestLatch(context, master, now);
    // 鍵が外れる感じ
    [180, 240, 330].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(
        frequency,
        now + index * 0.08
      );

      gain.gain.setValueAtTime(
        0.12,
        now + index * 0.08
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + index * 0.08 + 0.22
      );

      oscillator.connect(gain);
      gain.connect(master);

      oscillator.start(now + index * 0.08);
      oscillator.stop(now + index * 0.08 + 0.25);
    });

    // キラッ
    const sparkle = context.createOscillator();
    const sparkleGain = context.createGain();

    sparkle.type = "sine";
    sparkle.frequency.setValueAtTime(850, now + 0.34);
    sparkle.frequency.exponentialRampToValueAtTime(
      1450,
      now + 0.7
    );

    sparkleGain.gain.setValueAtTime(0.08, now + 0.34);
    sparkleGain.gain.exponentialRampToValueAtTime(
      0.0001,
      now + 0.8
    );

    sparkle.connect(sparkleGain);
    sparkleGain.connect(master);

    sparkle.start(now + 0.34);
    sparkle.stop(now + 0.82);

    // Keep the unlocked reward context for the delayed reveal sound.

  } catch (error) {
    console.warn("宝箱サウンドを再生できませんでした", error);
  }
}

async function playCardRevealSound(rarity = "N") {
  if(!isSoundEnabled())return;
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context = getRewardAudioContext(); if (!context) return;
    // Resume within the tap, then schedule against the running audio clock.
    if(context.state!=='running')await context.resume();
    if(!isSoundEnabled()||context.state!=='running')return;
    const now = context.currentTime;

    const master = context.createGain();
    connectSoundOutput(context,master);

    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.65, now + 0.02);
    master.gain.setValueAtTime(0.65, now + 0.95);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.3);

    let notes;

    if (rarity === "UR") {
      notes = [
        [523.25, 0],
        [659.25, 0.12],
        [783.99, 0.24],
        [1046.5, 0.38],
        [1318.5, 0.55]
      ];
    } else if (rarity === "SR") {
      notes = [
        [523.25, 0],
        [659.25, 0.14],
        [880, 0.3]
      ];
    } else {
      notes = [
        [523.25, 0],
        [659.25, 0.16]
      ];
    }

    notes.forEach(([frequency, start]) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type =
        rarity === "UR" ? "triangle" : "sine";

      oscillator.frequency.setValueAtTime(
        frequency,
        now + start
      );

      gain.gain.setValueAtTime(
        rarity === "UR" ? 0.11 : 0.08,
        now + start
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + start + 0.42
      );

      oscillator.connect(gain);
      gain.connect(master);

      oscillator.start(now + start);
      oscillator.stop(now + start + 0.45);
    });

    // Keep the unlocked reward context for the delayed reveal sound.

  } catch (error) {
    console.warn("カード獲得音を再生できませんでした", error);
  }
}

  function getRewardCard(stage) {

  const worldCards =
    getStageRewardCards(stage, cards);

  const bosses =
    worldCards.filter(c => c.role === "boss");

  const normals =
    worldCards.filter(c => c.role !== "boss");

  if (!stage.isBoss) {
    return sample(normals.length ? normals : worldCards);
  }

  const r = Math.random();

  // ------------------------
  // 40%
  // ボスカード
  // ------------------------

  if (r < 0.40) {
    return sample(bosses);
  }

  // ------------------------
  // 40%
  // 通常カード
  // ------------------------

  if (r < 0.80) {
    return sample(normals);
  }

  // ------------------------
  // 20%
  // 全カード
  // ------------------------

  return sample(worldCards);
}

function sample(arr){
  return arr[
    Math.floor(Math.random()*arr.length)
  ];
}

  function finish() {
  const lockedBefore=stages.filter(s=>s.world===currentStage.world&&s.isBoss&&!s.hiddenFromWorld&&!bossUnlockStatus(state,s,stages).unlocked);
  recordTrail(state,currentStage,challengeRunId,qi,questions.length);
  newlyUnlockedBosses=lockedBefore.filter(s=>bossUnlockStatus(state,s,stages).unlocked);
  clearQuestionTimers();
  let card;
  let rarity;
  let factor;

  const pool = getStageRewardCards(currentStage, cards);
  if (!pool.length) throw new Error("カード画像の準備状況を確認してください。");
  card = sample(pool);
  let cumulative = 0;
  const roll = Math.random();
  const activeRarityRows = currentStage.isBoss && !isKindergartenStage() ? [["UR", 0.32, 1.7], ["SR", 0.44, 1.3], ["N", 0.24, 1]] : rarityRows;
  const row = activeRarityRows.find(r => (cumulative += r[1]) >= roll) ?? activeRarityRows[2];
  rarity = row[0];
  factor = row[2];
  const key =
    `${card.id}_${rarity}`;

  const isNew =
    !state.unlockedCards.includes(
      key
    );

  if (isNew) {
    state.unlockedCards.push(
      key
    );
  }


  /*
    NEWカード管理
  */

  state.newCards =
    Array.isArray(
      state.newCards
    )
      ? state.newCards
      : [];

  if (
    isNew &&
    !state.newCards.includes(key)
  ) {
    state.newCards.push(key);
  }


  /*
    報酬
  */

  state.gems +=
    currentStage.rewardGems ?? 5;

  earned = {
    card,
    rarity,
    factor,
    isNew,
    kindergarten: isKindergartenStage(),
    gems: currentStage.rewardGems ?? 5
  };


  /*
    宝箱状態リセット
  */

  chestOpened = false;
  chestOpening = false;
  cardRevealed = false;

  if (chestTimer) {
    clearTimeout(
      chestTimer
    );

    chestTimer = null;
  }


  /*
   * 学習レポート用
   * ステージクリア時の学習結果を保存
   */

  void saveLearningSession();


  recordRewardClear(state,challengeRunId);
  persistState(state);

  screen = "result";

  render();
}

  function syncScreenBgm(){
    const changed=bgmScreen!==screen;bgmScreen=screen;
    if(screen==='game'&&stageBgmFading)return;
    const track=screen==='landing'?bgmTracks.top:['title','player-select','player-create','legacy-migrate','world'].includes(screen)?bgmTracks.menu:null;
    if(!track){titleMusic.setTrack(null);return;}
    const changedTrack=titleMusic.setTrack(track),status=titleMusic.snapshot();
    if(isSoundEnabled()&&!stageBgmFading&&((changed&&status.fading)||(!status.playing&&!status.pending&&(changed||changedTrack))))void titleMusic.play();
  }
  function render() {
  if(screen==='reward-play'&&root.querySelector('.reward-game-frame'))return;
  syncScreenBgm();

  if (screen === "landing") {
    root.innerHTML = landing();
    return;
  }

  root.innerHTML = `
    <div class="app-shell ${screen==='reward-play'?'reward-mode':''}">

      <header class="app-header">
        <h1 class="brand">⚔️ Maths-adventure</h1>

        <div class="header-status">
          <button type="button" class="sound-toggle" data-action="toggle-title-bgm" aria-label="${isSoundEnabled()?'音声オン（押すとオフ）':'音声オフ（押すとオン）'}" aria-pressed="${isSoundEnabled()}">${isSoundEnabled()?'🔊':'🔇'}</button>
          <span class="sync-badge ${sync}">
            ${
              sync === "connected"
                ? "☁️ 同期済み"
                : sync === "syncing"
                  ? "⏳ 同期中"
                  : "💾 ローカル"
            }
          </span>

          <strong>💎 ${state.gems}</strong>
        </div>
      </header>

      <main class="main">
        ${body()}
      </main>

      <footer class="footer">
        WORLD学年別モジュール版
      </footer>

      ${zoomModal()}

    </div>
  `;
}
  function body() {
  if(screen==='reward-lobby'&&!rewardUnlockStatus(state).unlocked)return '<section class="panel stack"><h2>ごほうびゲーム</h2>'+rewardUnlockHint(state)+rewardResetNote+'<p>まずは2ステージ学習してから遊ぼう！入場にはダイヤ5個も必要です。</p><button class="button" data-action="go" data-screen="title">さんすうに挑戦する</button></section>';
  if(screen==='reward-lobby')return rewardLobby(state.gems,unlockedPartnerEntries().length,unlockedPartnerEntries().filter(x=>x.rarity==='N').length,unlockedPartnerEntries().filter(x=>x.rarity==='SR').length);
  if(screen==='reward-play'){
    const owned=unlockedPartnerEntries().filter(x=>activeRewardGame?.id==='monster-pinball'?x.rarity==='SR':['treasure-fishing','monster-path'].includes(activeRewardGame?.id)?x.rarity==='N':['N','SR','UR'].includes(x.rarity)).map(x=>({key:x.key,name:x.card.name,rarity:x.rarity,image:image(x.card,x.rarity)}));
    const source=(activeRewardGame?.url||'/reward-games/monster-run.html')+'?player='+encodeURIComponent(getActivePlayer()?.playerId||'guest')+'#'+encodeURIComponent(JSON.stringify(owned));
    return '<section class="reward-play-shell"><button class="reward-exit button secondary" data-action="go" data-screen="title">学習へ戻る</button><iframe class="reward-game-frame" title="'+escapeHtml(activeRewardGame?.name||'モンスターお宝ラン')+'" src="'+escapeHtml(source)+'" allow="fullscreen"></iframe></section>';
  }

  if (screen === "player-select") {
    return playerSelect();
  }

  if (screen === "player-create") {
    return playerCreate();
  }

  if (screen === "legacy-migrate") {
    return legacyMigrate();
  }

  if (screen === "world") {
    return world();
  }

  if (screen === "game") {
    return game();
  }

  if (screen === "result") {
    return result();
  }

  if (screen === "collection") {
    return collection();
  }

  if (screen === "partner") {
    return partner();
  }

  if (screen === "sync") {
    return transfer();
  }

  return title();
}

/* ==================================================
   PLAYER SELECT
================================================== */

function playerSelect() {
  const players = getPlayers();
  const active = getActivePlayer();

  return `
    <section class="stack">

      <div class="toolbar">
        <button
          class="button secondary small"
          data-action="go"
          data-screen="landing"
        >
          ◀ トップへ
        </button>

        <h2>だれが冒険する？</h2>

        <span></span>
      </div>


      ${
        playerMessage
          ? `
            <div class="notice">
              ${escapeHtml(playerMessage)}
            </div>
          `
          : ""
      }


      ${
        playerError
          ? `
            <div class="error">
              ${escapeHtml(playerError)}
            </div>
          `
          : ""
      }


      <div class="player-grid">

        ${
          players.map(player => `
            <button
              class="player-card ${
                active?.playerId === player.playerId
                  ? "active"
                  : ""
              }"
              data-action="player-select"
              data-player-id="${escapeHtml(player.playerId)}"
            >

              <div class="player-avatar">${renderPlayerPortrait(player.state, {getCard, escapeHtml})}</div>

              <strong>
                ${escapeHtml(player.nickname)}
              </strong>

              <small>
                💎 ${Number(player.state?.gems ?? 0)}
                ・
                🃏 ${player.state?.unlockedCards?.length ?? 0}枚
              </small>

              ${
                active?.playerId === player.playerId
                  ? `
                    <span class="player-current">
                      いまのプレイヤー
                    </span>
                  `
                  : ""
              }

            </button>
          `).join("")
        }

      </div>


      <button
        class="button cyan"
        data-action="player-new"
      >
        ＋ あたらしいプレイヤー
      </button>

    </section>
  `;
}


/* ==================================================
   PLAYER CREATE
================================================== */

function playerCreate() {
  return `
    <section class="panel stack">

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="player-select"
        >
          ◀ もどる
        </button>

        <h2>
          あたらしい冒険
        </h2>

        <span></span>

      </div>


      <div class="hero">

        <div class="hero-icon">
          🧙‍♂️✨
        </div>

        <h2>
          ニックネームを決めよう！
        </h2>

        <p class="muted">
          本名じゃなくてOKだよ。
        </p>

      </div>


      <input
        class="input nickname-input"
        data-nickname-input
        maxlength="20"
        autocomplete="off"
        placeholder="ニックネーム"
      >


      ${
        playerError
          ? `
            <div class="error">
              ${escapeHtml(playerError)}
            </div>
          `
          : ""
      }


      <button
        class="button cyan"
        data-action="player-create-submit"
      >
        この名前で冒険をはじめる
      </button>

    </section>
  `;
}


/* ==================================================
   LEGACY SAVE MIGRATION
================================================== */

function legacyMigrate() {
  return `
    <section class="panel stack">

      <div class="hero">

        <div class="hero-icon">
          💾✨
        </div>

        <h2>
          これまでの冒険を見つけたよ！
        </h2>

        <p class="muted">
          今まで集めたカードやジェムを
          新しいプレイヤーデータへ引き継げます。
        </p>

      </div>


      <p>
        この冒険につける
        ニックネームを入力してください。
      </p>


      <input
        class="input nickname-input"
        data-nickname-input
        maxlength="20"
        autocomplete="off"
        placeholder="ニックネーム"
      >


      ${
        playerError
          ? `
            <div class="error">
              ${escapeHtml(playerError)}
            </div>
          `
          : ""
      }


      <button
        class="button cyan"
        data-action="legacy-migrate-submit"
      >
        この名前で引き継ぐ
      </button>

    </section>
  `;
}

  function title() {
  const activePlayer = getActivePlayer();
  const isKindergarten = selectedCourse === "kindergarten";
  const courseWorlds = worlds.filter(w =>
    (w.packId === "kindergarten" || w.course === "kindergarten") === isKindergarten);

  return `
    <section class="stack">

      <!-- 現在のプレイヤー -->
      <div class="panel player-banner">

  <div>
    <small>
      いま冒険しているプレイヤー
    </small>

    <strong>
      ${renderPlayerPortrait(state, {getCard, escapeHtml}, true)} ${escapeHtml(activePlayer?.nickname ?? "ゲスト")}
    </strong>
  </div>

  <div class="player-banner-actions">

    <button
      class="button secondary small"
      data-action="go"
      data-screen="player-select"
    >
      👤 きりかえる
    </button>

    <button
      class="button secondary small"
      data-action="go"
      data-screen="landing"
    >
      🏠 トップへ
    </button>

  </div>

</div>

      <div class="panel"><div class="reward-unlock-row"><button class="button" data-action="go" data-screen="reward-lobby" ${rewardUnlockStatus(state).unlocked?"":"disabled"}>🎮 ごほうびゲームへ</button>${rewardUnlockHint(state)}</div><p>入場はダイヤ5個。足りなくなったら、また学習して集めよう！</p></div>
      <!-- WORLD案内 -->
      <div class="panel hero course-banner ${isKindergarten ? 'course-banner-kindergarten' : 'course-banner-elementary'}">
        <img class="course-banner-image" src="/images/banners/${isKindergarten ? 'kindergarten-adventure' : 'elementary-adventure'}.webp" alt="" fetchpriority="high" decoding="async">
        <div class="course-banner-copy">
          <h2>${isKindergarten ? "はじめての さんすう" : "小学生コース"}</h2>
          <p>${isKindergarten ? "K1〜K6で あそべるよ。1ステージ5もん！" : "WORLDを選んで算数の冒険へ出発しよう。"}</p>
        </div>
      </div>


      <div class="panel stack">
        <button class="button secondary" data-action="change-course"
          data-course="${isKindergarten ? "elementary" : "kindergarten"}">
          ${isKindergarten ? "📚 小学生コースへ" : "🌱 幼児コースへ"}
        </button>
      </div>

      <!-- WORLD一覧 -->
      <div class="world-grid">

        ${
          courseWorlds.map(w => `
            <button
              class="world-button ${w.available ? "" : "disabled"}"
              ${
                w.available
                  ? `data-action="world" data-world="${w.id}"`
                  : "disabled"
              }
            >

              <strong>
                WORLD ${w.displayId ?? w.id}
              </strong>

              <span>
                ${w.icon} ${w.grade}
              </span>

              <small>
                ${w.title}
                <br>
                ${w.description}
              </small>

            </button>
          `).join("")
        }

      </div>


      <!-- 設定・図鑑 -->
      <div class="panel stack">

        <button
          class="button partner-button"
          data-action="go"
          data-screen="partner"
        >
          ⭐ パートナー
        </button>


        <button
          class="button secondary"
          data-action="go"
          data-screen="collection"
        >
          カード図鑑
        </button>


        <button
          class="button secondary"
          data-action="go"
          data-screen="sync"
        >
          引っ越しコード
        </button>

      </div>

    </section>
  `;
}

/* =========================
   タイトルBGM
========================= */

function toggleTitleBgm() {
  const enabled=setSoundEnabled(!isSoundEnabled());
  if(enabled)void titleMusic.play();
}
function stopTitleBgm() { titleMusic.stop(); }
function fadeOutTitleBgm(duration=1200) { return titleMusic.fadeOut(duration); }

/* =========================
   新トップページ
========================= */
  function landing() {

  return `
    <section class="landing-screen">

      <div class="landing-bg"></div>
      <div class="landing-vignette"></div>

      <!-- BGM -->
      <button
        class="landing-music"
        data-action="toggle-title-bgm"
        aria-label="${isSoundEnabled()?'音声オン（押すとオフ）':'音声オフ（押すとオン）'}"
        aria-pressed="${isSoundEnabled()}"
        title="${isSoundEnabled()?'音声オン':'音声オフ'}"
      >
        ${isSoundEnabled() ? "🔊" : "🔇"}
      </button>


      <!-- 中央エリア -->
      <div class="landing-center">

        <!-- タイトルロゴ -->
        <div class="game-logo">

          <div class="game-logo-star">
            ✦
          </div>

          <div class="game-logo-inner">

            <span class="game-logo-maths">
              Maths-
            </span>

            <span class="game-logo-adventure">
              adventure
            </span>

          </div>

        </div>


        <p class="landing-catch">
          算数を、冒険に。
        </p>


        <!-- メインボタン -->
        <button
          class="landing-start-button"
          data-action="select-course"
          data-course="kindergarten"
        >
          <span class="landing-play-icon">🌱</span>
          <span>幼児コース</span>
        </button>
        <button class="landing-start-button"
          data-action="select-course" data-course="elementary">
          <span class="landing-play-icon">📚</span>
          <span>小学生コース</span>
        </button>


        <div class="landing-reward-unlock"><button class="landing-start-button landing-reward-button" data-action="reward-top"><span class="landing-play-icon">🎮</span><span>ごほうびゲームであそぼう</span></button>${rewardUnlockHint(state)}</div>
        <!-- サブボタン -->
        <div class="landing-sub-buttons">

  <button
    class="landing-sub-button continue"
    data-action="landing-start"
  >
    👤 プレイヤーをえらぶ
  </button>

</div>

      </div>


      <!-- 下部 -->
      <div class="landing-bottom">

  <div class="landing-bottom-left">

    <button
      class="landing-settings"
      data-action="go"
      data-screen="sync"
    >
      ⚙ 引っ越し・設定
    </button>

    <a
      class="landing-contact"
      href="mailto:info.fukushi@allcare.co.jp?subject=${encodeURIComponent("【Maths-adventure】お問い合わせ")}&body=${encodeURIComponent(
        "Maths-adventureについてのお問い合わせ\n\n【お問い合わせ内容】\n\n"
      )}"
    >
      ✉ お問い合わせ
    </a>
    ${surveyLink()}

  </div>

  <div class="landing-sync">
    ${
      sync === "connected"
        ? "☁️ データ同期済み"
        : sync === "syncing"
          ? "⏳ 同期中"
          : "💾 ローカルセーブ"
    }
  </div>

</div>


<div class="landing-creator">

  <img
    src="/images/fukushi-logo.png"
    alt="一般社団法人福祉でつながる会"
    class="landing-creator-logo"
  >

  <span>
    作成元：一般社団法人福祉でつながる会
  </span>

</div>
          
    </section>
  `;
}

  function world() {
  const w =
    worlds.find(
      x => x.id === worldId
    );

  const ss =
    stages
      .filter(
        x => x.world === worldId && !x.hiddenFromWorld
      )
      .sort(
        (a, b) =>
          (a.sort ?? 0) -
          (b.sort ?? 0)
      );

  const units =
    [
      ...new Set(
        ss.map(
          x => x.unit
        )
      )
    ];

  return `
    <section class="panel">

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ WORLD
        </button>

        <h2>
          WORLD ${w.displayId ?? w.id}・${w.grade}
        </h2>

        <span></span>

      </div>


      ${
        units.map(unit => {

          const unitStages =
            ss
              .filter(
                stage =>
                  stage.unit === unit
              )
              .sort(
                (a, b) =>
                  (a.sort ?? 0) -
                  (b.sort ?? 0)
              );


          return `
            <section class="stage-section">

              <h3>
                ${escapeHtml(
                  unitStages[0].unitLabel
                )}
              </h3>


              <div class="stage-grid">

                ${
                  unitStages.map(
                    stage => {
                      
                      const displayName =
                      stage.name;
                      const gate=bossUnlockStatus(state,stage,stages);
                      const gated=stage.isBoss&&stage.world<101;

                      return `
                        <button
                          class="
                            stage-button
                            stage-text-only ${gate.unlocked?"":"boss-locked"}
                            ${
                              stage.isBoss
                                ? "boss"
                                : ""
                            }
                          "
                          ${gate.unlocked?"":'disabled aria-disabled="true"'}
                          data-action="stage"
                          data-id="${escapeHtml(
                            stage.id
                          )}"
                        >

                          <span
                            class="stage-symbol"
                          >
                            ${
                              stage.isBoss
                                ? "👑"
                                : "⚔️"
                            }
                          </span>


                          <span
                            class="stage-name"
                          >
                            ${escapeHtml(
                              displayName
                            )}
                          </span>
                          ${stage.isBoss&&!gate.unlocked?"":renderTrail(state,stage)}
                          ${gated?`<span class="boss-gate-note">${gate.unlocked?'👑 ボス解放！ 何度でも挑戦できるよ':`🔒 ${gate.scope==='world'?'この学年':'この単元'}の通常ステージを全部★1個＋もう★1個！<br>基礎クリア ${gate.completed}/${gate.total} ・追加の★ ${Math.min(gate.extraStars,1)}/1<br>${gate.missingBasics?`まずは、まだ★のないステージに挑戦しよう！${gate.extraRemaining?' その後、好きなステージでもう1回！':''}`:'基礎は全部クリア！ 好きな通常ステージでもう★1個！'}`}</span><span class="boss-rarity-note">SR以上の獲得率アップ！ 合計76％<br>SR44％・UR32％</span>`:''}
                        </button>
                      `;

                    }
                  ).join("")
                }

              </div>

            </section>
          `;

        }).join("")
      }

    </section>
  `;
}

  function game() {
    const q = questions[qi];
    if (!q) return ''; // Completion persistence may render before the result screen is selected.
    if (isKindergartenStage()) {
      return `<section class="stack k-game">
        <div class="toolbar"><button class="button secondary small" data-action="go" data-screen="world">◀ もどる</button>
          <strong>${qi + 1} / ${questions.length} もん</strong></div>
        <div class="panel k-question-panel"><p class="muted">${escapeHtml(currentStage.name)}</p>
          ${renderQuestion(q)}
        </div>
        <p class="k-feedback ${answerFeedback === "correct" ? "k-feedback-correct" : ""}" role="status">
          ${answerFeedback === "correct" ? "⭕ せいかい！ +10 EXP" : escapeHtml(wrongMessage)}</p>
      </section>`;
    }
    const flashMode = usesFlash(currentStage);
    const showQuestion = flashMode ? flashVisible : true;

    if (gameOver) {
      return `<section class="stack"><div class="panel hero game-over-panel"><div class="hero-icon">💥</div><h2>バリアがなくなった！</h2><p class="muted">${qi} / ${questions.length} 問まで進みました。</p></div><div class="life-display game-over-life"><span>💥</span><span>💥</span><span>💥</span></div><button class="button cyan" data-action="retry-stage">同じステージにもう一度挑戦</button><button class="button secondary" data-action="go" data-screen="world">ワールドへ戻る</button></section>`;
    }

    const questionAction =
  flashMode
    ? `data-action="replay-flash"`
    : "";


return `<section class="stack game-area ${q?.kind === "written-calculation" || q?.keypad === "expression" || currentStage?.keypad === "expression" ? "input-dock-game" : ""}">

  <!-- =====================================================
       全WORLD共通：単元タイトル
  ====================================================== -->

  <div class="game-unit-header">

    <div class="game-unit-title">
      ${escapeHtml(currentStage?.unitLabel ?? "")}・${escapeHtml(currentStage?.name ?? "")}
    </div>

  </div>


  <!-- =====================================================
       全WORLD共通：操作・進行状況
  ====================================================== -->

  <div class="toolbar game-toolbar">

    <button
      class="button secondary small"
      data-action="go"
      data-screen="world"
    >
      ◀ やめる
    </button>


    <div class="game-status">

      <div class="life-display">
  <span>${lives >= 1 ? "🛡️" : "💥"}</span>
  <span>${lives >= 2 ? "🛡️" : "💥"}</span>
  <span>${lives >= 3 ? "🛡️" : "💥"}</span>
</div>

      <strong>
        ${qi + 1}/${questions.length}
      </strong>

    </div>

  </div>
      ${wrongMessage?`<div class="wrong-notice">${wrongMessage}</div>`:""}
      <${isInlineChoice(q) || q.kind === "cube-net" || q.kind === "mirror-grid" || q.kind === "shape-build" || q.kind === "abacus-lesson" || q.requiresRulerAlignment ? "section" : "button"}
  class="question-card ${flashMode ? "flash-card" : "persistent-card"} ${showQuestion ? "showing" : "hidden-question"}"
  ${questionAction}
  ${flashMode ? "" : 'type="button"'}
>
  <div>

    <div class="question">
  ${
    showQuestion
      ? renderQuestion(q)
      : "？"
  }
</div>

  </div>
</${isInlineChoice(q) || q.kind === "cube-net" || q.kind === "mirror-grid" || q.kind === "shape-build" || q.kind === "abacus-lesson" || q.requiresRulerAlignment ? "section" : "button"}>
      <div class="partner-answer-zone">

  ${renderPartnerCompanion()}

  <button
  class="partner-submit-button"
  data-action="answer"
>
  <span class="submit-answer-main">
    👣こたえの けってい
  </span>

  <span class="submit-answer-guide">
    このボタンを おしてね！
  </span>
</button>

</div>

<div class="answer-display">
  ${
    isFullFractionAnswerQuestion(q)
  ? renderFractionAnswerInput(
      input
    )

      : currentStage?.type === "clock_24h"
        ? formatInput(input)

        : currentStage?.keypad === "clock" ||
          currentStage?.type?.startsWith("clock_")
          ? formatInput(input)

          : input
            ? (q?.kind==='shape-build' ? 'ピースを うごかしたよ' : q?.kind==='mirror-grid' ? '選んだ点：横'+(Number(input)%9+1)+'、上から'+(Math.floor(Number(input)/9)+1) : formatInput(input))

            : inputEnabled
              ? (q?.keypad === "keyboard" || q?.answerMode === "numeric" ? "数字を入力してね" : "こたえを えらんでね")

              : "もんだいを みています"
  }
</div>

${renderKeypad()}
      ${answerFeedback === "correct" ? `<div class="correct-feedback" aria-live="polite"><div class="correct-feedback-card"><svg class="red-pen-svg" viewBox="0 0 240 240" aria-hidden="true"><path class="red-pen-stroke" d="M190 49 C147 10 75 18 38 69 C1 120 29 194 96 211 C158 227 218 182 218 116 C218 84 206 62 190 49"/><path class="red-pen-check" d="M70 119 L101 151 L167 78"/></svg><strong>せいかい！</strong><span class="correct-exp">✨ +10 EXP</span></div></div>` : ""}
    </section>`;
  }

  /* =========================================================
   文章題
   式全体の正誤判定
========================================================= */

function isCorrectExpressionInput(
  value,
  question
) {

  const expected =
    question?.expression;


  if (!expected) {
    return false;
  }


  /* =====================================================
     記号を統一
  ===================================================== */

  const normalizeOperator =
    operator => {

      const raw =
        String(
          operator ?? ""
        );


      if (
        raw === "+" ||
        raw === "＋"
      ) {
        return "+";
      }


      if (
        raw === "-" ||
        raw === "−" ||
        raw === "－"
      ) {
        return "-";
      }


      if (
        raw === "*" ||
        raw === "×"
      ) {
        return "*";
      }


      if (
        raw === "/" ||
        raw === "÷"
      ) {
        return "/";
      }


      return raw;
    };


  /* =====================================================
     入力文字を内部形式へ
  ===================================================== */

  const raw =
    String(
      value ?? ""
    )
      .replace(/[０-９]/g, char =>
        String.fromCharCode(
          char.charCodeAt(0) -
          0xFEE0
        )
      )
      .replaceAll(
        "＋",
        "+"
      )
      .replaceAll(
        "−",
        "-"
      )
      .replaceAll(
        "－",
        "-"
      )
      .replaceAll(
        "×",
        "*"
      )
      .replaceAll(
        "÷",
        "/"
      )
      .replaceAll(
        "＝",
        "="
      )
      .replaceAll(
        "．",
        "."
      )
      .replace(
        /\s+/g,
        ""
      );


  /* =====================================================
     式を分解

     3+3=6
     1.2+0.5=1.7
     12/3=4
  ===================================================== */

  const match =
    raw.match(
      /^(\d+(?:\.\d+)?)([+\-*/])(\d+(?:\.\d+)?)=(\d+(?:\.\d+)?)$/
    );


  if (!match) {
    return false;
  }


  const left =
    Number(
      match[1]
    );


  const operator =
    normalizeOperator(
      match[2]
    );


  const right =
    Number(
      match[3]
    );


  const result =
    Number(
      match[4]
    );


  const expectedLeft =
    Number(
      expected.left
    );


  const expectedOperator =
    normalizeOperator(
      expected.operator
    );


  const expectedRight =
    Number(
      expected.right
    );


  const expectedResult =
    Number(
      expected.result
    );


  /* =====================================================
     数値比較
  ===================================================== */

  const sameNumber =
    (
      a,
      b
    ) => {

      return (
        Number.isFinite(a)
        &&
        Number.isFinite(b)
        &&
        Math.abs(
          a - b
        ) < 1e-9
      );
    };


  /* =====================================================
     入力した式そのものが正しいか
  ===================================================== */

  let calculated;


  if (
    operator === "+"
  ) {

    calculated =
      left +
      right;

  } else if (
    operator === "-"
  ) {

    calculated =
      left -
      right;

  } else if (
    operator === "*"
  ) {

    calculated =
      left *
      right;

  } else if (
    operator === "/"
  ) {

    if (
      right === 0
    ) {
      return false;
    }


    calculated =
      left /
      right;

  } else {

    return false;
  }


  /*
    3+3=7 のような式は×
  */

  if (
    !sameNumber(
      calculated,
      result
    )
  ) {

    return false;
  }


  /* =====================================================
     演算記号が合っているか
  ===================================================== */

  if (
    operator !==
    expectedOperator
  ) {

    return false;
  }


  /* =====================================================
     答えが合っているか
  ===================================================== */

  if (
    !sameNumber(
      result,
      expectedResult
    )
  ) {

    return false;
  }


  /* =====================================================
     通常の順番
  ===================================================== */

  const normalOrder =
    sameNumber(
      left,
      expectedLeft
    )
    &&
    sameNumber(
      right,
      expectedRight
    );


  if (
    normalOrder
  ) {

    return true;
  }


  /* =====================================================
     足し算・掛け算は左右交換OK
  ===================================================== */

  if (
    expected.commutative ===
      true
  ) {

    const reversedOrder =
      sameNumber(
        left,
        expectedRight
      )
      &&
      sameNumber(
        right,
        expectedLeft
      );


    if (
      reversedOrder
    ) {

      return true;
    }
  }


  return false;
}

  function parseAnswerInput(value) {
  const cleaned =
    String(value)
      .replace(
        /[^0-9.\-]/g,
        ""
      );

  return cleaned === ""
    ? NaN
    : Number(cleaned);
}

/* =========================================================
   現在の問題
========================================================= */

function getCurrentQuestion() {

  return (
    questions[
      qi
    ] ?? null
  );
}


/* =========================================================
   現在の問題がA/B/C形式か
========================================================= */

function isCurrentChoiceQuestion() {

  const question =
    getCurrentQuestion();


  return (
    Array.isArray(
      question?.choices
    )
    &&
    question.choices.length > 0
    &&
    typeof question?.answer ===
      "string"
    &&
    /^[ABC]$/.test(
      question.answer
    )
  );
}


/* =========================================================
   現在の問題が分数入力か
========================================================= */

function isCurrentFractionInputQuestion() {

  const question =
    getCurrentQuestion();


  return (
    question?.kind ===
      "fraction-add-same-denominator"
    ||
    question?.kind ===
      "fraction-subtract-same-denominator"
  );
}

/* =========================================================
   分数を丸ごと答える問題か
========================================================= */

function isFullFractionAnswerQuestion(
  question
) {

  const kind =
    String(
      question?.kind ?? ""
    );


  return (
    kind ===
      "fraction-add-same-denominator"
    ||
    kind ===
      "fraction-subtract-same-denominator"
  );
}

/* =========================================================
   分数入力を分解

   入力順は

   分母 → ぶんの → 分子

   例：
   6/4

   ↓

   denominator = 6
   numerator   = 4
========================================================= */

function parseFractionInput(
  value
) {

  const raw =
    String(
      value ?? ""
    );


  const parts =
    raw.split("/");


  return {

    /*
      ぶんの より前
      ＝ 分母
    */
    denominator:
      parts[0] ?? "",


    /*
      ぶんの より後
      ＝ 分子
    */
    numerator:
      parts.length >= 2
        ? parts[1]
        : "",


    hasSeparator:
      raw.includes("/")
  };
}

/* =========================================================
   分数正誤判定

   例
   正解 4/6

   4だけ      → 不正解
   4/         → 不正解
   4/6        → 正解
========================================================= */

function isCorrectFractionInput(
  value,
  question
) {

  const parsed =
    parseFractionInput(
      value
    );


  if (
    !parsed.hasSeparator
  ) {
    return false;
  }


  if (
    parsed.numerator === "" ||
    parsed.denominator === ""
  ) {
    return false;
  }


  const numerator =
    Number(
      parsed.numerator
    );


  const denominator =
    Number(
      parsed.denominator
    );


  const correctNumerator =
    Number(
      question?.answer
    );


  const correctDenominator =
    Number(
      question?.denominator
    );


  return (
    Number.isFinite(
      numerator
    )
    &&
    Number.isFinite(
      denominator
    )
    &&
    numerator ===
      correctNumerator
    &&
    denominator ===
      correctDenominator
  );
}

/* =========================================================
   分数回答表示

   入力順

   ① 分母
   ② ぶんの
   ③ 分子


   最初

        □ ・・・・②
       ───
        □ ・・・・①


   6入力

        □ ・・・・②
       ───
        6 ・・・・①


   6 → ぶんの → 4

        4 ・・・・②
       ───
        6 ・・・・①
========================================================= */

function renderFractionAnswerInput(
  value
) {

  const parsed =
    parseFractionInput(
      value
    );


  return `
    <div class="fraction-answer-input">


      <div class="fraction-answer-label">
        こたえ
      </div>


      <div class="fraction-answer-with-order">


        <div class="fraction-answer-value">


          <!-- 分子：② -->

          <div class="fraction-answer-row">

            <div class="fraction-answer-numerator">

              ${
                parsed.numerator !== ""
                  ? escapeHtml(
                      parsed.numerator
                    )
                  : "□"
              }

            </div>


            <div class="fraction-answer-order">
              ・・・・②
            </div>

          </div>


          <div class="fraction-answer-line">
          </div>


          <!-- 分母：① -->

          <div class="fraction-answer-row">

            <div class="fraction-answer-denominator">

              ${
                parsed.denominator !== ""
                  ? escapeHtml(
                      parsed.denominator
                    )
                  : "□"
              }

            </div>


            <div class="fraction-answer-order">
              ・・・・①
            </div>

          </div>


        </div>


      </div>


    </div>
  `;
}

 function formatInput(
  value
) {

  const question =
    questions[
      qi
    ] ?? null;


  /* =====================================================
     24時間表記

     通常ステージでも
     ボス戦でも
     question.mode で判定する
  ===================================================== */

  if (
    question?.mode ===
    "24h"
  ) {

    const hour =
      String(
        value ?? ""
      );


    return `
      <span
        class="
          clock-answer-value
          clock-24h-answer
        "
      >

        <span class="clock-answer-part">

          <strong>
            ${
              hour !== ""
                ? escapeHtml(
                    hour
                  )
                : "ーー"
            }
          </strong>

          <small>
            じ
          </small>

        </span>

      </span>
    `;
  }


  /* =====================================================
     通常時計

     「○じ ○ふん」

     ボス戦でも
     question.kind / modeで判定
  ===================================================== */

  const isClockQuestion =
    question?.kind ===
      "clock"
    &&
    question?.mode !==
      "24h";


  if (
    isClockQuestion
  ) {

    const rawValue =
      String(
        value ?? ""
      );


    const [
      hour = "",
      minute = ""
    ] =
      rawValue.split(
        "|"
      );


    const hourDisplay =
      hour !== ""
        ? escapeHtml(
            hour
          )
        : "ーー";


    const minuteDisplay =
      minute !== ""
        ? escapeHtml(
            minute
          )
        : "ーー";


    return `
      <span class="clock-answer-value">

        <span class="clock-answer-part">

          <strong>
            ${hourDisplay}
          </strong>

          <small>
            じ
          </small>

        </span>


        <span class="clock-answer-part">

          <strong>
            ${minuteDisplay}
          </strong>

          <small>
            ふん
          </small>

        </span>

      </span>
    `;
  }


  /* =====================================================
     時計以外
  ===================================================== */

  return escapeHtml(
    String(
      value
    )
      .replaceAll(
        "morning",
        "☀ あさ "
      )
      .replaceAll(
        "night",
        "🌙 よる "
      )
  );
}

  function renderKeypad() {

  const question =
    questions[qi] ?? null;


  if(isInlineChoice(question)||['mirror-grid','shape-build'].includes(question?.kind))return '';
  return renderKeypadForStage(
    currentStage,
    {
      escapeHtml,
      inputEnabled,
      input,
      question
    }
  );
}

  function unlockedPartnerEntries() {
    return state.unlockedCards.map(key => {
      const split = key.lastIndexOf("_");
      const cardId = key.slice(0, split);
      const rarity = key.slice(split + 1);
      const card = getCard(cardId);
      return card ? { key, card, rarity } : null;
    }).filter(Boolean);
  }

  /* =========================================================
   パートナー
========================================================= */

function selectedPartner() {

  return (
    unlockedPartnerEntries()
      .find(
        x =>
          x.key ===
          state.partnerKey
      )
    ?? null
  );
}


/* =========================================================
   パートナーのモンスターID取得

   例：
   073_N
   073_SR
   073_UR

   ↓

   073

   実際にはcard.idをそのまま使用
========================================================= */

function getPartnerStudyId(
  partnerKey
) {

  if (!partnerKey) {
    return null;
  }


  const split =
    partnerKey.lastIndexOf(
      "_"
    );


  if (
    split <= 0
  ) {
    return partnerKey;
  }


  return partnerKey.slice(
    0,
    split
  );
}


/* =========================================================
   旧 N/SR/UR 個別記録を取得
========================================================= */

function getLegacyPartnerStudyTotal(
  partnerId
) {

  if (!partnerId) {
    return 0;
  }


  const study =
    state.partnerStudy ?? {};


  let total = 0;


  [
    "N",
    "SR",
    "UR"
  ].forEach(
    rarity => {

      total +=
        Number(
          study[
            `${partnerId}_${rarity}`
          ] ?? 0
        );
    }
  );


  return total;
}


/* =========================================================
   新方式へ学習回数を統合

   partnerStudy["073"]
   のように、
   レアリティなしで記録する
========================================================= */

function ensurePartnerStudyRecord(
  partnerKey
) {

  if (!partnerKey) {
    return;
  }


  state.partnerStudy =
    state.partnerStudy ?? {};


  const partnerId =
    getPartnerStudyId(
      partnerKey
    );


  if (!partnerId) {
    return;
  }


  /*
   * すでに新方式の記録があるなら
   * そのまま使う
   */

  if (
    state.partnerStudy[
      partnerId
    ] !== undefined
  ) {
    return;
  }


  /*
   * 旧方式
   * 073_N / 073_SR / 073_UR
   * を合計して引き継ぐ
   */

  state.partnerStudy[
    partnerId
  ] =
    getLegacyPartnerStudyTotal(
      partnerId
    );
}


/* =========================================================
   パートナー学習回数
========================================================= */

function getPartnerStudyCount(
  partnerKey
) {

  if (!partnerKey) {
    return 0;
  }


  const partnerId =
    getPartnerStudyId(
      partnerKey
    );


  if (!partnerId) {
    return 0;
  }


  const sharedCount =
    state.partnerStudy?.[
      partnerId
    ];


  /*
   * 新方式が存在するなら
   * それを使用
   */

  if (
    sharedCount !== undefined
  ) {

    return Number(
      sharedCount ?? 0
    );
  }


  /*
   * 旧データ互換
   */

  return (
    getLegacyPartnerStudyTotal(
      partnerId
    )
  );
}


/* =========================================================
   正解時
   パートナー学習回数 +1
========================================================= */

function incrementPartnerStudy() {

  if (
    !state.partnerKey
  ) {
    return;
  }


  state.partnerStudy =
    state.partnerStudy ?? {};


  ensurePartnerStudyRecord(
    state.partnerKey
  );


  const partnerId =
    getPartnerStudyId(
      state.partnerKey
    );


  if (!partnerId) {
    return;
  }


  state.partnerStudy[
    partnerId
  ] =
    Number(
      state.partnerStudy[
        partnerId
      ] ?? 0
    ) + 1;
}


/* =========================================================
   パートナー称号
========================================================= */

function getPartnerTitle(
  studyCount
) {

  const count =
    Number(
      studyCount ?? 0
    );


  if (
    count >= 500
  ) {
    return "伝説の相棒";
  }


  if (
    count >= 200
  ) {
    return "冒険の盟友";
  }


  if (
    count >= 100
  ) {
    return "たよれる相棒";
  }


  if (
    count >= 30
  ) {
    return "なかよしパートナー";
  }


  return "はじめての相棒";
}


/* =========================================================
   次の称号
========================================================= */

function getNextPartnerTitle(
  studyCount
) {

  const count =
    Number(
      studyCount ?? 0
    );


  if (
    count < 30
  ) {

    return {
      title:
        "なかよしパートナー",

      target:
        30
    };
  }


  if (
    count < 100
  ) {

    return {
      title:
        "たよれる相棒",

      target:
        100
    };
  }


  if (
    count < 200
  ) {

    return {
      title:
        "冒険の盟友",

      target:
        200
    };
  }


  if (
    count < 500
  ) {

    return {
      title:
        "伝説の相棒",

      target:
        500
    };
  }


  return null;
}


/* =========================================================
   セリフ
========================================================= */

function partnerPhrase() {

  if (
    partnerMood ===
    "correct"
  ) {
    return "やったね！";
  }


  if (
    partnerMood ===
    "encourage"
  ) {
    return "だいじょうぶ！ もういっかい！";
  }


  if (
    partnerMood ===
    "start"
  ) {
    return "いっしょに がんばろう！";
  }


  return "みているよ！";
}


/* =========================================================
   ゲーム中パートナー表示
========================================================= */

function renderPartnerCompanion() {

  const p =
    selectedPartner();


  if (!p) {

    return `
      <div
        class="
          partner-companion
          empty
        "
      >

        <span>
          ⭐
        </span>

        <p>
          パートナーを えらぶと
          おうえんしてくれるよ！
        </p>

      </div>
    `;
  }


  const studyCount =
    getPartnerStudyCount(
      p.key
    );


  const title =
    getPartnerTitle(
      studyCount
    );


  return `
    <div
      class="
        partner-companion
        mood-${partnerMood}
        rarity-${p.rarity}
      "
    >

      <img
  src="${image(
    p.card,
    p.rarity
  )}"
  alt="${escapeHtml(
    p.card.name
  )}"
  decoding="async"
  fetchpriority="high"
  loading="eager"
>

      <div>

        <small
          class="partner-title"
        >
          ⭐ ${escapeHtml(
            title
          )}
        </small>


        <strong>
          ${escapeHtml(
            p.card.name
          )}
        </strong>


        <p>
          ${partnerPhrase()}
        </p>

      </div>

    </div>
  `;
}

  function renderQuestion(question) {
    prepareWritten(question,qi);return renderQuestionByKind(question, { escapeHtml, inputEnabled, input });
  }

  function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

  function result() {
  if (earned?.kindergarten && !earned.card) {
    return `<section class="stack"><div class="panel hero"><div class="hero-icon">🎉</div>
      <h2>よく できたね！</h2><p>5もん クリア！ 💎 ${earned.gems}こ ゲット</p>
      <p class="muted">カードの ごほうびは じゅんびちゅうです。</p></div>
      <button class="button cyan" data-action="retry-stage">もういちど あそぶ</button>
      <button class="button secondary" data-action="go" data-screen="world">${escapeHtml(worlds.find(w => w.id === currentStage.world)?.displayId ?? "WORLD")}へ もどる</button>
      <button class="button secondary" data-action="go" data-screen="title">WORLDを えらぶ</button></section>`;
  }
  const rarity = earned?.rarity ?? "N";
  const isNew = earned?.isNew === true;

  return `
    <section class="stack">
      ${newlyUnlockedBosses.length?`<div class="boss-unlock-celebration" role="status">👑 ★が集まったよ！ ボス解放！<br>${newlyUnlockedBosses.map(s=>escapeHtml(s.name)).join('・')}<br><small>SR以上の獲得率アップ！ 合計76％</small></div>`:''}
      <div class="panel hero">

        <div class="hero-icon">
          🎉
        </div>

        <h2>
          ${earned?.kindergarten ? "5もん クリア！ よく できたね！" : "クエストクリア！"}
        </h2>

        <p class="muted">
          ${
            !chestOpened
              ? "宝箱を開けて報酬を受け取ろう。"
              : chestOpening
                ? "なにが でるかな……？"
                : "カードをゲット！"
          }
        </p>

      </div>


      ${
        !chestOpened
          ? `
            <button
              class="treasure-area"
              data-action="open-chest"
            >

              <div class="treasure-chest">
                🎁
              </div>

              <strong>
                タップして宝箱を開ける
              </strong>

            </button>
          `

          : chestOpening
            ? `
              <div
                class="chest-opening-stage rarity-${rarity}"
              >

                <div class="chest-light"></div>
                <div class="chest-rays"></div>
                <div class="chest-sparkles"></div>

                <div class="opening-chest">
                  🎁
                </div>

                <strong class="chest-opening-text">
                  ${
                    rarity === "UR"
                      ? "ま、まぶしい……！"
                      : rarity === "SR"
                        ? "すごい光だ……！"
                        : "なにが でるかな？"
                  }
                </strong>

              </div>
            `

            : `
              <div class="card-reveal-stage rarity-${rarity}">
                ${earnedCard()}
              </div>
            `
      }


      ${earned?.kindergarten ? `
        <p class="muted">💎 ${earned.gems}こ ゲット！</p>
        <button class="button cyan" data-action="retry-stage">もういちど あそぶ</button>
        <button class="button secondary" data-action="go" data-screen="world">${escapeHtml(worlds.find(w => w.id === currentStage.world)?.displayId ?? "WORLD")}へ もどる</button>
        <button class="button secondary" data-action="go" data-screen="collection">カードずかん</button>
      ` : ""}
      ${
        cardRevealed && !earned?.kindergarten
          ? `
            <button
              class="button cyan"
              data-action="go"
              data-screen="world"
            >
              ワールドへ戻る
            </button>

            <button
              class="button secondary"
              data-action="go"
              data-screen="collection"
            >
              図鑑を見る
            </button>
          `
          : ""
      }

      ${cardRevealed&&!chestOpening?surveyInvitation(localStorage):""}
    </section>
  `;
}

  function earnedCard() {
  const hp = Math.round(
    earned.card.stats.hp * earned.factor
  );

  const atk = Math.round(
    earned.card.stats.atk * earned.factor
  );

  return `
    <div class="reward-reveal">
      <p class="reward-label">
        ✨ ${earned.rarity}カード獲得！
      </p>

      <article class="result-card rarity-${earned.rarity}">

  ${
    earned.isNew
      ? `<div class="card-new-badge">NEW!</div>`
      : ""
  }

  <div class="card-shine"></div>
  <div class="holo-layer"></div>

  <img
  class="card-image"
  src="${image(
    earned.card,
    earned.rarity
  )}"
  alt="${escapeHtml(
    earned.card.name
  )}"
  decoding="async"
  fetchpriority="high"
>

${earned.isNew ? '<div class="new-badge">NEW!</div>' : ''}

        <div class="card-body">
          <p class="muted">
            ${earned.rarity}・No.${String(earned.card.number).padStart(3, "0")}
          </p>

          <h3 class="card-title">
            ${earned.card.name}
          </h3>

          <p>
            ${earned.card.description}
          </p>

          <div class="card-meta">
            <span>HP ${hp}</span>
            <span>ATK ${atk}</span>
          </div>
        </div>
      </article>
    </div>
  `;
}
  function partner() {

  const entries =
    unlockedPartnerEntries();


  const selected =
    selectedPartner();


  const selectedStudy =
    selected
      ? getPartnerStudyCount(
          selected.key
        )
      : 0;


  const selectedTitle =
    selected
      ? getPartnerTitle(
          selectedStudy
        )
      : "";


  const nextTitle =
    selected
      ? getNextPartnerTitle(
          selectedStudy
        )
      : null;


  return `
    <section class="stack">


      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ もどる
        </button>


        <h2>
          いっしょに べんきょうする パートナー
        </h2>


        <span></span>

      </div>


      <div class="panel partner-intro">

        ${
          selected
            ? `
              <div class="current-partner">

                <img
  src="${image(
    selected.card,
    selected.rarity
  )}"
  alt="${escapeHtml(
    selected.card.name
  )}"
  fetchpriority="high"
  decoding="async"
>

                <div>


                  <small>
                    いまの パートナー
                  </small>


                  <div class="partner-title-badge">
                    ⭐ ${escapeHtml(
                      selectedTitle
                    )}
                  </div>


                  <h3>
                    ${escapeHtml(
                      selected.card.name
                    )}
                  </h3>


                  <p>
                    いっしょに といた もんだい：
                    <strong>
                      ${selectedStudy}
                    </strong>
                    もん
                  </p>


                  ${
                    nextTitle
                      ? `
                        <p class="partner-next-title">

                          次の称号
                          「${escapeHtml(
                            nextTitle.title
                          )}」まで

                          <strong>
                            ${
                              Math.max(
                                0,
                                nextTitle.target -
                                selectedStudy
                              )
                            }
                          </strong>

                          もん！

                        </p>
                      `
                      : `
                        <p class="partner-next-title max">
                          👑 最高の称号になりました！
                        </p>
                      `
                  }


                  <button
                    class="button secondary small"
                    data-action="remove-partner"
                  >
                    はずす
                  </button>


                </div>

              </div>
            `

            : `
              <p>
                カードずかんで
                てにいれた モンスターから、
                すきな 1たいを えらべます。
              </p>
            `
        }

      </div>


      ${
        msg
          ? `
            <div class="notice">
              ${escapeHtml(msg)}
            </div>
          `
          : ""
      }


      <div class="partner-grid">

        ${
          entries.length
            ? entries.map(
                x => {

                  const studyCount =
                    getPartnerStudyCount(
                      x.key
                    );


                  const title =
                    getPartnerTitle(
                      studyCount
                    );


                  return `
                    <article
                      class="
                        partner-choice
                        rarity-${x.rarity}

                        ${
                          state.partnerKey === x.key
                            ? "selected"
                            : ""
                        }
                      "
                    >

                      <img
  src="${image(
    x.card,
    x.rarity
  )}"
  alt="${escapeHtml(
    x.card.name
  )}"
  loading="lazy"
  decoding="async"
>

                      <div>

                        <small>
                          ${x.rarity}
                          ・No.${
                            String(
                              x.card.number
                            ).padStart(
                              3,
                              "0"
                            )
                          }
                        </small>


                        <div class="partner-title-mini">
                          ⭐ ${escapeHtml(
                            title
                          )}
                        </div>


                        <h3>
                          ${escapeHtml(
                            x.card.name
                          )}
                        </h3>


                        <p>
                          ${studyCount}もん
                          いっしょに べんきょう
                        </p>


                        <button
                          class="
                            button
                            ${
                              state.partnerKey === x.key
                                ? "secondary"
                                : "cyan"
                            }
                          "

                          data-action="choose-partner"

                          data-key="${escapeHtml(
                            x.key
                          )}"
                        >

                          ${
                            state.partnerKey === x.key
                              ? "⭐ パートナーちゅう"
                              : "このこに する"
                          }

                        </button>


                      </div>

                    </article>
                  `;
                }
              ).join("")

            : `
              <div class="panel empty-partners">

                <p>
                  まだ カードが ありません。
                </p>

                <p>
                  ステージを クリアして、
                  パートナーを みつけよう！
                </p>

              </div>
            `
        }

      </div>

    </section>
  `;
}

  function collection() {
  return `
    <section class="stack">
      <div class="toolbar">
        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ 戻る
        </button>

        <h2>カード図鑑</h2>

        <span>
          ${state.unlockedCards.length}/${cards.length * 3}
        </span>
      </div>

      <div class="collection-grid">
        ${
          cards
            .flatMap(c =>
              ["N", "SR", "UR"].map(r =>
                state.unlockedCards.includes(`${c.id}_${r}`)
                  ? `
                    <button
                      class="collection-card rarity-${r}"
                      data-action="zoom-card"
                      data-card-id="${c.id}"
                      data-rarity="${r}"
                    >
                      <div class="card-shine"></div>
                      <div class="holo-layer"></div>

                      <img
  class="card-image"
  src="${image(c, r)}"
  alt="${escapeHtml(c.name)}"
  loading="lazy"
  decoding="async"
>

                      <div class="card-body">
                        <small>
                          ${r}・No.${String(c.number).padStart(3, "0")}
                        </small>

                        <h3 class="card-title">
                          ${c.name}
                        </h3>

                        <small>
                          タップで拡大 🔍
                        </small>
                      </div>
                    </button>
                  `
                  : `
                    <div class="locked">
                      🔒
                      <br>
                      No.${String(c.number).padStart(3, "0")} ${r}
                    </div>
                  `
              )
            )
            .join("")
        }
      </div>
    </section>
  `;
}


function zoomModal() {
  if (!zoom) return "";

  const c = zoom.card;
  const r = zoom.rarity;
  const f = r === "UR" ? 1.7 : r === "SR" ? 1.3 : 1;

  return `
    <div class="zoom-overlay">
      <button
        class="zoom-close"
        data-action="close-zoom"
      >
        ✕ とじる
      </button>

      <div class="tilt-scene">
        <article
          class="zoom-card rarity-${r}"
          data-zoom-tilt
        >
          <div class="card-shine"></div>
          <div class="holo-layer"></div>

          <div class="zoom-card-header">
            <span>
              No.${String(c.number).padStart(3, "0")}
            </span>

            <strong>
              ${c.name}
            </strong>

            <span>
              ${r}
            </span>
          </div>

          <img
  class="zoom-card-image"
  src="${image(c, r)}"
  alt="${escapeHtml(c.name)}"
  decoding="async"
  fetchpriority="high"
>

          <div class="zoom-card-body">
            <div class="card-meta">
              <span>
                HP ${Math.round(c.stats.hp * f)}
              </span>

              <span>
                ATK ${Math.round(c.stats.atk * f)}
              </span>
            </div>

            <p>
              ${c.description}
            </p>
          </div>
        </article>
      </div>

      <p class="zoom-guide">
        指でなぞるか、マウスを動かすとカードが傾いて光ります。
      </p>
    </div>
  `;
}

  function tiltMouse(e) { if (!zoom) return; const el=root.querySelector("[data-zoom-tilt]"); if(!el)return; const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2; el.style.transform=`rotateX(${-y/(r.height/2)*16}deg) rotateY(${x/(r.width/2)*16}deg) scale(1.03)`; }
  function tiltTouch(e) { if (!zoom||!e.touches.length)return; e.preventDefault(); const t=e.touches[0],el=root.querySelector("[data-zoom-tilt]"); if(!el)return; const r=el.getBoundingClientRect(),x=t.clientX-r.left-r.width/2,y=t.clientY-r.top-r.height/2; el.style.transform=`rotateX(${-y/(r.height/2)*16}deg) rotateY(${x/(r.width/2)*16}deg) scale(1.03)`; }

  function transfer() {
  const activePlayer =
    getActivePlayer();

  return `
    <section class="stack transfer-screen">

      <!-- =========================
           ヘッダー
      ========================== -->

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="landing"
        >
          ◀ トップへ
        </button>

        <h2>
          引っ越し・設定
        </h2>

        <span></span>

      </div>


      ${
        !isFirebaseConfigured()
          ? `
            <div class="notice">
              Firebase設定が未入力です。
              引っ越しコード機能は現在利用できません。
            </div>
          `
          : ""
      }


      <!-- =========================
           プレイヤー設定
      ========================== -->

      ${
        activePlayer
          ? `
            <section class="panel transfer-section">

              <div class="transfer-section-heading">

                <div class="transfer-section-icon">
                  👤
                </div>

                <div>
                  <h3>
                    プレイヤー設定
                  </h3>

                  <p class="muted">
                    今つかっている名前
                  </p>
                </div>

              </div>


              <div class="current-player-name">
                ${renderPlayerPortrait(state, {getCard, escapeHtml}, true)}
                <strong>
                  ${escapeHtml(
                    activePlayer.nickname ??
                    "プレイヤー"
                  )}
                </strong>
              </div>


              <div class="rename-player-form">

                <input
                  class="input nickname-input"
                  data-rename-input
                  maxlength="20"
                  autocomplete="off"
                  placeholder="新しいニックネーム"
                  value="${escapeHtml(
                    activePlayer.nickname ?? ""
                  )}"
                >

                <button
                  class="button secondary"
                  data-action="player-rename-submit"
                >
                  名前を変更する
                </button>

              </div>

            </section>
          `
          : `
            <section class="panel transfer-section">

              <p class="muted">
                プレイヤーを選ぶと、
                名前の変更ができます。
              </p>

            </section>
          `
      }

            ${
        playerMessage
          ? `
            <div class="notice">
              ${escapeHtml(
                playerMessage
              )}
            </div>
          `
          : ""
      }


      ${
        playerError
          ? `
            <div class="error">
              ${escapeHtml(
                playerError
              )}
            </div>
          `
          : ""
      }

            <!-- =========================
           保護者向け学習レポート
      ========================== -->

      ${
        activePlayer
          ? `
            <section class="panel transfer-section">

              <div class="transfer-section-heading">

                <div class="transfer-section-icon">
                  📊
                </div>

                <div>

                  <h3>
                    保護者向け学習レポート
                  </h3>

                  <p class="muted">
                    学習結果をメールで受け取れます。
                  </p>

                </div>

              </div>


              <label>
                保護者メールアドレス
              </label>


              <input
                class="input"
                type="email"
                data-parent-report-email
                autocomplete="email"
                placeholder="parent@example.com"
                value="${escapeHtml(
                  parentReportSettings.email ??
                  ""
                )}"
              >

<div class="parent-report-option-title">
  受け取るレポートを選んでください
</div>


<div class="parent-report-options">


  <!-- 学習終了後 -->

  <label
    class="
      parent-report-option-card
      ${
        parentReportSettings.reportMode ===
        "after_learning"
          ? "selected"
          : ""
      }
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="after_learning"
      ${
        parentReportSettings.reportMode ===
        "after_learning"
          ? "checked"
          : ""
      }
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      ✉️
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          学習終了後に受け取る
        </strong>

        <span class="parent-report-recommend">
          おすすめ
        </span>

      </span>


      <small>
        最後の学習から約15分後に、
        その日の学習内容をメールでお届けします。
      </small>

    </span>


    <span class="parent-report-option-badge">
      学習後
    </span>

  </label>



  <!-- 1週間まとめ -->

  <label
    class="
      parent-report-option-card
      ${
        parentReportSettings.reportMode ===
        "weekly"
          ? "selected"
          : ""
      }
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="weekly"
      ${
        parentReportSettings.reportMode ===
        "weekly"
          ? "checked"
          : ""
      }
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      📅
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          1週間まとめて受け取る
        </strong>

      </span>


      <small>
        毎週日曜日に、
        1週間の学習内容をまとめてお届けします。
      </small>

    </span>


    <span class="parent-report-option-badge">
      毎週日曜
    </span>

  </label>



  <!-- 学習終了後＋週間 -->

  <label
    class="
      parent-report-option-card
      ${
        parentReportSettings.reportMode ===
        "after_learning_and_weekly"
          ? "selected"
          : ""
      }
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="after_learning_and_weekly"
      ${
        parentReportSettings.reportMode ===
        "after_learning_and_weekly"
          ? "checked"
          : ""
      }
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      📊
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          学習終了後＋1週間まとめ
        </strong>

      </span>


      <small>
        学習後のレポートと、
        毎週日曜日の週間レポートを
        両方受け取ります。
      </small>

    </span>


    <span class="parent-report-option-badge">
      両方
    </span>

  </label>



  <!-- 通知OFF -->

  <label
    class="
      parent-report-option-card
      ${
        parentReportSettings.reportMode ===
        "off"
          ? "selected"
          : ""
      }
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="off"
      ${
        parentReportSettings.reportMode ===
        "off"
          ? "checked"
          : ""
      }
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      🔕
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          受け取らない
        </strong>

      </span>


      <small>
        保護者向け学習レポートの
        メール通知を停止します。
      </small>

    </span>


    <span class="parent-report-option-badge">
      OFF
    </span>

  </label>


</div>
              ${
                parentReportMessage
                  ? `
                    <div class="notice">
                      ${escapeHtml(
                        parentReportMessage
                      )}
                    </div>
                  `
                  : ""
              }


              ${
                parentReportError
                  ? `
                    <div class="error">
                      ${escapeHtml(
                        parentReportError
                      )}
                    </div>
                  `
                  : ""
              }


              <button
                class="button cyan"
                data-action="parent-report-save"
              >
                学習レポート設定を保存
              </button>


              ${
                parentReportSettings.email
                  ? `
                    <div class="parent-report-verification">

                      ${
                        parentReportSettings.emailVerified
                          ? `
                          
    <div class="notice">
      ✅ メールアドレス確認済み
    </div>
  `
                          : `
                            <div class="notice">
                              📩 メールアドレスはまだ確認されていません。
                            </div>

                            <button
                              class="button secondary"
                              data-action="parent-report-verify"
                            >
                              ✉️ 確認メールを送る
                            </button>

                            <p class="muted">
                              確認メールにある
                              「メールアドレスを確認」
                              を押してください。
                            </p>
                          `
                      }

                    </div>
                  `
                  : ""
              }

            </section>
          `
          : ""
      }

      <!-- =========================
           引っ越し説明
      ========================== -->

      <section class="panel transfer-guide">

        <div class="transfer-guide-title">

          <span class="transfer-guide-icon">
            📱
          </span>

          <div>
            <h3>
              引っ越しコードとは？
            </h3>

            <p>
  今までの冒険を、
  ほかの端末へ移すための
  6桁のコードです。
</p>

<p class="transfer-player-guide">
  👤 引っ越しコードは
  <strong>プレイヤー1人につき1つ</strong>
  発行します。
</p>

<p class="transfer-player-guide">
  プレイヤーが2人以上いるときは、
  それぞれのプレイヤーを選んで
  引っ越しコードを発行してください。
</p>
          </div>

        </div>


        <div class="transfer-data-list">

          <strong>
            引き継がれるもの
          </strong>

          <div class="transfer-data-items">

            <span>👤 なまえ</span>
            <span>🗺️ 学習の進み具合</span>
            <span>🃏 集めたカード</span>
            <span>💎 ジェム</span>
            <span>⭐ パートナー</span>

          </div>

        </div>

      </section>


      <!-- =========================
           2カラム
      ========================== -->

      <div class="transfer-columns">


        <!-- -------------------------
             この端末から
        -------------------------- -->

        <section class="panel transfer-box transfer-export">

          <div class="transfer-step-number">
            1
          </div>

          <div class="transfer-box-icon">
            📤
          </div>

          <h3>
            この端末から
            <br>
            引っ越す
          </h3>

          <p class="muted">
            今まで遊んでいた端末で
            こちらを使います。
          </p>


          ${
            activePlayer
              ? `
                <div class="transfer-player-preview">

                  <small>
                    引っ越すプレイヤー
                  </small>

                  <strong>
                    ${renderPlayerPortrait(state, {getCard, escapeHtml}, true)} ${escapeHtml(
                      activePlayer.nickname ??
                      "プレイヤー"
                    )}
                  </strong>

                </div>
              `
              : `
                <div class="notice">
                  先にプレイヤーを
                  選んでください。
                </div>
              `
          }


          <button
            class="button transfer-create-button"
            data-action="transfer-create"
            ${
              !activePlayer
                ? "disabled"
                : ""
            }
          >
            🔑 6桁コードを発行する
          </button>

                    ${
            transferCode
              ? `
                <div class="transfer-issued-code">

                  <small>
                    あなたの引っ越しコード
                  </small>

                  <strong>
                    ${escapeHtml(
                      transferCode
                    )}
                  </strong>

                  <p>
                    このコードを、
                    新しい端末の
                    「6桁の引っ越しコード」
                    入力画面に入力してね。
                  </p>

                  <p class="transfer-code-expire">
                    ⏰ このコードは
                    10分間だけ使えます。
                  </p>

                </div>
              `
              : ""
          }

          <p class="transfer-small-note">
            発行したコードを、
            新しい端末で入力してください。
          </p>

        </section>


        <!-- -------------------------
             この端末へ
        -------------------------- -->

        <section class="panel transfer-box transfer-import">

          <div class="transfer-step-number">
            2
          </div>

          <div class="transfer-box-icon">
            📥
          </div>

          <h3>
            この端末へ
            <br>
            引き継ぐ
          </h3>

          <p class="muted">
            新しく使う端末で
            こちらを使います。
          </p>


          <label
            class="transfer-code-label"
            for="transfer-code-input"
          >
            6桁の引っ越しコード
          </label>


          <input
            id="transfer-code-input"
            class="input transfer-code-input"
            data-transfer-input
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="6"
            autocomplete="one-time-code"
            placeholder="123456"
          >


          <button
            class="button cyan transfer-use-button"
            data-action="transfer-use"
          >
            📲 データを引き継ぐ
          </button>


          <p class="transfer-small-note">
            引き継ぎが完了すると、
            引っ越し元の名前も
            一緒に復元されます。
          </p>

        </section>

      </div>


      <!-- =========================
           メッセージ
      ========================== -->

      ${
        msg
          ? `
            <div class="sync-code transfer-message">
              ${escapeHtml(msg)}
            </div>
          `
          : ""
      }


      ${
        err
          ? `
            <div class="error transfer-error">
              ${escapeHtml(err)}
            </div>
          `
          : ""
      }


      <!-- =========================
           注意事項
      ========================== -->

      <section class="panel transfer-notes">

        <h3>
          ⚠️ 引っ越しするときの注意
        </h3>

        <ul>
          <li>
            引っ越しコードは、
            ほかの人に教えないでください。
          </li>

          <li>
            新しい端末では
            「この端末へ引き継ぐ」から
            コードを入力します。
          </li>

          <li>
            名前・カード・ジェム・
            学習の進み具合などが
            引き継がれます。
          </li>

          <li>
            引っ越しが終わったら、
            名前やカードが正しいか
            確認してください。
          </li>

          <li>
  プレイヤーが2人以上いる場合は、
  1人ずつ引っ越しコードを発行して
  新しい端末へ引き継いでください。
</li>

<li>
  別のプレイヤーを引っ越しても、
  すでに引き継いだプレイヤーの
  データは消えません。
</li>

<li>
  同じプレイヤーをもう一度
  引っ越した場合は、
  そのプレイヤーのデータが
  新しい内容に更新されます。
</li>
        </ul>

      </section>

    </section>
  `;
}
const image=(c,r)=>c?.images?.[r]??c?.images?.N??c?.image??"";
root.addEventListener('input',event=>{
 if(!event.target.matches('[data-large-number-input]')||screen!=='game'||!inputEnabled)return;
 input=event.target.value.normalize('NFKC').replace(/[^0-9]/g,'').slice(0,20);event.target.value=input;
});
root.addEventListener('keydown',event=>{
 const choice=event.target.closest?.('[data-action="inline-choice-answer"]');
 if(choice&&(event.key==='Enter'||event.key===' ')){event.preventDefault();choice.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));return;}
 if(event.key==='Enter'&&event.target.matches('[data-large-number-input]')&&inputEnabled){event.preventDefault();root.querySelector('[data-action="answer"]')?.dispatchEvent(new PointerEvent('pointerup',{bubbles:true}));}
});

}