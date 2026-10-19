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
let total=0;
const report=[];
for(const source of defs.stages){const stage=placement(source),count=stage.world>=101?5:stage.questionCount??10;
 assert(defs.worlds.some(w=>w.id===stage.world),stage.id);
 for(let i=0;i<10;i++){const questions=ctx.generate(stage,count);assert.equal(questions.length,count,stage.id);for(const q of questions){assert(q.answer!==undefined,stage.id);const render=renders.get(q.kind??'text');assert(render,`${stage.id}: ${q.kind}`);const html=render(q,{escapeHtml,inputEnabled:true});assert(typeof html==='string'&&html.length>0,stage.id);if(q.choices){assert(q.choices.some(c=>c.id===q.answer),stage.id);assert.equal(new Set(q.choices.map(c=>c.id)).size,q.choices.length,stage.id);}if(isInlineChoice(q)){const buttons=makeInlineChoices(html,q,{escapeHtml,inputEnabled:true});assert.equal((buttons.match(/答えのボタンを押してね/g)||[]).length,1,stage.id);assert.equal((buttons.match(/data-action="inline-choice-answer"/g)||[]).length,q.choices.length,stage.id);for(const c of q.choices)assert(buttons.includes('data-value="'+c.id+'"'),stage.id);const disabled=makeInlineChoices(html,q,{escapeHtml,inputEnabled:false});assert.equal((disabled.match(/ disabled/g)||[]).length,q.choices.length,stage.id);}total++;}}
 const pool=reward(stage,defs.cards);
 assert(pool.length,`Empty rewards ${stage.id}`);assert(!pool.some(c=>c.rewardReady===false),stage.id);
 for(const card of pool)for(const url of Object.values(card.images??{}))assert(fs.existsSync(path.join(app,'public',url)),`${card.id}: ${url}`);
 report.push({id:stage.id,world:stage.world,questionCount:count,generatedSets:10,rendered:true,rewardCandidates:pool.map(c=>c.id)});
}
fs.writeFileSync('全ステージ統合検証.json',JSON.stringify({date:new Date().toISOString().slice(0,10),verifiedAt:new Date().toISOString(),stages:report.length,questions:total,report},null,2));
console.log(`PASS: ${report.length} stages, ${total} generated/rendered questions, unique registry IDs, all reward pools and image paths. This is programmatic verification, not browser verification.`);
