export default {

  kind:
    "subtraction_compare",


  render(
    question,
    {
      escapeHtml
    }
  ) {

    const large =
      Number(
        question?.large ?? 0
      );


    const small =
      Number(
        question?.small ?? 0
      );


    const iconA =
      escapeHtml(
        question?.iconA ?? "🍎"
      );


    const iconB =
      escapeHtml(
        question?.iconB ?? "🍪"
      );


    const maxCount =
      Math.max(
        large,
        small
      );


    /* =====================================================
       1個 = 1マス
    ===================================================== */

    function buildRow(
      icon,
      count,
      rowType
    ) {

      return Array.from(
        {
          length:
            maxCount
        },

        (
          _,
          index
        ) => {

          const filled =
            index <
            count;


          const extra =
            rowType ===
              "large"
            &&
            index >=
              small;


          return `
            <div
              class="
                subtraction-compare-cell
                ${
                  filled
                    ? "is-filled"
                    : "is-empty"
                }
                ${
                  extra
                    ? "is-difference"
                    : ""
                }
              "
            >

              ${
                filled
                  ? `<span>${icon}</span>`
                  : ""
              }

            </div>
          `;
        }
      ).join("");
    }


    return `
      <div class="subtraction-layout subtraction-compare-layout">


        <div class="subtraction-compare-visual">


          <div
            class="subtraction-compare-grid"
            style="
              --compare-columns:
              ${maxCount};
            "
          >

            ${buildRow(
              iconA,
              large,
              "large"
            )}


            ${buildRow(
              iconB,
              small,
              "small"
            )}

          </div>


          <div class="subtraction-compare-difference">

            <span>
              ↑
            </span>

            <strong>
              このぶんが ちがう
            </strong>

          </div>


        </div>


        <div class="subtraction-text-side">

          <div class="subtraction-prompt">

            ${
              escapeHtml(
                question?.prompt ?? ""
              )
            }

          </div>


          <div class="subtraction-question-text">

            ${
              escapeHtml(
                question?.question ?? ""
              )
            }

          </div>

        </div>


      </div>
    `;
  }
};