import {normalizeTrails} from './challenge-trails.js';
// All basic stages need one clear, followed by at least one additional clear.
// Stars are existing ten-question completion records and are never consumed.
export function bossUnlockStatus(state,boss,stages){
 if(!boss?.isBoss||boss.world>=101)return {unlocked:true,stars:0,remaining:0,required:0,scope:'none'};
 const normal=stages.filter(s=>s.world===boss.world&&!s.isBoss&&!s.hiddenFromWorld);
 const sameUnit=normal.filter(s=>s.unit===boss.unit);
 const candidates=sameUnit.length?sameUnit:normal;
 const trails=normalizeTrails(state?.challengeTrails);
 const counts=candidates.map(s=>Object.keys(trails[s.id]||{}).length);
 const stars=counts.reduce((sum,n)=>sum+n,0);
 const completed=counts.filter(n=>n>0).length;
 const total=candidates.length;
 const extraStars=stars-completed;
 const missingBasics=total-completed;
 const extraRemaining=Math.max(0,1-extraStars);
 const required=total+1;
 const clearedBefore=Object.keys(trails[boss.id]||{}).length>0;
 return {unlocked:clearedBefore||(total>0&&missingBasics===0&&extraRemaining===0),stars,
  remaining:clearedBefore?0:missingBasics+extraRemaining,required,
  completed,total,missingBasics,extraStars,extraRemaining,
  scope:sameUnit.length?'unit':'world',clearedBefore};
}
