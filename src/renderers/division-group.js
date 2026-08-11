export default {
  kind: "division_group",

  render(question, { escapeHtml }) {

    const total =
      Number(question.total ?? 0);

    const each =
      Number(question.each ?? 0);

    const groups =
      Number(question.groups ?? 0);

    const icon =
      escapeHtml(
        question.icon ?? "●"
      );

    const groupHtml =
      Array.from(
        { length: groups },
        () => {

          const items =
            Array.from(
              { length: each },
              () => `
                <span class="division-item">
                  ${icon}
                </span>
              `
            ).join("");

          return `
            <div class="division-group-box">
              ${items}
            </div>
          `;
        }
      ).join("");

    return `
      <div class="visual-question division-layout">

        <div class="division-visual-side">

          <div class="division-group-grid">
            ${groupHtml}
          </div>

        </div>

        <div class="division-text-side">

          <div class="division-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="division-second-prompt">
            ${escapeHtml(
              question.secondPrompt ?? ""
            )}
          </div>

          <div class="division-question-text">
            ${escapeHtml(
              question.question ?? ""
            )}
          </div>

        </div>

      </div>
    `;
  }
};