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
        ${escapeHtml(text)}
      </div>
    `;
  }
};