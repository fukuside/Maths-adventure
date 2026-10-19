import { lifeObjectSvg, objectNames } from "../life-objects.js";
function pairSvg(arrangement,color,scale) {
  const second=arrangement==="joined"?'18,18 82,82 18,82':arrangement==="apart"?'3,32 67,96 3,96':'18,18 82,18 82,82';
  const first=arrangement==="apart"?'33,3 97,3 97,67':'18,18 82,18 82,82';
  return `<svg class="k3-shape k3-pair" viewBox="0 0 100 100" aria-hidden="true" focusable="false" data-arrangement="${arrangement}"><g stroke="#a87343" stroke-width="4" transform="translate(50 50) scale(${scale}) translate(-50 -50)"><polygon points="${first}" fill="#fff0d4"/><polygon points="${second}" fill="#fff0d4" ${arrangement==="overlap"?'fill-opacity=".65" stroke-dasharray="4 3"':''}/></g></svg>`;
}
export default {
  kind:"k3-choice",
  render(q,{escapeHtml,inputEnabled=false}) {
    let visual="";
    if(q.mode==="match")visual=`<div class="k3-target" role="img" aria-label="みほんの ${objectNames[q.targetItem]}">${lifeObjectSvg(q.targetItem,q.targetColor,q.targetScale)}</div>`;
    if(q.mode==="group")visual=`<div class="k3-target" role="img" aria-label="${q.groupItems.map(item=>objectNames[item]).join("と")}の なかま">${q.groupItems.map(item=>lifeObjectSvg(item,q.color,q.scale)).join("")}</div>`;
    if(q.mode==="combine")visual=`<div class="k3-target" role="img" aria-label="しかくい パンの みほん">${lifeObjectSvg("toast",q.color,q.scale)}</div><p class="muted">サンドイッチ 2つを あわせるよ。<br>はなれたり かさなったり しないようにね。</p>`;
    const buttons=q.choices.map(c=>{
      const label=q.mode==="combine"?({joined:"サンドイッチを あわせた かたち",apart:"サンドイッチが はなれた かたち",overlap:"サンドイッチが かさなった かたち"})[c.value]:objectNames[c.item];
      const content=q.mode==="combine"?pairSvg(c.value,q.color,q.scale):lifeObjectSvg(c.item,q.color,q.scale);
      return `<button type="button" class="k-choice-button k3-choice-button k3-life-button" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}${q.mode==="combine"?"":`<small class="k3-item-name">${escapeHtml(label)}</small>`}</button>`;
    }).join("");
    return `<div class="k-question k3-question"><h2>${escapeHtml(q.prompt)}</h2>${visual}<p class="muted">こたえを タップしてね</p><div class="k-choices">${buttons}</div></div>`;
  }
};
