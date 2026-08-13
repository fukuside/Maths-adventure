export default {
  kind: "decimal-word",

  render(question, { escapeHtml }) {

    const icon =
      escapeHtml(
        question.icon ?? "📘"
      );

    const text =
      escapeHtml(
        question.prompt ?? ""
      );

    return `
      <div class="decimal-word-layout">

        <div class="decimal-word-visual-side">

          <div class="decimal-word-icon">
            ${icon}
          </div>

        </div>

        <div class="decimal-word-text-side">

          <div class="decimal-word-text">
            ${text}
          </div>

        </div>

      </div>
    `;
  }
};