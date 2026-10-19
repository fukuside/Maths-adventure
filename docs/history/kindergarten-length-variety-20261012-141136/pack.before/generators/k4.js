const pick=a=>a[Math.floor(Math.random()*a.length)];
function choices(values,correct){
  const list=[...values];for(let i=list.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[list[i],list[j]]=[list[j],list[i]];}
  const options=list.map((value,i)=>({id:"ABC"[i],value,label:String(value)}));
  return {choices:options,answer:options.find(c=>c.value===correct).id};
}
export default {
  types:["k4_size","k4_length","k4_height","k4_weight","k4_quantity","k4_same"],
  build(stage){
    const color=pick(["blue","pink","green"]);let mode,values,correct,prompt,target;
    if(stage.type==="k4_size"){mode="size";const low=pick([0.45,0.55,0.65]);values=[low,1];correct=1;prompt="おおきい おさらは どっち？";}
    else if(stage.type==="k4_length"){mode="length";const low=pick([2,3,4]);values=[low,low+3];correct=low+3;prompt="ながい えんぴつは どっち？";}
    else if(stage.type==="k4_height"){mode="height";const low=pick([1,2,3]);values=[low,low+2];correct=low+2;prompt="たかい つみきは どっち？";}
    else if(stage.type==="k4_weight"){mode="weight";values=[1,2];correct=2;prompt="おもいのは どっち？";}
    else if(stage.type==="k4_quantity"){mode="quantity";const low=pick([1,2,3,4,5,6,7,8]);const high=pick(Array.from({length:9-low},(_,i)=>low+2+i));const more=pick([true,false]);values=[low,high];correct=more?high:low;prompt=more?"おおいのは どっち？":"すくないのは どっち？";}
    else if(stage.type==="k4_same"){mode="same";target=pick([3,4,5,6]);values=[target-2,target,target+2];correct=target;prompt="おなじ ながさの えんぴつは？";}
    else throw new Error(`未対応のK4形式: ${stage.type}`);
    const selection=choices(values,correct);
    // 天びんの2物体は色や大きさだけで重さが決まらないよう、左右をランダムにする。
    const weightItems=pick([true,false])?["apple","ball"]:["ball","apple"];
    return {kind:"k4-choice",mode,color,prompt,target,...selection,weightItems,
      uniqueKey:`${stage.type}:${color}:${prompt}:${target??""}:${values.join(",")}:${mode==="weight"?selection.choices.map(c=>c.value).join(",")+":"+weightItems.join(","):""}`};
  }
};
