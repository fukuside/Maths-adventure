const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:['graph_line_read','graph_line_change'],build(stage){
 const values=Array.from({length:4},()=>r(5,30)),index=r(0,3);let prompt,answer;
 if(stage.type==='graph_line_read'){prompt=`${[9,11,13,15][index]}時の気温は何℃？`;answer=values[index];}
 else {prompt='9時と15時の気温の差は何℃？';answer=Math.abs(values[3]-values[0]);}
 const opts=[answer,answer+1,answer+2];for(let i=2;i>0;i--){const j=r(0,i);[opts[i],opts[j]]=[opts[j],opts[i]];}
 const choices=opts.map((v,i)=>({id:'ABC'[i],label:String(v)}));return {kind:'line-graph-lesson',prompt,values,choices,answer:choices.find(c=>Number(c.label)===answer).id,solution:answer,keypad:'choice',uniqueKey:stage.type+':'+values.join(',')+':'+(stage.type==='graph_line_read'?index:'')};
}};
