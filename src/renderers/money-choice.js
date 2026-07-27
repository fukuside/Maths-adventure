export default {
  kind: "money-choice",

  render(question) {
    const items = Array.isArray(question?.items)
      ? question.items
      : [];

    const choices = Array.isArray(question?.choices)
      ? question.choices
      : [];

    return `
      <div class="visual-question money-choice-question">

        <div class="visual-prompt">
          ${question.prompt ?? "どっちが買える？"}
        </div>

        ${
          items.length
            ? `
              <div class="money-choice-wallet">
                <div class="money-choice-label">
                  もっているお金
                </div>

                <div class="money-items">
                  ${items.map(item => `
                    <img
                      class="money-image"
                      src="${item.image}"
                      alt="${item.value}円"
                      data-money-value="${item.value}"
                    >
                  `).join("")}
                </div>
              </div>
            `
            : ""
        }

        <div class="money-choice-options">
          ${choices.map(choice => `
            <div class="money-choice-option">
              ${choice.label}
            </div>
          `).join("")}
        </div>

      </div>
    `;
  }
};