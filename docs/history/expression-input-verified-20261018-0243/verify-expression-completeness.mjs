import assert from 'node:assert/strict';import {isCompleteExpressionInput as complete} from './expression-completeness.mjs';
for(const op of ['+','-','*','/'])for(let a=1;a<10;a++)for(let b=1;b<10;b++){assert(complete(a+op+b+'=3'));for(const s of [String(a),a+op,a+op+b,a+op+b+'='])assert(!complete(s));}
for(const s of ['1.2+3.4=4.6','９＋８＝１７','2×3=6','8÷2=4','4-7=-3'])assert(complete(s));for(const s of ['','1+2=','1.','1+2=3.','1+2==3'])assert(!complete(s));assert(complete('9+9=3'));console.log('PASS complete/incomplete syntax; incorrect complete answers still reach grading');
