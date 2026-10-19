import {multiplyGridQuestion} from './written-multiply-grid.js';
import {divideGridQuestion} from './written-divide-grid.js';
const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function seniorDecimal(model){
 if(model==='decimalMultiply5'){const a=r(11,29),b=r(11,29),q=multiplyGridQuestion('upper_mul2',{a,b});return {...q,decimalProduct:true,decimalPlaces:2,solution:String(a*b/100),uniqueKey:model+':'+a+':'+b,prompt:(a/10).toFixed(1)+' × '+(b/10).toFixed(1)+' を、ひっ算で計算しよう。'};}
 if(model!=='decimalDivide5')throw Error('Unknown decimal model');
 const divisor=r(3,9),quotient=r(Math.ceil(100/divisor),49),q=divideGridQuestion({divisor,quotient,remainder:0});
 return {...q,decimalPlaces:1,solution:String(quotient/10),uniqueKey:model+':'+q.a+':'+divisor,originalExpression:(q.a/100).toFixed(2)+' ÷ '+(divisor/10).toFixed(1),transformHint:'わる数と、わられる数を両方10倍にするよ。商は変わらないよ。'};
}
