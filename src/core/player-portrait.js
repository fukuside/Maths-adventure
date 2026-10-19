const focusById={
 'kg-001':{N:[50,54,2.6],SR:[50,46,3],UR:[50,43,3]},
 'kg-002':{N:[50,44,3],SR:[50,42,3],UR:[50,40,3]},
 'kg-003':{N:[50,43,3],SR:[50,42,3],UR:[50,40,3]},
 'kg-004':{N:[50,43,3],SR:[48,43,3],UR:[50,40,3]},
 'kg-005':{N:[50,43,3],SR:[50,42,3],UR:[50,44,3.5]},
 'kg-006':{N:[50,42,3],SR:[50,42,3],UR:[50,40,3]},
 '073-unit-fenrir':{N:[45,43,3],SR:[43,38,3],UR:[41,37,3.5]},
 '074-density-titan':{N:[50,45,3],SR:[50,44,3.5],UR:[51,42,3.5]},
 '075-rate-mercury':{N:[50,39,3.5],SR:[50,40,3.5],UR:[50,40,4]}
};
export function renderPlayerPortrait(playerState,{getCard,escapeHtml:e},small=false){
 const key=playerState?.partnerKey,split=typeof key==='string'?key.lastIndexOf('_'):-1;
 const rarity=split>0?key.slice(split+1):'',card=split>0?getCard(key.slice(0,split)):null;
 const owned=Array.isArray(playerState?.unlockedCards)&&playerState.unlockedCards.includes(key);
 const src=owned&&card?.rewardReady!==false&&['N','SR','UR'].includes(rarity)?card?.images?.[rarity]:null;
 if(!src)return `<span class="player-portrait ${small?'player-portrait-small':''}" aria-hidden="true">🧙</span>`;
 const [x,y,zoom]=card.portraitFocus?.[rarity]??focusById[card.id]?.[rarity]??[50,42,3];
 return `<span class="player-portrait ${small?'player-portrait-small':''}" role="img" aria-label="パートナー：${e(card.name)}"><img class="player-portrait-image" src="${e(src)}" alt="" loading="lazy" style="width:${zoom*100}%;transform:translate(-${x}%,-${y}%)"></span>`;
}
