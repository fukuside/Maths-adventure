export default {
  kind: "subtraction_word_visual",

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
      <div class="subtraction-word-layout">

        <div class="subtraction-word-visual-side">

          <div class="subtraction-word-icon">
            ${icon}
          </div>

        </div>

        <div class="subtraction-word-text-side">

          <div class="subtraction-word-text">
            ${text}
          </div>

        </div>

      </div>
    `;
  }
};