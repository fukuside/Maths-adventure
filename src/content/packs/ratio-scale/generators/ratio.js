const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:['ratio_share','scale_map'],build(stage){let prompt,answer,table;const mode=(stage.questionIndex??r(0,2))%3;
 if(stage.type==='ratio_share'){const a=r(1,6),b=r(1,6),unit=r(2,8),total=(a+b)*unit;answer=mode===1?b*unit:mode===2?Math.abs(a-b)*unit:a*unit;prompt=total+'この宝石を、赤と青に'+a+'：'+b+'の比で分けます。'+(mode===0?'赤は何こ？':mode===1?'青は何こ？':'赤と青の数の差は何こ？');table=[['色','赤','青'],['比',a,b],['全部',total,'こ']];}
 else{const scale=r(2,9)*100,length=r(2,9),actual=scale*length/100;answer=mode===1?length:mode===2?actual*2:actual;prompt=mode===1?'縮尺1：'+scale+'の地図で、実際の'+actual+'mは何cm？':'縮尺1：'+scale+'の図で、道の長さは'+length+'cmです。'+(mode===2?'実際に往復すると何m？':'実際の道のりは何m？');table=[['縮尺','1：'+scale],['図の長さ',mode===1?'？':length+'cm'],['実際',mode===1?actual+'m':'？']];}
 return {kind:'curriculum-choice',prompt,answer,solution:String(answer),answerMode:'numeric',keypad:'number',visual:{table},uniqueKey:stage.type+':'+mode+':'+prompt};
}};
