/* =========================================================
   分数表示
========================================================= */

function renderFractionValue(
  value,
  className = "is-small"
) {

  const text =
    String(value ?? "");


  const match =
    text.match(
      /^(-?\d+)\/(\d+)$/
    );


  /*
    分数以外はそのまま表示
  */
  if (!match) {

    return `
      <span>
        ${text}
      </span>
    `;
  }


  const numerator =
    match[1];


  const denominator =
    match[2];


  return `
    <span class="fraction-display ${className}">

      <span class="fraction-display-numerator">
        ${numerator}
      </span>

      <span class="fraction-display-line"></span>

      <span class="fraction-display-denominator">
        ${denominator}
      </span>

    </span>
  `;
}

function polarToCartesian(
  cx,
  cy,
  radius,
  angle
) {
  const radians =
    (angle - 90) *
    Math.PI /
    180;

  return {
    x:
      cx +
      radius *
      Math.cos(radians),

    y:
      cy +
      radius *
      Math.sin(radians)
  };
}


function sectorPath(
  cx,
  cy,
  radius,
  startAngle,
  endAngle
) {
  const start =
    polarToCartesian(
      cx,
      cy,
      radius,
      endAngle
    );

  const end =
    polarToCartesian(
      cx,
      cy,
      radius,
      startAngle
    );

  const largeArc =
    endAngle -
    startAngle >
    180
      ? 1
      : 0;

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius}`,
    `0 ${largeArc} 0`,
    `${end.x} ${end.y}`,
    "Z"
  ].join(" ");
}


/* =========================================================
   ピザ
========================================================= */

function renderPizza(
  parts,
  taken,
  showWhole = false
) {
  const safeParts =
    Math.max(
      2,
      Number(parts) || 2
    );

  const safeTaken =
    showWhole
      ? safeParts
      : Math.min(
          safeParts,
          Math.max(
            1,
            Number(taken) || 1
          )
        );

  const cx = 70;
  const cy = 70;
  const radius = 56;

  const angleSize =
    360 /
    safeParts;

  const sectors = [];

  for (
    let index = 0;
    index < safeParts;
    index++
  ) {
    const selected =
      index < safeTaken;

    sectors.push(`
      <path
        d="${
          sectorPath(
            cx,
            cy,
            radius,
            angleSize * index,
            angleSize * (index + 1)
          )
        }"

        fill="${
          selected
            ? "#fbbf24"
            : "rgba(255,255,255,0.05)"
        }"

        stroke="${
          selected
            ? "#b45309"
            : "#cbd5e1"
        }"

        stroke-width="3"

        stroke-dasharray="${
          selected
            ? "none"
            : "7 6"
        }"
      />
    `);
  }

  return `
    <svg
      class="fraction-food-svg"
      viewBox="0 0 140 140"
      aria-hidden="true"
    >
      ${sectors.join("")}

      <circle
        cx="${cx}"
        cy="${cy}"
        r="${radius}"
        fill="none"
        stroke="#92400e"
        stroke-width="4"
      />

      ${
        showWhole
          ? `
            <circle
              cx="49"
              cy="43"
              r="5"
              fill="#ef4444"
            />

            <circle
              cx="88"
              cy="49"
              r="5"
              fill="#ef4444"
            />

            <circle
              cx="72"
              cy="88"
              r="5"
              fill="#ef4444"
            />
          `
          : ""
      }
    </svg>
  `;
}


/* =========================================================
   ケーキ
========================================================= */

function renderCake(
  parts,
  taken,
  showWhole = false
) {
  const safeParts =
    Math.max(
      2,
      Number(parts) || 2
    );

  const safeTaken =
    showWhole
      ? safeParts
      : Math.min(
          safeParts,
          Math.max(
            1,
            Number(taken) || 1
          )
        );

  const cx = 70;
  const cy = 70;
  const radius = 56;

  const angleSize =
    360 /
    safeParts;

  const sectors = [];

  for (
    let index = 0;
    index < safeParts;
    index++
  ) {
    const selected =
      index < safeTaken;

    const middleAngle =
      angleSize *
      (index + 0.5);

    const strawberry =
      polarToCartesian(
        cx,
        cy,
        34,
        middleAngle
      );

    sectors.push(`
      <path
        d="${
          sectorPath(
            cx,
            cy,
            radius,
            angleSize * index,
            angleSize * (index + 1)
          )
        }"

        fill="${
          selected
            ? "#f9a8d4"
            : "rgba(255,255,255,0.05)"
        }"

        stroke="${
          selected
            ? "#db2777"
            : "#cbd5e1"
        }"

        stroke-width="3"

        stroke-dasharray="${
          selected
            ? "none"
            : "7 6"
        }"
      />

      ${
        selected
          ? `
            <text
              x="${strawberry.x}"
              y="${strawberry.y + 6}"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="15"
              style="
                text-shadow: none;
                filter: none;
              "
            >
              🍓
            </text>
          `
          : ""
      }
    `);
  }

  return `
    <svg
      class="fraction-food-svg"
      viewBox="0 0 140 140"
      aria-hidden="true"
    >
      ${sectors.join("")}

      <circle
        cx="${cx}"
        cy="${cy}"
        r="${radius}"
        fill="none"
        stroke="#f472b6"
        stroke-width="4"
      />

      <circle
        cx="${cx}"
        cy="${cy}"
        r="7"
        fill="#fff7ed"
        stroke="#db2777"
        stroke-width="2"
      />
    </svg>
  `;
}


/* =========================================================
   チョコ
========================================================= */

function renderChocolate(
  parts,
  taken,
  showWhole = false
) {
  const safeParts =
    Math.max(
      2,
      Number(parts) || 2
    );

  const safeTaken =
    showWhole
      ? safeParts
      : Math.min(
          safeParts,
          Math.max(
            1,
            Number(taken) || 1
          )
        );

  const cells = [];

  for (
    let index = 0;
    index < safeParts;
    index++
  ) {
    cells.push(`
      <div
        class="
          fraction-choco-cell
          ${
            index < safeTaken
              ? "is-selected"
              : "is-empty"
          }
        "
      ></div>
    `);
  }

  return `
    <div
      class="fraction-chocolate"
      style="
        grid-template-columns:
          repeat(${safeParts}, minmax(0, 1fr));
      "
    >
      ${cells.join("")}
    </div>
  `;
}


function renderFood(
  item,
  parts,
  taken,
  showWhole = false
) {
  if (
    item === "chocolate"
  ) {
    return renderChocolate(
      parts,
      taken,
      showWhole
    );
  }

  if (
    item === "cake"
  ) {
    return renderCake(
      parts,
      taken,
      showWhole
    );
  }

  return renderPizza(
    parts,
    taken,
    showWhole
  );
}


/* =========================================================
   食べ物を分ける
========================================================= */

function renderFoodStory(
  visual
) {
  const item =
    visual.item ??
    "pizza";

  const parts =
    Number(
      visual.parts
    ) || 2;

  const taken =
    Number(
      visual.taken
    ) || 1;

  return `
    <div class="fraction-story">

      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ぜんぶ
        </div>

        ${
          renderFood(
            item,
            parts,
            parts,
            true
          )
        }

      </div>


      <div class="fraction-story-arrow">
        ➜
      </div>


      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ${taken}つぶん
        </div>

        ${
          renderFood(
            item,
            parts,
            taken,
            false
          )
        }

      </div>

    </div>
  `;
}


/* =========================================================
   人数で分ける
========================================================= */

function renderShareStory(
  visual
) {
  const item =
    visual.item ??
    "pizza";

  const parts =
    Number(
      visual.parts
    ) || 2;

  const faces = [
    "👦",
    "👧",
    "🧒",
    "👦",
    "👧"
  ];

  return `
    <div class="fraction-story fraction-share-story">

      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ぜんぶ
        </div>

        ${
          renderFood(
            item,
            parts,
            parts,
            true
          )
        }

      </div>


      <div class="fraction-story-arrow">
        ➜
      </div>


      <div class="fraction-share-people">

        ${Array.from({
          length: parts
        }).map(
          (_, index) => `
            <div class="fraction-share-person">

              <span>
                ${faces[index] ?? "🧒"}
              </span>

              <small>
                1人ぶん
              </small>

            </div>
          `
        ).join("")}

      </div>

    </div>
  `;
}


/* =========================================================
   色ぬり・図問題
========================================================= */

function renderBlocks(
  visual
) {
  const parts =
    Math.max(
      2,
      Number(
        visual.parts
      ) || 2
    );

  const taken =
    Math.min(
      parts,
      Math.max(
        1,
        Number(
          visual.taken
        ) || 1
      )
    );

  return `
    <div
      class="fraction-blocks"
      style="
        grid-template-columns:
          repeat(${parts}, minmax(0, 1fr));
      "
    >

      ${Array.from({
        length: parts
      }).map(
        (_, index) => `
          <div
            class="
              fraction-block
              ${
                index < taken
                  ? "is-filled"
                  : "is-empty"
              }
            "
          ></div>
        `
      ).join("")}

    </div>
  `;
}


/* =========================================================
   文章問題
========================================================= */

function renderWords(
  visual
) {
  const parts =
    Number(
      visual.parts
    ) || 2;

  const taken =
    Number(
      visual.taken
    ) || 1;

  return `
    <div class="fraction-word-visual">

      <div class="fraction-word-number">
        ${parts}
      </div>

      <div class="fraction-word-text">
        こに分けたうち
      </div>

      <div class="fraction-word-number">
        ${taken}
      </div>

      <div class="fraction-word-text">
        こぶん
      </div>

    </div>
  `;
}


function renderVisual(
  visual
) {
  switch (
    visual.mode
  ) {
    case "share":
      return renderShareStory(
        visual
      );

    case "shade":
    case "diagram":
      return renderBlocks(
        visual
      );

    case "words":
      return renderWords(
        visual
      );

    case "food":
    default:
      return renderFoodStory(
        visual
      );
  }
}

/* =========================================================
   renderer
========================================================= */

export default {

  kind:
    "fraction-choice",


  render(question) {

    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];


    const visual =
      question?.visual ?? {};


    return `
      <div
        class="
          visual-question
          fraction-choice-question
        "
      >

        <div
          class="
            visual-prompt
            fraction-choice-prompt
          "
        >
          ${question?.prompt ?? ""}
        </div>


        ${renderVisual(
          visual
        )}


        <div class="fraction-choice-guide">
          ${question?.guide ?? ""}
        </div>


        <div class="fraction-choice-options">

          ${choices.map(
            choice => `
              <div
                class="
                  fraction-choice-option
                  fraction-choice-option-${choice.id.toLowerCase()}
                "
              >

                <span class="fraction-choice-letter">
                  ${choice.id}
                </span>


                <strong class="fraction-choice-value">

                  ${renderFractionValue(
                    choice.label
                  )}

                </strong>

              </div>
            `
          ).join("")}

        </div>

      </div>
    `;
  }
};