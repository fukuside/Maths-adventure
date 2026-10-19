const r=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
export function polygonLesson(index){
 const n=[3,4,5,6,8,10,12][r(0,6)],side=r(2,8),mode=Math.floor(index/2)%3;
 const names={3:'正三角形',4:'正方形',5:'正五角形',6:'正六角形',8:'正八角形',10:'正十角形',12:'正十二角形'};
 const name=names[n],answer=mode===0?n:mode===1?360/n:n*side;
 const prompt=mode===0?'辺の長さも角の大きさも同じ図形です。辺は何本ありますか？':mode===1?name+'の中心から、すべての頂点へ線を引きました。赤い角は何度？':name+'の1辺は'+side+'cmです。まわりの長さは何cm？';
 return {kind:'geometry-input',model:'regularPolygon',n,side,mode,prompt,answer,unit:mode===0?'本':mode===1?'度':'cm',keypad:'number',guide:mode===0?'頂点から次の頂点までが1本の辺。ぐるっと数えよう。':mode===1?'中心のまわりは360°。同じ大きさの角に分かれているよ。':'すべての辺が同じ長さ。1辺の長さが何本分あるかな？',uniqueKey:'regularPolygon:'+mode+':'+n+':'+side};
}
export function polygonSvg(q){
 const pts=Array.from({length:q.n},(_,i)=>{const a=-Math.PI/2+i*2*Math.PI/q.n;return [210+95*Math.cos(a),130+95*Math.sin(a)];});
 let art='<polygon points="'+pts.map(p=>p.join(',')).join(' ')+'" style="fill:#c6edf1;stroke:#25637e;stroke-width:3"/>';
 if(q.mode===1){art+=pts.map(p=>'<line x1="210" y1="130" x2="'+p[0]+'" y2="'+p[1]+'" style="stroke:#527c92;stroke-width:2"/>').join('');const a=-Math.PI/2,b=a+2*Math.PI/q.n,x=210+34*Math.cos(b),y=130+34*Math.sin(b);art+='<path d="M210 96 A34 34 0 0 1 '+x+' '+y+'" style="fill:none;stroke:#c13d53;stroke-width:4"/><circle cx="210" cy="130" r="4"/><text x="'+(210+55*Math.cos((a+b)/2))+'" y="'+(130+55*Math.sin((a+b)/2))+'" text-anchor="middle" style="fill:#a92b43">？</text>';}
 if(q.mode===0)art+=pts.map((p,i)=>'<circle cx="'+p[0]+'" cy="'+p[1]+'" r="4" style="fill:#25637e"/>').join('');
 art+='<text x="210" y="260" text-anchor="middle">'+(q.mode===0?'辺と角がすべてそろった形':q.mode===1?'中心のまわりを同じ角に分ける':'1辺 '+q.side+'cm・すべて同じ長さ')+'</text>';
 return art;
}
