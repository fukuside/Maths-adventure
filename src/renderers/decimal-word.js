export default {

  kind:
    "decimal-word",


  render(
    question,
    {
      escapeHtml
    }
  ) {

    const icon =
      escapeHtml(
        question?.icon ?? "📘"
      );


    const text =
      escapeHtml(
        question?.prompt ?? ""
      );


    return `
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="decimal-word-layout">

          <div class="decimal-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${icon}
              </div>

            </div>

          </div>


          <div class="decimal-word-text-side">

            <div class="decimal-word-text">
              ${text}
            </div>

          </div>

        </div>

      </div>
    `;
  }
};