export const seniorGeometryModels=['triangleArea','parallelogramArea','trapezoidArea','rhombusArea','volume5','prismVolume','cylinderVolume'];
export function seniorGeometry(question,index){const q={...question},mode=Number.isInteger(index)?index%3:0;let label;
 if(['triangleArea','parallelogramArea','trapezoidArea','rhombusArea'].includes(q.model)){
 q.knownMeasure=q.answer;q.measureUnit='cm²';
 if(mode===1){q.unknownA=true;q.answer=q.a;q.unit='cm';label=q.model==='trapezoidArea'?'上底':q.model==='rhombusArea'?'横の対角線':'底辺';q.prompt='面積は'+q.knownMeasure+'cm²です。図の？の'+label+'は何cm？';}
 if(mode===2){q.unknownB=true;q.answer=q.b;q.unit='cm';label=q.model==='rhombusArea'?'たての対角線':'高さ';q.prompt='面積は'+q.knownMeasure+'cm²です。図の？の'+label+'は何cm？';}
 }
 if(q.model==='volume5'&&mode>0){q.knownMeasure=q.answer;q.measureUnit='cm³';q.unit='cm';q.answer=mode===1?q.c:q.b;q.unknownC=mode===1;q.unknownB=mode===2;q.prompt='体積は'+q.knownMeasure+'cm³です。図の？の'+(mode===1?'高さ':'奥行き')+'は何cm？';}
 if(q.model==='prismVolume'&&mode>0){q.knownMeasure=q.answer;q.measureUnit='cm³';q.answer=mode===1?q.b:q.a;q.unknownB=mode===1;q.unknownA=mode===2;q.unit=mode===1?'cm':'cm²';q.prompt='体積は'+q.knownMeasure+'cm³です。図の？の'+(mode===1?'高さは何cm？':'底面積は何cm²？');}
 if(q.model==='cylinderVolume'&&mode>0){q.knownMeasure=q.answer;q.measureUnit='cm³';if(mode===1){q.answer=q.b;q.unknownB=true;q.unit='cm';q.prompt='体積は'+q.knownMeasure+'cm³です。円柱の高さは何cm？（円周率3.14）';}else{q.answer=Math.round(q.a*q.a*3.14*100)/100;q.unit='cm²';q.prompt='この円柱の、円の底面積は何cm²？（円周率3.14）';q.knownMeasure=undefined;}}
 q.seniorGeometryMode=mode;q.uniqueKey+=':task'+mode;
 if(mode>0)q.guide='面積や体積の式のうち、わかっている数を入れて、？の長さを逆に求めよう。';
 if(mode===0&&Number.isInteger(index)&&index===0){q.firstArea=true;q.areaHint={triangleArea:'三角形の面積＝底辺×高さ÷2。高さは、底辺に垂直な長さだよ。',parallelogramArea:'平行四辺形の面積＝底辺×高さ。ななめの辺と高さを区別しよう。',trapezoidArea:'台形の面積＝（上底＋下底）×高さ÷2。2つの平行な辺を先にたそう。',rhombusArea:'ひし形の面積＝横の対角線×たての対角線÷2。',volume5:'直方体の体積＝横×奥行き×高さ。',prismVolume:'角柱の体積＝底面積×高さ。底面積はcm²、高さはcmで読むよ。',cylinderVolume:'円柱の体積＝半径×半径×3.14×高さ。底面の円の面積から求めよう。'}[q.model];}
 return q;}
