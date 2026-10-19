const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1)),gcd=(a,b)=>b?gcd(b,a%b):a;
export const seniorFractionModels=['reduce','fractionTimesInt','fractionDivideInt','fractionMultiply','fractionDivide'];
export function seniorFraction(model){
 if(!seniorFractionModels.includes(model))throw Error('Unknown fraction operation');
 let n1,d1,n2,d2,n,d;const integer=model.endsWith('Int');
 do{d1=r(2,6);n1=r(1,d1-1);d2=integer?1:r(2,6);n2=integer?r(2,5):r(1,d2-1);
 if(model==='reduce'){n=n1;d=d1;const factor=r(2,3);n1*=factor;d1*=factor;}
 else if(model.startsWith('fractionDivide')){n=n1*d2;d=d1*n2;}
 else{n=n1*n2;d=d1*d2;}
 const factor=gcd(n,d);n/=factor;d/=factor;
 }while(n>9||d>9||d===1);
 const slots=[{value:n,label:'約分した答えの分子'},{value:d,label:'約分した答えの分母'}];
 return {kind:'written-calculation',seniorFraction:true,multiplicationGrid:true,model,n1,d1,n2,d2,integer,slots,answer:''+n+d,solution:n+'/'+d,keypad:'number',prompt:model==='reduce'?'同じ数で分子と分母をわって、約分しよう。':'分数を計算し、約分した答えを作ろう。',uniqueKey:model+':input:'+n1+':'+d1+':'+n2+':'+d2};
}
export function renderSeniorFraction(q,{escapeHtml:e,input=''}){
 const active=String(input).length,frac=(n,d)=>'<span class="senior-fraction-value"><span>'+n+'</span><span>'+d+'</span></span>',slot=i=>'<span class="written-slot '+(active===i?'written-active':'')+'" '+(active===i?'aria-current="step" ':'')+'aria-label="'+e(q.slots[i].label)+'">'+e(String(input)[i]??'□')+'</span>',divide=q.model.startsWith('fractionDivide'),operator=divide?'÷':'×';
 return '<div class="curriculum-question written-question senior-fraction-question"><p class="written-heading">'+e(q.prompt)+'</p><div class="senior-fraction-board">'+frac(q.n1,q.d1)+(q.model==='reduce'?' → ':(' '+operator+' '+(q.integer?q.n2:frac(q.n2,q.d2))+' ＝ '))+frac(slot(0),slot(1))+'</div><p class="written-step">'+e(active<2?q.slots[active].label+'を青い枠へ。':'こたえの決定でたしかめよう。')+'</p><p class="muted" style="font-size:16px!important">'+(q.model==='reduce'?'分子と分母を同じ数でわろう。':divide?'わる数を逆数にしてかけよう。':'分子どうし、分母どうしをかけよう。途中で約分してもよいよ。')+'</p></div>';
}
