export default {
  kind: "addition_word_visual",

  render(question, { escapeHtml }) {

    const scene =
      escapeHtml(
        question.scene ?? ""
      );

    const mainIcon =
      escapeHtml(
        question.mainIcon ?? "📘"
      );

    const subIcon =
      escapeHtml(
        question.subIcon ?? ""
      );

    const peopleIcon =
      escapeHtml(
        question.peopleIcon ?? "🧒"
      );

    const firstCount =
      Number(question.firstCount ?? 0);

    const secondCount =
      Number(question.secondCount ?? 0);

    const text =
      escapeHtml(
        question.prompt ?? ""
      );


    /*
      人数を全部並べると多すぎるので、
      「人アイコン + 人数」で表示
    */
    const peopleBadge = (count) => `
      <div class="addition-word-people-badge">
        <span class="addition-word-person">
          ${peopleIcon}
        </span>

        <span class="addition-word-count">
          × ${count}人
        </span>
      </div>
    `;


    /*
      シーンごとの左側イラスト
    */
    let visual = "";


    /* バス */
    if (scene === "bus") {

      visual = `
        <div class="addition-word-scene addition-word-bus-scene">

          <div class="addition-word-main-icon">
            ${mainIcon}
          </div>

          <div class="addition-word-sub-icon">
            ${subIcon}
          </div>

          <div class="addition-word-group">
            ${peopleBadge(firstCount)}
          </div>

          <div class="addition-word-plus">
            ＋
          </div>

          <div class="addition-word-group addition-word-new-group">
            ${peopleBadge(secondCount)}
          </div>

        </div>
      `;
    }


    /* 公園 */
    else if (scene === "park") {

      visual = `
        <div class="addition-word-scene addition-word-park-scene">

          <div class="addition-word-main-icon">
            ${mainIcon}
          </div>

          <div class="addition-word-sub-icon">
            ${subIcon}
          </div>

          <div class="addition-word-group">
            ${peopleBadge(firstCount)}
          </div>

          <div class="addition-word-plus">
            ＋
          </div>

          <div class="addition-word-group addition-word-new-group">
            ${peopleBadge(secondCount)}
          </div>

        </div>
      `;
    }


    /* その他 */
    else {

      visual = `
        <div class="addition-word-scene">

          <div class="addition-word-main-icon">
            ${mainIcon}
          </div>

          ${
            subIcon
              ? `
                <div class="addition-word-sub-icon">
                  ${subIcon}
                </div>
              `
              : ""
          }

          <div class="addition-word-number-row">
  <span class="addition-word-formula-box">□</span>
  <span class="addition-word-plus">＋</span>
  <span class="addition-word-formula-box">○</span>
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