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
const ctx=vm.createContext({getQuestionGenerator:t=>gens.get(t),Math});
vm.runInContext(fs.readFileSync(path.join(app,'src/core/questions.js'),'utf8').replace(/^import .*;\s*/,'').replace('export function','function')+'\nthis.generate=generateQuestions;',ctx);
const escapeHtml=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

const registry=fs.readFileSync(path.join(app,'src/keypads/registry.js'),'utf8');vm.runInContext(registry.slice(registry.indexOf('export function inferKeypadType('),registry.indexOf('export function renderKeypadForStage(')).replace('export function','function'),ctx);
const records=[];let generated=0;
for(const source of defs.stages){const stage=placement(source);if(!JSON.parse(fs.readFileSync('現行教材形式一覧-20261017.json','utf8')).report.some(r=>r.id===stage.id))continue;const count=stage.world>=101?5:stage.questionCount??10,modes=new Set(),kinds=new Set();let expression=stage.keypad==='expression';for(let set=0;set<20;set++){for(const q of ctx.generate(stage,count)){generated++;kinds.add(q.kind??'text');modes.add(ctx.inferKeypadType(stage,q));if(q.keypad==='expression'||q.expression)expression=true;}}records.push({id:stage.id,world:stage.world,type:stage.type,questionTypes:stage.questionTypes??[],stageKeypad:stage.keypad??null,modes:[...modes],kinds:[...kinds],expression});}
const expressionStages=records.filter(r=>r.expression),output={verifiedAt:new Date().toISOString(),scope:'表示対象の全定義と20生成セット/ステージ。実操作検証ではない。',stages:records.length,generated,expressionStages,records};fs.writeFileSync('入力形式到達点検-20261018.json',JSON.stringify(output,null,2));console.log(JSON.stringify({stages:records.length,generated,expressionStages,modeNames:[...new Set(records.flatMap(r=>r.modes))]}));

