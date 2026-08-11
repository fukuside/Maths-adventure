export default {
  kind: "division_word_visual",

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
      <div class="division-word-layout">

        <div class="division-word-visual-side">

          <div class="division-word-icon">
            ${icon}
          </div>

        </div>

        <div class="division-word-text-side">

          <div class="division-word-text">
            ${text}
          </div>

        </div>

      </div>
    `;
  }
};