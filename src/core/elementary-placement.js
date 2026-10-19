// IDs and original reward pools remain stable across grade placement changes.
const placement={
  "w3-multiplication-1": 2,
  "w3-multiplication-2": 2,
  "w3-multiplication-3": 2,
  "w3-multiplication-4": 2,
  "w3-multiplication-5": 2,
  "w3-multiplication-6": 2,
  "w3-multiplication-7": 2,
  "w3-multiplication-boss": 2,
  "w2-time-1": 1,
  "w2-time-2": 1,
  "w2-time-3": 1,
  "w2-time-4": 1,
  "w4-decimal-1": 3,
  "w4-decimal-2": 3,
  "w4-decimal-3": 3,
  "w4-decimal-4": 3,
  "w4-decimal-5": 3,
  "w4-decimal-6": 3,
  "w4-decimal-7": 3,
  "w4-decimal-8": 3,
  "w4-decimal-boss": 3,
  "w4-fraction-1": 3,
  "w4-fraction-5": 3,
  "w4-fraction-6": 3
};
export function placeElementaryStage(item){
 const world=placement[item.id];
 return world ? {...item,world,rewardWorld:item.world,originalWorld:item.world} : item;
}
