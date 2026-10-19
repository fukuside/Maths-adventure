const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function polygonAngles(index){
 const mode=Math.floor(index/2)%4,quad=mode>=2,missing=mode%2===1;
 const alpha=[45,60,75][r(0,2)],beta=[40,50,60,70][r(0,3)],rad=Math.PI/180;
 let points,angles;
 if(quad){const h=125,skew=h/Math.tan(alpha*rad);points=[[45,210],[260,210],[260+skew,85],[45+skew,85]];angles=[alpha,180-alpha,alpha,180-alpha];}
 else{const ratio=1/(1/Math.tan(alpha*rad)+1/Math.tan(beta*rad)),width=Math.min(260,175/ratio),height=width*ratio,left=210-width/2;points=[[left,225],[left+width,225],[left+height/Math.tan(alpha*rad),225-height]];angles=[alpha,beta,180-alpha-beta];}
 const target=missing?r(0,angles.length-1):-1,answer=missing?angles[target]:quad?360:180;
 return {kind:'geometry-input',model:'polygonAngles',mode,quad,missing,points,angles,target,answer,keypad:'number',unit:'度',prompt:missing?'図の赤い？の角は何度ですか？':(quad?'四角形の4つ':'三角形の3つ')+'の角を全部あわせると、何度ですか？',guide:missing?(quad?'四角形の角は全部で360°。わかっている3つの角をひこう。':'三角形の角は全部で180°。わかっている2つの角をひこう。'):(quad?'点線で2つの三角形に分けられるよ。180°が2つ分だね。':'3つの角をたしてみよう。三角形の角は、あわせると一直線の180°になるよ。'),uniqueKey:'polygonAngles:'+mode+':'+alpha+':'+beta+':'+target};
}
export function polygonAnglesSvg(q){
 const p=q.points;let out='<polygon points="'+p.map(v=>v.join(',')).join(' ')+'" style="fill:#d9f1f4;stroke:#28677f;stroke-width:3"/>';
 if(q.quad&&!q.missing)out+='<path d="M'+p[0].join(' ')+' L'+p[2].join(' ')+'" style="fill:none;stroke:#647e91;stroke-width:2;stroke-dasharray:6 5"/>';
 p.forEach((v,i)=>{const prev=p[(i+p.length-1)%p.length],next=p[(i+1)%p.length],u=[prev[0]-v[0],prev[1]-v[1]],w=[next[0]-v[0],next[1]-v[1]],a=Math.hypot(...u),b=Math.hypot(...w),sum=[u[0]/a+w[0]/b,u[1]/a+w[1]/b],norm=Math.hypot(...sum),x=v[0]+sum[0]/norm*43,y=v[1]+sum[1]/norm*43;
 const start=[v[0]+u[0]/a*25,v[1]+u[1]/a*25],end=[v[0]+w[0]/b*25,v[1]+w[1]/b*25];out+='<path d="M'+start.join(' ')+' A25 25 0 0 0 '+end.join(' ')+'" style="fill:none;stroke:'+(i===q.target?'#bd3751':'#527c92')+';stroke-width:2"/><text x="'+x+'" y="'+(y+6)+'" text-anchor="middle" style="font-size:19px;fill:'+(i===q.target?'#a72342':'#173e51')+'">'+(i===q.target?'？':q.angles[i]+'°')+'</text>';
 });
 return out;
}
