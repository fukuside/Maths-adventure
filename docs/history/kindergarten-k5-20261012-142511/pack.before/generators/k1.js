const symbols = ["apple", "star", "ball", "flower", "fish", "leaf"];
function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function options(values, correct) {
  const choices = shuffle(values).map((value, index) => ({ id: "ABC"[index], label: String(value), value }));
  return { choices, answer: choices.find(choice => choice.value === correct).id };
}
export default {
  types: ["k_match", "k_count_3", "k_count_5", "k_number_group", "k_more", "k_less"],
  build(stage) {
    const symbol = pick(symbols);
    if (stage.type === "k_match") {
      const other = pick(symbols.filter(item => item !== symbol));
      return { kind: "k-choice", mode: "match", prompt: "おなじ ものは どれ？", symbol,
        ...options([symbol, other], symbol), uniqueKey: `k-match:${symbol}:${other}` };
    }
    if (["k_more", "k_less"].includes(stage.type)) {
      const low = pick([1, 2, 3]);
      const high = pick(Array.from({ length: 5 - low - 1 }, (_, i) => low + 2 + i));
      const correct = stage.type === "k_more" ? high : low;
      return { kind: "k-choice", mode: "compare", comparison: stage.type === "k_more" ? "more" : "less",
        prompt: stage.type === "k_more" ? "おおいのは どっち？" : "すくないのは どっち？", symbol,
        ...options([low, high], correct), uniqueKey: `${stage.type}:${symbol}:${low}:${high}` };
    }
    if (stage.type === "k_number_group") {
      const count = pick([1, 2, 3, 4, 5]);
      const wrongs = shuffle([1, 2, 3, 4, 5].filter(value => value !== count)).slice(0, 2);
      return { kind: "k-choice", mode: "number-group", prompt: `${count}こ あるのは どれ？`, symbol, count,
        ...options([count, ...wrongs], count), uniqueKey: `k-number-group:${symbol}:${count}:${wrongs.sort((a,b) => a-b).join(",")}` };
    }
    if (!["k_count_3", "k_count_5"].includes(stage.type)) throw new Error(`未対応の幼児形式: ${stage.type}`);
    const max = stage.type === "k_count_3" ? 3 : 5;
    const count = 1 + Math.floor(Math.random() * max);
    const layout = pick(["row", "group"]);
    const wrongs = shuffle(Array.from({ length: max }, (_, i) => i + 1).filter(value => value !== count))
      .slice(0, max === 3 ? 1 : 2);
    return { kind: "k-choice", mode: "count", prompt: "いくつ ある？", symbol, count, layout,
      ...options([count, ...wrongs], count),
      uniqueKey: `k-count:${symbol}:${count}:${layout}:${wrongs.sort((a, b) => a - b).join(",")}` };
  }
};
