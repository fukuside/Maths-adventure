const KEY='maths-adventure.sound-enabled';
let enabled=true;try{enabled=globalThis.localStorage?.getItem(KEY)!=='false';}catch{}
const listeners=new Set(),outputs=new Set();
export const isSoundEnabled=()=>enabled;
function apply(value){enabled=value;for(const output of outputs){if(output.context.state==='closed'){outputs.delete(output);continue;}output.gain.gain.cancelScheduledValues(output.context.currentTime);output.gain.gain.setValueAtTime(value?1:0,output.context.currentTime);}for(const fn of listeners)fn(value);}
export function setSoundEnabled(value){const next=Boolean(value);try{globalThis.localStorage?.setItem(KEY,String(next));}catch{}if(next!==enabled)apply(next);return enabled;}
export function watchSound(fn){listeners.add(fn);return()=>listeners.delete(fn);}
// A separate output gate keeps envelope automation from overriding mute.
export function connectSoundOutput(context,node){const gain=context.createGain();gain.gain.setValueAtTime(enabled?1:0,context.currentTime);node.connect(gain);gain.connect(context.destination);const output={context,gain};outputs.add(output);const cleanup=()=>{if(context.state==='closed'){outputs.delete(output);context.removeEventListener?.('statechange',cleanup);}};context.addEventListener?.('statechange',cleanup);setTimeout(()=>{outputs.delete(output);context.removeEventListener?.('statechange',cleanup);try{node.disconnect(gain);gain.disconnect();}catch{}},3000);return gain;}
globalThis.addEventListener?.('storage',event=>{if(event.key===KEY){const next=event.newValue!=='false';if(next!==enabled)apply(next);}});
