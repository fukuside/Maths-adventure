export default {

  kind:
    "addition_word_visual",


  render(
    question,
    {
      escapeHtml
    }
  ) {

    const scene =
      String(
        question?.scene ?? ""
      );


    const icon =
      escapeHtml(
        question?.icon ?? ""
      );


    const text =
      escapeHtml(
        question?.prompt ?? ""
      );


    let sceneIcon =
      icon || "⭐";


    if (
      scene === "park"
    ) {

      sceneIcon = "🌳";
    }


    else if (
      scene === "bus"
    ) {

      sceneIcon = "🚌";
    }


    return `
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="addition-word-layout">

          <div class="addition-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${sceneIcon}
              </div>

              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  ＋
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="addition-word-text-side">

            <div class="addition-word-text">
              ${text}
            </div>

          </div>

        </div>

      </div>
    `;
  }
};