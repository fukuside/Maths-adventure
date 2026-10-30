const crypto = require("crypto");

const {
  onSchedule
} = require("firebase-functions/v2/scheduler");

const {
  onRequest
} = require("firebase-functions/v2/https");

const {
  defineSecret
} = require("firebase-functions/params");

const {
  logger
} = require("firebase-functions");

const {
  initializeApp
} = require("firebase-admin/app");

const {
  getAuth
} = require("firebase-admin/auth");

const {
  getFirestore,
  Timestamp,
  FieldValue
} = require("firebase-admin/firestore");


/* =========================================================
   Firebase Admin 初期化
========================================================= */

initializeApp();

const db =
  getFirestore();


/* =========================================================
   Secret
========================================================= */

const BREVO_API_KEY =
  defineSecret(
    "BREVO_API_KEY"
  );


/* =========================================================
   設定

   ↓↓↓ ここだけ自分のBrevo Verifiedメールへ変更する ↓↓↓
========================================================= */

const BREVO_SENDER_EMAIL =
  "takada7889@gmail.com";


const BREVO_SENDER_NAME =
  "Maths-Adventure";


const VERIFY_PARENT_EMAIL_URL =
  "https://asia-northeast1-maths-adventure-f4d17.cloudfunctions.net/verifyParentEmail";


const APP_URL =
  "https://maths-adventure-psi.vercel.app/";


/* =========================================================
   共通処理
========================================================= */

function normalizeEmail(
  email
) {

  return String(
    email || ""
  )
    .trim()
    .toLowerCase();
}


function isValidEmail(
  email
) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(
      email
    );
}


function createRandomToken() {

  return crypto
    .randomBytes(
      32
    )
    .toString(
      "hex"
    );
}


function hashToken(
  token
) {

  return crypto
    .createHash(
      "sha256"
    )
    .update(
      token
    )
    .digest(
      "hex"
    );
}


function escapeHtml(
  value
) {

  return String(
    value ?? ""
  )
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );
}


/* =========================================================
   Brevo メール送信
========================================================= */

async function sendBrevoEmail({
  to,
  subject,
  htmlContent
}) {

  const apiKey =
    BREVO_API_KEY.value();


  if (
    !apiKey
  ) {

    throw new Error(
      "BREVO_API_KEY が取得できません。"
    );
  }


  if (
    BREVO_SENDER_EMAIL ===
    "YOUR_VERIFIED_SENDER_EMAIL"
  ) {

    throw new Error(
      "BREVO_SENDER_EMAIL が未設定です。"
    );
  }


  const response =
    await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method:
          "POST",

        headers:
          {
            "accept":
              "application/json",

            "api-key":
              apiKey,

            "content-type":
              "application/json"
          },

        body:
          JSON.stringify(
            {
              sender:
                {
                  name:
                    BREVO_SENDER_NAME,

                  email:
                    BREVO_SENDER_EMAIL
                },

              to:
                [
                  {
                    email:
                      to
                  }
                ],

              subject,

              htmlContent
            }
          )
      }
    );


  if (
    !response.ok
  ) {

    const errorText =
      await response.text();


    throw new Error(
      `Brevo送信エラー ${response.status}: ${errorText}`
    );
  }


  const result =
    await response.json();


  return result;
}


/* =========================================================
   JSTの日付キー

   例：
   2026-08-29
========================================================= */

function getJstDateKey(
  date
) {

  const formatter =
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
    );


  return formatter.format(
    date
  );
}


/* =========================================================
   学習秒数
========================================================= */

function formatStudyTime(
  totalSeconds
) {

  const seconds =
    Number(
      totalSeconds || 0
    );


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remainSeconds =
    seconds % 60;


  if (
    minutes <= 0
  ) {

    return `${remainSeconds}秒`;
  }


  if (
    remainSeconds <= 0
  ) {

    return `${minutes}分`;
  }


  return (
    `${minutes}分${remainSeconds}秒`
  );
}


/* =========================================================
   正答率
========================================================= */

function calculateCorrectRate(
  correctAnswers,
  totalQuestions
) {

  const total =
    Number(
      totalQuestions || 0
    );


  if (
    total <= 0
  ) {

    return 0;
  }


  return Math.round(
    Number(
      correctAnswers || 0
    ) /
      total *
      100
  );
}


/* =========================================================
   学習レポートデータを作る
========================================================= */

function buildLearningReportData(
  learningData
) {

  const totalQuestions =
    Number(
      learningData
        .totalQuestions || 0
    );


  const correctAnswers =
    Number(
      learningData
        .firstAttemptCorrectAnswers || 0
    );


  const correctRate =
    calculateCorrectRate(
      correctAnswers,
      totalQuestions
    );


  const studyTime =
    formatStudyTime(
      learningData
        .studySeconds || 0
    );


  const units =
    Array.isArray(
      learningData.units
    )
      ? learningData.units
      : [];


  const stages =
    Array.isArray(
      learningData.stages
    )
      ? learningData.stages
      : [];


  const stageLabels =
    learningData.stageLabels ||
    {};


  const stagePlayCounts =
    learningData.stagePlayCounts ||
    {};


  const stageItems =
    stages.map(
      (stageId) => {

        return {
          id:
            stageId,

          label:
            stageLabels[
              stageId
            ] || stageId,

          playCount:
            Number(
              stagePlayCounts[
                stageId
              ] || 0
            )
        };
      }
    );


  return {
    totalQuestions,
    correctAnswers,
    correctRate,
    studyTime,
    units,
    stageItems
  };
}


/* =========================================================
   学習レポートHTML
========================================================= */

function buildLearningReportHtml(
  report,
  dateKey
) {

  const unitHtml =
    report.units.length > 0
      ? report.units
          .map(
            (unit) =>
              `<li>${escapeHtml(unit)}</li>`
          )
          .join("")
      : "<li>記録なし</li>";


  const stageHtml =
    report.stageItems.length > 0
      ? report.stageItems
          .map(
            (stage) => {

              const countText =
                stage.playCount > 0
                  ? `（${stage.playCount}回）`
                  : "";


              return (
                `<li>` +
                `${escapeHtml(stage.label)}` +
                `${escapeHtml(countText)}` +
                `</li>`
              );
            }
          )
          .join("")
      : "<li>記録なし</li>";


  return `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f7fb;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color:#263238;
">

  <div style="
    max-width:600px;
    margin:0 auto;
    padding:24px 16px;
  ">

    <div style="
      background:#ffffff;
      border-radius:18px;
      padding:28px;
      box-shadow:0 4px 18px rgba(0,0,0,0.06);
    ">

      <h1 style="
        margin:0 0 8px;
        font-size:24px;
      ">
        Maths-Adventure
      </h1>


      <p style="
        margin:0 0 6px;
        color:#607d8b;
        font-size:18px;
        font-weight:bold;
      ">
        今日の学習レポート
      </p>


      <p style="
        margin:0 0 24px;
        color:#78909c;
      ">
        ${escapeHtml(dateKey)}
      </p>


      <div style="
        background:#eef6ff;
        border-radius:14px;
        padding:18px;
        margin-bottom:24px;
      ">

        <p style="
          margin:0;
          font-size:17px;
          font-weight:bold;
          line-height:1.7;
        ">
          今日の学習、おつかれさまでした！
        </p>

        <p style="
          margin:8px 0 0;
          line-height:1.7;
          color:#546e7a;
        ">
          Maths-Adventureでの
          今日の学習内容をお知らせします。
        </p>

      </div>


      <h2 style="
        font-size:18px;
        margin-top:0;
      ">
        今日の学習
      </h2>


      <div style="
        background:#f7f9fc;
        border-radius:14px;
        padding:18px;
        margin-bottom:24px;
      ">

        <p style="margin:8px 0;">
          <strong>⏱ 学習時間：</strong>
          ${escapeHtml(report.studyTime)}
        </p>

        <p style="margin:8px 0;">
          <strong>📝 挑戦した問題：</strong>
          ${report.totalQuestions}問
        </p>

        <p style="margin:8px 0;">
          <strong>⭐ 一回で正解：</strong>
          ${report.correctAnswers}問
          /
          ${report.totalQuestions}問
        </p>

        <p style="margin:8px 0;">
          <strong>🎯 正答率：</strong>
          ${report.correctRate}%
        </p>

      </div>


      <h2 style="
        font-size:18px;
        margin-top:0;
      ">
        取り組んだ単元
      </h2>

      <ul style="
        line-height:1.8;
        padding-left:24px;
      ">
        ${unitHtml}
      </ul>


      <h2 style="
        font-size:18px;
        margin-top:24px;
      ">
        取り組んだステージ
      </h2>

      <ul style="
        line-height:1.8;
        padding-left:24px;
      ">
        ${stageHtml}
      </ul>


      <div style="
        background:#fff8e1;
        border-radius:14px;
        padding:18px;
        margin-top:28px;
      ">

        <p style="
          margin:0;
          line-height:1.8;
        ">
          今日もMaths-Adventureでの学習を
          がんばりました。
          <br>
          お子さまの頑張りを、
          ぜひほめてあげてください。
        </p>

      </div>


      <p style="
        margin-top:28px;
        color:#78909c;
        font-size:13px;
        line-height:1.7;
      ">
        このメールはMaths-Adventureの
        保護者向け学習レポート設定に基づいて
        自動送信されています。
      </p>

    </div>

  </div>

</body>
</html>
`;
}


/* =========================================================
   Firebase ID Token確認
========================================================= */

async function getAuthenticatedUid(
  req
) {

  const authorization =
    req.get(
      "Authorization"
    ) || "";


  if (
    !authorization
      .startsWith(
        "Bearer "
      )
  ) {

    return null;
  }


  const idToken =
    authorization
      .substring(
        7
      )
      .trim();


  if (
    !idToken
  ) {

    return null;
  }


  try {

    const decodedToken =
      await getAuth()
        .verifyIdToken(
          idToken
        );


    return decodedToken.uid;

  } catch (
    error
  ) {

    logger.warn(
      "Firebase ID Token確認失敗",
      {
        message:
          error.message
      }
    );


    return null;
  }
}


/* =========================================================
   保護者メール確認メール送信API

   POST

   body:
   {
     playerId,
     email
   }

   Firebase ID Token必須
========================================================= */

exports.requestParentEmailVerification =
  onRequest(
    {
      region:
        "asia-northeast1",

      cors:
        true,

      secrets:
        [
          BREVO_API_KEY
        ]
    },

    async (
      req,
      res
    ) => {

      if (
        req.method !==
        "POST"
      ) {

        res
          .status(
            405
          )
          .json(
            {
              ok:
                false,

              message:
                "POSTで送信してください。"
            }
          );

        return;
      }


      const uid =
        await getAuthenticatedUid(
          req
        );


      if (
        !uid
      ) {

        res
          .status(
            401
          )
          .json(
            {
              ok:
                false,

              message:
                "認証情報を確認できません。"
            }
          );

        return;
      }


      const playerId =
        String(
          req.body
            ?.playerId || ""
        )
          .trim();


      const email =
        normalizeEmail(
          req.body
            ?.email
        );


      if (
        !playerId
      ) {

        res
          .status(
            400
          )
          .json(
            {
              ok:
                false,

              message:
                "playerIdがありません。"
            }
          );

        return;
      }


      if (
        !isValidEmail(
          email
        )
      ) {

        res
          .status(
            400
          )
          .json(
            {
              ok:
                false,

              message:
                "メールアドレスを確認してください。"
            }
          );

        return;
      }


      const settingsRef =
        db
          .collection(
            "users"
          )
          .doc(
            uid
          )
          .collection(
            "players"
          )
          .doc(
            playerId
          )
          .collection(
            "parentSettings"
          )
          .doc(
            "config"
          );


      const settingsDoc =
        await settingsRef
          .get();


      if (
        !settingsDoc.exists
      ) {

        res
          .status(
            404
          )
          .json(
            {
              ok:
                false,

              message:
                "保護者設定が見つかりません。"
            }
          );

        return;
      }


      const settingsData =
        settingsDoc.data();


      const savedEmail =
        normalizeEmail(
          settingsData.email
        );


      if (
        !savedEmail ||
        savedEmail !== email
      ) {

        res
          .status(
            400
          )
          .json(
            {
              ok:
                false,

              message:
                "保存されている保護者メールアドレスと一致しません。先に設定を保存してください。"
            }
          );

        return;
      }


      if (
        settingsData.emailVerified ===
        true
      ) {

        res
          .status(
            200
          )
          .json(
            {
              ok:
                true,

              alreadyVerified:
                true,

              message:
                "このメールアドレスは確認済みです。"
            }
          );

        return;
      }


      /* =====================================================
         短時間の連続送信防止
      ===================================================== */

      const lastSentAt =
        settingsData
          .verificationEmailSentAt;


      if (
        lastSentAt &&
        typeof lastSentAt.toMillis ===
          "function"
      ) {

        const elapsedMs =
          Date.now() -
          lastSentAt.toMillis();


        if (
          elapsedMs <
          60 * 1000
        ) {

          res
            .status(
              429
            )
            .json(
              {
                ok:
                  false,

                message:
                  "確認メールは1分ほど待ってから再送してください。"
              }
            );

          return;
        }
      }


      const token =
        createRandomToken();


      const tokenHash =
        hashToken(
          token
        );


      const now =
        Timestamp.now();


      const expiresAt =
        Timestamp.fromMillis(
          Date.now() +
          30 * 60 * 1000
        );


      /* =====================================================
         前の確認トークンがあれば削除
      ===================================================== */

      const oldTokenHash =
        settingsData
          .verificationTokenHash;


      if (
        oldTokenHash
      ) {

        await db
          .collection(
            "parentEmailVerifications"
          )
          .doc(
            oldTokenHash
          )
          .delete()
          .catch(
            () => {}
          );
      }


      /* =====================================================
         確認トークン保存
      ===================================================== */

      const tokenRef =
        db
          .collection(
            "parentEmailVerifications"
          )
          .doc(
            tokenHash
          );


      await tokenRef.set(
        {
          uid,

          playerId,

          email,

          createdAt:
            now,

          expiresAt
        }
      );


      await settingsRef.update(
        {
          emailVerified:
            false,

          verificationTokenHash:
            tokenHash,

          verificationExpiresAt:
            expiresAt,

          verificationEmailSentAt:
            now
        }
      );


      const verifyUrl =
        `${VERIFY_PARENT_EMAIL_URL}` +
        `?token=${encodeURIComponent(token)}`;


      const htmlContent =
        `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f7fb;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color:#263238;
">

  <div style="
    max-width:600px;
    margin:0 auto;
    padding:24px 16px;
  ">

    <div style="
      background:#ffffff;
      border-radius:18px;
      padding:28px;
      text-align:center;
    ">

      <h1 style="
        margin-top:0;
        font-size:24px;
      ">
        Maths-Adventure
      </h1>

      <h2 style="
        font-size:20px;
      ">
        保護者メールアドレスの確認
      </h2>

      <p style="
        line-height:1.8;
      ">
        学習レポートを受け取るために、
        下のボタンを押して
        メールアドレスを確認してください。
      </p>

      <p style="
        margin:30px 0;
      ">

        <a
          href="${escapeHtml(verifyUrl)}"
          style="
            display:inline-block;
            background:#4f67ff;
            color:#ffffff;
            text-decoration:none;
            padding:14px 28px;
            border-radius:12px;
            font-weight:bold;
          "
        >
          メールアドレスを確認
        </a>

      </p>

      <p style="
        color:#78909c;
        font-size:13px;
        line-height:1.7;
      ">
        このリンクの有効期限は30分です。<br>
        心当たりがない場合は、
        このメールを無視してください。
      </p>

    </div>

  </div>

</body>
</html>
`;


      try {

        const sendResult =
          await sendBrevoEmail(
            {
              to:
                email,

              subject:
                "[Maths-Adventure] 保護者メールアドレスの確認",

              htmlContent
            }
          );


        logger.info(
          "保護者メール確認メール送信成功",
          {
            uid,

            playerId,

            messageId:
              sendResult.messageId ||
              null
          }
        );


        res
          .status(
            200
          )
          .json(
            {
              ok:
                true,

              message:
                "確認メールを送信しました。"
            }
          );

      } catch (
        error
      ) {

        logger.error(
          "保護者メール確認メール送信失敗",
          {
            uid,

            playerId,

            errorMessage:
            error.message
          }
        );


        await tokenRef
          .delete()
          .catch(
            () => {}
          );


        await settingsRef
          .update(
            {
              verificationTokenHash:
                FieldValue.delete(),

              verificationExpiresAt:
                FieldValue.delete()
            }
          )
          .catch(
            () => {}
          );


        res
  .status(
    500
  )
  .json(
    {
      ok:
        false,

      message:
  "確認メールを送信できませんでした。"
    }
  );
      }
    }
  );

/* =========================================================
   保護者メール確認リンク

   GET
   → 確認画面を表示するだけ

   POST
   → 本当にメールアドレスを確認する
========================================================= */

exports.verifyParentEmail =
  onRequest(
    {
      region:
        "asia-northeast1",

      cors:
        true
    },

    async (
      req,
      res
    ) => {

      /* =====================================================
         GET

         メールサービスなどがリンクを
         自動チェックしても認証は完了させない
      ===================================================== */

      if (
        req.method ===
        "GET"
      ) {

        const token =
          String(
            req.query
              ?.token || ""
          )
            .trim();


        if (
          !token
        ) {

          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "確認リンクが正しくありません。"
              )
            );

          return;
        }


        const tokenHash =
          hashToken(
            token
          );


        const tokenRef =
          db
            .collection(
              "parentEmailVerifications"
            )
            .doc(
              tokenHash
            );


        const tokenDoc =
          await tokenRef
            .get();


        if (
          !tokenDoc.exists
        ) {

          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "この確認リンクは無効、またはすでに使用されています。"
              )
            );

          return;
        }


        const tokenData =
          tokenDoc.data();


        if (
          !tokenData.expiresAt ||
          tokenData.expiresAt.toMillis() <
            Date.now()
        ) {

          await tokenRef
            .delete()
            .catch(
              () => {}
            );


          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "確認リンクの有効期限が切れています。アプリから確認メールを再送してください。"
              )
            );

          return;
        }


        res
          .status(
            200
          )
          .send(
            buildVerificationConfirmPage(
              token
            )
          );

        return;
      }


      /* =====================================================
         POST

         ユーザーが確認画面のボタンを
         実際に押したときだけ認証する
      ===================================================== */

      if (
        req.method ===
        "POST"
      ) {

        const token =
          String(
            req.body
              ?.token || ""
          )
            .trim();


        if (
          !token
        ) {

          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "確認情報が正しくありません。"
              )
            );

          return;
        }


        const tokenHash =
          hashToken(
            token
          );


        const tokenRef =
          db
            .collection(
              "parentEmailVerifications"
            )
            .doc(
              tokenHash
            );


        const tokenDoc =
          await tokenRef
            .get();


        if (
          !tokenDoc.exists
        ) {

          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "この確認リンクは無効、またはすでに使用されています。"
              )
            );

          return;
        }


        const tokenData =
          tokenDoc.data();


        if (
          !tokenData.expiresAt ||
          tokenData.expiresAt.toMillis() <
            Date.now()
        ) {

          await tokenRef
            .delete()
            .catch(
              () => {}
            );


          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "確認リンクの有効期限が切れています。アプリから確認メールを再送してください。"
              )
            );

          return;
        }


        const uid =
          tokenData.uid;


        const playerId =
          tokenData.playerId;


        const email =
          normalizeEmail(
            tokenData.email
          );


        if (
          !uid ||
          !playerId ||
          !email
        ) {

          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "確認情報が正しくありません。"
              )
            );

          return;
        }


        const settingsRef =
          db
            .collection(
              "users"
            )
            .doc(
              uid
            )
            .collection(
              "players"
            )
            .doc(
              playerId
            )
            .collection(
              "parentSettings"
            )
            .doc(
              "config"
            );


        const settingsDoc =
          await settingsRef
            .get();


        if (
          !settingsDoc.exists
        ) {

          res
            .status(
              404
            )
            .send(
              buildVerificationResultPage(
                false,
                "保護者設定が見つかりません。"
              )
            );

          return;
        }


        const settingsData =
          settingsDoc.data();


        const currentEmail =
          normalizeEmail(
            settingsData.email
          );


        /* ===================================================
           メールアドレスが途中で変更されていないか
        =================================================== */

        if (
          currentEmail !==
          email
        ) {

          await tokenRef
            .delete()
            .catch(
              () => {}
            );


          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "メールアドレスが変更されています。アプリから確認メールをもう一度送信してください。"
              )
            );

          return;
        }


        /* ===================================================
           現在の確認トークンか
        =================================================== */

        if (
          settingsData
            .verificationTokenHash !==
          tokenHash
        ) {

          await tokenRef
            .delete()
            .catch(
              () => {}
            );


          res
            .status(
              400
            )
            .send(
              buildVerificationResultPage(
                false,
                "この確認リンクは無効です。"
              )
            );

          return;
        }


        /* ===================================================
           確認完了
        =================================================== */

        await settingsRef.update(
          {
            emailVerified:
              true,

            emailVerifiedAt:
              Timestamp.now(),

            verificationTokenHash:
              FieldValue.delete(),

            verificationExpiresAt:
              FieldValue.delete(),

            verificationEmailSentAt:
              FieldValue.delete()
          }
        );


        await tokenRef
          .delete();


        logger.info(
          "保護者メールアドレス確認完了",
          {
            uid,

            playerId
          }
        );


        res
          .status(
            200
          )
          .send(
            buildVerificationResultPage(
              true,
              "メールアドレスの確認が完了しました。これから学習レポートを受け取れます。"
            )
          );

        return;
      }


      /* =====================================================
         GET / POST 以外
      ===================================================== */

      res
        .status(
          405
        )
        .send(
          "Method Not Allowed"
        );
    }
  );


/* =========================================================
   メールアドレス確認前ページ

   メール内URLを開いただけでは
   emailVerifiedを変更しない
========================================================= */

function buildVerificationConfirmPage(
  token
) {

  return `
<!doctype html>
<html lang="ja">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>
    Maths-Adventure
  </title>

</head>

<body style="
  margin:0;
  background:#f5f7fb;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color:#263238;
">

  <div style="
    max-width:560px;
    margin:60px auto;
    padding:20px;
  ">

    <div style="
      background:#ffffff;
      border-radius:20px;
      padding:32px;
      text-align:center;
      box-shadow:0 5px 20px rgba(0,0,0,0.06);
    ">

      <h1 style="
        margin-top:0;
      ">
        Maths-Adventure
      </h1>

      <h2>
        保護者メールアドレスの確認
      </h2>

      <p style="
        line-height:1.8;
        margin-bottom:28px;
      ">
        このメールアドレスを
        学習レポートの送信先として
        確認します。
      </p>


      <form
        method="POST"
        action="${escapeHtml(VERIFY_PARENT_EMAIL_URL)}"
      >

        <input
          type="hidden"
          name="token"
          value="${escapeHtml(token)}"
        >


        <button
          type="submit"
          style="
            border:0;
            cursor:pointer;
            background:#4f67ff;
            color:#ffffff;
            padding:14px 28px;
            border-radius:12px;
            font-size:16px;
            font-weight:bold;
          "
        >
          メールアドレスを確認する
        </button>

      </form>


      <p style="
        margin-top:24px;
        color:#78909c;
        font-size:13px;
        line-height:1.7;
      ">
        このボタンを押したあと、
        学習レポートの送信が有効になります。
      </p>

    </div>

  </div>

</body>
</html>
`;
}

/* =========================================================
   メール確認結果ページ
========================================================= */

function buildVerificationResultPage(
  success,
  message
) {

  const title =
    success
      ? "確認完了"
      : "確認できませんでした";


  return `
<!doctype html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>
    Maths-Adventure
  </title>
</head>

<body style="
  margin:0;
  background:#f5f7fb;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color:#263238;
">

  <div style="
    max-width:560px;
    margin:60px auto;
    padding:20px;
  ">

    <div style="
      background:#ffffff;
      border-radius:20px;
      padding:32px;
      text-align:center;
      box-shadow:0 5px 20px rgba(0,0,0,0.06);
    ">

      <h1>
        Maths-Adventure
      </h1>

      <h2>
        ${escapeHtml(title)}
      </h2>

      <p style="
        line-height:1.8;
      ">
        ${escapeHtml(message)}
      </p>

      <a
        href="${escapeHtml(APP_URL)}"
        style="
          display:inline-block;
          margin-top:20px;
          padding:12px 24px;
          border-radius:12px;
          background:#4f67ff;
          color:#ffffff;
          text-decoration:none;
          font-weight:bold;
        "
      >
        Maths-Adventureへ戻る
      </a>

    </div>

  </div>

</body>
</html>
`;
}


/* =========================================================
   処理ロック解除
========================================================= */

async function releaseReportLock(
  settingsRef
) {

  await settingsRef
    .update(
      {
        reportProcessingUntil:
          FieldValue.delete(),

        reportProcessingDueAt:
          FieldValue.delete()
      }
    )
    .catch(
      () => {}
    );
}


/* =========================================================
   学習終了後レポート

   5分ごとに確認
========================================================= */

exports.checkLearningReports =
  onSchedule(
    {
      schedule:
        "every 5 minutes",

      timeZone:
        "Asia/Tokyo",

      region:
        "asia-northeast1",

      secrets:
        [
          BREVO_API_KEY
        ]
    },

    async () => {

      const now =
        Timestamp.now();


      logger.info(
        "Maths-Adventure 学習レポートチェック開始",
        {
          now:
            now
              .toDate()
              .toISOString()
        }
      );


      const snapshot =
        await db
          .collectionGroup(
            "parentSettings"
          )
          .where(
            "reportDueAt",
            "<=",
            now
          )
          .get();


      let targetCount =
        0;


      let sentCount =
        0;


      for (
        const settingsDoc
        of snapshot.docs
      ) {

        const settingsRef =
          settingsDoc.ref;


        /* ===================================================
           トランザクションで送信対象を確保

           同じメールを複数Functionが
           同時送信しないためのロック
        =================================================== */

        let claimed =
          null;


        try {

          claimed =
            await db.runTransaction(
              async (
                transaction
              ) => {

                const latestDoc =
                  await transaction.get(
                    settingsRef
                  );


                if (
                  !latestDoc.exists
                ) {

                  return null;
                }


                const data =
                  latestDoc.data();


                const reportMode =
                  data.reportMode ||
                  "off";


                const shouldSend =
                  reportMode ===
                    "after_learning" ||
                  reportMode ===
                    "after_learning_and_weekly";


                if (
                  !shouldSend
                ) {

                  return null;
                }


                if (
                  data.emailVerified !==
                  true
                ) {

                  return null;
                }


                const email =
                  normalizeEmail(
                    data.email
                  );


                if (
                  !isValidEmail(
                    email
                  )
                ) {

                  return null;
                }


                const dueAt =
                  data.reportDueAt;


                if (
                  !dueAt ||
                  dueAt.toMillis() >
                    now.toMillis()
                ) {

                  return null;
                }


                const processingUntil =
                  data.reportProcessingUntil;


                if (
                  processingUntil &&
                  processingUntil.toMillis() >
                    Date.now()
                ) {

                  return null;
                }


                const lockUntil =
                  Timestamp.fromMillis(
                    Date.now() +
                    10 * 60 * 1000
                  );


                transaction.update(
                  settingsRef,
                  {
                    reportProcessingUntil:
                      lockUntil,

                    reportProcessingDueAt:
                      dueAt
                  }
                );


                return {
                  email,

                  reportMode,

                  dueAt,

                  lastLearningAt:
                    data.lastLearningAt
                };
              }
            );

        } catch (
          error
        ) {

          logger.error(
            "学習レポートロック取得失敗",
            {
              path:
                settingsRef.path,

              message:
                error.message
            }
          );


          continue;
        }


        if (
          !claimed
        ) {

          continue;
        }


        targetCount += 1;


        const playerRef =
          settingsRef
            .parent
            .parent;


        if (
          !playerRef
        ) {

          await releaseReportLock(
            settingsRef
          );

          continue;
        }


        const userRef =
          playerRef
            .parent
            .parent;


        if (
          !userRef
        ) {

          await releaseReportLock(
            settingsRef
          );

          continue;
        }


        if (
          !claimed.lastLearningAt
        ) {

          logger.warn(
            "lastLearningAt がないためスキップ",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id
            }
          );


          await releaseReportLock(
            settingsRef
          );


          continue;
        }


        /* ===================================================
           ロック取得後に学習が再開されていないか確認
        =================================================== */

        const recheckDoc =
          await settingsRef
            .get();


        const recheckData =
          recheckDoc.data() ||
          {};


        const currentDueAt =
          recheckData.reportDueAt;


        if (
          !currentDueAt ||
          currentDueAt.toMillis() !==
            claimed.dueAt.toMillis() ||
          currentDueAt.toMillis() >
            Date.now()
        ) {

          logger.info(
            "学習再開または期限変更のため送信延期",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id
            }
          );


          await releaseReportLock(
            settingsRef
          );


          continue;
        }


        /* ===================================================
           learningDaily
        =================================================== */

        const dateKey =
          getJstDateKey(
            claimed
              .lastLearningAt
              .toDate()
          );


        const learningDoc =
          await playerRef
            .collection(
              "learningDaily"
            )
            .doc(
              dateKey
            )
            .get();


        if (
          !learningDoc.exists
        ) {

          logger.warn(
            "learningDaily が見つかりません",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              dateKey
            }
          );


          await releaseReportLock(
            settingsRef
          );


          continue;
        }


        const learningData =
          learningDoc.data();


        const report =
          buildLearningReportData(
            learningData
          );


        const htmlContent =
          buildLearningReportHtml(
            report,
            dateKey
          );


        /* ===================================================
           Brevo 実送信
        =================================================== */

        try {

          const sendResult =
            await sendBrevoEmail(
              {
                to:
                  claimed.email,

                subject:
                `[Maths-Adventure] 今日の学習レポート ${dateKey}`,

                htmlContent
              }
            );


          sentCount += 1;


          logger.info(
            "学習レポート送信成功",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              dateKey,

              messageId:
                sendResult.messageId ||
                null
            }
          );


          /* =================================================
             送信成功後

             学習再開でreportDueAtが変更されていた場合は
             新しい期限を消さない
          ================================================= */

          await db.runTransaction(
            async (
              transaction
            ) => {

              const latestDoc =
                await transaction.get(
                  settingsRef
                );


              if (
                !latestDoc.exists
              ) {

                return;
              }


              const latest =
                latestDoc.data();


              const latestDueAt =
                latest.reportDueAt;


              const updateData =
                {
                  lastReportSentAt:
                    Timestamp.now(),

                  lastReportSentForLearningAt:
                    claimed.lastLearningAt,

                  reportProcessingUntil:
                    FieldValue.delete(),

                  reportProcessingDueAt:
                    FieldValue.delete()
                };


              if (
                latestDueAt &&
                latestDueAt.toMillis() ===
                  claimed.dueAt.toMillis()
              ) {

                updateData.reportDueAt =
                  FieldValue.delete();
              }


              transaction.update(
                settingsRef,
                updateData
              );
            }
          );

        } catch (
          error
        ) {

          logger.error(
            "学習レポート送信失敗",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              message:
                error.message
            }
          );


          await releaseReportLock(
            settingsRef
          );
        }
      }


      logger.info(
        "学習レポートチェック結果",
        {
          queryCount:
            snapshot.size,

          targetCount,

          sentCount
        }
      );


      logger.info(
        "Maths-Adventure 学習レポートチェック完了"
      );


      return null;
    }
  );

  /* =========================================================
   週次学習レポート

   毎週日曜日 20:00 JST

   対象：
   ・weekly
   ・after_learning_and_weekly

   集計期間：
   月曜日 ～ 日曜日
========================================================= */


/* =========================================================
   JSTの日付文字列から
   UTC基準の日付オブジェクトを作る

   日付計算専用なので時刻は使用しない
========================================================= */

function createDateFromDateKey(
  dateKey
) {

  const parts =
    String(
      dateKey || ""
    )
      .split(
        "-"
      )
      .map(
        Number
      );


  if (
    parts.length !== 3 ||
    !parts[0] ||
    !parts[1] ||
    !parts[2]
  ) {

    return null;
  }


  return new Date(
    Date.UTC(
      parts[0],
      parts[1] - 1,
      parts[2]
    )
  );
}


/* =========================================================
   日付を YYYY-MM-DD にする
========================================================= */

function formatDateKeyFromUtcDate(
  date
) {

  const year =
    date
      .getUTCFullYear();


  const month =
    String(
      date
        .getUTCMonth() + 1
    )
      .padStart(
        2,
        "0"
      );


  const day =
    String(
      date
        .getUTCDate()
    )
      .padStart(
        2,
        "0"
      );


  return (
    `${year}-${month}-${day}`
  );
}


/* =========================================================
   日付を指定日数ずらす
========================================================= */

function addDaysToDateKey(
  dateKey,
  days
) {

  const date =
    createDateFromDateKey(
      dateKey
    );


  if (
    !date
  ) {

    return "";
  }


  date.setUTCDate(
    date.getUTCDate() +
    Number(
      days || 0
    )
  );


  return formatDateKeyFromUtcDate(
    date
  );
}


/* =========================================================
   週次レポートの7日間を取得

   このFunctionは日曜日に動くため、

   今日      = 日曜日
   6日前     = 月曜日
========================================================= */

function getWeeklyDateKeys(
  currentDate = new Date()
) {

  const sundayKey =
    getJstDateKey(
      currentDate
    );


  const mondayKey =
    addDaysToDateKey(
      sundayKey,
      -6
    );


  const dateKeys =
    [];


  for (
    let i = 0;
    i < 7;
    i += 1
  ) {

    dateKeys.push(
      addDaysToDateKey(
        mondayKey,
        i
      )
    );
  }


  return {
    mondayKey,
    sundayKey,
    dateKeys
  };
}


/* =========================================================
   週次データ集計
========================================================= */

function buildWeeklyReportData(
  dailyItems
) {

  let studySeconds =
    0;


  let totalQuestions =
    0;


  let correctAnswers =
    0;


  let studyDays =
    0;


  const unitSet =
    new Set();


  const stageMap =
    new Map();


  for (
    const item
    of dailyItems
  ) {

    const data =
      item.data ||
      {};


    const dayStudySeconds =
      Math.max(
        0,
        Number(
          data.studySeconds || 0
        )
      );


    const dayTotalQuestions =
      Math.max(
        0,
        Number(
          data.totalQuestions || 0
        )
      );


    const dayCorrectAnswers =
      Math.max(
        0,
        Number(
          data.firstAttemptCorrectAnswers || 0
        )
      );


    studySeconds +=
      dayStudySeconds;


    totalQuestions +=
      dayTotalQuestions;


    correctAnswers +=
      dayCorrectAnswers;


    /*
     * 学習した日として数える条件
     */

    if (
      dayStudySeconds > 0 ||
      dayTotalQuestions > 0
    ) {

      studyDays += 1;
    }


    /* =====================================================
       単元
    ===================================================== */

    const units =
      Array.isArray(
        data.units
      )
        ? data.units
        : [];


    for (
      const unit
      of units
    ) {

      const safeUnit =
        String(
          unit || ""
        )
          .trim();


      if (
        safeUnit
      ) {

        unitSet.add(
          safeUnit
        );
      }
    }


    /* =====================================================
       ステージ
    ===================================================== */

    const stages =
      Array.isArray(
        data.stages
      )
        ? data.stages
        : [];


    const stageLabels =
      data.stageLabels ||
      {};


    const stagePlayCounts =
      data.stagePlayCounts ||
      {};


    for (
      const stageId
      of stages
    ) {

      const safeStageId =
        String(
          stageId || ""
        )
          .trim();


      if (
        !safeStageId
      ) {

        continue;
      }


      const label =
        String(
          stageLabels[
            safeStageId
          ] ||
          safeStageId
        );


      const playCount =
        Math.max(
          0,
          Number(
            stagePlayCounts[
              safeStageId
            ] || 0
          )
        );


      const existing =
        stageMap.get(
          safeStageId
        );


      if (
        existing
      ) {

        existing.playCount +=
          playCount;


        /*
         * ID表示だったものに
         * 後からラベルが見つかった場合
         */

        if (
          existing.label ===
            safeStageId &&
          label !==
            safeStageId
        ) {

          existing.label =
            label;
        }

      } else {

        stageMap.set(
          safeStageId,
          {
            id:
              safeStageId,

            label,

            playCount
          }
        );
      }
    }
  }


  return {

    studySeconds,

    studyTime:
      formatStudyTime(
        studySeconds
      ),

    totalQuestions,

    correctAnswers,

    correctRate:
      calculateCorrectRate(
        correctAnswers,
        totalQuestions
      ),

    studyDays,

    units:
      Array.from(
        unitSet
      ),

    stageItems:
      Array.from(
        stageMap.values()
      )
  };
}


/* =========================================================
   週次レポートHTML
========================================================= */

function buildWeeklyReportHtml(
  report,
  mondayKey,
  sundayKey
) {

  const unitHtml =
    report.units.length > 0

      ? report.units
          .map(
            (unit) =>
              `<li>${escapeHtml(unit)}</li>`
          )
          .join("")

      : "<li>記録なし</li>";


  const stageHtml =
    report.stageItems.length > 0

      ? report.stageItems
          .map(
            (stage) => {

              const countText =
                stage.playCount > 0

                  ? `（${stage.playCount}回）`

                  : "";


              return (
                `<li>` +
                `${escapeHtml(stage.label)}` +
                `${escapeHtml(countText)}` +
                `</li>`
              );
            }
          )
          .join("")

      : "<li>記録なし</li>";


  return `
<!doctype html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
</head>

<body style="
  margin:0;
  padding:0;
  background:#f5f7fb;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color:#263238;
">

  <div style="
    max-width:600px;
    margin:0 auto;
    padding:24px 16px;
  ">

    <div style="
      background:#ffffff;
      border-radius:18px;
      padding:28px;
      box-shadow:0 4px 18px rgba(0,0,0,0.06);
    ">

      <h1 style="
        margin:0 0 8px;
        font-size:24px;
      ">
        Maths-Adventure
      </h1>


      <p style="
        margin:0 0 6px;
        color:#607d8b;
        font-size:18px;
        font-weight:bold;
      ">
        1週間の学習レポート
      </p>


      <p style="
        margin:0 0 24px;
        color:#78909c;
      ">
        ${escapeHtml(mondayKey)}
        ～
        ${escapeHtml(sundayKey)}
      </p>


      <div style="
        background:#f7f9fc;
        border-radius:14px;
        padding:18px;
        margin-bottom:24px;
      ">

        <p style="margin:6px 0;">
          <strong>学習した日：</strong>
          ${report.studyDays}日
        </p>


        <p style="margin:6px 0;">
          <strong>学習時間：</strong>
          ${escapeHtml(report.studyTime)}
        </p>


        <p style="margin:6px 0;">
          <strong>取り組んだ問題：</strong>
          ${report.totalQuestions}問
        </p>


        <p style="margin:6px 0;">
          <strong>最初の回答で正解：</strong>
          ${report.correctAnswers}問
        </p>


        <p style="margin:6px 0;">
          <strong>正答率：</strong>
          ${report.correctRate}%
        </p>

      </div>


      <h2 style="
        font-size:18px;
        margin-top:0;
      ">
        今週取り組んだ単元
      </h2>


      <ul style="
        line-height:1.8;
        padding-left:24px;
      ">
        ${unitHtml}
      </ul>


      <h2 style="
        font-size:18px;
        margin-top:24px;
      ">
        今週取り組んだステージ
      </h2>


      <ul style="
        line-height:1.8;
        padding-left:24px;
      ">
        ${stageHtml}
      </ul>


      <p style="
        margin-top:28px;
        color:#78909c;
        font-size:13px;
        line-height:1.7;
      ">
        このメールはMaths-Adventureの
        保護者向け学習レポート設定に基づいて
        自動送信されています。
      </p>

    </div>

  </div>

</body>
</html>
`;
}


/* =========================================================
   週次レポート送信

   毎週日曜日 20:00 JST
========================================================= */

exports.sendWeeklyLearningReports =
  onSchedule(
    {
      schedule:
        "0 20 * * 0",

      timeZone:
        "Asia/Tokyo",

      region:
        "asia-northeast1",

      secrets:
        [
          BREVO_API_KEY
        ]
    },

    async () => {

      const now =
        new Date();


      const {
        mondayKey,
        sundayKey,
        dateKeys
      } =
        getWeeklyDateKeys(
          now
        );


      /*
       * 同じ週の二重送信防止用キー
       *
       * 日曜日の日付を
       * その週のIDとして使用
       */

      const weekKey =
        sundayKey;


      logger.info(
        "Maths-Adventure 週次レポート開始",
        {
          mondayKey,
          sundayKey,
          weekKey
        }
      );


      /* =====================================================
         parentSettingsを取得

         reportModeは後で判定する
      ===================================================== */

      const snapshot =
        await db
          .collectionGroup(
            "parentSettings"
          )
          .get();


      let targetCount =
        0;


      let sentCount =
        0;


      let noLearningCount =
        0;


      for (
        const settingsDoc
        of snapshot.docs
      ) {

        const settingsRef =
          settingsDoc.ref;


        const settingsData =
          settingsDoc.data() ||
          {};


        /* ===================================================
           通知方法
        =================================================== */

        const reportMode =
          settingsData.reportMode ||
          "off";


        const shouldSendWeekly =
          reportMode ===
            "weekly" ||
          reportMode ===
            "after_learning_and_weekly";


        if (
          !shouldSendWeekly
        ) {

          continue;
        }


        /* ===================================================
           メール確認済みのみ
        =================================================== */

        if (
          settingsData.emailVerified !==
          true
        ) {

          continue;
        }


        const email =
          normalizeEmail(
            settingsData.email
          );


        if (
          !isValidEmail(
            email
          )
        ) {

          continue;
        }


        /* ===================================================
           同じ週をすでに送っていたらスキップ
        =================================================== */

        if (
          settingsData
            .lastWeeklyReportWeekKey ===
          weekKey
        ) {

          continue;
        }


        const playerRef =
          settingsRef
            .parent
            .parent;


        if (
          !playerRef
        ) {

          continue;
        }


        const userRef =
          playerRef
            .parent
            .parent;


        if (
          !userRef
        ) {

          continue;
        }


        targetCount += 1;


        /* ===================================================
           月～日のlearningDailyを取得
        =================================================== */

        const dailyItems =
          [];


        for (
          const dateKey
          of dateKeys
        ) {

          try {

            const learningDoc =
              await playerRef
                .collection(
                  "learningDaily"
                )
                .doc(
                  dateKey
                )
                .get();


            if (
              learningDoc.exists
            ) {

              dailyItems.push(
                {
                  dateKey,

                  data:
                    learningDoc.data()
                }
              );
            }

          } catch (
            error
          ) {

            logger.error(
              "週次learningDaily取得失敗",
              {
                uid:
                  userRef.id,

                playerId:
                  playerRef.id,

                dateKey,

                message:
                  error.message
              }
            );
          }
        }


        /* ===================================================
           7日分集計
        =================================================== */

        const report =
          buildWeeklyReportData(
            dailyItems
          );


        /* ===================================================
           学習がない週は送らない
        =================================================== */

        if (
          report.studyDays <= 0 ||
          (
            report.studySeconds <= 0 &&
            report.totalQuestions <= 0
          )
        ) {

          noLearningCount +=
            1;


          logger.info(
            "週次レポート：学習記録なしのためスキップ",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              weekKey
            }
          );


          continue;
        }


        /* ===================================================
           送信前に二重送信防止ロック

           複数実行された場合でも
           同じ週を二重送信しない
        =================================================== */

        let claimed =
          false;


        try {

          claimed =
            await db.runTransaction(
              async (
                transaction
              ) => {

                const latestDoc =
                  await transaction.get(
                    settingsRef
                  );


                if (
                  !latestDoc.exists
                ) {

                  return false;
                }


                const latest =
                  latestDoc.data() ||
                  {};


                const latestMode =
                  latest.reportMode ||
                  "off";


                const latestShouldSend =
                  latestMode ===
                    "weekly" ||
                  latestMode ===
                    "after_learning_and_weekly";


                if (
                  !latestShouldSend
                ) {

                  return false;
                }


                if (
                  latest.emailVerified !==
                  true
                ) {

                  return false;
                }


                if (
                  latest
                    .lastWeeklyReportWeekKey ===
                  weekKey
                ) {

                  return false;
                }


                if (
                  latest
                    .weeklyReportProcessingWeekKey ===
                  weekKey
                ) {

                  const lockUntil =
                    latest
                      .weeklyReportProcessingUntil;


                  if (
                    lockUntil &&
                    typeof lockUntil.toMillis ===
                      "function" &&
                    lockUntil.toMillis() >
                      Date.now()
                  ) {

                    return false;
                  }
                }


                transaction.update(
                  settingsRef,
                  {
                    weeklyReportProcessingWeekKey:
                      weekKey,

                    weeklyReportProcessingUntil:
                      Timestamp.fromMillis(
                        Date.now() +
                        10 * 60 * 1000
                      )
                  }
                );


                return true;
              }
            );

        } catch (
          error
        ) {

          logger.error(
            "週次レポートロック取得失敗",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              message:
                error.message
            }
          );


          continue;
        }


        if (
          !claimed
        ) {

          continue;
        }


        /* ===================================================
           メールHTML
        =================================================== */

        const htmlContent =
          buildWeeklyReportHtml(
            report,
            mondayKey,
            sundayKey
          );


        /* ===================================================
           Brevo送信
        =================================================== */

        try {

          const sendResult =
            await sendBrevoEmail(
              {
                to:
                  email,

                subject:
                  `[Maths-Adventure] 1週間の学習レポート ${mondayKey}～${sundayKey}`,

                htmlContent
              }
            );


          sentCount +=
            1;


          logger.info(
            "週次学習レポート送信成功",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              weekKey,

              messageId:
                sendResult.messageId ||
                null
            }
          );


          /* =================================================
             送信成功

             この週を送信済みにする
          ================================================= */

          await settingsRef
            .update(
              {
                lastWeeklyReportWeekKey:
                  weekKey,

                lastWeeklyReportSentAt:
                  Timestamp.now(),

                weeklyReportProcessingWeekKey:
                  FieldValue.delete(),

                weeklyReportProcessingUntil:
                  FieldValue.delete()
              }
            );


        } catch (
          error
        ) {

          logger.error(
            "週次学習レポート送信失敗",
            {
              uid:
                userRef.id,

              playerId:
                playerRef.id,

              weekKey,

              message:
                error.message
            }
          );


          /* =================================================
             失敗したらロック解除

             次回再実行可能にする
          ================================================= */

          await settingsRef
            .update(
              {
                weeklyReportProcessingWeekKey:
                  FieldValue.delete(),

                weeklyReportProcessingUntil:
                  FieldValue.delete()
              }
            )
            .catch(
              () => {}
            );
        }
      }


      logger.info(
        "Maths-Adventure 週次レポート結果",
        {
          weekKey,

          targetCount,

          sentCount,

          noLearningCount
        }
      );


      logger.info(
        "Maths-Adventure 週次レポート完了"
      );


      return null;
    }
  );