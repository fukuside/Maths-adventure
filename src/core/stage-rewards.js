// Uniform monster selection from the course pool. Rarity is rolled separately.
export function getStageRewardCards(stage, cards) {
 const kindergarten = stage?.course === 'kindergarten' || stage?.packId === 'kindergarten' || stage?.world >= 101;
 return cards.filter(c => {
  if(c.rewardReady === false || !['N','SR','UR'].every(r=>c.images?.[r])) return false;
  const n=Number(c.number);
  if(kindergarten) return /^K\d+$/.test(String(c.number)) || (Number.isInteger(n)&&n>=1&&n<=20);
  return Number.isInteger(n)&&n>=1&&n<=100;
 });
}

// Duplicate means the same monster AND rarity. Conversion is awarded once at quest completion.
export function grantCardReward(state, cardId, rarity) {
 const key = `${cardId}_${rarity}`;
 const isNew = !state.unlockedCards.includes(key);
 const duplicateGems = isNew ? 0 : 3;
 if (isNew) {
  state.unlockedCards.push(key);
  state.newCards = Array.isArray(state.newCards) ? state.newCards : [];
  if (!state.newCards.includes(key)) state.newCards.push(key);
 } else {
  state.gems += duplicateGems;
 }
 return { isNew, duplicateGems };
}
