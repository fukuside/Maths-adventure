import {roughAreaSvg} from '../core/rough-area.js';
export default {kind:'rough-area',render(q,{escapeHtml:e}){return '<div class="curriculum-question geometry-question"><div class="text-question">'+e(q.prompt)+'</div><svg viewBox="0 0 420 280" role="img" aria-label="方眼に重ねた湖の地図">'+roughAreaSvg(q)+'</svg><p class="muted">'+e(q.guide)+'</p><p class="muted">数字で答えよう。単位：m²</p></div>';}};
