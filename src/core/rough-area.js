const pick=a=>a[Math.floor(Math.random()*a.length)];
export function roughArea(index){
 const rx=pick([75,90,105,120]),ry=pick([55,65,75,85]),cells=[];
 for(let y=0;y<6;y++)for(let x=0;x<8;x++){const left=x-4,right=x-3,top=y-3,bottom=y-2,value=(a,b)=>(a*36/rx)**2+(b*36/ry)**2,corners=[value(left,top),value(right,top),value(left,bottom),value(right,bottom)],closestX=left>0?left:right<0?right:0,closestY=top>0?top:bottom<0?bottom:0;if(value(closestX,closestY)<1)cells.push({x,y,full:corners.every(v=>v<=1)});}
 const full=cells.filter(c=>c.full).length,partial=cells.length-full,width=Math.max(...cells.map(c=>c.x))-Math.min(...cells.map(c=>c.x))+1,height=Math.max(...cells.map(c=>c.y))-Math.min(...cells.map(c=>c.y))+1,box=index===9;
 return {kind:'rough-area',rx,ry,cells,full,partial,width,height,box,answer:box?width*height:full+partial/2,keypad:'number',unit:'m²',prompt:box?'湖を囲む点線の長方形の面積は何m²ですか？':'湖の面積は、およそ何m²ですか？',guide:box?'湖の形を長方形で囲んでみたよ。本当の湖は、この長方形より小さいね。横とたてのますを数えてかけよう。':'青いますは1こで1m²。黄色は湖のはしがかかるます。今回は黄色2こで1m²と見積もろう。青の数＋黄色の数÷2で考えるよ。',uniqueKey:'rough-area:'+box+':'+rx+':'+ry};
}
export function roughAreaSvg(q){
 const ox=66,oy=22,size=36,minX=Math.min(...q.cells.map(c=>c.x)),minY=Math.min(...q.cells.map(c=>c.y));
 let art=q.cells.map(c=>'<rect data-area-cell="'+(c.full?'full':'partial')+'" x="'+(ox+c.x*size)+'" y="'+(oy+c.y*size)+'" width="36" height="36" fill="'+(c.full?'#80cddd':'#ffd886')+'"/>').join('');
 for(let x=0;x<=8;x++)art+='<path d="M'+(ox+x*size)+' '+oy+' V'+(oy+216)+'" stroke="#9dbac8" fill="none"/>';
 for(let y=0;y<=6;y++)art+='<path d="M'+ox+' '+(oy+y*size)+' H'+(ox+288)+'" stroke="#9dbac8" fill="none"/>';
 art+='<ellipse cx="210" cy="130" rx="'+q.rx+'" ry="'+q.ry+'" fill="none" stroke="#236483" stroke-width="3"/>';
 if(q.box)art+='<rect data-area-box x="'+(ox+minX*size)+'" y="'+(oy+minY*size)+'" width="'+(q.width*size)+'" height="'+(q.height*size)+'" fill="none" stroke="#af3653" stroke-width="3" stroke-dasharray="7 4"/>';
 return art+'<text x="210" y="263" text-anchor="middle" style="font-size:18px;fill:#173e51">1ます＝1m²</text>';
}
