import { symbolSvg, symbolNames } from "../visuals.js";
export default {
  kind: "k-choice",
  render(question, { escapeHtml, inputEnabled = false }) {
    const count = question.mode === "match" ? 1 : question.count;
    const objects = Array.from({ length: count }, () => symbolSvg(question.symbol)).join("");
    const buttons = question.choices.map(choice => {
      const label = question.mode === "match" ? symbolNames[choice.value] : choice.label;
      const content = question.mode === "match" ? symbolSvg(choice.value) : escapeHtml(choice.label);
      return `<button type="button" class="k-choice-button" data-action="k-answer" data-value="${escapeHtml(choice.id)}"
        aria-label="${escapeHtml(label)}" ${inputEnabled ? "" : "disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question"><h2>${escapeHtml(question.prompt)}</h2>
      <div class="k-objects k-layout-${question.layout === "group" ? "group" : "row"}" role="img"
        aria-label="${escapeHtml(symbolNames[question.symbol])}${question.mode === "count" ? ` ${count}こ` : ""}">${objects}</div>
      <p class="muted">こたえを タップしてね</p><div class="k-choices">${buttons}</div></div>`;
  }
};
