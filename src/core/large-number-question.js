const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function largeNumberQuestion(level){
 const power=r(level===2?2:level===3?4:level===4?8:12,level===2?3:level===3?7:level===4?11:14);
 const leading=r(1,9),mode=r(0,2),base=leading*10**power;
 const units={2:'百',3:'千',4:'万',5:'十万',6:'百万',7:'千万',8:'億',9:'十億',10:'百億',11:'千億',12:'兆',13:'十兆',14:'百兆'};
 const tail=mode===2?r(1,9):0,value=base+tail;
 const prompt=mode===1?String(base)+'に数字の0は何個ありますか？':leading+units[power]+(tail?'と'+tail:'')+'を数字で書こう。';
 const answer=mode===1?power:value;
 const adventures=['宝箱の番号を読んでみよう！','星の図書館で、数のなぞを解こう！','数の探検隊、出発！'];
 const lead=adventures[r(0,adventures.length-1)];
 const guide=mode===1?'先頭の数字のあとを、4けたずつ区切ってみよう。区切りごとに0を数えると見つけやすいよ。':'右から一・十・百・千と、位をたどってみよう。数がない位にも0を入れるよ。万・億・兆は4けたごとのまとまりだよ。';
 return {kind:'text',lead,prompt,answer,keypad:'keyboard',guide,uniqueKey:level+':'+mode+':'+value,solution:answer};
}
