export default {
  kind: "division_share",

  render(question, { escapeHtml }) {

    const total =
      Number(question.total ?? 0);

    const groups =
      Number(question.groups ?? 0);

    const icon =
      escapeHtml(
        question.icon ?? "●"
      );

    const items =
      Array.from(
        { length: total },
        () => `
          <span class="division-item">
            ${icon}
          </span>
        `
      ).join("");

    const people =
      Array.from(
        { length: groups },
        (_, index) => `
          <div class="division-person">
            <span class="division-person-icon">👤</span>
            <small>${index + 1}人め</small>
          </div>
        `
      ).join("");

    return `
      <div class="visual-question division-layout">

        <div class="division-visual-side">

          <div class="division-items-box">
            ${items}
          </div>

          <div class="division-arrow">
            ↓
          </div>

          <div class="division-people-row">
            ${people}
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