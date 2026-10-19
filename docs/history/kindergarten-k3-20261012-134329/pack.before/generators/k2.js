const symbols = ["apple", "star", "ball", "flower", "fish", "leaf"];
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
const pick = items => items[Math.floor(Math.random() * items.length)];
function shuffle(items) {
  const result = [...items];
  for (let i=result.length-1; i>0; i--) {
    const j=Math.floor(Math.random()*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}
function options(correct, min=1, max=10) {
  const wrongs=shuffle(range(min,max).filter(value=>value!==correct)).slice(0,2);
  const choices=shuffle([correct,...wrongs]).map((value,index)=>({id:"ABC"[index],label:String(value),value}));
  return {choices,answer:choices.find(choice=>choice.value===correct).id};
}
export default {
  types: ["k2_count","k2_numeral","k2_number_group","k2_increase","k2_decrease","k2_next"],
  build(stage) {
    const symbol=pick(symbols);
    let mode, count, beforeCount, correct, prompt;
    switch(stage.type) {
      case "k2_count": mode="count"; count=pick(range(6,10)); correct=count; prompt="いくつ ある？"; break;
      case "k2_numeral": mode="numeral"; count=pick(range(1,10)); correct=count; prompt="おなじ すうじは どれ？"; break;
      case "k2_number_group": mode="number-group"; count=pick(range(6,10)); correct=count; prompt=`${count}こ あるのは どれ？`; break;
      case "k2_increase": mode="increase"; beforeCount=pick(range(1,9)); correct=beforeCount+1; prompt="1こ ふえたら？"; break;
      case "k2_decrease": mode="decrease"; beforeCount=pick(range(2,10)); correct=beforeCount-1; prompt="1こ へったら？"; break;
      case "k2_next": mode="next"; beforeCount=pick(range(1,9)); correct=beforeCount+1; prompt="つぎの かずは？"; break;
      default: throw new Error(`未対応のK2形式: ${stage.type}`);
    }
    const selection=options(correct,stage.type==="k2_count"||stage.type==="k2_number_group"?6:1,10);
    return {kind:"k2-choice",mode,symbol,count,beforeCount,prompt,...selection,
      uniqueKey:`${stage.type}:${["numeral","next"].includes(mode)?"number":symbol}:${count??beforeCount}:${selection.choices.map(c=>c.value).sort((a,b)=>a-b).join(",")}`};
  }
};
