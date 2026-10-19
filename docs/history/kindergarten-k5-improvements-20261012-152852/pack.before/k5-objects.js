import { symbolSvg } from "./visuals.js";
export const groups={fruit:["apple","banana","pear"],animal:["cat","dog","rabbit"],toy:["ball","car","teddy"]};
export const names={apple:"りんご",banana:"バナナ",pear:"なし",cat:"ねこ",dog:"いぬ",rabbit:"うさぎ",ball:"ボール",car:"くるま",teddy:"ぬいぐるみ"};
export function itemSvg(item){
  if(["apple","ball"].includes(item))return symbolSvg(item);
  const face='<circle cx="24" cy="31" r="2" fill="#374055"/><circle cx="40" cy="31" r="2" fill="#374055"/><path d="M28 41q4 5 8 0" fill="none" stroke="#374055" stroke-width="2"/>';
  const art={
    banana:'<path d="M12 12q4 37 41 27-10 24-31 12Q8 42 12 12" fill="#f5d56d" stroke="#8e703f" stroke-width="2"/><path d="M14 21q6 25 32 24" fill="none" stroke="#f3b94a" stroke-width="3"/>',
    pear:'<path d="M25 18q-2-12 8-12t8 12q0 6 10 17 14 25-20 26T17 35q10-11 8-17" fill="#b6cf76" stroke="#627845" stroke-width="2"/><path d="M33 7V2" stroke="#8b6748" stroke-width="3"/>',
    cat:`<path d="m11 29 2-20 16 12h8L52 9l2 20" fill="#f3c991" stroke="#966b45" stroke-width="2"/><ellipse cx="32" cy="36" rx="23" ry="20" fill="#f3c991" stroke="#966b45" stroke-width="2"/>${face}<path d="M9 38h12M43 38h12" stroke="#966b45"/>`,
    dog:`<ellipse cx="12" cy="29" rx="9" ry="19" fill="#b48d69"/><ellipse cx="52" cy="29" rx="9" ry="19" fill="#b48d69"/><ellipse cx="32" cy="34" rx="22" ry="23" fill="#efdbc1" stroke="#966b45" stroke-width="2"/>${face}<ellipse cx="32" cy="38" rx="4" ry="3" fill="#675044"/>`,
    rabbit:`<ellipse cx="23" cy="16" rx="7" ry="14" fill="#fff1e7" stroke="#a98379" stroke-width="2"/><ellipse cx="41" cy="16" rx="7" ry="14" fill="#fff1e7" stroke="#a98379" stroke-width="2"/><ellipse cx="32" cy="38" rx="22" ry="20" fill="#fff1e7" stroke="#a98379" stroke-width="2"/>${face}`,
    car:'<path d="M7 29h9l7-13h20l8 13h7v19H7Z" fill="#78bbee" stroke="#426587" stroke-width="2"/><path d="M24 20h16l6 9H20Z" fill="#e9faff"/><circle cx="18" cy="49" r="8" fill="#52627c"/><circle cx="48" cy="49" r="8" fill="#52627c"/>',
    teddy:`<circle cx="14" cy="14" r="9" fill="#bc9469"/><circle cx="50" cy="14" r="9" fill="#bc9469"/><ellipse cx="32" cy="30" rx="23" ry="23" fill="#dab388" stroke="#966b45" stroke-width="2"/>${face}<path d="m20 50 12 9 12-9" fill="#ee94ad"/>`
  };
  return `<svg class="k-symbol" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${art[item]}</svg>`;
}
