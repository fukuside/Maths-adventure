import {angleLesson} from './angle-variety.js';
const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export const geometryModels=['compositeArea','prismVolume','cylinderVolume','volume5','scale','congruent','symmetry','isosceles','circle','triangle3','angle','areaRectangle','triangleArea','parallelogramArea','trapezoidArea','rhombusArea','circumference','circleArea'];
export function geometryQuestion(model,index){
 if(model==='angle')return angleLesson(index);
 let a=model==='angle'?r(3,15)*5:r(2,12)*2,b=model==='scale'?r(2,4):model==='isosceles'?r(Math.ceil(a*.9),Math.floor(a*1.5)):r(2,15),c=r(13,20)*2;let answer,prompt,unit='cm²',guide;
 if(model==='areaRectangle'){a=r(2,9);b=r(2,9);}
 if(model==='compositeArea'){a=r(2,5);b=r(2,5);c=r(a+1,9);}
 const square=model==='areaRectangle'&&Number.isInteger(index)&&index%2===1;if(square)b=a;
 const missing=model==='isosceles'&&Math.random()<.5;
 const shrinking=model==='scale'&&Math.random()<.5;
 const pointSymmetry=model==='symmetry'&&Math.random()<.5;
 switch(model){
 case 'compositeArea':answer=a*c+a*b;prompt='2つの長方形を組み合わせた図です。色のついた部分の面積は何cm²？';guide='下の長方形と左上の長方形に分けて、面積をそれぞれ求めてたそう。';break;
 case 'prismVolume':answer=a*b;prompt='図の三角柱の体積は何cm³？';unit='cm³';guide='色のついた底面の面積に、柱の高さをかけよう。';break;
 case 'cylinderVolume':answer=a*a*3.14*b;prompt='図の円柱の体積は何cm³？（円周率3.14）';unit='cm³';guide='半径×半径×3.14で底面積を求め、その底面積に高さをかけよう。';break;
 case 'volume5':answer=a*b*c;prompt='図の直方体の体積は何cm³？';unit='cm³';guide='横の長さ×奥行き×高さで、体積を求めよう。';break;
 case 'scale':if(shrinking){answer=a;prompt='右は左の図形を1/'+b+'に縮小した図です。赤い辺の長さは何cm？';unit='cm';guide='対応する辺の長さも1/'+b+'。左の長さを'+b+'でわろう。';break;}answer=a*b;prompt='右は左の図形を'+b+'倍に拡大した図です。赤い辺の長さは何cm？';unit='cm';guide='対応する辺の長さも'+b+'倍。左の赤い辺の長さに'+b+'をかけよう。';break;
 case 'congruent':answer=a;prompt='2つの三角形は合同です。同じ色の辺が対応します。？の辺は何cm？';unit='cm';guide='合同な図形では、対応する辺の長さは同じだよ。赤い辺どうしを見よう。';break;
 case 'symmetry':if(pointSymmetry){answer=a;prompt='点Oを中心とする点対称な図です。対応する点Bから中心Oまで何cm？';unit='cm';guide='半回転して重なる点Aと点B。中心Oは、AとBを結ぶ線の真ん中にあるよ。';break;}answer=a;prompt='線対称な図です。点Bから、点線の対称の軸までの長さは何cm？';unit='cm';guide='折り返して重なる点Aと点Bは、対称の軸から同じ長さだけ離れているよ。';break;
 case 'isosceles':answer=missing?a:2*a+b;prompt=missing?'同じ印の辺は同じ長さです。？の辺は何cm？':'三角形の3つの辺の長さを全部たすと、何cm？';unit='cm';guide=missing?'同じ印がついた2つの辺は、長さが等しいよ。':'左の辺＋右の辺＋下の辺。3つの辺の長さをたそう。';break;
 case 'circle':answer=a*2;prompt='図の円の直径は何cm？';unit='cm';guide='中心から円周までが半径。直径はその2倍だよ。';break;
 case 'triangle3':answer=a*3;prompt='正三角形の3つの辺の長さを全部たすと、何cm？';unit='cm';guide='3つの辺は同じ長さだよ。同じ長さを3回たそう。';break;
 case 'angle':answer=90-a;prompt='全体は直角（90°）です。オレンジ色の角は何度？';unit='度';guide='2つの角をあわせると90°。90°から青い角の大きさをひこう。';break;
 case 'areaRectangle':answer=a*b;prompt='図の'+(square?'正方形':'長方形')+'の面積は何cm²？';guide='たてと横の長さをかけよう。';break;
 case 'triangleArea':answer=a*b/2;prompt='図の三角形の面積は何cm²？';guide='底辺と、底辺に垂直な高さを使おう。';break;
 case 'parallelogramArea':answer=a*b;prompt='図の平行四辺形の面積は何cm²？';guide='ななめの辺ではなく、垂直な高さを使おう。';break;
 case 'trapezoidArea':answer=(a+c)*b/2;prompt='図の台形の面積は何cm²？';guide='上底と下底をたして、高さをかけ、2でわろう。';break;
 case 'rhombusArea':answer=a*b/2;prompt='図のひし形の面積は何cm²？';guide='2本の対角線の長さを使おう。';break;
 case 'circumference':answer=a*3.14;prompt='図の円周は何cm？（円周率3.14）';unit='cm';guide='直径に円周率をかけよう。';break;
 case 'circleArea':answer=a*a*3.14;prompt='図の円の面積は何cm²？（円周率3.14）';guide='半径を2回かけてから、円周率をかけよう。';break;
 }
 const areaTask=model==='areaRectangle'&&Number.isInteger(index)?['area','area','width','height','compare'][index%5]:'area';
 if(model==='areaRectangle'&&areaTask==='width'){answer=a;prompt='面積が'+(a*b)+'cm²、たてが'+b+'cmです。横の長さは何cm？';unit='cm';}
 if(model==='areaRectangle'&&areaTask==='height'){answer=b;prompt='面積が'+(a*b)+'cm²、横が'+a+'cmです。たての長さは何cm？';unit='cm';}
 if(model==='areaRectangle'&&areaTask==='compare'){answer=b;prompt='青い長方形の右に、横1cm・たて'+b+'cmの黄色い部分をつけたします。面積は何cm²ふえますか？';}
 const firstArea=index===0&&['areaRectangle','compositeArea'].includes(model);
 const areaHint=model==='areaRectangle'?'面積は、図形の中に1cm²の正方形が何こ入るかという広さ。横に'+a+'こ、たてに'+b+'列なら、'+a+'×'+b+'で求められるよ。辺をたすのではなく、かけ算しよう。':model==='compositeArea'?'点線で2つの長方形に分けよう。青は横'+c+'cm×たて'+a+'cm、オレンジは横'+a+'cm×たて'+b+'cm。それぞれの面積を求め、最後にたそう。':'';
 return {kind:'geometry-input',firstArea,areaHint,areaTask,square,model,a,b,c,missing,shrinking,pointSymmetry,prompt,unit,guide,answer:Math.round(answer*100)/100,keypad:model==='circumference'||model==='circleArea'||model==='cylinderVolume'?'decimal':'number',uniqueKey:model+':'+areaTask+':'+a+(model==='symmetry'?':'+pointSymmetry:'')+(model==='scale'?':'+shrinking:'')+(model==='isosceles'?':'+b+':'+missing:'')+(['compositeArea','volume5','trapezoidArea'].includes(model)?':'+b+':'+c:['prismVolume','cylinderVolume','scale','areaRectangle','triangleArea','parallelogramArea','rhombusArea'].includes(model)?':'+b:'')};
}
