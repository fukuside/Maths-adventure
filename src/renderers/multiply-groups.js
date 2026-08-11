export default {
  kind: "multiply_groups",

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
        (_, groupIndex) => {

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
            <div
              class="multiply-group"
              aria-label="${each}こずつの ${groupIndex + 1}つめのまとまり"
            >
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

          <div class="multiply-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="multiply-question-text">
            ${escapeHtml(
              question.question ?? ""
            )}
          </div>

        </div>

      </div>
    `;
  }
};