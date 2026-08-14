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


    /* =====================================================
       場面を表すイラスト
       数を数えさせるためではなく、
       文章の場面をイメージするための1個だけ
    ===================================================== */

    let sceneIcon = icon || "⭐";


    if (
      scene ===
      "park"
    ) {

      sceneIcon = "🌳";
    }


    else if (
      scene ===
      "bus"
    ) {

      sceneIcon = "🚌";
    }


    /* =====================================================
       表示
       イラスト
       □ ＋ ○
       ＋
       文章
    ===================================================== */

    return `
      <div class="addition-word-layout">

        <div class="addition-word-visual-side">

          <div class="word-operation-visual">

            <div class="word-operation-icon">
              ${sceneIcon}
            </div>

            <div class="word-operation-equation addition-operation-equation">

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
    `;
  }
};