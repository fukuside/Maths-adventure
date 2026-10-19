export default {kind:'times-table',render(q,{escapeHtml:e}){
 const groups=q.symbol?'<div class="table-groups">'+Array.from({length:q.groups},()=>'<div class="table-group">'+q.symbol.repeat(q.each)+'</div>').join('')+'</div>':'';
 return '<div class="curriculum-question"><div class="text-question">'+e(q.prompt)+'</div>'+groups+'<p class="muted">'+q.each+'こずつのまとまりを見つけよう。</p></div>';
}};