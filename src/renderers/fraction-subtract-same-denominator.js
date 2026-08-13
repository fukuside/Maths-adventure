/* =========================================================
   WORLD4 分数 S6
   同分母の引き算＋文章題
========================================================= */


/* =========================================================
   分数表示
========================================================= */

function renderFraction(
  numerator,
  denominator,
  answer = false
) {

  return `
    <div
      class="
        fraction-s6-fraction
        ${answer ? "fraction-s6-answer" : ""}
      "
    >

      <div class="fraction-s6-numerator">
        ${answer ? "□" : numerator}
      </div>

      <div class="fraction-s6-line"></div>

      <div class="fraction-s6-denominator">
        ${denominator}
      </div>

    </div>
  `;
}


/* =========================================================
   計算
========================================================= */

function renderCalculation(question) {

  const leftNumerator =
    Number(
      question?.leftNumerator
    ) || 1;


  const rightNumerator =
    Number(
      question?.rightNumerator
    ) || 1;


  const denominator =
    Number(
      question?.denominator
    ) || 4;


  return `
    <div class="fraction-s6-calc">


      <div class="fraction-s6-prompt">
        ${question?.prompt ?? "□ に はいる 数は？"}
      </div>


      <div class="fraction-s6-expression">

        ${renderFraction(
          leftNumerator,
          denominator
        )}


        <div class="fraction-s6-symbol">
          −
        </div>


        ${renderFraction(
          rightNumerator,
          denominator
        )}


        <div class="fraction-s6-symbol">
          ＝
        </div>


        ${renderFraction(
          0,
          denominator,
          true
        )}

      </div>


      <div class="fraction-s6-guide">
        ${question?.guide ?? ""}
      </div>


    </div>
  `;
}


/* =========================================================
   文章題
========================================================= */

function renderWordProblem(question) {

  const icon =
    question?.icon ?? "🍕";


  const text =
    question?.wordText ?? "";


  const leftNumerator =
    Number(
      question?.leftNumerator
    ) || 1;


  const rightNumerator =
    Number(
      question?.rightNumerator
    ) || 1;


  const denominator =
    Number(
      question?.denominator
    ) || 4;


  return `
    <div class="fraction-s6-word-layout">


      <div class="fraction-s6-word-visual">

        <div class="fraction-s6-word-icon">
          ${icon}
        </div>


        <div class="fraction-s6-word-mini-expression">

          ${renderFraction(
            leftNumerator,
            denominator
          )}

          <div class="fraction-s6-symbol">
            −
          </div>

          ${renderFraction(
            rightNumerator,
            denominator
          )}

        </div>

      </div>


      <div class="fraction-s6-word-text-side">

        <div class="fraction-s6-word-text">
          ${text}
        </div>

      </div>


    </div>
  `;
}


/* =========================================================
   Renderer
========================================================= */

export default {

  kind:
    "fraction-subtract-same-denominator",


  render(question) {

    const mode =
      question?.mode ?? "calculation";


    if (
      mode === "word"
    ) {

      return `
        <div class="fraction-s6-layout">

          ${renderWordProblem(
            question
          )}

          <div class="fraction-s6-guide">
            ${question?.guide ?? ""}
          </div>

        </div>
      `;
    }


    return `
      <div class="fraction-s6-layout">

        ${renderCalculation(
          question
        )}

      </div>
    `;
  }
};