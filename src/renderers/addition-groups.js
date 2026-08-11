export default {
  kind: "addition_groups",

  render(question, { escapeHtml }) {

    const icon =
      escapeHtml(question.icon ?? "●");

    const leftCount =
      Number(question.leftCount ?? 0);

    const rightCount =
      Number(question.rightCount ?? 0);


    const leftItems =
      Array.from(
        { length: leftCount },
        () => `
          <span class="addition-item">
            ${icon}
          </span>
        `
      ).join("");


    const rightItems =
      Array.from(
        { length: rightCount },
        () => `
          <span class="addition-item">
            ${icon}
          </span>
        `
      ).join("");


    return `
      <div class="visual-question addition-layout">

        <div class="addition-visual-side">

          <div class="addition-set">
            ${leftItems}
          </div>

          <div class="addition-symbol">
            ＋
          </div>

          <div class="addition-set">
            ${rightItems}
          </div>

        </div>


        <div class="addition-text-side">

          <div class="addition-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="addition-question-text">
            ${escapeHtml(
              question.question ?? ""
            )}
          </div>

        </div>

      </div>
    `;
  }
};