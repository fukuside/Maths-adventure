export function getStageRewardCards(stage, cards) {
 const ready = cards.filter(c => c.rewardReady !== false);
 if (Array.isArray(stage?.rewardCardIds)) {
   return ready.filter(c => stage.rewardCardIds.includes(c.id));
 }
 return ready.filter(c => c.world === (stage?.rewardWorld ?? stage?.world));
}
