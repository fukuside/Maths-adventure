/* =========================================================
   WORLD4 分数 S3
   同じ大きさの分数
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
      class="fraction-equivalent-bar"

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
              fraction-equivalent-cell
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
    <div class="fraction-equivalent-side">

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
    "fraction-equivalent-visual",


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
      ) || 2;


    const rightDenominator =
      Number(
        question?.rightDenominator
      ) || 4;


    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];


    return `
      <div class="fraction-equivalent-layout">


        <div class="fraction-equivalent-prompt">

          ${escapeHtml(
            question?.prompt ??
            "2つの分数の 大きさを くらべよう"
          )}

        </div>


        <div class="fraction-equivalent-compare">


          ${renderFractionSide(
            leftNumerator,
            leftDenominator
          )}


          <div class="fraction-equivalent-center">
            ＝？
          </div>


          ${renderFractionSide(
            rightNumerator,
            rightDenominator
          )}


        </div>


        <div class="fraction-equivalent-guide">

          ${escapeHtml(
            question?.guide ??
            "色のついた大きさを見てみよう。"
          )}

        </div>


        <div class="fraction-equivalent-options">

          ${choices.map(
            choice => `
              <div class="fraction-equivalent-option">

                <span class="fraction-equivalent-letter">
                  ${escapeHtml(choice.id)}
                </span>

                <strong class="fraction-equivalent-value">
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