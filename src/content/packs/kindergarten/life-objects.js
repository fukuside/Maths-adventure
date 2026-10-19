export const objectsByShape = {
  circle: ["plate", "clock", "cookie"],
  triangle: ["rice", "sandwich", "pizza"],
  square: ["cloth", "window", "cracker"]
};
export const objectNames = { plate:"おさら",clock:"とけい",cookie:"クッキー",rice:"おにぎり",sandwich:"サンドイッチ",pizza:"ピザ",cloth:"ハンカチ",window:"まど",cracker:"クラッカー",toast:"パン" };
const palette={blue:"#70bbef",pink:"#ef9ebd",green:"#86c899"};
export function lifeObjectSvg(item,color,scale=1) {
  const accent=palette[color]??palette.blue;
  const drawings={
    plate:`<circle cx="50" cy="50" r="34" fill="${accent}"/><circle cx="50" cy="50" r="26" fill="#fff8ec"/><path d="M33 56q17 17 34 0" fill="none"/><circle cx="39" cy="44" r="2" fill="#3d485d"/><circle cx="61" cy="44" r="2" fill="#3d485d"/>`,
    clock:`<circle cx="50" cy="50" r="34" fill="${accent}"/><circle cx="50" cy="50" r="27" fill="#fffbed"/><path d="M50 27v5M50 68v5M27 50h5M68 50h5M50 36v14l12 7" fill="none" stroke-linecap="round"/><circle cx="50" cy="50" r="3" fill="#47536b"/>`,
    cookie:'<circle cx="50" cy="50" r="34" fill="#efc486"/><circle cx="35" cy="37" r="4" fill="#896246"/><circle cx="61" cy="33" r="4" fill="#896246"/><circle cx="66" cy="57" r="4" fill="#896246"/><circle cx="35" cy="63" r="4" fill="#896246"/><circle cx="47" cy="51" r="3" fill="#896246"/>',
    rice:'<polygon points="50,15 85,80 15,80" fill="#fff9e9" stroke-linejoin="round"/><path d="M37 80V59q13-5 26 0v21Z" fill="#3c6254"/><circle cx="40" cy="49" r="2" fill="#3d485d"/><circle cx="60" cy="49" r="2" fill="#3d485d"/><path d="M46 55q4 4 8 0" fill="none"/>',
    sandwich:'<polygon points="18,18 82,18 82,82" fill="#efc88c" stroke-linejoin="round"/><polygon points="27,25 75,25 75,72" fill="#fff7e6"/><path d="m34 29 35 35" stroke="#7fb96d" stroke-width="5"/><path d="m40 27 29 29" stroke="#eb8d77" stroke-width="4"/>',
    pizza:'<polygon points="50,84 16,18 84,18" fill="#f7d579" stroke-linejoin="round"/><path d="M19 21h62" stroke="#c58b53" stroke-width="7"/><circle cx="39" cy="38" r="5" fill="#e9856d"/><circle cx="62" cy="38" r="5" fill="#e9856d"/><circle cx="50" cy="58" r="5" fill="#e9856d"/>',
    cloth:`<rect x="17" y="17" width="66" height="66" rx="1" fill="${accent}"/><path d="M27 17v66M73 17v66M17 27h66M17 73h66" stroke="#ffffff" stroke-width="3"/><path d="M36 56q14-18 28 0-14 18-28 0" fill="#fff9e9"/>`,
    window:`<rect x="17" y="17" width="66" height="66" fill="#dcc294"/><rect x="25" y="25" width="50" height="50" fill="${accent}"/><path d="M50 25v50M25 50h50" stroke="#fff9ec" stroke-width="5"/><path d="m29 42 10-10m18 34 10-10" stroke="#fff" stroke-width="3"/>`,
    cracker:'<rect x="17" y="17" width="66" height="66" rx="1" fill="#efc78b"/><g fill="#ae8159" stroke="none"><circle cx="33" cy="33" r="3"/><circle cx="50" cy="33" r="3"/><circle cx="67" cy="33" r="3"/><circle cx="33" cy="50" r="3"/><circle cx="50" cy="50" r="3"/><circle cx="67" cy="50" r="3"/><circle cx="33" cy="67" r="3"/><circle cx="50" cy="67" r="3"/><circle cx="67" cy="67" r="3"/></g>',
    toast:'<rect x="17" y="17" width="66" height="66" rx="2" fill="#c68b4e" stroke="#966334" stroke-width="2"/><rect x="23" y="23" width="54" height="54" rx="2" fill="#fff0cd" stroke="#e4bd7a" stroke-width="2"/><rect x="31" y="31" width="38" height="38" rx="8" fill="#edc68b" opacity=".45" stroke="none"/><g fill="#cfaa73" stroke="none"><ellipse cx="35" cy="40" rx="2" ry="3"/><ellipse cx="59" cy="35" rx="3" ry="2"/><ellipse cx="48" cy="60" rx="2" ry="3"/><circle cx="63" cy="57" r="2"/></g>'
  };
  return `<svg class="k3-shape" viewBox="0 0 100 100" aria-hidden="true" focusable="false" data-item="${item}"><g stroke="#526079" stroke-width="2" transform="translate(50 50) scale(${scale}) translate(-50 -50)">${drawings[item]??drawings.plate}</g></svg>`;
}
