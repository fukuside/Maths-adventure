export default {
  kind: "decimal-calculation",

  render(question, { escapeHtml }) {

    return `
      <div class="decimal-calc-layout">

        <div class="decimal-calc-prompt">
          ${escapeHtml(question.prompt ?? "")}
        </div>

        <div class="decimal-calc-equation">

          <span>
            ${escapeHtml(question.left ?? "")}
          </span>

          <span class="decimal-calc-symbol">
            ${escapeHtml(question.symbol ?? "")}
          </span>

          <span>
            ${escapeHtml(question.right ?? "")}
          </span>

          <span class="decimal-calc-equals">
            ＝
          </span>

          <span class="decimal-calc-question">
            ？
          </span>

        </div>

        <div class="decimal-calc-guide">
          ${escapeHtml(question.guide ?? "")}
        </div>

      </div>
    `;
  }
};