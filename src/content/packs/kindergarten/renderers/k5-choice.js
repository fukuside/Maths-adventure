import { lifeObjectSvg } from "../life-objects.js";
import { itemSvg, names, groupNames } from "../k5-objects.js";
import { buildRoadScene } from "../k5-roads.js";
function motif(value,color){const shape=value.endsWith("circle")?"plate":value.endsWith("triangle")?"rice":"cloth";const tint=value.startsWith("blue-")?"blue":value.startsWith("pink-")?"pink":value.startsWith("green-")?"green":color;return lifeObjectSvg(shape,tint,1);}
function road(route,blocked){
  const scene=buildRoadScene(route,blocked);
  const paths=scene.edges.map(([a,b])=>{
    const [x1,y1]=scene.nodes[a],[x2,y2]=scene.nodes[b];
    const line=route==="curve"?`M${x1} ${y1}Q${(x1+x2)/2} ${a==="S"?30:90} ${x2} ${y2}`:`M${x1} ${y1}L${x2} ${y2}`;
    return `<path d="${line}" stroke="#bfa67d" stroke-width="13" fill="none" stroke-linecap="round"/><path d="${line}" stroke="#fff6d8" stroke-width="2" stroke-dasharray="4 4" fill="none"/>`;
  }).join("");
  const water=scene.river?scene.waterDirection==="horizontal"?'<path d="M2 51q35-8 70 0t70 0t86 0v20q-35 8-70 0t-70 0t-86 0Z" fill="#89d3f2"/><path d="M20 59h25m30 5h22m40-7h22" stroke="#e7faff" stroke-width="3"/>':'<path d="M92 2q-8 25 0 50t0 65h36q8-25 0-50t0-65Z" fill="#89d3f2"/><path d="M99 14h18m-19 25h21m-20 31h18m-19 28h20" stroke="#e7faff" stroke-width="3"/>':"";
  const bridge=scene.river&&!blocked?scene.waterDirection==="horizontal"?'<path d="M190 37v46" stroke="#b78352" stroke-width="20"/>'+Array.from({length:5},(_,i)=>`<path d="M181 ${40+i*9}h18" stroke="#f9dab7" stroke-width="2"/>`).join(""):`<path d="M75 ${scene.nodes.J[1]}h70" stroke="#b78352" stroke-width="20"/>${Array.from({length:6},(_,i)=>`<path d="M${80+i*11} ${scene.nodes.J[1]-9}v18" stroke="#f9dab7" stroke-width="2"/>`).join("")}`:"";
  const wall=!scene.river&&blocked&&!scene.uShape?`<rect x="104" y="${scene.maze?scene.nodes.U[1]-13:47}" width="15" height="26" rx="2" fill="#a18c84" stroke="#605958"/>`:"";
  const gap=scene.uShape&&blocked?`<g fill="#efb5c0"><circle cx="105" cy="${scene.nodes.W[1]-7}" r="4"/><circle cx="118" cy="${scene.nodes.W[1]+6}" r="4"/></g>`:"";
  const [sx,sy]=scene.nodes[scene.start],[tx,ty]=scene.nodes[scene.goal];
  return `<svg class="k5-road" viewBox="0 0 230 120" aria-hidden="true" data-road="${blocked?"blocked":"open"}" data-scene="${route}" data-river="${scene.river}" data-gap="${Boolean(scene.uShape&&blocked)}"><rect x="1" y="1" width="228" height="118" rx="12" fill="#eff8dd"/><circle cx="38" cy="15" r="6" fill="#afd395"/><circle cx="192" cy="104" r="7" fill="#afd395"/>${water}${paths}${bridge}${wall}${gap}<g transform="translate(${sx-20} ${sy-60})"><circle cx="20" cy="60" r="11" fill="#f2c995"/><path d="m11 52 1-9 8 7m1 0 8-7 1 9" fill="#f2c995" stroke="#9b734e"/><circle cx="16" cy="58" r="1.5"/><circle cx="24" cy="58" r="1.5"/></g><g transform="translate(${tx-205} ${ty-60})"><path d="M194 48h23v25h-23Z" fill="#f3d199"/><path d="m187 49 18-16 18 16" fill="#e9938d"/><path d="M202 60h7v13h-7Z" fill="#a77b58"/></g></svg>`;
}
export default {
  kind:"k5-choice",
  render(q,{escapeHtml,inputEnabled=false}){
    const patterned=["alternate","shape-pattern"].includes(q.mode);let visual="";
    if(patterned)visual=`<div class="k5-sequence">${q.sequence.map(x=>motif(x,q.color)).join("")}<span class="k5-empty">？</span></div>`;
    if(q.mode==="size-order")visual=`<div class="k5-size-sequence">${q.sequence.map((size,i)=>i===q.missingIndex?'<span class="k5-empty">？</span>':lifeObjectSvg(q.item,q.color,size)).join('<span class="k5-arrow">→</span>')}</div>`;
    if(q.mode==="group")visual=`<div class="k5-group-box"><strong>${groupNames[q.category]}の なかま</strong><div class="k3-target" role="img" aria-label="${q.targetItems.map(x=>names[x]).join("と")}。あと ひとつ えらぶよ">${q.targetItems.map(itemSvg).join("")}<span class="k5-empty">？</span></div></div><p class="muted">したの 3つから えらんで、なかまに いれよう。</p>`;
    if(q.mode==="path")visual=`<p class="muted">ねこから おうちまで、みちを たどろう。<br>${q.route.startsWith("u-")?"はしや みちの つながりを よくみてね。":q.route.startsWith("river")?"かわは はしを わたるよ。":q.route.startsWith("maze")?"わかれみちも よく みてね。":"みちが つながっているかな？"}</p>`;
    const buttons=q.choices.map(c=>{
      const content=patterned?motif(c.value,q.color):q.mode==="size-order"?lifeObjectSvg(q.item,q.color,c.value):q.mode==="path"?road(q.route,c.value==="blocked"):itemSvg(c.value);
      const label=patterned?c.value.endsWith("circle")?"まるい もの":c.value.endsWith("triangle")?"さんかくの もの":"しかくい もの":q.mode==="path"?`みち ${c.id}`:q.mode==="size-order"?"おおきさの こたえ":names[c.value];
      return `<button type="button" class="k-choice-button k5-choice ${q.mode==="path"?"k5-road-choice":""}" data-action="k-answer" data-value="${escapeHtml(c.id)}" aria-label="${escapeHtml(label)}" ${inputEnabled?"":"disabled"}>${content}</button>`;
    }).join("");
    return `<div class="k-question k5-question"><h2>${escapeHtml(q.prompt)}</h2>${visual}<p class="muted">こたえを タップしてね</p><div class="k-choices ${q.mode==="path"?"k-group-choices":""}">${buttons}</div></div>`;
  }
};
