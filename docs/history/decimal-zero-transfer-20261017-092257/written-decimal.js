const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function decimalWrittenQuestion(type){
 const subtract=type==='upper_decimal_sub',a=subtract?r(4000,9999):r(100,4999),b=subtract?r(100,3999):r(100,4999),slots=[],result=Array(4).fill(null),carries=Array(4).fill(null),names=['100分の1','10分の1','一','十'];let incoming=0;
 const digit=(n,p)=>Math.floor(n/10**p)%10,add=(value,label,transfer=false)=>{const index=slots.length;slots.push({value,label,transfer});return {slot:index,small:transfer};};
 for(let p=0;p<4;p++){const raw=subtract?digit(a,p)-incoming-digit(b,p):digit(a,p)+digit(b,p)+incoming,transfer=subtract?Number(raw<0):Math.floor(raw/10);result[p]=add((raw+10)%10,names[p]+'の位を計算しよう');if(p<3)carries[p+1]=add(transfer,subtract?'上の位からかりたら1、かりなければ0':'次の位へくり上がる数（ないときは0）',true);incoming=transfer;}
 const operand=n=>Array.from({length:4},(_,p)=>p===3&&n<1000?null:{text:digit(n,p)});
 return {kind:'written-calculation',multiplicationGrid:true,decimalPlaces:2,subtract,a,b,width:4,slots,rows:[{label:'位をそろえる',cells:operand(a)},{label:subtract?'−':'＋',cells:operand(b),rule:true},{label:subtract?'かりた数':'くり上がり',cells:carries,carryRow:true},{label:'答え',cells:result}],answer:slots.map(s=>s.value).join(''),solution:String((subtract?a-b:a+b)/100),keypad:'number',uniqueKey:'decimal-written:'+type+':'+a+':'+b,prompt:'小数点をそろえて、同じ位どうしをひっ算しよう。'};
}