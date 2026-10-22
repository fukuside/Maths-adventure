export function prepareWritten(q,index=0){
 if(!q||q.kind!=='written-calculation'||q.easyWritten||q.fractionWork||q.seniorFraction)return q;
 q.easyWritten=true;q.support=index<3?'guide':index<7?'practice':'independent';
 if(!q.rows){const result=q.multiply?q.a*q.b:q.subtract?q.a-q.b:q.a+q.b;q.width=Math.max(String(q.a).length,String(result).length);const cells=n=>Array.from({length:q.width},(_,p)=>10**p>n&&p?null:{text:Math.floor(n/10**p)%10});q.rows=[{label:'',cells:cells(q.a)},{label:q.multiply?'×':q.subtract?'−':'＋',cells:cells(q.b),rule:true},{label:'答え',cells:cells(result).map(c=>c?{value:c.text}:null)}];}
 const original=q.slots||[],groups=[],slots=[];q.rows=q.rows.map(row=>({...row,cells:row.cells.map(c=>c?{...c}:null)}));
 const workRows=q.rows.filter(row=>!row.carryRow&&row.cells.some(c=>c&&(c.slot!==undefined||c.value!==undefined)));
 for(const row of q.rows){
  if(row.carryRow){row.cells=row.cells.map(c=>c?.slot!==undefined?{text:original[c.slot].value,small:true}:c);continue;}
  let candidates=row.cells.map((c,p)=>({c,p})).filter(({c})=>c&&(c.slot!==undefined||c.value!==undefined));if(!candidates.length)continue;
  const val=c=>c.value??original[c.slot].value;
  while(candidates.length>1&&val(candidates.at(-1).c)===0&&candidates.at(-1).p>=(q.decimalPlaces?Number(q.decimalPlaces)+1:1)){const x=candidates.pop();row.cells[x.p]=null;}
  if(q.support==='guide'&&workRows.indexOf(row)>0&&row!==workRows.at(-1)){for(const {c,p} of candidates)row.cells[p]={text:val(c)};continue;}
  candidates.reverse();const start=slots.length,label=row.label||'途中の計算';
  for(const {c,p} of candidates){const n=val(c);row.cells[p]={slot:slots.length};slots.push({value:n,label});}
  groups.push({start,end:slots.length,label});
 }
 q.slots=slots;q.groups=groups;q.answer=slots.map(s=>s.value).join('');return q;
}
export function renderEasyWritten(q,{escapeHtml:e,input=''}){
 const active=String(input).length,g=q.groups.find(g=>active<g.end),guide=q.support==='guide';
 const board=q.rows.map((row,ri)=>`<div style="display:flex;justify-content:flex-end;align-items:center;min-height:42px;${row.rule?'border-top:2px solid #31566c;':''}"><span style="font-size:14px;flex:1;text-align:left">${e(row.label)}</span>${[...row.cells].reverse().map((c,ci)=>`<span style="width:36px;display:inline-block;text-align:center;${row.carryRow?'font-size:16px;color:#527085;':'font-size:25px;'}">${!c?'':c.slot!==undefined?`<span class="written-slot ${g&&c.slot>=g.start&&c.slot<g.end?'written-active':''}" ${c.slot===active?'aria-current="step"':''}>${e(String(input)[c.slot]??'□')}</span>`:e(c.text??'')}${!row.carryRow&&!row.decimalSkip&&(q.decimalProduct?(ri<2||ri===q.rows.length-1)&&ci===q.width-(ri<2?1:2)-1:q.decimalPlaces&&ci===q.width-q.decimalPlaces-1)?'<b style="font-size:20px">.</b>':''}</span>`).join('')}</div>`).join('');
 return `<div class="curriculum-question written-question"><p class="written-heading">${e(q.originalExpression||q.prompt)}</p><div style="max-width:500px;margin:auto;background:#f4fbff;color:#17354a;padding:14px;border-radius:14px;text-shadow:none">${board}</div><p class="written-step" role="status">${g?e(g.label)+'を、ふつうの順に入力しよう。':'できたね。「こたえの決定」でたしかめよう。'}</p>${q.support!=='independent'?'<p style="font-size:16px">21なら「2 → 1」。位は自動でそろうよ。先頭の0は入力しなくていいよ。</p>':''}${guide?'<p style="font-size:15px">'+(q.division?'たてる → かける → ひく → 下ろす。青い段を順番に考えよう。':q.multiply?'位ごとにかけて、途中の答えを合わせよう。':'同じ位どうしを計算しよう。小さい数字はくり上がり・かりた数のヒントだよ。')+'</p>':''}</div>`;
}
