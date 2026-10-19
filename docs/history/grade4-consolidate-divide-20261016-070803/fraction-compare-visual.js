/* =========================================================
   WORLD4 分数 S2
   分数の大きさ
========================================================= */


/* =========================================================
   分数表示
========================================================= */

function renderFraction(
  numerator,
  denominator
) {

  return `
    <div class="fraction-display">

      <div class="fraction-display-numerator">
        ${numerator}
      </div>

      <div class="fraction-display-line"></div>

      <div class="fraction-display-denominator">
        ${denominator}
      </div>

    </div>
  `;
}


/* =========================================================
   分数バー
========================================================= */

function renderFractionBar(
  numerator,
  denominator
) {

  const safeDenominator =
    Math.max(
      2,
      Number(denominator) || 2
    );


  const safeNumerator =
    Math.min(
      safeDenominator,
      Math.max(
        0,
        Number(numerator) || 0
      )
    );


  return `
    <div
      class="fraction-s2-bar"

      style="
        grid-template-columns:
          repeat(${safeDenominator}, minmax(0, 1fr));
      "
    >

      ${Array.from({
        length:
          safeDenominator
      }).map(
        (_, index) => `
          <div
            class="
              fraction-s2-cell
              ${
                index < safeNumerator
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
   左右
========================================================= */

function renderFractionSide(
  numerator,
  denominator
) {

  return `
    <div class="fraction-s2-side">

      ${renderFraction(
        numerator,
        denominator
      )}

      ${renderFractionBar(
        numerator,
        denominator
      )}

    </div>
  `;
}


/* =========================================================
   Renderer
========================================================= */

export default {

  kind:
    "fraction-compare-visual",


  render(question, { escapeHtml }) {

    const leftNumerator =
      Number(
        question?.leftNumerator
      ) || 1;


    const leftDenominator =
      Number(
        question?.leftDenominator
      ) || 2;


    const rightNumerator =
      Number(
        question?.rightNumerator
      ) || 1;


    const rightDenominator =
      Number(
        question?.rightDenominator
      ) || 3;


    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];


    return `
      <div class="fraction-s2-layout">


        <div class="fraction-s2-prompt">

          ${escapeHtml(
            question?.prompt ??
            "どちらの分数が 大きい？"
          )}

        </div>


        <div class="fraction-s2-compare">


          ${renderFractionSide(
            leftNumerator,
            leftDenominator
          )}


          <div class="fraction-s2-vs">
            と
          </div>


          ${renderFractionSide(
            rightNumerator,
            rightDenominator
          )}


        </div>


        <div class="fraction-s2-guide">

          ${escapeHtml(
            question?.guide ??
            ""
          )}

        </div>


        <div class="fraction-s2-options">

          ${choices.map(
            choice => `
              <div class="fraction-s2-option">

                <span>
                  ${escapeHtml(choice.id)}
                </span>

                <strong>
                  ${escapeHtml(choice.label)}
                </strong>

              </div>
            `
          ).join("")}

        </div>


      </div>
    `;
  }
};