const neg=a=>a.map(x=>-x),same=(a,b)=>a.every((x,i)=>x===b[i]);
export const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
export function foldNet(cells){
 const map=new Map(cells.map((c,i)=>[c.x+','+c.y,i])),frames=new Map([[0,{normal:[0,0,1],right:[1,0,0],down:[0,1,0]}]]),queue=[0];
 while(queue.length){const i=queue.shift(),c=cells[i],f=frames.get(i);for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){const j=map.get((c.x+dx)+','+(c.y+dy));if(j===undefined)continue;const next=dx===1?{normal:f.right,right:neg(f.normal),down:f.down}:dx===-1?{normal:neg(f.right),right:f.normal,down:f.down}:dy===1?{normal:f.down,right:f.right,down:neg(f.normal)}:{normal:neg(f.down),right:f.right,down:f.normal};if(frames.has(j)){const old=frames.get(j);if(!same(old.normal,next.normal)||!same(old.right,next.right)||!same(old.down,next.down))throw Error('Inconsistent folding');}else{frames.set(j,next);queue.push(j);}}}
 if(frames.size!==6||new Set([...frames.values()].map(f=>f.normal.join(','))).size!==6)throw Error('Not a cube net');
 return cells.map((c,i)=>({...c,normal:frames.get(i).normal}));
}
const r=n=>Math.floor(Math.random()*n),shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=r(i+1);[a[i],a[j]]=[a[j],a[i]];}return a;};
export function cubeNetQuestion(stage){
 let cells=[...[0,1,2,3].map(x=>({x,y:1})),{x:r(4),y:0},{x:r(4),y:2}];const turns=r(4),mirror=r(2);for(let k=0;k<turns;k++)cells=cells.map(({x,y})=>({x:-y,y:x}));if(mirror)cells=cells.map(({x,y})=>({x:-x,y}));const minX=Math.min(...cells.map(c=>c.x)),minY=Math.min(...cells.map(c=>c.y));cells=cells.map(c=>({x:c.x-minX,y:c.y-minY}));const labels=shuffle([1,2,3,4,5,6]);cells=foldNet(cells.map((c,i)=>({...c,label:labels[i]})));
 const mode=(stage?.questionIndex??r(3))%3,front=cells[r(6)],opposite=cells.find(c=>same(c.normal,neg(front.normal)));let answer=opposite.label,prompt,top;
 if(mode===0)prompt='箱を組み立てると、面'+front.label+'と向かい合う面はどれ？';
 if(mode===1)prompt='面'+front.label+'を箱の底にします。上のふたになる面はどれ？';
 if(mode===2){const adjacent=cells.filter(c=>c.normal.reduce((s,n,i)=>s+n*front.normal[i],0)===0);top=adjacent[r(4)];const right=cross(top.normal,front.normal);answer=cells.find(c=>same(c.normal,right)).label;prompt='組み立てた箱は、手前が'+front.label+'、上が'+top.label+'です。右の面はどれ？';}
 return {kind:'cube-net',cells,mode,front:front.label,top:top?.label,answer,solution:String(answer),prompt,keypad:'number',uniqueKey:'cube-net:'+mode+':'+front.label+':'+top?.label+':'+cells.map(c=>c.x+','+c.y+','+c.label).join(';')};
}
