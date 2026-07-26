import { worlds, stages, cards, getCard, getStage } from "./registry.js";
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
  migrateLegacySave
} from "./storage.js";
import { consumeTransferCode, createTransferCode, isFirebaseConfigured } from "./firebase.js";

const rarityRows = [["UR", 0.05, 1.7], ["SR", 0.25, 1.3], ["N", 0.70, 1]];

export function createApp(root) {
  let state = loadLocalState();
  let screen = "landing", worldId = null, currentStage = null, questions = [], qi = 0, input = "";
  let earned = null;
  
let chestOpened = false;
let chestOpening = false;
let cardRevealed = false;
let chestTimer = null;

let sync = "local", msg = "", err = "";
  let lives = 2, gameOver = false, wrongMessage = "";
  let flashVisible = true, inputEnabled = false, flashTimer = null, feedbackTimer = null, zoom = null;
  let answerFeedback = null;
  let feedbackPlaying = false;
  let partnerMood = "idle";
  let titleBgmPlaying = false;
  let playerMessage = "";
  let playerError = "";

const titleBgm = new Audio("/audio/title-bgm.mp3");
titleBgm.loop = true;
titleBgm.volume = 0.35;

  setSyncListener(x => { sync = x; render(); });
  root.addEventListener("click", click);
  root.addEventListener("input", onInput);
  root.addEventListener("mousemove", tiltMouse);
  root.addEventListener("touchmove", tiltTouch, { passive: false });
  render();
  initializeCloud(state).then(x => { state = x; render(); }).catch(() => { sync = "local"; render(); });

  function onInput(e) {
  if (e.target.matches("[data-transfer-input]")) {
    e.target.value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);
  }

  if (e.target.matches("[data-nickname-input]")) {
    e.target.value = e.target.value.slice(0, 20);
  }
}
  async function click(e) {
    const t = e.target.closest("[data-action]"); if (!t) return;
    const a = t.dataset.action;
    if (a === "landing-start") {
  stopTitleBgm();

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
    const playerId = t.dataset.playerId;

    state = selectPlayer(playerId);

    playerMessage = "";
    playerError = "";

    screen = "title";

    render();
  } catch (error) {
    playerError = error.message;
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

    screen = "title";

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
    if (feedbackPlaying && !["go", "close-zoom"].includes(a)) return;
    if (a === "go") { clearQuestionTimers(); screen = t.dataset.screen; render(); return; }
    if (a === "world") { worldId = Number(t.dataset.world); screen = "world"; render(); return; }
    if (a === "stage") { currentStage = getStage(t.dataset.id); questions = generateQuestions(currentStage, 5); qi = 0; input = ""; earned = null; chestOpened = false; lives = 2; gameOver = false; wrongMessage = ""; answerFeedback = null; partnerMood = "start"; screen = "game"; startQuestion(); return; }
    if (a === "replay-flash") { if (usesFlash(currentStage) && !answerFeedback) startQuestion(); return; }
    if (a === "key") {
      if (!inputEnabled) return;
      const value = t.dataset.value;
      if (value === "clear") input = "";
      else if (value === "back") input = input.slice(0, -1);
      else if (input.length < 20) input += value;
      render();
      return;
    }
    if (a === "answer") {
      if (!inputEnabled || input === "") return;
      const expected = Number(questions[qi].answer), got = parseAnswerInput(input);
      if (Math.abs(got - expected) < 1e-9) {
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
        input = "";
        lives -= 1;
        if (lives > 0) {
          wrongMessage = "バリアが ひとつ こわれた！ もういちど やってみよう。";
          partnerMood = "encourage";
          startQuestion();
        } else {
          gameOver = true;
          inputEnabled = false;
          flashVisible = false;
          clearQuestionTimers();
          wrongMessage = "";
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

    if (a === "retry-stage") { questions = generateQuestions(currentStage, 5); qi = 0; input = ""; lives = 2; gameOver = false; wrongMessage = ""; answerFeedback = null; startQuestion(); return; }
    if (a === "zoom-card") { zoom = { card: getCard(t.dataset.cardId), rarity: t.dataset.rarity }; render(); return; }
    if (a === "close-zoom") { zoom = null; render(); return; }
    if (a === "choose-partner") {
      state.partnerKey = t.dataset.key;
      state.partnerStudy = state.partnerStudy ?? {};
      await persistState(state);
      msg = "パートナーに せっていしました！";
      render();
      return;
    }
    if (a === "remove-partner") {
      state.partnerKey = null;
      await persistState(state);
      render();
      return;
    }
    if (a === "set-speed") { state.speedSetting = t.dataset.speed; await persistState(state); render(); return; }
    if (a === "transfer-create") { try { msg = await createTransferCode(state); err = ""; } catch (x) { err = x.message; } render(); return; }
    if (a === "transfer-use") { const code = root.querySelector("[data-transfer-input]")?.value ?? ""; try { state = await replaceState(await consumeTransferCode(code)); msg = "引き継ぎ完了"; err = ""; screen = "title"; } catch (x) { err = x.message; } render(); }
  }

  function usesFlash(stage) {
    return (stage?.presentation ?? "flash") === "flash";
  }

  function startQuestion() {
    clearFlash();
    clearFeedback();
    answerFeedback = null;

    if (!usesFlash(currentStage)) {
      flashVisible = true;
      inputEnabled = true;
      render();
      return;
    }

    flashVisible = true;
    inputEnabled = false;
    render();
    flashTimer = setTimeout(() => {
      flashVisible = false;
      inputEnabled = true;
      render();
    }, flashDuration());
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
    return state.speedSetting === "slow" ? 2500 : state.speedSetting === "fast" ? 700 : 1500;
  }

  function playCorrectSound() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const context = new AudioContextClass();
      const master = context.createGain();
      master.connect(context.destination);
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

  function playChestOpenSound() {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const now = context.currentTime;

    const master = context.createGain();
    master.connect(context.destination);

    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);

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

    setTimeout(() => {
      context.close().catch(() => {});
    }, 1400);

  } catch (error) {
    console.warn("宝箱サウンドを再生できませんでした", error);
  }
}

function playCardRevealSound(rarity = "N") {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    const context = new AudioContextClass();
    const now = context.currentTime;

    const master = context.createGain();
    master.connect(context.destination);

    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
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

    setTimeout(() => {
      context.close().catch(() => {});
    }, 1800);

  } catch (error) {
    console.warn("カード獲得音を再生できませんでした", error);
  }
}

  function getPool(stage) {
    const unitCards = cards.filter(c => c.world === stage.world && c.unit === stage.unit);
    if (stage.isBoss) return unitCards.filter(c => c.role === "boss");
    const normals = unitCards.filter(c => c.role === "normal").sort((a,b)=>a.number-b.number);
    if (stage.unit === "multiplication") return (stage.sort ?? 1) <= 6 ? normals.slice(0,6) : normals.slice(6,12);
    return normals;
  }

  function finish() {
    clearQuestionTimers();
    const roll = Math.random(); let cur = 0, row = rarityRows[2];
    for (const r of rarityRows) { cur += r[1]; if (roll <= cur) { row = r; break; } }
    const pool = getPool(currentStage); const card = pool[Math.floor(Math.random() * pool.length)];
    const key = `${card.id}_${row[0]}`; if (!state.unlockedCards.includes(key)) state.unlockedCards.push(key);
    state.gems += currentStage.rewardGems ?? 5; earned = { card, rarity: row[0], factor: row[2] };
    chestOpened = false;
chestOpening = false;
cardRevealed = false;

if (chestTimer) {
  clearTimeout(chestTimer);
  chestTimer = null;
}

persistState(state);
screen = "result";
render();
  }

  function render() {

  if (screen === "landing") {
    root.innerHTML = landing();
    return;
  }

  root.innerHTML = `
    <div class="app-shell">

      <header class="app-header">
        <h1 class="brand">⚔️ Maths-adventure</h1>

        <div class="header-status">
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

              <div class="player-avatar">
                🧙
              </div>

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

  return `
    <section class="stack">

      <!-- 現在のプレイヤー -->
      <div class="panel player-banner">

  <div>
    <small>
      いま冒険しているプレイヤー
    </small>

    <strong>
      🧙 ${escapeHtml(activePlayer?.nickname ?? "ゲスト")}
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

      <!-- WORLD案内 -->
      <div class="panel hero">

        <div class="hero-icon">
          💎⚔️🐉
        </div>

        <h2>
          Maths Quest
        </h2>

        <p class="muted">
          WORLDを選んで算数の冒険へ出発しよう。
        </p>

      </div>


      <!-- WORLD一覧 -->
      <div class="world-grid">

        ${
          worlds.map(w => `
            <button
              class="world-button ${w.available ? "" : "disabled"}"
              ${
                w.available
                  ? `data-action="world" data-world="${w.id}"`
                  : "disabled"
              }
            >

              <strong>
                WORLD ${w.id}
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

        <strong>
          フラッシュ表示時間
        </strong>

        <div class="speed-grid">

          ${
            ["slow", "normal", "fast"].map(s => `
              <button
                class="button small ${
                  state.speedSetting === s
                    ? "cyan"
                    : "secondary"
                }"
                data-action="set-speed"
                data-speed="${s}"
              >
                ${
                  s === "slow"
                    ? "ゆっくり"
                    : s === "fast"
                      ? "一瞬"
                      : "ふつう"
                }
              </button>
            `).join("")
          }

        </div>


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
  if (titleBgmPlaying) {
    titleBgm.pause();
    titleBgmPlaying = false;
    return;
  }

  titleBgm.play()
    .then(() => {
      titleBgmPlaying = true;
      render();
    })
    .catch(error => {
      console.warn("BGMを再生できませんでした:", error);
    });
}

function stopTitleBgm() {
  titleBgm.pause();
  titleBgm.currentTime = 0;
  titleBgmPlaying = false;
}


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
        aria-label="BGM切り替え"
        title="BGM ON / OFF"
      >
        ${titleBgmPlaying ? "🔊" : "♪"}
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
          data-action="landing-start"
        >
          <span class="landing-play-icon">▶</span>
          <span>冒険をはじめる</span>
        </button>


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
    const w = worlds.find(x=>x.id===worldId), ss = stages.filter(x=>x.world===worldId), units = [...new Set(ss.map(x=>x.unit))];
    return `<section class="panel"><div class="toolbar"><button class="button secondary small" data-action="go" data-screen="title">◀ WORLD</button><h2>WORLD ${w.id}・${w.grade}</h2><span></span></div>${units.map(u=>{const us=ss.filter(x=>x.unit===u).sort((a,b)=>(a.sort??0)-(b.sort??0));return `<section class="stage-section"><h3>${us[0].unitLabel}</h3><div class="stage-grid">${us.map(s=>`<button class="stage-button stage-text-only ${s.isBoss?"boss":""}" data-action="stage" data-id="${s.id}"><span class="stage-symbol">${s.isBoss?"👑":"⚔️"}</span><span class="stage-name">${s.isBoss?`${s.unitLabel} ボス戦`:s.unit==="multiplication"?`${s.sort}の段`:`${s.unitLabel} ${s.name}`}</span></button>`).join("")}</div></section>`}).join("")}</section>`;
  }

  function game() {
    const q = questions[qi];
    const flashMode = usesFlash(currentStage);
    const showQuestion = flashMode ? flashVisible : true;

    if (gameOver) {
      return `<section class="stack"><div class="panel hero game-over-panel"><div class="hero-icon">💥</div><h2>バリアがなくなった！</h2><p class="muted">${qi} / ${questions.length} 問まで進みました。</p></div><div class="life-display game-over-life"><span>💥</span><span>💥</span></div><button class="button cyan" data-action="retry-stage">同じステージにもう一度挑戦</button><button class="button secondary" data-action="go" data-screen="world">ワールドへ戻る</button></section>`;
    }

    const questionAction = flashMode ? 'data-action="replay-flash"' : "";
    const guide = flashMode
      ? (flashVisible ? "よく見ておぼえよう！" : "タップすると、もう一度問題を見られます")
      : "問題を見ながら答えよう！";

    return `<section class="stack game-area">
      <div class="toolbar">
        <button class="button secondary small" data-action="go" data-screen="world">◀ やめる</button>
        <div class="game-status"><div class="life-display"><span>${lives>=1?"🛡️":"💥"}</span><span>${lives>=2?"🛡️":"💥"}</span></div><strong>${qi+1}/${questions.length}</strong></div>
      </div>
      ${wrongMessage?`<div class="wrong-notice">${wrongMessage}</div>`:""}
      <button class="question-card ${flashMode ? "flash-card" : "persistent-card"} ${showQuestion?"showing":"hidden-question"}" ${questionAction} ${flashMode ? "" : 'type="button"'}>
        <div>
          <p class="muted">${currentStage.unitLabel}・${currentStage.name}</p>
          <div class="question">${showQuestion ? renderQuestion(q) : "？"}</div>
          <p class="flash-guide">${guide}</p>
        </div>
        ${flashMode && flashVisible?`<div class="flash-progress" style="animation-duration:${flashDuration()}ms"></div>`:""}
      </button>
      <div class="partner-answer-zone">

  ${renderPartnerCompanion()}

  <button
    class="partner-submit-button ${inputEnabled ? "" : "disabled-button"}"
    data-action="answer"
  >
    🐾 こたえを けってい！
  </button>

</div>

<div class="answer-display">
  ${
    input
      ? formatInput(input)
      : inputEnabled
        ? "こたえを えらんでね"
        : "もんだいを みています"
  }
</div>

${renderKeypad()}
      ${answerFeedback === "correct" ? `<div class="correct-feedback" aria-live="polite"><div class="correct-feedback-card"><svg class="red-pen-svg" viewBox="0 0 240 240" aria-hidden="true"><path class="red-pen-stroke" d="M190 49 C147 10 75 18 38 69 C1 120 29 194 96 211 C158 227 218 182 218 116 C218 84 206 62 190 49"/><path class="red-pen-check" d="M70 119 L101 151 L167 78"/></svg><strong>せいかい！</strong><span class="correct-exp">✨ +10 EXP</span></div></div>` : ""}
    </section>`;
  }

  function parseAnswerInput(value) {
    const cleaned = String(value).replace(/[^0-9.\-]/g, "");
    return cleaned === "" ? NaN : Number(cleaned);
  }

  function formatInput(value) {
    return escapeHtml(String(value).replaceAll("morning", "☀ あさ ").replaceAll("night", "🌙 よる "));
  }

  function renderKeypad() {
    return renderKeypadForStage(currentStage, { escapeHtml, inputEnabled });
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

  function selectedPartner() {
    return unlockedPartnerEntries().find(x => x.key === state.partnerKey) ?? null;
  }

  function incrementPartnerStudy() {
    if (!state.partnerKey) return;
    state.partnerStudy = state.partnerStudy ?? {};
    state.partnerStudy[state.partnerKey] = Number(state.partnerStudy[state.partnerKey] ?? 0) + 1;
  }

  function partnerPhrase() {
    if (partnerMood === "correct") return "やったね！";
    if (partnerMood === "encourage") return "だいじょうぶ！ もういっかい！";
    if (partnerMood === "start") return "いっしょに がんばろう！";
    return "みているよ！";
  }

  function renderPartnerCompanion() {
    const p = selectedPartner();
    if (!p) return `<div class="partner-companion empty"><span>⭐</span><p>パートナーを えらぶと おうえんしてくれるよ！</p></div>`;
    return `<div class="partner-companion mood-${partnerMood} rarity-${p.rarity}"><img src="${image(p.card,p.rarity)}" alt="${escapeHtml(p.card.name)}"><div><small>パートナー</small><strong>${escapeHtml(p.card.name)}</strong><p>${partnerPhrase()}</p></div></div>`;
  }

  function renderQuestion(question) {
    return renderQuestionByKind(question, { escapeHtml });
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
  const rarity = earned?.rarity ?? "N";

  return `
    <section class="stack">

      <div class="panel hero">

        <div class="hero-icon">
          🎉
        </div>

        <h2>
          クエストクリア！
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


      ${
        cardRevealed
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
        <div class="card-shine"></div>
        <div class="holo-layer"></div>

        <img
          class="card-image"
          src="${image(earned.card, earned.rarity)}"
          alt="${earned.card.name}"
        >

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
    const entries = unlockedPartnerEntries();
    const selected = selectedPartner();
    return `<section class="stack"><div class="toolbar"><button class="button secondary small" data-action="go" data-screen="title">◀ もどる</button><h2>いっしょに べんきょうする パートナー</h2><span></span></div>
      <div class="panel partner-intro">${selected ? `<div class="current-partner"><img src="${image(selected.card,selected.rarity)}"><div><small>いまの パートナー</small><h3>${escapeHtml(selected.card.name)}</h3><p>いっしょに といた もんだい：${Number(state.partnerStudy?.[selected.key] ?? 0)}もん</p><button class="button secondary small" data-action="remove-partner">はずす</button></div></div>` : `<p>カードずかんで てにいれた モンスターから、すきな 1たいを えらべます。</p>`}</div>
      ${msg?`<div class="notice">${escapeHtml(msg)}</div>`:""}
      <div class="partner-grid">${entries.length ? entries.map(x=>`<article class="partner-choice rarity-${x.rarity} ${state.partnerKey===x.key?"selected":""}"><img src="${image(x.card,x.rarity)}" alt="${escapeHtml(x.card.name)}"><div><small>${x.rarity}・No.${String(x.card.number).padStart(3,"0")}</small><h3>${escapeHtml(x.card.name)}</h3><p>${Number(state.partnerStudy?.[x.key] ?? 0)}もん いっしょに べんきょう</p><button class="button ${state.partnerKey===x.key?"secondary":"cyan"}" data-action="choose-partner" data-key="${escapeHtml(x.key)}">${state.partnerKey===x.key?"⭐ パートナーちゅう":"このこに する"}</button></div></article>`).join("") : `<div class="panel empty-partners"><p>まだ カードが ありません。</p><p>ステージを クリアして、パートナーを みつけよう！</p></div>`}</div>
    </section>`;
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
                        alt="${c.name}"
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
            alt="${c.name}"
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

  function transfer() { return `<section class="panel stack"><div class="toolbar"><button class="button secondary small" data-action="go" data-screen="landing">
  ◀ トップへ
</button>
<h2>引っ越しコード</h2><span></span></div>${!isFirebaseConfigured()?'<div class="notice">Firebase設定が未入力です。</div>':""}<button class="button" data-action="transfer-create">6桁コードを発行</button><input class="input" data-transfer-input inputmode="numeric" maxlength="6" placeholder="123456"><button class="button cyan" data-action="transfer-use">データを引き継ぐ</button>${msg?`<div class="sync-code">${msg}</div>`:""}${err?`<div class="error">${err}</div>`:""}</section>`; }
}
const image=(c,r)=>c?.images?.[r]??c?.images?.N??c?.image??"";
