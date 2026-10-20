import {normalizeTrails} from './challenge-trails.js';
// Stars are existing ten-question completion records; they are never consumed.
export function bossUnlockStatus(state,boss,stages){
 if(!boss?.isBoss||boss.world>=101)return {unlocked:true,stars:0,remaining:0,required:0,scope:'none'};
 const normal=stages.filter(s=>s.world===boss.world&&!s.isBoss&&!s.hiddenFromWorld);
 const sameUnit=normal.filter(s=>s.unit===boss.unit);
 const candidates=sameUnit.length?sameUnit:normal;
 const trails=normalizeTrails(state?.challengeTrails);
 const stars=candidates.reduce((sum,s)=>sum+Object.keys(trails[s.id]||{}).length,0);
 const clearedBefore=Object.keys(trails[boss.id]||{}).length>0;
 return {unlocked:clearedBefore||stars>=2,stars,remaining:clearedBefore?0:Math.max(0,2-stars),required:2,scope:sameUnit.length?'unit':'world',clearedBefore};
}
