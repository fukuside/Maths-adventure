export default {

  kind: "money-choice",


  render(question) {

    const items =
      Array.isArray(
        question?.items
      )
        ? question.items
        : [];


    const choices =
      Array.isArray(
        question?.choices
      )
        ? question.choices
        : [];


    return `

      <div
        class="
          visual-question
          money-choice-question
        "
      >

        <div class="visual-prompt">

          ${question.prompt ?? "買えるのはどっち？"}

        </div>


        <div class="money-choice-wallet">

          <span
            class="
              money-choice-wallet-label
            "
          >
            👛 もっているお金
          </span>


          <div
            class="
              money-choice-wallet-items
            "
          >

            ${items.map(item => `

              <img

                class="
                  money-choice-money-image
                "

                src="${item.image}"

                alt="${item.value}円"

              >

            `).join("")}

          </div>

        </div>


        <div
          class="
            money-choice-options
          "
        >

          ${choices.map(choice => `

  <div
    class="
      money-choice-option
      money-choice-option-${choice.id.toLowerCase()}
    "
  >

    <span class="choice-letter">
      ${choice.id}
    </span>

    ${choice.moneyItems ? `

      <div class="money-choice-wallet-items">

        ${choice.moneyItems.map(item=>`

          <img
  class="money-choice-money-image"
  src="${item.image}"
  alt="${item.value}円"
  decoding="async"
  fetchpriority="high"
>
        `).join("")}

      </div>

    ` : `

      <span class="choice-product-icon">
        ${choice.icon}
      </span>

      <div class="choice-product-info">

        <span class="choice-product-name">
          ${choice.name}
        </span>

        <strong class="choice-product-price">
          ${choice.price}円
        </strong>

      </div>

    `}

  </div>

`).join("")}

        </div>

      </div>
    `;
  }
};