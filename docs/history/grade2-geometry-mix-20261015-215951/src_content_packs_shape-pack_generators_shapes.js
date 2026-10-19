const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pick=a=>a[r(0,a.length-1)];
function choices(labels,correct){const values=[...labels];for(let i=values.length-1;i>0;i--){const j=r(0,i);[values[i],values[j]]=[values[j],values[i]];}const list=values.map((label,i)=>({id:'ABC'[i],label}));return {choices:list,answer:list.find(c=>c.label===correct).id};}
export default {
 types:['shape_compare_length','shape_compare_area','shape_compare_capacity','shape_match_outline','shape_polygon2','shape_rectangle2'],
 build(stage){
  let prompt,visual,correct,labels;
  if(stage.type.startsWith('shape_compare_')){
   const mode=stage.type.slice('shape_compare_'.length);
   let a=r(1,8),b=r(1,8);
   if(mode==='area'){const aw=r(2,6),ah=r(2,5),bw=r(2,6),bh=r(2,5);visual={mode,aw,ah,bw,bh};a=aw*ah;b=bw*bh;}
   else if(mode==='capacity'){a=r(2,9);b=Math.random()<.2?a:r(2,9);const wideRed=Math.random()<.5;visual={mode,a,b,aw:wideRed?120:80,bw:wideRed?80:120,scene:r(0,3),targetWidth:pick([80,100])};}
   prompt=mode==='length'?'どちらが ながい？':mode==='area'?'どちらが ひろい？':'どちらの 水が おおい？';
   visual??={mode,a,b};correct=a===b?'おなじ':a>b?'あか':'あお';labels=['あか','あお','おなじ'];
  }else{
   const rotation=r(0,11)*30;
   let shape;
   if(stage.type==='shape_match_outline'){
    shape=pick(['triangle','rectangle','circle']);labels=['さんかく','しかく','まる'];correct={triangle:'さんかく',rectangle:'しかく',circle:'まる'}[shape];prompt='おてほんと おなじ かたちは どれ？';
   }else if(stage.type==='shape_polygon2'){
    shape=pick(['triangle','rectangle','square']);labels=['三角形','正方形','長方形（正方形以外）'];correct={triangle:'三角形',square:'正方形',rectangle:'長方形（正方形以外）'}[shape];prompt='図を見て、形のなまえをえらぼう。';
   }else if(stage.type==='shape_rectangle2'){
    shape=pick(['rectangle','square','parallelogram','trapezoid']);labels=['正方形','長方形（正方形以外）','どちらでもない'];correct=shape==='square'?'正方形':shape==='rectangle'?'長方形（正方形以外）':'どちらでもない';prompt='辺の長さと角に注目しよう。図はどの形？';
   }else throw Error('Unsupported shape type');
   visual={mode:'outline',shape,rotation,scale:r(7,12)/10};
  }
  return {kind:'shape-lesson',prompt,visual,...choices(labels,correct),solution:correct,keypad:'choice',uniqueKey:stage.type+':'+JSON.stringify(visual)};
 }
};
