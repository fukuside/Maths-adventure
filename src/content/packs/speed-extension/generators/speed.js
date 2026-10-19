const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:['speed_distance','speed_time'],build(stage){
 const speed=r(2,9)*5,time=r(2,6),mode=(stage.questionIndex??r(0,2))%3,distance=speed*time,vehicle=['探検船','島めぐりのバス','配達車'][mode];let prompt,answer;
 if(stage.type==='speed_distance'){answer=mode===2?distance*2:distance;prompt=mode===0?'時速'+speed+'kmの'+vehicle+'が'+time+'時間進みます。道のりは何km？':mode===1?vehicle+'は時速'+speed+'kmで'+time+'時間走りました。全部で何km？':vehicle+'で時速'+speed+'km、片道'+time+'時間の道を往復します。全部で何km？';}
 else{answer=mode===2?time*2:time;prompt=mode===2?'片道'+distance+'kmを、時速'+speed+'kmで往復する'+vehicle+'。走っている時間は全部で何時間？':vehicle+'は'+distance+'km先の島へ、時速'+speed+'kmで進みます。何時間かかる？';}
 return {kind:'curriculum-choice',prompt,answer,solution:String(answer),answerMode:'numeric',keypad:'number',visual:{table:[['速さ',speed+'km/時'],['時間',stage.type==='speed_time'?'？':time+'時間'],['片道',stage.type==='speed_distance'?'？':distance+'km']]},uniqueKey:stage.type+':'+speed+':'+time+':'+mode};
}};
