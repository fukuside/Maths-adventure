const random=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function writtenQuestion(model){
 const subtract=model==='writtenSubtract',a=subtract?random(400,999):random(100,449),b=subtract?random(100,399):random(100,449),steps=[];let incoming=0,sequence='';
 for(let place=0;place<3;place++){const top=Math.floor(a/10**place)%10,bottom=Math.floor(b/10**place)%10,raw=subtract?top-incoming-bottom:top+incoming+bottom,transfer=subtract?Number(raw<0):Math.floor(raw/10),digit=(raw+10)%10;steps.push({place,top,bottom,incoming,digit,transfer});sequence+=digit;if(place<2)sequence+=transfer;incoming=transfer;}
 return {kind:'written-calculation',model,a,b,subtract,steps,answer:sequence,solution:String(subtract?a-b:a+b),keypad:'number',uniqueKey:model+':'+a+':'+b,prompt:'位をそろえて、一の位からひっ算をしよう。'};
}