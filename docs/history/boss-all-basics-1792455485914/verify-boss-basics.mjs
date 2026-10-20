import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {pathToFileURL} from 'node:url';
import {bossUnlockStatus as status} from 'file:///C:/Users/user/子育てプロジェクト/maths-adventure-v1.4/src/core/boss-unlock.js';
import {recordTrail} from 'file:///C:/Users/user/子育てプロジェクト/maths-adventure-v1.4/src/core/challenge-trails.js';
import {placeElementaryStage} from 'file:///C:/Users/user/子育てプロジェクト/maths-adventure-v1.4/src/core/elementary-placement.js';
const app='C:/Users/user/子育てプロジェクト/maths-adventure-v1.4',packs=path.join(app,'src/content/packs');const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(p,x.name)):[path.join(p,x.name)]);const load=async p=>(await import(pathToFileURL(p))).default;const stages=[];for(const dir of fs.readdirSync(packs)){const p=path.join(packs,dir),m=path.join(p,'manifest.js');if(!fs.existsSync(m)||(await load(m)).enabled===false)continue;const d=path.join(p,'stages');if(fs.existsSync(d))for(const f of walk(d).filter(f=>f.endsWith('.js')))stages.push(placeElementaryStage(await load(f)));}
const bosses=stages.filter(s=>s.isBoss&&!s.hiddenFromWorld&&s.world<101),rows=[];

for(const boss of bosses){
 const normal=stages.filter(s=>s.world===boss.world&&!s.isBoss&&!s.hiddenFromWorld);
 const unit=normal.filter(s=>s.unit===boss.unit),c=unit.length?unit:normal;
 assert(c.length>0);
 let state={};
 assert(!status(state,boss,stages).unlocked);
 assert.equal(status(state,boss,stages).required,c.length+1);
 recordTrail(state,c[0],'partial',9,10);
 assert.equal(status(state,boss,stages).stars,0);
 for(let i=0;i<c.length+5;i++)recordTrail(state,c[0],'repeat-'+i,10,10);
 if(c.length>1)assert(!status(state,boss,stages).unlocked,'repetition cannot bypass '+boss.id);
 for(const s of c.slice(1))recordTrail(state,s,'first',10,10);
 assert(status(state,boss,stages).unlocked,'early extra counts');
 state={};
 for(const s of c)recordTrail(state,s,'first',10,10);
 assert(!status(state,boss,stages).unlocked,'one pass alone must stay locked');
 assert.equal(status(state,boss,stages).missingBasics,0);
 assert.equal(status(state,boss,stages).extraRemaining,1);
 assert(!recordTrail(state,c[0],'first',10,10),'duplicate ignored');
 recordTrail(state,c[0],'bonus',10,10);
 assert(status(state,boss,stages).unlocked);
 assert(status(JSON.parse(JSON.stringify(state)),boss,stages).unlocked);
 assert(status({challengeTrails:{[boss.id]:{old:true}}},boss,stages).unlocked);
 const excluded=stages.filter(s=>s.isBoss||s.hiddenFromWorld||s.world!==boss.world||(unit.length&&s.unit!==boss.unit));
 const unrelated={};for(const s of excluded.filter(s=>!s.isBoss))recordTrail(unrelated,s,'elsewhere',10,10);
 assert(!status(unrelated,boss,stages).unlocked,'unrelated clears ignored');
 rows.push({boss:boss.id,basics:c.length,required:c.length+1});
}
for(const s of stages.filter(s=>s.world>=101))assert(status({},s,stages).unlocked);
const emptyBoss={id:'empty-boss',isBoss:true,world:99,unit:'empty'};
assert(!status({},emptyBoss,[]).unlocked);
fs.writeFileSync('ボス基礎一巡-制御検証.json',JSON.stringify({verifiedAt:new Date().toISOString(),bosses:rows.length,rows,tests:['all basics required','repeat-only blocked','one pass insufficient','one pass plus extra unlocks','early extra retained','duplicate and partial ignored','reload preserved','unrelated and hidden ignored','legacy boss preserved','kindergarten unchanged','empty set stays locked']},null,2));
console.log('PASS '+rows.length+' bosses: all basics + one extra star');

