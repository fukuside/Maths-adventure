const shapes=["circle","triangle","square"];
const names={circle:"まる",triangle:"さんかく",square:"しかく"};
const colors=["blue","pink","green"];
const pick=items=>items[Math.floor(Math.random()*items.length)];
function options(values,correct) {
  const shuffled=[...values];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  const choices=shuffled.map((value,index)=>({id:"ABC"[index],value,label:names[value]??value}));
  return {choices,answer:choices.find(c=>c.value===correct).id};
}
export default {
  types:["k3_circle","k3_triangle","k3_square","k3_match","k3_combine","k3_group"],
  build(stage) {
    const color=pick(colors),scale=pick([0.72,1]);
    let mode="find",targetShape,variation="none",targetColor=color,targetScale=scale,prompt;
    if(["k3_circle","k3_triangle","k3_square"].includes(stage.type)){
      targetShape=stage.type.slice(3);prompt=`${names[targetShape]}は どれ？`;
    }else if(stage.type==="k3_match"){
      mode="match";targetShape=pick(shapes);variation=pick(["color","size"]);
      if(variation==="color")targetColor=pick(colors.filter(c=>c!==color));
      else targetScale=scale===1?0.72:1;
      prompt="おなじ かたちは どれ？";
    }else if(stage.type==="k3_group"){
      mode="group";targetShape=pick(shapes);prompt="この なかまは どれ？";
    }else if(stage.type==="k3_combine"){
      mode="combine";targetShape="square";prompt="しかくに なるのは どれ？";
    }else throw new Error(`未対応のK3形式: ${stage.type}`);
    return {kind:"k3-choice",mode,targetShape,color,scale,targetColor,targetScale,variation,prompt,
      ...options(mode==="combine"?["joined","apart","overlap"]:shapes,mode==="combine"?"joined":targetShape),
      uniqueKey:`${stage.type}:${targetShape}:${color}:${scale}:${variation}:${targetColor}:${targetScale}`};
  }
};
