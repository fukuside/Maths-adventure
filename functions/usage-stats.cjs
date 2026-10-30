// Pure aggregation; identity means Firebase UID, not an individual child.
const DAY=86400000;
const day=t=>new Date(t+9*3600000).toISOString().slice(0,10);
const ratio=(a,b)=>b?Math.round(a/b*1000)/10:null;
function aggregate(sessions,firstVisits,{days=7,now=Date.now()}={}){
 const today=day(now),end=Date.parse(today+'T00:00:00+09:00')+DAY,start=end-days*DAY;
 const valid=sessions.filter(s=>s.startedAt>=start&&s.startedAt<end);
 const users=new Set(valid.map(s=>s.uid));
 const daily=Array.from({length:days},(_,i)=>({date:day(start+i*DAY),users:new Set(),studyStarts:0,clears:0}));
 const heat=Array.from({length:7},()=>Array(24).fill(0));
 let active=0,study=0,starts=0,clears=0,unlocks=0,games=0,returns=0;
 const gameMap={};
 for(const s of valid){
  const d=daily.find(x=>x.date===day(s.startedAt));d.users.add(s.uid);d.studyStarts+=s.studyStarts||0;d.clears+=s.clears||0;
  active+=s.activeSeconds||0;study+=s.studySeconds||0;starts+=s.studyStarts||0;clears+=s.clears||0;unlocks+=s.unlocks||0;games+=s.gameEntries||0;returns+=s.returnedToStudy?1:0;
  const t=new Date(s.startedAt+9*3600000);heat[(t.getUTCDay()+6)%7][t.getUTCHours()]++;
  for(const [id,count] of Object.entries(s.games||{}))gameMap[id]=(gameMap[id]||0)+count;
 }
 const userDates=new Map();for(const s of sessions){if(!userDates.has(s.uid))userDates.set(s.uid,new Set());userDates.get(s.uid).add(day(s.startedAt));}
 function retention(n){let base=0,back=0;for(const f of firstVisits){const target=f.firstAt+n*DAY;if(f.firstAt<start||f.firstAt>=end||day(target)>=today)continue;base++;if(userDates.get(f.uid)?.has(day(target)))back++;}return {percent:ratio(back,base),base,returned:back};}
 const abandoned=valid.filter(s=>now-s.lastAt>30*60000).reduce((n,s)=>n+Math.max(0,(s.studyStarts||0)-(s.clears||0)),0);
 const settledStarts=valid.filter(s=>now-s.lastAt>30*60000).reduce((n,s)=>n+(s.studyStarts||0),0);
 const gameSessions=valid.filter(s=>(s.gameEntries||0)>0).length;
 return {users:users.size,newUsers:firstVisits.filter(f=>f.firstAt>=start&&f.firstAt<end).length,sessions:valid.length,averageSeconds:valid.length?Math.round(active/valid.length):null,studySeconds:study,studyStarts:starts,clears,clearRate:ratio(clears,starts),abandonRate:ratio(abandoned,settledStarts),unlocks,gameEntries:games,returnRate:ratio(returns,gameSessions),retention1:retention(1),retention7:retention(7),daily:daily.map(x=>({...x,users:x.users.size})),heat,games:gameMap,start,end};
}
module.exports={aggregate,day,ratio};
