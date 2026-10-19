const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:['graph_line_read','graph_line_change'],build(stage){
 const values=Array.from({length:4},()=>r(2,12)*2),index=r(0,3);const reading=stage.type==='graph_line_read';
 const prompt=reading?[9,11,13,15][index]+'時の気温は何℃？':'9時と15時の気温の差は何℃？';
 const answer=reading?values[index]:Math.abs(values[3]-values[0]);
 return {kind:'line-graph-lesson',prompt,values,index,answer,solution:String(answer),keypad:'number',answerMode:'numeric',uniqueKey:stage.type+':'+values.join(',')+':'+index};
}};
