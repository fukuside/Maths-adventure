// Learning unlocks reset at midnight Japan time; gems are managed separately.
export const rewardDay = (now = Date.now()) => Math.floor((now + 9 * 3600000) / 86400000);
export function normalizeRewardUnlock(value) {
  const day = Number.isSafeInteger(value?.day) ? value.day : Number.isSafeInteger(value?.hour) && value.hour >= 0 ? Math.floor((value.hour + 9) / 24) : -1;
  if (day < 0) return {day: -1, runs: []};
  return {day, runs: [...new Set(Array.isArray(value.runs) ? value.runs.filter(x => typeof x === 'string' && x.length > 0 && x.length < 200) : [])].slice(0, 2)};
}
export function rewardUnlockStatus(state, now = Date.now()) {
  const saved = normalizeRewardUnlock(state?.rewardUnlock);
  const count = saved.day === rewardDay(now) ? saved.runs.length : 0;
  return {count, unlocked: count >= 2, remaining: Math.max(0, 2 - count)};
}
export function recordRewardClear(state, runId, now = Date.now()) {
  if (typeof runId !== 'string' || !runId || runId.length >= 200) return false;
  const old = normalizeRewardUnlock(state.rewardUnlock), day = rewardDay(now);
  const runs = old.day === day ? old.runs : [];
  if (runs.includes(runId) || runs.length >= 2) return false;
  state.rewardUnlock = {day, runs: [...runs, runId]};
  return true;
}
export function mergeRewardUnlock(a, b) {
  const x = normalizeRewardUnlock(a), y = normalizeRewardUnlock(b);
  if (x.day !== y.day) return x.day > y.day ? x : y;
  return {day: x.day, runs: [...new Set([...x.runs, ...y.runs])].slice(0, 2)};
}
export function rewardUnlockHint(state) {
  const {count, unlocked} = rewardUnlockStatus(state);
  const text = unlocked ? 'がんばったね！ ご褒美ゲームで遊べるよ。' : count === 1 ? 'あと1回問題をクリアしたら遊べるよ。' : '2回問題をクリアしたら遊べるよ。';
  return `<aside class="reward-unlock-hint"><p class="reward-unlock-bubble">${text}<small>学習ステージ ${count} / 2 クリア</small><small>毎日 午前0時にリセット（日本時間）</small></p></aside>`;
}
export const rewardResetNote = '<p class="reward-unlock-note">毎日 午前0時にリセット（日本時間）<br>ダイヤは減りません。</p>';
