import {multiplyGridQuestion} from './written-multiply-grid.js';
import {divideGridQuestion} from './written-divide-grid.js';
const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function decimalMultiplyDivideQuestion(type){
 if(type==='decimalIntMultiply'){const a=r(11,89),b=r(2,9),q=multiplyGridQuestion('upper_mul3',{a,b});return {...q,decimalPlaces:1,solution:String(a*b/10),uniqueKey:'decimal-multiply:'+a+':'+b,prompt:(a/10).toFixed(1)+' × '+b+' を、ひっ算で計算しよう。'};}
 const divisor=r(2,9),quotient=r(Math.ceil(100/divisor),Math.min(99,Math.floor(899/divisor))),q=divideGridQuestion({divisor,quotient,remainder:0});return {...q,decimalPlaces:1,solution:String(quotient/10),uniqueKey:'decimal-divide:'+q.a+':'+divisor,prompt:'小数点の位置をそろえて、わり算のひっ算をしよう。'};
}