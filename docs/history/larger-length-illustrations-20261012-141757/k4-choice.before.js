import { lifeObjectSvg } from "../life-objects.js";
import { symbolSvg, symbolNames } from "../visuals.js";
const palette={blue:"#70bbef",pink:"#ef9ebd",green:"#86c899"};
function lengthObject(length,q){
  // 全用品の端から端の長さを同じ式にし、向きで縮尺を変えない。
  const width=length*18+12,fill=palette[q.color];
  let drawing;
  if(q.lengthItem==="crayon")drawing=`<path d="M8 7h${width-12}l12 8-12 8H8Z" fill="${fill}" stroke="#4c5970" stroke-width="2"/><path d="M18 7v16M${width-10} 7v16" stroke="#fff8df" stroke-width="3"/>`;
  else if(q.lengthItem==="ribbon")drawing=`<path d="M8 7h${width}v16H8Z" fill="${fill}" stroke="#4c5970" stroke-width="2"/><path d="M10 10h${width-4}M10 20h${width-4}" stroke="#fff8df" stroke-width="2"/>`;
  else if(q.lengthItem==="toothbrush")drawing=`<rect x="8" y="12" width="${width}" height="10" rx="4" fill="${fill}" stroke="#4c5970" stroke-width="2"/><path d="M${width-10} 12V4m5 8V4m5 8V4m5 8V4m5 8V4" stroke="#657084" stroke-width="3"/>`;
  else drawing=`<path d="M8 7h${width-12}v16H8Z" fill="${fill}" stroke="#4c5970" stroke-width="2"/><path d="m${width-4} 7 12 8-12 8Z" fill="#efc58a" stroke="#4c5970"/><path d="m${width+4} 12 4 3-4 3" fill="#3d485d"/>`;
  return `<svg class="k4-length-svg" viewBox="0 0 200 200" aria-hidden="true" data-item="${q.lengthItem}" data-angle="${q.angle}" data-length="${length}"><g transform="translate(100 100) rotate(${q.angle}) translate(-85 -15)"><path d="M8 28h154" stroke="#9cabc0" stroke-dasharray="3 3"/><path d="M8 2v29" stroke="#8498ae" stroke-dasharray="2 2"/>${drawing}</g></svg>`;
}
function tower(count,color){return `<svg class="k4-tower" viewBox="0 0 100 130" aria-hidden="true"><path d="M8 120h84" stroke="#9cabc0"/>${Array.from({length:count},(_,i)=>`<rect x="28" y="${100-i*20}" width="44" height="20" rx="2" fill="${palette[color]}" stroke="#4c5970"/><path d="M36 ${110-i*20}h28" stroke="#ffffff"/>`).join("")}</svg>`;}
function groups(count){return `<span class="k4-quantity" role="img" aria-label="りんご ${count}こ">${Array.from({length:count},()=>symbolSvg("apple")).join("")}</span>`;}
function balance(q){
  const pans=q.choices.map((c,i)=>{
    const x=i===0?45:155,y=c.value===2?63:33;
    return `<path d="M${x} ${y}v30m-22 0h44" stroke="#60708a" stroke-width="3" fill="none"/><path d="M${x-22} ${y+30}q22 24 44 0" fill="#d7e7fa" stroke="#60708a"/><svg x="${x-14}" y="${y+1}" width="28" height="28" viewBox="0 0 64 64">${symbolSvg(q.weightItems[i]).replace('class="k-symbol"','width="64" height="64"')}</svg>`;
  }).join("");
  const leftY=q.choices[0].value===2?63:33,rightY=q.choices[1].value===2?63:33;
  return `<svg class="k4-balance" viewBox="0 0 200 130" role="img" aria-label="${symbolNames[q.weightItems[q.choices.findIndex(c=>c.value===2)]]}の おさらが さがった てんびん"><path d="M85 118 100 48 115 118Z" fill="#e8bd81" stroke="#73634e"/><path d="M45 ${leftY} 155 ${rightY}" stroke="#60708a" stroke-width="5"/>${pans}</svg>`;
}
export default {
  kind:"k4-choice",
  render(q,{escapeHtml,inputEnabled=false}){
    let visual=q.mode==="same"?`<p class="muted">みほん</p>${lengthObject(q.target,q)}`:q.mode==="weight"?`${balance(q)}<p class="muted">てんびんは おもいほうが さがるよ。</p>`:"";
    const vertical=["length","quantity"].includes(q.mode);
    const buttons=q.choices.map((c,i)=>{
      const content=q.mode==="size"?lifeObjectSvg("plate",q.color,c.value):["length","same"].includes(q.mode)?lengthObject(c.value,q):q.mode==="height"?tower(c.value,q.color):q.mode==="quantity"?groups(c.value):`<span>${symbolSvg(q.weightItems[i])}</span><small>${i===0?"ひだり":"みぎ"}</small>`;
      const itemName={pencil:"えんぴつ",crayon:"クレヨン",ribbon:"リボン",toothbrush:"はブラシ"}[q.lengthItem];
      const label=q.mode==="weight"?`${i===0?"ひだり":"みぎ"}の ${symbolNames[q.weightItems[i]]}`:`${i+1}ばんめの ${q.mode==="quantity"?"りんご":q.mode==="size"?"おさら":q.mode==="height"?"つみき":itemName}`;
      return `<button type="button" class="k-choice-button k4-choice ${vertical?"k4-wide":""}" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question k4-question ${q.mode === "same" ? "k4-same" : ""}"><h2>${escapeHtml(q.prompt)}</h2><div class="k4-visual">${visual}</div><p class="muted">こたえを タップしてね</p><div class="k-choices ${vertical?"k-group-choices":""}">${buttons}</div></div>`;
  }
};
