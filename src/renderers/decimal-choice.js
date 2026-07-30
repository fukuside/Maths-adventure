function renderTenths(
  filled,
  showLabels = false
) {
  const safeFilled =
    Math.min(
      10,
      Math.max(
        0,
        Number(filled) || 0
      )
    );

  return `
    <div class="decimal-tenths-grid">

      ${Array.from({
        length: 10
      }).map(
        (_, index) => `
          <div
            class="
              decimal-tenth-cell
              ${
                index < safeFilled
                  ? "is-filled"
                  : "is-empty"
              }
            "
          >
            ${
              showLabels
                ? "0.1"
                : ""
            }
          </div>
        `
      ).join("")}

    </div>
  `;
}


function renderCountTenths(
  count
) {
  return `
    <div class="decimal-count-visual">

      <div class="decimal-main-number">
        0.${count}
      </div>

      <div class="decimal-equals">
        ＝
      </div>

      <div class="decimal-tenth-chips">

        ${Array.from({
          length: count
        }).map(
          () => `
            <span>
              0.1
            </span>
          `
        ).join("")}

      </div>

    </div>
  `;
}


function renderOneTenth() {
  return `
    <div class="decimal-one-tenth-visual">

      <div class="decimal-whole-bar">

        ${Array.from({
          length: 10
        }).map(
          (_, index) => `
            <span
              class="${
                index === 0
                  ? "is-highlighted"
                  : ""
              }"
            ></span>
          `
        ).join("")}

      </div>

      <div class="decimal-one-tenth-arrow">
        ↑
      </div>

      <strong>
        10このうちの 1こ
      </strong>

    </div>
  `;
}


function renderNumberLine(
  value
) {
  const safeValue =
    Math.min(
      9,
      Math.max(
        1,
        Number(value) || 1
      )
    );

  return `
    <div class="decimal-number-line">

      <div class="decimal-line-track">

        ${Array.from({
          length: 11
        }).map(
          (_, index) => `
            <span
              class="
                decimal-line-tick
                ${
                  index === safeValue
                    ? "is-current"
                    : ""
                }
              "
            >
              ${
                index === safeValue
                  ? "●"
                  : ""
              }
            </span>
          `
        ).join("")}

      </div>

      <div class="decimal-line-labels">
        <span>0</span>
        <span>1</span>
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
    case "count-tenths":
      return renderCountTenths(
        visual.count
      );

    case "one-tenth":
      return renderOneTenth();

    case "number-line":
      return renderNumberLine(
        visual.value
      );

    case "match-picture":
      return renderTenths(
        visual.filled,
        false
      );

    case "tenths-grid":
    default:
      return renderTenths(
        visual.filled,
        false
      );
  }
}


export default {
  kind: "decimal-choice",

  render(question) {
    const visual =
      question?.visual ?? {};

    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];

    return `
      <div
        class="
          visual-question
          decimal-choice-question
        "
      >

        <div
          class="
            visual-prompt
            decimal-choice-prompt
          "
        >
          ${question?.prompt ?? ""}
        </div>


        <div class="decimal-learning-visual">
          ${renderVisual(visual)}
        </div>


        <div class="decimal-choice-guide">
          ${question?.guide ?? ""}
        </div>


        <div class="decimal-choice-options">

          ${choices.map(
            choice => `
              <div
                class="
                  decimal-choice-option
                  decimal-choice-option-${choice.id.toLowerCase()}
                "
              >

                <span class="decimal-choice-letter">
                  ${choice.id}
                </span>

                <strong class="decimal-choice-value">
                  ${choice.label}
                </strong>

              </div>
            `
          ).join("")}

        </div>

      </div>
    `;
  }
};