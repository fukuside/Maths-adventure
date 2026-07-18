import { getQuestionGenerator } from "../questions/registry.js";

export function generateQuestions(stage, count = stage?.questionCount ?? 5) {
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
