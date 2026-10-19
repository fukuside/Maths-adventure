const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function positionLesson(index){
  const space=index>=6,axis=space?[0,1,2,2][index-6]:index%2,x=r(1,4),y=r(1,4),z=r(1,4);
  const names=space?['右','奥','高さ']:['右','上'];
  return {kind:'position-lesson',space,axis,x,y,z,answer:[x,y,z][axis],keypad:'number',prompt:space?'赤い点の場所を、右・奥・高さの3つの数で表そう。':'地図の赤い点の場所を、右・上の2つの数で表そう。',guide:space?'2つの図は同じ赤い点を表しています。青い「はじめ」から数えよう。':'線が交わる場所を見よう。青い「はじめ」から、右と上へ数えよう。',names,uniqueKey:'position:'+index+':'+x+':'+y+':'+z};
}
function grid(q,horizontal,vertical,verticalName){
  const ox=48,oy=210,step=36,px=ox+horizontal*step,py=oy-vertical*step;
  let lines='',labels='';for(let i=0;i<=4;i++){const a=ox+i*step,b=oy-i*step;lines+=`<path d="M${a} 66V210M48 ${b}H192" stroke="#b3c9d8" stroke-width="1"/>`;labels+=`<text x="${a}" y="230" text-anchor="middle">${i}</text><text x="32" y="${b+5}" text-anchor="middle">${i}</text>`;}
  return `<svg viewBox="0 0 255 265" role="img" aria-label="横は右、たては${verticalName}。赤い点の位置を読む方眼" style="width:100%;max-width:330px;display:block;background:#f1faff;border-radius:12px;text-shadow:none;color:#173e51"><g font-size="15" fill="#173e51">${lines}<path d="M48 66V210H192" fill="none" stroke="#286481" stroke-width="3"/>${labels}<text x="203" y="214">右</text><text x="48" y="45" text-anchor="middle">${verticalName}</text><text x="48" y="255" text-anchor="middle" fill="#2167b0">はじめ</text><path d="M48 ${py}H${px}V210" fill="none" stroke="#ce4854" style="stroke:#ce4854!important" stroke-width="2" stroke-dasharray="5 4"/><circle data-position-point cx="${px}" cy="${py}" r="7" fill="#ce3548" style="fill:#ce3548!important;stroke:white!important" stroke="white" stroke-width="2"/></g></svg>`;
}
export function renderPositionLesson(q,{escapeHtml:e}){
  const values=[q.x,q.y,q.z],names=q.names;
  const address=names.map((name,i)=>`${name} ${i===q.axis?'□':values[i]}`).join('、');
  return `<div class="curriculum-question geometry-question"><div class="text-question">${e(q.prompt)}</div><div style="display:flex;justify-content:center;gap:8px;margin:10px 0">${q.space?`<div style="width:50%;min-width:0"><p style="margin:0 0 5px;font-size:16px">上から見た図</p>${grid(q,q.x,q.y,'奥')}</div><div style="width:50%;min-width:0"><p style="margin:0 0 5px;font-size:16px">正面から見た図</p>${grid(q,q.x,q.z,'高さ')}</div>`:grid(q,q.x,q.y,'上')}</div><div data-position-address data-position-axis="${q.axis}" style="padding:10px;background:#e7f8ff;border-radius:10px;color:#173e51;text-shadow:none;font-size:20px;font-weight:bold">（${e(address)}）</div><p style="margin:8px 0;font-size:17px">□に入る数はいくつ？ 1目もりは1。</p><p style="font-size:15px;margin:0">${e(q.guide)}</p></div>`;
}
