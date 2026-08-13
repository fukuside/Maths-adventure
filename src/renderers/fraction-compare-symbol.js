/* =========================================================
   WORLD4 分数 S4
   分数の大小
========================================================= */


/* =========================================================
   分数
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
   分数または整数
========================================================= */

function renderFractionOrWhole(
  numerator,
  denominator
) {

  const safeDenominator =
    Number(
      denominator
    ) || 1;


  /*
    denominator = 1 は
    1との比較問題なので整数表示
  */

  if (
    safeDenominator === 1
  ) {

    return `
      <div class="fraction-whole-number">
        ${numerator}
      </div>
    `;
  }


  return renderFraction(
    numerator,
    safeDenominator
  );
}


/* =========================================================
   Renderer
========================================================= */

export default {

  kind:
    "fraction-compare-symbol",


  render(question, { escapeHtml }) {

    const leftNumerator =
      Number(
        question?.leftNumerator
      ) || 1;


    const leftDenominator =
      Number(
        question?.leftDenominator
      ) || 1;


    const rightNumerator =
      Number(
        question?.rightNumerator
      ) || 1;


    const rightDenominator =
      Number(
        question?.rightDenominator
      ) || 1;


    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [
            {
              id: "A",
              label: "＜"
            },

            {
              id: "B",
              label: "＝"
            },

            {
              id: "C",
              label: "＞"
            }
          ];


    return `
      <div class="fraction-s4-layout">


        <div class="fraction-s4-prompt">

          ${escapeHtml(
            question?.prompt ??
            "□ に はいる きごうは どれ？"
          )}

        </div>


        <div class="fraction-s4-expression">


          <div class="fraction-s4-number">

            ${renderFractionOrWhole(
              leftNumerator,
              leftDenominator
            )}

          </div>


          <div class="fraction-s4-blank">
            □
          </div>


          <div class="fraction-s4-number">

            ${renderFractionOrWhole(
              rightNumerator,
              rightDenominator
            )}

          </div>


        </div>


        <div class="fraction-s4-guide">

          ${escapeHtml(
            question?.guide ??
            ""
          )}

        </div>


        <div class="fraction-s4-options">

          ${choices.map(
            choice => `
              <div class="fraction-s4-option">

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