import {symbolSvg,symbolNames} from "../visuals.js";
const slots=["TL","TR","BL","BR"];
function basket(symbol,count){return `<span class="k6-basket" role="img" aria-label="${count===0?"なにも ない かご":`${symbolNames[symbol]} ${count}こ`}"><span class="k6-items">${count===0?'<span class="k6-empty-basket">からっぽ</span>':Array.from({length:count},()=>symbolSvg(symbol)).join("")}</span></span>`;}
function positionBoard(symbol,position){return `<span class="k6-position-board" role="img" aria-label="${symbolNames[symbol]}が ${position==="TL"?"ひだりうえ":position==="TR"?"みぎうえ":position==="BL"?"ひだりした":"みぎした"}">${slots.map(slot=>`<span class="k6-position-cell">${slot===position?symbolSvg(symbol):""}</span>`).join("")}</span>`;}
export default {
  kind:"k6-choice",
  render(q,{escapeHtml,inputEnabled=false}){
    let visual="";
    if(q.mode==="count")visual=basket(q.symbol,q.count);
    if(q.mode==="zero")visual='<p class="muted">からっぽは「0こ」だよ。<br>からっぽの かごを えらぼう。</p>';
    if(q.mode==="make")visual=`<div class="k6-frame" role="img" aria-label="${q.total}この わくに ${q.count}こ はいっている">${Array.from({length:q.total},(_,i)=>`<span class="k6-frame-cell ${i<q.count?"":"k6-missing"}">${i<q.count?symbolSvg(q.symbol):""}</span>`).join("")}</div>`;
    if(q.mode==="change")visual=`<p class="muted">はじめに ${q.beforeCount}こ</p><span class="k6-change-items">${Array.from({length:q.beforeCount},(_,i)=>`<span class="k6-change-item ${q.operation==="decrease"&&i===q.beforeCount-1?"k6-removed":""}">${symbolSvg(q.symbol)}</span>`).join("")}</span>${q.operation==="increase"?`<span class="k6-add">1こ ふえる ${symbolSvg(q.symbol)}</span>`:'<p class="muted">しるしの 1こが なくなるよ。</p>'}`;
    if(q.mode==="position")visual=`<p class="muted">みほん</p>${positionBoard(q.symbol,q.position)}`;
    const group=["zero","change"].includes(q.mode);
    const buttons=q.choices.map(c=>{
      const content=q.mode==="position"?positionBoard(q.symbol,c.value):group?basket(q.symbol,c.value):escapeHtml(c.label);
      const label=q.mode==="position"?`ばしょの こたえ ${c.id}`:`${c.value}こ`;
      return `<button type="button" class="k-choice-button k6-choice ${group?"k6-group-choice":""}" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question k6-question"><h2>${escapeHtml(q.prompt)}</h2><div class="k6-visual">${visual}</div><p class="muted">こたえを タップしてね</p><div class="k-choices ${group?"k-group-choices":""}">${buttons}</div></div>`;
  }
};
