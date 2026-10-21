(function(scope){
scope.createRewardMusic=function(options){
 const key='maths-adventure.sound-enabled';let audio=null,track=null,destroyed=false,suppressed=false;let enabled=true;try{enabled=localStorage.getItem(key)!=='false';}catch{}
 const channel=typeof BroadcastChannel==='function'?new BroadcastChannel('maths-adventure.reward-music'):null;
 function stop(){if(audio)audio.pause();}
 function sync(claim=false){if(destroyed)return;if(claim)suppressed=false;const phase=options.phase();const wanted=enabled&&!suppressed&&!document.hidden&&!options.paused()&&['run','boss'].includes(phase)?phase:null;
 if(!wanted){stop();options.changed?.(enabled);return;}if(track!==wanted){stop();audio=new Audio('/reward-games/audio/'+(wanted==='boss'?'boss-gate':'diamond-trail')+'.mp3');audio.loop=true;audio.volume=.28;track=wanted;}
 const playing=audio;channel?.postMessage('claim');const promise=playing.play();if(promise?.then)promise.then(()=>{if(playing!==audio||!enabled||document.hidden||options.paused()||!['run','boss'].includes(options.phase())||suppressed)playing.pause();}).catch(()=>{});options.changed?.(enabled);}
 function toggle(){enabled=!enabled;try{localStorage.setItem(key,String(enabled));}catch{}sync(true);}
 const storage=event=>{if(event.key===key){enabled=event.newValue!=='false';sync();}};const hidden=()=>{if(document.hidden)stop();else sync();};const leaving=()=>{destroyed=true;stop();channel?.close();};
 addEventListener('storage',storage);document.addEventListener('visibilitychange',hidden);addEventListener('pagehide',leaving);if(channel)channel.onmessage=()=>{suppressed=true;stop();};options.changed?.(enabled);
 return {sync,toggle,stop,snapshot:()=>({track,enabled,paused:audio?.paused??true})};
};
})(window);