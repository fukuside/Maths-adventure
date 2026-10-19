import { groups, groupNames } from "../k5-objects.js";
import { roadTypes } from "../k5-roads.js";
const pick=a=>a[Math.floor(Math.random()*a.length)];
function options(values,correct){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}const choices=a.map((value,i)=>({id:"ABC"[i],value,label:String(value)}));return {choices,answer:choices.find(c=>c.value===correct).id};}
export default {
  types:["k5_alternate","k5_shape_pattern","k5_size_order","k5_group","k5_odd","k5_path"],
  build(stage){
    let mode,prompt,sequence=[],targetItems=[],selection,category,missingIndex,item,route;
    const color=pick(["blue","pink","green"]);
    if(["k5_alternate","k5_shape_pattern"].includes(stage.type)){
      mode=stage.type==="k5_alternate"?"alternate":"shape-pattern";prompt="つぎは どれ？";
      const reverse=pick([true,false]),pair=mode==="alternate"?pick([["blue-circle","pink-triangle"],["green-circle","blue-square"],["pink-triangle","green-square"]]):pick([["circle","triangle"],["square","circle"],["triangle","square"]]);
      const ordered=reverse?[...pair].reverse():pair;sequence=[ordered[0],ordered[1],ordered[0],ordered[1]];
      selection=options(ordered,ordered[0]);
    }else if(stage.type==="k5_size_order"){
      mode="size-order";prompt="ここに はいるのは？";missingIndex=pick([0,1,2]);sequence=[0.45,0.7,1];item=pick(["plate","cloth","clock"]);selection=options(sequence,sequence[missingIndex]);
    }else if(stage.type==="k5_group"){
      mode="group";category=pick(Object.keys(groups));prompt=`${groupNames[category]}を もうひとつ えらんでね`;
      const correct=pick(groups[category]);targetItems=groups[category].filter(x=>x!==correct);
      const wrongGroups=Object.keys(groups).filter(x=>x!==category);selection=options([correct,...wrongGroups.map(g=>pick(groups[g]))],correct);
    }else if(stage.type==="k5_odd"){
      mode="odd";prompt="ちがう ものは どれ？";category=pick(Object.keys(groups));const same=pick(groups[category]),different=pick(groups[category].filter(x=>x!==same));selection=options([same,same,different],different);
    }else if(stage.type==="k5_path"){
      mode="path";prompt="おうちへ いける みちは？";route=pick(roadTypes);selection=options(["open","blocked"],"open");
    }else throw new Error(`未対応のK5形式: ${stage.type}`);
    return {kind:"k5-choice",mode,prompt,color,sequence,targetItems,category,missingIndex,item,route,...selection,
      uniqueKey:`${stage.type}:${["alternate","path","group","odd"].includes(mode)?"illustration":color}:${sequence.join(",")}:${targetItems.join(",")}:${missingIndex??""}:${item??""}:${route??""}:${mode==="path"?selection.choices.map(c=>c.value).join(","):selection.choices.map(c=>c.value).sort().join(",")}`};
  }
};
