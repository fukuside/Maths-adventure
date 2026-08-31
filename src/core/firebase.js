import {
  initializeApp
} from "firebase/app";


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
  serverTimestamp,
  increment,
  arrayUnion
} from "firebase/firestore";


/* =========================================================
   Firebase設定
========================================================= */

/*
  Firebaseコンソールで発行された値に置き換えてください。

  Firebase Web設定自体は秘密鍵ではありませんが、
  Firestore Security Rulesで
  必ずアクセス制限してください。
*/

const firebaseConfig = {

  apiKey:
    "AIzaSyDX1C1kdKW0_xD4WMWmui9ltUnG1WjO9mA",

  authDomain:
    "maths-adventure-f4d17.firebaseapp.com",

  projectId:
    "maths-adventure-f4d17",

  storageBucket:
    "maths-adventure-f4d17.firebasestorage.app",

  messagingSenderId:
    "3583493206",

  appId:
    "1:3583493206:web:a6d2d61e7e8665cf2127f7"
};


/* =========================================================
   Firebase設定済み判定
========================================================= */

const configured =
  !Object.values(
    firebaseConfig
  ).some(
    value =>
      String(
        value
      ).startsWith(
        "ここに"
      )
  );


let auth =
  null;


let db =
  null;


/* =========================================================
   Firebase初期化
========================================================= */

if (
  configured
) {

  const app =
    initializeApp(
      firebaseConfig
    );


  auth =
    getAuth(
      app
    );


  db =
    getFirestore(
      app
    );
}


/* =========================================================
   Firebase設定確認
========================================================= */

export function isFirebaseConfigured() {

  return configured;
}


/* =========================================================
   匿名ユーザー取得

   未ログインなら匿名ログインする
========================================================= */

export async function ensureAnonymousUser() {

  if (
    !configured
  ) {

    return null;
  }


  /*
   * すでにログイン済み
   */

  if (
    auth.currentUser
  ) {

    return auth.currentUser;
  }


  /*
   * 匿名ログイン
   */

  await signInAnonymously(
    auth
  );


  /*
   * Auth状態反映を待つ
   */

  return new Promise(
    (
      resolve,
      reject
    ) => {

      const unsubscribe =
        onAuthStateChanged(

          auth,

          user => {

            unsubscribe();

            resolve(
              user
            );
          },

          error => {

            unsubscribe();

            reject(
              error
            );
          }

        );
    }
  );
}


/* =========================================================
   クラウドセーブ読み込み

   users
     └ uid
        └ players
           └ playerId
========================================================= */

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


/* =========================================================
   クラウドセーブ保存

   users/{uid}/players/{playerId}
========================================================= */

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
   日本時間の日付キー

   例：
   2026-08-27

   learningDailyの
   ドキュメントIDとして使用する
========================================================= */

function getJapanDateKey(
  date = new Date()
) {

  const parts =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone:
          "Asia/Tokyo",

        year:
          "numeric",

        month:
          "2-digit",

        day:
          "2-digit"
      }
    )
      .formatToParts(
        date
      );


  const year =
    parts.find(
      part =>
        part.type ===
        "year"
    )?.value;


  const month =
    parts.find(
      part =>
        part.type ===
        "month"
    )?.value;


  const day =
    parts.find(
      part =>
        part.type ===
        "day"
    )?.value;


  if (
    !year ||
    !month ||
    !day
  ) {

    throw new Error(
      "学習日の取得に失敗しました。"
    );
  }


  return (
    `${year}-${month}-${day}`
  );
}


/* =========================================================
   学習結果を1日単位で保存

   保存先：

   users
     └ {uid}
        └ players
           └ {playerId}
              └ learningDaily
                 └ 2026-08-27


   保存例：

   {
     studySeconds: 1080,
     totalQuestions: 42,
     correctAnswers: 36,

     units: [
       "小数の大きさ",
       "小数の足し算"
     ],

     stages: [
       "w4-decimal-size",
       "w4-decimal-add"
     ],

     updatedAt: Timestamp
   }
========================================================= */

/* =========================================================
   学習結果を1日単位で保存

   保存先：

   users
     └ {uid}
        └ players
           └ {playerId}
              └ learningDaily
                 └ 2026-08-28


   記録内容：

   ・学習時間
   ・挑戦した問題数
   ・最初から正解できた問題数
   ・学習したステージ
   ・ステージごとの実施回数
========================================================= */

export async function recordLearningResult({
  playerId,
  studySeconds = 0,
  totalQuestions = 0,
  firstAttemptCorrectAnswers = 0,
  unitName = "",
  stageId = "",
  stageLabel = ""
} = {}) {


  /* =====================================================
     Firebase未設定
  ===================================================== */

  if (
    !configured
  ) {

    console.warn(
      "Firebase未設定のため、学習記録を保存しませんでした。"
    );

    return false;
  }


  /* =====================================================
     playerId
  ===================================================== */

  const safePlayerId =
    String(
      playerId ?? ""
    )
      .trim();


  if (
    !safePlayerId
  ) {

    console.warn(
      "playerIdがないため、学習記録を保存しませんでした。"
    );

    return false;
  }


  /* =====================================================
     数値を安全な形にする
  ===================================================== */

  const safeStudySeconds =
    Math.max(
      0,
      Math.floor(
        Number(
          studySeconds ?? 0
        )
      )
    );


  const safeTotalQuestions =
    Math.max(
      0,
      Math.floor(
        Number(
          totalQuestions ?? 0
        )
      )
    );


  const safeFirstAttemptCorrectAnswers =
    Math.max(
      0,
      Math.min(
        safeTotalQuestions,

        Math.floor(
          Number(
            firstAttemptCorrectAnswers ?? 0
          )
        )
      )
    );


  /* =====================================================
     文字列
  ===================================================== */

  const safeUnitName =
    String(
      unitName ?? ""
    )
      .trim()
      .slice(
        0,
        150
      );


  const safeStageId =
    String(
      stageId ?? ""
    )
      .trim()
      .slice(
        0,
        150
      );


  const safeStageLabel =
    String(
      stageLabel ??
      unitName ??
      stageId ??
      ""
    )
      .trim()
      .slice(
        0,
        150
      );


  /* =====================================================
     Firebaseユーザー取得
  ===================================================== */

  const user =
    await ensureAnonymousUser();


  if (
    !user?.uid
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }


  const uid =
    user.uid;


  /* =====================================================
     日本時間の日付
  ===================================================== */

  const dateKey =
    getJapanDateKey();


  /* =====================================================
     保存先
  ===================================================== */

  const dailyRef =
    doc(
      db,
      "users",
      uid,
      "players",
      safePlayerId,
      "learningDaily",
      dateKey
    );


  /* =====================================================
     基本データ
  ===================================================== */

  const data = {

    studySeconds:
      increment(
        safeStudySeconds
      ),


    totalQuestions:
      increment(
        safeTotalQuestions
      ),


    firstAttemptCorrectAnswers:
      increment(
        safeFirstAttemptCorrectAnswers
      ),


    updatedAt:
      serverTimestamp()
  };


  /* =====================================================
     学習内容一覧

     arrayUnionなので同じ項目は
     重複しない
  ===================================================== */

  if (
    safeUnitName
  ) {

    data.units =
      arrayUnion(
        safeUnitName
      );
  }


  if (
    safeStageId
  ) {

    data.stages =
      arrayUnion(
        safeStageId
      );


    /*
     * そのステージを今日何回したか
     *
     * 例：
     *
     * stagePlayCounts:
     * {
     *   "w1-subtraction-4": 3
     * }
     */

    data.stagePlayCounts = {

      [safeStageId]:
        increment(
          1
        )
    };


    /*
     * 保護者向け表示名
     *
     * 例：
     *
     * stageLabels:
     * {
     *   "w1-subtraction-4":
     *     "引き算：フラッシュ引き算"
     * }
     */

    data.stageLabels = {

      [safeStageId]:
        safeStageLabel
    };
  }


  /* =====================================================
     Firestore保存
  ===================================================== */

  await setDoc(
    dailyRef,
    data,
    {
      merge: true
    }
  );


  console.log(
    "学習記録を保存しました。",
    {

      dateKey,

      playerId:
        safePlayerId,

      studySeconds:
        safeStudySeconds,

      totalQuestions:
        safeTotalQuestions,

      firstAttemptCorrectAnswers:
        safeFirstAttemptCorrectAnswers,

      unitName:
        safeUnitName,

      stageId:
        safeStageId,

      stageLabel:
        safeStageLabel
    }
  );


  return true;
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


  if (
    !snapshot.exists()
  ) {

    return null;
  }


  const data =
    snapshot.data();


  /*
   * すでに新方式へ移行済みなら
   * 旧データを使わない
   */

  if (
    data.legacyMigratedToPlayerId
  ) {

    return null;
  }


  /*
   * 旧セーブデータが
   * 本当に存在するか確認
   */

  const hasLegacyState =

    data.gems !== undefined ||

    data.unlockedCards !==
      undefined ||

    data.totalExp !==
      undefined ||

    data.partnerKey !==
      undefined ||

    data.partnerStudy !==
      undefined;


  if (
    !hasLegacyState
  ) {

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


/* =========================================================
   引っ越しコード発行
========================================================= */

export async function createTransferCode(
  transferData
) {

  if (
    !configured
  ) {

    throw new Error(
      "Firebase設定がまだ完了していません。"
    );
  }


  /* =====================================================
     6桁コード生成
  ===================================================== */

  const code =
    String(
      Math.floor(
        100000 +
        Math.random() *
        900000
      )
    );


  const createdAtMs =
    Date.now();


  const expiresAtMs =
    createdAtMs +
    10 *
    60 *
    1000;


  /*
    =========================================
    新方式 Version 2

    nickname + state +
    playerIdを保存
    =========================================
  */

  if (
    transferData?.version ===
      2 &&
    transferData?.player?.state
  ) {

    await setDoc(

      doc(
        db,
        "transferCodes",
        code
      ),

      {

        version:
          2,


        player: {

          playerId:
            typeof transferData
              .player
              .playerId ===
              "string"

              ? transferData
                  .player
                  .playerId

              : null,


          nickname:
            String(
              transferData
                .player
                .nickname ??
              "プレイヤー"
            )
              .trim()
              .slice(
                0,
                20
              ),


          state:
            transferData
              .player
              .state

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
          transferData?.gems ??
          0
        ),


      unlockedCards:
        Array.isArray(
          transferData
            ?.unlockedCards
        )

          ? transferData
              .unlockedCards

          : [],


      speedSetting:
        transferData
          ?.speedSetting ??
        "normal",


      totalExp:
        Number(
          transferData
            ?.totalExp ??
          0
        ),


      partnerKey:
        transferData
          ?.partnerKey ??
        null,


      partnerStudy:
        transferData
          ?.partnerStudy &&
        typeof transferData
          .partnerStudy ===
          "object"

          ? transferData
              .partnerStudy

          : {},


      createdAtMs,

      expiresAtMs

    }
  );


  return code;
}


/* =========================================================
   引っ越しコード使用
========================================================= */

export async function consumeTransferCode(
  code
) {

  if (
    !configured
  ) {

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
    safeCode.length !==
    6
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
    data.version ===
      2 &&
    data.player?.state
  ) {

    const result = {

      version:
        2,


      player: {

        playerId:
          typeof data
            .player
            .playerId ===
            "string"

            ? data
                .player
                .playerId

            : null,


        nickname:
          String(
            data
              .player
              .nickname ??
            "プレイヤー"
          )
            .trim()
            .slice(
              0,
              20
            ),


        state:
          data
            .player
            .state

      }

    };


    /*
      正常に読み込めたあと
      引っ越しコード削除
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
/* =========================================================
   保護者向け学習レポート設定
========================================================= */


/* =========================================================
   保護者設定を読み込む

   users/{uid}
     /players/{playerId}
     /parentSettings/config
========================================================= */

export async function loadParentReportSettings(
  playerId
) {

  if (
    !configured ||
    !playerId
  ) {

    return {
      email: "",
      reportMode: "weekly",
      emailVerified: false
    };
  }


  const user =
    await ensureAnonymousUser();


  if (
    !user?.uid
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }


  const ref =
    doc(
      db,
      "users",
      user.uid,
      "players",
      playerId,
      "parentSettings",
      "config"
    );


  const snapshot =
    await getDoc(
      ref
    );


  if (
    !snapshot.exists()
  ) {

    return {
      email: "",
      reportMode: "weekly",
      emailVerified: false
    };
  }


  const data =
    snapshot.data();


  const allowedModes = [
    "after_learning",
    "weekly",
    "off",
    "after_learning_and_weekly"
  ];


  return {

    email:
      typeof data.email ===
      "string"

        ? data.email

        : "",


    reportMode:
      allowedModes.includes(
        data.reportMode
      )

        ? data.reportMode

        : "weekly",


    emailVerified:
      data.emailVerified ===
      true
  };
}


/* =========================================================
   保護者設定を保存
========================================================= */

export async function saveParentReportSettings({
  playerId,
  email,
  reportMode
} = {}) {

  if (
    !configured
  ) {

    throw new Error(
      "Firebase設定が完了していません。"
    );
  }


  const safePlayerId =
    String(
      playerId ?? ""
    )
      .trim();


  if (
    !safePlayerId
  ) {

    throw new Error(
      "プレイヤーが選択されていません。"
    );
  }


  const safeEmail =
    String(
      email ?? ""
    )
      .trim()
      .toLowerCase();


  const allowedModes = [
    "after_learning",
    "weekly",
    "off",
    "after_learning_and_weekly"
  ];


  if (
    !allowedModes.includes(
      reportMode
    )
  ) {

    throw new Error(
      "通知方法が正しくありません。"
    );
  }


  /*
   * 「受け取らない」以外では
   * メールアドレス必須
   */

  if (
    reportMode !==
    "off"
  ) {

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
      !emailPattern.test(
        safeEmail
      )
    ) {

      throw new Error(
        "正しいメールアドレスを入力してください。"
      );
    }
  }


  const user =
    await ensureAnonymousUser();


  if (
    !user?.uid
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }

const ref =
  doc(
    db,
    "users",
    user.uid,
    "players",
    safePlayerId,
    "parentSettings",
    "config"
  );


/* =====================================================
   現在の設定を確認

   同じメールなら
   確認済み状態を維持する
===================================================== */

const currentSnapshot =
  await getDoc(
    ref
  );


const currentData =
  currentSnapshot.exists()
    ? currentSnapshot.data()
    : {};


const currentEmail =
  String(
    currentData.email ?? ""
  )
    .trim()
    .toLowerCase();


const emailChanged =
  currentEmail !==
  safeEmail;


/* =====================================================
   メールが同じなら確認状態を維持

   メールが変更された場合のみ
   未確認へ戻す
===================================================== */

const emailVerified =
  emailChanged
    ? false
    : currentData.emailVerified ===
      true;


await setDoc(
  ref,
  {

    email:
      safeEmail,


    reportMode,


    emailVerified,


    updatedAt:
      serverTimestamp()
  },

  {
    merge: true
  }
);


return {

  email:
    safeEmail,

  reportMode,

  emailVerified
};
}

/* =========================================================
   学習終了後レポート用
   最終学習時刻と送信予定時刻を更新
========================================================= */

export async function updateLearningReportSchedule(
  playerId
) {

  if (
    !configured ||
    !playerId
  ) {
    return false;
  }


  const user =
    await ensureAnonymousUser();


  if (
    !user?.uid
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }


  const ref =
    doc(
      db,
      "users",
      user.uid,
      "players",
      playerId,
      "parentSettings",
      "config"
    );


  /*
   * 現在時刻
   */

  const now =
    new Date();


  /*
   * 15分後
   */

  const dueAt =
    new Date(
      now.getTime() +
      15 * 60 * 1000
    );


  await setDoc(
    ref,
    {

      lastLearningAt:
        now,

      reportDueAt:
        dueAt,

      updatedAt:
        serverTimestamp()
    },

    {
      merge: true
    }
  );


  console.log(
    "学習レポート送信予定を更新しました。",
    {
      lastLearningAt:
        now,

      reportDueAt:
        dueAt
    }
  );


  return true;
}

/* =========================================================
   保護者メールアドレス確認メールを送信
========================================================= */

export async function requestParentEmailVerification({
  playerId,
  email
} = {}) {

  if (
    !configured
  ) {

    throw new Error(
      "Firebase設定が完了していません。"
    );
  }


  const safePlayerId =
    String(
      playerId ?? ""
    )
      .trim();


  const safeEmail =
    String(
      email ?? ""
    )
      .trim()
      .toLowerCase();


  if (
    !safePlayerId
  ) {

    throw new Error(
      "プレイヤーが選択されていません。"
    );
  }


  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (
    !emailPattern.test(
      safeEmail
    )
  ) {

    throw new Error(
      "正しいメールアドレスを入力してください。"
    );
  }


  /* =====================================================
     Firebase匿名ユーザーを取得
  ===================================================== */

  const user =
    await ensureAnonymousUser();


  if (
    !user
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }


  /* =====================================================
     Firebase ID Token取得
  ===================================================== */

  const idToken =
    await user.getIdToken();


  /* =====================================================
     Cloud Function
  ===================================================== */

  const functionUrl =
    "https://asia-northeast1-maths-adventure-f4d17.cloudfunctions.net/requestParentEmailVerification";


  /* =====================================================
     確認メール送信
  ===================================================== */

  const response =
    await fetch(
      functionUrl,
      {
        method:
          "POST",

        headers:
          {
            "Content-Type":
              "application/json",

            "Authorization":
              `Bearer ${idToken}`
          },

        body:
          JSON.stringify(
            {
              playerId:
                safePlayerId,

              email:
                safeEmail
            }
          )
      }
    );


  /* =====================================================
     Functionsからの結果
  ===================================================== */

  let result =
    null;


  try {

    result =
      await response.json();

  } catch (
    error
  ) {

    console.error(
      "確認メールAPIの応答を読み取れませんでした。",
      error
    );
  }


  if (
    !response.ok
  ) {

    throw new Error(
      result?.message ||
      "確認メールを送信できませんでした。"
    );
  }


  console.log(
    "保護者メール確認メール送信結果",
    result
  );


  return result;
}

/* =========================================================
   週次学習レポート
   テスト送信用
========================================================= */

export async function testWeeklyLearningReport(
  playerId
) {

  if (
    !configured
  ) {

    throw new Error(
      "Firebase設定が完了していません。"
    );
  }


  const safePlayerId =
    String(
      playerId ?? ""
    )
      .trim();


  if (
    !safePlayerId
  ) {

    throw new Error(
      "プレイヤーが選択されていません。"
    );
  }


  const user =
    await ensureAnonymousUser();


  if (
    !user
  ) {

    throw new Error(
      "Firebaseユーザーを取得できませんでした。"
    );
  }


  const idToken =
    await user.getIdToken();


  const functionUrl =
    "https://asia-northeast1-maths-adventure-f4d17.cloudfunctions.net/testWeeklyLearningReports";


  const response =
    await fetch(
      functionUrl,
      {
        method:
          "POST",

        headers:
          {
            "Content-Type":
              "application/json",

            "Authorization":
              `Bearer ${idToken}`
          },

        body:
          JSON.stringify(
            {
              playerId:
                safePlayerId
            }
          )
      }
    );


  let result =
    null;


  try {

    result =
      await response.json();

  } catch (
    error
  ) {

    console.error(
      "週次レポートAPIの応答を読み取れませんでした。",
      error
    );
  }


  if (
    !response.ok
  ) {

    throw new Error(
      result?.message ||
      "週次レポートをテスト送信できませんでした。"
    );
  }


  console.log(
    "週次レポート テスト送信結果",
    result
  );


  return result;
}