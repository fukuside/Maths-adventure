import { randomInt as r } from "../helpers.js";
export default { types:["decimal_add","decimal_mixed"], build(stage){
  if(stage.type==="decimal_add"){ const scale=10,a=r(0,stage.max*scale),b=r(0,stage.max*scale-a); return {label:`${a/scale} ＋ ${b/scale}`,answer:(a+b)/scale}; }
  const a=r(0,100),b=r(0,100); return {label:`${a/10} ＋ ${b/10}`,answer:(a+b)/10};
}};
