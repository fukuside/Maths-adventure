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


    const firstCount =
      Number(
        question?.firstCount ?? 0
      );


    const addedCount =
      Number(
        question?.addedCount ?? 0
      );


    const text =
      escapeHtml(
        question?.prompt ?? ""
      );


    /* =====================================================
       人
    ===================================================== */

    function people(
      count,
      className = ""
    ) {

      return Array.from(
        {
          length:
            Math.min(
              count,
              10
            )
        },

        () =>
          `<span class="addition-word-person ${className}">
            🧒
          </span>`
      ).join("");
    }


    /* =====================================================
       アイテム
    ===================================================== */

    function items(
      icon,
      count,
      className = ""
    ) {

      return Array.from(
        {
          length:
            Math.min(
              count,
              10
            )
        },

        () =>
          `<span class="addition-word-scene-item ${className}">
            ${icon}
          </span>`
      ).join("");
    }


    let visual = "";

/* =====================================================
   公園
   見切れ防止：
   木を左、人数の計算を右にまとめる
===================================================== */

if (
  scene ===
  "park"
) {

  visual = `
    <div class="addition-word-scene addition-word-park">

      <div class="addition-word-park-place">
        🌳
      </div>


      <div class="addition-word-park-math">

        <div class="addition-word-scene-group">

          ${people(
            firstCount
          )}

        </div>


        <div class="addition-word-park-plus">
          ＋
        </div>


        <div class="addition-word-scene-group">

          ${people(
            addedCount,
            "is-added"
          )}

        </div>

      </div>

    </div>
  `;
}

    /* =====================================================
       バス
    ===================================================== */

    else if (
      scene ===
      "bus"
    ) {

      visual = `
        <div class="addition-word-scene addition-word-bus">

          <div class="addition-word-bus-body">
            🚌

            <div class="addition-word-count-badge">
              🧒 × ${firstCount}
            </div>
          </div>


          <div class="addition-word-bus-stop">

            <span class="addition-word-arrow">
              →
            </span>

            <div class="addition-word-added-people">

              ${people(
                addedCount,
                "is-added"
              )}

            </div>

          </div>

        </div>
      `;
    }


    /* =====================================================
       その他
    ===================================================== */

    else {

      const icon =
        escapeHtml(
          question?.icon ?? "●"
        );


      visual = `
        <div class="addition-word-scene addition-word-items">

          <div class="addition-word-item-group">

            ${items(
              icon,
              firstCount
            )}

          </div>


          <div class="addition-word-plus-sign">
            ＋
          </div>


          <div class="addition-word-item-group is-added">

            ${items(
              icon,
              addedCount,
              "is-added"
            )}

          </div>

        </div>
      `;
    }


    return `
      <div class="addition-word-layout">

        <div class="addition-word-visual-side">

          ${visual}

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