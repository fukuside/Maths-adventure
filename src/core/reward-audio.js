let rewardContext;
// The chest tap unlocks this context; the delayed card fanfare reuses it.
export function getRewardAudioContext(){
 const Context=globalThis.AudioContext||globalThis.webkitAudioContext;
 if(!Context)return null;
 if(!rewardContext||rewardContext.state==='closed')rewardContext=new Context();
 if(rewardContext.state==='suspended')rewardContext.resume().catch(()=>{});
 return rewardContext;
}
export function addChestLatch(context,master,now){
 const duration=0.065,buffer=context.createBuffer(1,Math.ceil(context.sampleRate*duration),context.sampleRate),samples=buffer.getChannelData(0);
 for(let i=0;i<samples.length;i++)samples[i]=(Math.random()*2-1)*(1-i/samples.length);
 const source=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
 source.buffer=buffer;filter.type='bandpass';filter.frequency.setValueAtTime(1450,now);filter.Q.setValueAtTime(1.8,now);
 gain.gain.setValueAtTime(0.0001,now);gain.gain.exponentialRampToValueAtTime(0.32,now+0.006);gain.gain.exponentialRampToValueAtTime(0.0001,now+duration);
 source.connect(filter);filter.connect(gain);gain.connect(master);source.start(now);source.stop(now+duration);
}
