const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:['ratio_share','scale_map'],build(stage){
 let prompt,answer;
 if(stage.type==='ratio_share'){const a=r(1,8),b=r(1,8),unit=r(2,15);prompt=`${(a+b)*unit}こを赤と青に${a}：${b}の比で分けます。赤は何こ？`;answer=a*unit;}
 else if(stage.type==='scale_map'){const scale=r(2,9)*100,length=r(2,20);prompt=`縮尺1：${scale}の図で、道の長さは${length}cmです。実際の道のりは何m？`;answer=scale*length/100;}
 else throw Error('Unsupported ratio/scale type');
 const values=[answer,answer+1,answer+2];for(let i=2;i>0;i--){const j=r(0,i);[values[i],values[j]]=[values[j],values[i]];}
 const choices=values.map((v,i)=>({id:'ABC'[i],label:String(v)}));return {kind:'curriculum-choice',prompt,choices,answer:choices.find(c=>Number(c.label)===answer).id,keypad:'choice',solution:answer,uniqueKey:stage.type+':'+prompt};
}};
