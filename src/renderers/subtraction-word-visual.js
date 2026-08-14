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


    /* =====================================================
       場面を表すイラスト
       答えを絵から数えられないように1個だけ表示
    ===================================================== */

    let sceneIcon = icon || "⭐";


    if (
      scene ===
      "bird"
    ) {

      sceneIcon = "🐦";
    }


    else if (
      scene ===
      "bus"
    ) {

      sceneIcon = "🚌";
    }


    else if (
      scene ===
      "children"
    ) {

      sceneIcon = "🧒";
    }


    else if (
      scene ===
      "fish"
    ) {

      sceneIcon = "🐟";
    }


    /* =====================================================
       表示
       イラスト
       □ － ○
       ＋
       文章

       ※ remaining は絶対に画面へ表示しない
    ===================================================== */

    return `
      <div class="subtraction-word-layout">

        <div class="subtraction-word-visual-side">

          <div class="word-operation-visual">

            <div class="word-operation-icon">
              ${sceneIcon}
            </div>

            <div class="word-operation-equation subtraction-operation-equation">

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
    `;
  }
};