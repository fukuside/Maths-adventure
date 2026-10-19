import {decimalWrittenQuestion} from '../../../../core/written-decimal.js';
import {multiplyGridQuestion} from '../../../../core/written-multiply-grid.js';
import {largeNumberQuestion} from '../../../../core/large-number-question.js';
const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {
 types:['upper_mul3','upper_mul2','upper_weight_t','upper_trillion','upper_thousandths','upper_decimal_add','upper_decimal_sub'],
 build(stage){
  if(['upper_decimal_add','upper_decimal_sub'].includes(stage.type))return decimalWrittenQuestion(stage.type);
  if(['upper_mul3','upper_mul2'].includes(stage.type))return multiplyGridQuestion(stage.type);
  if(stage.type==='upper_trillion') return largeNumberQuestion(5);
  let prompt,result,operands;
  switch(stage.type){
   case 'upper_mul3':{const a=r(100,999),b=r(2,9);prompt=`${a}×${b}はいくつ？`;result=a*b;operands=[a,b];break;}
   case 'upper_mul2':{const a=r(12,99),b=r(12,99);prompt=`${a}×${b}はいくつ？`;result=a*b;operands=[a,b];break;}
   case 'upper_weight_t':{const a=r(1,9),b=r(1,9)*100;prompt=`${a}t ${b}kgは何kg？`;result=a*1000+b;operands=[a,b];break;}
   case 'upper_trillion':{const a=r(1,9),b=r(1,9);prompt=`${a}兆${b}千億は、何千億？`;result=a*10+b;operands=[a,b];break;}
   case 'upper_thousandths':{const a=r(1,9),b=r(0,9),c=r(0,9),d=r(0,9);prompt=`${a}.${b}${c}${d}の1000分の1の位の数字は？`;result=d;operands=[a,b,c,d];break;}
   case 'upper_decimal_add':{const a=r(100,9999),b=r(100,9999);prompt=`${(a/100).toFixed(2)}＋${(b/100).toFixed(2)}はいくつ？`;result=(a+b)/100;operands=[a,b];break;}
   case 'upper_decimal_sub':{const a=r(1000,9999),b=r(100,a-1);prompt=`${(a/100).toFixed(2)}−${(b/100).toFixed(2)}はいくつ？`;result=(a-b)/100;operands=[a,b];break;}
   default:throw Error('Unknown upper basic type');
  }
  const label=String(Number(result.toFixed(2))),delta=stage.type.includes('decimal')?.01:1;
  const vals=[label,String(Number((result+delta).toFixed(2))),String(Number((result+2*delta).toFixed(2)))];
  for(let i=2;i>0;i--){const j=r(0,i);[vals[i],vals[j]]=[vals[j],vals[i]];}
  const choices=vals.map((label,i)=>({id:'ABC'[i],label}));
  return {kind:'curriculum-choice',prompt,choices,answer:choices.find(c=>c.label===label).id,keypad:'choice',solution:result,operands,uniqueKey:stage.type+':'+prompt};
 }
};
