export function isCompleteExpressionInput(value){
 const raw=String(value??'').normalize('NFKC').replace(/[−－]/g,'-').replace(/×/g,'*').replace(/÷/g,'/').replace(/\s/g,'');
 const number='-?(?:[0-9]+(?:\\.[0-9]+)?|\\.[0-9]+)';
 return new RegExp('^'+number+'[+*/-]'+number+'='+number+'$').test(raw);
}
