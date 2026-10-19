import { symbolSvg, symbolNames } from "../visuals.js";
function objects(symbol,count,removed=false) {
  return `<span class="k2-objects" role="img" aria-label="${symbolNames[symbol]} ${count}こ${removed?"から 1こ へる":""}">${Array.from({length:count},(_,i)=>`<span class="k2-object ${removed&&i===count-1?"k2-removed":""}">${symbolSvg(symbol)}</span>`).join("")}</span>`;
}
export default {
  kind:"k2-choice",
  render(q,{escapeHtml,inputEnabled=false}) {
    const groupMode=["number-group","increase","decrease"].includes(q.mode);
    let visual="";
    if(q.mode==="count") visual=objects(q.symbol,q.count);
    if(q.mode==="numeral") visual=`<strong class="k2-numeral">${q.count}</strong>`;
    if(q.mode==="next") visual=`<div class="k2-sequence">${q.beforeCount>1?`${q.beforeCount-1} → `:""}${q.beforeCount} → <span aria-label="つぎの かず">？</span></div>`;
    if(q.mode==="increase") visual=`<div class="k2-change"><small>はじめに</small>${objects(q.symbol,q.beforeCount)}<span class="k2-add"><span>1こ ふえる</span>${symbolSvg(q.symbol)}</span></div>`;
    if(q.mode==="decrease") visual=`<div class="k2-change"><small>はじめに ${q.beforeCount}こ</small>${objects(q.symbol,q.beforeCount,true)}<small>しるしの 1こが なくなるよ</small></div>`;
    const buttons=q.choices.map(c=>`<button type="button" class="k-choice-button ${groupMode?"k-group-choice":""}" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${groupMode?`${symbolNames[q.symbol]} ${c.value}こ`:escapeHtml(c.label)}" ${inputEnabled?"":"disabled"}>${groupMode?objects(q.symbol,c.value):escapeHtml(c.label)}</button>`).join("");
    return `<div class="k-question k2-question"><h2>${escapeHtml(q.prompt)}</h2><div class="k2-visual">${visual}</div><p class="muted">こたえを タップしてね</p><div class="k-choices ${groupMode?"k-group-choices":""}">${buttons}</div></div>`;
  }
};
