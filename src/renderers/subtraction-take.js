export default {
  kind: "subtraction_take",

  render(question, { escapeHtml }) {

    const total =
      Number(question.total ?? 0);

    const removed =
      Number(question.removed ?? 0);

    const icon =
      escapeHtml(
        question.icon ?? "●"
      );

    const items =
      Array.from(
        { length: total },
        (_, index) => {

          const isRemoved =
            index >= total - removed;

          return `
            <span
              class="
                subtraction-item
                ${
                  isRemoved
                    ? "is-removed"
                    : ""
                }
              "
            >
              ${icon}
            </span>
          `;
        }
      ).join("");

    return `
      <div class="visual-question subtraction-layout">

        <div class="subtraction-visual-side">

          <div class="subtraction-items">
            ${items}
          </div>

        </div>

        <div class="subtraction-text-side">

          <div class="subtraction-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="subtraction-second-prompt">
            ${escapeHtml(
              question.secondPrompt ?? ""
            )}
          </div>

          <div class="subtraction-question-text">
            ${escapeHtml(
              question.question ?? ""
            )}
          </div>

        </div>

      </div>
    `;
  }
};