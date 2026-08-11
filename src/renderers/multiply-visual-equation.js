export default {
  kind: "multiply_visual_equation",

  render(question, { escapeHtml }) {

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
                <span class="multiply-item">
                  ${icon}
                </span>
              `
            ).join("");

          return `
            <div class="multiply-group">
              ${items}
            </div>
          `;
        }
      ).join("");

    return `
      <div class="visual-question multiply-layout">

        <div class="multiply-visual-side">

          <div class="multiply-groups">
            ${groupHtml}
          </div>

        </div>

        <div class="multiply-text-side">

          <div class="multiply-equation">
            ${escapeHtml(
              question.label ?? ""
            )}
            ＝ ？
          </div>

          <div class="multiply-equation-guide">
            まとまりを見て こたえよう
          </div>

        </div>

      </div>
    `;
  }
};