import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";

/*
  Firebaseコンソールで発行された値に置き換えてください。
  Vercelへ公開しても、Firebase Web設定自体は秘密鍵ではありません。
  必ず firestore.rules でアクセス制限してください。
*/
const firebaseConfig = {
  apiKey: "AIzaSyDX1C1kdKW0_xD4WMWmui9ltUnG1WjO9mA",
  authDomain: "maths-adventure-f4d17.firebaseapp.com",
  projectId: "maths-adventure-f4d17",
  storageBucket: "maths-adventure-f4d17.firebasestorage.app",
  messagingSenderId: "3583493206",
  appId: "1:3583493206:web:a6d2d61e7e8665cf2127f7",
};

const configured = !Object.values(firebaseConfig).some(value =>
  String(value).startsWith("ここに")
);

let auth = null;
let db = null;

if (configured) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

export function isFirebaseConfigured() {
  return configured;
}

export async function ensureAnonymousUser() {
  if (!configured) return null;

  if (auth.currentUser) {
    return auth.currentUser;
  }

  await signInAnonymously(auth);

  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        unsubscribe();
        resolve(user);
      },
      error => {
        unsubscribe();
        reject(error);
      }
    );
  });
}

export async function loadCloudSave(uid) {
  if (!configured) return null;

  const snapshot = await getDoc(doc(db, "users", uid));
  return snapshot.exists() ? snapshot.data() : null;
}

export async function saveCloudSave(uid, state) {
  if (!configured) return;

  await setDoc(
    doc(db, "users", uid),
    {
      gems: state.gems,
      unlockedCards: state.unlockedCards,
      speedSetting: state.speedSetting,
      totalExp: Number(state.totalExp ?? 0),
      updatedAt: serverTimestamp()
    },
    { merge: true }
  );
}

export async function createTransferCode(state) {
  if (!configured) {
    throw new Error("Firebase設定がまだ完了していません。");
  }

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const expiresAt = Date.now() + 10 * 60 * 1000;

  await setDoc(doc(db, "transferCodes", code), {
    gems: state.gems,
    unlockedCards: state.unlockedCards,
    speedSetting: state.speedSetting,
    totalExp: Number(state.totalExp ?? 0),
    createdAtMs: Date.now(),
    expiresAtMs: expiresAt
  });

  return code;
}

export async function consumeTransferCode(code) {
  if (!configured) {
    throw new Error("Firebase設定がまだ完了していません。");
  }

  const ref = doc(db, "transferCodes", code);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error("コードが見つかりません。");
  }

  const data = snapshot.data();

  if (!data.expiresAtMs || Date.now() > data.expiresAtMs) {
    await deleteDoc(ref);
    throw new Error("コードの有効期限が切れています。");
  }

  await deleteDoc(ref);

  return {
    gems: Number(data.gems ?? 0),
    unlockedCards: Array.isArray(data.unlockedCards)
      ? data.unlockedCards
      : [],
    speedSetting: data.speedSetting ?? "normal",
    totalExp: Number(data.totalExp ?? 0)
  };
}
