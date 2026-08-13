export default {
  kind: "decimal-compare",

  render(question, { escapeHtml }) {

    const choices =
      Array.isArray(question.choices)
        ? question.choices
        : [];

    return `
      <div class="decimal-compare-simple">

        <div class="decimal-compare-simple-prompt">
          ${escapeHtml(
            question.prompt ?? ""
          )}
        </div>

        <div class="decimal-compare-simple-guide">
          ${escapeHtml(
            question.guide ?? ""
          )}
        </div>

        <div class="decimal-compare-simple-choices">

          ${choices.map(
            choice => `
              <div class="decimal-compare-simple-choice">

                <span class="decimal-compare-simple-letter">
                  ${escapeHtml(choice.id)}
                </span>

                <strong class="decimal-compare-simple-value">
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