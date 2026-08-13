export default {

  kind:
    "fraction-add-same-denominator",


  render(question) {

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
      ) || 5;


    return `
      <div class="fraction-s5-layout">


        <div class="fraction-s5-prompt">

          ${
            question?.prompt ??
            "答えの分数を 入れよう"
          }

        </div>


        <div class="fraction-s5-expression">


          <div class="fraction-s5-fraction">

            <div class="fraction-s5-numerator">
              ${leftNumerator}
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              ${denominator}
            </div>

          </div>


          <div class="fraction-s5-symbol">
            ＋
          </div>


          <div class="fraction-s5-fraction">

            <div class="fraction-s5-numerator">
              ${rightNumerator}
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              ${denominator}
            </div>

          </div>


          <div class="fraction-s5-symbol">
            ＝
          </div>


          <div
            class="
              fraction-s5-fraction
              fraction-s5-answer
            "
          >

            <div class="fraction-s5-numerator">
              □
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              □
            </div>

          </div>


        </div>


        <div class="fraction-s5-guide">

          ${
            question?.guide ??
            ""
          }

        </div>


      </div>
    `;
  }
};