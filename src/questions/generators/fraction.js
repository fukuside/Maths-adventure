import { randomInt as r } from "../helpers.js";
export default { types:["fraction_same_denominator","fraction_mixed"], build(stage){
  if(stage.type==="fraction_same_denominator"){ const d=stage.denominator,a=r(1,d-1),b=r(0,d-a); return {label:`${a}/${d} ＋ ${b}/${d} ＝ ?/${d}`,answer:a+b}; }
  const ds=[2,3,4,5,6,8],d=ds[r(0,ds.length-1)],a=r(1,d-1),b=r(0,d-a); return {label:`${a}/${d} ＋ ${b}/${d} ＝ ?/${d}`,answer:a+b};
}};
