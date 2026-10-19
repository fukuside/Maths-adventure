import {solidNetSvg} from '../core/solid-net.js';
export default {kind:'solid-net',render(q,{escapeHtml:e}){return '<div class="curriculum-question geometry-question"><div class="text-question">'+e(q.prompt)+'</div><svg viewBox="0 0 420 300" role="img" aria-label="底面と側面を色分けした立体の展開図">'+solidNetSvg(q)+'</svg><p class="muted">'+e(q.guide)+'</p><p class="muted">数字で答えよう。</p></div>';}};
