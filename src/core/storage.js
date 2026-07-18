import {
  ensureAnonymousUser,
  isFirebaseConfigured,
  loadCloudSave,
  saveCloudSave
} from "./firebase.js";

const STORAGE_KEY = "maths_adventure_state_v1";

const defaultState = {
  gems: 0,
  unlockedCards: [],
  speedSetting: "normal",
  totalExp: 0,
  partnerKey: null,
  partnerStudy: {}
};

let cloudUid = null;
let syncListener = () => {};

export function setSyncListener(listener) {
  syncListener = typeof listener === "function" ? listener : () => {};
}

export function loadLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);

    const parsed = JSON.parse(raw);

    return {
      gems: Number(parsed.gems ?? 0),
      unlockedCards: Array.isArray(parsed.unlockedCards)
        ? parsed.unlockedCards
        : [],
      speedSetting: parsed.speedSetting ?? "normal",
      totalExp: Number(parsed.totalExp ?? 0),
      partnerKey: parsed.partnerKey ?? null,
      partnerStudy: parsed.partnerStudy && typeof parsed.partnerStudy === "object" ? parsed.partnerStudy : {}
    };
  } catch {
    return structuredClone(defaultState);
  }
}

export function saveLocalState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

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

  const cloud = await loadCloudSave(cloudUid);

  if (cloud) {
    const cloudState = {
      gems: Number(cloud.gems ?? 0),
      unlockedCards: Array.isArray(cloud.unlockedCards)
        ? cloud.unlockedCards
        : [],
      speedSetting: cloud.speedSetting ?? "normal",
      totalExp: Number(cloud.totalExp ?? 0),
      partnerKey: cloud.partnerKey ?? null,
      partnerStudy: cloud.partnerStudy && typeof cloud.partnerStudy === "object" ? cloud.partnerStudy : {}
    };

    const localScore =
      state.gems + state.unlockedCards.length * 100 + Number(state.totalExp ?? 0);
    const cloudScore =
      cloudState.gems + cloudState.unlockedCards.length * 100 + Number(cloudState.totalExp ?? 0);

    if (cloudScore >= localScore) {
      saveLocalState(cloudState);
      syncListener("connected");
      return cloudState;
    }
  }

  await saveCloudSave(cloudUid, state);
  syncListener("connected");
  return state;
}

export async function persistState(state) {
  saveLocalState(state);

  if (!cloudUid) return;

  try {
    syncListener("syncing");
    await saveCloudSave(cloudUid, state);
    syncListener("connected");
  } catch (error) {
    console.error(error);
    syncListener("local");
  }
}

export async function replaceState(nextState) {
  const safe = {
    gems: Number(nextState.gems ?? 0),
    unlockedCards: Array.isArray(nextState.unlockedCards)
      ? nextState.unlockedCards
      : [],
    speedSetting: nextState.speedSetting ?? "normal",
    totalExp: Number(nextState.totalExp ?? 0),
      partnerKey: nextState.partnerKey ?? null,
      partnerStudy: nextState.partnerStudy && typeof nextState.partnerStudy === "object" ? nextState.partnerStudy : {}
  };

  await persistState(safe);
  return safe;
}
