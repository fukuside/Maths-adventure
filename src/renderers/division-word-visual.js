export default {

  kind:
    "division_word_visual",


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


        <div class="division-word-layout">

          <div class="division-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${icon}
              </div>


              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  ÷
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="division-word-text-side">

            <div class="division-word-text">
              ${text}
            </div>

          </div>

        </div>

      </div>
    `;
  }
};