export default { kind:"text", render(question,{escapeHtml}) { return escapeHtml(question?.label ?? ""); } };
