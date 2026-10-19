const palette={blue:"#51adf1",pink:"#eb86b6",green:"#64bb83"};
const names={circle:"まる",triangle:"さんかく",square:"しかく"};
function shapeSvg(shape,color,scale) {
  const geometry=shape==="circle"?'<circle cx="50" cy="50" r="32"/>':shape==="triangle"?'<polygon points="50,15 86,80 14,80"/>':'<rect x="18" y="18" width="64" height="64"/>';
  return `<svg class="k3-shape" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g fill="${palette[color]}" stroke="#23394f" stroke-width="2" transform="translate(50 50) scale(${scale}) translate(-50 -50)">${geometry}</g></svg>`;
}
function pairSvg(arrangement,color,scale) {
  const second=arrangement==="joined"?'18,18 82,82 18,82':arrangement==="apart"?'3,32 67,96 3,96':'18,18 82,18 82,82';
  const first=arrangement==="apart"?'33,3 97,3 97,67':'18,18 82,18 82,82';
  return `<svg class="k3-shape k3-pair" viewBox="0 0 100 100" aria-hidden="true" focusable="false" data-arrangement="${arrangement}"><g stroke="#23394f" stroke-width="2" transform="translate(50 50) scale(${scale}) translate(-50 -50)"><polygon points="${first}" fill="${palette[color]}"/><polygon points="${second}" fill="#ffe08c" ${arrangement==="overlap"?'fill-opacity=".65" stroke-dasharray="4 3"':''}/></g></svg>`;
}
export default {
  kind:"k3-choice",
  render(q,{escapeHtml,inputEnabled=false}) {
    let visual="";
    if(q.mode==="match")visual=`<div class="k3-target" role="img" aria-label="みほんの ${names[q.targetShape]}">${shapeSvg(q.targetShape,q.targetColor,q.targetScale)}</div>`;
    if(q.mode==="group")visual=`<div class="k3-target" role="img" aria-label="${names[q.targetShape]}の なかま">${shapeSvg(q.targetShape,q.color,q.scale)}${shapeSvg(q.targetShape,q.color,q.scale)}</div>`;
    if(q.mode==="combine")visual=`<div class="k3-target" role="img" aria-label="しかくの みほん">${shapeSvg("square",q.color,q.scale)}</div><p class="muted">さんかく 2まいを あわせるよ。<br>はなれたり かさなったり しないようにね。</p>`;
    const buttons=q.choices.map(c=>{
      const label=q.mode==="combine"?({joined:"2まいを あわせた かたち",apart:"2まいが はなれた かたち",overlap:"2まいが かさなった かたち"})[c.value]:names[c.value];
      const content=q.mode==="combine"?pairSvg(c.value,q.color,q.scale):shapeSvg(c.value,q.color,q.scale);
      return `<button type="button" class="k-choice-button k3-choice-button" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question k3-question"><h2>${escapeHtml(q.prompt)}</h2>${visual}<p class="muted">こたえを タップしてね</p><div class="k-choices">${buttons}</div></div>`;
  }
};
