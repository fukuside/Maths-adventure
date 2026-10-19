// One music owner per page; a new app instance disposes its predecessor.
export function createBgmController({audio,canPlay=()=>true,onChange=()=>{},environment=globalThis}={}){
  const env=environment,key=Symbol.for('maths-adventure.bgm');
  env[key]?.dispose();
  audio??=new env.Audio('/audio/title-bgm.mp3');audio.loop=true;audio.volume=.35;
  let playing=false,pending=false,version=0,frame=null,finishFade=null,disposed=false;
  let channel;try{if(env.BroadcastChannel)channel=new env.BroadcastChannel('maths-adventure-bgm');}catch{}
  const notify=value=>{if(playing!==value){playing=value;onChange(value);}};
  const broadcast=type=>{try{channel?.postMessage({type});}catch{}};
  const cancelFade=()=>{if(frame!==null){env.cancelAnimationFrame(frame);frame=null;}const done=finishFade;finishFade=null;done?.();};
  function stop(){version++;pending=false;cancelFade();audio.pause();try{audio.currentTime=0;}catch{}audio.volume=.35;notify(false);}
  async function play(){if(disposed||!canPlay()||env.document?.hidden)return false;
    cancelFade();const token=++version;pending=true;audio.volume=.35;broadcast('claim');notify(true);
    try{await audio.play();if(token!==version){if(disposed||!playing)audio.pause();return false;}if(disposed||!canPlay()||env.document?.hidden){stop();return false;}pending=false;notify(true);return true;}
    catch(error){if(token===version){pending=false;audio.pause();notify(false);}return false;}
  }
  function toggle(){if(playing||pending||!audio.paused){stop();return Promise.resolve(false);}return play();}
  function fadeOut(duration=1200){broadcast('silence');cancelFade();version++;pending=false;
    if(audio.paused||duration<=0){stop();return Promise.resolve();}
    const token=version,start=env.performance.now(),volume=audio.volume;
    return new Promise(resolve=>{finishFade=resolve;const tick=now=>{frame=null;if(disposed||token!==version)return;
      const fraction=Math.min(1,Math.max(0,(now-start)/duration));audio.volume=volume*(1-fraction);
      if(fraction<1){frame=env.requestAnimationFrame(tick);return;}
      const done=finishFade;finishFade=null;stop();done?.();
    };frame=env.requestAnimationFrame(tick);});
  }
  const receive=event=>{if(event.data?.type==='claim'||event.data?.type==='silence')stop();};
  const visibility=()=>{if(env.document?.hidden)stop();};
  channel?.addEventListener('message',receive);env.document?.addEventListener('visibilitychange',visibility);
  env.addEventListener?.('pagehide',stop);
  const controller={play,toggle,stop,fadeOut,snapshot:()=>({playing,pending,paused:audio.paused,volume:audio.volume,fading:finishFade!==null}),dispose(){if(disposed)return;disposed=true;stop();channel?.removeEventListener('message',receive);channel?.close();env.document?.removeEventListener('visibilitychange',visibility);env.removeEventListener?.('pagehide',stop);if(env[key]===controller)delete env[key];}};
  env[key]=controller;return controller;
}
