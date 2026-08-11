export default {
  kind: "subtraction_compare",

  render(question, { escapeHtml }) {

    const large =
      Number(question.large ?? 0);

    const small =
      Number(question.small ?? 0);

    const iconA =
      escapeHtml(
        question.iconA ?? "●"
      );

    const iconB =
      escapeHtml(
        question.iconB ?? "■"
      );

    const topItems =
      Array.from(
        { length: large },
        () => `
          <span class="subtraction-compare-item">
            ${iconA}
          </span>
        `
      ).join("");

    const bottomItems =
      Array.from(
        { length: small },
        () => `
          <span class="subtraction-compare-item">
            ${iconB}
          </span>
        `
      ).join("");

    return `
      <div class="visual-question subtraction-layout">

        <div class="subtraction-visual-side subtraction-compare-visual">

          <div class="subtraction-compare-row">
            ${topItems}
          </div>

          <div class="subtraction-compare-row">
            ${bottomItems}
          </div>

        </div>

        <div class="subtraction-text-side">

          <div class="subtraction-prompt">
            ${escapeHtml(
              question.prompt ?? ""
            )}
          </div>

          <div class="subtraction-question-text">
            ${escapeHtml(
              question.question ?? ""
            )}
          </div>

        </div>

      </div>
    `;
  }
};