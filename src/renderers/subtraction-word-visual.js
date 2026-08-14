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


    const total =
      Number(
        question?.total ?? 0
      );


    const removed =
      Number(
        question?.removed ?? 0
      );


    const remaining =
      Math.max(
        0,
        Number(
          question?.remaining ??
          total -
          removed
        )
      );


    const icon =
      escapeHtml(
        question?.icon ?? "●"
      );


    const text =
      escapeHtml(
        question?.prompt ?? ""
      );


    function icons(
      value,
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
          `<span class="subtraction-scene-item ${className}">
            ${value}
          </span>`
      ).join("");
    }


    let visual = "";


    /* =====================================================
       鳥
    ===================================================== */

    if (
      scene ===
      "bird"
    ) {

      visual = `
        <div class="subtraction-scene subtraction-bird-scene">

          <div class="subtraction-flying-group">

            ${icons(
              "🐦",
              removed,
              "is-leaving"
            )}

            <span class="subtraction-motion-arrow">
              →
            </span>

          </div>


          <div class="subtraction-branch">

            <div class="subtraction-remaining-items">

              ${icons(
                "🐦",
                remaining
              )}

            </div>

            <div class="subtraction-tree-line">
              🌳━━━━━━━━
            </div>

          </div>

        </div>
      `;
    }

    /* =====================================================
   バス

   ① バスに total 人乗っている
   ② ↓
   ③ removed 人が降りる

   ※ remaining は答えなので表示しない
===================================================== */

else if (
  scene ===
  "bus"
) {

  visual = `
    <div class="subtraction-scene subtraction-bus-scene">


      <div class="subtraction-bus-start">

        <div class="subtraction-bus-emoji">
          🚌
        </div>

        <div class="subtraction-bus-total">
          のっている ${total}人
        </div>

      </div>


      <div class="subtraction-bus-down-arrow">
        ↓
      </div>


      <div class="subtraction-bus-getoff">

        <div class="subtraction-leaving-people">

          ${icons(
            "🧒",
            removed,
            "is-leaving"
          )}

        </div>

        <div class="subtraction-bus-removed-count">
          おりる ${removed}人
        </div>

      </div>


    </div>
  `;
}

    /* =====================================================
       子ども
    ===================================================== */

    else if (
      scene ===
      "children"
    ) {

      visual = `
        <div class="subtraction-scene subtraction-children-scene">

          <div class="subtraction-remaining-items">

            ${icons(
              "🧒",
              remaining
            )}

          </div>


          <div class="subtraction-away-group">

            <span class="subtraction-motion-arrow">
              →
            </span>

            ${icons(
              "🧒",
              removed,
              "is-leaving"
            )}

          </div>

        </div>
      `;
    }


    /* =====================================================
       魚
    ===================================================== */

    else if (
      scene ===
      "fish"
    ) {

      visual = `
        <div class="subtraction-scene subtraction-fish-scene">

          <div class="subtraction-remaining-items">

            ${icons(
              "🐟",
              remaining
            )}

          </div>


          <div class="subtraction-away-group">

            <span class="subtraction-motion-arrow">
              →
            </span>

            ${icons(
              "🐟",
              removed,
              "is-leaving"
            )}

          </div>

        </div>
      `;
    }


    /* =====================================================
       クッキー・鉛筆
    ===================================================== */

    else {

      visual = `
        <div class="subtraction-scene subtraction-object-scene">

          <div class="subtraction-remaining-items">

            ${icons(
              icon,
              remaining
            )}

          </div>


          <div class="subtraction-used-group">

            ${icons(
              icon,
              removed,
              "is-removed"
            )}

          </div>

        </div>
      `;
    }


    return `
      <div class="subtraction-word-layout">


        <div class="subtraction-word-visual-side">

          ${visual}

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