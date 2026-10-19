import assert from 'node:assert/strict';
import {polygonLesson,polygonSvg} from './polygon-lesson.mjs';
for(let i=0;i<3000;i++){const q=polygonLesson(i),svg=polygonSvg(q),pts=svg.match(/points="([^"]+)"/)[1].split(' ').map(s=>s.split(',').map(Number));assert.equal(pts.length,q.n);const lengths=pts.map((p,j)=>Math.hypot(p[0]-pts[(j+1)%q.n][0],p[1]-pts[(j+1)%q.n][1]));assert(lengths.every(l=>Math.abs(l-lengths[0])<1e-8));assert.equal(q.answer,q.mode===0?pts.length:q.mode===1?360/pts.length:pts.length*q.side);assert(!svg.includes('NaN'));assert(Number.isInteger(q.answer));}
console.log('PASS 3000 regular polygon diagrams, equal sides, answers, all 3 tasks');
