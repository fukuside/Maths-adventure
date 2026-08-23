export default {

  kind:
    "money",


  render(
    question,
    {
      escapeHtml
    }
  ) {

    const items =
      Array.isArray(
        question.items
      )
        ? question.items
        : [];


    return `
      <div
        class="
          visual-question
          money-question
        "
      >

        <div class="money-items">

          ${
            items.map(
              item => {

                const value =
                  Number(
                    item.value
                  );


                const primary =
                  item.image
                  ||
                  `/images/money/${value}yen.png`;


                const fallback =
                  `/pictures/money/${value}yen.png`;


                return `
                  <span
                    class="money-item"
                    aria-label="${value}円"
                  >

                    <img
                      class="money-image"

                      src="${escapeHtml(
                        primary
                      )}"

                      alt="${value}円"

                      decoding="async"

                      fetchpriority="high"

                      data-money-fallback="${escapeHtml(
                        fallback
                      )}"

                      onerror="
                        if(
                          !this.dataset.fallbackTried
                        ){
                          this.dataset.fallbackTried='1';
                          this.src=this.dataset.moneyFallback;
                        }else{
                          this.style.display='none';
                          this.nextElementSibling.style.display='grid';
                        }
                      "
                    >

                    <span
                      class="money-fallback"
                      style="display:none"
                    >
                      ${value}円
                    </span>

                  </span>
                `;

              }
            ).join("")
          }

        </div>


        <div class="visual-prompt">

          ${escapeHtml(
            question.prompt
            ??
            "ぜんぶで いくら？"
          )}

        </div>

      </div>
    `;
  }
};