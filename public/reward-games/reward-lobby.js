window.RewardGameLobby=function(c){
 const root=c.root;root.dataset.rewardLobby='';let playing=false;
 const bar=document.createElement('div');bar.className='rg-heading';const title=document.createElement('h1');title.textContent=c.title;bar.append(title);for(const el of c.persistent||[])if(el)bar.append(el);root.prepend(bar);
 const lobby=document.createElement('section');lobby.className='rg-lobby';lobby.setAttribute('aria-label','モンスター選択と遊び方');
 const heading=document.createElement('h2');heading.textContent='モンスターを えらぼう';const info=document.createElement('p');info.textContent=c.intro;
 const rules=document.createElement('ol');for(const text of c.rules){const li=document.createElement('li');li.textContent=text;rules.append(li)}
 c.picker.classList.add('rg-monsters');const detail=document.createElement('p');detail.className='rg-detail';detail.setAttribute('aria-live','polite');
 const start=document.createElement('button');start.type='button';start.className='rg-start';start.textContent='ゲームスタート ▶';start.dataset.gameStart='';
 lobby.append(heading,info,c.picker,detail,rules,start);const play=document.createElement('section');play.className='rg-play';play.hidden=true;play.setAttribute('aria-label','ゲーム画面');
 const back=document.createElement('button');back.type='button';back.className='rg-back';back.textContent='‹ モンスター選択へ';const notice=document.createElement('span');notice.className='rg-notice';notice.setAttribute('aria-live','polite');play.append(back,notice);
 for(const el of c.nodes)if(el)play.append(el);root.append(lobby,play);
 function refresh(){detail.textContent=c.detail();start.disabled=!!c.disabled;}
 c.picker.addEventListener('click',refresh);refresh();
 start.onclick=()=>{if(c.disabled)return;playing=true;lobby.hidden=true;play.hidden=false;c.onStart?.();window.scrollTo(0,0);};
 back.onclick=()=>{if(c.canBack&&!c.canBack()){notice.textContent=c.backMessage||'このプレイが終わってから もどれるよ';return;}c.onBack?.();playing=false;play.hidden=true;lobby.hidden=false;notice.textContent='';refresh();window.scrollTo(0,0);};
 function fallbackImage(im){if(im.tagName!=='IMG'||im.dataset.cardFallback)return;const source=c.fallback?.(im.getAttribute('src'));if(source&&source!==im.getAttribute('src')){im.dataset.cardFallback='true';im.src=source;}}root.addEventListener('error',e=>fallbackImage(e.target),true);for(const im of root.querySelectorAll('img'))if(im.complete&&!im.naturalWidth)fallbackImage(im);
 return {isPlaying:()=>playing,refresh};
};