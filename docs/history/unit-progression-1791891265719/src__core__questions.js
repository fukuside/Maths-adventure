import { getQuestionGenerator } from "../questions/registry.js";

export function generateQuestions(stage, count = stage?.questionCount ?? 5) {
  // まとめは形式の重複を避け、6形式から5形式をランダムに選ぶ。
  if (Array.isArray(stage?.questionTypes)) {
    const types = [...stage.questionTypes];
    if (!Number.isInteger(count) || count < 1 || count > types.length
      || new Set(types).size !== types.length
      || types.some(type => typeof type !== "string" || !type)) {
      throw new Error("まとめの問題形式・問題数を確認してください。");
    }
    const questions = [];
    while (questions.length < count) {
      const index = Math.floor(Math.random() * types.length);
      const [type] = types.splice(index, 1);
      const [question] = generateQuestions({ ...stage, type, questionTypes: undefined }, 1);
      questions.push({ ...question, sourceType: type, uniqueKey: `${type}:${question.uniqueKey}` });
    }
    return questions;
  }
  const generator = getQuestionGenerator(stage?.type);
  if (!generator) throw new Error(`未対応タイプ: ${stage?.type}`);

  const questions = [];
  let guard = 0;
  while (questions.length < count && guard++ < 500) {
    const question = generator(stage);
    const key = question.uniqueKey ?? question.label ?? JSON.stringify(question);
    if (!questions.some(existing => (existing.uniqueKey ?? existing.label ?? JSON.stringify(existing)) === key)) questions.push(question);
  }
  if (questions.length < count) throw new Error("問題を生成できませんでした。ステージ設定を確認してください。");
  return questions;
}
