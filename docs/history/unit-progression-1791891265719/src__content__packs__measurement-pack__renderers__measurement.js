import base from '../../elementary-expansion/renderers/curriculum.js';
export function measurementSvg(v){
 if(v?.ruler){
  const {start,length,max,unit}=v.ruler;
  const x=n=>35+n/max*570;
  const step=unit==='cm'?10:1;
  const ticks=Array.from({length:max/step+1},(_,i)=>{const n=i*step,major=n%10===0;return `<path d="M${x(n)} 95 V${major?118:108}" stroke="#273c50"/>${major?`<text x="${x(n)}" y="140" text-anchor="middle" font-size="12" fill="#273c50">${unit==='cm'?n/10:n}</text>`:''}`;}).join('');
  return `<svg viewBox="0 0 650 160" width="100%" role="img" aria-label="${unit}の目もり付きものさしと、測るもの"><rect x="25" y="92" width="590" height="62" rx="6" fill="#fff1bc"/>${ticks}<path d="M${x(start)} 60 H${x(start+length)}" stroke="#ed7590" stroke-width="17" stroke-linecap="butt"/><path d="M${x(start)} 70 V95 M${x(start+length)} 70 V95" stroke="#a42648" stroke-dasharray="3 3"/><text x="635" y="135" text-anchor="middle" font-size="13" fill="#273c50">${unit}</text></svg>`;
 }
 if(v?.capacity){const amount=v.capacity;return `<svg viewBox="0 0 320 280" width="100%" style="max-width:320px" role="img" aria-label="目もり付き容器の水"><path d="M70 20 V250 H210 V20" fill="#f3f8ff" stroke="#52677c" stroke-width="3"/><rect x="73" y="${250-amount*.22}" width="134" height="${amount*.22}" fill="#6ac8e8"/>${Array.from({length:21},(_,i)=>{const y=250-i*11;return `<path d="M${i%2?190:175} ${y} H210" stroke="#273c50"/>${i%2?'':`<text x="220" y="${y+4}" font-size="12" fill="currentColor">${i*50}</text>`}`;}).join('')}<text x="220" y="15" fill="currentColor" font-size="13">mL</text></svg>`;}
 return '';
}
export default {kind:'measurement-choice',render(q,context){const html=base.render({...q,visual:undefined},context);return html.replace('</div><div style="display:grid',`</div>${measurementSvg(q.visual)}<div style="display:grid`);}};
