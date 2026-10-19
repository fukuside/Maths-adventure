const pick=a=>a[Math.floor(Math.random()*a.length)];
const range=(min,max)=>Array.from({length:max-min+1},(_,i)=>min+i);
function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
function choices(correct,pool){const wrongs=shuffle(pool.filter(x=>x!==correct)).slice(0,2);const options=shuffle([correct,...wrongs]).map((value,i)=>({id:"ABC"[i],value,label:String(value)}));return {choices:options,answer:options.find(c=>c.value===correct).id};}
export default {
  types:["k6_count","k6_zero","k6_make5","k6_make10","k6_change","k6_position"],
  build(stage){
    const symbol=pick(["apple","star","ball","flower","fish","leaf"]);
    let mode,prompt,count,total,beforeCount,operation,position,correct,pool;
    if(stage.type==="k6_count"){mode="count";count=pick(range(1,10));correct=count;pool=range(1,10);prompt="いくつ ある？";}
    else if(stage.type==="k6_zero"){mode="zero";correct=0;pool=range(0,5);prompt="なにも はいっていないのは？";}
    else if(stage.type==="k6_make5"||stage.type==="k6_make10"){
      mode="make";total=stage.type==="k6_make5"?5:10;count=pick(total===5?range(1,4):range(5,9));correct=total-count;pool=range(1,total===5?4:5);prompt=`${total}こに するには、あと いくつ？`;
    }else if(stage.type==="k6_change"){
      mode="change";operation=pick(["increase","decrease"]);beforeCount=pick(operation==="increase"?range(1,9):range(1,10));correct=beforeCount+(operation==="increase"?1:-1);pool=range(0,10);prompt=operation==="increase"?"1こ ふえたら？":"1こ へったら？";
    }else if(stage.type==="k6_position"){
      mode="position";position=pick(["TL","TR","BL","BR"]);correct=position;pool=["TL","TR","BL","BR"];prompt="みほんと おなじ ばしょは？";
    }else throw new Error(`未対応のK6形式: ${stage.type}`);
    const selection=choices(correct,pool);
    return {kind:"k6-choice",mode,prompt,symbol,count,total,beforeCount,operation,position,...selection,
      uniqueKey:`${stage.type}:${symbol}:${count??""}:${beforeCount??""}:${operation??""}:${position??""}:${selection.choices.map(c=>c.value).sort().join(",")}`};
  }
};
