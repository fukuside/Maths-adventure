import {getApp} from 'firebase/app';
import {getFunctions,httpsCallable} from 'firebase/functions';
import {ensureAnonymousUser} from './firebase.js';
let started=false,mode='other',last=0,lastInput=0,data,sending=false,failedAt=0;
const local=()=>['localhost','127.0.0.1'].includes(location.hostname);
function tick(){const now=Date.now();if(data&&!document.hidden&&now-lastInput<60000){const secs=Math.min(10,Math.max(0,(now-last)/1000));data.activeSeconds+=secs;if(mode==='study')data.studySeconds+=secs;}last=now;}
export function usageMode(next){tick();mode=next;}
export function usageEvent(event,id){if(!data)return;tick();if(event==='study-start'){data.studyStarts++;if(data.gameEntries)data.returnedToStudy=true;}if(event==='study-clear')data.clears++;if(event==='unlock')data.unlocks++;if(event==='game-entry'){data.gameEntries++;data.games[id]=(data.games[id]||0)+1;}}
async function flush(){if(!data||sending||document.hidden||Date.now()-failedAt<60000)return;tick();sending=true;try{const payload={...data,activeSeconds:Math.floor(data.activeSeconds),studySeconds:Math.floor(data.studySeconds)};await httpsCallable(getFunctions(getApp(),'asia-northeast1'),'recordUsage')(payload);}catch{failedAt=Date.now();}finally{sending=false;}}
export async function startUsage(){if(started||local())return;started=true;try{await ensureAnonymousUser();data={sessionId:crypto.randomUUID(),activeSeconds:0,studySeconds:0,studyStarts:0,clears:0,unlocks:0,gameEntries:0,games:{},returnedToStudy:false};last=lastInput=Date.now();for(const e of ['pointerdown','keydown'])window.addEventListener(e,()=>{lastInput=Date.now();},{passive:true});document.addEventListener('visibilitychange',()=>{last=Date.now();if(!document.hidden){lastInput=Date.now();void flush();}});setInterval(()=>{tick();},5000);setInterval(()=>void flush(),30000);void flush();}catch{ /* Learning must work even when telemetry is unavailable. */ }}
