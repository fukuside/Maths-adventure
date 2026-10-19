import {makeInlineChoices,isInlineChoice} from 'file:///C:/Users/user/子育てプロジェクト/maths-adventure-v1.4/src/core/inline-choices.js';
import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';import {pathToFileURL} from 'node:url';
const app='C:/Users/user/子育てプロジェクト/maths-adventure-v1.4';
const walk=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(path.join(p,x.name)):[path.join(p,x.name)]);
const load=async p=>(await import(pathToFileURL(p))).default;
const packs=path.join(app,'src/content/packs');
const manifests=[];for(const dir of fs.readdirSync(packs)){const p=path.join(packs,dir,'manifest.js');if(fs.existsSync(p)){const m=await load(p);if(m.enabled!==false)manifests.push({dir,m});}}
const defs={stages:[],cards:[],worlds:[]},gens=new Map(),renders=new Map();
for(const {dir,m}of manifests){for(const kind of Object.keys(defs)){const p=path.join(packs,dir,kind);if(fs.existsSync(p))for(const f of walk(p).filter(x=>x.endsWith('.js'))){const d=await load(f);defs[kind].push({...d,packId:m.id});}}}
for(const kind of Object.keys(defs))assert.equal(new Set(defs[kind].map(x=>String(x.id))).size,defs[kind].length,`Duplicate ${kind}`);
for(const p of [path.join(app,'src/questions/generators'),...manifests.map(x=>path.join(packs,x.dir,'generators')).filter(fs.existsSync)])for(const f of walk(p).filter(x=>x.endsWith('.js'))){const d=await load(f);for(const type of d.types){assert(!gens.has(type),`Duplicate type ${type}`);gens.set(type,d.build);}}
for(const p of [path.join(app,'src/renderers'),...manifests.map(x=>path.join(packs,x.dir,'renderers')).filter(fs.existsSync)])for(const f of walk(p).filter(x=>x.endsWith('.js'))){if(f.endsWith('registry.js'))continue;const d=await load(f);if(d?.kind&&d.render){assert(!renders.has(d.kind),`Duplicate renderer ${d.kind}`);renders.set(d.kind,d.render);}}
const placement=(await import(pathToFileURL(path.join(app,'src/core/elementary-placement.js')))).placeElementaryStage;
const reward=(await import(pathToFileURL(path.join(app,'src/core/stage-rewards.js')))).getStageRewardCards;

const source=fs.readFileSync(path.join(app,'src/core/app.js'),'utf8'),finish=source.slice(source.indexOf('  function finish() {')),draw=finish.slice(finish.indexOf('  const pool ='),finish.indexOf('  const key ='));
assert(draw.includes('card = sample(pool)'));assert(draw.includes('const roll = Math.random()'));
const normals=JSON.parse(JSON.stringify(defs.cards)),report=[];let cases=0;
for(const course of ['elementary','kindergarten'])for(const isBoss of [false,true]){
const stage={world:course==='kindergarten'?101:1,course,isBoss},pool=reward(stage,normals),expected=course==='kindergarten'?26:100;assert.equal(pool.length,expected);const counts=new Map(pool.map(c=>[c.id,{N:0,SR:0,UR:0}]));
for(let index=0;index<pool.length;index++)for(let q=0;q<100;q++){
const sequence=[(index+.5)/pool.length,(q+.5)/100],math=Object.create(Math);math.random=()=>{assert(sequence.length>0);return sequence.shift();};const scope=vm.createContext({cards:normals,currentStage:stage,getStageRewardCards:reward,isKindergartenStage:()=>course==='kindergarten',rarityRows:[['UR',.08,1.7],['SR',.32,1.3],['N',.6,1]],Math:math});
vm.runInContext('let card,rarity,factor;function sample(arr){return arr[Math.floor(Math.random()*arr.length)]};'+draw+';this.result={id:card.id,rarity,factor};',scope);assert.equal(sequence.length,0);counts.get(scope.result.id)[scope.result.rarity]++;cases++;
}
const expectedCounts=isBoss&&course==='elementary'?{N:24,SR:44,UR:32}:{N:60,SR:32,UR:8};for(const n of counts.values())assert.deepEqual(n,expectedCounts);for(const world of course==='kindergarten'?[101,102,103,104,105,106]:[1,2,3,4,5,6])assert.deepEqual(reward({...stage,world},normals).map(c=>c.id),pool.map(c=>c.id));
report.push({course,isBoss,poolSize:pool.length,perMonsterQuantiles:expectedCounts,worldIndependent:true});}
const ready=normals[0],fake=[{...ready,id:'fake-not-ready',rewardReady:false},{...ready,id:'fake-missing',images:{N:ready.images.N}}];for(const world of [1,101])assert(!reward({world},fake).length);
fs.writeFileSync('抽選仕様-独立性検証-20261018.json',JSON.stringify({verifiedAt:new Date().toISOString(),method:'本体finishの抽選部分を抽出。全個体の等幅区間中央×100レア度分位点を網羅。乱数分布の統計試験ではない。',cases,report,incompleteExcluded:true},null,2));console.log('PASS '+cases+' actual draw combinations; uniform monsters, independent rarity and worlds, unfinished excluded');
