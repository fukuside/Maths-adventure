import { randomInt as r } from "../helpers.js";
export default { types:["multiply","multiply_mixed"], build(stage){
  if(stage.type==="multiply"){ const b=r(stage.min??1,stage.max??9); return {label:`${stage.baseNum} × ${b}`,answer:stage.baseNum*b}; }
  const a=r(1,12),b=r(1,9); return {label:`${a} × ${b}`,answer:a*b};
}};
