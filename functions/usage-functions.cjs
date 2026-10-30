const {getAuth}=require('firebase-admin/auth');
const {countLifetime}=require('./lifetime-usage.cjs');
let lifetimeCache=null;
const {onCall,HttpsError}=require('firebase-functions/v2/https');
const {getFirestore,FieldValue}=require('firebase-admin/firestore');
const {aggregate}=require('./usage-stats.cjs');
const crypto=require('node:crypto');
const apps=[{id:'maths-adventure',name:'Maths-Adventure',connected:true},{id:'homesta',name:'ほめスタ',connected:false}];
const options={region:'asia-northeast1',maxInstances:3};
exports.recordUsage=onCall(options,async req=>{
 if(!req.auth)throw new HttpsError('unauthenticated','認証が必要です');
 const p=req.data||{};
 if(typeof p.sessionId!=='string'||! /^[a-f0-9-]{36}$/.test(p.sessionId))throw new HttpsError('invalid-argument','session');
 const ints=['activeSeconds','studySeconds','studyStarts','clears','unlocks','gameEntries'];
 for(const k of ints)if(!Number.isInteger(p[k])||p[k]<0||p[k]>(k.endsWith('Seconds')?86400:1000))throw new HttpsError('invalid-argument',k);
 if(p.studySeconds>p.activeSeconds||p.clears>p.studyStarts)throw new HttpsError('invalid-argument','counts');
 const now=Date.now(),db=getFirestore(),uid=req.auth.uid;
 const id=crypto.createHash('sha256').update(uid+':'+p.sessionId).digest('hex');
 const ref=db.collection('usageSessions').doc(id),first=db.collection('usageFirstVisits').doc(uid);
 const allowed=['monster-merge','monster-path','monster-pinball','treasure-fishing','monster-run'];
 const games={};for(const k of allowed)if(Number.isInteger(p.games?.[k])&&p.games[k]>=0&&p.games[k]<=1000)games[k]=p.games[k];
 await db.runTransaction(async tx=>{
  const [old,f]=await Promise.all([tx.get(ref),tx.get(first)]);
  const previous=old.data();
  if(previous&&now-previous.lastAt<10000)return;
  const next={uid,appId:'maths-adventure',startedAt:previous?.startedAt||now,lastAt:now,returnedToStudy:Boolean(p.returnedToStudy||previous?.returnedToStudy),games,expireAt:new Date(now+100*86400000)};
  for(const k of ints)next[k]=Math.max(p[k],previous?.[k]||0);
  // Counts are approximate client telemetry, never authoritative reward/account data.
  tx.set(ref,next);if(!f.exists)tx.set(first,{uid,appId:'maths-adventure',firstAt:now});
 });
 return {ok:true};
});
exports.getUsageDashboard=onCall({...options,timeoutSeconds:60},async req=>{
 if(!req.auth||req.auth.token.analyticsAdmin!==true)throw new HttpsError('permission-denied','分析管理者の権限が必要です');
 const days=Number(req.data?.days||7);if(![1,7,30].includes(days))throw new HttpsError('invalid-argument','期間');
 const db=getFirestore(),now=Date.now(),since=now-(days+9)*86400000;
 const [ss,ff]=await Promise.all([db.collection('usageSessions').where('startedAt','>=',since).limit(10001).get(),db.collection('usageFirstVisits').where('firstAt','>=',since).limit(10001).get()]);
 if(ss.size>10000||ff.size>10000)throw new HttpsError('resource-exhausted','集計上限に達しました。日次集計への移行が必要です。');
 const sessions=ss.docs.map(d=>d.data()),first=ff.docs.map(d=>d.data());
 if(!lifetimeCache||now-lifetimeCache.asOf>300000){try{lifetimeCache=await countLifetime(getAuth());}catch(error){console.error('Lifetime count unavailable',error.code||error.message);}}
 const lifetime=lifetimeCache?{...lifetimeCache,stale:now-lifetimeCache.asOf>300000}:null;
 return {generatedAt:now,timezone:'Asia/Tokyo',source:'usage-v1',apps:apps.map(a=>({...a,lifetime:a.id==='maths-adventure'?lifetime:null,stats:a.connected?aggregate(sessions.filter(s=>s.appId===a.id),first.filter(s=>s.appId===a.id),{days,now}):null}))};
});
