import { symbolSvg, symbolNames } from "../visuals.js";
export default {
  kind: "k-choice",
  render(question, { escapeHtml, inputEnabled = false }) {
    const groupMode = ["number-group", "compare"].includes(question.mode);
    const count = question.mode === "match" ? 1 : question.count;
    const objects = Array.from({ length: count ?? 0 }, () => symbolSvg(question.symbol)).join("");
    const buttons = question.choices.map(choice => {
      const label = question.mode === "match" ? symbolNames[choice.value] : groupMode ? `${symbolNames[question.symbol]} ${choice.value}こ` : choice.label;
      const content = question.mode === "match" ? symbolSvg(choice.value) : groupMode
        ? `<span class="k-choice-objects">${Array.from({ length: choice.value }, () => symbolSvg(question.symbol)).join("")}</span>`
        : escapeHtml(choice.label);
      return `<button type="button" class="k-choice-button ${groupMode ? "k-group-choice" : ""}" data-action="k-answer" data-value="${escapeHtml(choice.id)}"
        aria-label="${escapeHtml(label)}" ${inputEnabled ? "" : "disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question"><h2>${escapeHtml(question.prompt)}</h2>
      ${groupMode ? "" : `<div class="k-objects k-layout-${question.layout === "group" ? "group" : "row"}" role="img"
        aria-label="${escapeHtml(symbolNames[question.symbol])}${question.mode === "count" ? ` ${count}こ` : ""}">${objects}</div>`}
      <p class="muted">こたえを タップしてね</p><div class="k-choices ${groupMode ? "k-group-choices" : ""}">${buttons}</div></div>`;
  }
};
