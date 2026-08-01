function makeClockSvg({
  hour,
  minute
}) {
  const cx = 150;
  const cy = 150;

  const numberRadius = 112;

  const hourAngle =
    (hour % 12) * 30 +
    minute * 0.5;

  const minuteAngle =
    minute * 6;


  const numbers =
    Array.from(
      { length: 12 },
      (_, index) => {
        const number =
          index + 1;

        const angle =
          (
            number * 30 -
            90
          ) *
          Math.PI /
          180;

        const x =
          cx +
          Math.cos(angle) *
          numberRadius;

        const y =
          cy +
          Math.sin(angle) *
          numberRadius;

        return `
          <text
            x="${x.toFixed(2)}"
            y="${y.toFixed(2)}"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="20"
            font-weight="700"
            fill="#172033"
            style="
              text-shadow: none;
              filter: none;
              paint-order: normal;
            "
          >
            ${number}
          </text>
        `;
      }
    ).join("");


  const ticks =
    Array.from(
      { length: 60 },
      (_, index) => {
        const angle =
          (
            index * 6 -
            90
          ) *
          Math.PI /
          180;

        const isHourTick =
          index % 5 === 0;

        const outer = 136;

        const inner =
          isHourTick
            ? 124
            : 130;

        const x1 =
          cx +
          Math.cos(angle) *
          inner;

        const y1 =
          cy +
          Math.sin(angle) *
          inner;

        const x2 =
          cx +
          Math.cos(angle) *
          outer;

        const y2 =
          cy +
          Math.sin(angle) *
          outer;

        return `
          <line
            x1="${x1.toFixed(2)}"
            y1="${y1.toFixed(2)}"
            x2="${x2.toFixed(2)}"
            y2="${y2.toFixed(2)}"
            stroke="#172033"
            stroke-width="${isHourTick ? 4 : 2}"
            stroke-linecap="round"
          />
        `;
      }
    ).join("");


  return `
    <svg
      class="analog-clock-svg clock-learning-svg"
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


      <g
        transform="rotate(${hourAngle} 150 150)"
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


      <g
        transform="rotate(${minuteAngle} 150 150)"
      >
        <line
          x1="150"
          y1="162"
          x2="150"
          y2="54"
          stroke="#243b5a"
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


function makePeriodBadge(
  period
) {
  if (
    period === "morning"
  ) {
    return `
      <div class="clock-period-scene morning">
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
    period === "night"
  ) {
    return `
      <div class="clock-period-scene night">
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

function modeTitle(question) {
  if (question.mode === "24h") {
    return "あさと よるの 24じかんひょうき";
  }

  if (question.mode === "elapsed") {
    return "じかんを すすめよう";
  }

  return "とけいを よもう";
}

export default {
  kind: "clock",

  render(
    question,
    {
      escapeHtml
    }
  ) {
    const hour =
      Number(
        question.hour ?? 12
      );

    const minute =
      Number(
        question.minute ?? 0
      );

    const periodBadge =
      makePeriodBadge(
        question.period
      );

    const clockSvg =
      makeClockSvg({
        hour,
        minute
      });

    return `
      <div
        class="
          visual-question
          clock-question
          clock-learning-question
          clock-mode-${escapeHtml(
            question.mode ?? "read"
          )}
        "
      >

        <div class="clock-learning-layout">

          <div class="clock-learning-info">

  ${periodBadge}

  <div
    class="
      visual-prompt
      clock-learning-prompt
    "
  >
    ${
  escapeHtml(
    question.prompt ??
    "この とけいは、なんじ なんぷん？"
  ).replace(/\n/g, "<br>")
}

  </div>

</div>

          <div class="clock-learning-clock">
            ${clockSvg}

            ${
              question.mode === "elapsed"
                ? `
                  <small class="clock-current-time-label">
                    いまの じこく
                  </small>
                `
                : ""
            }
          </div>

        </div>

      </div>
    `;
  }
};