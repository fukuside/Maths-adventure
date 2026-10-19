const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {
 types:['measure_ruler_cm','measure_ruler_mm','measure_offset','measure_capacity_ml','measure_m_cm','measure_l_ml','measure_decompose','measure_number200'],
 build(stage){
  let prompt,answer,visual,guide;
  switch(stage.type){
   case 'measure_ruler_cm':{const length=r(1,20);prompt='えんぴつの ながさは なんcm？';answer=length;visual={ruler:{start:0,length:length*10,max:200,unit:'cm'}};guide='0の目もりから、えんぴつの先の目もりまで読もう。';break;}
   case 'measure_ruler_mm':{const length=r(5,95);prompt='リボンの長さは何mm？';answer=length;visual={ruler:{start:0,length,max:100,unit:'mm'}};guide='1cmの間に、小さい目もりが10こあるよ。';break;}
   case 'measure_offset':{const start=r(1,4)*10,length=r(5,55);prompt='リボンは0から置かれていません。長さは何mm？';answer=length;visual={ruler:{start,length,max:100,unit:'mm'}};guide='終わりの目もりから、はじめの目もりをひこう。';break;}
   case 'measure_capacity_ml':{const amount=r(1,20)*50;prompt='容器の水のかさは何mL？（小さい目もりは50mL）';answer=amount;visual={capacity:amount};guide='水面と同じ高さの目もりを読もう。';break;}
   case 'measure_m_cm':{const m=r(1,9),cm=r(1,99);prompt=`${m}m ${cm}cmは何cm？`;answer=m*100+cm;guide='1m＝100cm。';break;}
   case 'measure_l_ml':{const l=r(1,9),ml=r(1,9)*100;prompt=`${l}L ${ml}mLは何mL？`;answer=l*1000+ml;guide='1L＝1000mL。';break;}
   case 'measure_decompose':{const total=r(3,20),part=r(1,total-1);prompt=`${total}は ${part}と いくつ？`;answer=total-part;guide='あわせて同じ数になる組み合わせを考えよう。';break;}
   case 'measure_number200':{const tens=r(10,19),ones=r(0,9);prompt=`10のまとまりが${tens}こ、ばらが${ones}こ。いくつ？`;answer=tens*10+ones;guide='10のまとまりが10こで100になるよ。';break;}
   default:throw Error('Unknown measurement type');
  }
  const values=[answer,answer+1,Math.max(0,answer-1)];
  for(let i=2;i>0;i--){const j=r(0,i);[values[i],values[j]]=[values[j],values[i]];}
  const choices=values.map((value,i)=>({id:'ABC'[i],label:String(value)}));
  return {requiresRulerAlignment:['measure_ruler_cm','measure_ruler_mm'].includes(stage.type),kind:'measurement-choice',prompt,guide,visual,choices,answer:choices.find(c=>c.label===String(answer)).id,keypad:'choice',solution:answer,uniqueKey:stage.type+':'+prompt+':'+JSON.stringify(visual??{})};
 }
};
