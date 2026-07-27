export default {
  id: "choice",

  keys: (b, question) => {
    const choices = Array.isArray(question?.choices)
      ? question.choices
      : [];

    return choices.map(choice =>
      b(
        choice.id,
        choice.label,
        "choice-key"
      )
    );
  }
};