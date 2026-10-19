import {numberScaleSvg} from '../core/number-scale.js';
export default {kind:'number-scale',render(q,{escapeHtml:e}){return '<div class="curriculum-question geometry-question"><div class="text-question">'+e(q.prompt)+'</div><svg viewBox="0 0 420 235" role="img" aria-label="もとの数の位取り表">'+numberScaleSvg(q)+'</svg><p class="muted">'+e(q.guide)+'</p><p class="muted">数字で答えよう。</p></div>';}};
