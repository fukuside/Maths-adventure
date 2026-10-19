import fs from 'node:fs';import crypto from 'node:crypto';
const t=fs.readFileSync('published-old-bundle.js','utf8');
const stages=[...t.matchAll(/\{id:"(w[0-9]+-[^"]+)",sort:([0-9]+),world:([0-9]+)/g)].map(m=>({id:m[1],world:Number(m[3])}));
const cards=[...t.matchAll(/\{id:"([0-9]{3}-[^"]+)",number:([0-9]+),sort:/g)].map(m=>({id:m[1],number:Number(m[2])}));
const imagePaths=[...new Set([...t.matchAll(/"(\/pictures\/monsters\/[^"]+\/(?:n|sr|ur)\.(?:png|webp))"/g)].map(m=>m[1]))];
const out={verifiedAt:new Date().toISOString(),url:'https://maths-adventure-psi.vercel.app/',bundle:'/assets/index-CatjP_ix.js',sha256:crypto.createHash('sha256').update(t).digest('hex'),method:'配信されたHTMLのJSを静的に読み、ステージ/カードの定義を抽出。公開先の操作・データ変更なし。',stages:stages.length,byWorld:stages.reduce((a,s)=>(a[s.world]=(a[s.world]||0)+1,a),{}),monsters:cards.length,rarityImagePaths:imagePaths.length,stageDefinitions:stages,cardDefinitions:cards,imagePaths};
fs.writeFileSync('旧公開版-数量確認-20261018.json',JSON.stringify(out,null,2));console.log(JSON.stringify({stages:out.stages,byWorld:out.byWorld,monsters:out.monsters,rarityImagePaths:out.rarityImagePaths}));
console.log(t.slice(t.indexOf('062-fraction-king",number:62'),t.indexOf('062-fraction-king",number:62')+1100));
