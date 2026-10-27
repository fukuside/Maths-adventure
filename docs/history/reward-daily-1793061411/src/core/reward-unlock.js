// Learning unlocks expire at each hour boundary; gems are managed separately.
export const rewardHour = (now = Date.now()) => Math.floor(now / 3600000);
export function normalizeRewardUnlock(value) {
  if (!value || !Number.isSafeInteger(value.hour) || value.hour < 0) return {hour: -1, runs: []};
  return {hour: value.hour, runs: [...new Set(Array.isArray(value.runs) ? value.runs.filter(x => typeof x === 'string' && x.length > 0 && x.length < 200) : [])].slice(0, 2)};
}
export function rewardUnlockStatus(state, now = Date.now()) {
  const saved = normalizeRewardUnlock(state?.rewardUnlock);
  const count = saved.hour === rewardHour(now) ? saved.runs.length : 0;
  return {count, unlocked: count >= 2, remaining: Math.max(0, 2 - count)};
}
export function recordRewardClear(state, runId, now = Date.now()) {
  if (typeof runId !== 'string' || !runId || runId.length >= 200) return false;
  const old = normalizeRewardUnlock(state.rewardUnlock), hour = rewardHour(now);
  const runs = old.hour === hour ? old.runs : [];
  if (runs.includes(runId) || runs.length >= 2) return false;
  state.rewardUnlock = {hour, runs: [...runs, runId]};
  return true;
}
export function mergeRewardUnlock(a, b) {
  const x = normalizeRewardUnlock(a), y = normalizeRewardUnlock(b);
  if (x.hour !== y.hour) return x.hour > y.hour ? x : y;
  return {hour: x.hour, runs: [...new Set([...x.runs, ...y.runs])].slice(0, 2)};
}
export function rewardUnlockHint(state) {
  const {count, unlocked} = rewardUnlockStatus(state);
  const text = unlocked ? 'がんばったね！ ご褒美ゲームで遊べるよ。' : count === 1 ? 'あと1回問題をクリアしたら遊べるよ。' : '2回問題をクリアしたら遊べるよ。';
  return `<div class="reward-unlock-hint"><p class="reward-unlock-bubble">${text}</p><p class="reward-unlock-progress">学習ステージ ${count} / 2 クリア</p></div>`;
}
export const rewardResetNote = '<p class="reward-unlock-note">この条件は毎時０時にリセット<br>毎時00分（10:00・11:00…）にクリア回数が0に戻ります。ダイヤは減りません。</p>';
