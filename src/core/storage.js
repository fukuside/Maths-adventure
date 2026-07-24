import {
  ensureAnonymousUser,
  isFirebaseConfigured,
  loadCloudSave,
  saveCloudSave
} from "./firebase.js";

const LEGACY_STORAGE_KEY = "maths_adventure_state_v1";
const PROFILES_STORAGE_KEY = "maths_adventure_profiles_v1";

const defaultState = {
  gems: 0,
  unlockedCards: [],
  speedSetting: "normal",
  totalExp: 0,
  partnerKey: null,
  partnerStudy: {}
};

const defaultProfiles = {
  activePlayerId: null,
  players: {}
};

let cloudUid = null;
let syncListener = () => {};

export function setSyncListener(listener) {
  syncListener = typeof listener === "function" ? listener : () => {};
}


/* =========================================================
   共通
========================================================= */

function cloneDefaultState() {
  return structuredClone(defaultState);
}

function normalizeState(state = {}) {
  return {
    gems: Number(state.gems ?? 0),

    unlockedCards: Array.isArray(state.unlockedCards)
      ? state.unlockedCards
      : [],

    speedSetting: state.speedSetting ?? "normal",

    totalExp: Number(state.totalExp ?? 0),

    partnerKey: state.partnerKey ?? null,

    partnerStudy:
      state.partnerStudy &&
      typeof state.partnerStudy === "object"
        ? state.partnerStudy
        : {}
  };
}

function createPlayerId() {
  if (crypto?.randomUUID) {
    return `p_${crypto.randomUUID()}`;
  }

  return `p_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function sanitizeNickname(value) {
  return String(value ?? "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 20);
}


/* =========================================================
   プロフィール全体
========================================================= */

export function loadProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);

    if (!raw) {
      return structuredClone(defaultProfiles);
    }

    const parsed = JSON.parse(raw);

    return {
      activePlayerId:
        typeof parsed.activePlayerId === "string"
          ? parsed.activePlayerId
          : null,

      players:
        parsed.players &&
        typeof parsed.players === "object"
          ? parsed.players
          : {}
    };
  } catch {
    return structuredClone(defaultProfiles);
  }
}

function saveProfiles(profiles) {
  localStorage.setItem(
    PROFILES_STORAGE_KEY,
    JSON.stringify(profiles)
  );
}


/* =========================================================
   旧セーブ確認
========================================================= */

export function hasLegacySave() {
  return Boolean(
    localStorage.getItem(LEGACY_STORAGE_KEY)
  );
}

function readLegacyState() {
  try {
    const raw =
      localStorage.getItem(LEGACY_STORAGE_KEY);

    if (!raw) return null;

    return normalizeState(JSON.parse(raw));
  } catch {
    return null;
  }
}


/* =========================================================
   プレイヤー一覧
========================================================= */

export function getPlayers() {
  const profiles = loadProfiles();

  return Object.values(profiles.players)
    .sort((a, b) => {
      return Number(b.lastPlayedAt ?? 0) -
        Number(a.lastPlayedAt ?? 0);
    });
}

export function getActivePlayer() {
  const profiles = loadProfiles();

  if (!profiles.activePlayerId) {
    return null;
  }

  return (
    profiles.players[
      profiles.activePlayerId
    ] ?? null
  );
}

export function getActivePlayerId() {
  return loadProfiles().activePlayerId;
}


/* =========================================================
   プレイヤー作成
========================================================= */

export function createPlayer(
  nickname,
  initialState = null
) {
  const safeNickname =
    sanitizeNickname(nickname);

  if (!safeNickname) {
    throw new Error(
      "ニックネームを入力してください。"
    );
  }

  const profiles = loadProfiles();

  const playerId = createPlayerId();

  const player = {
    playerId,
    nickname: safeNickname,

    createdAt: Date.now(),
    lastPlayedAt: Date.now(),

    state: normalizeState(
      initialState ?? cloneDefaultState()
    )
  };

  profiles.players[playerId] = player;
  profiles.activePlayerId = playerId;

  saveProfiles(profiles);

  return player;
}


/* =========================================================
   旧データ → 新プレイヤーへ移行
========================================================= */

export function migrateLegacySave(
  nickname
) {
  const legacy = readLegacyState();

  if (!legacy) {
    throw new Error(
      "引き継ぐ旧データがありません。"
    );
  }

  const player = createPlayer(
    nickname,
    legacy
  );

  /*
   * 旧データは念のため削除しません。
   * 移行後もバックアップとして残します。
   */

  return player;
}


/* =========================================================
   プレイヤー切替
========================================================= */

export function selectPlayer(playerId) {
  const profiles = loadProfiles();

  const player =
    profiles.players[playerId];

  if (!player) {
    throw new Error(
      "プレイヤーが見つかりません。"
    );
  }

  player.lastPlayedAt = Date.now();

  profiles.activePlayerId = playerId;

  saveProfiles(profiles);

  return normalizeState(player.state);
}


/* =========================================================
   プレイヤー削除
========================================================= */

export function deletePlayer(playerId) {
  const profiles = loadProfiles();

  if (!profiles.players[playerId]) {
    return;
  }

  delete profiles.players[playerId];

  if (
    profiles.activePlayerId === playerId
  ) {
    profiles.activePlayerId =
      Object.keys(profiles.players)[0] ??
      null;
  }

  saveProfiles(profiles);
}


/* =========================================================
   旧 loadLocalState と互換
========================================================= */

export function loadLocalState() {
  const active = getActivePlayer();

  if (!active) {
    return cloneDefaultState();
  }

  return normalizeState(active.state);
}


/* =========================================================
   保存
========================================================= */

export function saveLocalState(state) {
  const profiles = loadProfiles();

  const playerId =
    profiles.activePlayerId;

  if (!playerId) {
    return;
  }

  const player =
    profiles.players[playerId];

  if (!player) {
    return;
  }

  player.state = normalizeState(state);
  player.lastPlayedAt = Date.now();

  saveProfiles(profiles);
}


/* =========================================================
   Firebase初期化
========================================================= */

export async function initializeCloud(state) {
  if (!isFirebaseConfigured()) {
    syncListener("local");
    return state;
  }

  syncListener("syncing");

  const user = await ensureAnonymousUser();

  cloudUid = user?.uid ?? null;

  if (!cloudUid) {
    syncListener("local");
    return state;
  }

  const activePlayer =
    getActivePlayer();

  /*
   * プレイヤー未作成なら
   * クラウド同期はまだ行わない
   */
  if (!activePlayer) {
    syncListener("local");
    return state;
  }

  /*
   * 現段階では既存Firebase APIとの
   * 互換性を保つため、
   * cloudUid単位の保存を維持します。
   *
   * 次のfirebase.js改修で
   * playerId単位へ変更します。
   */

  const cloud =
    await loadCloudSave(cloudUid);

  if (cloud) {
    const cloudState =
      normalizeState(cloud);

    const localScore =
      Number(state.gems ?? 0) +
      state.unlockedCards.length * 100 +
      Number(state.totalExp ?? 0);

    const cloudScore =
      Number(cloudState.gems ?? 0) +
      cloudState.unlockedCards.length * 100 +
      Number(cloudState.totalExp ?? 0);

    if (cloudScore >= localScore) {
      saveLocalState(cloudState);

      syncListener("connected");

      return cloudState;
    }
  }

  await saveCloudSave(
    cloudUid,
    state
  );

  syncListener("connected");

  return state;
}


/* =========================================================
   保存 + クラウド同期
========================================================= */

export async function persistState(state) {
  saveLocalState(state);

  if (!cloudUid) {
    return;
  }

  try {
    syncListener("syncing");

    await saveCloudSave(
      cloudUid,
      state
    );

    syncListener("connected");
  } catch (error) {
    console.error(error);

    syncListener("local");
  }
}


/* =========================================================
   引っ越し等で状態を置換
========================================================= */

export async function replaceState(
  nextState
) {
  const safe =
    normalizeState(nextState);

  await persistState(safe);

  return safe;
}