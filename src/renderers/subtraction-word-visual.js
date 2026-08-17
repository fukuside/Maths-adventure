export default {

  kind:
    "subtraction_word_visual",


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
      scene === "bird"
    ) {

      sceneIcon = "🐦";
    }


    else if (
      scene === "bus"
    ) {

      sceneIcon = "🚌";
    }


    else if (
      scene === "children"
    ) {

      sceneIcon = "🧒";
    }


    else if (
      scene === "fish"
    ) {

      sceneIcon = "🐟";
    }


    return `
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="subtraction-word-layout">

          <div class="subtraction-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${sceneIcon}
              </div>


              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  －
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="subtraction-word-text-side">

            <div class="subtraction-word-text">
              ${text}
            </div>

          </div>

        </div>

      </div>
    `;
  }
};