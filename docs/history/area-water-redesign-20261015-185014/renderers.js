export function outline(shape,rotation=0,scale=1){
 const points={triangle:'0,-45 -45,35 45,35',rectangle:'-50,-30 50,-30 50,30 -50,30',square:'-36,-36 36,-36 36,36 -36,36',parallelogram:'-30,-30 55,-30 30,30 -55,30',trapezoid:'-25,-30 25,-30 55,30 -55,30',pentagon:'0,-45 43,-14 26,36 -26,36 -43,-14'};
 return `<svg viewBox="0 0 180 180" width="100%" style="max-width:190px" role="img" aria-label="形の図"><g transform="translate(90 90) rotate(${rotation}) scale(${scale})" fill="#bce6f1" stroke="#305d7d" stroke-width="3">${shape==='circle'?'<circle r="40"/>':`<polygon points="${points[shape]}"/>`}</g></svg>`;
}
function row(n,color,mode){
 const icons=Array.from({length:n},(_,i)=>mode==='capacity'?`<g transform="translate(${15+i*32} 12)"><path d="M2 2 L5 48 H23 L26 2" fill="none" stroke="#304c60" stroke-width="2"/><path d="M5 14 L8 44 H20 L23 14Z" fill="${color}"/></g>`:`<rect x="${15+i*32}" y="15" width="32" height="32" fill="${color}" stroke="#fff" stroke-width="2"/>`).join('');
 return `<svg viewBox="0 0 285 75" width="100%" style="max-width:450px" role="img" aria-label="${mode==='capacity'?'同じ量の水が入ったコップ':'同じ大きさのます'}の図">${icons}</svg>`;
}
export default {kind:'shape-lesson',render(q,{escapeHtml:e}){
 const v=q.visual;
 const art=v.mode==='outline'?outline(v.shape,v.rotation,v.scale):`<div style="max-width:500px;margin:auto"><div><strong style="color:#ff9fae;font-size:18px">あか</strong>${row(v.a,'#ed7289',v.mode)}</div><div><strong style="color:#90d3ff;font-size:18px">あお</strong>${row(v.b,'#58b5e0',v.mode)}</div></div>`;
 const guide=v.mode==='capacity'?'コップは同じ形で、1こに入った水の量も同じだよ。':v.mode==='area'?'1つのますは、どれも同じ大きさだよ。':'';
 return `<div class="curriculum-question" style="display:block;width:100%"><div style="font-size:clamp(20px,3vw,30px);line-height:1.5">${e(q.prompt)}</div>${art}<p style="font-size:15px">${guide}</p><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px">${q.choices.map(c=>`<div class="panel" style="padding:12px 5px;font-size:18px"><strong>${e(c.id)}</strong>${q.visual.mode==='outline'&&q.prompt.startsWith('おてほん')?outline({'さんかく':'triangle','しかく':'rectangle','まる':'circle'}[c.label]):''}<p style="font-size:18px;overflow-wrap:anywhere">${e(c.label)}</p></div>`).join('')}</div><p style="font-size:14px">A・B・Cから選んで「こたえる」を押そう。</p></div>`;
}};
