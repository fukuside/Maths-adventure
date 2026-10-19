const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {
 types:['speed_distance','speed_time'],
 build(stage){
  const speed=r(10,90),time=r(2,9);let prompt,answer;
  if(stage.type==='speed_distance'){prompt=`時速${speed}kmで${time}時間進みました。道のりは何km？`;answer=speed*time;}
  else if(stage.type==='speed_time'){prompt=`${speed*time}kmの道のりを、時速${speed}kmで進みます。何時間かかる？`;answer=time;}
  else throw Error('Unsupported speed type');
  const values=[answer,answer+1,answer+2];for(let i=2;i>0;i--){const j=r(0,i);[values[i],values[j]]=[values[j],values[i]];}
  const choices=values.map((v,i)=>({id:'ABC'[i],label:String(v)}));
  return {kind:'curriculum-choice',prompt,choices,answer:choices.find(c=>Number(c.label)===answer).id,keypad:'choice',solution:answer,uniqueKey:stage.type+':'+prompt};
 }
};
