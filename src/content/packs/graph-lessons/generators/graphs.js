const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const hours=[9,11,13,15];
export default {types:['graph_line_read','graph_line_change'],build(stage){
 const reading=stage.type==='graph_line_read',task=(Number.isInteger(stage.questionIndex)?stage.questionIndex:r(0,4))%5,scene=r(0,1),unit=scene?'L':'℃',subject=scene?'水そうの水の量':'気温',intro=scene?'🐠 水そうの水を調べよう':'🌤 お天気調査隊';
 let values,index=r(0,3),answer,prompt,guide,variant,target;
 do{values=Array.from({length:4},()=>r(2,10)*2);}while((task===1||task===2)&&new Set(values).size!==4);
 if(reading){
 if(task===0){variant='read';answer=values[index];prompt=hours[index]+'時の'+subject+'は何'+unit+'？';guide='時刻の上にある点から、左の目もりへたどろう。';}
 if(task===1||task===2){variant=task===1?'maximum-time':'minimum-time';index=values.indexOf(task===1?Math.max(...values):Math.min(...values));answer=hours[index];prompt=subject+'がいちばん'+(task===1?'高い':'低い')+'のは何時？ 数字で答えよう。';if(scene)prompt=subject+'がいちばん'+(task===1?'多い':'少ない')+'のは何時？ 数字で答えよう。';guide='いちばん'+(task===1?'上':'下')+'の点を見つけ、下の時刻を読もう。';}
 if(task===3){variant='target';target=Math.max(...values)+2;answer=target-values[3];prompt='15時の'+subject+'が'+target+unit+'になるには、あと何'+unit+(scene?'ふやせばよい？':'上がればよい？');guide='緑の目標線と、15時の点との差を考えよう。';}
 if(task===4){variant='range';answer=Math.max(...values)-Math.min(...values);prompt='この日の'+subject+'の最大と最小の差は何'+unit+'？';guide='いちばん上の点と、いちばん下の点をくらべよう。';}
 }else{
 if(task===0){variant='difference';answer=Math.abs(values[3]-values[0]);prompt='9時と15時の'+subject+'の差は何'+unit+'？';guide='2つの時刻の値を読み、大きい方から小さい方をひこう。';}
 if(task===1||task===2){variant=task===1?'greatest-increase':'greatest-decrease';let changes;do{values=Array.from({length:4},()=>r(2,10)*2);changes=values.slice(1).map((v,i)=>task===1?v-values[i]:values[i]-v);}while(Math.max(...changes)<=0||changes.filter(v=>v===Math.max(...changes)).length!==1);index=changes.indexOf(Math.max(...changes));answer=hours[index];prompt=subject+'がいちばん'+(task===1?'ふえた':'へった')+'2時間は、何時から？';guide='となり合う点の変化をくらべよう。答えるのは、区間のはじめの時刻だよ。';}
 if(task===3){variant='unchanged';index=r(0,2);do{values=Array.from({length:4},()=>r(2,10)*2);values[index+1]=values[index];}while(values.slice(1).filter((v,i)=>v===values[i]).length!==1);answer=hours[index];prompt=subject+'が変わらなかった2時間は、何時から？';guide='横にまっすぐな線を見つけ、区間のはじめの時刻を読もう。';}
 if(task===4){variant='count-increases';answer=values.slice(1).filter((v,i)=>v>values[i]).length;prompt=subject+'がふえた区間は、全部でいくつ？';guide='9〜11時、11〜13時、13〜15時の3区間。右上がりの線を数えよう。';}
 }
 return {kind:'line-graph-lesson',prompt,values,index,answer,solution:String(answer),keypad:'number',answerMode:'numeric',unit,subject,intro,guide,variant,target,answerUnit:variant.endsWith('time')||variant.startsWith('greatest-')||variant==='unchanged'?'時':variant==='count-increases'?'区間':unit,uniqueKey:stage.type+':'+variant+':'+scene+':'+values.join(',')+':'+index};
}};
