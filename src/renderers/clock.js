/* =========================================================
   時計SVG
========================================================= */

function makeClockSvg({
  hour,
  minute,
  showMinuteGuide = false
}) {

  const cx =
    150;

  const cy =
    150;


  const numberRadius =
    showMinuteGuide
      ? 114
      : 112;


  const minuteGuideRadius =
    88;


  const hourAngle =
    (
      hour %
      12
    ) *
    30
    +
    minute *
    0.5;


  const minuteAngle =
    minute *
    6;


  /* =====================================================
     1〜12
  ===================================================== */

  const numbers =
    Array.from(
      {
        length:
          12
      },
      (
        _,
        index
      ) => {

        const number =
          index +
          1;


        const angle =
          (
            number *
            30
            -
            90
          )
          *
          Math.PI
          /
          180;


        const x =
          cx
          +
          Math.cos(
            angle
          )
          *
          numberRadius;


        const y =
          cy
          +
          Math.sin(
            angle
          )
          *
          numberRadius;


        return `
          <text
            x="${x.toFixed(2)}"
            y="${y.toFixed(2)}"

            text-anchor="middle"
            dominant-baseline="middle"

            font-size="20"
            font-weight="800"

            fill="#172033"
          >
            ${number}
          </text>
        `;
      }
    ).join("");


  /* =====================================================
     新S4
     分の読み方ガイド

     1 → 5
     2 → 10
     3 → 15
     ...
     11 → 55
     12 → 0
  ===================================================== */

  const minuteGuide =
    showMinuteGuide

      ? Array.from(
          {
            length:
              12
          },
          (
            _,
            index
          ) => {

            const number =
              index +
              1;


            const minuteValue =
              number ===
                12
                ? 0
                : number *
                  5;


            const angle =
              (
                number *
                30
                -
                90
              )
              *
              Math.PI
              /
              180;


            const x =
              cx
              +
              Math.cos(
                angle
              )
              *
              minuteGuideRadius;


            const y =
              cy
              +
              Math.sin(
                angle
              )
              *
              minuteGuideRadius;


            return `
              <g>

                <circle
                  cx="${x.toFixed(2)}"
                  cy="${y.toFixed(2)}"
                  r="12"

                  fill="#dff4ff"
                  stroke="#38bdf8"
                  stroke-width="2"
                />


                <text
                  x="${x.toFixed(2)}"
                  y="${y.toFixed(2)}"

                  text-anchor="middle"
                  dominant-baseline="middle"

                  font-size="10"
                  font-weight="1000"

                  fill="#075985"
                >
                  ${minuteValue}
                </text>

              </g>
            `;
          }
        ).join("")

      : "";


  /* =====================================================
     目盛り
  ===================================================== */

  const ticks =
    Array.from(
      {
        length:
          60
      },
      (
        _,
        index
      ) => {

        const angle =
          (
            index *
            6
            -
            90
          )
          *
          Math.PI
          /
          180;


        const isHourTick =
          index %
          5 ===
          0;


        const outer =
          136;


        const inner =
          isHourTick
            ? 124
            : 130;


        const x1 =
          cx
          +
          Math.cos(
            angle
          )
          *
          inner;


        const y1 =
          cy
          +
          Math.sin(
            angle
          )
          *
          inner;


        const x2 =
          cx
          +
          Math.cos(
            angle
          )
          *
          outer;


        const y2 =
          cy
          +
          Math.sin(
            angle
          )
          *
          outer;


        return `
          <line
            x1="${x1.toFixed(2)}"
            y1="${y1.toFixed(2)}"

            x2="${x2.toFixed(2)}"
            y2="${y2.toFixed(2)}"

            stroke="#172033"

            stroke-width="${
              isHourTick
                ? 4
                : 2
            }"

            stroke-linecap="round"
          />
        `;
      }
    ).join("");


  return `
    <svg
      class="
        analog-clock-svg
        clock-learning-svg
        ${
          showMinuteGuide
            ? "has-minute-guide"
            : ""
        }
      "

      viewBox="0 0 300 300"

      role="img"

      aria-label="${hour}時${minute}分のアナログ時計"
    >

      <defs>

        <radialGradient
          id="clockFaceGradient"
          cx="50%"
          cy="42%"
          r="62%"
        >

          <stop
            offset="0%"
            stop-color="#fffdf1"
          />

          <stop
            offset="100%"
            stop-color="#f5dfa1"
          />

        </radialGradient>


        <filter
          id="clockShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >

          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            flood-color="#000"
            flood-opacity=".32"
          />

        </filter>

      </defs>


      <circle
        cx="150"
        cy="150"
        r="143"

        fill="#d8b86a"

        filter="url(#clockShadow)"
      />


      <circle
        cx="150"
        cy="150"
        r="132"

        fill="url(#clockFaceGradient)"

        stroke="#fff7d2"

        stroke-width="4"
      />


      ${ticks}

      ${numbers}

      ${minuteGuide}


      <!-- 時針 -->

      <g
        transform="
          rotate(
            ${hourAngle}
            150
            150
          )
        "
      >

        <line
          x1="150"
          y1="158"

          x2="150"
          y2="88"

          stroke="#172033"

          stroke-width="11"

          stroke-linecap="round"
        />

      </g>


      <!-- 分針 -->

      <g
        transform="
          rotate(
            ${minuteAngle}
            150
            150
          )
        "
      >

        <line
          x1="150"
          y1="162"

          x2="150"
          y2="54"

          stroke="#2563eb"

          stroke-width="7"

          stroke-linecap="round"
        />

      </g>


      <circle
        cx="150"
        cy="150"
        r="11"

        fill="#f7c948"

        stroke="#172033"

        stroke-width="5"
      />

    </svg>
  `;
}


/* =========================================================
   朝 / 夜
========================================================= */

function makePeriodBadge(
  period
) {

  if (
    period ===
    "morning"
  ) {

    return `
      <div
        class="
          clock-period-scene
          morning
        "
      >

        <span class="clock-period-icon">
          ☀️
        </span>

        <strong>
          あさ
        </strong>

      </div>
    `;
  }


  if (
    period ===
    "night"
  ) {

    return `
      <div
        class="
          clock-period-scene
          night
        "
      >

        <span class="clock-period-icon">
          🌙
        </span>

        <strong>
          よる
        </strong>

      </div>
    `;
  }


  return "";
}


/* =========================================================
   モードタイトル
========================================================= */

function modeTitle(
  question
) {

  if (
    question.mode ===
    "24h"
  ) {

    return "あさと よるの 24じかんひょうき";
  }


  if (
    question.mode ===
    "minute-read"
  ) {

    return "ふんの よみかた";
  }


  if (
    question.mode ===
    "elapsed"
  ) {

    return question.direction ===
      "before"
        ? "じかんを もどそう"
        : "じかんを すすめよう";
  }


  return "とけいを よもう";
}


/* =========================================================
   RENDERER
========================================================= */

export default {

  kind:
    "clock",


  render(
    question,
    {
      escapeHtml
    }
  ) {

    const hour =
      Number(
        question.hour ??
        12
      );


    const minute =
      Number(
        question.minute ??
        0
      );


    const periodBadge =
      makePeriodBadge(
        question.period
      );


    const showMinuteGuide =
      question.showMinuteGuide ===
        true
      ||
      question.mode ===
        "minute-read";


    const clockSvg =
      makeClockSvg({
        hour,
        minute,
        showMinuteGuide
      });


    const prompt =
      escapeHtml(
        question.prompt ??
        "この とけいは、なんじ なんぷん？"
      )
        .replace(
          /\n/g,
          "<br>"
        );


    return `
      <div
        class="
          visual-question
          clock-question
          clock-learning-question
          clock-mode-${escapeHtml(
            question.mode ??
            "read"
          )}
          clock-direction-${escapeHtml(
            question.direction ??
            "none"
          )}
        "
      >

        <div class="clock-learning-layout">


          <!-- =========================================
               問題文
          ========================================== -->

          <div class="clock-learning-info">

            ${periodBadge}


            <div class="clock-mode-title">

              ${
                escapeHtml(
                  modeTitle(
                    question
                  )
                )
              }

            </div>


            <div
              class="
                visual-prompt
                clock-learning-prompt
              "
            >
              ${prompt}
            </div>


            ${
              question.guide

                ? `
                  <div class="clock-learning-guide">

                    💡
                    ${escapeHtml(
                      question.guide
                    )}

                  </div>
                `

                : ""
            }

          </div>


          <!-- =========================================
               時計
          ========================================== -->

          <div class="clock-learning-clock">

            ${clockSvg}


            ${
              question.mode ===
                "elapsed"

                ? `
                  <small
                    class="
                      clock-current-time-label
                    "
                  >
                    ${
                      question.direction ===
                        "before"

                        ? "いまの じこくから もどそう"

                        : "いまの じこくから すすめよう"
                    }
                  </small>
                `

                : ""
            }


            ${
              showMinuteGuide

                ? `
                  <div class="clock-minute-reading-tip">

                    <strong>
                      ながい はり
                    </strong>

                    <span>
                      1 → 5ふん
                      ・
                      2 → 10ふん
                      ・
                      3 → 15ふん
                    </span>

                  </div>
                `

                : ""
            }

          </div>


        </div>

      </div>
    `;
  }
};