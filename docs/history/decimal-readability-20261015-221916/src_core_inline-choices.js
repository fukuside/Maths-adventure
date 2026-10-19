export function isInlineChoice(q){return Array.isArray(q?.choices)&&q.choices.length>0&&/^[ABC]$/.test(String(q.answer))&&!String(q.kind).startsWith('k');}
export function makeInlineChoices(html,q,{escapeHtml:e,inputEnabled}){
 if(!isInlineChoice(q))return html;
 // Render one shared instruction after the buttons, removing legacy renderer guidance.
 html=html.replace(/<p\b[^>]*>\s*(?:A・B・Cから選んで「こたえる」を押そう。|答えのボタンを押してね)\s*<\/p>/g,'');
 let index=0;const stack=[];
 const converted=html.replace(/<\/?div\b[^>]*>/gi,tag=>{
  if(/^<\/div/i.test(tag)){const button=stack.pop();return button?'</button>':tag;}
  const c=tag.match(/class=["']([^"']*)["']/i)?.[1]||'';
  const option=/(?:^|\s)(?:[\w-]+-option|panel)(?:\s|$)/.test(c)&&index<q.choices.length;
  stack.push(option);
  if(!option)return tag;
  const choice=q.choices[index++];
  return tag.replace(/^<div/i,'<button type="button" data-action="inline-choice-answer" data-value="'+e(choice.id)+'" aria-label="'+e(choice.id+'：'+(choice.label??choice.name??choice.value??''))+'" '+(inputEnabled?'':'disabled')).replace(/class=["']([^"']*)["']/i,(_,cls)=>'class="'+cls+' inline-answer-choice"');
 });
 const instruction='<p class="inline-choice-instruction">答えのボタンを押してね</p>';
 if(index===q.choices.length)return '<div class="inline-choice-question">'+converted+instruction+'</div>';
 // A renderer without option cards still gets complete accessible choices.
 return '<div class="inline-choice-question">'+html+'<div class="inline-choice-fallback">'+q.choices.map(c=>'<button type="button" class="inline-answer-choice" data-action="inline-choice-answer" data-value="'+e(c.id)+'" '+(inputEnabled?'':'disabled')+'><small>'+e(c.id)+'</small><strong>'+e(c.label??c.name??c.value??c.id)+'</strong></button>').join('')+'</div>'+instruction+'</div>';
}
