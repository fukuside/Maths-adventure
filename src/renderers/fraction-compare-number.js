export default {

  kind:
    "fraction-compare-number",


  render(question, { escapeHtml }) {

    const leftLabel =
      escapeHtml(
        question?.leftLabel ?? ""
      );


    const rightLabel =
      escapeHtml(
        question?.rightLabel ?? ""
      );


    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];


    return `
      <div class="fraction-s4-layout">

        <div class="fraction-s4-prompt">
          ${escapeHtml(
            question?.prompt ??
            "大きい分数は どっち？"
          )}
        </div>


        <div class="fraction-s4-numbers">

          <div class="fraction-s4-number">
            ${leftLabel}
          </div>


          <div class="fraction-s4-vs">
            と
          </div>


          <div class="fraction-s4-number">
            ${rightLabel}
          </div>

        </div>


        <div class="fraction-s4-guide">
          ${escapeHtml(
            question?.guide ??
            ""
          )}
        </div>


        <div class="fraction-s4-options">

          ${choices.map(
            choice => `
              <div class="fraction-s4-option">

                <span>
                  ${escapeHtml(choice.id)}
                </span>

                <strong>
                  ${escapeHtml(choice.label)}
                </strong>

              </div>
            `
          ).join("")}

        </div>

      </div>
    `;
  }
};