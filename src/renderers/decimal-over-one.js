export default {
  kind: "decimal-over-one",

  render(question, { escapeHtml }) {

    const whole =
      Number(
        question.whole ?? 1
      );

    const tenths =
      Number(
        question.tenths ?? 1
      );

    const mode =
      question.mode ??
      "count-tenths";


    /* =====================================================
       整数部分

       1を10等分したバーを
       全部塗った状態で表示
    ===================================================== */

    const wholeBlocks =
      Array.from(
        { length: whole },
        (_, blockIndex) => `
          <div class="decimal-over-whole-unit">

            <div class="decimal-over-bar">

              ${Array.from({
                length: 10
              }).map(
                () => `
                  <span class="is-filled"></span>
                `
              ).join("")}

            </div>

            <small>
              1
            </small>

          </div>
        `
      ).join("");


    /* =====================================================
       0.x部分
    ===================================================== */

    const decimalBlock =
      `
        <div class="decimal-over-whole-unit">

          <div
            class="
              decimal-over-bar
              decimal-over-part-bar
            "
          >

            ${Array.from({
              length: 10
            }).map(
              (_, index) => `
                <span
                  class="${
                    index < tenths
                      ? "is-filled"
                      : ""
                  }"
                ></span>
              `
            ).join("")}

          </div>

          <small>
            0.1ずつ
          </small>

        </div>
      `;


    /* =====================================================
       問題ごとの補助表示
    ===================================================== */

    let visualLabel = "";


    if (
      mode ===
      "count-tenths"
    ) {

      visualLabel =
        `
          <div class="decimal-over-formula">

            <span>
              ${whole}
            </span>

            <span>
              ＋
            </span>

            <span>
              0.1 × ？
            </span>

          </div>
        `;
    }


    if (
      mode ===
      "make-decimal"
    ) {

      visualLabel =
        `
          <div class="decimal-over-formula">

            <span>
              ${whole}
            </span>

            <span>
              ＋
            </span>

            <span>
              0.${tenths}
            </span>

            <span>
              ＝
            </span>

            <span class="decimal-over-question-mark">
              ？
            </span>

          </div>
        `;
    }


    return `
      <div class="decimal-over-layout">

        <!-- 左：図 -->
        <div class="decimal-over-visual">

          <div class="decimal-over-blocks">

            ${wholeBlocks}

            ${decimalBlock}

          </div>


          ${visualLabel}

        </div>


        <!-- 右：問題 -->
        <div class="decimal-over-text">

          <div class="decimal-over-prompt">

            ${escapeHtml(
              question.prompt ?? ""
            )}

          </div>


          <div class="decimal-over-guide">

            ${escapeHtml(
              question.guide ?? ""
            )}

          </div>


          <div class="decimal-over-input-guide">

            数字を入力してね

          </div>

        </div>

      </div>
    `;
  }
};