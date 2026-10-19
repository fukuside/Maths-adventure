export function outline(shape,rotation=0,scale=1){
 const points={triangle:'0,-45 -45,35 45,35',rectangle:'-50,-30 50,-30 50,30 -50,30',square:'-36,-36 36,-36 36,36 -36,36',parallelogram:'-30,-30 55,-30 30,30 -55,30',trapezoid:'-25,-30 25,-30 55,30 -55,30',pentagon:'0,-45 43,-14 26,36 -26,36 -43,-14'};
 return `<svg viewBox="0 0 180 180" width="100%" style="max-width:190px" role="img" aria-label="形の図"><g transform="translate(90 90) rotate(${rotation}) scale(${scale})" fill="#bce6f1" stroke="#305d7d" stroke-width="3">${shape==='circle'?'<circle r="40"/>':`<polygon points="${points[shape]}"/>`}</g></svg>`;
}
function row(n,color,mode){
 const icons=Array.from({length:n},(_,i)=>mode==='capacity'?`<g transform="translate(${15+i*32} 12)"><path d="M2 2 L5 48 H23 L26 2" fill="none" stroke="#304c60" stroke-width="2"/><path d="M5 14 L8 44 H20 L23 14Z" fill="${color}"/></g>`:`<rect x="${15+i*32}" y="15" width="32" height="32" fill="${color}" stroke="#fff" stroke-width="2"/>`).join('');
 return `<svg viewBox="0 0 285 75" width="100%" style="max-width:450px" role="img" aria-label="${mode==='capacity'?'同じ量の水が入ったコップ':'同じ大きさのます'}の図">${icons}</svg>`;
}
function areaDiagram(v){
 const rect=(w,h,c,label,cx)=>{const size=23,x=cx-w*size/2,y=175-h*size;return `<text x="${cx}" y="25" text-anchor="middle" fill="${c}" font-size="20">${label}</text>`+Array.from({length:w*h},(_,i)=>`<rect x="${x+i%w*size}" y="${y+Math.floor(i/w)*size}" width="${size}" height="${size}" fill="${c}" stroke="#fff" stroke-width="1.5"/>`).join('');};
 return `<svg viewBox="0 0 400 200" role="img" aria-label="同じ大きさの正方形で広さを比べる2枚の紙" style="width:100%;max-width:520px">${rect(v.aw,v.ah,'#ed7289','あか',100)}${rect(v.bw,v.bh,'#58b5e0','あお',300)}</svg>`;
}
function waterDiagram(v){
 const vessel=(w,n,c,label,cx)=>{const x=cx-w/2,bottom=220,height=w===120?180:150,depth=n*1200/w;let marks='';for(let i=1;i<=Math.floor(w*height/1200);i++){const y=bottom-i*1200/w;marks+=`<line x1="${x+w-14}" y1="${y}" x2="${x+w}" y2="${y}" stroke="#29485c" stroke-width="2"/>`;}
 return `<text x="${cx}" y="25" text-anchor="middle" fill="${c}" font-size="20">${label}</text><rect x="${x}" y="${bottom-depth}" width="${w}" height="${depth}" fill="${c}" opacity=".8"/><path d="M${x-8} ${bottom-height} H${x} V${bottom} H${x+w} V${bottom-height} H${x+w+8}" fill="none" stroke="#29485c" stroke-width="3"/>${marks}`;};
 return `<svg viewBox="0 0 400 245" role="img" aria-label="大きさの違う容器に入れた水。同じ量ずつの目盛りで比較" style="width:100%;max-width:520px;background:#f4fbff;border-radius:16px">${vessel(v.aw,v.a,'#ed7289','あか',100)}${vessel(v.bw,v.b,'#58b5e0','あお',300)}</svg>`;
}
export default {kind:'shape-lesson',render(q,{escapeHtml:e}){
 const v=q.visual;
 const art=v.mode==='area'?areaDiagram(v):v.mode==='capacity'?waterDiagram(v):v.mode==='outline'?outline(v.shape,v.rotation,v.scale):`<div style="max-width:500px;margin:auto"><div><strong style="color:#ff9fae;font-size:18px">あか</strong>${row(v.a,'#ed7289',v.mode)}</div><div><strong style="color:#90d3ff;font-size:18px">あお</strong>${row(v.b,'#58b5e0',v.mode)}</div></div>`;
 const guide=v.mode==='capacity'?'同じ奥行きの、四角い容器だよ。どちらも、めもり1つぶんは同じ水の量。水の高さだけでなく、容器の太さとめもりを見よう。':v.mode==='area'?'紙ぜんたいの広さをくらべよう。たてと横に広がる、同じ大きさのますが手がかりだよ。':'';
 return `<div class="curriculum-question" style="display:block;width:100%"><div style="font-size:clamp(20px,3vw,30px);line-height:1.5">${e(q.prompt)}</div>${art}<p style="font-size:15px">${guide}</p><div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px">${q.choices.map(c=>`<div class="panel" style="padding:12px 5px;font-size:18px"><strong>${e(c.id)}</strong>${q.visual.mode==='outline'&&q.prompt.startsWith('おてほん')?outline({'さんかく':'triangle','しかく':'rectangle','まる':'circle'}[c.label]):''}<p style="font-size:18px;overflow-wrap:anywhere">${e(c.label)}</p></div>`).join('')}</div><p style="font-size:14px">A・B・Cから選んで「こたえる」を押そう。</p></div>`;
}};
