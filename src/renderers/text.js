export default {
  kind: "text",

  render(question, { escapeHtml }) {

    const className =
      question?.className
        ? escapeHtml(question.className)
        : "";

    const text =
      question?.prompt ??
      question?.label ??
      question?.expression ??
      question?.text ??
      "";

    return `
      <div class="text-question ${className}">
        ${question.lead ? `<small class="number-adventure-lead">${escapeHtml(question.lead)}</small>` : ""}
        ${escapeHtml(text)}
      </div>
    `;
  }
};