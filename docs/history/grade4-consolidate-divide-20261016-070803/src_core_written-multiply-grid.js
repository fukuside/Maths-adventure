const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function multiplyGridQuestion(type){
 const a=type==='upper_mul3'?r(100,999):r(12,99),b=type==='upper_mul3'?r(2,9):r(12,99),n=String(a).length,m=String(b).length,width=n+m,slots=[],rows=[],partials=[];
 const digit=(v,p)=>Math.floor(v/10**p)%10;
 const add=(value,label,transfer=false)=>{const index=slots.length;slots.push({value,label,transfer});return {slot:index,small:transfer};};
 const operand=v=>Array.from({length:width},(_,p)=>10**p>v&&p>0?null:{text:digit(v,p)});
 rows.push({label:'',cells:operand(a)},{label:'×',cells:operand(b),rule:true});
 for(let j=0;j<m;j++){const result=Array(width).fill(null),carries=Array(width).fill(null),factor=digit(b,j);let carry=0;
  for(let p=0;p<n;p++){const v=digit(a,p)*factor+carry;result[p+j]=add(v%10,(j===0?'一':'十')+'の位の数でかける：'+['一','十','百'][p]+'の位の答え');carry=Math.floor(v/10);if(p<n-1)carries[p+j+1]=add(carry,'次の位へのくり上がり',true);}
  result[n+j]=add(carry,'最後のくり上がり（ないときは0）');
  rows.push({label:'くり上がり',cells:carries},{label:m===1?'答え':j===0?'一の位で×':'十の位で×',cells:result,rule:j===m-1&&m>1});partials.push(a*factor*10**j);
 }
 if(m>1){let carry=0;const result=Array(width).fill(null),carries=Array(width).fill(null);for(let p=0;p<width;p++){const v=partials.reduce((s,x)=>s+digit(x,p),0)+carry;result[p]=add(v%10,['一','十','百','千'][p]+'の位：途中の答えをたそう');carry=Math.floor(v/10);if(p<width-1)carries[p+1]=add(carry,'足し算のくり上がり',true);}rows.push({label:'くり上がり',cells:carries},{label:'全部の答え',cells:result});}
 return {kind:'written-calculation',multiply:true,multiplicationGrid:true,a,b,width,slots,rows,answer:slots.map(s=>s.value).join(''),solution:String(a*b),keypad:'number',uniqueKey:type+':'+a+':'+b,prompt:'一の位から、かけ算のひっ算をしよう。'};
}
export function renderMultiplyGrid(q,{escapeHtml:e,input=''}){
 const value=String(input),active=value.length,cell=c=>c?.slot!==undefined?'<span class="written-slot '+(c.small?'written-small ':'')+(c.slot===active?'written-active':'')+'" '+(c.slot===active?'aria-current="step"':'')+'>'+e(value[c.slot]??'□')+'</span>':c?.text!==undefined?e(c.text):'';
 return '<div class="curriculum-question written-question"><p class="written-heading">'+e(q.prompt)+'</p><div class="multiply-board" style="--multiply-columns:'+q.width+'">'+q.rows.map(row=>'<div class="multiply-row '+(row.rule?'multiply-rule':'')+'"><span class="multiply-label">'+e(row.label)+'</span>'+[...row.cells].reverse().map(c=>'<span class="multiply-cell">'+cell(c)+'</span>').join('')+'</div>').join('')+'</div><p class="written-step" role="status">'+(active<q.slots.length?e(q.slots[active].label)+'を青い枠へ。':'全部うまったね。「こたえの決定」でたしかめよう。')+'</p><p class="muted">'+(String(q.b).length===2?'十の位でかけた答えは、1けた左にずらして書くよ。':'かけた答えに、前の位からのくり上がりをたそう。')+'</p></div>';
}