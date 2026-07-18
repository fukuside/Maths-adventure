import { randomInt as r } from "../helpers.js";
export default { types:["divide","divide_mixed"], build(stage){
  if(stage.type==="divide"){ const answer=r(stage.min??1,stage.max??9); return {label:`${stage.baseNum*answer} ÷ ${stage.baseNum}`,answer}; }
  const ds=[2,3,4,5,6,8],d=ds[r(0,ds.length-1)],answer=r(1,9); return {label:`${d*answer} ÷ ${d}`,answer};
}};
