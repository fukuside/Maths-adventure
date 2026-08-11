export default {
  kind: "division_fact_family",

  render(question, { escapeHtml }) {

    return `
      <div class="division-fact-layout">

        <div class="division-fact-step">
          <small>九九を思い出そう</small>

          <strong>
            ${escapeHtml(
              question.multiplication ?? ""
            )}
          </strong>
        </div>

        <div class="division-fact-arrow">
          ↓
        </div>

        <div class="division-fact-step division-fact-answer">
          <small>だから</small>

          <strong>
            ${escapeHtml(
              question.division ?? ""
            )}
          </strong>
        </div>

      </div>
    `;
  }
};