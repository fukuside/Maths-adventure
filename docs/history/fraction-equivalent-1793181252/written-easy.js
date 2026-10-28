export function prepareWritten(q,index=0){
 if(!q||q.kind!=='written-calculation'||q.easyWritten||q.fractionWork||q.seniorFraction)return q;
 q.legacyWritten=!q.rows;q.easyWritten=true;q.support=index<3?'guide':index<7?'practice':'independent';
 if(!q.rows){const result=q.multiply?q.a*q.b:q.subtract?q.a-q.b:q.a+q.b;q.width=Math.max(String(q.a).length,String(result).length);const cells=n=>Array.from({length:q.width},(_,p)=>10**p>n&&p?null:{text:Math.floor(n/10**p)%10});q.rows=[{label:'',cells:cells(q.a)},{label:q.multiply?'×':q.subtract?'−':'＋',cells:cells(q.b),rule:true},{label:'答え',cells:cells(result).map(c=>c?{value:c.text}:null)}];}
 const original=q.slots||[],groups=[],slots=[];q.rows=q.rows.map(row=>({...row,cells:row.cells.map(c=>c?{...c}:null)}));
 const workRows=q.rows.filter(row=>!row.carryRow&&row.cells.some(c=>c&&(c.slot!==undefined||c.value!==undefined)));
 for(const row of q.rows){
  if(row.carryRow){row.cells=row.cells.map(c=>c?.slot!==undefined?{text:original[c.slot].value,small:true}:c);continue;}
  let candidates=row.cells.map((c,p)=>({c,p})).filter(({c})=>c&&(c.slot!==undefined||c.value!==undefined));if(!candidates.length)continue;
  const val=c=>c.value??original[c.slot].value;
  while(candidates.length>1&&val(candidates.at(-1).c)===0&&candidates.at(-1).p>=(row===workRows.at(-1)&&q.decimalPlaces?Number(q.decimalPlaces)+1:1)){const x=candidates.pop();row.cells[x.p]=null;}
  if(q.support==='guide'&&workRows.indexOf(row)>0&&row!==workRows.at(-1)){for(const {c,p} of candidates)row.cells[p]={text:val(c)};continue;}
  candidates.reverse();const start=slots.length,label=row.label||'途中の計算';
  for(const {c,p} of candidates){const n=val(c);row.cells[p]={slot:slots.length};slots.push({value:n,label});}
  groups.push({start,end:slots.length,label});
 }
 q.slots=slots;q.groups=groups;q.answer=slots.map(s=>s.value).join('');return q;
}
export function writtenActiveSlot(q,input='') {
 if(Number.isInteger(q.inputCursor)) return q.inputCursor;
 const empty=String(input).indexOf('_');return empty>=0?empty:String(input).length;
}
export function editWrittenInput(q,input,value) {
 if(!q?.easyWritten||q.division)return null;
 if(value==='clear'){q.inputCursor=0;q.manualSlot=false;return '';}
 const values=Array.from({length:q.slots.length},(_,i)=>String(input)[i]??'_');
 let index=writtenActiveSlot(q,input);
 if(value==='back'){index=q.manualSlot?Math.min(index,values.length-1):Math.max(0,Math.min(index-1,values.length-1));values[index]='_';q.inputCursor=index;q.manualSlot=false;}
 else if(/^\d$/.test(value)){
  if(index>=values.length)return input;values[index]=value;q.manualSlot=false;
  let next=values.findIndex((v,i)=>i>index&&v==='_');if(next<0)next=values.indexOf('_');q.inputCursor=next<0?values.length:next;
 }else return input;
 return values.join('').replace(/_+$/,'');
}
export function renderEasyWritten(q,{escapeHtml:e,input='',inputEnabled=true}){
 const value=String(input),active=writtenActiveSlot(q,value),guide=q.support==='guide';
 const g=q.groups.find(g=>active>=g.start&&active<g.end);
 const board=q.rows.map((row,ri)=>`<div class="easy-written-row ${row.carryRow?'easy-carry-row':''} ${row.rule?'easy-written-rule':''}" style="--written-columns:${q.width}"><span class="easy-written-label">${e(row.label)}</span>${[...row.cells].reverse().map((c,ci)=>`<span class="easy-written-cell ${row.carryRow||c?.small?'easy-written-small':''}">${!c?'':c.slot!==undefined?`<button type="button" data-action="written-slot" data-slot="${c.slot}" class="written-slot ${c.slot===active?'written-active':''}" ${c.slot===active?'aria-current="step"':''} aria-label="${e(q.slots[c.slot].label)}・入力欄${c.slot+1}" ${!inputEnabled?'disabled':''}>${e(value[c.slot]&&value[c.slot]!=='_'?value[c.slot]:'□')}</button>`:e(c.text??'')}${!row.carryRow&&(!row.decimalSkip||(q.decimalProduct&&ri<2))&&(q.decimalProduct?(ri<2||ri===q.rows.length-1)&&ci===q.width-(ri<2?1:2)-1:q.decimalPlaces&&ci===q.width-q.decimalPlaces-1)?'<b class="easy-decimal-point">.</b>':''}</span>`).join('')}</div>`).join('');
 return `<div class="curriculum-question written-question"><p class="written-heading">${e(q.originalExpression||q.prompt)}</p><div class="easy-written-board">${board}</div><p class="written-step" role="status">${g?e(g.label)+'の、青いマスに入力しよう。':'できたね。「こたえの決定」でたしかめよう。'}</p><p class="easy-written-help">入力したいマスをタップすると、どこからでも書けるよ。小さい数字は、くり上がり・かりた数のヒント。</p>${guide?'<p class="easy-written-help">'+(q.division?'たてる → かける → ひく → 下ろす。':q.multiply?'位ごとにかけて、途中の答えを合わせよう。':'同じ位どうしを計算しよう。')+'</p>':''}</div>`;
}

export function writtenAnswerComplete(q,input){
 const value=String(input);return q.easyWritten?value.length===q.slots.length&&/^\d+$/.test(value):value.length===String(q.answer).length;
}
export function checkWrittenAnswer(q,input){
 if(!writtenAnswerComplete(q,input))return false;
 return q.easyWritten?q.slots.every((slot,i)=>Number(String(input)[i])===slot.value):String(input)===String(q.answer);
}
