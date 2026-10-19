const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function frequencyPerspectives(index){
 const records=[0,10,20,30,39,...Array.from({length:10},()=>r(0,39))],counts=Array.from({length:4},(_,i)=>records.filter(v=>v>=i*10&&v<(i+1)*10).length),mode=Number.isInteger(index)?index%3:r(0,2),target=r(mode?1:0,3),threshold=target*10,chart=Math.random()<.5;
 const prompt=mode===0?'読書時間が'+threshold+'分以上'+(threshold+10)+'分未満の人は何人？':mode===1?'30分の読書チャレンジに向けて調べました。'+threshold+'分以上読んだ人は、全部で何人？':'読書時間が'+threshold+'分未満の人は、全部で何人？';
 const answer=mode===0?counts[target]:mode===1?counts.slice(target).reduce((a,b)=>a+b,0):counts.slice(0,target).reduce((a,b)=>a+b,0);
 return {kind:'curriculum-choice',prompt,answer,solution:String(answer),guide:'「以上」はその数をふくみ、「未満」はふくまないよ。必要な階級の人数を集めよう。',visual:chart?{histogram:counts,records}:{table:[['時間（分）','人数'],...counts.map((n,i)=>[i*10+'以上'+(i+1)*10+'未満',n])],records},answerMode:'numeric',keypad:'number',frequencyTask:{mode,threshold},uniqueKey:'frequency:'+mode+':'+target+':'+records.join(',')};
}
