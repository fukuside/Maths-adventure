const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const file='C:/Users/user/子育てプロジェクト/maths-adventure-v1.4/public/reward-games/monster-run.html';const html=fs.readFileSync(file,'utf8');
for(const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))if(match[1].trim())new vm.Script(match[1]);
const fn=name=>html.split('\n').find(l=>l.startsWith('function '+name+'('));
const c={skillFor:id=>({id,name:id}),sfx:{play(){}},roof:0,front:0,ninjaTimer:0,ninjaOwner:null,skillProjectiles:[],blasts:[],items:[],enemy:[],phase:'run',y:10,w:1000,px:()=>100,tell(){},segmentNear:()=>false,addScore(){},particle(){},invincible:0,shield:0,runHits:0,life:5,ground:()=>400,finish(){}};vm.createContext(c);vm.runInContext(fn('applySkill')+'\n'+fn('projectileStep')+'\n'+fn('damage'),c);
vm.runInContext("applySkill('roof');projectileStep(.016)",c);assert.equal(c.roof,4);assert.equal(c.skillProjectiles.length,2);assert.equal(c.skillProjectiles[1].y-c.skillProjectiles[0].y,80);for(const p of c.skillProjectiles){assert.equal(p.type,'shuriken');assert.equal(p.vy,0);assert(p.vx>0);}
vm.runInContext('projectileStep(.5)',c);assert.equal(c.skillProjectiles.length,4);
c.roof=0;c.front=0;c.shield=0;c.invincible=0;vm.runInContext("damage('top')",c);assert.equal(c.life,4,'clones do not grant shield');
vm.runInContext("applySkill('front')",c);assert.equal(c.front,4);for(const direction of ['top','front','back']){c.invincible=0;vm.runInContext(`damage('${direction}')`,c);assert.equal(c.life,4);}
for(const skill of ['fire','tornado','lightning','plane','bomb','sword','arrows'])assert(html.includes("id:'"+skill+"'"));assert(html.includes("p.type==='shuriken'"));console.log('PASS inline syntax, two vertical straight shuriken lanes and repeat fire, no clone shield, all-direction barrier, retained 7 skills.');
