export default {
  kind: "addition_increase",

  render(question, { escapeHtml }) {

    const icon =
      escapeHtml(question.icon ?? "●");

    const firstCount =
      Number(question.firstCount ?? 0);

    const addedCount =
      Number(question.addedCount ?? 0);


    const firstItems =
      Array.from(
        { length: firstCount },
        () => `
          <span class="addition-item">
            ${icon}
          </span>
        `
      ).join("");


    const addedItems =
      Array.from(
        { length: addedCount },
        () => `
          <span class="addition-item addition-added-item">
            ${icon}
          </span>
        `
      ).join("");


    return `
      <div class="visual-question addition-layout">

        <div class="addition-visual-side addition-increase-visual">

          <div class="addition-set">
            ${firstItems}
          </div>

          <div class="addition-arrow">
            ＋
          </div>

          <div class="addition-set addition-added-set">
            ${addedItems}
          </div>

        </div>


        <div class="addition-text-side">

          <div class="addition-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="addition-second-prompt">
            ${escapeHtml(
              question.secondPrompt ?? ""
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