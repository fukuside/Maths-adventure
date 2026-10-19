const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export const geometryModels=['prismVolume','cylinderVolume','volume5','scale','congruent','symmetry','isosceles','circle','triangle3','angle','areaRectangle','triangleArea','parallelogramArea','trapezoidArea','rhombusArea','circumference','circleArea'];
export function geometryQuestion(model){
 const a=r(2,12)*2,b=model==='scale'?r(2,4):model==='isosceles'?r(Math.ceil(a*.9),Math.floor(a*1.5)):r(2,15),c=r(13,20)*2;let answer,prompt,unit='cm²',guide;
 const missing=model==='isosceles'&&Math.random()<.5;
 switch(model){
 case 'prismVolume':answer=a*b;prompt='図の三角柱の体積は何cm³？';unit='cm³';guide='色のついた底面の面積に、柱の高さをかけよう。';break;
 case 'cylinderVolume':answer=a*a*3.14*b;prompt='図の円柱の体積は何cm³？（円周率3.14）';unit='cm³';guide='半径×半径×3.14で底面積を求め、その底面積に高さをかけよう。';break;
 case 'volume5':answer=a*b*c;prompt='図の直方体の体積は何cm³？';unit='cm³';guide='横の長さ×奥行き×高さで、体積を求めよう。';break;
 case 'scale':answer=a*b;prompt='右は左の図形を'+b+'倍に拡大した図です。赤い辺の長さは何cm？';unit='cm';guide='対応する辺の長さも'+b+'倍。左の赤い辺の長さに'+b+'をかけよう。';break;
 case 'congruent':answer=a;prompt='2つの三角形は合同です。同じ色の辺が対応します。？の辺は何cm？';unit='cm';guide='合同な図形では、対応する辺の長さは同じだよ。赤い辺どうしを見よう。';break;
 case 'symmetry':answer=a;prompt='線対称な図です。点Bから、点線の対称の軸までの長さは何cm？';unit='cm';guide='折り返して重なる点Aと点Bは、対称の軸から同じ長さだけ離れているよ。';break;
 case 'isosceles':answer=missing?a:2*a+b;prompt=missing?'同じ印の辺は同じ長さです。？の辺は何cm？':'三角形の3つの辺の長さを全部たすと、何cm？';unit='cm';guide=missing?'同じ印がついた2つの辺は、長さが等しいよ。':'左の辺＋右の辺＋下の辺。3つの辺の長さをたそう。';break;
 case 'circle':answer=a*2;prompt='図の円の直径は何cm？';unit='cm';guide='中心から円周までが半径。直径はその2倍だよ。';break;
 case 'triangle3':answer=a*3;prompt='正三角形の3つの辺の長さを全部たすと、何cm？';unit='cm';guide='3つの辺は同じ長さだよ。同じ長さを3回たそう。';break;
 case 'angle':answer=90-a;prompt='直角を分けた図です。？の角は何度？';unit='度';guide='直角の90度から、わかっている角を引こう。';break;
 case 'areaRectangle':answer=a*b;prompt='図の長方形の面積は何cm²？';guide='たてと横の長さをかけよう。';break;
 case 'triangleArea':answer=a*b/2;prompt='図の三角形の面積は何cm²？';guide='底辺と、底辺に垂直な高さを使おう。';break;
 case 'parallelogramArea':answer=a*b;prompt='図の平行四辺形の面積は何cm²？';guide='ななめの辺ではなく、垂直な高さを使おう。';break;
 case 'trapezoidArea':answer=(a+c)*b/2;prompt='図の台形の面積は何cm²？';guide='上底と下底をたして、高さをかけ、2でわろう。';break;
 case 'rhombusArea':answer=a*b/2;prompt='図のひし形の面積は何cm²？';guide='2本の対角線の長さを使おう。';break;
 case 'circumference':answer=a*3.14;prompt='図の円周は何cm？（円周率3.14）';unit='cm';guide='直径に円周率をかけよう。';break;
 case 'circleArea':answer=a*a*3.14;prompt='図の円の面積は何cm²？（円周率3.14）';guide='半径を2回かけてから、円周率をかけよう。';break;
 }
 return {kind:'geometry-input',model,a,b,c,missing,prompt,unit,guide,answer:Math.round(answer*100)/100,keypad:model==='circumference'||model==='circleArea'||model==='cylinderVolume'?'decimal':'number',uniqueKey:model+':'+a+(model==='isosceles'?':'+b+':'+missing:'')+(['volume5','trapezoidArea'].includes(model)?':'+b+':'+c:['prismVolume','cylinderVolume','scale','areaRectangle','triangleArea','parallelogramArea','rhombusArea'].includes(model)?':'+b:'')};
}
