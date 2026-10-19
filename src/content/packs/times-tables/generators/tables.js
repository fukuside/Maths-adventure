const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export default {types:Array.from({length:9},(_,i)=>'times_table_'+(i+1)),build(stage){
 const each=Number(stage.type.split('_').at(-1)),groups=r(1,9),mode=r(0,3);
 const stories=[['りんご','かご','🍎'],['お花','花だん','🌼'],['宝石','宝箱','💎']];
 const story=stories[Math.max(0,mode-1)];
 const prompt=mode===0?each+'×'+groups+'はいくつ？':story[0]+'が1つの'+story[1]+'に'+each+'こ。'+story[1]+'が'+groups+'こあると、全部で何こ？';
 return {kind:'times-table',prompt,each,groups,symbol:mode===0?'':story[2],answer:each*groups,keypad:'number',uniqueKey:each+':'+groups+':'+mode};
}};