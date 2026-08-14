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

export async function loadCloudSave(
  uid,
  playerId
) {

  if (
    !configured ||
    !uid ||
    !playerId
  ) {
    return null;
  }


  const snapshot =
    await getDoc(
      doc(
        db,
        "users",
        uid,
        "players",
        playerId
      )
    );


  return snapshot.exists()
    ? snapshot.data()
    : null;
}

export async function saveCloudSave(
  uid,
  playerId,
  state
) {

  if (
    !configured ||
    !uid ||
    !playerId
  ) {
    return;
  }


  await setDoc(
    doc(
      db,
      "users",
      uid,
      "players",
      playerId
    ),
    {

      /* =====================================
         基本データ
      ===================================== */

      gems:
        Number(
          state?.gems ?? 0
        ),


      unlockedCards:
        Array.isArray(
          state?.unlockedCards
        )
          ? state.unlockedCards
          : [],


      speedSetting:
        state?.speedSetting ??
        "normal",


      totalExp:
        Number(
          state?.totalExp ?? 0
        ),


      /* =====================================
         パートナー
      ===================================== */

      partnerKey:
        state?.partnerKey ??
        null,


      partnerStudy:
        state?.partnerStudy &&
        typeof state.partnerStudy ===
          "object"

          ? state.partnerStudy

          : {},


      /* =====================================
         更新日時
      ===================================== */

      updatedAt:
        serverTimestamp()
    },

    {
      merge: true
    }
  );
}

/* =========================================================
   旧クラウドセーブ読み込み

   旧方式：
   users/{uid}

   新方式：
   users/{uid}/players/{playerId}
========================================================= */

export async function loadLegacyCloudSave(
  uid
) {

  if (
    !configured ||
    !uid
  ) {
    return null;
  }


  const snapshot =
    await getDoc(
      doc(
        db,
        "users",
        uid
      )
    );


  if (!snapshot.exists()) {
    return null;
  }


  const data =
    snapshot.data();


  /*
   * すでに新方式へ移行済みなら
   * 旧データをもう使わない。
   */

  if (
    data.legacyMigratedToPlayerId
  ) {
    return null;
  }


  /*
   * 旧セーブらしいデータが
   * 本当に存在するか確認
   */

  const hasLegacyState =
    data.gems !== undefined ||
    data.unlockedCards !== undefined ||
    data.totalExp !== undefined ||
    data.partnerKey !== undefined ||
    data.partnerStudy !== undefined;


  if (!hasLegacyState) {
    return null;
  }


  return {

    gems:
      Number(
        data.gems ?? 0
      ),


    unlockedCards:
      Array.isArray(
        data.unlockedCards
      )
        ? data.unlockedCards
        : [],


    speedSetting:
      data.speedSetting ??
      "normal",


    totalExp:
      Number(
        data.totalExp ?? 0
      ),


    partnerKey:
      data.partnerKey ??
      null,


    partnerStudy:
      data.partnerStudy &&
      typeof data.partnerStudy ===
        "object"

        ? data.partnerStudy

        : {}
  };
}


/* =========================================================
   旧クラウドセーブ移行済み記録
========================================================= */

export async function markLegacyCloudSaveMigrated(
  uid,
  playerId
) {

  if (
    !configured ||
    !uid ||
    !playerId
  ) {
    return;
  }


  await setDoc(
    doc(
      db,
      "users",
      uid
    ),
    {
      legacyMigratedToPlayerId:
        playerId,

      legacyMigratedAt:
        serverTimestamp()
    },

    {
      merge: true
    }
  );
}

export async function createTransferCode(
  transferData
) {

  if (!configured) {

    throw new Error(
      "Firebase設定がまだ完了していません。"
    );
  }


  const code =
    String(
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );


  const createdAtMs =
    Date.now();


  const expiresAtMs =
    createdAtMs +
    10 * 60 * 1000;


  /*
    =========================================
    新方式 Version 2

    nickname + state を
    まとめて保存する
    =========================================
  */

  if (
    transferData?.version === 2 &&
    transferData?.player?.state
  ) {

    await setDoc(
      doc(
        db,
        "transferCodes",
        code
      ),
      {
        version: 2,

        player: {
          nickname:
            String(
              transferData.player.nickname ??
              "プレイヤー"
            )
              .trim()
              .slice(
                0,
                20
              ),

          state:
            transferData.player.state
        },

        createdAtMs,
        expiresAtMs
      }
    );


    return code;
  }


  /*
    =========================================
    旧方式との互換

    stateだけ渡された場合
    =========================================
  */

  await setDoc(
    doc(
      db,
      "transferCodes",
      code
    ),
    {
      gems:
        Number(
          transferData?.gems ?? 0
        ),

      unlockedCards:
        Array.isArray(
          transferData?.unlockedCards
        )
          ? transferData.unlockedCards
          : [],

      speedSetting:
        transferData?.speedSetting ??
        "normal",

      totalExp:
        Number(
          transferData?.totalExp ?? 0
        ),

      partnerKey:
        transferData?.partnerKey ??
        null,

      partnerStudy:
        transferData?.partnerStudy &&
        typeof transferData.partnerStudy ===
          "object"
          ? transferData.partnerStudy
          : {},

      createdAtMs,
      expiresAtMs
    }
  );


  return code;
}

export async function consumeTransferCode(
  code
) {

  if (!configured) {

    throw new Error(
      "Firebase設定がまだ完了していません。"
    );
  }


  const safeCode =
    String(
      code ?? ""
    )
      .replace(
        /\D/g,
        ""
      )
      .slice(
        0,
        6
      );


  if (
    safeCode.length !== 6
  ) {

    throw new Error(
      "6桁の引っ越しコードを入力してください。"
    );
  }


  const ref =
    doc(
      db,
      "transferCodes",
      safeCode
    );


  const snapshot =
    await getDoc(
      ref
    );


  if (
    !snapshot.exists()
  ) {

    throw new Error(
      "コードが見つかりません。"
    );
  }


  const data =
    snapshot.data();


  /*
    =========================================
    有効期限確認
    =========================================
  */

  if (
    !data.expiresAtMs ||
    Date.now() >
      data.expiresAtMs
  ) {

    await deleteDoc(
      ref
    );


    throw new Error(
      "コードの有効期限が切れています。"
    );
  }


  /*
    =========================================
    新方式 Version 2
    =========================================
  */

  if (
    data.version === 2 &&
    data.player?.state
  ) {

    const result = {
      version: 2,

      player: {
        nickname:
          String(
            data.player.nickname ??
            "プレイヤー"
          )
            .trim()
            .slice(
              0,
              20
            ),

        state:
          data.player.state
      }
    };


    /*
      正常に読み込めたあとで
      コードを削除
    */

    await deleteDoc(
      ref
    );


    return result;
  }


  /*
    =========================================
    旧方式

    過去に発行したコードにも対応
    =========================================
  */

  const result = {

    gems:
      Number(
        data.gems ?? 0
      ),

    unlockedCards:
      Array.isArray(
        data.unlockedCards
      )
        ? data.unlockedCards
        : [],

    speedSetting:
      data.speedSetting ??
      "normal",

    totalExp:
      Number(
        data.totalExp ?? 0
      ),

    partnerKey:
      data.partnerKey ??
      null,

    partnerStudy:
      data.partnerStudy &&
      typeof data.partnerStudy ===
        "object"
        ? data.partnerStudy
        : {}
  };


  await deleteDoc(
    ref
  );


  return result;
}
