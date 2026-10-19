import { lifeObjectSvg } from "../life-objects.js";
import { itemSvg, names } from "../k5-objects.js";
function motif(value,color){const shape=value.endsWith("circle")?"plate":value.endsWith("triangle")?"rice":"cloth";const tint=value.startsWith("blue-")?"blue":value.startsWith("pink-")?"pink":value.startsWith("green-")?"green":color;return lifeObjectSvg(shape,tint,1);}
function road(route,blocked){
  const line=route==="bend"?"M20 60H80V35H150V60H200":route==="curve"?"M20 60Q65 10 110 60T200 60":"M20 60H200";
  const wallY=route==="bend"?35:60;
  return `<svg class="k5-road" viewBox="0 0 220 100" aria-hidden="true" data-road="${blocked?"blocked":"open"}"><rect x="1" y="1" width="218" height="98" rx="12" fill="#eff8dd"/><path d="${line}" stroke="#bfac86" stroke-width="13" fill="none"/><path d="${line}" stroke="#fff6d8" stroke-width="2" stroke-dasharray="4 4" fill="none"/><circle cx="20" cy="60" r="10" fill="#f2c995"/><circle cx="16" cy="58" r="1"/><circle cx="24" cy="58" r="1"/><path d="M191 48h23v23h-23Z" fill="#f3d199"/><path d="m185 49 17-16 18 16" fill="#e9938d"/>${blocked?`<rect x="102" y="${wallY-14}" width="15" height="28" fill="#a18c84" stroke="#605958" stroke-width="2"/><path d="M104 ${wallY-4}h11m-11 9h11" stroke="#fff"/>`:""}</svg>`;
}
export default {
  kind:"k5-choice",
  render(q,{escapeHtml,inputEnabled=false}){
    const patterned=["alternate","shape-pattern"].includes(q.mode);let visual="";
    if(patterned)visual=`<div class="k5-sequence">${q.sequence.map(x=>motif(x,q.color)).join("")}<span class="k5-empty">？</span></div>`;
    if(q.mode==="size-order")visual=`<div class="k5-size-sequence">${q.sequence.map((size,i)=>i===q.missingIndex?'<span class="k5-empty">？</span>':lifeObjectSvg(q.item,q.color,size)).join('<span class="k5-arrow">→</span>')}</div>`;
    if(q.mode==="group")visual=`<div class="k3-target" role="img" aria-label="${q.targetItems.map(x=>names[x]).join("と")}の なかま">${q.targetItems.map(itemSvg).join("")}</div>`;
    const buttons=q.choices.map(c=>{
      const content=patterned?motif(c.value,q.color):q.mode==="size-order"?lifeObjectSvg(q.item,q.color,c.value):q.mode==="path"?road(q.route,c.value==="blocked"):itemSvg(c.value);
      const label=patterned?c.value.endsWith("circle")?"まるい もの":c.value.endsWith("triangle")?"さんかくの もの":"しかくい もの":q.mode==="path"?c.value==="open"?"つながった みち":"かべのある みち":q.mode==="size-order"?"おおきさの こたえ":names[c.value];
      return `<button type="button" class="k-choice-button k5-choice ${q.mode==="path"?"k5-road-choice":""}" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question k5-question"><h2>${escapeHtml(q.prompt)}</h2>${visual}<p class="muted">こたえを タップしてね</p><div class="k-choices ${q.mode==="path"?"k-group-choices":""}">${buttons}</div></div>`;
  }
};
