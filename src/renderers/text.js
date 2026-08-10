export default {
  kind: "text",

  render(question, { escapeHtml }) {

    const className =
      question?.className
        ? escapeHtml(question.className)
        : "";

    return `
      <div class="text-question ${className}">
        ${escapeHtml(
          question?.prompt ??
          question?.label ??
          ""
        )}
      </div>
    `;
  }
};