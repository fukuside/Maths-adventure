export default {
  kind: "decimal-place-value",

  render(question, { escapeHtml }) {

    const choices =
      Array.isArray(question.choices)
        ? question.choices
        : [];

    const showTutorial =
      question.showTutorial === true;


    return `
      <div
        class="
          decimal-place-stage
          ${
            showTutorial
              ? "is-tutorial"
              : "is-normal"
          }
        "
      >

        ${
          showTutorial
            ? `
              <div class="decimal-place-help">

                <div class="decimal-place-help-title">
                  位のならび
                </div>

                <div class="decimal-place-help-number">

                  <div class="decimal-place-help-cell">
                    <small>十の位</small>
                    <strong>2</strong>
                  </div>

                  <div class="decimal-place-help-cell">
                    <small>一の位</small>
                    <strong>4</strong>
                  </div>

                  <span class="decimal-place-help-dot">
                    .
                  </span>

                  <div class="decimal-place-help-cell">
                    <small>10分の1の位</small>
                    <strong>6</strong>
                  </div>

                  <div class="decimal-place-help-cell">
                    <small>100分の1の位</small>
                    <strong>3</strong>
                  </div>

                </div>

                <div class="decimal-place-help-caption">
                  24.63
                </div>

              </div>
            `
            : ""
        }


        <div class="decimal-place-question-box">

          <div class="decimal-place-question-number">
            ${escapeHtml(
              question.value ?? ""
            )}
          </div>

          <div class="decimal-place-question-body">

            <div class="decimal-place-question-prompt">
              ${escapeHtml(
                question.prompt ?? ""
              )}
            </div>

            <div class="decimal-place-question-guide">
              ${escapeHtml(
                question.guide ?? ""
              )}
            </div>

            <div class="decimal-place-question-options">

              ${choices.map(
                choice => `
                  <div class="decimal-place-question-option">

                    <span>
                      ${escapeHtml(
                        choice.id
                      )}
                    </span>

                    <strong>
                      ${escapeHtml(
                        choice.label
                      )}
                    </strong>

                  </div>
                `
              ).join("")}

            </div>

          </div>

        </div>

      </div>
    `;
  }
};