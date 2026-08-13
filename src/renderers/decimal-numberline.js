export default {
  kind: "decimal-numberline",

  render(question, { escapeHtml }) {

    const startWhole =
      Number(
        question.startWhole ?? 0
      );

    const valueTenths =
      Number(
        question.valueTenths ?? 1
      );

    const startTenths =
      startWhole * 10;

    const endTenths =
      startTenths + 10;


    return `
      <div class="decimal-numberline-layout">

        <div class="decimal-numberline-visual">

          <div class="decimal-numberline-track">

            ${Array.from({
              length: 11
            }).map(
              (_, index) => {

                const currentTenths =
                  startTenths + index;

                const isCurrent =
                  currentTenths ===
                  valueTenths;

                return `
                  <div class="decimal-numberline-point">

                    ${
                      isCurrent
                        ? `
                          <span class="decimal-numberline-dot">
                            ●
                          </span>
                        `
                        : ""
                    }

                    <span class="decimal-numberline-tick"></span>

                    <span class="decimal-numberline-label">
                      ${
                        index === 0
                          ? decimalLabelForLine(
                              startTenths
                            )
                          : index === 5
                            ? decimalLabelForLine(
                                startTenths + 5
                              )
                            : index === 10
                              ? decimalLabelForLine(
                                  endTenths
                                )
                              : ""
                      }
                    </span>

                  </div>
                `;
              }
            ).join("")}

          </div>

        </div>


        <div class="decimal-numberline-text">

          <div class="decimal-numberline-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="decimal-numberline-guide">
            ${escapeHtml(
              question.guide ?? ""
            )}
          </div>

          <div class="decimal-numberline-input-guide">
            数字を入力してね
          </div>

        </div>

      </div>
    `;
  }
};


function decimalLabelForLine(
  tenths
) {

  const value =
    tenths / 10;

  /*
    1.0 は 1、
    2.0 は 2 と表示
  */

  if (
    Number.isInteger(value)
  ) {
    return String(value);
  }

  return value.toFixed(1);
}