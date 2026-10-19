import base from '../../elementary-expansion/renderers/curriculum.js';
export default {kind:'line-graph-lesson',render(q,context){
 const x=i=>65+i*90,y=v=>220-v*6;
 const grid=Array.from({length:7},(_,i)=>`<path d="M65 ${y(i*5)} H335" stroke="#63788b" stroke-width="1"/><text x="52" y="${y(i*5)+5}" text-anchor="end" fill="currentColor" font-size="14">${i*5}</text>`).join('');
 const ticks=[9,11,13,15].map((h,i)=>`<text x="${x(i)}" y="247" text-anchor="middle" fill="currentColor" font-size="14">${h}時</text>`).join('');
 const svg=`<svg viewBox="0 0 400 270" width="100%" style="max-width:500px" role="img" aria-label="時刻と気温の折れ線グラフ"><text x="15" y="25" fill="currentColor" font-size="14">℃</text>${grid}<path d="M65 30 V220 H335" fill="none" stroke="currentColor" stroke-width="2"/>${ticks}<polyline points="${q.values.map((v,i)=>`${x(i)},${y(v)}`).join(' ')}" fill="none" stroke="#ffd45c" stroke-width="3"/>${q.values.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="5" fill="#ffd45c"/>`).join('')}</svg>`;
 return base.render({...q,visual:undefined},context).replace('</div><div style="display:grid',`</div>${svg}<div style="display:grid`);
}};
