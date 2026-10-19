(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const sm={id:1,grade:"1年生",title:"はじめての算数",icon:"🌱",description:"足し算と引き算の基礎",units:["addition","subtraction"],available:!0},om={id:2,grade:"2年生",title:"生活の算数",icon:"⏰",description:"時刻とお金",units:["time","money"],available:!0},am={id:3,grade:"3年生",title:"計算マスター",icon:"⚔️",description:"掛け算と割り算",units:["multiplication","division"],available:!0},cm={id:4,grade:"4年生",title:"数の世界",icon:"💎",description:"小数と分数",units:["decimal","fraction"],available:!0},lm={id:5,grade:"5年生",title:"Coming Soon",icon:"🔒",description:"今後追加予定",units:[],available:!1},um={id:6,grade:"6年生",title:"Coming Soon",icon:"🔒",description:"今後追加予定",units:[],available:!1},dm={id:"w1-addition-1",sort:1,world:1,unit:"addition",unitLabel:"足し算",name:"足し算ってなに？",isBoss:!1,type:"addition_meaning",rewardGems:5,presentation:"persistent",questionCount:10},hm={id:"w1-addition-2",sort:2,world:1,unit:"addition",unitLabel:"足し算",name:"1けた＋1けた",isBoss:!1,type:"addition_single",rewardGems:5,presentation:"persistent",questionCount:10},pm={id:"w1-addition-3",sort:3,world:1,unit:"addition",unitLabel:"足し算",name:"1けた＋2けた",isBoss:!1,type:"addition_mixed",rewardGems:5,presentation:"persistent",questionCount:10},mm={id:"w1-addition-4",sort:4,world:1,unit:"addition",unitLabel:"足し算",name:"フラッシュ足し算",isBoss:!1,type:"addition_flash",rewardGems:5,presentation:"flash",questionCount:10,max:20},fm={id:"w1-addition-5",sort:5,world:1,unit:"addition",unitLabel:"足し算",name:"足し算の文章題",isBoss:!1,type:"addition_word",rewardGems:5,presentation:"persistent",questionCount:10},gm={id:"w1-addition-boss",sort:6,world:1,unit:"addition",unitLabel:"足し算",name:"足し算の王",isBoss:!0,type:"addition_boss",rewardGems:10,presentation:"persistent",questionCount:10},_m={id:"w1-subtraction-1",sort:1,world:1,unit:"subtraction",unitLabel:"引き算",name:"引き算ってなに？",isBoss:!1,type:"subtraction_meaning",rewardGems:5,presentation:"persistent",questionCount:10},ym={id:"w1-subtraction-2",sort:2,world:1,unit:"subtraction",unitLabel:"引き算",name:"1けた−1けた",isBoss:!1,type:"subtraction_single",rewardGems:5,presentation:"persistent",questionCount:10},vm={id:"w1-subtraction-3",sort:3,world:1,unit:"subtraction",unitLabel:"引き算",name:"10〜19−1けた",isBoss:!1,type:"subtraction_teens",rewardGems:5,presentation:"persistent",questionCount:10},bm={id:"w1-subtraction-4",sort:4,world:1,unit:"subtraction",unitLabel:"引き算",name:"フラッシュ引き算",isBoss:!1,type:"subtraction_flash",rewardGems:5,presentation:"flash",questionCount:10},wm={id:"w1-subtraction-5",sort:5,world:1,unit:"subtraction",unitLabel:"引き算",name:"引き算の文章題",isBoss:!1,type:"subtraction_word",rewardGems:5,presentation:"persistent",questionCount:10},Tm={id:"w1-subtraction-boss",sort:6,world:1,unit:"subtraction",unitLabel:"引き算",name:"引き算の王",isBoss:!0,type:"subtraction_boss",rewardGems:10,presentation:"persistent",questionCount:10},Em={id:"w2-money-1",sort:1,world:2,unit:"money",unitLabel:"お金",name:"いくら あるかな？",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_sum",denominations:[1,5,10,50,100,500],minItems:2,maxItems:5,billChance:0,cardId:"022-coin-rabbit",rewardGems:5,dropRates:{N:.6,SR:.32,UR:.08}},Im={id:"w2-money-2",sort:3,world:2,unit:"money",unitLabel:"お金",name:"ちょうど はらおう",presentation:"persistent",isBoss:!1,keypad:"choice",type:"money_exact_pay",cardId:"023-yen-cat",rewardGems:5,dropRates:{N:.6,SR:.32,UR:.08}},km={id:"w2-money-3",sort:4,world:2,unit:"money",unitLabel:"お金",name:"お金の たしざん",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_add",cardId:"024-wallet-bear",rewardGems:5,dropRates:{N:.6,SR:.32,UR:.08}},Am={id:"w2-money-4",sort:5,world:2,unit:"money",unitLabel:"お金",name:"お金の ひきざん",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_sub",cardId:"025-change-fox",rewardGems:5,dropRates:{N:.6,SR:.32,UR:.08}},Sm={id:"w2-money-5",sort:6,world:2,unit:"money",unitLabel:"お金",name:"お札と硬貨を 数えよう",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_sum",denominations:[50,100,500,1e3,5e3,1e4],minItems:2,maxItems:4,billChance:.85,cardId:"026-shop-bird",rewardGems:7,dropRates:{N:.6,SR:.32,UR:.08}},Rm={id:"w2-money-boss",sort:9,world:2,unit:"money",unitLabel:"お金",name:"おかいもの ボス戦",presentation:"persistent",isBoss:!0,keypad:"money",type:"money_boss",cardId:"028-money-king",rewardGems:10,dropRates:{N:.6,SR:.32,UR:.08}},Cm={id:"w2-money-can-buy-1",sort:2,world:2,unit:"money",unitLabel:"お金",name:"どれが買えるかな？",presentation:"persistent",isBoss:!1,keypad:"choice",type:"money_can_buy",budgets:[100,300,500],cardId:"022-coin-rabbit",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},$m={id:"w2-money-change-1",sort:7,world:2,unit:"money",unitLabel:"お金",name:"おつりはいくら？",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_change",payments:[100,500,1e3],cardId:"022-coin-rabbit",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},Pm={id:"w2-money-shopping-1",sort:8,world:2,unit:"money",unitLabel:"お金",name:"おかいもの2つ買おう",presentation:"persistent",isBoss:!1,keypad:"money",type:"money_shopping",payments:[500,1e3],cardId:"022-coin-rabbit",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},Nm={id:"w2-time-1",sort:1,world:2,unit:"time",unitLabel:"時刻",name:"なんじなんぷん？",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_read",minuteChoices:[0],cardId:"015-minute-mouse",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},Dm={id:"w2-time-2",sort:2,world:2,unit:"time",unitLabel:"時刻",name:"30分の時刻",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_read",minuteChoices:[0,30],cardId:"016-hour-owl",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},xm={id:"w2-time-3",sort:3,world:2,unit:"time",unitLabel:"時刻",name:"15分・45分の時刻",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_read",minuteChoices:[0,15,30,45],cardId:"017-clock-cat",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},Vm={id:"w2-time-4",sort:4,world:2,unit:"time",unitLabel:"時刻",name:"分の読み方",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_minute_read",minuteChoices:[0,5,10,15,20,25,30,35,40,45,50,55],rewardGems:5},Om={id:"w2-time-5",sort:5,world:2,unit:"time",unitLabel:"時刻",name:"今からなん分後？",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_elapsed_after",minuteChoices:[0,15,30,45],elapsedChoices:[15,30,45,60,90,120],rewardGems:5},Mm={id:"w2-time-6",sort:6,world:2,unit:"time",unitLabel:"時刻",name:"今からなん分前？",presentation:"persistent",isBoss:!1,keypad:"clock",type:"clock_elapsed_before",minuteChoices:[0,15,30,45],elapsedChoices:[15,30,45,60,90,120],rewardGems:7},Lm={id:"w2-time-7",sort:7,world:2,unit:"time",unitLabel:"時刻",name:"朝と夜の24時間表記",presentation:"persistent",isBoss:!1,keypad:"number",type:"clock_24h",morningHours:[6,7,8,9,10,11],nightHours:[18,19,20,21,22,23],cardId:"015-minute-mouse",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},Um={id:"w2-time-boss",sort:99,world:2,unit:"time",unitLabel:"時刻",name:"時刻マスター",presentation:"persistent",isBoss:!0,keypad:"clock",type:"clock_boss",minuteChoices:[0,5,10,15,20,25,30,35,40,45,50,55],elapsedChoices:[15,30,45,60,90,120],cardId:"021-chrono-king",rewardGems:10,dropRates:{N:.7,SR:.25,UR:.05}},Fm={id:"w3-division-1",sort:1,world:3,unit:"division",unitLabel:"わり算",name:"わり算ってなに？",isBoss:!1,type:"division_meaning",cardId:"042-half-penguin",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},jm={id:"w3-division-2",sort:2,world:3,unit:"division",unitLabel:"わり算",name:"わり算のきほん",isBoss:!1,type:"division_basic",cardId:"043-divide-bird",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Bm={id:"w3-division-3",sort:3,world:3,unit:"division",unitLabel:"わり算",name:"九九をつかってわり算",isBoss:!1,type:"division_fact_family",cardId:"044-share-rabbit",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},qm={id:"w3-division-4",sort:4,world:3,unit:"division",unitLabel:"わり算",name:"1けたでわる",isBoss:!1,type:"division_single",cardId:"045-group-golem",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},zm={id:"w3-division-5",sort:5,world:3,unit:"division",unitLabel:"わり算",name:"わり算の文章題",isBoss:!1,type:"division_word",cardId:"046-remainder-cat",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Km={id:"w3-division-6",sort:6,world:3,unit:"division",unitLabel:"わり算",name:"フラッシュわり算",isBoss:!1,type:"division_flash",cardId:"047-quotient-wolf",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"flash",questionCount:10},Gm={id:"w3-division-boss",sort:7,world:3,unit:"division",unitLabel:"わり算",name:"わり算の王",isBoss:!0,type:"division_boss",cardId:"048-divide-emperor",rewardGems:10,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Wm={id:"w3-multiplication-1",sort:1,world:3,unit:"multiplication",unitLabel:"掛け算",name:"かけ算ってなに？",isBoss:!1,type:"multiply_meaning",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Hm={id:"w3-multiplication-2",sort:2,world:3,unit:"multiplication",unitLabel:"掛け算",name:"九九のきほん",isBoss:!1,type:"multiply_basics",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Qm={id:"w3-multiplication-3",sort:3,world:3,unit:"multiplication",unitLabel:"掛け算",name:"九九をマスター①",isBoss:!1,type:"multiply_master",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10,minTable:1,maxTable:3},Jm={id:"w3-multiplication-4",sort:4,world:3,unit:"multiplication",unitLabel:"掛け算",name:"九九をマスター②",isBoss:!1,type:"multiply_master",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10,minTable:4,maxTable:6},Xm={id:"w3-multiplication-5",sort:5,world:3,unit:"multiplication",unitLabel:"掛け算",name:"九九をマスター③",isBoss:!1,type:"multiply_master",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10,minTable:7,maxTable:9},Ym={id:"w3-multiplication-6",sort:6,world:3,unit:"multiplication",unitLabel:"掛け算",name:"かけ算の文章題",isBoss:!1,type:"multiply_word",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"persistent",questionCount:10},Zm={id:"w3-multiplication-7",sort:7,world:3,unit:"multiplication",unitLabel:"掛け算",name:"フラッシュ九九",isBoss:!1,type:"multiply_flash",cardId:"029-waterpon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},presentation:"flash",questionCount:10},ef={id:"w3-multiplication-boss",sort:8,world:3,unit:"multiplication",unitLabel:"掛け算",name:"九九の王",isBoss:!0,type:"multiply_boss",cardId:"029-waterpon",rewardGems:10,dropRates:{N:.6,SR:.3,UR:.1},presentation:"persistent",questionCount:10},tf={id:"w4-decimal-1",sort:1,world:4,unit:"decimal",unitLabel:"小数",name:"小数をみつけよう",presentation:"persistent",isBoss:!1,keypad:"choice",type:"decimal_visual_basic",cardId:"049-point-slime",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},nf={id:"w4-decimal-2",sort:2,world:4,unit:"decimal",unitLabel:"小数",name:"1をこえる小数",isBoss:!1,type:"decimal_over_one",rewardGems:5,presentation:"persistent",questionCount:10},rf={id:"w4-decimal-3",sort:3,world:4,unit:"decimal",unitLabel:"小数",name:"小数と数直線",isBoss:!1,type:"decimal_numberline",rewardGems:5,presentation:"persistent",questionCount:10},sf={id:"w4-decimal-4",sort:4,world:4,unit:"decimal",unitLabel:"小数",name:"小数の大小",isBoss:!1,type:"decimal_compare",rewardGems:5,presentation:"persistent",questionCount:10,keypad:"choice"},of={id:"w4-decimal-5",sort:5,world:4,unit:"decimal",unitLabel:"小数",name:"小数の位",isBoss:!1,type:"decimal_place_value",rewardGems:5,presentation:"persistent",questionCount:10,keypad:"choice"},af={id:"w4-decimal-6",sort:6,world:4,unit:"decimal",unitLabel:"小数",name:"小数のたし算",isBoss:!1,type:"decimal_add",rewardGems:5,presentation:"persistent",questionCount:10},cf={id:"w4-decimal-7",sort:7,world:4,unit:"decimal",unitLabel:"小数",name:"小数のひき算",isBoss:!1,type:"decimal_subtract",rewardGems:5,presentation:"persistent",questionCount:10},lf={id:"w4-decimal-8",sort:8,world:4,unit:"decimal",unitLabel:"小数",name:"小数の文章題",isBoss:!1,type:"decimal_word",rewardGems:5,presentation:"persistent",questionCount:10},uf={id:"w4-decimal-boss",sort:9,world:4,unit:"decimal",unitLabel:"小数",name:"小数の王",isBoss:!0,type:"decimal_boss",rewardGems:10,questionCount:10},df={id:"w4-fraction-1",sort:1,world:4,unit:"fraction",unitLabel:"分数",name:"分数をみつけよう",presentation:"persistent",isBoss:!1,keypad:"choice",type:"fraction_visual_basic",cardId:"056-half-moon",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05}},hf={id:"w4-fraction-2",sort:2,world:4,unit:"fraction",unitLabel:"分数",name:"分数の大きさ",presentation:"persistent",isBoss:!1,keypad:"choice",type:"fraction_compare_visual",rewardGems:5},pf={id:"w4-fraction-3",sort:3,world:4,unit:"fraction",unitLabel:"分数",name:"同じ大きさの分数",isBoss:!1,type:"fraction_equivalent",keypad:"choice",cardId:"058-quarter-rabbit",rewardGems:5,dropRates:{N:.7,SR:.25,UR:.05},pairs:[{left:[1,2],right:[2,4]},{left:[1,3],right:[2,6]},{left:[2,3],right:[4,6]},{left:[1,2],right:[3,6]},{left:[2,4],right:[3,6]}]},mf={id:"w4-fraction-4",sort:4,world:4,unit:"fraction",unitLabel:"分数",name:"分数の大小",isBoss:!1,type:"fraction_compare_symbol",keypad:"choice",rewardGems:5},ff={id:"w4-fraction-5",sort:5,world:4,unit:"fraction",unitLabel:"分数",name:"同分母の足し算",isBoss:!1,type:"fraction_add_same_denominator",rewardGems:5},gf={id:"w4-fraction-6",sort:6,world:4,unit:"fraction",unitLabel:"分数",name:"同分母の引き算",isBoss:!1,type:"fraction_subtract_same_denominator",rewardGems:5},_f={id:"w4-fraction-boss",sort:99,world:4,unit:"fraction",unitLabel:"分数",name:"ボス戦",isBoss:!0,type:"fraction_mixed",cardId:"062-fraction-king",rewardGems:10,dropRates:{N:.7,SR:.25,UR:.05}},yf={id:"001-plus-rabbit",number:1,sort:1,world:1,unit:"addition",role:"normal",name:"プラスラビット",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:123,atk:37},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/001-plus-rabbit/n.png",SR:"/pictures/monsters/001-plus-rabbit/sr.png",UR:"/pictures/monsters/001-plus-rabbit/ur.png"}},vf={id:"002-sum-slime",number:2,sort:2,world:1,unit:"addition",role:"normal",name:"サムスライム",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:126,atk:39},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/002-sum-slime/n.png",SR:"/pictures/monsters/002-sum-slime/sr.png",UR:"/pictures/monsters/002-sum-slime/ur.png"}},bf={id:"003-pair-bird",number:3,sort:3,world:1,unit:"addition",role:"normal",name:"ペアバード",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:129,atk:41},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/003-pair-bird/n.png",SR:"/pictures/monsters/003-pair-bird/sr.png",UR:"/pictures/monsters/003-pair-bird/ur.png"}},wf={id:"004-apple-bear",number:4,sort:4,world:1,unit:"addition",role:"normal",name:"アップルベア",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:132,atk:43},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/004-apple-bear/n.png",SR:"/pictures/monsters/004-apple-bear/sr.png",UR:"/pictures/monsters/004-apple-bear/ur.png"}},Tf={id:"005-carry-fox",number:5,sort:5,world:1,unit:"addition",role:"normal",name:"キャリーフォックス",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:135,atk:45},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/005-carry-fox/n.png",SR:"/pictures/monsters/005-carry-fox/sr.png",UR:"/pictures/monsters/005-carry-fox/ur.png"}},Ef={id:"006-sum-lion",number:6,sort:6,world:1,unit:"addition",role:"normal",name:"サムライオン",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:138,atk:47},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/006-sum-lion/n.png",SR:"/pictures/monsters/006-sum-lion/sr.png",UR:"/pictures/monsters/006-sum-lion/ur.png"}},If={id:"007-plus-emperor",number:7,sort:7,world:1,unit:"addition",role:"boss",name:"プラス・エンペラー",element:{id:"addition",label:"足し算",icon:"✨"},stats:{hp:141,atk:49},description:"足し算の力を身につけたモンスター。",images:{N:"/pictures/monsters/007-plus-emperor/n.png",SR:"/pictures/monsters/007-plus-emperor/sr.png",UR:"/pictures/monsters/007-plus-emperor/ur.png"}},kf={id:"008-minus-fox",number:8,sort:8,world:1,unit:"subtraction",role:"normal",name:"マイナスフォックス",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:144,atk:51},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/008-minus-fox/n.png",SR:"/pictures/monsters/008-minus-fox/sr.png",UR:"/pictures/monsters/008-minus-fox/ur.png"}},Af={id:"009-take-cat",number:9,sort:9,world:1,unit:"subtraction",role:"normal",name:"テイクキャット",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:147,atk:53},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/009-take-cat/n.png",SR:"/pictures/monsters/009-take-cat/sr.png",UR:"/pictures/monsters/009-take-cat/ur.png"}},Sf={id:"010-remove-mole",number:10,sort:10,world:1,unit:"subtraction",role:"normal",name:"リムーブモール",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:150,atk:55},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/010-remove-mole/n.png",SR:"/pictures/monsters/010-remove-mole/sr.png",UR:"/pictures/monsters/010-remove-mole/ur.png"}},Rf={id:"011-diff-bird",number:11,sort:11,world:1,unit:"subtraction",role:"normal",name:"ディフバード",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:153,atk:57},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/011-diff-bird/n.png",SR:"/pictures/monsters/011-diff-bird/sr.png",UR:"/pictures/monsters/011-diff-bird/ur.png"}},Cf={id:"012-back-bear",number:12,sort:12,world:1,unit:"subtraction",role:"normal",name:"バックベア",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:156,atk:59},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/012-back-bear/n.png",SR:"/pictures/monsters/012-back-bear/sr.png",UR:"/pictures/monsters/012-back-bear/ur.png"}},$f={id:"013-sub-wolf",number:13,sort:13,world:1,unit:"subtraction",role:"normal",name:"サブウルフ",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:159,atk:61},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/013-sub-wolf/n.png",SR:"/pictures/monsters/013-sub-wolf/sr.png",UR:"/pictures/monsters/013-sub-wolf/ur.png"}},Pf={id:"014-minus-king",number:14,sort:14,world:1,unit:"subtraction",role:"boss",name:"マイナス・キング",element:{id:"subtraction",label:"引き算",icon:"✨"},stats:{hp:162,atk:63},description:"引き算の力を身につけたモンスター。",images:{N:"/pictures/monsters/014-minus-king/n.png",SR:"/pictures/monsters/014-minus-king/sr.png",UR:"/pictures/monsters/014-minus-king/ur.png"}},Nf={id:"015-minute-mouse",number:15,sort:15,world:2,unit:"time",role:"normal",name:"ミニットマウス",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:165,atk:65},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/015-minute-mouse/n.png",SR:"/pictures/monsters/015-minute-mouse/sr.png",UR:"/pictures/monsters/015-minute-mouse/ur.png"}},Df={id:"016-hour-owl",number:16,sort:16,world:2,unit:"time",role:"normal",name:"アワーフクロウ",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:168,atk:67},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/016-hour-owl/n.png",SR:"/pictures/monsters/016-hour-owl/sr.png",UR:"/pictures/monsters/016-hour-owl/ur.png"}},xf={id:"017-clock-cat",number:17,sort:17,world:2,unit:"time",role:"normal",name:"クロックキャット",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:171,atk:69},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/017-clock-cat/n.png",SR:"/pictures/monsters/017-clock-cat/sr.png",UR:"/pictures/monsters/017-clock-cat/ur.png"}},Vf={id:"018-bell-bird",number:18,sort:18,world:2,unit:"time",role:"normal",name:"ベルバード",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:174,atk:71},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/018-bell-bird/n.png",SR:"/pictures/monsters/018-bell-bird/sr.png",UR:"/pictures/monsters/018-bell-bird/ur.png"}},Of={id:"019-time-rabbit",number:19,sort:19,world:2,unit:"time",role:"normal",name:"タイムラビット",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:177,atk:73},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/019-time-rabbit/n.png",SR:"/pictures/monsters/019-time-rabbit/sr.png",UR:"/pictures/monsters/019-time-rabbit/ur.png"}},Mf={id:"020-chrono-wolf",number:20,sort:20,world:2,unit:"time",role:"normal",name:"クロノウルフ",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:180,atk:75},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/020-chrono-wolf/n.png",SR:"/pictures/monsters/020-chrono-wolf/sr.png",UR:"/pictures/monsters/020-chrono-wolf/ur.png"}},Lf={id:"021-chrono-king",number:21,sort:21,world:2,unit:"time",role:"boss",name:"時空王クロノス",element:{id:"time",label:"時刻",icon:"✨"},stats:{hp:183,atk:77},description:"時刻の力を身につけたモンスター。",images:{N:"/pictures/monsters/021-chrono-king/n.png",SR:"/pictures/monsters/021-chrono-king/sr.png",UR:"/pictures/monsters/021-chrono-king/ur.png"}},Uf={id:"022-coin-rabbit",number:22,sort:22,world:2,unit:"money",role:"normal",name:"コインラビット",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:186,atk:79},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/022-coin-rabbit/n.png",SR:"/pictures/monsters/022-coin-rabbit/sr.png",UR:"/pictures/monsters/022-coin-rabbit/ur.png"}},Ff={id:"023-yen-cat",number:23,sort:23,world:2,unit:"money",role:"normal",name:"イェンキャット",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:189,atk:81},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/023-yen-cat/n.png",SR:"/pictures/monsters/023-yen-cat/sr.png",UR:"/pictures/monsters/023-yen-cat/ur.png"}},jf={id:"024-wallet-bear",number:24,sort:24,world:2,unit:"money",role:"normal",name:"ウォレットベア",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:192,atk:83},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/024-wallet-bear/n.png",SR:"/pictures/monsters/024-wallet-bear/sr.png",UR:"/pictures/monsters/024-wallet-bear/ur.png"}},Bf={id:"025-change-fox",number:25,sort:25,world:2,unit:"money",role:"normal",name:"チェンジフォックス",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:195,atk:85},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/025-change-fox/n.png",SR:"/pictures/monsters/025-change-fox/sr.png",UR:"/pictures/monsters/025-change-fox/ur.png"}},qf={id:"026-shop-bird",number:26,sort:26,world:2,unit:"money",role:"normal",name:"ショップバード",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:198,atk:87},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/026-shop-bird/n.png",SR:"/pictures/monsters/026-shop-bird/sr.png",UR:"/pictures/monsters/026-shop-bird/ur.png"}},zf={id:"027-gold-panda",number:27,sort:27,world:2,unit:"money",role:"normal",name:"ゴールドパンダ",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:201,atk:89},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/027-gold-panda/n.png",SR:"/pictures/monsters/027-gold-panda/sr.png",UR:"/pictures/monsters/027-gold-panda/ur.png"}},Kf={id:"028-money-king",number:28,sort:28,world:2,unit:"money",role:"boss",name:"貨幣王マネリオン",element:{id:"money",label:"お金",icon:"✨"},stats:{hp:204,atk:91},description:"お金の力を身につけたモンスター。",images:{N:"/pictures/monsters/028-money-king/n.png",SR:"/pictures/monsters/028-money-king/sr.png",UR:"/pictures/monsters/028-money-king/ur.png"}},Gf={id:"029-waterpon",number:29,sort:29,world:3,unit:"multiplication",role:"normal",name:"ウォータポン",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:207,atk:93},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/029-waterpon/n.png",SR:"/pictures/monsters/029-waterpon/sr.png",UR:"/pictures/monsters/029-waterpon/ur.png"}},Wf={id:"030-twinbird",number:30,sort:30,world:3,unit:"multiplication",role:"normal",name:"ツインバード",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:210,atk:95},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/030-twinbird/n.png",SR:"/pictures/monsters/030-twinbird/sr.png",UR:"/pictures/monsters/030-twinbird/ur.png"}},Hf={id:"031-firesaurus",number:31,sort:31,world:3,unit:"multiplication",role:"normal",name:"ファイアサウルス",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:213,atk:97},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/031-firesaurus/n.png",SR:"/pictures/monsters/031-firesaurus/sr.png",UR:"/pictures/monsters/031-firesaurus/ur.png"}},Qf={id:"032-clover-turtle",number:32,sort:32,world:3,unit:"multiplication",role:"normal",name:"クローバータートル",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:216,atk:99},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/032-clover-turtle/n.png",SR:"/pictures/monsters/032-clover-turtle/sr.png",UR:"/pictures/monsters/032-clover-turtle/ur.png"}},Jf={id:"033-star-wolf",number:33,sort:33,world:3,unit:"multiplication",role:"normal",name:"スターウルフ",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:219,atk:101},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/033-star-wolf/n.png",SR:"/pictures/monsters/033-star-wolf/sr.png",UR:"/pictures/monsters/033-star-wolf/ur.png"}},Xf={id:"034-six-speaker",number:34,sort:34,world:3,unit:"multiplication",role:"normal",name:"シックススピーカー",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:222,atk:103},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/034-six-speaker/n.png",SR:"/pictures/monsters/034-six-speaker/sr.png",UR:"/pictures/monsters/034-six-speaker/ur.png"}},Yf={id:"035-rainbow-dragon",number:35,sort:35,world:3,unit:"multiplication",role:"normal",name:"レインボードラゴン",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:225,atk:105},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/035-rainbow-dragon/n.png",SR:"/pictures/monsters/035-rainbow-dragon/sr.png",UR:"/pictures/monsters/035-rainbow-dragon/ur.png"}},Zf={id:"036-octopal",number:36,sort:36,world:3,unit:"multiplication",role:"normal",name:"オクトパル",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:228,atk:107},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/036-octopal/n.png",SR:"/pictures/monsters/036-octopal/sr.png",UR:"/pictures/monsters/036-octopal/ur.png"}},eg={id:"037-shine-pegasus",number:37,sort:37,world:3,unit:"multiplication",role:"normal",name:"シャインペガサス",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:231,atk:109},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/037-shine-pegasus/n.png",SR:"/pictures/monsters/037-shine-pegasus/sr.png",UR:"/pictures/monsters/037-shine-pegasus/ur.png"}},tg={id:"038-massive-golem",number:38,sort:38,world:3,unit:"multiplication",role:"normal",name:"マッシブ・ゴーレム",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:234,atk:111},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/038-massive-golem/n.png",SR:"/pictures/monsters/038-massive-golem/sr.png",UR:"/pictures/monsters/038-massive-golem/ur.png"}},ng={id:"039-lightning-fang",number:39,sort:39,world:3,unit:"multiplication",role:"normal",name:"ライトニング・ファング",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:237,atk:113},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/039-lightning-fang/n.png",SR:"/pictures/monsters/039-lightning-fang/sr.png",UR:"/pictures/monsters/039-lightning-fang/ur.png"}},rg={id:"040-divine-phoenix",number:40,sort:40,world:3,unit:"multiplication",role:"normal",name:"ディバイン・フェニックス",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:240,atk:115},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/040-divine-phoenix/n.png",SR:"/pictures/monsters/040-divine-phoenix/sr.png",UR:"/pictures/monsters/040-divine-phoenix/ur.png"}},ig={id:"041-kuku-king-gold",number:41,sort:41,world:3,unit:"multiplication",role:"boss",name:"九九キング・ゴールド",element:{id:"multiplication",label:"掛け算",icon:"✨"},stats:{hp:243,atk:117},description:"掛け算の力を身につけたモンスター。",images:{N:"/pictures/monsters/041-kuku-king-gold/n.png",SR:"/pictures/monsters/041-kuku-king-gold/sr.png",UR:"/pictures/monsters/041-kuku-king-gold/ur.png"}},sg={id:"042-half-penguin",number:42,sort:42,world:3,unit:"division",role:"normal",name:"ハーフペンギン",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:246,atk:119},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/042-half-penguin/n.png",SR:"/pictures/monsters/042-half-penguin/sr.png",UR:"/pictures/monsters/042-half-penguin/ur.png"}},og={id:"043-divide-bird",number:43,sort:43,world:3,unit:"division",role:"normal",name:"ディバイドバード",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:249,atk:121},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/043-divide-bird/n.png",SR:"/pictures/monsters/043-divide-bird/sr.png",UR:"/pictures/monsters/043-divide-bird/ur.png"}},ag={id:"044-share-rabbit",number:44,sort:44,world:3,unit:"division",role:"normal",name:"シェアラビット",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:252,atk:123},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/044-share-rabbit/n.png",SR:"/pictures/monsters/044-share-rabbit/sr.png",UR:"/pictures/monsters/044-share-rabbit/ur.png"}},cg={id:"045-group-golem",number:45,sort:45,world:3,unit:"division",role:"normal",name:"グループゴーレム",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:255,atk:125},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/045-group-golem/n.png",SR:"/pictures/monsters/045-group-golem/sr.png",UR:"/pictures/monsters/045-group-golem/ur.png"}},lg={id:"046-remainder-cat",number:46,sort:46,world:3,unit:"division",role:"normal",name:"リメインダーキャット",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:258,atk:127},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/046-remainder-cat/n.png",SR:"/pictures/monsters/046-remainder-cat/sr.png",UR:"/pictures/monsters/046-remainder-cat/ur.png"}},ug={id:"047-quotient-wolf",number:47,sort:47,world:3,unit:"division",role:"normal",name:"クオシェントウルフ",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:261,atk:129},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/047-quotient-wolf/n.png",SR:"/pictures/monsters/047-quotient-wolf/sr.png",UR:"/pictures/monsters/047-quotient-wolf/ur.png"}},dg={id:"048-divide-emperor",number:48,sort:48,world:3,unit:"division",role:"boss",name:"ディバイド・エンペラー",element:{id:"division",label:"割り算",icon:"✨"},stats:{hp:264,atk:131},description:"割り算の力を身につけたモンスター。",images:{N:"/pictures/monsters/048-divide-emperor/n.png",SR:"/pictures/monsters/048-divide-emperor/sr.png",UR:"/pictures/monsters/048-divide-emperor/ur.png"}},hg={id:"049-point-slime",number:49,sort:49,world:4,unit:"decimal",role:"normal",name:"ポイントスライム",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:267,atk:133},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/049-point-slime/n.png",SR:"/pictures/monsters/049-point-slime/sr.png",UR:"/pictures/monsters/049-point-slime/ur.png"}},pg={id:"050-tenths-pon",number:50,sort:50,world:4,unit:"decimal",role:"normal",name:"テンスポン",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:270,atk:135},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/050-tenths-pon/n.png",SR:"/pictures/monsters/050-tenths-pon/sr.png",UR:"/pictures/monsters/050-tenths-pon/ur.png"}},mg={id:"051-decimal-cat",number:51,sort:51,world:4,unit:"decimal",role:"normal",name:"デシマルキャット",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:273,atk:137},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/051-decimal-cat/n.png",SR:"/pictures/monsters/051-decimal-cat/sr.png",UR:"/pictures/monsters/051-decimal-cat/ur.png"}},fg={id:"052-dot-bird",number:52,sort:52,world:4,unit:"decimal",role:"normal",name:"ドットバード",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:276,atk:139},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/052-dot-bird/n.png",SR:"/pictures/monsters/052-dot-bird/sr.png",UR:"/pictures/monsters/052-dot-bird/ur.png"}},gg={id:"053-zero-tenths-bear",number:53,sort:53,world:4,unit:"decimal",role:"normal",name:"ゼロテンベア",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:279,atk:141},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/053-zero-tenths-bear/n.png",SR:"/pictures/monsters/053-zero-tenths-bear/sr.png",UR:"/pictures/monsters/053-zero-tenths-bear/ur.png"}},_g={id:"054-point-dragon",number:54,sort:54,world:4,unit:"decimal",role:"normal",name:"ポイントドラゴン",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:282,atk:143},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/054-point-dragon/n.png",SR:"/pictures/monsters/054-point-dragon/sr.png",UR:"/pictures/monsters/054-point-dragon/ur.png"}},yg={id:"055-decimal-king",number:55,sort:55,world:4,unit:"decimal",role:"boss",name:"小数王デシマロン",element:{id:"decimal",label:"小数",icon:"✨"},stats:{hp:285,atk:145},description:"小数の力を身につけたモンスター。",images:{N:"/pictures/monsters/055-decimal-king/n.png",SR:"/pictures/monsters/055-decimal-king/sr.png",UR:"/pictures/monsters/055-decimal-king/ur.png"}},vg={id:"056-half-moon",number:56,sort:56,world:4,unit:"fraction",role:"normal",name:"ハーフムーン",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:288,atk:147},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/056-half-moon/n.png",SR:"/pictures/monsters/056-half-moon/sr.png",UR:"/pictures/monsters/056-half-moon/ur.png"}},bg={id:"057-third-bird",number:57,sort:57,world:4,unit:"fraction",role:"normal",name:"サードバード",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:291,atk:149},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/057-third-bird/n.png",SR:"/pictures/monsters/057-third-bird/sr.png",UR:"/pictures/monsters/057-third-bird/ur.png"}},wg={id:"058-quarter-rabbit",number:58,sort:58,world:4,unit:"fraction",role:"normal",name:"クォータービット",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:294,atk:151},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/058-quarter-rabbit/n.png",SR:"/pictures/monsters/058-quarter-rabbit/sr.png",UR:"/pictures/monsters/058-quarter-rabbit/ur.png"}},Tg={id:"059-numerator-rabbit",number:59,sort:59,world:4,unit:"fraction",role:"normal",name:"ニュメラビット",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:297,atk:153},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/059-numerator-rabbit/n.png",SR:"/pictures/monsters/059-numerator-rabbit/sr.png",UR:"/pictures/monsters/059-numerator-rabbit/ur.png"}},Eg={id:"060-denominator-bird",number:60,sort:60,world:4,unit:"fraction",role:"normal",name:"デノミバード",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:300,atk:155},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/060-denominator-bird/n.png",SR:"/pictures/monsters/060-denominator-bird/sr.png",UR:"/pictures/monsters/060-denominator-bird/ur.png"}},Ig={id:"061-fraction-fairy",number:61,sort:61,world:4,unit:"fraction",role:"normal",name:"フラクションフェアリー",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:303,atk:157},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/061-fraction-fairy/n.png",SR:"/pictures/monsters/061-fraction-fairy/sr.png",UR:"/pictures/monsters/061-fraction-fairy/ur.png"}},kg={id:"062-fraction-king",number:62,sort:62,world:4,unit:"fraction",role:"boss",name:"分数皇ラショナル",element:{id:"fraction",label:"分数",icon:"✨"},stats:{hp:306,atk:159},description:"分数の力を身につけたモンスター。",images:{N:"/pictures/monsters/062-fraction-king/n.png",SR:"/pictures/monsters/062-fraction-king/sr.png",UR:"/pictures/monsters/062-fraction-king/ur.png"}},Ag={id:"builtin",name:"Maths-adventure WORLD1-4",version:"2.0.0",type:"world-pack",requiresCore:">=2.0.0",enabled:!0,worlds:[1,2,3,4]},Sg=Object.assign({"../content/packs/builtin/manifest.js":Ag});function Rg(n,e){if(!n||typeof n!="object")throw new Error(`Pack manifest is invalid: ${e}`);if(!n.id||!n.version||!n.type)throw new Error(`Pack manifest requires id, version and type: ${e}`);return Object.freeze({...n,enabled:n.enabled!==!1,sourcePath:e})}const Cg=Object.entries(Sg).map(([n,e])=>Rg(e,n)).filter(n=>n.enabled).sort((n,e)=>n.id.localeCompare(e.id));new Map(Cg.map(n=>[n.id,n]));const $g=Object.assign({"../content/packs/builtin/worlds/world-1.js":sm,"../content/packs/builtin/worlds/world-2.js":om,"../content/packs/builtin/worlds/world-3.js":am,"../content/packs/builtin/worlds/world-4.js":cm,"../content/packs/builtin/worlds/world-5.js":lm,"../content/packs/builtin/worlds/world-6.js":um}),Pg=Object.assign({"../content/packs/builtin/stages/world1/w1-addition-1.js":dm,"../content/packs/builtin/stages/world1/w1-addition-2.js":hm,"../content/packs/builtin/stages/world1/w1-addition-3.js":pm,"../content/packs/builtin/stages/world1/w1-addition-4.js":mm,"../content/packs/builtin/stages/world1/w1-addition-5.js":fm,"../content/packs/builtin/stages/world1/w1-addition-boss.js":gm,"../content/packs/builtin/stages/world1/w1-subtraction-1.js":_m,"../content/packs/builtin/stages/world1/w1-subtraction-2.js":ym,"../content/packs/builtin/stages/world1/w1-subtraction-3.js":vm,"../content/packs/builtin/stages/world1/w1-subtraction-4.js":bm,"../content/packs/builtin/stages/world1/w1-subtraction-5.js":wm,"../content/packs/builtin/stages/world1/w1-subtraction-boss.js":Tm,"../content/packs/builtin/stages/world2/w2-money-1.js":Em,"../content/packs/builtin/stages/world2/w2-money-2.js":Im,"../content/packs/builtin/stages/world2/w2-money-3.js":km,"../content/packs/builtin/stages/world2/w2-money-4.js":Am,"../content/packs/builtin/stages/world2/w2-money-5.js":Sm,"../content/packs/builtin/stages/world2/w2-money-boss.js":Rm,"../content/packs/builtin/stages/world2/w2-money-can-buy-1.js":Cm,"../content/packs/builtin/stages/world2/w2-money-change-1.js":$m,"../content/packs/builtin/stages/world2/w2-money-shopping-1.js":Pm,"../content/packs/builtin/stages/world2/w2-time-1.js":Nm,"../content/packs/builtin/stages/world2/w2-time-2.js":Dm,"../content/packs/builtin/stages/world2/w2-time-3.js":xm,"../content/packs/builtin/stages/world2/w2-time-4.js":Vm,"../content/packs/builtin/stages/world2/w2-time-5.js":Om,"../content/packs/builtin/stages/world2/w2-time-6.js":Mm,"../content/packs/builtin/stages/world2/w2-time-7.js":Lm,"../content/packs/builtin/stages/world2/w2-time-boss.js":Um,"../content/packs/builtin/stages/world3/w3-division-1.js":Fm,"../content/packs/builtin/stages/world3/w3-division-2.js":jm,"../content/packs/builtin/stages/world3/w3-division-3.js":Bm,"../content/packs/builtin/stages/world3/w3-division-4.js":qm,"../content/packs/builtin/stages/world3/w3-division-5.js":zm,"../content/packs/builtin/stages/world3/w3-division-6.js":Km,"../content/packs/builtin/stages/world3/w3-division-boss.js":Gm,"../content/packs/builtin/stages/world3/w3-multiplication-1.js":Wm,"../content/packs/builtin/stages/world3/w3-multiplication-2.js":Hm,"../content/packs/builtin/stages/world3/w3-multiplication-3.js":Qm,"../content/packs/builtin/stages/world3/w3-multiplication-4.js":Jm,"../content/packs/builtin/stages/world3/w3-multiplication-5.js":Xm,"../content/packs/builtin/stages/world3/w3-multiplication-6.js":Ym,"../content/packs/builtin/stages/world3/w3-multiplication-7.js":Zm,"../content/packs/builtin/stages/world3/w3-multiplication-boss.js":ef,"../content/packs/builtin/stages/world4/w4-decimal-1.js":tf,"../content/packs/builtin/stages/world4/w4-decimal-2.js":nf,"../content/packs/builtin/stages/world4/w4-decimal-3.js":rf,"../content/packs/builtin/stages/world4/w4-decimal-4.js":sf,"../content/packs/builtin/stages/world4/w4-decimal-5.js":of,"../content/packs/builtin/stages/world4/w4-decimal-6.js":af,"../content/packs/builtin/stages/world4/w4-decimal-7.js":cf,"../content/packs/builtin/stages/world4/w4-decimal-8.js":lf,"../content/packs/builtin/stages/world4/w4-decimal-boss.js":uf,"../content/packs/builtin/stages/world4/w4-fraction-1.js":df,"../content/packs/builtin/stages/world4/w4-fraction-2.js":hf,"../content/packs/builtin/stages/world4/w4-fraction-3.js":pf,"../content/packs/builtin/stages/world4/w4-fraction-4.js":mf,"../content/packs/builtin/stages/world4/w4-fraction-5.js":ff,"../content/packs/builtin/stages/world4/w4-fraction-6.js":gf,"../content/packs/builtin/stages/world4/w4-fraction-boss.js":_f}),Ng=Object.assign({"../content/packs/builtin/cards/001-plus-rabbit.js":yf,"../content/packs/builtin/cards/002-sum-slime.js":vf,"../content/packs/builtin/cards/003-pair-bird.js":bf,"../content/packs/builtin/cards/004-apple-bear.js":wf,"../content/packs/builtin/cards/005-carry-fox.js":Tf,"../content/packs/builtin/cards/006-sum-lion.js":Ef,"../content/packs/builtin/cards/007-plus-emperor.js":If,"../content/packs/builtin/cards/008-minus-fox.js":kf,"../content/packs/builtin/cards/009-take-cat.js":Af,"../content/packs/builtin/cards/010-remove-mole.js":Sf,"../content/packs/builtin/cards/011-diff-bird.js":Rf,"../content/packs/builtin/cards/012-back-bear.js":Cf,"../content/packs/builtin/cards/013-sub-wolf.js":$f,"../content/packs/builtin/cards/014-minus-king.js":Pf,"../content/packs/builtin/cards/015-minute-mouse.js":Nf,"../content/packs/builtin/cards/016-hour-owl.js":Df,"../content/packs/builtin/cards/017-clock-cat.js":xf,"../content/packs/builtin/cards/018-bell-bird.js":Vf,"../content/packs/builtin/cards/019-time-rabbit.js":Of,"../content/packs/builtin/cards/020-chrono-wolf.js":Mf,"../content/packs/builtin/cards/021-chrono-king.js":Lf,"../content/packs/builtin/cards/022-coin-rabbit.js":Uf,"../content/packs/builtin/cards/023-yen-cat.js":Ff,"../content/packs/builtin/cards/024-wallet-bear.js":jf,"../content/packs/builtin/cards/025-change-fox.js":Bf,"../content/packs/builtin/cards/026-shop-bird.js":qf,"../content/packs/builtin/cards/027-gold-panda.js":zf,"../content/packs/builtin/cards/028-money-king.js":Kf,"../content/packs/builtin/cards/029-waterpon.js":Gf,"../content/packs/builtin/cards/030-twinbird.js":Wf,"../content/packs/builtin/cards/031-firesaurus.js":Hf,"../content/packs/builtin/cards/032-clover-turtle.js":Qf,"../content/packs/builtin/cards/033-star-wolf.js":Jf,"../content/packs/builtin/cards/034-six-speaker.js":Xf,"../content/packs/builtin/cards/035-rainbow-dragon.js":Yf,"../content/packs/builtin/cards/036-octopal.js":Zf,"../content/packs/builtin/cards/037-shine-pegasus.js":eg,"../content/packs/builtin/cards/038-massive-golem.js":tg,"../content/packs/builtin/cards/039-lightning-fang.js":ng,"../content/packs/builtin/cards/040-divine-phoenix.js":rg,"../content/packs/builtin/cards/041-kuku-king-gold.js":ig,"../content/packs/builtin/cards/042-half-penguin.js":sg,"../content/packs/builtin/cards/043-divide-bird.js":og,"../content/packs/builtin/cards/044-share-rabbit.js":ag,"../content/packs/builtin/cards/045-group-golem.js":cg,"../content/packs/builtin/cards/046-remainder-cat.js":lg,"../content/packs/builtin/cards/047-quotient-wolf.js":ug,"../content/packs/builtin/cards/048-divide-emperor.js":dg,"../content/packs/builtin/cards/049-point-slime.js":hg,"../content/packs/builtin/cards/050-tenths-pon.js":pg,"../content/packs/builtin/cards/051-decimal-cat.js":mg,"../content/packs/builtin/cards/052-dot-bird.js":fg,"../content/packs/builtin/cards/053-zero-tenths-bear.js":gg,"../content/packs/builtin/cards/054-point-dragon.js":_g,"../content/packs/builtin/cards/055-decimal-king.js":yg,"../content/packs/builtin/cards/056-half-moon.js":vg,"../content/packs/builtin/cards/057-third-bird.js":bg,"../content/packs/builtin/cards/058-quarter-rabbit.js":wg,"../content/packs/builtin/cards/059-numerator-rabbit.js":Tg,"../content/packs/builtin/cards/060-denominator-bird.js":Eg,"../content/packs/builtin/cards/061-fraction-fairy.js":Ig,"../content/packs/builtin/cards/062-fraction-king.js":kg});function Dg(n){return n.match(/\/packs\/([^/]+)\//)?.[1]??"unknown"}function Na(n,e){const t=Object.entries(n).map(([i,s])=>{if(!s||typeof s!="object"||s.id===void 0)throw new Error(`${e} definition is invalid: ${i}`);return Object.freeze({...s,packId:s.packId??Dg(i)})}),r=new Map;for(const[i,s]of Object.entries(n)){const a=String(s.id);if(r.has(a))throw console.error("DUPLICATED ID:",a),console.error("FIRST FILE:",r.get(a)),console.error("SECOND FILE:",i),new Error(`${e} id is duplicated: ${a}`);r.set(a,i)}return t.sort((i,s)=>(i.world??0)-(s.world??0)||(i.sort??i.number??0)-(s.sort??s.number??0))}const Yo=Na($g,"world"),zu=Na(Pg,"stage"),Zr=Na(Ng,"card");new Map(Yo.map(n=>[String(n.id),n]));const xg=new Map(zu.map(n=>[String(n.id),n])),Vg=new Map(Zr.map(n=>[String(n.id),n])),Og=n=>xg.get(String(n)),Zc=n=>Vg.get(String(n)),f=(n,e)=>Math.floor(Math.random()*(e-n+1))+n;function Ku(n){return[...n].sort(()=>Math.random()-.5)}function sn(n){return{value:n,image:`/images/money/${n}yen.png`}}function Da(n){return n%60===0?`${n/60}時間`:n>60?`${Math.floor(n/60)}時間${n%60}分`:`${n}分`}function Gu(n){return n[f(0,n.length-1)]}function Wu(){const n=f(1,5),e=f(1,5),r=Gu([{icon:"🍎",name:"りんご",counter:"こ"},{icon:"🍪",name:"クッキー",counter:"こ"},{icon:"⚽",name:"ボール",counter:"こ"},{icon:"🐟",name:"さかな",counter:"ひき"}]);return f(0,1)===0?{kind:"addition_groups",icon:r.icon,leftCount:n,rightCount:e,prompt:`${n}${r.counter}と ${e}${r.counter}を あわせます。`,question:`ぜんぶで なん${r.counter}？`,answer:n+e,uniqueKey:`addition_meaning_merge_${r.name}_${n}_${e}`}:{kind:"addition_increase",icon:r.icon,firstCount:n,addedCount:e,prompt:`はじめに ${n}${r.counter} あります。`,secondPrompt:`あとから ${e}${r.counter} ふえました。`,question:`ぜんぶで なん${r.counter}？`,answer:n+e,uniqueKey:`addition_meaning_increase_${r.name}_${n}_${e}`}}function Hu(){const n=f(1,9),e=f(1,9);return{kind:"text",label:`${n} ＋ ${e}`,answer:n+e,uniqueKey:`addition_single_${n}_${e}`}}function Qu(){const n=f(1,9),e=f(10,19);return{kind:"text",label:`${n} ＋ ${e}`,answer:n+e,uniqueKey:`addition_mixed_${n}_${e}`}}function Mg(){const n=f(0,1)===1;let e,t;return n?(e=f(1,9),t=f(10,19)):(e=f(1,9),t=f(1,9)),{kind:"text",prompt:`${e} ＋ ${t}`,label:`${e} ＋ ${t}`,className:"addition-flash-text",answer:e+t,uniqueKey:`addition_flash_${e}_${t}`}}function Ju(){const n=[()=>{const r=f(2,7),i=f(1,5);return{scene:"park",icon:"🌳",firstCount:r,addedCount:i,prompt:`こうえんで ${r}にんが あそんでいます。
あとから ${i}にんが やってきました。
みんなで なんにん？`,answer:r+i,key:`park-${r}-${i}`}},()=>{const r=f(2,8),i=f(1,6);return{scene:"balloon",icon:"🎈",firstCount:r,addedCount:i,prompt:`ふうせんが ${r}こ あります。
あとから ${i}こ もらいました。
ぜんぶで なんこ？`,answer:r+i,key:`balloon-${r}-${i}`}},()=>{const r=f(3,8),i=f(1,5);return{scene:"candy",icon:"🍬",firstCount:r,addedCount:i,prompt:`あめが ${r}こ あります。
おともだちから ${i}こ もらいました。
ぜんぶで なんこ？`,answer:r+i,key:`candy-${r}-${i}`}},()=>{const r=f(2,4),i=f(2,4),a=[...["じんくん","ろうくん","ななちゃん","そらくん","ゆいちゃん","はるくん","りんちゃん","そうたくん","みおちゃん","れんくん"]];for(let p=a.length-1;p>0;p--){const _=f(0,p);[a[p],a[_]]=[a[_],a[p]]}const c=a.slice(0,i);let u="";c.length===2?u=`${c[0]}と ${c[1]}`:u=c.join("、");const h=r+i;return{scene:"game",icon:"🎮",firstCount:r,addedCount:i,prompt:`${r}にんで ゲームを しています。そこへ
${u}が「いっしょに ゲームしよ！」と やってきました。
みんなで なんにん？`,answer:h,key:`game-${r}-${i}-${c.join("-")}`}},()=>{const r=f(3,8),i=f(1,5);return{scene:"bus",icon:"🚌",firstCount:r,addedCount:i,prompt:`バスに ${r}にん のっています。
つぎの ていりゅうじょで ${i}にん のりました。
ぜんぶで なんにん？`,answer:r+i,key:`bus-${r}-${i}`}},()=>{const r=f(2,7),i=f(1,5);return{scene:"dog",icon:"🐶",firstCount:r,addedCount:i,prompt:`こうえんに いぬが ${r}ひき います。
あとから ${i}ひき やってきました。
ぜんぶで なんびき？`,answer:r+i,key:`dog-${r}-${i}`}},()=>{const r=f(2,8),i=f(1,5);return{scene:"apple",icon:"🍎",firstCount:r,addedCount:i,prompt:`りんごが ${r}こ あります。
あとから ${i}こ かってきました。
ぜんぶで なんこ？`,answer:r+i,key:`apple-${r}-${i}`}},()=>{const r=f(2,8),i=f(1,5);return{scene:"book",icon:"📚",firstCount:r,addedCount:i,prompt:`ほんだなに ほんが ${r}さつ あります。
${i}さつ もどしました。
ほんは ぜんぶで なんさつ？`,answer:r+i,key:`book-${r}-${i}`}}],e=f(0,n.length-1),t=n[e]();return{kind:"addition_word_visual",keypad:"expression",guide:"",scene:t.scene,icon:t.icon,firstCount:t.firstCount,addedCount:t.addedCount,prompt:`${t.prompt}
しきから にゅうりょくしよう。`,answer:t.answer,expression:{left:t.firstCount,operator:"+",right:t.addedCount,result:t.answer,commutative:!0},uniqueKey:`addition_word_${t.key}`}}function Lg(){const n=f(1,10);return n<=2?Wu():n<=4?Hu():n<=7?Qu():Ju()}function Xu(){const e=Gu([{icon:"🍎",name:"りんご",counter:"こ"},{icon:"🍪",name:"クッキー",counter:"こ"},{icon:"⚽",name:"ボール",counter:"こ"},{icon:"🐟",name:"さかな",counter:"ひき"},{icon:"🐦",name:"とり",counter:"わ"}]);if(f(0,1)===0){const a=f(4,9),c=f(1,a-1);let u="";return e.name==="さかな"?u=`${c}${e.counter}が あそびに いきました。`:e.name==="とり"?u=`${c}${e.counter}が とんで いきました。`:e.name==="クッキー"?u=`${c}${e.counter}を たべました。`:e.name==="りんご"?u=`${c}${e.counter}を たべました。`:u=`${c}${e.counter}を つかいました。`,{kind:"subtraction_take",icon:e.icon,itemName:e.name,counter:e.counter,total:a,removed:c,prompt:`${e.name}が ${a}${e.counter} あります。`,secondPrompt:u,question:`のこりは なん${e.counter} でしょうか？`,answer:a-c,uniqueKey:`subtraction_take_${e.name}_${a}_${c}`}}const r=f(1,6),i=f(1,3),s=r+i;return{kind:"subtraction_compare",iconA:"🍎",iconB:"🍪",large:s,small:r,prompt:"りんごと クッキーの かずを くらべてみよう。",question:"りんごのほうが なんこ おおい？",answer:s-r,uniqueKey:`subtraction_compare_${s}_${r}`}}function Yu(){const n=f(1,9),e=f(0,n);return{kind:"text",label:`${n} − ${e}`,answer:n-e,uniqueKey:`subtraction_single_${n}_${e}`}}function Zu(){const n=f(10,19),e=f(1,9);return{kind:"text",label:`${n} − ${e}`,answer:n-e,uniqueKey:`subtraction_teens_${n}_${e}`}}function Ug(){const n=f(0,1)===1;let e,t;return n?(e=f(10,19),t=f(1,9)):(e=f(1,9),t=f(0,e)),{kind:"text",prompt:`${e} − ${t}`,label:`${e} − ${t}`,className:"subtraction-flash-text",answer:e-t,uniqueKey:`subtraction_flash_${e}_${t}`}}function ed(){const n=[()=>{const r=f(6,12),i=f(1,Math.min(5,r-1));return{scene:"bird",icon:"🐦",total:r,removed:i,text:`きの えだに とりが ${r}わ とまっています。
${i}わが とんで いきました。
のこりは なんわ？`,key:`bird-${r}-${i}`}},()=>{const r=f(6,12),i=f(1,Math.min(5,r-1));return{scene:"children",icon:"🧒",total:r,removed:i,text:`こうえんで ${r}にんが あそんでいます。
${i}にんが おうちに かえりました。
のこりは なんにん？`,key:`children-${r}-${i}`}},()=>{const r=f(6,12),i=f(1,Math.min(5,r-1));return{scene:"cookie",icon:"🍪",total:r,removed:i,text:`クッキーが ${r}こ あります。
${i}こ たべました。
のこりは なんこ？`,key:`cookie-${r}-${i}`}},()=>{const r=f(4,10);return{scene:"cake",icon:"🍰",total:r,removed:2,text:`ケーキが ${r}こ あります。
たろうくんと はなこさんに、1こずつ わけました。
のこりは なんこ？`,key:`cake-share-${r}`}},()=>{const r=f(7,15),i=f(1,Math.min(6,r-1));return{scene:"bus",icon:"🚌",total:r,removed:i,text:`バスに ${r}にん のっています。
${i}にんが バスを おりました。
のこりは なんにん？`,key:`bus-${r}-${i}`}},()=>{const r=["こだま","ひかり","のぞみ","さくら","みずほ","つばめ"],i=f(3,4),s=[...r];for(let b=s.length-1;b>0;b--){const A=f(0,b);[s[b],s[A]]=[s[A],s[b]]}const a=s.slice(0,i),c=i===3?1:f(1,2),u=[...a];for(let b=u.length-1;b>0;b--){const A=f(0,b);[u[b],u[A]]=[u[A],u[b]]}const h=u.slice(0,c),p=a.join("、");let _="";return h.length===1?_=h[0]:_=h.join("と "),{scene:"train",icon:"🚄",total:i,removed:c,text:`${p}が えきに とまっています。
${_}が しゅっぱつしました。
えきに のこっている しんかんせんは なんだい？`,key:`shinkansen-${i}-${c}-${a.join("-")}-${h.join("-")}`}},()=>{const r=f(6,12),i=f(1,Math.min(5,r-1));return{scene:"candy",icon:"🍬",total:r,removed:i,text:`あめが ${r}こ あります。
${i}こ たべました。
のこりは なんこ？`,key:`candy-${r}-${i}`}},()=>{const r=f(6,12),i=f(1,Math.min(5,r-1));return{scene:"book",icon:"📚",total:r,removed:i,text:`ほんだなに ほんが ${r}さつ あります。
${i}さつ かりました。
のこりは なんさつ？`,key:`book-${r}-${i}`}}],e=f(0,n.length-1),t=n[e]();return{kind:"subtraction_word_visual",keypad:"expression",guide:"",scene:t.scene,icon:t.icon,total:t.total,removed:t.removed,remaining:t.total-t.removed,prompt:`${t.text}
しきから にゅうりょくしよう。`,answer:t.total-t.removed,expression:{left:t.total,operator:"-",right:t.removed,result:t.total-t.removed,commutative:!1},uniqueKey:`subtraction_word_${t.key}`}}function Fg(){const n=f(1,10);return n<=2?Xu():n<=4?Yu():n<=7?Zu():ed()}function jg(n){const e=n.max??20,t=f(0,e),r=f(0,e-t);return{kind:"text",label:`${t} ＋ ${r}`,answer:t+r,uniqueKey:`legacy_addition_${t}_${r}`}}function Bg(n){const e=n.max??20,t=f(0,e),r=f(0,t);return{kind:"text",label:`${t} − ${r}`,answer:t-r,uniqueKey:`legacy_subtraction_${t}_${r}`}}const qg={types:["addition","subtraction","addition_meaning","addition_single","addition_mixed","addition_flash","addition_word","addition_boss","subtraction_meaning","subtraction_single","subtraction_teens","subtraction_flash","subtraction_word","subtraction_boss"],build(n){if(n.type==="addition_meaning")return Wu();if(n.type==="addition_single")return Hu();if(n.type==="addition_mixed")return Qu();if(n.type==="addition_flash")return Mg();if(n.type==="addition_word")return Ju();if(n.type==="addition_boss")return Lg();if(n.type==="subtraction_meaning")return Xu();if(n.type==="subtraction_single")return Yu();if(n.type==="subtraction_teens")return Zu();if(n.type==="subtraction_flash")return Ug();if(n.type==="subtraction_word")return ed();if(n.type==="subtraction_boss")return Fg();if(n.type==="addition")return jg(n);if(n.type==="subtraction")return Bg(n);throw new Error(`Unsupported arithmetic type: ${n.type}`)}};function Ye(n){return n[f(0,n.length-1)]}const td=["たろうくん","はなこさん","じんくん","ろうくん","ななちゃん","そらくん","ゆいちゃん","はるくん","りんちゃん","みおちゃん"],nd=["カラテ","サッカー","スイミング","ピアノ","ダンス","そろばん","えいご"];function zg(n){const e=Ye(td),t=Ye(nd),r=Da(n);return Ye([()=>({prompt:`${e}は ${r}あとに
${t}へ いきます。
なんじ なんぷんに いえを でる？`,storyKey:`lesson-go-${e}-${t}`}),()=>({prompt:`${e}は ${r}あとに
${t}から かえってきます。
なんじ なんぷんに かえってくる？`,storyKey:`lesson-return-${e}-${t}`}),()=>({prompt:`${e}は ${r}あとまでに
いえに かえる やくそくです。
なんじ なんぷんまでに かえる？`,storyKey:`home-${e}`}),()=>({prompt:`${e}は おうちのひとと
${r}あとに しゅくだいを する
やくそくをしました。なんじから はじめる？`,storyKey:`homework-${e}`}),()=>({prompt:`${e}は ${r}あとに
おふろに はいります。
なんじ なんぷんから はいる？`,storyKey:`bath-${e}`}),()=>({prompt:`${e}は ${r}あとに
おでかけします。
なんじ なんぷんに しゅっぱつする？`,storyKey:`outing-${e}`})])()}function Kg(n){const e=Ye(td),t=Ye(nd),r=Da(n);return Ye([()=>({prompt:`${e}は ${r}まえに
${t}へ いくため いえを でました。
なんじ なんぷんに いえを でた？`,storyKey:`lesson-left-${e}-${t}`}),()=>({prompt:`${e}は ${r}まえに
いえに かえってきました。
なんじ なんぷんに かえってきた？`,storyKey:`returned-${e}`}),()=>({prompt:`${e}は ${r}まえに
しゅくだいを はじめました。
なんじ なんぷんから はじめた？`,storyKey:`homework-before-${e}`}),()=>({prompt:`${e}の ${t}は
${r}まえに はじまりました。
なんじ なんぷんに はじまった？`,storyKey:`lesson-start-${e}-${t}`}),()=>({prompt:`${e}は ${r}まえに
おふろに はいりました。
なんじ なんぷんに はいった？`,storyKey:`bath-before-${e}`})])()}const Gg={types:["clock_read","clock_minute_read","clock_elapsed","clock_elapsed_after","clock_elapsed_before","clock_24h","clock_boss"],build(n){if(n.type==="clock_boss"){const A=Ye(["clock_read","clock_minute_read","clock_elapsed_after","clock_elapsed_before","clock_24h"]);n={...n,type:A}}if(n.type==="clock_read"){const b=Array.isArray(n.minuteChoices)?n.minuteChoices:[0],A=f(1,12),N=Ye(b);return{kind:"clock",mode:"read",prompt:"この とけいは、なんじ なんぷん？",guide:N===0?"みじかい はりが「じ」、ながい はりが「ふん」を あらわします。":"みじかい はりと、ながい はりを よく みよう。",hour:A,minute:N,answer:A*100+N,uniqueKey:`clock-read-${A}-${N}`}}if(n.type==="clock_minute_read"){const b=Array.isArray(n.minuteChoices)?n.minuteChoices:[0,5,10,15,20,25,30,35,40,45,50,55],A=f(1,12),N=Ye(b);return{kind:"clock",mode:"minute-read",prompt:`この とけいは
なんじ なんぷん？`,guide:"ながい はりは、数字を1つ すすむと 5ふん すすむよ。",showMinuteGuide:!0,hour:A,minute:N,answer:A*100+N,uniqueKey:`clock-minute-read-${A}-${N}`}}if(n.type==="clock_24h"){const b=Array.isArray(n.morningHours)?n.morningHours:[6,7,8,9,10,11],A=Array.isArray(n.nightHours)?n.nightHours:[18,19,20,21,22,23],N=Math.random()<.5,O=Ye(N?A:b),V=O%12||12;return{kind:"clock",mode:"24h",keypad:"number",period:N?"night":"morning",prompt:N?"よるの じかんです。24じかんひょうきでは、なんじ？":"あさの じかんです。24じかんひょうきでは、なんじ？",guide:N?"よるの じこくは、ひるの12じより あとの じこくで かんがえよう。":"あさの じこくは、とけいに かかれた じこくを よもう。",hour:V,minute:0,answer:O,answerHour24:O,uniqueKey:`clock-24h-${N?"night":"morning"}-${O}`}}const e=Array.isArray(n.minuteChoices)?n.minuteChoices:[0,15,30,45],t=Array.isArray(n.elapsedChoices)?n.elapsedChoices:[15,30,45,60,90,120],r=f(1,12),i=Ye(e),s=Ye(t),a=r%12*60+i;if(n.type==="clock_elapsed_before"){const b=(a-s+720)%720,A=Math.floor(b/60)%12||12,N=b%60,O=Kg(s);return{kind:"clock",mode:"elapsed",direction:"before",prompt:O.prompt,guide:"いまの じこくから、とけいを もどして かんがえよう。",hour:r,minute:i,elapsedMinutes:s,answer:A*100+N,uniqueKey:`clock-before-${r}-${i}-${s}-${O.storyKey}`}}const c=a+s,u=Math.floor(c/60)%12||12,h=c%60,p=n.type==="clock_elapsed_after"?zg(s):null,_=Da(s);return{kind:"clock",mode:"elapsed",direction:"after",prompt:p?p.prompt:`いまの とけいをみてね。
${_}あとは、
なんじ なんぷんでしょう？`,guide:"いまの じこくから、とけいを すすめて かんがえよう。",hour:r,minute:i,elapsedMinutes:s,answer:u*100+h,uniqueKey:p?`clock-after-${r}-${i}-${s}-${p.storyKey}`:`clock-elapsed-${r}-${i}-${s}`}}};let No=[];function rd(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function Wg(){return No.length===0&&(No=rd(["tenths-grid","count-tenths","one-tenth","match-picture","number-line"])),No.shift()}function Ai(n,e){const t=rd([n,...e]),r=["A","B","C"],i=t.map((a,c)=>({id:r[c],label:a})),s=i.find(a=>a.label===n).id;return{choices:i,answer:s}}function Pt(n){return`0.${n}`}function Hg(){const n=f(1,9),e=Pt(n),t=Pt(n===9?8:n+1),r=Pt(n===1?2:n-1);return{prompt:"10このうち、色がついているぶんを 小数であらわすと？",guide:`10こに分けたうち、${n}こに色がついています。`,visual:{mode:"tenths-grid",filled:n},...Ai(e,[t,r]),uniqueKey:`decimal-grid-${n}`}}function Qg(){const n=f(2,9),e=`${n}こ`,t=`${n===9?8:n+1}こ`,r=`${n===2?1:n-1}こ`;return{prompt:`${Pt(n)} は、0.1が 何こぶん？`,guide:"小数点の右の数字に ちゅうもくしよう。",visual:{mode:"count-tenths",count:n},...Ai(e,[t,r]),uniqueKey:`decimal-count-${n}`}}function Jg(){return{prompt:"1を 10こに おなじ大きさに分けた、1こぶんは？",guide:"1を10等分した1つ分を、0.1といいます。",visual:{mode:"one-tenth"},...Ai("0.1",["1.0","0.01"]),uniqueKey:"decimal-one-tenth"}}function Xg(){const n=f(2,8),e=Pt(n),t=`${n}.0`,r=Pt(n===8?7:n+1);return{prompt:"この図に合う小数は？",guide:"10こに分けたうち、色がついた数を見よう。",visual:{mode:"match-picture",filled:n},...Ai(e,[t,r]),uniqueKey:`decimal-match-${n}`}}function Yg(){const n=f(1,9),e=Pt(n),t=Pt(n===9?8:n+1),r=Pt(n===1?2:n-1);return{prompt:"数直線の●があるところは？",guide:"0から1までを、10こに分けています。",visual:{mode:"number-line",value:n},...Ai(e,[t,r]),uniqueKey:`decimal-line-${n}`}}const Zg={types:["decimal_visual_basic"],build(){const n=Wg();let e;switch(n){case"count-tenths":e=Qg();break;case"one-tenth":e=Jg();break;case"match-picture":e=Xg();break;case"number-line":e=Yg();break;default:e=Hg();break}return{kind:"decimal-choice",...e}}};function Zo(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function ws(n,e){const t=Zo([String(n),...e.map(String)]),r=["A","B","C"],i=t.map((a,c)=>({id:r[c],label:a})),s=i.find(a=>a.label===String(n))?.id;return{choices:i,answer:s}}function Y(n){return(n/10).toFixed(1)}function id(){const n=f(1,4),e=f(1,9),t=`${n}.${e}`;return f(0,1)===0?{kind:"decimal-over-one",mode:"count-tenths",whole:n,tenths:e,value:t,prompt:`${t} は、${n} と
0.1が なんこ あつまった数？`,guide:"小数点の右の数字に ちゅうもくしよう。",answer:e,uniqueKey:`decimal-over-one-count-${n}-${e}`}:{kind:"decimal-over-one",mode:"make-decimal",whole:n,tenths:e,value:t,prompt:`${n} と 0.1が ${e}こ あります。
あわせた数は？`,guide:`0.1が${e}こで 0.${e} です。`,answer:Number(t),uniqueKey:`decimal-over-one-make-${n}-${e}`}}function e_(){const n=f(0,2),e=f(1,9),t=n*10,r=t+e,i=Y(r);return{kind:"decimal-numberline",prompt:"●のところの数は？",guide:"1目もりは 0.1 です。",startWhole:n,startTenths:t,endTenths:t+10,valueTenths:r,value:i,answer:Number(i),uniqueKey:`decimal-numberline-${n}-${e}`}}function sd(){const n=f(0,2),e=f(8,27);let t=[e,e+f(1,3),e+f(4,6)];for(t=[...new Set(t)];t.length<3;){const p=f(5,35);t.includes(p)||t.push(p)}const r=p=>p%10===0?String(p/10):(p/10).toFixed(1),i=t.map(r);if(n===0){const p=Zo(i),_=r(Math.max(...t)),b=["A","B","C"],A=p.map((O,V)=>({id:b[V],label:O})),N=A.find(O=>O.label===_).id;return{kind:"decimal-compare",mode:"largest",prompt:"いちばん大きい数は どれ？",guide:"まず整数のぶぶんを見よう。",choices:A,answer:N,uniqueKey:`decimal-compare-largest-${t.join("-")}`}}if(n===1){const p=Zo(i),_=r(Math.min(...t)),b=["A","B","C"],A=p.map((O,V)=>({id:b[V],label:O})),N=A.find(O=>O.label===_).id;return{kind:"decimal-compare",mode:"smallest",prompt:"いちばん小さい数は どれ？",guide:"まず整数のぶぶんを見よう。",choices:A,answer:N,uniqueKey:`decimal-compare-smallest-${t.join("-")}`}}const s=[...t].sort((p,_)=>p-_).map(r),a=s.join(" → "),c=[s[1],s[0],s[2]].join(" → "),u=[s[2],s[1],s[0]].join(" → "),h=ws(a,[c,u]);return{kind:"decimal-compare",mode:"order",prompt:"小さい順にならんでいるのは どれ？",guide:"左から、小さい数になるように見よう。",choices:h.choices,answer:h.answer,uniqueKey:`decimal-compare-order-${t.join("-")}`}}let el=0;function t_(){const n=el%10;el++;const e=n===0,t=(n*3+2)%9+1,r=(n*5+4)%9+1,i=`${t}.${r}`,s=n%3;if(s===0)return{kind:"decimal-place-value",mode:"place-name",showTutorial:e,tutorialValue:"24.63",value:i,whole:t,tenths:r,prompt:`${i} の ${r} は
何の位の数字？`,guide:e?"上のお手本を見て、位のならびを考えよう。":"小数点を手がかりに考えよう。",...ws("10分の1の位",["一の位","10の位"]),uniqueKey:`decimal-place-name-${n}-${t}-${r}`};if(s===1){const u=String(r),h=String(t===9?8:t+1);return{kind:"decimal-place-value",mode:"whole-digit",showTutorial:e,tutorialValue:"24.63",value:i,whole:t,tenths:r,prompt:`${i} の
一の位の数字は どれ？`,guide:e?"上のお手本で、一の位の場所をたしかめよう。":"小数点の左となりを見よう。",...ws(String(t),[u,h]),uniqueKey:`decimal-place-whole-${n}-${t}-${r}`}}const a=String(t),c=String(r===9?8:r+1);return{kind:"decimal-place-value",mode:"tenths-digit",showTutorial:e,tutorialValue:"24.63",value:i,whole:t,tenths:r,prompt:`${i} の
10分の1の位の数字は どれ？`,guide:e?"上のお手本で、10分の1の位をたしかめよう。":"小数点の右となりを見よう。",...ws(String(r),[a,c]),uniqueKey:`decimal-place-tenths-${n}-${t}-${r}`}}function od(){const n=f(0,1);let e,t;if(n===0)e=f(1,7),t=f(1,9-e);else{const c=f(1,7),u=f(1,9-c);e=10+c,t=u}const r=e+t,i=Y(e),s=Y(t),a=Y(r);return{kind:"decimal-calculation",operation:"add",prompt:"小数のたし算をしよう。",guide:"小数点の場所をそろえて考えよう。",left:i,symbol:"＋",right:s,label:`${i} ＋ ${s}`,answer:Number(a),uniqueKey:`decimal-add-${e}-${t}`}}function ad(){const n=f(0,1);let e,t;if(n===0)e=f(3,9),t=f(1,e-1);else{const c=f(3,9);e=10+c,t=f(1,c)}const r=e-t,i=Y(e),s=Y(t),a=Y(r);return{kind:"decimal-calculation",operation:"subtract",prompt:"小数のひき算をしよう。",guide:"小数点の場所をそろえて考えよう。",left:i,symbol:"−",right:s,label:`${i} − ${s}`,answer:Number(a),uniqueKey:`decimal-subtract-${e}-${t}`}}function cd(){const n=[()=>{const r=f(11,18),i=f(1,6),s=r+i,a=Number(Y(r)),c=Number(Y(i)),u=Number(Y(s));return{icon:"🥤",text:`ジュースが ${a}L あります。
${c}L ふやしました。
ぜんぶで なんL？`,left:a,operator:"+",right:c,answer:u,key:`juice-add-${r}-${i}`}},()=>{const r=f(14,25),i=f(1,Math.min(6,r-10)),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r-i));return{icon:"💧",text:`水が ${s}L あります。
${a}L つかいました。
のこりは なんL？`,left:s,operator:"-",right:a,answer:c,key:`water-sub-${r}-${i}`}},()=>{const r=f(11,20),i=f(1,6),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r+i));return{icon:"🎀",text:`${s}mの リボンに
${a}mの リボンを つなぎました。
ぜんぶで なんm？`,left:s,operator:"+",right:a,answer:c,key:`ribbon-add-${r}-${i}`}},()=>{const r=f(14,25),i=f(1,Math.min(6,r-10)),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r-i));return{icon:"📏",text:`テープが ${s}m あります。
${a}m つかいました。
のこりは なんm？`,left:s,operator:"-",right:a,answer:c,key:`tape-sub-${r}-${i}`}},()=>{const r=f(11,18),i=f(1,6),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r+i));return{icon:"🥛",text:`ぎゅうにゅうが ${s}L あります。
${a}L たしました。
ぜんぶで なんL？`,left:s,operator:"+",right:a,answer:c,key:`milk-add-${r}-${i}`}},()=>{const r=f(11,25),i=f(1,8),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r+i));return{icon:"🚶",text:`${s}km あるきました。
そのあと ${a}km あるきました。
ぜんぶで なんkm？`,left:s,operator:"+",right:a,answer:c,key:`walk-add-${r}-${i}`}},()=>{const r=f(12,25),i=f(2,8),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r+i));return{icon:"🚲",text:`じてんしゃで ${s}km すすみました。
さらに ${a}km すすみました。
ぜんぶで なんkm？`,left:s,operator:"+",right:a,answer:c,key:`bike-add-${r}-${i}`}},()=>{const r=f(15,30),i=f(1,Math.min(8,r-10)),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r-i));return{icon:"🍚",text:`おこめが ${s}kg あります。
${a}kg つかいました。
のこりは なんkg？`,left:s,operator:"-",right:a,answer:c,key:`rice-sub-${r}-${i}`}},()=>{const r=f(11,20),i=f(1,7),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r+i));return{icon:"🍎",text:`りんごが ${s}kg あります。
さらに ${a}kg かいました。
ぜんぶで なんkg？`,left:s,operator:"+",right:a,answer:c,key:`apple-weight-add-${r}-${i}`}},()=>{const r=f(12,20),i=f(1,Math.min(6,r-10)),s=Number(Y(r)),a=Number(Y(i)),c=Number(Y(r-i));return{icon:"🧃",text:`ペットボトルに ${s}L あります。
${a}L のみました。
のこりは なんL？`,left:s,operator:"-",right:a,answer:c,key:`drink-sub-${r}-${i}`}}],e=n[f(0,n.length-1)],t=e();return{kind:"decimal-word",keypad:"expression",guide:"",icon:t.icon,prompt:`${t.text}
しきから にゅうりょくしよう。`,answer:t.answer,expression:{left:t.left,operator:t.operator,right:t.right,result:t.answer,commutative:t.operator==="+"},uniqueKey:`decimal-word-${t.key}`}}function n_(){const n=f(1,10);return n<=2?id():n<=4?sd():n<=6?od():n<=8?ad():cd()}function r_(){const n=f(0,50),e=f(0,50);return{kind:"text",label:`${Y(n)} ＋ ${Y(e)}`,answer:(n+e)/10,uniqueKey:`decimal-legacy-${n}-${e}`}}const i_={types:["decimal_over_one","decimal_numberline","decimal_compare","decimal_place_value","decimal_add","decimal_subtract","decimal_word","decimal_boss","decimal_mixed"],build(n){switch(n.type){case"decimal_over_one":return id();case"decimal_numberline":return e_();case"decimal_compare":return sd();case"decimal_place_value":return t_();case"decimal_add":return od();case"decimal_subtract":return ad();case"decimal_word":return cd();case"decimal_boss":return n_();case"decimal_mixed":return r_();default:throw new Error(`Unsupported decimal type: ${n.type}`)}}};function s_(n){return n[f(0,n.length-1)]}function ld(){const e=s_([{icon:"🍎",name:"りんご",counter:"こ"},{icon:"🍪",name:"クッキー",counter:"こ"},{icon:"⚽",name:"ボール",counter:"こ"},{icon:"🐟",name:"さかな",counter:"ひき"}]);if(f(0,1)===0){const a=f(2,4),c=f(2,5),u=a*c;return{kind:"division_share",icon:e.icon,itemName:e.name,counter:e.counter,total:u,groups:a,each:c,prompt:`${e.name}が ${u}${e.counter} あります。`,secondPrompt:`${a}人で おなじ数ずつ わけます。`,question:`1人ぶんは なん${e.counter}？`,answer:c,uniqueKey:`division_share_${e.name}_${u}_${a}`}}const r=f(2,5),i=f(2,4),s=r*i;return{kind:"division_group",icon:e.icon,itemName:e.name,counter:e.counter,total:s,each:r,groups:i,prompt:`${e.name}が ${s}${e.counter} あります。`,secondPrompt:`${r}${e.counter}ずつに わけます。`,question:"いくつの まとまりが できますか？",answer:i,uniqueKey:`division_group_${e.name}_${s}_${r}`}}function ud(){const n=f(2,5),e=f(1,9),t=n*e;return{kind:"text",label:`${t} ÷ ${n}`,answer:e,uniqueKey:`division_basic_${t}_${n}`}}function dd(){const n=f(2,9),e=f(1,9),t=n*e;return{kind:"division_fact_family",multiplication:`${n} × ${e} ＝ ${t}`,division:`${t} ÷ ${n} ＝ ？`,divisor:n,quotient:e,total:t,answer:e,uniqueKey:`division_fact_${n}_${e}`}}function hd(){const n=f(2,9),e=f(1,9),t=n*e;return{kind:"text",label:`${t} ÷ ${n}`,answer:e,uniqueKey:`division_single_${t}_${n}`}}function pd(){const n=[()=>{const r=f(2,5),i=f(2,6),s=r*i;return{icon:"🍪",text:`クッキーが ${s}こ あります。
${r}人で おなじ数ずつ わけます。
1人ぶんは なんこ？`,left:s,right:r,answer:i,key:`cookie-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,6),s=r*i;return{icon:"🍬",text:`あめが ${s}こ あります。
${r}人で おなじ数ずつ わけます。
1人ぶんは なんこ？`,left:s,right:r,answer:i,key:`candy-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,6),s=r*i;return{icon:"🍎",text:`りんごが ${s}こ あります。
1ふくろに ${r}こずつ いれます。
なんふくろ できますか？`,left:s,right:r,answer:i,key:`apple-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,6),s=r*i;return{icon:"✏️",text:`えんぴつが ${s}本 あります。
${r}人で おなじ数ずつ わけます。
1人ぶんは なん本？`,left:s,right:r,answer:i,key:`pencil-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,5),s=r*i;return{icon:"🐟",text:`さかなが ${s}ひき います。
1つの すいそうに ${r}ひきずつ いれます。
すいそうは いくつ いりますか？`,left:s,right:r,answer:i,key:`fish-${s}-${r}`}},()=>{const r=f(2,6),i=f(2,5),s=r*i;return{icon:"⚽",text:`ボールが ${s}こ あります。
1はこに ${r}こずつ いれます。
はこは いくつ いりますか？`,left:s,right:r,answer:i,key:`ball-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,5),s=r*i;return{icon:"🎮",text:`${s}人で ゲームを します。
1チーム ${r}人ずつに わかれます。
なんチーム できますか？`,left:s,right:r,answer:i,key:`game-${s}-${r}`}},()=>{const r=f(2,5),i=f(2,4),s=r*i;return{icon:"🍰",text:`ケーキが ${s}こ あります。
${r}人で おなじ数ずつ わけます。
1人ぶんは なんこ？`,left:s,right:i,answer:i,key:`cake-${s}-${r}`}},()=>{const r=f(2,6),i=f(2,5),s=r*i;return{icon:"⭐",text:`シールが ${s}まい あります。
${r}人で おなじ数ずつ わけます。
1人ぶんは なんまい？`,answer:i,key:`seal-${s}-${r}`}}],e=f(0,n.length-1),t=n[e]();return{kind:"division_word_visual",keypad:"expression",guide:"",icon:t.icon,prompt:`${t.text}
しきから にゅうりょくしよう。`,className:"division-word-text",answer:t.answer,expression:{left:t.left,operator:"/",right:t.right,result:t.answer,commutative:!1},uniqueKey:`division_word_${t.key}`}}function o_(){const n=f(2,9),e=f(1,9),t=n*e;return{kind:"text",prompt:`${t} ÷ ${n}`,label:`${t} ÷ ${n}`,className:"division-flash-text",answer:e,uniqueKey:`division_flash_${t}_${n}`}}function a_(){const n=f(1,10);return n<=2?ld():n<=4?ud():n<=6?dd():n<=8?hd():pd()}function c_(n){const e=Number(n.baseNum??f(2,9)),t=Number(n.min??1),r=Number(n.max??9),i=f(t,r),s=e*i;return{kind:"text",label:`${s} ÷ ${e}`,answer:i,uniqueKey:`legacy_divide_${s}_${e}`}}const l_={types:["divide","division_meaning","division_basic","division_fact_family","division_single","division_word","division_flash","division_boss"],build(n){if(n.type==="division_meaning")return ld();if(n.type==="division_basic")return ud();if(n.type==="division_fact_family")return dd();if(n.type==="division_single")return hd();if(n.type==="division_word")return pd();if(n.type==="division_flash")return o_();if(n.type==="division_boss")return a_();if(n.type==="divide")return c_(n);throw new Error(`Unsupported division type: ${n.type}`)}};function u_(){const n=[3,4,5,6,7,8],e=n[f(0,n.length-1)],t=f(1,e-2),r=Math.max(1,e-t),i=f(1,r),s=t+i;return{kind:"fraction-add-same-denominator",prompt:"□ に はいる 数は？",guide:"分母が同じときは、分子どうしをたそう。",leftNumerator:t,rightNumerator:i,denominator:e,answer:s,uniqueKey:`fraction-add-${t}-${i}-${e}`}}const d_={types:["fraction_add_same_denominator"],build(){return u_()}};function h_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function p_(n,e,t,r){const i=n*r,s=t*e;return i>s?"A":i<s?"C":"B"}function fi({leftNumerator:n,leftDenominator:e,rightNumerator:t,rightDenominator:r,pattern:i}){const s=`${n}/${e}`,a=`${t}/${r}`;return{kind:"fraction-compare-number",pattern:i,prompt:"大きい分数は どっち？",guide:"分子と分母に注目してくらべよう。",leftNumerator:n,leftDenominator:e,rightNumerator:t,rightDenominator:r,leftLabel:s,rightLabel:a,choices:[{id:"A",label:"左の分数"},{id:"B",label:"おなじ"},{id:"C",label:"右の分数"}],answer:p_(n,e,t,r),uniqueKey:`fraction-number-${i}-${n}-${e}-${t}-${r}`}}function m_(){const n=[3,4,5,6][f(0,3)];let e=f(1,n-1),t=f(1,n-1);return t===e&&(t=t===n-1?1:t+1),fi({pattern:"same-denominator",leftNumerator:e,leftDenominator:n,rightNumerator:t,rightDenominator:n})}function f_(){const n=f(1,3),e=[[2,3],[2,4],[3,4],[3,5],[4,5],[4,6],[5,6]];let t=e[f(0,e.length-1)];const r=e.filter(([s,a])=>s>n&&a>n);t=r[f(0,r.length-1)];const i=f(0,1)===1;return fi({pattern:"same-numerator",leftNumerator:n,leftDenominator:i?t[1]:t[0],rightNumerator:n,rightDenominator:i?t[0]:t[1]})}function g_(){const n=[[1,2,2,3],[1,2,3,4],[2,3,3,4],[2,5,1,3],[3,5,2,3],[3,4,4,5],[4,5,5,6]],e=n[f(0,n.length-1)];return f(0,1)===1?fi({pattern:"mixed",leftNumerator:e[2],leftDenominator:e[3],rightNumerator:e[0],rightDenominator:e[1]}):fi({pattern:"mixed",leftNumerator:e[0],leftDenominator:e[1],rightNumerator:e[2],rightDenominator:e[3]})}function __(){const n=[[1,2,2,4],[1,2,3,6],[1,3,2,6],[2,3,4,6]],e=n[f(0,n.length-1)];return fi({pattern:"equivalent",leftNumerator:e[0],leftDenominator:e[1],rightNumerator:e[2],rightDenominator:e[3]})}const y_=["same-denominator","same-denominator","same-denominator","same-numerator","same-numerator","same-numerator","mixed","mixed","mixed","equivalent"];let Do=[];function v_(){return Do.length===0&&(Do=h_(y_)),Do.shift()}const b_={types:["fraction_compare_number"],build(){switch(v_()){case"same-numerator":return f_();case"mixed":return g_();case"equivalent":return __();default:return m_()}}};function w_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function T_(n,e,t,r){const i=n*r,s=t*e;return i<s?"<":i>s?">":"="}function lr({pattern:n,leftNumerator:e,leftDenominator:t,rightNumerator:r,rightDenominator:i,leftIsWhole:s=!1,rightIsWhole:a=!1,guide:c}){const u=s?String(e):`${e}/${t}`,h=a?String(r):`${r}/${i}`,p=T_(e,t,r,i);let _="B";return p==="<"&&(_="A"),p===">"&&(_="C"),{kind:"fraction-compare-symbol",pattern:n,prompt:"□ に はいる きごうは どれ？",guide:c,leftNumerator:e,leftDenominator:t,rightNumerator:r,rightDenominator:i,leftLabel:u,rightLabel:h,choices:[{id:"A",label:"＜"},{id:"B",label:"＝"},{id:"C",label:"＞"}],answer:_,uniqueKey:`fraction-symbol-${n}-${u}-${h}`}}function E_(){const n=[3,4,5,6,7,8][f(0,5)];let e=f(1,n-1),t=f(1,n-1);return e===t&&(t=t===n-1?t-1:t+1),lr({pattern:"same-denominator",leftNumerator:e,leftDenominator:n,rightNumerator:t,rightDenominator:n,guide:"分母が同じときは、分子に注目しよう。"})}function I_(){const n=[[1,2,3],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[2,4,6],[3,4,5],[3,5,6]],e=n[f(0,n.length-1)],t=e[0];let r=e[1],i=e[2];return f(0,1)===1&&([r,i]=[i,r]),lr({pattern:"same-numerator",leftNumerator:t,leftDenominator:r,rightNumerator:t,rightDenominator:i,guide:"分子が同じときは、1こ分の大きさを考えよう。"})}function k_(){const n=[2,3,4,5,6][f(0,4)],e=f(0,2);let t;return e===0?t=f(1,n-1):e===1?t=n:t=n+f(1,3),f(0,1)===1?lr({pattern:"compare-one",leftNumerator:1,leftDenominator:1,rightNumerator:t,rightDenominator:n,leftIsWhole:!0,guide:"分子と分母を見て、1より大きいか小さいか考えよう。"}):lr({pattern:"compare-one",leftNumerator:t,leftDenominator:n,rightNumerator:1,rightDenominator:1,rightIsWhole:!0,guide:"分子と分母を見て、1より大きいか小さいか考えよう。"})}function A_(){const n=[[1,2,2,4],[1,2,3,6],[1,3,2,6],[2,3,4,6],[1,4,2,8],[3,4,6,8]],e=n[f(0,n.length-1)];return f(0,1)===1?lr({pattern:"equivalent",leftNumerator:e[2],leftDenominator:e[3],rightNumerator:e[0],rightDenominator:e[1],guide:"分け方がちがっても、同じ大きさになる分数があります。"}):lr({pattern:"equivalent",leftNumerator:e[0],leftDenominator:e[1],rightNumerator:e[2],rightDenominator:e[3],guide:"分け方がちがっても、同じ大きさになる分数があります。"})}let xo=[];function S_(){return xo.length===0&&(xo=w_(["same-denominator","same-denominator","same-denominator","same-numerator","same-numerator","same-numerator","compare-one","compare-one","equivalent","equivalent"])),xo.shift()}const R_={types:["fraction_compare_symbol"],build(){switch(S_()){case"same-numerator":return I_();case"compare-one":return k_();case"equivalent":return A_();default:return E_()}}};let Vo=[];function C_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function $_(){return Vo.length===0&&(Vo=C_(["same-denominator","same-denominator","same-denominator","same-numerator","same-numerator","same-numerator","equivalent","equivalent","mixed","mixed"])),Vo.shift()}function P_(n,e,t,r){const i=n/e,s=t/r;return Math.abs(i-s)<1e-6?"B":i>s?"A":"C"}function ur({pattern:n,leftNumerator:e,leftDenominator:t,rightNumerator:r,rightDenominator:i,guide:s}){const a=`${e}/${t}`,c=`${r}/${i}`,u=P_(e,t,r,i);return{kind:"fraction-compare-visual",pattern:n,prompt:"どちらの分数が 大きい？",guide:s,leftNumerator:e,leftDenominator:t,rightNumerator:r,rightDenominator:i,leftLabel:a,rightLabel:c,choices:[{id:"A",label:"左の分数"},{id:"B",label:"おなじ"},{id:"C",label:"右の分数"}],answer:u,uniqueKey:`fraction-compare-${n}-${e}-${t}-${r}-${i}`}}function N_(){const n=[3,4,5,6],e=n[f(0,n.length-1)],t=f(1,e-1),r=[];for(let s=1;s<e;s++)s!==t&&r.push(s);const i=r[f(0,r.length-1)];return ur({pattern:"same-denominator",leftNumerator:t,leftDenominator:e,rightNumerator:i,rightDenominator:e,guide:"同じ大きさに分けています。色がついているところをくらべよう。"})}function D_(){const n=[[2,3],[2,4],[2,5],[3,4],[3,5],[3,6],[4,5],[4,6],[5,6]],e=n[f(0,n.length-1)],t=Math.min(e[0],e[1])-1,r=f(1,Math.max(1,t)),i=f(0,1)===1,s=i?e[1]:e[0],a=i?e[0]:e[1];return ur({pattern:"same-numerator",leftNumerator:r,leftDenominator:s,rightNumerator:r,rightDenominator:a,guide:"同じ数だけ色がついています。何こに分けたかにも注目しよう。"})}function x_(){const n=[{leftNumerator:1,leftDenominator:2,rightNumerator:2,rightDenominator:4},{leftNumerator:1,leftDenominator:2,rightNumerator:3,rightDenominator:6},{leftNumerator:1,leftDenominator:3,rightNumerator:2,rightDenominator:6},{leftNumerator:2,leftDenominator:3,rightNumerator:4,rightDenominator:6},{leftNumerator:1,leftDenominator:4,rightNumerator:2,rightDenominator:8},{leftNumerator:3,leftDenominator:4,rightNumerator:6,rightDenominator:8}],e=n[f(0,n.length-1)];return f(0,1)===1?ur({pattern:"equivalent",leftNumerator:e.rightNumerator,leftDenominator:e.rightDenominator,rightNumerator:e.leftNumerator,rightDenominator:e.leftDenominator,guide:"分け方がちがっても、色のついた大きさが同じことがあります。"}):ur({pattern:"equivalent",...e,guide:"分け方がちがっても、色のついた大きさが同じことがあります。"})}function V_(){const n=[{leftNumerator:1,leftDenominator:2,rightNumerator:2,rightDenominator:3},{leftNumerator:1,leftDenominator:2,rightNumerator:3,rightDenominator:4},{leftNumerator:2,leftDenominator:3,rightNumerator:3,rightDenominator:5},{leftNumerator:1,leftDenominator:3,rightNumerator:2,rightDenominator:5},{leftNumerator:3,leftDenominator:4,rightNumerator:4,rightDenominator:6},{leftNumerator:2,leftDenominator:5,rightNumerator:1,rightDenominator:3},{leftNumerator:3,leftDenominator:5,rightNumerator:2,rightDenominator:3},{leftNumerator:4,leftDenominator:5,rightNumerator:5,rightDenominator:6}],e=n[f(0,n.length-1)];return f(0,1)===1?ur({pattern:"mixed",leftNumerator:e.rightNumerator,leftDenominator:e.rightDenominator,rightNumerator:e.leftNumerator,rightDenominator:e.leftDenominator,guide:"分けた数も、色がついている数もちがいます。図全体の大きさをくらべよう。"}):ur({pattern:"mixed",...e,guide:"分けた数も、色がついている数もちがいます。図全体の大きさをくらべよう。"})}const O_={types:["fraction_compare_visual"],build(){switch($_()){case"same-numerator":return D_();case"equivalent":return x_();case"mixed":return V_();default:return N_()}}};function M_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function L_(n,e,t,r){return n*r===t*e}const tl=[{leftNumerator:1,leftDenominator:2,rightNumerator:2,rightDenominator:4},{leftNumerator:1,leftDenominator:2,rightNumerator:3,rightDenominator:6},{leftNumerator:1,leftDenominator:3,rightNumerator:2,rightDenominator:6},{leftNumerator:2,leftDenominator:3,rightNumerator:4,rightDenominator:6},{leftNumerator:1,leftDenominator:4,rightNumerator:2,rightDenominator:8},{leftNumerator:3,leftDenominator:4,rightNumerator:6,rightDenominator:8},{leftNumerator:1,leftDenominator:2,rightNumerator:2,rightDenominator:6},{leftNumerator:1,leftDenominator:3,rightNumerator:3,rightDenominator:6},{leftNumerator:2,leftDenominator:4,rightNumerator:4,rightDenominator:6},{leftNumerator:2,leftDenominator:3,rightNumerator:3,rightDenominator:6},{leftNumerator:1,leftDenominator:4,rightNumerator:3,rightDenominator:8},{leftNumerator:3,leftDenominator:4,rightNumerator:5,rightDenominator:8}];function U_(){const n=tl[f(0,tl.length-1)],e=f(0,1)===1;let t,r,i,s;e?(t=n.rightNumerator,r=n.rightDenominator,i=n.leftNumerator,s=n.leftDenominator):(t=n.leftNumerator,r=n.leftDenominator,i=n.rightNumerator,s=n.rightDenominator);const a=L_(t,r,i,s),c=`${t}/${r}`,u=`${i}/${s}`,h=a?"同じ大きさ":"ちがう大きさ",p=a?["左のほうが大きい","右のほうが大きい"]:t/r>i/s?["同じ大きさ","右のほうが大きい"]:["同じ大きさ","左のほうが大きい"],_=M_([h,...p]),b=["A","B","C"],A=_.map((O,V)=>({id:b[V],label:O})),N=A.find(O=>O.label===h)?.id;return{kind:"fraction-equivalent-visual",prompt:"2つの分数は 同じ大きさ？",guide:"分け方がちがっても、色のついた大きさに注目しよう。",leftNumerator:t,leftDenominator:r,rightNumerator:i,rightDenominator:s,leftLabel:c,rightLabel:u,choices:A,answer:N,uniqueKey:`fraction-equivalent-${t}-${r}-${i}-${s}`}}const F_={types:["fraction_equivalent"],build(){return U_()}};let Oo=[];function md(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function j_(){return Oo.length===0&&(Oo=md(["food","share","shade","words","diagram"])),Oo.shift()}function B_({correct:n,wrongs:e}){const t=md([n,...e]),r=["A","B","C"],i=t.map((a,c)=>({id:r[c],label:a})),s=i.find(a=>a.label===n);return{choices:i,answer:s.id}}function Yn(n,e){return`${n}/${e}`}function Si(n,e){const t=Yn(n,e),r=[Yn(e,n),Yn(Math.max(1,n-1),e),Yn(Math.min(e,n+1),e),Yn(n,e+1),Yn(1,e)],i=[...new Set(r)].filter(s=>s!==t).slice(0,2);for(;i.length<2;)i.push(`1/${e+i.length+1}`);return B_({correct:t,wrongs:i})}const Ds=[{item:"pizza",name:"ピザ",emoji:"🍕"},{item:"cake",name:"ケーキ",emoji:"🎂"},{item:"chocolate",name:"チョコ",emoji:"🍫"}];function q_(){const n=Ds[f(0,Ds.length-1)],e=[2,3,4][f(0,2)],t=e===2?1:f(1,e-1),r=Si(t,e);return{pattern:"food",prompt:`${n.name}を ${e}つに わけました。${t}つぶんは？`,guide:`${e}つに わけたうちの ${t}つぶんを かんがえよう。`,visual:{mode:"food",item:n.item,emoji:n.emoji,parts:e,taken:t},...r,uniqueKey:`fraction-food-${n.item}-${t}-${e}`}}function z_(){const n=Ds[f(0,Ds.length-1)],e=[2,3,4][f(0,2)],t=Si(1,e);return{pattern:"share",prompt:`${n.name}を ${e}人で おなじ大きさに わけました。1人ぶんは？`,guide:`${e}人で おなじ大きさに わけると、1人ぶんは ぜんぶの何分の1かな？`,visual:{mode:"share",item:n.item,emoji:n.emoji,parts:e,taken:1},...t,uniqueKey:`fraction-share-${n.item}-${e}`}}function K_(){const n=[3,4,5][f(0,2)],e=f(1,n-1),t=Si(e,n);return{pattern:"shade",prompt:"色がついているところは、何分の何？",guide:`ぜんぶで ${n}こ。そのうち ${e}こに 色がついています。`,visual:{mode:"shade",parts:n,taken:e},...t,uniqueKey:`fraction-shade-${e}-${n}`}}function G_(){const n=[3,4,5][f(0,2)],e=f(1,n-1),t=Si(e,n);return{pattern:"words",prompt:`${n}つに わけたうちの ${e}つぶんは？`,guide:"下の数字は、ぜんぶを何こに分けたか。上の数字は、そのうち何こぶんか。",visual:{mode:"words",parts:n,taken:e},...t,uniqueKey:`fraction-words-${e}-${n}`}}function W_(){const n=[3,4,5][f(0,2)],e=f(1,n-1),t=Si(e,n);return{pattern:"diagram",prompt:"この図を あらわす分数は？",guide:"色がついている数と、ぜんぶの数を見よう。",visual:{mode:"diagram",parts:n,taken:e},...t,uniqueKey:`fraction-diagram-${e}-${n}`}}const H_={types:["fraction_visual_basic"],build(){const n=j_();let e;switch(n){case"share":e=z_();break;case"shade":e=K_();break;case"words":e=G_();break;case"diagram":e=W_();break;default:e=q_();break}return{kind:"fraction-choice",...e}}};function Q_(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function J_(){const n=[3,4,5,6,7,8],e=n[f(0,n.length-1)],t=f(2,e),r=f(1,t-1),i=t-r;return{kind:"fraction-subtract-same-denominator",mode:"calculation",prompt:"□ に はいる 数は？",guide:"分母が同じときは、分子どうしをひこう。",leftNumerator:t,rightNumerator:r,denominator:e,answer:i,uniqueKey:`fraction-subtract-calc-${t}-${r}-${e}`}}const nl=[{icon:"🍕",build({leftNumerator:n,rightNumerator:e,denominator:t}){return`ピザが ${t}こに分けてあり、${n}/${t} こ分 ありました。
${e}/${t} こ分 食べました。
のこりは 何こ分？`}},{icon:"🍫",build({leftNumerator:n,rightNumerator:e,denominator:t}){return`チョコを ${t}こに分けました。
${n}/${t} こ分 あり、${e}/${t} こ分 食べました。
のこりは 何こ分？`}},{icon:"🎂",build({leftNumerator:n,rightNumerator:e,denominator:t}){return`ケーキを ${t}こに分けました。
${n}/${t} こ分 ありました。
${e}/${t} こ分 食べました。
のこりは 何こ分？`}},{icon:"🍎",build({leftNumerator:n,rightNumerator:e,denominator:t}){return`りんごを ${t}こに分けたうち、${n}/${t} こ分 ありました。
${e}/${t} こ分 使いました。
のこりは 何こ分？`}}];function X_(){const n=[4,5,6,8],e=n[f(0,n.length-1)],t=f(2,e),r=f(1,t-1),i=t-r,s=f(0,nl.length-1),a=nl[s];return{kind:"fraction-subtract-same-denominator",mode:"word",prompt:"文章を読んで考えよう",guide:"同じ大きさに分けたものなので、分子どうしをひこう。",icon:a.icon,wordText:a.build({leftNumerator:t,rightNumerator:r,denominator:e}),leftNumerator:t,rightNumerator:r,denominator:e,answer:i,uniqueKey:`fraction-subtract-word-${s}-${t}-${r}-${e}`}}let Mo=[];function Y_(){return Mo.length===0&&(Mo=Q_(["calc","calc","calc","calc","calc","calc","word","word","word","word"])),Mo.shift()}const Z_={types:["fraction_subtract_same_denominator"],build(){return Y_()==="word"?X_():J_()}};function ey(n){const e=Number(n?.denominator)||4,t=f(1,e-1),r=f(0,e-t);return{kind:"fraction-add-same-denominator",prompt:"□ に はいる 数は？",guide:"分母が同じときは、分子どうしをたそう。",leftNumerator:t,rightNumerator:r,denominator:e,answer:t+r,uniqueKey:`fraction-legacy-add-${t}-${r}-${e}`}}function ty(){const n=[3,4,5,6,7,8],e=n[f(0,n.length-1)],t=f(1,e-1),r=f(0,e-t);return{kind:"fraction-add-same-denominator",prompt:"□ に はいる 数は？",guide:"分母が同じときは、分子どうしをたそう。",leftNumerator:t,rightNumerator:r,denominator:e,answer:t+r,uniqueKey:`fraction-boss-add-${t}-${r}-${e}`}}function ny(){const n=[3,4,5,6,7,8],e=n[f(0,n.length-1)],t=f(2,e),r=f(1,t-1);return{kind:"fraction-subtract-same-denominator",mode:"calculation",prompt:"□ に はいる 数は？",guide:"分母が同じときは、分子どうしをひこう。",leftNumerator:t,rightNumerator:r,denominator:e,answer:t-r,uniqueKey:`fraction-boss-sub-${t}-${r}-${e}`}}function ry(){return f(0,1)===0?ty():ny()}const iy={types:["fraction_same_denominator","fraction_mixed"],build(n){if(n.type==="fraction_same_denominator")return ey(n);if(n.type==="fraction_mixed")return ry();throw new Error(`Unsupported fraction type: ${n.type}`)}},rl=[{a:50,b:30},{a:80,b:20},{a:100,b:50},{a:120,b:80},{a:150,b:50},{a:180,b:120},{a:200,b:150},{a:250,b:150},{a:300,b:200},{a:350,b:150}],sy={types:["money_add"],build(){const n=rl[f(0,rl.length-1)];return{kind:"text",prompt:`${n.a}円 ＋ ${n.b}円 ＝ ？`,answer:n.a+n.b,uniqueKey:`money-add-${n.a}-${n.b}`}}};let il=0;const En=[{name:"ジュース",icon:"🥤",price:120},{name:"ノート",icon:"📘",price:150},{name:"パン",icon:"🍞",price:180},{name:"りんご",icon:"🍎",price:180},{name:"ぎゅうにゅう",icon:"🥛",price:220},{name:"けしごむ",icon:"🧽",price:100},{name:"えんぴつ",icon:"✏️",price:80}];function oy(){const n=[[1e3,500,100,50],[5e3,1e3,500,100],[1e4,1e3,500],[5e3,500,100,100],[1e4,5e3,500]],e=n[f(0,n.length-1)],t=Ku(e.map(i=>sn(i))),r=e.reduce((i,s)=>i+s,0);return{kind:"money",prompt:"ぜんぶで いくら？",items:t,answer:r,uniqueKey:`money-boss-count-${e.join("-")}`}}function ay(){const n=[[120,180],[150,220],[180,120],[250,150],[300,200]],[e,t]=n[f(0,n.length-1)];return{kind:"text",prompt:`${e}円 ＋ ${t}円 ＝ ？`,answer:e+t,uniqueKey:`money-boss-add-${e}-${t}`}}function cy(){const n=[[500,180],[500,220],[1e3,350],[1e3,480],[5e3,1200]],[e,t]=n[f(0,n.length-1)];return{kind:"text",prompt:`${e}円 − ${t}円 ＝ ？`,answer:e-t,uniqueKey:`money-boss-sub-${e}-${t}`}}function ly(){const n=[500,1e3],e=n[f(0,n.length-1)],t=En.filter(i=>i.price<e),r=t[f(0,t.length-1)];return{kind:"money",prompt:`${r.icon} ${r.name}は ${r.price}円です。
${e}円を だしました。
おつりは いくら？`,items:[sn(e)],answer:e-r.price,uniqueKey:`money-boss-change-${e}-${r.name}-${r.price}`}}function uy(){let n=En[f(0,En.length-1)],e=En[f(0,En.length-1)];for(;e.name===n.name;)e=En[f(0,En.length-1)];const t=n.price+e.price;return{kind:"text",className:"money-boss-shopping",prompt:`${n.icon} ${n.name} ${n.price}円 と
${e.icon} ${e.name} ${e.price}円を かいます。
ぜんぶで いくら？`,answer:t,uniqueKey:`money-boss-shopping-${n.name}-${e.name}-${t}`}}const dy={types:["money_boss"],build(){const n=il%5;return il+=1,n===0?oy():n===1?ay():n===2?cy():n===3?ly():uy()}},ea=[{shop:"くだものやさん",products:[{name:"りんご",icon:"🍎",price:180},{name:"みかん",icon:"🍊",price:160},{name:"バナナ",icon:"🍌",price:220}]},{shop:"パンやさん",products:[{name:"しょくパン",icon:"🍞",price:180},{name:"メロンパン",icon:"🥐",price:220},{name:"クリームパン",icon:"🥖",price:200}]},{shop:"のみものやさん",products:[{name:"ジュース",icon:"🥤",price:120},{name:"おちゃ",icon:"🍵",price:150},{name:"ぎゅうにゅう",icon:"🥛",price:180}]},{shop:"ぶんぼうぐやさん",products:[{name:"えんぴつ",icon:"✏️",price:80},{name:"けしごむ",icon:"🧽",price:100},{name:"ノート",icon:"📘",price:150}]}];function ta(n){const e=[1e3,500,100,50,10,5,1],t=[];let r=n;for(const i of e)for(;r>=i;)t.push(sn(i)),r-=i;return t}function oi(n){const e=[...n];for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function na(){const n=ea[f(0,ea.length-1)],e=oi(n.products);if((Math.random()<.55?"exact":"affordable")==="exact"){const p=e[f(0,e.length-1)].price,_=oi(e).map((A,N)=>({id:["A","B","C"][N],icon:A.icon,name:A.name,price:A.price,affordable:A.price===p})),b=_.find(A=>A.affordable).id;return{kind:"money-choice",prompt:`${n.shop}です。${p}円で ちょうど かえるのは どれ？`,items:ta(p),choices:_,answer:b,uniqueKey:`canbuy-exact-${n.shop}-${p}-${_.map(A=>`${A.id}-${A.name}-${A.price}`).join("-")}`}}const r=[...e].sort((h,p)=>h.price-p.price),i=r[0],s=r[1];let a=i.price;s.price-i.price>=20&&(a=i.price+10);const c=oi(e).map((h,p)=>({id:["A","B","C"][p],icon:h.icon,name:h.name,price:h.price,affordable:h.price<=a})),u=c.find(h=>h.affordable).id;return{kind:"money-choice",prompt:`${n.shop}です。${a}円もっています。かえるのは どれ？`,items:ta(a),choices:c,answer:u,uniqueKey:`canbuy-${n.shop}-${a}-${c.map(h=>`${h.id}-${h.name}-${h.price}`).join("-")}`}}function hy(){const n=ea.flatMap(h=>h.products.map(p=>({...p,shop:h.shop}))),e=oi(n),t=[];let r=0;for(;t.length<3&&r<e.length-1;){const h=e[r],p=e[r+1];h.name!==p.name&&t.push({items:[h,p],total:h.price+p.price}),r+=2}if(t.length<3)return na();const s=t.map(h=>h.total).sort((h,p)=>h-p)[1];if(t.filter(h=>h.total===s).length!==1)return na();const c=oi(t).map((h,p)=>({id:["A","B","C"][p],icon:h.items.map(_=>_.icon).join("＋"),name:h.items.map(_=>_.name).join("＋"),price:h.total,affordable:h.total===s})),u=c.find(h=>h.affordable).id;return{kind:"money-choice",prompt:`${s}円で ちょうど かえる セットは どれ？`,items:ta(s),choices:c,answer:u,uniqueKey:`canbuy-set-${s}-${c.map(h=>`${h.id}-${h.name}-${h.price}`).join("-")}`}}const py={types:["money_can_buy"],build(){return Math.random()<.25?hy():na()}},sl=[{name:"りんご",icon:"🍎"},{name:"パン",icon:"🍞"},{name:"ドーナツ",icon:"🍩"},{name:"ジュース",icon:"🥤"},{name:"ノート",icon:"📘"},{name:"えんぴつ",icon:"✏️"},{name:"おもちゃ",icon:"🧸"}],my={types:["money_change"],build(n){const e=n.payments??[100,500,1e3],t=e[f(0,e.length-1)],r=sl[f(0,sl.length-1)];let i=10;t>=1e3&&(i=50);const s=t-i,a=i*f(1,Math.max(1,Math.floor(s/i))),c=t-a;return{kind:"money",prompt:`${r.icon} ${r.name}は ${a}円。${t}円を出しました。おつりはいくら？`,items:[sn(t)],answer:c,uniqueKey:`change-${r.name}-${t}-${a}`}}},ol=[{shop:"パンやさん",product:"しょくパン",icon:"🍞",price:180,choices:[{coins:[100,50,10,10,10],correct:!0},{coins:[100,50,10],correct:!1},{coins:[100,100],correct:!1}]},{shop:"のみものやさん",product:"ジュース",icon:"🥤",price:120,choices:[{coins:[100,10,10],correct:!0},{coins:[100],correct:!1},{coins:[100,50],correct:!1}]},{shop:"くだものやさん",product:"りんご",icon:"🍎",price:180,choices:[{coins:[100,50,10,10,10],correct:!0},{coins:[100,50],correct:!1},{coins:[100,100],correct:!1}]},{shop:"ぶんぼうぐやさん",product:"ノート",icon:"📘",price:150,choices:[{coins:[100,50],correct:!0},{coins:[100,10,10],correct:!1},{coins:[100,100],correct:!1}]},{shop:"ぶんぼうぐやさん",product:"けしごむ",icon:"🧽",price:100,choices:[{coins:[50,50],correct:!0},{coins:[50,10,10,10],correct:!1},{coins:[100,10],correct:!1}]},{shop:"のみものやさん",product:"おちゃ",icon:"🍵",price:150,choices:[{coins:[100,50],correct:!0},{coins:[100,10,10,10],correct:!1},{coins:[100,100],correct:!1}]},{shop:"くだものやさん",product:"バナナ",icon:"🍌",price:130,choices:[{coins:[100,10,10,10],correct:!0},{coins:[100,10,10],correct:!1},{coins:[100,50],correct:!1}]},{shop:"ぶんぼうぐやさん",product:"えんぴつ",icon:"✏️",price:110,choices:[{coins:[100,10],correct:!0},{coins:[100],correct:!1},{coins:[100,50],correct:!1}]},{shop:"おにぎりやさん",product:"おにぎり",icon:"🍙",price:140,choices:[{coins:[100,10,10,10,10],correct:!0},{coins:[100,10,10,10],correct:!1},{coins:[100,50],correct:!1}]},{shop:"おかしやさん",product:"クッキー",icon:"🍪",price:160,choices:[{coins:[100,50,10],correct:!0},{coins:[100,50],correct:!1},{coins:[100,50,10,10],correct:!1}]},{shop:"くだものやさん",product:"みかん",icon:"🍊",price:170,choices:[{coins:[100,50,10,10],correct:!0},{coins:[100,50,10],correct:!1},{coins:[100,100],correct:!1}]},{shop:"アイスやさん",product:"アイス",icon:"🍨",price:200,choices:[{coins:[100,100],correct:!0},{coins:[100,50],correct:!1},{coins:[100,100,10],correct:!1}]},{shop:"おかしやさん",product:"キャンディ",icon:"🍬",price:90,choices:[{coins:[50,10,10,10,10],correct:!0},{coins:[50,10,10,10],correct:!1},{coins:[100],correct:!1}]},{shop:"パンやさん",product:"クロワッサン",icon:"🥐",price:190,choices:[{coins:[100,50,10,10,10,10],correct:!0},{coins:[100,50,10,10,10],correct:!1},{coins:[100,100],correct:!1}]},{shop:"おもちゃやさん",product:"ボール",icon:"⚽",price:130,choices:[{coins:[100,10,10,10],correct:!0},{coins:[100,10,10],correct:!1},{coins:[100,50],correct:!1}]}];let Lo=0;function fy(n){const e=n.map(t=>({...t,coins:[...t.coins]}));for(let t=e.length-1;t>0;t--){const r=f(0,t);[e[t],e[r]]=[e[r],e[t]]}return e}function gy(){const n=ol[Lo];return Lo=(Lo+1)%ol.length,n}const _y={types:["money_exact_pay"],build(){const n=gy(),e=fy(n.choices),t=["A","B","C"],r=e.map((s,a)=>({id:t[a],moneyItems:s.coins.map(c=>sn(c)),correct:s.correct})),i=r.find(s=>s.correct);if(!i)throw new Error(`money_exact_pay: 正解選択肢がありません (${n.product})`);return{kind:"money-choice",prompt:`${n.shop}です。
${n.icon} ${n.product}は ${n.price}円です。
ちょうど はらえるのは どれ？`,items:[],choices:r,answer:i.id,uniqueKey:`exact-${n.shop}-${n.product}-${n.price}`}}},Zn=[{name:"りんご",icon:"🍎"},{name:"パン",icon:"🍞"},{name:"ドーナツ",icon:"🍩"},{name:"ジュース",icon:"🥤"},{name:"ノート",icon:"📘"},{name:"えんぴつ",icon:"✏️"}],yy={types:["money_shopping"],build(n){const e=n.payments??[500,1e3],t=e[f(0,e.length-1)];let r=Zn[f(0,Zn.length-1)],i=Zn[f(0,Zn.length-1)];for(;i.name===r.name;)i=Zn[f(0,Zn.length-1)];const s=Math.floor((t-20)/2),a=f(1,Math.max(1,Math.floor(s/10)))*10,c=t-a-10,u=f(1,Math.max(1,Math.floor(c/10)))*10,h=a+u,p=t-h;return{kind:"money",prompt:`${r.icon} ${r.name} ${a}円 と ${i.icon} ${i.name} ${u}円。${t}円を出したら、おつりはいくら？`,items:[sn(t)],answer:p,uniqueKey:`shopping-${t}-${r.name}-${a}-${i.name}-${u}`}}},al=[{a:100,b:30},{a:100,b:50},{a:150,b:50},{a:200,b:80},{a:200,b:120},{a:300,b:100},{a:300,b:150},{a:400,b:200},{a:500,b:200},{a:500,b:350}],vy={types:["money_sub"],build(){const n=al[f(0,al.length-1)];return{kind:"text",prompt:`${n.a}円 − ${n.b}円 ＝ ？`,answer:n.a-n.b,uniqueKey:`money-sub-${n.a}-${n.b}`}}},by={types:["money_sum"],build(n){const e=n.denominations??[1,5,10,50,100,500],t=f(n.minItems??2,n.maxItems??4),r=[],i=e.filter(a=>a>=1e3),s=e.filter(a=>a<1e3);for(i.length&&Math.random()<(n.billChance??.65)&&r.push(sn(i[f(0,i.length-1)]));r.length<t;){const a=s.length?s:e;r.push(sn(a[f(0,a.length-1)]))}return{kind:"money",prompt:"ぜんぶで いくら？",items:Ku(r),answer:r.reduce((a,c)=>a+c.value,0),uniqueKey:r.map(a=>a.value).sort((a,c)=>a-c).join("-")}}};function ra(n){return n[f(0,n.length-1)]}function fd(){const n=f(2,5),e=f(2,5),r=ra([{icon:"🍎",name:"りんご",counter:"こ"},{icon:"🍪",name:"クッキー",counter:"こ"},{icon:"⚽",name:"ボール",counter:"こ"},{icon:"✏️",name:"えんぴつ",counter:"本"}]);return{kind:"multiply_groups",icon:r.icon,itemName:r.name,counter:r.counter,each:n,groups:e,prompt:`${n}${r.counter}ずつの まとまりが ${e}つあります。`,question:`ぜんぶで なん${r.counter}？`,answer:n*e,uniqueKey:`multiply_groups_${r.name}_${n}_${e}`}}function wy(){const e=ra([2,3,4,5]),t=f(1,9);return Math.random()<.4?{kind:"multiply_visual_equation",icon:ra(["🍎","🍪","⚽","⭐"]),each:e,groups:t,label:`${e} × ${t}`,answer:e*t,uniqueKey:`multiply_basic_visual_${e}_${t}`}:{kind:"text",label:`${e} × ${t}`,answer:e*t,uniqueKey:`multiply_basic_${e}_${t}`}}function Ty(n){const e=n.minTable??1,t=n.maxTable??9,r=f(e,t),i=f(1,9);return{kind:"text",prompt:`${r} × ${i}`,label:`${r} × ${i}`,className:"multiply-master-text",answer:r*i,uniqueKey:`multiply_master_${r}_${i}`}}function gd(){const n=f(2,9),e=f(2,8),t=[{icon:"🍬",text:`1ふくろに ${n}この あめが 入っています。
${e}ふくろでは ぜんぶで なんこ？`},{icon:"✏️",text:`1はこに ${n}本の えんぴつが 入っています。
${e}はこでは ぜんぶで なん本？`},{icon:"🧒",text:`1れつに ${n}人ずつ ならびます。
${e}れつでは ぜんぶで なん人？`},{icon:"⚽",text:`1チーム ${n}人です。
${e}チームでは ぜんぶで なん人？`},{icon:"🍪",text:`1さらに クッキーが ${n}こ あります。
${e}さらでは ぜんぶで なんこ？`},{icon:"📚",text:`1日に 本を ${n}ページずつ よみます。
${e}日では なんページ よむ？`},{icon:"🚗",text:`1だいの くるまに ${n}人 のります。
${e}だいでは ぜんぶで なん人 のれる？`},{icon:"⚾",text:`1はこに ボールが ${n}こ 入っています。
${e}はこでは ぜんぶで なんこ？`},{icon:"🐙",text:`1さらに たこやきが ${n}こ あります。
${e}さらでは ぜんぶで なんこ？`},{icon:"🎮",text:`1チームに ${n}人ずつ 入って
ゲームを します。
${e}チームでは ぜんぶで なん人？`},{icon:"🍓",text:`1さらに いちごが ${n}こ あります。
${e}さらでは ぜんぶで なんこ？`},{icon:"🎁",text:`1人に シールを ${n}まいずつ くばります。
${e}人では ぜんぶで なんまい いる？`}],r=f(0,t.length-1),i=t[r];return{kind:"multiplication_word_visual",keypad:"expression",guide:"",icon:i.icon,each:n,groups:e,prompt:`${i.text}
しきから にゅうりょくしよう。`,answer:n*e,expression:{left:n,operator:"*",right:e,result:n*e,commutative:!0},uniqueKey:`multiply_word_${n}_${e}_${r}`}}function _d(){const n=f(1,9),e=f(1,9);return{kind:"text",prompt:`${n} × ${e}`,label:`${n} × ${e}`,className:"multiply-flash-text",answer:n*e,uniqueKey:`multiply_flash_${n}_${e}`}}function Ey(){const n=f(1,10);return n<=2?fd():n<=7?_d():gd()}const Iy={types:["multiply_meaning","multiply_basics","multiply_master","multiply_word","multiply_flash","multiply_boss","multiply","multiply_mixed"],build(n){if(n.type==="multiply_meaning")return fd();if(n.type==="multiply_basics")return wy();if(n.type==="multiply_master")return Ty(n);if(n.type==="multiply_word")return gd();if(n.type==="multiply_flash")return _d();if(n.type==="multiply_boss")return Ey();if(n.type==="multiply"){const r=f(n.min??1,n.max??9);return{label:`${n.baseNum} × ${r}`,answer:n.baseNum*r,uniqueKey:`multiply_old_${n.baseNum}_${r}`}}const e=f(1,9),t=f(1,9);return{label:`${e} × ${t}`,answer:e*t,uniqueKey:`multiply_mixed_${e}_${t}`}}},ky=Object.assign({"./generators/arithmetic.js":qg,"./generators/clock.js":Gg,"./generators/decimal-visual-basic.js":Zg,"./generators/decimal.js":i_,"./generators/division.js":l_,"./generators/fraction-add-same-denominator.js":d_,"./generators/fraction-compare-number.js":b_,"./generators/fraction-compare-symbol.js":R_,"./generators/fraction-compare-visual.js":O_,"./generators/fraction-equivalent.js":F_,"./generators/fraction-half-choice.js":H_,"./generators/fraction-subtract-same-denominator.js":Z_,"./generators/fraction.js":iy,"./generators/money-add.js":sy,"./generators/money-boss.js":dy,"./generators/money-can-buy.js":py,"./generators/money-change.js":my,"./generators/money-exact-pay.js":_y,"./generators/money-shopping.js":yy,"./generators/money-sub.js":vy,"./generators/money.js":by,"./generators/multiplication.js":Iy}),Ay=Object.assign({}),ia=new Map;for(const[n,e]of Object.entries({...ky,...Ay})){if(!e||!Array.isArray(e.types)||typeof e.build!="function")throw new Error(`Question generator is invalid: ${n}`);for(const t of e.types){if(ia.has(t))throw new Error(`Question type is duplicated: ${t}`);ia.set(t,e.build)}}function Sy(n){return ia.get(n)}function cl(n,e=n?.questionCount??5){const t=Sy(n?.type);if(!t)throw new Error(`未対応タイプ: ${n?.type}`);const r=[];let i=0;for(;r.length<e&&i++<500;){const s=t(n),a=s.uniqueKey??s.label??JSON.stringify(s);r.some(c=>(c.uniqueKey??c.label??JSON.stringify(c))===a)||r.push(s)}if(r.length<e)throw new Error("問題を生成できませんでした。ステージ設定を確認してください。");return r}const Ry={kind:"addition_groups",render(n,{escapeHtml:e}){const t=e(n.icon??"●"),r=Number(n.leftCount??0),i=Number(n.rightCount??0),s=Array.from({length:r},()=>`
          <span class="addition-item">
            ${t}
          </span>
        `).join(""),a=Array.from({length:i},()=>`
          <span class="addition-item">
            ${t}
          </span>
        `).join("");return`
      <div class="visual-question addition-layout">

        <div class="addition-visual-side">

          <div class="addition-set">
            ${s}
          </div>

          <div class="addition-symbol">
            ＋
          </div>

          <div class="addition-set">
            ${a}
          </div>

        </div>


        <div class="addition-text-side">

          <div class="addition-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="addition-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},Cy={kind:"addition_increase",render(n,{escapeHtml:e}){const t=e(n.icon??"●"),r=Number(n.firstCount??0),i=Number(n.addedCount??0),s=Array.from({length:r},()=>`
          <span class="addition-item">
            ${t}
          </span>
        `).join(""),a=Array.from({length:i},()=>`
          <span class="addition-item addition-added-item">
            ${t}
          </span>
        `).join("");return`
      <div class="visual-question addition-layout">

        <div class="addition-visual-side addition-increase-visual">

          <div class="addition-set">
            ${s}
          </div>

          <div class="addition-arrow">
            ＋
          </div>

          <div class="addition-set addition-added-set">
            ${a}
          </div>

        </div>


        <div class="addition-text-side">

          <div class="addition-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="addition-second-prompt">
            ${e(n.secondPrompt??"")}
          </div>

          <div class="addition-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},$y={kind:"addition_word_visual",render(n,{escapeHtml:e}){const t=String(n?.scene??""),r=e(n?.icon??""),i=e(n?.prompt??"");let s=r||"⭐";return t==="park"?s="🌳":t==="bus"&&(s="🚌"),`
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="addition-word-layout">

          <div class="addition-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${s}
              </div>

              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  ＋
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="addition-word-text-side">

            <div class="addition-word-text">
              ${i}
            </div>

          </div>

        </div>

      </div>
    `}};function Py({hour:n,minute:e,showMinuteGuide:t=!1}){const s=t?114:112,a=88,c=n%12*30+e*.5,u=e*6,h=Array.from({length:12},(b,A)=>{const N=A+1,O=(N*30-90)*Math.PI/180,V=150+Math.cos(O)*s,K=150+Math.sin(O)*s;return`
          <text
            x="${V.toFixed(2)}"
            y="${K.toFixed(2)}"

            text-anchor="middle"
            dominant-baseline="middle"

            font-size="20"
            font-weight="800"

            fill="#172033"
          >
            ${N}
          </text>
        `}).join(""),p=t?Array.from({length:12},(b,A)=>{const N=A+1,O=N===12?0:N*5,V=(N*30-90)*Math.PI/180,K=150+Math.cos(V)*a,q=150+Math.sin(V)*a;return`
              <g>

                <circle
                  cx="${K.toFixed(2)}"
                  cy="${q.toFixed(2)}"
                  r="12"

                  fill="#dff4ff"
                  stroke="#38bdf8"
                  stroke-width="2"
                />


                <text
                  x="${K.toFixed(2)}"
                  y="${q.toFixed(2)}"

                  text-anchor="middle"
                  dominant-baseline="middle"

                  font-size="10"
                  font-weight="1000"

                  fill="#075985"
                >
                  ${O}
                </text>

              </g>
            `}).join(""):"",_=Array.from({length:60},(b,A)=>{const N=(A*6-90)*Math.PI/180,O=A%5===0,V=136,K=O?124:130,q=150+Math.cos(N)*K,Q=150+Math.sin(N)*K,ae=150+Math.cos(N)*V,fe=150+Math.sin(N)*V;return`
          <line
            x1="${q.toFixed(2)}"
            y1="${Q.toFixed(2)}"

            x2="${ae.toFixed(2)}"
            y2="${fe.toFixed(2)}"

            stroke="#172033"

            stroke-width="${O?4:2}"

            stroke-linecap="round"
          />
        `}).join("");return`
    <svg
      class="
        analog-clock-svg
        clock-learning-svg
        ${t?"has-minute-guide":""}
      "

      viewBox="0 0 300 300"

      role="img"

      aria-label="${n}時${e}分のアナログ時計"
    >

      <defs>

        <radialGradient
          id="clockFaceGradient"
          cx="50%"
          cy="42%"
          r="62%"
        >

          <stop
            offset="0%"
            stop-color="#fffdf1"
          />

          <stop
            offset="100%"
            stop-color="#f5dfa1"
          />

        </radialGradient>


        <filter
          id="clockShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >

          <feDropShadow
            dx="0"
            dy="8"
            stdDeviation="8"
            flood-color="#000"
            flood-opacity=".32"
          />

        </filter>

      </defs>


      <circle
        cx="150"
        cy="150"
        r="143"

        fill="#d8b86a"

        filter="url(#clockShadow)"
      />


      <circle
        cx="150"
        cy="150"
        r="132"

        fill="url(#clockFaceGradient)"

        stroke="#fff7d2"

        stroke-width="4"
      />


      ${_}

      ${h}

      ${p}


      <!-- 時針 -->

      <g
        transform="
          rotate(
            ${c}
            150
            150
          )
        "
      >

        <line
          x1="150"
          y1="158"

          x2="150"
          y2="88"

          stroke="#172033"

          stroke-width="11"

          stroke-linecap="round"
        />

      </g>


      <!-- 分針 -->

      <g
        transform="
          rotate(
            ${u}
            150
            150
          )
        "
      >

        <line
          x1="150"
          y1="162"

          x2="150"
          y2="54"

          stroke="#2563eb"

          stroke-width="7"

          stroke-linecap="round"
        />

      </g>


      <circle
        cx="150"
        cy="150"
        r="11"

        fill="#f7c948"

        stroke="#172033"

        stroke-width="5"
      />

    </svg>
  `}function Ny(n){return n==="morning"?`
      <div
        class="
          clock-period-scene
          morning
        "
      >

        <span class="clock-period-icon">
          ☀️
        </span>

        <strong>
          あさ
        </strong>

      </div>
    `:n==="night"?`
      <div
        class="
          clock-period-scene
          night
        "
      >

        <span class="clock-period-icon">
          🌙
        </span>

        <strong>
          よる
        </strong>

      </div>
    `:""}function Dy(n){return n.mode==="24h"?"あさと よるの 24じかんひょうき":n.mode==="minute-read"?"ふんの よみかた":n.mode==="elapsed"?n.direction==="before"?"じかんを もどそう":"じかんを すすめよう":"とけいを よもう"}const xy={kind:"clock",render(n,{escapeHtml:e}){const t=Number(n.hour??12),r=Number(n.minute??0),i=Ny(n.period),s=n.showMinuteGuide===!0||n.mode==="minute-read",a=Py({hour:t,minute:r,showMinuteGuide:s}),c=e(n.prompt??"この とけいは、なんじ なんぷん？").replace(/\n/g,"<br>");return`
      <div
        class="
          visual-question
          clock-question
          clock-learning-question
          clock-mode-${e(n.mode??"read")}
          clock-direction-${e(n.direction??"none")}
        "
      >

        <div class="clock-learning-layout">


          <!-- =========================================
               問題文
          ========================================== -->

          <div class="clock-learning-info">

            ${i}


            <div class="clock-mode-title">

              ${e(Dy(n))}

            </div>


            <div
              class="
                visual-prompt
                clock-learning-prompt
              "
            >
              ${c}
            </div>


            ${n.guide?`
                  <div class="clock-learning-guide">

                    💡
                    ${e(n.guide)}

                  </div>
                `:""}

          </div>


          <!-- =========================================
               時計
          ========================================== -->

          <div class="clock-learning-clock">

            ${a}


            ${n.mode==="elapsed"?`
                  <small
                    class="
                      clock-current-time-label
                    "
                  >
                    ${n.direction==="before"?"いまの じこくから もどそう":"いまの じこくから すすめよう"}
                  </small>
                `:""}


            ${s?`
                  <div class="clock-minute-reading-tip">

                    <strong>
                      ながい はり
                    </strong>

                    <span>
                      1 → 5ふん
                      ・
                      2 → 10ふん
                      ・
                      3 → 15ふん
                    </span>

                  </div>
                `:""}

          </div>


        </div>

      </div>
    `}},Vy={kind:"decimal-calculation",render(n,{escapeHtml:e}){return`
      <div class="decimal-calc-layout">

        <div class="decimal-calc-prompt">
          ${e(n.prompt??"")}
        </div>

        <div class="decimal-calc-equation">

          <span>
            ${e(n.left??"")}
          </span>

          <span class="decimal-calc-symbol">
            ${e(n.symbol??"")}
          </span>

          <span>
            ${e(n.right??"")}
          </span>

          <span class="decimal-calc-equals">
            ＝
          </span>

          <span class="decimal-calc-question">
            ？
          </span>

        </div>

        <div class="decimal-calc-guide">
          ${e(n.guide??"")}
        </div>

      </div>
    `}};function ll(n,e=!1){const t=Math.min(10,Math.max(0,Number(n)||0));return`
    <div class="decimal-tenths-grid">

      ${Array.from({length:10}).map((r,i)=>`
          <div
            class="
              decimal-tenth-cell
              ${i<t?"is-filled":"is-empty"}
            "
          >
            ${e?"0.1":""}
          </div>
        `).join("")}

    </div>
  `}function Oy(n){return`
    <div class="decimal-count-visual">

      <div class="decimal-main-number">
        0.${n}
      </div>

      <div class="decimal-equals">
        ＝
      </div>

      <div class="decimal-tenth-chips">

        ${Array.from({length:n}).map(()=>`
            <span>
              0.1
            </span>
          `).join("")}

      </div>

    </div>
  `}function My(){return`
    <div class="decimal-one-tenth-visual">

      <div class="decimal-whole-bar">

        ${Array.from({length:10}).map((n,e)=>`
            <span
              class="${e===0?"is-highlighted":""}"
            ></span>
          `).join("")}

      </div>

      <div class="decimal-one-tenth-arrow">
        ↑
      </div>

      <strong>
        10このうちの 1こ
      </strong>

    </div>
  `}function Ly(n){const e=Math.min(9,Math.max(1,Number(n)||1));return`
    <div class="decimal-number-line-s1">

      <div class="decimal-number-line-s1-track">

        ${Array.from({length:11}).map((t,r)=>`
            <div
              class="
                decimal-number-line-s1-point
                ${r===e?"is-current":""}
              "
            >

              ${r===e?`
                    <span class="decimal-number-line-s1-dot">
                      ●
                    </span>
                  `:""}

              <span class="decimal-number-line-s1-tick"></span>

              <span class="decimal-number-line-s1-label">
                ${r===0?"0":r===5?"0.5":r===10?"1":""}
              </span>

            </div>
          `).join("")}

      </div>

    </div>
  `}function Uy(n){switch(n.mode){case"count-tenths":return Oy(n.count);case"one-tenth":return My();case"number-line":return Ly(n.value);case"match-picture":return ll(n.filled,!1);default:return ll(n.filled,!1)}}const Fy={kind:"decimal-choice",render(n){const e=n?.visual??{},t=Array.isArray(n?.choices)?n.choices:[];return`
      <div
        class="
          visual-question
          decimal-choice-question
        "
      >

        <div
          class="
            visual-prompt
            decimal-choice-prompt
          "
        >
          ${n?.prompt??""}
        </div>


        <div class="decimal-learning-visual">
          ${Uy(e)}
        </div>


        <div class="decimal-choice-guide">
          ${n?.guide??""}
        </div>


        <div class="decimal-choice-options">

          ${t.map(r=>`
              <div
                class="
                  decimal-choice-option
                  decimal-choice-option-${r.id.toLowerCase()}
                "
              >

                <span class="decimal-choice-letter">
                  ${r.id}
                </span>

                <strong class="decimal-choice-value">
                  ${r.label}
                </strong>

              </div>
            `).join("")}

        </div>

      </div>
    `}},jy={kind:"decimal-compare",render(n,{escapeHtml:e}){const t=Array.isArray(n.choices)?n.choices:[];return`
      <div class="decimal-compare-simple">

        <div class="decimal-compare-simple-prompt">
          ${e(n.prompt??"")}
        </div>

        <div class="decimal-compare-simple-guide">
          ${e(n.guide??"")}
        </div>

        <div class="decimal-compare-simple-choices">

          ${t.map(r=>`
              <div class="decimal-compare-simple-choice">

                <span class="decimal-compare-simple-letter">
                  ${e(r.id)}
                </span>

                <strong class="decimal-compare-simple-value">
                  ${e(r.label)}
                </strong>

              </div>
            `).join("")}

        </div>

      </div>
    `}},By={kind:"decimal-numberline",render(n,{escapeHtml:e}){const t=Number(n.startWhole??0),r=Number(n.valueTenths??1),i=t*10,s=i+10;return`
      <div class="decimal-numberline-layout">

        <div class="decimal-numberline-visual">

          <div class="decimal-numberline-track">

            ${Array.from({length:11}).map((a,c)=>`
                  <div class="decimal-numberline-point">

                    ${i+c===r?`
                          <span class="decimal-numberline-dot">
                            ●
                          </span>
                        `:""}

                    <span class="decimal-numberline-tick"></span>

                    <span class="decimal-numberline-label">
                      ${c===0?Uo(i):c===5?Uo(i+5):c===10?Uo(s):""}
                    </span>

                  </div>
                `).join("")}

          </div>

        </div>


        <div class="decimal-numberline-text">

          <div class="decimal-numberline-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="decimal-numberline-guide">
            ${e(n.guide??"")}
          </div>

          <div class="decimal-numberline-input-guide">
            数字を入力してね
          </div>

        </div>

      </div>
    `}};function Uo(n){const e=n/10;return Number.isInteger(e)?String(e):e.toFixed(1)}const qy={kind:"decimal-over-one",render(n,{escapeHtml:e}){const t=Number(n.whole??1),r=Number(n.tenths??1),i=n.mode??"count-tenths",s=Array.from({length:t},(u,h)=>`
          <div class="decimal-over-whole-unit">

            <div class="decimal-over-bar">

              ${Array.from({length:10}).map(()=>`
                  <span class="is-filled"></span>
                `).join("")}

            </div>

            <small>
              1
            </small>

          </div>
        `).join(""),a=`
        <div class="decimal-over-whole-unit">

          <div
            class="
              decimal-over-bar
              decimal-over-part-bar
            "
          >

            ${Array.from({length:10}).map((u,h)=>`
                <span
                  class="${h<r?"is-filled":""}"
                ></span>
              `).join("")}

          </div>

          <small>
            0.1ずつ
          </small>

        </div>
      `;let c="";return i==="count-tenths"&&(c=`
          <div class="decimal-over-formula">

            <span>
              ${t}
            </span>

            <span>
              ＋
            </span>

            <span>
              0.1 × ？
            </span>

          </div>
        `),i==="make-decimal"&&(c=`
          <div class="decimal-over-formula">

            <span>
              ${t}
            </span>

            <span>
              ＋
            </span>

            <span>
              0.${r}
            </span>

            <span>
              ＝
            </span>

            <span class="decimal-over-question-mark">
              ？
            </span>

          </div>
        `),`
      <div class="decimal-over-layout">

        <!-- 左：図 -->
        <div class="decimal-over-visual">

          <div class="decimal-over-blocks">

            ${s}

            ${a}

          </div>


          ${c}

        </div>


        <!-- 右：問題 -->
        <div class="decimal-over-text">

          <div class="decimal-over-prompt">

            ${e(n.prompt??"")}

          </div>


          <div class="decimal-over-guide">

            ${e(n.guide??"")}

          </div>


          <div class="decimal-over-input-guide">

            数字を入力してね

          </div>

        </div>

      </div>
    `}},zy={kind:"decimal-place-value",render(n,{escapeHtml:e}){const t=Array.isArray(n.choices)?n.choices:[],r=n.showTutorial===!0;return`
      <div
        class="
          decimal-place-stage
          ${r?"is-tutorial":"is-normal"}
        "
      >

        ${r?`
              <div class="decimal-place-help">

                <div class="decimal-place-help-title">
                  位のならび
                </div>

                <div class="decimal-place-help-number">

                  <div class="decimal-place-help-cell">
                    <small>十の位</small>
                    <strong>2</strong>
                  </div>

                  <div class="decimal-place-help-cell">
                    <small>一の位</small>
                    <strong>4</strong>
                  </div>

                  <span class="decimal-place-help-dot">
                    .
                  </span>

                  <div class="decimal-place-help-cell">
                    <small>10分の1の位</small>
                    <strong>6</strong>
                  </div>

                  <div class="decimal-place-help-cell">
                    <small>100分の1の位</small>
                    <strong>3</strong>
                  </div>

                </div>

                <div class="decimal-place-help-caption">
                  24.63
                </div>

              </div>
            `:""}


        <div class="decimal-place-question-box">

          <div class="decimal-place-question-number">
            ${e(n.value??"")}
          </div>

          <div class="decimal-place-question-body">

            <div class="decimal-place-question-prompt">
              ${e(n.prompt??"")}
            </div>

            <div class="decimal-place-question-options">

              ${t.map(i=>`
                  <div class="decimal-place-question-option">

                    <span>
                      ${e(i.id)}
                    </span>

                    <strong>
                      ${e(i.label)}
                    </strong>

                  </div>
                `).join("")}

            </div>

          </div>

        </div>

      </div>
    `}},Ky={kind:"decimal-word",render(n,{escapeHtml:e}){const t=e(n?.icon??"📘"),r=e(n?.prompt??"");return`
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="decimal-word-layout">

          <div class="decimal-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${t}
              </div>

            </div>

          </div>


          <div class="decimal-word-text-side">

            <div class="decimal-word-text">
              ${r}
            </div>

          </div>

        </div>

      </div>
    `}},Gy={kind:"division_fact_family",render(n,{escapeHtml:e}){return`
      <div class="division-fact-layout">

        <div class="division-fact-step">
          <small>九九を思い出そう</small>

          <strong>
            ${e(n.multiplication??"")}
          </strong>
        </div>

        <div class="division-fact-arrow">
          ↓
        </div>

        <div class="division-fact-step division-fact-answer">
          <small>だから</small>

          <strong>
            ${e(n.division??"")}
          </strong>
        </div>

      </div>
    `}},Wy={kind:"division_group",render(n,{escapeHtml:e}){Number(n.total??0);const t=Number(n.each??0),r=Number(n.groups??0),i=e(n.icon??"●");return`
      <div class="visual-question division-layout">

        <div class="division-visual-side">

          <div class="division-group-grid">
            ${Array.from({length:r},()=>`
            <div class="division-group-box">
              ${Array.from({length:t},()=>`
                <span class="division-item">
                  ${i}
                </span>
              `).join("")}
            </div>
          `).join("")}
          </div>

        </div>

        <div class="division-text-side">

          <div class="division-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="division-second-prompt">
            ${e(n.secondPrompt??"")}
          </div>

          <div class="division-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},Hy={kind:"division_share",render(n,{escapeHtml:e}){const t=Number(n.total??0),r=Number(n.groups??0),i=e(n.icon??"●"),s=Array.from({length:t},()=>`
          <span class="division-item">
            ${i}
          </span>
        `).join(""),a=Array.from({length:r},(c,u)=>`
          <div class="division-person">
            <span class="division-person-icon">👤</span>
            <small>${u+1}人め</small>
          </div>
        `).join("");return`
      <div class="visual-question division-layout">

        <div class="division-visual-side">

          <div class="division-items-box">
            ${s}
          </div>

          <div class="division-arrow">
            ↓
          </div>

          <div class="division-people-row">
            ${a}
          </div>

        </div>

        <div class="division-text-side">

          <div class="division-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="division-second-prompt">
            ${e(n.secondPrompt??"")}
          </div>

          <div class="division-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},Qy={kind:"division_word_visual",render(n,{escapeHtml:e}){const t=e(n?.icon??"📘"),r=e(n?.prompt??"");return`
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="division-word-layout">

          <div class="division-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${t}
              </div>


              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  ÷
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="division-word-text-side">

            <div class="division-word-text">
              ${r}
            </div>

          </div>

        </div>

      </div>
    `}},Jy={kind:"fraction-add-same-denominator",render(n){const e=Number(n?.leftNumerator)||1,t=Number(n?.rightNumerator)||1,r=Number(n?.denominator)||5;return`
      <div class="fraction-s5-layout">


        <div class="fraction-s5-prompt">

          ${n?.prompt??"答えの分数を 入れよう"}

        </div>


        <div class="fraction-s5-expression">


          <div class="fraction-s5-fraction">

            <div class="fraction-s5-numerator">
              ${e}
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              ${r}
            </div>

          </div>


          <div class="fraction-s5-symbol">
            ＋
          </div>


          <div class="fraction-s5-fraction">

            <div class="fraction-s5-numerator">
              ${t}
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              ${r}
            </div>

          </div>


          <div class="fraction-s5-symbol">
            ＝
          </div>


          <div
            class="
              fraction-s5-fraction
              fraction-s5-answer
            "
          >

            <div class="fraction-s5-numerator">
              □
            </div>

            <div class="fraction-s5-line"></div>

            <div class="fraction-s5-denominator">
              □
            </div>

          </div>


        </div>


        <div class="fraction-s5-guide">

          ${n?.guide??""}

        </div>


      </div>
    `}};function Xy(n,e="is-small"){const t=String(n??""),r=t.match(/^(-?\d+)\/(\d+)$/);if(!r)return`
      <span>
        ${t}
      </span>
    `;const i=r[1],s=r[2];return`
    <span class="fraction-display ${e}">

      <span class="fraction-display-numerator">
        ${i}
      </span>

      <span class="fraction-display-line"></span>

      <span class="fraction-display-denominator">
        ${s}
      </span>

    </span>
  `}function sa(n,e,t,r){const i=(r-90)*Math.PI/180;return{x:n+t*Math.cos(i),y:e+t*Math.sin(i)}}function yd(n,e,t,r,i){const s=sa(n,e,t,i),a=sa(n,e,t,r),c=i-r>180?1:0;return[`M ${n} ${e}`,`L ${s.x} ${s.y}`,`A ${t} ${t}`,`0 ${c} 0`,`${a.x} ${a.y}`,"Z"].join(" ")}function Yy(n,e,t=!1){const r=Math.max(2,Number(n)||2),i=t?r:Math.min(r,Math.max(1,Number(e)||1)),s=70,a=70,c=56,u=360/r,h=[];for(let p=0;p<r;p++){const _=p<i;h.push(`
      <path
        d="${yd(s,a,c,u*p,u*(p+1))}"

        fill="${_?"#fbbf24":"rgba(255,255,255,0.05)"}"

        stroke="${_?"#b45309":"#cbd5e1"}"

        stroke-width="3"

        stroke-dasharray="${_?"none":"7 6"}"
      />
    `)}return`
    <svg
      class="fraction-food-svg"
      viewBox="0 0 140 140"
      aria-hidden="true"
    >
      ${h.join("")}

      <circle
        cx="${s}"
        cy="${a}"
        r="${c}"
        fill="none"
        stroke="#92400e"
        stroke-width="4"
      />

      ${t?`
            <circle
              cx="49"
              cy="43"
              r="5"
              fill="#ef4444"
            />

            <circle
              cx="88"
              cy="49"
              r="5"
              fill="#ef4444"
            />

            <circle
              cx="72"
              cy="88"
              r="5"
              fill="#ef4444"
            />
          `:""}
    </svg>
  `}function Zy(n,e,t=!1){const r=Math.max(2,Number(n)||2),i=t?r:Math.min(r,Math.max(1,Number(e)||1)),s=70,a=70,c=56,u=360/r,h=[];for(let p=0;p<r;p++){const _=p<i,b=u*(p+.5),A=sa(s,a,34,b);h.push(`
      <path
        d="${yd(s,a,c,u*p,u*(p+1))}"

        fill="${_?"#f9a8d4":"rgba(255,255,255,0.05)"}"

        stroke="${_?"#db2777":"#cbd5e1"}"

        stroke-width="3"

        stroke-dasharray="${_?"none":"7 6"}"
      />

      ${_?`
            <text
              x="${A.x}"
              y="${A.y+6}"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="15"
              style="
                text-shadow: none;
                filter: none;
              "
            >
              🍓
            </text>
          `:""}
    `)}return`
    <svg
      class="fraction-food-svg"
      viewBox="0 0 140 140"
      aria-hidden="true"
    >
      ${h.join("")}

      <circle
        cx="${s}"
        cy="${a}"
        r="${c}"
        fill="none"
        stroke="#f472b6"
        stroke-width="4"
      />

      <circle
        cx="${s}"
        cy="${a}"
        r="7"
        fill="#fff7ed"
        stroke="#db2777"
        stroke-width="2"
      />
    </svg>
  `}function ev(n,e,t=!1){const r=Math.max(2,Number(n)||2),i=t?r:Math.min(r,Math.max(1,Number(e)||1)),s=[];for(let a=0;a<r;a++)s.push(`
      <div
        class="
          fraction-choco-cell
          ${a<i?"is-selected":"is-empty"}
        "
      ></div>
    `);return`
    <div
      class="fraction-chocolate"
      style="
        grid-template-columns:
          repeat(${r}, minmax(0, 1fr));
      "
    >
      ${s.join("")}
    </div>
  `}function oa(n,e,t,r=!1){return n==="chocolate"?ev(e,t,r):n==="cake"?Zy(e,t,r):Yy(e,t,r)}function tv(n){const e=n.item??"pizza",t=Number(n.parts)||2,r=Number(n.taken)||1;return`
    <div class="fraction-story">

      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ぜんぶ
        </div>

        ${oa(e,t,t,!0)}

      </div>


      <div class="fraction-story-arrow">
        ➜
      </div>


      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ${r}つぶん
        </div>

        ${oa(e,t,r,!1)}

      </div>

    </div>
  `}function nv(n){const e=n.item??"pizza",t=Number(n.parts)||2,r=["👦","👧","🧒","👦","👧"];return`
    <div class="fraction-story fraction-share-story">

      <div class="fraction-story-side">

        <div class="fraction-story-label">
          ぜんぶ
        </div>

        ${oa(e,t,t,!0)}

      </div>


      <div class="fraction-story-arrow">
        ➜
      </div>


      <div class="fraction-share-people">

        ${Array.from({length:t}).map((i,s)=>`
            <div class="fraction-share-person">

              <span>
                ${r[s]??"🧒"}
              </span>

              <small>
                1人ぶん
              </small>

            </div>
          `).join("")}

      </div>

    </div>
  `}function rv(n){const e=Math.max(2,Number(n.parts)||2),t=Math.min(e,Math.max(1,Number(n.taken)||1));return`
    <div
      class="fraction-blocks"
      style="
        grid-template-columns:
          repeat(${e}, minmax(0, 1fr));
      "
    >

      ${Array.from({length:e}).map((r,i)=>`
          <div
            class="
              fraction-block
              ${i<t?"is-filled":"is-empty"}
            "
          ></div>
        `).join("")}

    </div>
  `}function iv(n){const e=Number(n.parts)||2,t=Number(n.taken)||1;return`
    <div class="fraction-word-visual">

      <div class="fraction-word-number">
        ${e}
      </div>

      <div class="fraction-word-text">
        こに分けたうち
      </div>

      <div class="fraction-word-number">
        ${t}
      </div>

      <div class="fraction-word-text">
        こぶん
      </div>

    </div>
  `}function sv(n){switch(n.mode){case"share":return nv(n);case"shade":case"diagram":return rv(n);case"words":return iv(n);default:return tv(n)}}const ov={kind:"fraction-choice",render(n){const e=Array.isArray(n?.choices)?n.choices:[],t=n?.visual??{};return`
      <div
        class="
          visual-question
          fraction-choice-question
        "
      >

        <div
          class="
            visual-prompt
            fraction-choice-prompt
          "
        >
          ${n?.prompt??""}
        </div>


        ${sv(t)}


        <div class="fraction-choice-guide">
          ${n?.guide??""}
        </div>


        <div class="fraction-choice-options">

          ${e.map(r=>`
              <div
                class="
                  fraction-choice-option
                  fraction-choice-option-${r.id.toLowerCase()}
                "
              >

                <span class="fraction-choice-letter">
                  ${r.id}
                </span>


                <strong class="fraction-choice-value">

                  ${Xy(r.label)}

                </strong>

              </div>
            `).join("")}

        </div>

      </div>
    `}},av={kind:"fraction-compare-number",render(n,{escapeHtml:e}){const t=e(n?.leftLabel??""),r=e(n?.rightLabel??""),i=Array.isArray(n?.choices)?n.choices:[];return`
      <div class="fraction-s4-layout">

        <div class="fraction-s4-prompt">
          ${e(n?.prompt??"大きい分数は どっち？")}
        </div>


        <div class="fraction-s4-numbers">

          <div class="fraction-s4-number">
            ${t}
          </div>


          <div class="fraction-s4-vs">
            と
          </div>


          <div class="fraction-s4-number">
            ${r}
          </div>

        </div>


        <div class="fraction-s4-guide">
          ${e(n?.guide??"")}
        </div>


        <div class="fraction-s4-options">

          ${i.map(s=>`
              <div class="fraction-s4-option">

                <span>
                  ${e(s.id)}
                </span>

                <strong>
                  ${e(s.label)}
                </strong>

              </div>
            `).join("")}

        </div>

      </div>
    `}};function cv(n,e){return`
    <div class="fraction-display">

      <div class="fraction-display-numerator">
        ${n}
      </div>

      <div class="fraction-display-line"></div>

      <div class="fraction-display-denominator">
        ${e}
      </div>

    </div>
  `}function ul(n,e){const t=Number(e)||1;return t===1?`
      <div class="fraction-whole-number">
        ${n}
      </div>
    `:cv(n,t)}const lv={kind:"fraction-compare-symbol",render(n,{escapeHtml:e}){const t=Number(n?.leftNumerator)||1,r=Number(n?.leftDenominator)||1,i=Number(n?.rightNumerator)||1,s=Number(n?.rightDenominator)||1,a=Array.isArray(n?.choices)?n.choices:[{id:"A",label:"＜"},{id:"B",label:"＝"},{id:"C",label:"＞"}];return`
      <div class="fraction-s4-layout">


        <div class="fraction-s4-prompt">

          ${e(n?.prompt??"□ に はいる きごうは どれ？")}

        </div>


        <div class="fraction-s4-expression">


          <div class="fraction-s4-number">

            ${ul(t,r)}

          </div>


          <div class="fraction-s4-blank">
            □
          </div>


          <div class="fraction-s4-number">

            ${ul(i,s)}

          </div>


        </div>


        <div class="fraction-s4-guide">

          ${e(n?.guide??"")}

        </div>


        <div class="fraction-s4-options">

          ${a.map(c=>`
              <div class="fraction-s4-option">

                <span>
                  ${e(c.id)}
                </span>

                <strong>
                  ${e(c.label)}
                </strong>

              </div>
            `).join("")}

        </div>


      </div>
    `}};function uv(n,e){return`
    <div class="fraction-display">

      <div class="fraction-display-numerator">
        ${n}
      </div>

      <div class="fraction-display-line"></div>

      <div class="fraction-display-denominator">
        ${e}
      </div>

    </div>
  `}function dv(n,e){const t=Math.max(2,Number(e)||2),r=Math.min(t,Math.max(0,Number(n)||0));return`
    <div
      class="fraction-s2-bar"

      style="
        grid-template-columns:
          repeat(${t}, minmax(0, 1fr));
      "
    >

      ${Array.from({length:t}).map((i,s)=>`
          <div
            class="
              fraction-s2-cell
              ${s<r?"is-filled":"is-empty"}
            "
          ></div>
        `).join("")}

    </div>
  `}function dl(n,e){return`
    <div class="fraction-s2-side">

      ${uv(n,e)}

      ${dv(n,e)}

    </div>
  `}const hv={kind:"fraction-compare-visual",render(n,{escapeHtml:e}){const t=Number(n?.leftNumerator)||1,r=Number(n?.leftDenominator)||2,i=Number(n?.rightNumerator)||1,s=Number(n?.rightDenominator)||3,a=Array.isArray(n?.choices)?n.choices:[];return`
      <div class="fraction-s2-layout">


        <div class="fraction-s2-prompt">

          ${e(n?.prompt??"どちらの分数が 大きい？")}

        </div>


        <div class="fraction-s2-compare">


          ${dl(t,r)}


          <div class="fraction-s2-vs">
            と
          </div>


          ${dl(i,s)}


        </div>


        <div class="fraction-s2-guide">

          ${e(n?.guide??"")}

        </div>


        <div class="fraction-s2-options">

          ${a.map(c=>`
              <div class="fraction-s2-option">

                <span>
                  ${e(c.id)}
                </span>

                <strong>
                  ${e(c.label)}
                </strong>

              </div>
            `).join("")}

        </div>


      </div>
    `}};function pv(n,e){return`
    <div class="fraction-display">

      <div class="fraction-display-numerator">
        ${n}
      </div>

      <div class="fraction-display-line"></div>

      <div class="fraction-display-denominator">
        ${e}
      </div>

    </div>
  `}function mv(n,e){const t=Math.max(2,Number(e)||2),r=Math.min(t,Math.max(0,Number(n)||0));return`
    <div
      class="fraction-equivalent-bar"

      style="
        grid-template-columns:
          repeat(${t}, minmax(0, 1fr));
      "
    >

      ${Array.from({length:t}).map((i,s)=>`
          <div
            class="
              fraction-equivalent-cell
              ${s<r?"is-filled":"is-empty"}
            "
          ></div>
        `).join("")}

    </div>
  `}function hl(n,e){return`
    <div class="fraction-equivalent-side">

      ${pv(n,e)}

      ${mv(n,e)}

    </div>
  `}const fv={kind:"fraction-equivalent-visual",render(n,{escapeHtml:e}){const t=Number(n?.leftNumerator)||1,r=Number(n?.leftDenominator)||2,i=Number(n?.rightNumerator)||2,s=Number(n?.rightDenominator)||4,a=Array.isArray(n?.choices)?n.choices:[];return`
      <div class="fraction-equivalent-layout">


        <div class="fraction-equivalent-prompt">

          ${e(n?.prompt??"2つの分数の 大きさを くらべよう")}

        </div>


        <div class="fraction-equivalent-compare">


          ${hl(t,r)}


          <div class="fraction-equivalent-center">
            ＝？
          </div>


          ${hl(i,s)}


        </div>


        <div class="fraction-equivalent-guide">

          ${e(n?.guide??"色のついた大きさを見てみよう。")}

        </div>


        <div class="fraction-equivalent-options">

          ${a.map(c=>`
              <div class="fraction-equivalent-option">

                <span class="fraction-equivalent-letter">
                  ${e(c.id)}
                </span>

                <strong class="fraction-equivalent-value">
                  ${e(c.label)}
                </strong>

              </div>
            `).join("")}

        </div>


      </div>
    `}};function ai(n,e,t=!1){return`
    <div
      class="
        fraction-s6-fraction
        ${t?"fraction-s6-answer":""}
      "
    >

      <div class="fraction-s6-numerator">
        ${t?"□":n}
      </div>

      <div class="fraction-s6-line"></div>

      <div class="fraction-s6-denominator">
        ${e}
      </div>

    </div>
  `}function gv(n){const e=Number(n?.leftNumerator)||1,t=Number(n?.rightNumerator)||1,r=Number(n?.denominator)||4;return`
    <div class="fraction-s6-calc">


      <div class="fraction-s6-prompt">
        ${n?.prompt??"□ に はいる 数は？"}
      </div>


      <div class="fraction-s6-expression">

        ${ai(e,r)}


        <div class="fraction-s6-symbol">
          −
        </div>


        ${ai(t,r)}


        <div class="fraction-s6-symbol">
          ＝
        </div>


        ${ai(0,r,!0)}

      </div>


      <div class="fraction-s6-guide">
        ${n?.guide??""}
      </div>


    </div>
  `}function _v(n){const e=n?.icon??"🍕",t=n?.wordText??"",r=Number(n?.leftNumerator)||1,i=Number(n?.rightNumerator)||1,s=Number(n?.denominator)||4;return`
    <div class="fraction-s6-word-layout">


      <div class="fraction-s6-word-visual">

        <div class="fraction-s6-word-icon">
          ${e}
        </div>


        <div class="fraction-s6-word-mini-expression">

          ${ai(r,s)}

          <div class="fraction-s6-symbol">
            −
          </div>

          ${ai(i,s)}

        </div>

      </div>


      <div class="fraction-s6-word-text-side">

        <div class="fraction-s6-word-text">
          ${t}
        </div>

      </div>


    </div>
  `}const yv={kind:"fraction-subtract-same-denominator",render(n){return(n?.mode??"calculation")==="word"?`
        <div class="fraction-s6-layout">

          ${_v(n)}

          <div class="fraction-s6-guide">
            ${n?.guide??""}
          </div>

        </div>
      `:`
      <div class="fraction-s6-layout">

        ${gv(n)}

      </div>
    `}},vv={kind:"money-choice",render(n){const e=Array.isArray(n?.items)?n.items:[],t=Array.isArray(n?.choices)?n.choices:[];return`

      <div
        class="
          visual-question
          money-choice-question
        "
      >

        <div class="visual-prompt">

          ${n.prompt??"買えるのはどっち？"}

        </div>


        <div class="money-choice-wallet">

          <span
            class="
              money-choice-wallet-label
            "
          >
            👛 もっているお金
          </span>


          <div
            class="
              money-choice-wallet-items
            "
          >

            ${e.map(r=>`

              <img

                class="
                  money-choice-money-image
                "

                src="${r.image}"

                alt="${r.value}円"

              >

            `).join("")}

          </div>

        </div>


        <div
          class="
            money-choice-options
          "
        >

          ${t.map(r=>`

  <div
    class="
      money-choice-option
      money-choice-option-${r.id.toLowerCase()}
    "
  >

    <span class="choice-letter">
      ${r.id}
    </span>

    ${r.moneyItems?`

      <div class="money-choice-wallet-items">

        ${r.moneyItems.map(i=>`

          <img
  class="money-choice-money-image"
  src="${i.image}"
  alt="${i.value}円"
  decoding="async"
  fetchpriority="high"
>
        `).join("")}

      </div>

    `:`

      <span class="choice-product-icon">
        ${r.icon}
      </span>

      <div class="choice-product-info">

        <span class="choice-product-name">
          ${r.name}
        </span>

        <strong class="choice-product-price">
          ${r.price}円
        </strong>

      </div>

    `}

  </div>

`).join("")}

        </div>

      </div>
    `}},bv={kind:"money",render(n,{escapeHtml:e}){return`
      <div
        class="
          visual-question
          money-question
        "
      >

        <div class="money-items">

          ${(Array.isArray(n.items)?n.items:[]).map(r=>{const i=Number(r.value),s=r.image||`/images/money/${i}yen.png`,a=`/pictures/money/${i}yen.png`;return`
                  <span
                    class="money-item"
                    aria-label="${i}円"
                  >

                    <img
                      class="money-image"

                      src="${e(s)}"

                      alt="${i}円"

                      decoding="async"

                      fetchpriority="high"

                      data-money-fallback="${e(a)}"

                      onerror="
                        if(
                          !this.dataset.fallbackTried
                        ){
                          this.dataset.fallbackTried='1';
                          this.src=this.dataset.moneyFallback;
                        }else{
                          this.style.display='none';
                          this.nextElementSibling.style.display='grid';
                        }
                      "
                    >

                    <span
                      class="money-fallback"
                      style="display:none"
                    >
                      ${i}円
                    </span>

                  </span>
                `}).join("")}

        </div>


        <div class="visual-prompt">

          ${e(n.prompt??"ぜんぶで いくら？")}

        </div>

      </div>
    `}},wv={kind:"multiplication_word_visual",render(n,{escapeHtml:e}){const t=e(n?.icon??"⭐"),r=e(n?.prompt??"");return`
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="multiplication-word-layout">

          <div class="multiplication-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${t}
              </div>


              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  ×
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="multiplication-word-text-side">

            <div class="multiplication-word-text">
              ${r}
            </div>

          </div>

        </div>

      </div>
    `}},Tv={kind:"multiply_groups",render(n,{escapeHtml:e}){const t=Number(n.each??0),r=Number(n.groups??0),i=e(n.icon??"●");return`
      <div class="visual-question multiply-layout">

        <div class="multiply-visual-side">

          <div class="multiply-groups">
            ${Array.from({length:r},(a,c)=>{const u=Array.from({length:t},()=>`
                <span class="multiply-item">
                  ${i}
                </span>
              `).join("");return`
            <div
              class="multiply-group"
              aria-label="${t}こずつの ${c+1}つめのまとまり"
            >
              ${u}
            </div>
          `}).join("")}
          </div>

        </div>

        <div class="multiply-text-side">

          <div class="multiply-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="multiply-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},Ev={kind:"multiply_visual_equation",render(n,{escapeHtml:e}){const t=Number(n.each??0),r=Number(n.groups??0),i=e(n.icon??"●");return`
      <div class="visual-question multiply-layout">

        <div class="multiply-visual-side">

          <div class="multiply-groups">
            ${Array.from({length:r},()=>`
            <div class="multiply-group">
              ${Array.from({length:t},()=>`
                <span class="multiply-item">
                  ${i}
                </span>
              `).join("")}
            </div>
          `).join("")}
          </div>

        </div>

        <div class="multiply-text-side">

          <div class="multiply-equation">
            ${e(n.label??"")}
            ＝ ？
          </div>

          <div class="multiply-equation-guide">
            まとまりを見て こたえよう
          </div>

        </div>

      </div>
    `}},Iv={kind:"subtraction_compare",render(n,{escapeHtml:e}){const t=Number(n?.large??0),r=Number(n?.small??0),i=e(n?.iconA??"🍎"),s=e(n?.iconB??"🍪"),a=Math.max(t,r);function c(u,h,p){return Array.from({length:a},(_,b)=>{const A=b<h,N=p==="large"&&b>=r;return`
            <div
              class="
                subtraction-compare-cell
                ${A?"is-filled":"is-empty"}
                ${N?"is-difference":""}
              "
            >

              ${A?`<span>${u}</span>`:""}

            </div>
          `}).join("")}return`
      <div class="subtraction-layout subtraction-compare-layout">


        <div class="subtraction-compare-visual">


          <div
            class="subtraction-compare-grid"
            style="
              --compare-columns:
              ${a};
            "
          >

            ${c(i,t,"large")}


            ${c(s,r,"small")}

          </div>


          <div class="subtraction-compare-difference">

            <span>
              ↑
            </span>

            <strong>
              このぶんが ちがう
            </strong>

          </div>


        </div>


        <div class="subtraction-text-side">

          <div class="subtraction-prompt">

            ${e(n?.prompt??"")}

          </div>


          <div class="subtraction-question-text">

            ${e(n?.question??"")}

          </div>

        </div>


      </div>
    `}},kv={kind:"subtraction_take",render(n,{escapeHtml:e}){const t=Number(n.total??0),r=Number(n.removed??0),i=e(n.icon??"●");return`
      <div class="visual-question subtraction-layout">

        <div class="subtraction-visual-side">

          <div class="subtraction-items">
            ${Array.from({length:t},(a,c)=>`
            <span
              class="
                subtraction-item
                ${c>=t-r?"is-removed":""}
              "
            >
              ${i}
            </span>
          `).join("")}
          </div>

        </div>

        <div class="subtraction-text-side">

          <div class="subtraction-prompt">
            ${e(n.prompt??"")}
          </div>

          <div class="subtraction-second-prompt">
            ${e(n.secondPrompt??"")}
          </div>

          <div class="subtraction-question-text">
            ${e(n.question??"")}
          </div>

        </div>

      </div>
    `}},Av={kind:"subtraction_word_visual",render(n,{escapeHtml:e}){const t=String(n?.scene??""),r=e(n?.icon??""),i=e(n?.prompt??"");let s=r||"⭐";return t==="bird"?s="🐦":t==="bus"?s="🚌":t==="children"?s="🧒":t==="fish"&&(s="🐟"),`
      <div class="word-problem-shell">

        <div class="word-problem-top-guide">
          しきから にゅうりょくしてね。
        </div>


        <div class="subtraction-word-layout">

          <div class="subtraction-word-visual-side">

            <div class="word-operation-visual">

              <div class="word-operation-icon">
                ${s}
              </div>


              <div class="word-operation-equation">

                <span class="word-operation-box">
                  □
                </span>

                <span class="word-operation-symbol">
                  －
                </span>

                <span class="word-operation-circle">
                  ○
                </span>

              </div>

            </div>

          </div>


          <div class="subtraction-word-text-side">

            <div class="subtraction-word-text">
              ${i}
            </div>

          </div>

        </div>

      </div>
    `}},Sv={kind:"text",render(n,{escapeHtml:e}){const t=n?.className?e(n.className):"",r=n?.prompt??n?.label??n?.expression??n?.text??"";return`
      <div class="text-question ${t}">
        ${e(r)}
      </div>
    `}},Rv=Object.assign({"./addition-groups.js":Ry,"./addition-increase.js":Cy,"./addition-word-visual.js":$y,"./clock.js":xy,"./decimal-calculation.js":Vy,"./decimal-choice.js":Fy,"./decimal-compare.js":jy,"./decimal-numberline.js":By,"./decimal-over-one.js":qy,"./decimal-place-value.js":zy,"./decimal-word.js":Ky,"./division-fact-family.js":Gy,"./division-group.js":Wy,"./division-share.js":Hy,"./division-word-visual.js":Qy,"./fraction-add-same-denominator.js":Jy,"./fraction-choice.js":ov,"./fraction-compare-number.js":av,"./fraction-compare-symbol.js":lv,"./fraction-compare-visual.js":hv,"./fraction-equivalent-visual.js":fv,"./fraction-subtract-same-denominator.js":yv,"./money-choice.js":vv,"./money.js":bv,"./multiplication-word-visual.js":wv,"./multiply-groups.js":Tv,"./multiply-visual-equation.js":Ev,"./subtraction-compare.js":Iv,"./subtraction-take.js":kv,"./subtraction-word-visual.js":Av,"./text.js":Sv}),Cv=Object.assign({}),xs=new Map;for(const[n,e]of Object.entries({...Rv,...Cv}))if(!(!e?.kind||typeof e.render!="function")){if(xs.has(e.kind))throw new Error(`Renderer kind is duplicated: ${e.kind} (${n})`);xs.set(e.kind,e.render)}function $v(n,e){return(xs.get(n?.kind??"text")??xs.get("text"))(n,e)}const Pv={id:"choice",keys:n=>[n("A","A","choice-key choice-key-a"),n("B","B","choice-key choice-key-b"),n("C","C","choice-key choice-key-c")]},Nv={id:"clock",keys(n,{input:e=""}={}){return String(e).indexOf("|")>=0?[...["00","05","10","15","20","25","30","35","40","45","50","55"].map(a=>n(`clock-minute:${a}`,a,"clock-minute-key")),n("back","じを えらびなおす","wide-key clock-back-key"),n("clear","ぜんぶ けす","wide-key clock-clear-key")]:[...Array.from({length:12},(a,c)=>{const u=String(c+1);return n(`clock-hour:${u}`,u,"clock-hour-key")}),n("clear","ぜんぶ けす","wide-key clock-clear-key")]}},Dv={id:"decimal",keys:n=>[..."123456789"].map(e=>n(e)).concat([n(".","・"),n("0"),n("back","ひとつ もどす"),n("clear","ぜんぶ けす")])},xv={id:"expression",keys(n){return[n("1"),n("2"),n("3"),n("4"),n("5"),n("6"),n("7"),n("8"),n("9"),n("0"),n(".","・","expression-decimal-key"),n("+","＋","expression-operation-key"),n("-","－","expression-operation-key"),n("*","×","expression-operation-key"),n("/","÷","expression-operation-key"),n("=","＝","expression-equals-key"),n("back","ひとつ もどす","expression-control-key"),n("clear","ぜんぶ けす","expression-control-key")]}},Vv={id:"fraction",keys:n=>[..."1234567890"].map(e=>n(e)).concat([n("/","ぶんの","unit-key"),n("back","ひとつ もどす"),n("clear","ぜんぶ けす")])},Ov={id:"money",keys:n=>[..."1234567890"].map(e=>n(e)).concat([n("えん","えん","unit-key"),n("back","ひとつ もどす"),n("clear","ぜんぶ けす")])},Mv={id:"number",keys:n=>[..."1234567890"].map(e=>n(e)).concat([n("back","ひとつ もどす"),n("clear","ぜんぶ けす")])},Lv=Object.assign({"./choice.js":Pv,"./clock.js":Nv,"./decimal.js":Dv,"./expression.js":xv,"./fraction.js":Vv,"./money.js":Ov,"./number.js":Mv}),Uv=Object.assign({}),Vs=new Map;for(const[n,e]of Object.entries({...Lv,...Uv}))if(!(!e?.id||typeof e.keys!="function")){if(Vs.has(e.id))throw new Error(`Keypad id is duplicated: ${e.id} (${n})`);Vs.set(e.id,e)}function Fv(n,e=null){if(typeof e?.keypad=="string"&&e.keypad!=="")return e.keypad;if(Array.isArray(e?.choices)&&e.choices.length>0&&typeof e?.answer=="string"&&/^[ABC]$/.test(e.answer))return"choice";const r=String(e?.kind??"");if(r==="fraction-add-same-denominator"||r==="fraction-subtract-same-denominator")return"fraction";if(typeof n?.keypad=="string"&&n.keypad!=="")return n.keypad;const i=String(n?.type??"");return i.startsWith("clock_")?"clock":i==="money_sum"?"money":i.startsWith("fraction_")?"fraction":i.startsWith("decimal_")?"decimal":"number"}function jv(n,{escapeHtml:e,inputEnabled:t,input:r="",question:i=null}){const s=Fv(n,i),a=Vs.get(s)??Vs.get("number");if(!a)return console.warn(`Keypad not found: ${s}`),"";const c=(h,p=h,_="")=>`
    <button
      class="key ${_}"
      data-action="key"
      data-value="${e(h)}"
      type="button"
    >
      ${e(p)}
    </button>
  `,u=a.keys(c,{input:r,stage:n,question:i});return`
    <div
      class="
        keypad
        keypad-${e(s)}
        ${t?"":"keypad-disabled"}
      "
    >
      ${u.join("")}
    </div>
  `}const Bv=()=>{};var pl={};const vd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,p=s>>2,_=(s&3)<<4|c>>4;let b=(c&15)<<2|h>>6,A=h&63;u||(A=64,a||(b=64)),r.push(t[p],t[_],t[b],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const _=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||h==null||_==null)throw new zv;const b=s<<2|c>>4;if(r.push(b),h!==64){const A=c<<4&240|h>>2;if(r.push(A),_!==64){const N=h<<6&192|_;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kv=function(n){const e=vd(n);return bd.encodeByteArray(e,!0)},Os=function(n){return Kv(n).replace(/\./g,"")},wd=function(n){try{return bd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const Wv=()=>Gv().__FIREBASE_DEFAULTS__,Hv=()=>{if(typeof process>"u"||typeof pl>"u")return;const n=pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wd(n[1]);return e&&JSON.parse(e)},eo=()=>{try{return Bv()||Wv()||Hv()||Qv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Td=n=>{var e,t;return(t=(e=eo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jv=n=>{const e=Td(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ed=()=>{var n;return(n=eo())===null||n===void 0?void 0:n.config},Id=n=>{var e;return(e=eo())===null||e===void 0?void 0:e[`_${n}`]};class Xv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function br(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function kd(n){return(await fetch(n,{credentials:"include"})).ok}function Yv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Os(JSON.stringify(t)),Os(JSON.stringify(a)),""].join(".")}const ci={};function Zv(){const n={prod:[],emulator:[]};for(const e of Object.keys(ci))ci[e]?n.emulator.push(e):n.prod.push(e);return n}function e0(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ml=!1;function Ad(n,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||ci[n]===e||ci[n]||ml)return;ci[n]=e;function t(b){return`__firebase__banner__${b}`}const r="__firebase__banner",s=Zv().prod.length>0;function a(){const b=document.getElementById(r);b&&b.remove()}function c(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function u(b,A){b.setAttribute("width","24"),b.setAttribute("id",A),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function h(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{ml=!0,a()},b}function p(b,A){b.setAttribute("id",A),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function _(){const b=e0(r),A=t("text"),N=document.getElementById(A)||document.createElement("span"),O=t("learnmore"),V=document.getElementById(O)||document.createElement("a"),K=t("preprendIcon"),q=document.getElementById(K)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const Q=b.element;c(Q),p(V,O);const ae=h();u(q,K),Q.append(q,N,V,ae),document.body.appendChild(Q)}s?(N.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function n0(){var n;const e=(n=eo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function r0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function s0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o0(){const n=Be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function a0(){return!n0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c0(){try{return typeof indexedDB=="object"}catch{return!1}}function l0(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}const u0="FirebaseError";class Mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=u0,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?d0(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Mt(i,c,r)}}function d0(n,e){return n.replace(h0,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h0=/\{\$([^}]+)}/g;function p0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function on(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(fl(s)&&fl(a)){if(!on(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function fl(n){return n!==null&&typeof n=="object"}function Ci(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function m0(n,e){const t=new f0(n,e);return t.subscribe.bind(t)}class f0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");g0(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Fo),i.error===void 0&&(i.error=Fo),i.complete===void 0&&(i.complete=Fo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fo(){}function ot(n){return n&&n._delegate?n._delegate:n}class Sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const In="[DEFAULT]";class _0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Xv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v0(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y0(n){return n===In?void 0:n}function v0(n){return n.instantiationMode==="EAGER"}class b0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const w0={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},T0=ne.INFO,E0={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},I0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=E0[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xa{constructor(e){this.name=e,this._logLevel=T0,this._logHandler=I0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const k0=(n,e)=>e.some(t=>n instanceof t);let gl,_l;function A0(){return gl||(gl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S0(){return _l||(_l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,aa=new WeakMap,Rd=new WeakMap,jo=new WeakMap,Va=new WeakMap;function R0(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Yt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Sd.set(t,n)}).catch(()=>{}),Va.set(e,n),e}function C0(n){if(aa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});aa.set(n,e)}let ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return aa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Rd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Yt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function $0(n){ca=n(ca)}function P0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bo(this),e,...t);return Rd.set(r,e.sort?e.sort():[e]),Yt(r)}:S0().includes(n)?function(...e){return n.apply(Bo(this),e),Yt(Sd.get(this))}:function(...e){return Yt(n.apply(Bo(this),e))}}function N0(n){return typeof n=="function"?P0(n):(n instanceof IDBTransaction&&C0(n),k0(n,A0())?new Proxy(n,ca):n)}function Yt(n){if(n instanceof IDBRequest)return R0(n);if(jo.has(n))return jo.get(n);const e=N0(n);return e!==n&&(jo.set(n,e),Va.set(e,n)),e}const Bo=n=>Va.get(n);function D0(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=Yt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Yt(a.result),u.oldVersion,u.newVersion,Yt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const x0=["get","getKey","getAll","getAllKeys","count"],V0=["put","add","delete","clear"],qo=new Map;function yl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(qo.get(e))return qo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=V0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||x0.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&u.done]))[0]};return qo.set(e,s),s}$0(n=>({...n,get:(e,t,r)=>yl(e,t)||n.get(e,t,r),has:(e,t)=>!!yl(e,t)||n.has(e,t)}));class O0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(M0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function M0(n){const e=n.getComponent();return e?.type==="VERSION"}const la="@firebase/app",vl="0.13.2";const Nt=new xa("@firebase/app"),L0="@firebase/app-compat",U0="@firebase/analytics-compat",F0="@firebase/analytics",j0="@firebase/app-check-compat",B0="@firebase/app-check",q0="@firebase/auth",z0="@firebase/auth-compat",K0="@firebase/database",G0="@firebase/data-connect",W0="@firebase/database-compat",H0="@firebase/functions",Q0="@firebase/functions-compat",J0="@firebase/installations",X0="@firebase/installations-compat",Y0="@firebase/messaging",Z0="@firebase/messaging-compat",eb="@firebase/performance",tb="@firebase/performance-compat",nb="@firebase/remote-config",rb="@firebase/remote-config-compat",ib="@firebase/storage",sb="@firebase/storage-compat",ob="@firebase/firestore",ab="@firebase/ai",cb="@firebase/firestore-compat",lb="firebase",ub="11.10.0";const ua="[DEFAULT]",db={[la]:"fire-core",[L0]:"fire-core-compat",[F0]:"fire-analytics",[U0]:"fire-analytics-compat",[B0]:"fire-app-check",[j0]:"fire-app-check-compat",[q0]:"fire-auth",[z0]:"fire-auth-compat",[K0]:"fire-rtdb",[G0]:"fire-data-connect",[W0]:"fire-rtdb-compat",[H0]:"fire-fn",[Q0]:"fire-fn-compat",[J0]:"fire-iid",[X0]:"fire-iid-compat",[Y0]:"fire-fcm",[Z0]:"fire-fcm-compat",[eb]:"fire-perf",[tb]:"fire-perf-compat",[nb]:"fire-rc",[rb]:"fire-rc-compat",[ib]:"fire-gcs",[sb]:"fire-gcs-compat",[ob]:"fire-fst",[cb]:"fire-fst-compat",[ab]:"fire-vertex","fire-js":"fire-js",[lb]:"fire-js-all"};const Ms=new Map,hb=new Map,da=new Map;function bl(n,e){try{n.container.addComponent(e)}catch(t){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dr(n){const e=n.name;if(da.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,n);for(const t of Ms.values())bl(t,n);for(const t of hb.values())bl(t,n);return!0}function Oa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rt(n){return n==null?!1:n.settings!==void 0}const pb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Ri("app","Firebase",pb);class mb{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}const wr=ub;function Cd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ua,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(t||(t=Ed()),!t)throw Zt.create("no-options");const s=Ms.get(i);if(s){if(on(t,s.options)&&on(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const a=new b0(i);for(const u of da.values())a.addComponent(u);const c=new mb(t,r,a);return Ms.set(i,c),c}function $d(n=ua){const e=Ms.get(n);if(!e&&n===ua&&Ed())return Cd();if(!e)throw Zt.create("no-app",{appName:n});return e}function en(n,e,t){var r;let i=(r=db[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(c.join(" "));return}dr(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}const fb="firebase-heartbeat-database",gb=1,gi="firebase-heartbeat-store";let zo=null;function Pd(){return zo||(zo=D0(fb,gb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zt.create("idb-open",{originalErrorMessage:n.message})})),zo}async function _b(n){try{const t=(await Pd()).transaction(gi),r=await t.objectStore(gi).get(Nd(n));return await t.done,r}catch(e){if(e instanceof Mt)Nt.warn(e.message);else{const t=Zt.create("idb-get",{originalErrorMessage:e?.message});Nt.warn(t.message)}}}async function wl(n,e){try{const r=(await Pd()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Nd(n)),await r.done}catch(t){if(t instanceof Mt)Nt.warn(t.message);else{const r=Zt.create("idb-set",{originalErrorMessage:t?.message});Nt.warn(r.message)}}}function Nd(n){return`${n.name}!${n.options.appId}`}const yb=1024,vb=30;class bb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tb(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>vb){const a=Eb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tl(),{heartbeatsToSend:r,unsentEntries:i}=wb(this._heartbeatsCache.heartbeats),s=Os(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Nt.warn(t),""}}}function Tl(){return new Date().toISOString().substring(0,10)}function wb(n,e=yb){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),El(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),El(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Tb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c0()?l0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await _b(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function El(n){return Os(JSON.stringify({version:2,heartbeats:n})).length}function Eb(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function Ib(n){dr(new Sn("platform-logger",e=>new O0(e),"PRIVATE")),dr(new Sn("heartbeat",e=>new bb(e),"PRIVATE")),en(la,vl,n),en(la,vl,"esm2017"),en("fire-js","")}Ib("");var kb="firebase",Ab="11.10.0";en(kb,Ab,"app");function Ma(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Dd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sb=Dd,xd=new Ri("auth","Firebase",Dd());const Ls=new xa("@firebase/auth");function Rb(n,...e){Ls.logLevel<=ne.WARN&&Ls.warn(`Auth (${wr}): ${n}`,...e)}function Ts(n,...e){Ls.logLevel<=ne.ERROR&&Ls.error(`Auth (${wr}): ${n}`,...e)}function Dt(n,...e){throw La(n,...e)}function ht(n,...e){return La(n,...e)}function Vd(n,e,t){const r=Object.assign(Object.assign({},Sb()),{[e]:t});return new Ri("auth","Firebase",r).create(e,{appName:n.name})}function tn(n){return Vd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function La(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xd.create(n,...e)}function H(n,e,...t){if(!n)throw La(e,...t)}function Ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ts(e),new Error(e)}function xt(n,e){n||Ct(e)}function ha(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Cb(){return Il()==="http:"||Il()==="https:"}function Il(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function $b(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cb()||i0()||"connection"in navigator)?navigator.onLine:!0}function Pb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}class $i{constructor(e,t){this.shortDelay=e,this.longDelay=t,xt(t>e,"Short delay should be less than long delay!"),this.isMobile=t0()||s0()}get(){return $b()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Ua(n,e){xt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}class Od{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Db=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xb=new $i(3e4,6e4);function to(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tr(n,e,t,r,i={}){return Md(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Ci(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return r0()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&br(n.emulatorConfig.host)&&(h.credentials="include"),Od.fetch()(await Ud(n,n.config.apiHost,t,c),h)})}async function Md(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nb),e);try{const i=new Vb(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ms(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ms(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ms(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Vd(n,p,h);Dt(n,p)}}catch(i){if(i instanceof Mt)throw i;Dt(n,"network-request-failed",{message:String(i)})}}async function Ld(n,e,t,r,i={}){const s=await Tr(n,e,t,r,i);return"mfaPendingCredential"in s&&Dt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ud(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?Ua(n.config,i):`${n.config.apiScheme}://${i}`;return Db.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class Vb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),xb.get())})}}function ms(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=ht(n,e,r);return i.customData._tokenResponse=t,i}async function Ob(n,e){return Tr(n,"POST","/v1/accounts:delete",e)}async function Us(n,e){return Tr(n,"POST","/v1/accounts:lookup",e)}function li(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mb(n,e=!1){const t=ot(n),r=await t.getIdToken(e),i=Fa(r);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:li(Ko(i.auth_time)),issuedAtTime:li(Ko(i.iat)),expirationTime:li(Ko(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ko(n){return Number(n)*1e3}function Fa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const i=wd(t);return i?JSON.parse(i):(Ts("Failed to decode base64 JWT payload"),null)}catch(i){return Ts("Caught error parsing JWT payload as JSON",i?.toString()),null}}function kl(n){const e=Fa(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function _i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Mt&&Lb(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Lb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}class Ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Fs(n){var e;const t=n.auth,r=await n.getIdToken(),i=await _i(n,Us(t,{idToken:r}));H(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fd(s.providerUserInfo):[],c=jb(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!c?.length,p=u?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new pa(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(n,_)}async function Fb(n){const e=ot(n);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jb(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fd(n){return n.map(e=>{var{providerId:t}=e,r=Ma(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function Bb(n,e){const t=await Md(n,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Ud(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&br(n.emulatorConfig.host)&&(u.credentials="include"),Od.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qb(n,e){return Tr(n,"POST","/v2/accounts:revokeToken",to(n,e))}class sr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=kl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bb(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new sr;return r&&(H(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sr,this.toJSON())}_performRefresh(){return Ct("not implemented")}}function Gt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ma(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await _i(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mb(this,e)}reload(){return Fb(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await _i(this,Ob(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,u,h,p;const _=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(c=t.tenantId)!==null&&c!==void 0?c:void 0,V=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,K=(h=t.createdAt)!==null&&h!==void 0?h:void 0,q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:Q,emailVerified:ae,isAnonymous:fe,providerData:he,stsTokenManager:k}=t;H(Q&&k,e,"internal-error");const g=sr.fromJSON(this.name,k);H(typeof Q=="string",e,"internal-error"),Gt(_,e.name),Gt(b,e.name),H(typeof ae=="boolean",e,"internal-error"),H(typeof fe=="boolean",e,"internal-error"),Gt(A,e.name),Gt(N,e.name),Gt(O,e.name),Gt(V,e.name),Gt(K,e.name),Gt(q,e.name);const v=new it({uid:Q,auth:e,email:b,emailVerified:ae,displayName:_,isAnonymous:fe,photoURL:N,phoneNumber:A,tenantId:O,stsTokenManager:g,createdAt:K,lastLoginAt:q});return he&&Array.isArray(he)&&(v.providerData=he.map(T=>Object.assign({},T))),V&&(v._redirectEventId=V),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new sr;i.updateFromServerResponse(t);const s=new it({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fs(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Fd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,c=new sr;c.updateFromIdToken(r);const u=new it({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}const Al=new Map;function $t(n){xt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(xt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}class jd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jd.type="NONE";const Sl=jd;function Es(n,e,t){return`firebase:${n}:${e}:${t}`}class or{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Es(this.userKey,i.apiKey,s),this.fullPersistenceKey=Es("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Us(this.auth,{idToken:e}).catch(()=>{});return t?it._fromGetAccountInfoResponse(this.auth,t,e):null}return it._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new or($t(Sl),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||$t(Sl);const a=Es(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){let _;if(typeof p=="string"){const b=await Us(e,{idToken:p}).catch(()=>{});if(!b)break;_=await it._fromGetAccountInfoResponse(e,b,p)}else _=it._fromJSON(e,p);h!==s&&(c=_),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new or(s,e,r):(s=u[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new or(s,e,r))}}function Rl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wd(e))return"Blackberry";if(Hd(e))return"Webos";if(qd(e))return"Safari";if((e.includes("chrome/")||zd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bd(n=Be()){return/firefox\//i.test(n)}function qd(n=Be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zd(n=Be()){return/crios\//i.test(n)}function Kd(n=Be()){return/iemobile/i.test(n)}function Gd(n=Be()){return/android/i.test(n)}function Wd(n=Be()){return/blackberry/i.test(n)}function Hd(n=Be()){return/webos/i.test(n)}function ja(n=Be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zb(n=Be()){var e;return ja(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kb(){return o0()&&document.documentMode===10}function Qd(n=Be()){return ja(n)||Gd(n)||Hd(n)||Wd(n)||/windows phone/i.test(n)||Kd(n)}function Jd(n,e=[]){let t;switch(n){case"Browser":t=Rl(Be());break;case"Worker":t=`${Rl(Be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wr}/${r}`}class Gb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const u=e(s);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}async function Wb(n,e={}){return Tr(n,"GET","/v2/passwordPolicy",to(n,e))}const Hb=6;class Qb{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Hb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}class Jb{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cl(this),this.idTokenSubscription=new Cl(this),this.beforeStateQueue=new Gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Us(this,{idToken:e}),r=await it._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(tn(this));const t=e?ot(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wb(this),t=new Qb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Rb(`Error while retrieving App Check token: ${t.error}`),t?.token}}function no(n){return ot(n)}class Cl{constructor(e){this.auth=e,this.observer=null,this.addObserver=m0(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Xb(n){Ba=n}function Yb(n){return Ba.loadJS(n)}function Zb(){return Ba.gapiScript}function ew(n){return`__${n}${Math.floor(Math.random()*1e6)}`}function tw(n,e){const t=Oa(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(on(s,e??{}))return i;Dt(i,"already-initialized")}return t.initialize({options:e})}function nw(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map($t);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function rw(n,e,t){const r=no(n);H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Xd(e),{host:a,port:c}=iw(e),u=c===null?"":`:${c}`,h={url:`${s}//${a}${u}/`},p=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){H(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),H(on(h,r.config.emulator)&&on(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,br(a)?(kd(`${s}//${a}${u}`),Ad("Auth",!0)):sw()}function Xd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function iw(n){const e=Xd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:$l(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:$l(a)}}}function $l(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}class Yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ct("not implemented")}_getIdTokenResponse(e){return Ct("not implemented")}_linkToIdToken(e,t){return Ct("not implemented")}_getReauthenticationResolver(e){return Ct("not implemented")}}async function ar(n,e){return Ld(n,"POST","/v1/accounts:signInWithIdp",to(n,e))}const ow="http://localhost";class Rn extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ma(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Rn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ar(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ar(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:ow,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}class Zd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Pi extends Zd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Wt extends Pi{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";class Ht extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ht.credential(t,r)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";class Qt extends Pi{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";class Jt extends Pi{constructor(){super("twitter.com")}static credential(e,t){return Rn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Jt.credential(t,r)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";async function aw(n,e){return Ld(n,"POST","/v1/accounts:signUp",to(n,e))}class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await it._fromIdTokenResponse(e,r,i),a=Pl(r);return new an({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Pl(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Pl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function cw(n){var e;if(rt(n.app))return Promise.reject(tn(n));const t=no(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new an({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await aw(t,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}class js extends Mt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,js.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new js(e,t,r,i)}}function eh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?js._fromErrorAndOperation(n,s,e,r):s})}async function lw(n,e,t=!1){const r=await _i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return an._forOperation(n,"link",r)}async function uw(n,e,t=!1){const{auth:r}=n;if(rt(r.app))return Promise.reject(tn(r));const i="reauthenticate";try{const s=await _i(n,eh(r,i,e,n),t);H(s.idToken,r,"internal-error");const a=Fa(s.idToken);H(a,r,"internal-error");const{sub:c}=a;return H(n.uid===c,r,"user-mismatch"),an._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Dt(r,"user-mismatch"),s}}async function dw(n,e,t=!1){if(rt(n.app))return Promise.reject(tn(n));const r="signIn",i=await eh(n,r,e),s=await an._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function hw(n,e,t,r){return ot(n).onIdTokenChanged(e,t,r)}function pw(n,e,t){return ot(n).beforeAuthStateChanged(e,t)}function mw(n,e,t,r){return ot(n).onAuthStateChanged(e,t,r)}const Bs="__sak";class th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const fw=1e3,gw=10;class nh extends th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Kb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gw):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nh.type="LOCAL";const _w=nh;class rh extends th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rh.type="SESSION";const ih=rh;function yw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}class ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ro(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async h=>h(t.origin,s)),u=await yw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ro.receivers=[];function qa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}class vw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,u)=>{const h=qa("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(_){const b=_;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(b.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}function pt(){return window}function bw(n){pt().location.href=n}function sh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function ww(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tw(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ew(){return sh()?self:null}const oh="firebaseLocalStorageDb",Iw=1,qs="firebaseLocalStorage",ah="fbase_key";class Ni{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([qs],e?"readwrite":"readonly").objectStore(qs)}function kw(){const n=indexedDB.deleteDatabase(oh);return new Ni(n).toPromise()}function ma(){const n=indexedDB.open(oh,Iw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(qs,{keyPath:ah})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(qs)?e(r):(r.close(),await kw(),e(await ma()))})})}async function Nl(n,e,t){const r=io(n,!0).put({[ah]:e,value:t});return new Ni(r).toPromise()}async function Aw(n,e){const t=io(n,!1).get(e),r=await new Ni(t).toPromise();return r===void 0?null:r.value}function Dl(n,e){const t=io(n,!0).delete(e);return new Ni(t).toPromise()}const Sw=800,Rw=3;class ch{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Rw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ro._getInstance(Ew()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ww(),!this.activeServiceWorker)return;this.sender=new vw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await Nl(e,Bs,"1"),await Dl(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Aw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=io(i,!1).getAll();return new Ni(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ch.type="LOCAL";const Cw=ch;new $i(3e4,6e4);function $w(n,e){return e?$t(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}class za extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pw(n){return dw(n.auth,new za(n),n.bypassAuthState)}function Nw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),uw(t,new za(n),n.bypassAuthState)}async function Dw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),lw(t,new za(n),n.bypassAuthState)}class lh{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pw;case"linkViaPopup":case"linkViaRedirect":return Dw;case"reauthViaPopup":case"reauthViaRedirect":return Nw;default:Dt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const xw=new $i(2e3,1e4);class ir extends lh{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ir.currentPopupAction&&ir.currentPopupAction.cancel(),ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const e=qa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xw.get())};e()}}ir.currentPopupAction=null;const Vw="pendingRedirect",Is=new Map;class Ow extends lh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const r=await Mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mw(n,e){const t=Fw(e),r=Uw(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Lw(n,e){Is.set(n._key(),e)}function Uw(n){return $t(n._redirectPersistence)}function Fw(n){return Es(Vw,n.config.apiKey,n.name)}async function jw(n,e,t=!1){if(rt(n.app))return Promise.reject(tn(n));const r=no(n),i=$w(r,e),a=await new Ow(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}const Bw=600*1e3;class qw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!uh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Bw&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function uh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function zw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uh(n);default:return!1}}async function Kw(n,e={}){return Tr(n,"GET","/v1/projects",e)}const Gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ww=/^https?/;async function Hw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Kw(n);for(const t of e)try{if(Qw(t))return}catch{}Dt(n,"unauthorized-domain")}function Qw(n){const e=ha(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Ww.test(t))return!1;if(Gw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const Jw=new $i(3e4,6e4);function Vl(){const n=pt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xw(n){return new Promise((e,t)=>{var r,i,s;function a(){Vl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vl(),t(ht(n,"network-request-failed"))},timeout:Jw.get()})}if(!((i=(r=pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pt().gapi)===null||s===void 0)&&s.load)a();else{const c=ew("iframefcb");return pt()[c]=()=>{gapi.load?a():t(ht(n,"network-request-failed"))},Yb(`${Zb()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ks=null,e})}let ks=null;function Yw(n){return ks=ks||Xw(n),ks}const Zw=new $i(5e3,15e3),e1="__/auth/iframe",t1="emulator/auth/iframe",n1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i1(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ua(e,t1):`https://${n.config.authDomain}/${e1}`,r={apiKey:e.apiKey,appName:n.name,v:wr},i=r1.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ci(r).slice(1)}`}async function s1(n){const e=await Yw(n),t=pt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:i1(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:n1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ht(n,"network-request-failed"),c=pt().setTimeout(()=>{s(a)},Zw.get());function u(){pt().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(a)})}))}const o1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},a1=500,c1=600,l1="_blank",u1="http://localhost";class Ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d1(n,e,t,r=a1,i=c1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},o1),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Be().toLowerCase();t&&(c=zd(h)?l1:t),Bd(h)&&(e=e||u1,u.scrollbars="yes");const p=Object.entries(u).reduce((b,[A,N])=>`${b}${A}=${N},`,"");if(zb(h)&&c!=="_self")return h1(e||"",c),new Ol(null);const _=window.open(e||"",c,p);H(_,n,"popup-blocked");try{_.focus()}catch{}return new Ol(_)}function h1(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}const p1="__/auth/handler",m1="emulator/auth/handler",f1=encodeURIComponent("fac");async function Ml(n,e,t,r,i,s){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:wr,eventId:i};if(e instanceof Zd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",p0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof Pi){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const u=await n._getAppCheckToken(),h=u?`#${f1}=${encodeURIComponent(u)}`:"";return`${g1(n)}?${Ci(c).slice(1)}${h}`}function g1({config:n}){return n.emulator?Ua(n,m1):`https://${n.authDomain}/${p1}`}const Go="webStorageSupport";class _1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ih,this._completeRedirectFn=jw,this._overrideRedirectResult=Lw}async _openPopup(e,t,r,i){var s;xt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Ml(e,t,r,ha(),i);return d1(e,a,qa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Ml(e,t,r,ha(),i);return bw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(xt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await s1(e),r=new qw(e);return t.register("authEvent",i=>(H(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Go,{type:Go},i=>{var s;const a=(s=i?.[0])===null||s===void 0?void 0:s[Go];a!==void 0&&t(!!a),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Hw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qd()||qd()||ja()}}const y1=_1;var Ll="@firebase/auth",Ul="1.10.8";class v1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function b1(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function w1(n){dr(new Sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jd(n)},h=new Jb(r,i,s,u);return nw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dr(new Sn("auth-internal",e=>{const t=no(e.getProvider("auth").getImmediate());return(r=>new v1(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(Ll,Ul,b1(n)),en(Ll,Ul,"esm2017")}const T1=300,E1=Id("authIdTokenMaxAge")||T1;let Fl=null;const I1=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>E1)return;const i=t?.token;Fl!==i&&(Fl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function k1(n=$d()){const e=Oa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=tw(n,{popupRedirectResolver:y1,persistence:[Cw,_w,ih]}),r=Id("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=I1(s.toString());pw(t,a,()=>a(t.currentUser)),hw(t,c=>a(c))}}const i=Td("auth");return i&&rw(t,`http://${i}`),t}function A1(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Xb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=ht("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",A1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});w1("Browser");var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var nn,dh;(function(){var n;function e(k,g){function v(){}v.prototype=g.prototype,k.D=g.prototype,k.prototype=new v,k.prototype.constructor=k,k.C=function(T,I,R){for(var y=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)y[ce-2]=arguments[ce];return g.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(k,g,v){v||(v=0);var T=Array(16);if(typeof g=="string")for(var I=0;16>I;++I)T[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=k.g[0],v=k.g[1],I=k.g[2];var R=k.g[3],y=g+(R^v&(I^R))+T[0]+3614090360&4294967295;g=v+(y<<7&4294967295|y>>>25),y=R+(I^g&(v^I))+T[1]+3905402710&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(v^R&(g^v))+T[2]+606105819&4294967295,I=R+(y<<17&4294967295|y>>>15),y=v+(g^I&(R^g))+T[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(R^v&(I^R))+T[4]+4118548399&4294967295,g=v+(y<<7&4294967295|y>>>25),y=R+(I^g&(v^I))+T[5]+1200080426&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(v^R&(g^v))+T[6]+2821735955&4294967295,I=R+(y<<17&4294967295|y>>>15),y=v+(g^I&(R^g))+T[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(R^v&(I^R))+T[8]+1770035416&4294967295,g=v+(y<<7&4294967295|y>>>25),y=R+(I^g&(v^I))+T[9]+2336552879&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(v^R&(g^v))+T[10]+4294925233&4294967295,I=R+(y<<17&4294967295|y>>>15),y=v+(g^I&(R^g))+T[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(R^v&(I^R))+T[12]+1804603682&4294967295,g=v+(y<<7&4294967295|y>>>25),y=R+(I^g&(v^I))+T[13]+4254626195&4294967295,R=g+(y<<12&4294967295|y>>>20),y=I+(v^R&(g^v))+T[14]+2792965006&4294967295,I=R+(y<<17&4294967295|y>>>15),y=v+(g^I&(R^g))+T[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=g+(I^R&(v^I))+T[1]+4129170786&4294967295,g=v+(y<<5&4294967295|y>>>27),y=R+(v^I&(g^v))+T[6]+3225465664&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(R^g))+T[11]+643717713&4294967295,I=R+(y<<14&4294967295|y>>>18),y=v+(R^g&(I^R))+T[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(v^I))+T[5]+3593408605&4294967295,g=v+(y<<5&4294967295|y>>>27),y=R+(v^I&(g^v))+T[10]+38016083&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(R^g))+T[15]+3634488961&4294967295,I=R+(y<<14&4294967295|y>>>18),y=v+(R^g&(I^R))+T[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(v^I))+T[9]+568446438&4294967295,g=v+(y<<5&4294967295|y>>>27),y=R+(v^I&(g^v))+T[14]+3275163606&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(R^g))+T[3]+4107603335&4294967295,I=R+(y<<14&4294967295|y>>>18),y=v+(R^g&(I^R))+T[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(I^R&(v^I))+T[13]+2850285829&4294967295,g=v+(y<<5&4294967295|y>>>27),y=R+(v^I&(g^v))+T[2]+4243563512&4294967295,R=g+(y<<9&4294967295|y>>>23),y=I+(g^v&(R^g))+T[7]+1735328473&4294967295,I=R+(y<<14&4294967295|y>>>18),y=v+(R^g&(I^R))+T[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=g+(v^I^R)+T[5]+4294588738&4294967295,g=v+(y<<4&4294967295|y>>>28),y=R+(g^v^I)+T[8]+2272392833&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^v)+T[11]+1839030562&4294967295,I=R+(y<<16&4294967295|y>>>16),y=v+(I^R^g)+T[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^R)+T[1]+2763975236&4294967295,g=v+(y<<4&4294967295|y>>>28),y=R+(g^v^I)+T[4]+1272893353&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^v)+T[7]+4139469664&4294967295,I=R+(y<<16&4294967295|y>>>16),y=v+(I^R^g)+T[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^R)+T[13]+681279174&4294967295,g=v+(y<<4&4294967295|y>>>28),y=R+(g^v^I)+T[0]+3936430074&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^v)+T[3]+3572445317&4294967295,I=R+(y<<16&4294967295|y>>>16),y=v+(I^R^g)+T[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(v^I^R)+T[9]+3654602809&4294967295,g=v+(y<<4&4294967295|y>>>28),y=R+(g^v^I)+T[12]+3873151461&4294967295,R=g+(y<<11&4294967295|y>>>21),y=I+(R^g^v)+T[15]+530742520&4294967295,I=R+(y<<16&4294967295|y>>>16),y=v+(I^R^g)+T[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=g+(I^(v|~R))+T[0]+4096336452&4294967295,g=v+(y<<6&4294967295|y>>>26),y=R+(v^(g|~I))+T[7]+1126891415&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~v))+T[14]+2878612391&4294967295,I=R+(y<<15&4294967295|y>>>17),y=v+(R^(I|~g))+T[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~R))+T[12]+1700485571&4294967295,g=v+(y<<6&4294967295|y>>>26),y=R+(v^(g|~I))+T[3]+2399980690&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~v))+T[10]+4293915773&4294967295,I=R+(y<<15&4294967295|y>>>17),y=v+(R^(I|~g))+T[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~R))+T[8]+1873313359&4294967295,g=v+(y<<6&4294967295|y>>>26),y=R+(v^(g|~I))+T[15]+4264355552&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~v))+T[6]+2734768916&4294967295,I=R+(y<<15&4294967295|y>>>17),y=v+(R^(I|~g))+T[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=g+(I^(v|~R))+T[4]+4149444226&4294967295,g=v+(y<<6&4294967295|y>>>26),y=R+(v^(g|~I))+T[11]+3174756917&4294967295,R=g+(y<<10&4294967295|y>>>22),y=I+(g^(R|~v))+T[2]+718787259&4294967295,I=R+(y<<15&4294967295|y>>>17),y=v+(R^(I|~g))+T[9]+3951481745&4294967295,k.g[0]=k.g[0]+g&4294967295,k.g[1]=k.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,k.g[2]=k.g[2]+I&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.u=function(k,g){g===void 0&&(g=k.length);for(var v=g-this.blockSize,T=this.B,I=this.h,R=0;R<g;){if(I==0)for(;R<=v;)i(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<g;)if(T[I++]=k.charCodeAt(R++),I==this.blockSize){i(this,T),I=0;break}}else for(;R<g;)if(T[I++]=k[R++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=g},r.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var g=1;g<k.length-8;++g)k[g]=0;var v=8*this.o;for(g=k.length-8;g<k.length;++g)k[g]=v&255,v/=256;for(this.u(k),k=Array(16),g=v=0;4>g;++g)for(var T=0;32>T;T+=8)k[v++]=this.g[g]>>>T&255;return k};function s(k,g){var v=c;return Object.prototype.hasOwnProperty.call(v,k)?v[k]:v[k]=g(k)}function a(k,g){this.h=g;for(var v=[],T=!0,I=k.length-1;0<=I;I--){var R=k[I]|0;T&&R==g||(v[I]=R,T=!1)}this.g=v}var c={};function u(k){return-128<=k&&128>k?s(k,function(g){return new a([g|0],0>g?-1:0)}):new a([k|0],0>k?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return _;if(0>k)return V(h(-k));for(var g=[],v=1,T=0;k>=v;T++)g[T]=k/v|0,v*=4294967296;return new a(g,0)}function p(k,g){if(k.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(k.charAt(0)=="-")return V(p(k.substring(1),g));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(g,8)),T=_,I=0;I<k.length;I+=8){var R=Math.min(8,k.length-I),y=parseInt(k.substring(I,I+R),g);8>R?(R=h(Math.pow(g,R)),T=T.j(R).add(h(y))):(T=T.j(v),T=T.add(h(y)))}return T}var _=u(0),b=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(O(this))return-V(this).m();for(var k=0,g=1,v=0;v<this.g.length;v++){var T=this.i(v);k+=(0<=T?T:4294967296+T)*g,g*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(O(this))return"-"+V(this).toString(k);for(var g=h(Math.pow(k,6)),v=this,T="";;){var I=ae(v,g).g;v=K(v,I.j(g));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(k);if(v=I,N(v))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(var g=0;g<k.g.length;g++)if(k.g[g]!=0)return!1;return!0}function O(k){return k.h==-1}n.l=function(k){return k=K(this,k),O(k)?-1:N(k)?0:1};function V(k){for(var g=k.g.length,v=[],T=0;T<g;T++)v[T]=~k.g[T];return new a(v,~k.h).add(b)}n.abs=function(){return O(this)?V(this):this},n.add=function(k){for(var g=Math.max(this.g.length,k.g.length),v=[],T=0,I=0;I<=g;I++){var R=T+(this.i(I)&65535)+(k.i(I)&65535),y=(R>>>16)+(this.i(I)>>>16)+(k.i(I)>>>16);T=y>>>16,R&=65535,y&=65535,v[I]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function K(k,g){return k.add(V(g))}n.j=function(k){if(N(this)||N(k))return _;if(O(this))return O(k)?V(this).j(V(k)):V(V(this).j(k));if(O(k))return V(this.j(V(k)));if(0>this.l(A)&&0>k.l(A))return h(this.m()*k.m());for(var g=this.g.length+k.g.length,v=[],T=0;T<2*g;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<k.g.length;I++){var R=this.i(T)>>>16,y=this.i(T)&65535,ce=k.i(I)>>>16,ge=k.i(I)&65535;v[2*T+2*I]+=y*ge,q(v,2*T+2*I),v[2*T+2*I+1]+=R*ge,q(v,2*T+2*I+1),v[2*T+2*I+1]+=y*ce,q(v,2*T+2*I+1),v[2*T+2*I+2]+=R*ce,q(v,2*T+2*I+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function q(k,g){for(;(k[g]&65535)!=k[g];)k[g+1]+=k[g]>>>16,k[g]&=65535,g++}function Q(k,g){this.g=k,this.h=g}function ae(k,g){if(N(g))throw Error("division by zero");if(N(k))return new Q(_,_);if(O(k))return g=ae(V(k),g),new Q(V(g.g),V(g.h));if(O(g))return g=ae(k,V(g)),new Q(V(g.g),g.h);if(30<k.g.length){if(O(k)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var v=b,T=g;0>=T.l(k);)v=fe(v),T=fe(T);var I=he(v,1),R=he(T,1);for(T=he(T,2),v=he(v,2);!N(T);){var y=R.add(T);0>=y.l(k)&&(I=I.add(v),R=y),T=he(T,1),v=he(v,1)}return g=K(k,I.j(g)),new Q(I,g)}for(I=_;0<=k.l(g);){for(v=Math.max(1,Math.floor(k.m()/g.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(v),y=R.j(g);O(y)||0<y.l(k);)v-=T,R=h(v),y=R.j(g);N(R)&&(R=b),I=I.add(R),k=K(k,y)}return new Q(I,k)}n.A=function(k){return ae(this,k).h},n.and=function(k){for(var g=Math.max(this.g.length,k.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)&k.i(T);return new a(v,this.h&k.h)},n.or=function(k){for(var g=Math.max(this.g.length,k.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)|k.i(T);return new a(v,this.h|k.h)},n.xor=function(k){for(var g=Math.max(this.g.length,k.g.length),v=[],T=0;T<g;T++)v[T]=this.i(T)^k.i(T);return new a(v,this.h^k.h)};function fe(k){for(var g=k.g.length+1,v=[],T=0;T<g;T++)v[T]=k.i(T)<<1|k.i(T-1)>>>31;return new a(v,k.h)}function he(k,g){var v=g>>5;g%=32;for(var T=k.g.length-v,I=[],R=0;R<T;R++)I[R]=0<g?k.i(R+v)>>>g|k.i(R+v+1)<<32-g:k.i(R+v);return new a(I,k.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,nn=a}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});var fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var hh,ei,ph,As,fa,mh,fh,gh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof fs=="object"&&fs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var S=o[m];if(!(S in d))break e;d=d[S]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,m=!1,S={next:function(){if(!m&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,d){return o.call.apply(o.bind,arguments)}function _(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,m),o.apply(l,S)}}return function(){return o.apply(l,arguments)}}function b(o,l,d){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:_,b.apply(null,arguments)}function A(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function N(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,S,P){for(var U=Array(arguments.length-2),de=2;de<arguments.length;de++)U[de-2]=arguments[de];return l.prototype[S].apply(m,U)}}function O(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function V(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const S=o.length||0,P=m.length||0;o.length=S+P;for(let U=0;U<P;U++)o[S+U]=m[U]}else o.push(m)}}class K{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function q(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var fe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function he(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function k(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function g(o){const l={};for(const d in o)l[d]=o[d];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)o[d]=m[d];for(let P=0;P<v.length;P++)d=v[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function R(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Tt;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ce{constructor(){this.h=this.g=null}add(l,d){const m=ge.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ge=new K(()=>new Ge,o=>o.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,fn=!1,Tt=new ce,Lt=()=>{const o=c.Promise.resolve(void 0);Se=()=>{o.then(Mn)}};var Mn=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var l=ge;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}fn=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var Ln=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o})();function gn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(fe){e:{try{ae(l.nodeName);var S=!0;break e}catch{}S=!1}S||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bo[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&gn.aa.h.call(this)}}N(gn,Ie);var bo={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Un="closure_listenable_"+(1e6*Math.random()|0),ji=0;function He(o,l,d,m,S){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=S,this.key=++ji,this.da=this.fa=!1}function Fn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jn(o){this.src=o,this.g={},this.h=0}jn.prototype.add=function(o,l,d,m,S){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var U=Bn(o,l,m,S);return-1<U?(l=o[U],d||(l.fa=!1)):(l=new He(l,this.src,P,!!m,S),l.fa=d,o.push(l)),l};function _n(o,l){var d=l.type;if(d in o.g){var m=o.g[d],S=Array.prototype.indexOf.call(m,l,void 0),P;(P=0<=S)&&Array.prototype.splice.call(m,S,1),P&&(Fn(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Bn(o,l,d,m){for(var S=0;S<o.length;++S){var P=o[S];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==m)return S}return-1}var Rr="closure_lm_"+(1e6*Math.random()|0),Cr={};function $r(o,l,d,m,S){if(Array.isArray(l)){for(var P=0;P<l.length;P++)$r(o,l[P],d,m,S);return null}return d=qi(d),o&&o[Un]?o.K(l,d,h(m)?!!m.capture:!1,S):qn(o,l,d,!1,m,S)}function qn(o,l,d,m,S,P){if(!l)throw Error("Invalid event type");var U=h(S)?!!S.capture:!!S,de=yn(o);if(de||(o[Rr]=de=new jn(o)),d=de.add(l,d,m,U,P),d.proxy)return d;if(m=zn(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Ln||(S=U),S===void 0&&(S=!1),o.addEventListener(l.toString(),m,S);else if(o.attachEvent)o.attachEvent(Pr(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function zn(){function o(d){return l.call(o.src,o.listener,d)}const l=Nr;return o}function Bi(o,l,d,m,S){if(Array.isArray(l))for(var P=0;P<l.length;P++)Bi(o,l[P],d,m,S);else m=h(m)?!!m.capture:!!m,d=qi(d),o&&o[Un]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=Bn(P,d,m,S),-1<d&&(Fn(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=yn(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Bn(l,d,m,S)),(d=-1<o?l[o]:null)&&Et(d))}function Et(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Un])_n(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Pr(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=yn(l))?(_n(d,o),d.h==0&&(d.src=null,l[Rr]=null)):Fn(o)}}}function Pr(o){return o in Cr?Cr[o]:Cr[o]="on"+o}function Nr(o,l){if(o.da)o=!0;else{l=new gn(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Et(o),o=d.call(m,l)}return o}function yn(o){return o=o[Rr],o instanceof jn?o:null}var Dr="__closure_events_fn_"+(1e9*Math.random()>>>0);function qi(o){return typeof o=="function"?o:(o[Dr]||(o[Dr]=function(l){return o.handleEvent(l)}),o[Dr])}function Re(){qe.call(this),this.i=new jn(this),this.M=this,this.F=null}N(Re,qe),Re.prototype[Un]=!0,Re.prototype.removeEventListener=function(o,l,d,m){Bi(this,o,l,d,m)};function Ne(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var S=l;l=new Ie(m,o),T(l,S)}if(S=!0,d)for(var P=d.length-1;0<=P;P--){var U=l.g=d[P];S=Kn(U,m,!0,l)&&S}if(U=l.g=o,S=Kn(U,m,!0,l)&&S,S=Kn(U,m,!1,l)&&S,d)for(P=0;P<d.length;P++)U=l.g=d[P],S=Kn(U,m,!1,l)&&S}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)Fn(d[m]);delete o.g[l],o.h--}}this.F=null},Re.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Re.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function Kn(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var S=!0,P=0;P<l.length;++P){var U=l[P];if(U&&!U.da&&U.capture==d){var de=U.listener,De=U.ha||U.src;U.fa&&_n(o.i,U),S=de.call(De,m)!==!1&&S}}return S&&!m.defaultPrevented}function vn(o,l,d){if(typeof o=="function")d&&(o=b(o,d));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function zi(o){o.g=vn(()=>{o.g=null,o.i&&(o.i=!1,zi(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class j extends qe{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:zi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bn(o){qe.call(this),this.h=o,this.g={}}N(bn,qe);var Ki=[];function Gi(o){he(o.g,function(l,d){this.g.hasOwnProperty(d)&&Et(l)},o),o.g={}}bn.prototype.N=function(){bn.aa.N.call(this),Gi(this)},bn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xr=c.JSON.stringify,wo=c.JSON.parse,To=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Vr(){}Vr.prototype.h=null;function Wi(o){return o.h||(o.h=o.i())}function Hi(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Or(){Ie.call(this,"d")}N(Or,Ie);function Mr(){Ie.call(this,"c")}N(Mr,Ie);var ct={},Lr=null;function Gn(){return Lr=Lr||new Re}ct.La="serverreachability";function Qi(o){Ie.call(this,ct.La,o)}N(Qi,Ie);function It(o){const l=Gn();Ne(l,new Qi(l))}ct.STAT_EVENT="statevent";function Ji(o,l){Ie.call(this,ct.STAT_EVENT,o),this.stat=l}N(Ji,Ie);function Ce(o){const l=Gn();Ne(l,new Ji(l,o))}ct.Ma="timingevent";function Wn(o,l){Ie.call(this,ct.Ma,o),this.size=l}N(Wn,Ie);function kt(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Ut(){this.g=!0}Ut.prototype.xa=function(){this.g=!1};function Xi(o,l,d,m,S,P){o.info(function(){if(o.g)if(P)for(var U="",de=P.split("&"),De=0;De<de.length;De++){var oe=de[De].split("=");if(1<oe.length){var Me=oe[0];oe=oe[1];var Le=Me.split("_");U=2<=Le.length&&Le[1]=="type"?U+(Me+"="+oe+"&"):U+(Me+"=redacted&")}}else U=null;else U=P;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+l+`
`+d+`
`+U})}function Ur(o,l,d,m,S,P,U){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+l+`
`+d+`
`+P+" "+U})}function Ft(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Eo(o,d)+(m?" "+m:"")})}function Fr(o,l){o.info(function(){return"TIMEOUT: "+l})}Ut.prototype.info=function(){};function Eo(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var S=m[1];if(Array.isArray(S)&&!(1>S.length)){var P=S[0];if(P!="noop"&&P!="stop"&&P!="close")for(var U=1;U<S.length;U++)S[U]=""}}}}return xr(d)}catch{return l}}var Hn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},jr;function G(){}N(G,Vr),G.prototype.g=function(){return new XMLHttpRequest},G.prototype.i=function(){return{}},jr=new G;function lt(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new bn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zi}function Zi(){this.i=null,this.g="",this.h=!1}var es={},Br={};function qr(o,l,d){o.L=1,o.v=ss(St(l)),o.m=d,o.P=!0,ts(o,null)}function ts(o,l){o.F=Date.now(),Qe(o),o.A=St(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Pc(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Zi,o.g=Qc(o.j,d?l:null,!o.m),0<o.O&&(o.M=new j(b(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Ki[0]=S.toString()),S=Ki);for(var P=0;P<S.length;P++){var U=$r(d,S[P],m||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),It(),Xi(o.i,o.u,o.A,o.l,o.R,o.m)}lt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Rt(o)==3?l.j():this.Y(o)},lt.prototype.Y=function(o){try{if(o==this.g)e:{const Le=Rt(this.g);var l=this.g.Ba();const Xn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Lc(this.g)))){this.J||Le!=4||l==7||(l==8||0>=Xn?It(3):It(2)),E(this);var d=this.g.Z();this.X=d;t:if(ns(this)){var m=Lc(this.g);o="";var S=m.length,P=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){C(this),$(this);var U="";break t}this.h.i=new c.TextDecoder}for(l=0;l<S;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(P&&l==S-1)});m.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Ur(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,De=this.g;if((de=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(de)){var oe=de;break t}}oe=null}if(d=oe)Ft(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,M(this,d);else{this.o=!1,this.s=3,Ce(12),C(this),$(this);break e}}if(this.P){d=!0;let nt;for(;!this.J&&this.C<U.length;)if(nt=Io(this,U),nt==Br){Le==4&&(this.s=4,Ce(14),d=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==es){this.s=4,Ce(15),Ft(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Ft(this.i,this.l,nt,null),M(this,nt);if(ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||U.length!=0||this.h.h||(this.s=1,Ce(16),d=!1),this.o=this.o&&d,!d)Ft(this.i,this.l,U,"[Invalid Chunked Response]"),C(this),$(this);else if(0<U.length&&!this.W){this.W=!0;var Me=this.j;Me.g==this&&Me.ba&&!Me.M&&(Me.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),$o(Me),Me.M=!0,Ce(11))}}else Ft(this.i,this.l,U,null),M(this,U);Le==4&&C(this),this.o&&!this.J&&(Le==4?Kc(this.j,this):(this.o=!1,Qe(this)))}else rm(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),C(this),$(this)}}}catch{}};function ns(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Io(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?Br:(d=Number(l.substring(d,m)),isNaN(d)?es:(m+=1,m+d>l.length?Br:(l=l.slice(m,m+d),o.C=m+d,l)))}lt.prototype.cancel=function(){this.J=!0,C(this)};function Qe(o){o.S=Date.now()+o.I,w(o,o.I)}function w(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=kt(b(o.ba,o),l)}function E(o){o.B&&(c.clearTimeout(o.B),o.B=null)}lt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fr(this.i,this.A),this.L!=2&&(It(),Ce(17)),C(this),this.s=2,$(this)):w(this,this.S-o)};function $(o){o.j.G==0||o.J||Kc(o.j,o)}function C(o){E(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Gi(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function M(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||se(d.h,o))){if(!o.K&&se(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ds(d),ls(d);else break e;Co(d),Ce(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=kt(b(d.Za,d),6e3));if(1>=le(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Tn(d,11)}else if((o.K||d.g==o)&&ds(d),!q(l))for(S=d.Da.g.parse(l),l=0;l<S.length;l++){let oe=S[l];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Me=oe[3];Me!=null&&(d.la=Me,d.j.info("VER="+d.la));const Le=oe[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Xn=oe[5];Xn!=null&&typeof Xn=="number"&&0<Xn&&(m=1.5*Xn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const nt=o.g;if(nt){const ps=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var P=m.h;P.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(jt(P,P.h),P.h=null))}if(m.D){const Po=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Po&&(m.ya=Po,pe(m.I,m.D,Po))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=o;if(m.qa=Hc(m,m.J?m.ia:null,m.W),U.K){zr(m.h,U);var de=U,De=m.L;De&&(de.I=De),de.B&&(E(de),Qe(de)),m.g=U}else qc(m);0<d.i.length&&us(d)}else oe[0]!="stop"&&oe[0]!="close"||Tn(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Tn(d,7):Ro(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}It(4)}catch{}}var L=class{constructor(o,l){this.g=o,this.map=l}};function ee(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function te(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function le(o){return o.h?1:o.g?o.g.size:0}function se(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function jt(o,l){o.g?o.g.add(l):o.h=l}function zr(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ee.prototype.cancel=function(){if(this.i=Kr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Kr(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return O(o.i)}function ko(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function Bt(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function qt(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Bt(o),m=ko(o),S=m.length,P=0;P<S;P++)l.call(void 0,m[P],d&&d[P],o)}var Ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function At(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),S=null;if(0<=m){var P=o[d].substring(0,m);S=o[d].substring(m+1)}else P=o[d];l(P,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof be){this.h=o.h,rs(this,o.j),this.o=o.o,this.g=o.g,is(this,o.s),this.l=o.l;var l=o.i,d=new Hr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Sc(this,d),this.m=o.m}else o&&(l=String(o).match(Ao))?(this.h=!1,rs(this,l[1]||"",!0),this.o=Gr(l[2]||""),this.g=Gr(l[3]||"",!0),is(this,l[4]),this.l=Gr(l[5]||"",!0),Sc(this,l[6]||"",!0),this.m=Gr(l[7]||"")):(this.h=!1,this.i=new Hr(null,this.h))}be.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Wr(l,Rc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Wr(l,Rc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Wr(d,d.charAt(0)=="/"?Wp:Gp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Wr(d,Qp)),o.join("")};function St(o){return new be(o)}function rs(o,l,d){o.j=d?Gr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function is(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Sc(o,l,d){l instanceof Hr?(o.i=l,Jp(o.i,o.h)):(d||(l=Wr(l,Hp)),o.i=new Hr(l,o.h))}function pe(o,l,d){o.i.set(l,d)}function ss(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Wr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Kp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Rc=/[#\/\?@]/g,Gp=/[#\?:]/g,Wp=/[#\?]/g,Hp=/[#\?@]/g,Qp=/#/g;function Hr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function zt(o){o.g||(o.g=new Map,o.h=0,o.i&&At(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Hr.prototype,n.add=function(o,l){zt(this),this.i=null,o=Qn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Cc(o,l){zt(o),l=Qn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function $c(o,l){return zt(o),l=Qn(o,l),o.g.has(l)}n.forEach=function(o,l){zt(this),this.g.forEach(function(d,m){d.forEach(function(S){o.call(l,S,m,this)},this)},this)},n.na=function(){zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const S=o[m];for(let P=0;P<S.length;P++)d.push(l[m])}return d},n.V=function(o){zt(this);let l=[];if(typeof o=="string")$c(this,o)&&(l=l.concat(this.g.get(Qn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return zt(this),this.i=null,o=Qn(this,o),$c(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Pc(o,l,d){Cc(o,l),0<d.length&&(o.i=null,o.g.set(Qn(o,l),O(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const P=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var S=P;U[m]!==""&&(S+="="+encodeURIComponent(String(U[m]))),o.push(S)}}return this.i=o.join("&")};function Qn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Jp(o,l){l&&!o.j&&(zt(o),o.i=null,o.g.forEach(function(d,m){var S=m.toLowerCase();m!=S&&(Cc(this,m),Pc(this,S,d))},o)),o.j=l}function Xp(o,l){const d=new Ut;if(c.Image){const m=new Image;m.onload=A(Kt,d,"TestLoadImage: loaded",!0,l,m),m.onerror=A(Kt,d,"TestLoadImage: error",!1,l,m),m.onabort=A(Kt,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=A(Kt,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Yp(o,l){const d=new Ut,m=new AbortController,S=setTimeout(()=>{m.abort(),Kt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(S),P.ok?Kt(d,"TestPingServer: ok",!0,l):Kt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Kt(d,"TestPingServer: error",!1,l)})}function Kt(o,l,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function Zp(){this.g=new To}function em(o,l,d){const m=d||"";try{qt(o,function(S,P){let U=S;h(S)&&(U=xr(S)),l.push(m+P+"="+encodeURIComponent(U))})}catch(S){throw l.push(m+"type="+encodeURIComponent("_badmap")),S}}function os(o){this.l=o.Ub||null,this.j=o.eb||!1}N(os,Vr),os.prototype.g=function(){return new as(this.l,this.j)},os.prototype.i=(function(o){return function(){return o}})({});function as(o,l){Re.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(as,Re),n=as.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Jr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Qr(this):Jr(this),this.readyState==3&&Nc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Qr(this))},n.Qa=function(o){this.g&&(this.response=o,Qr(this))},n.ga=function(){this.g&&Qr(this)};function Qr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Jr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Dc(o){let l="";return he(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function So(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Dc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):pe(o,l,d))}function ve(o){Re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ve,Re);var tm=/^https?$/i,nm=["POST","PUT"];n=ve.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():jr.g(),this.v=this.o?Wi(this.o):Wi(jr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){xc(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(nm,l,void 0))||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,U]of d)this.g.setRequestHeader(P,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){xc(this,P)}};function xc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Vc(o),cs(o)}function Vc(o){o.A||(o.A=!0,Ne(o,"complete"),Ne(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ne(this,"complete"),Ne(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Oc(this):this.bb())},n.bb=function(){Oc(this)};function Oc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Rt(o)!=4||o.Z()!=2)){if(o.u&&Rt(o)==4)vn(o.Ea,0,o);else if(Ne(o,"readystatechange"),Rt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=U===0){var S=String(o.D).match(Ao)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),m=!tm.test(S?S.toLowerCase():"")}d=m}if(d)Ne(o,"complete"),Ne(o,"success");else{o.m=6;try{var P=2<Rt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Vc(o)}}finally{cs(o)}}}}function cs(o,l){if(o.g){Mc(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ne(o,"ready");try{d.onreadystatechange=m}catch{}}}function Mc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),wo(l)}};function Lc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function rm(o){const l={};o=(o.g&&2<=Rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(q(o[m]))continue;var d=I(o[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[S]||[];l[S]=P,P.push(d)}k(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Uc(o){this.Aa=0,this.i=[],this.j=new Ut,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,o),this.cb=Xr("retryDelaySeedMs",1e4,o),this.Wa=Xr("forwardChannelMaxRetries",2,o),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ee(o&&o.concurrentRequestLimit),this.Da=new Zp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Uc.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,m){Ce(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Hc(this,null,this.W),us(this)};function Ro(o){if(Fc(o),o.G==3){var l=o.U++,d=St(o.I);if(pe(d,"SID",o.K),pe(d,"RID",l),pe(d,"TYPE","terminate"),Yr(o,d),l=new lt(o,o.j,l),l.L=2,l.v=ss(St(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Qc(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qe(l)}Wc(o)}function ls(o){o.g&&($o(o),o.g.cancel(),o.g=null)}function Fc(o){ls(o),o.u&&(c.clearTimeout(o.u),o.u=null),ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function us(o){if(!te(o.h)&&!o.s){o.s=!0;var l=o.Ga;Se||Lt(),fn||(Se(),fn=!0),Tt.add(l,o),o.B=0}}function im(o,l){return le(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=kt(b(o.Ga,o,l),Gc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new lt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=g(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(S.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Bc(this,S,l),d=St(this.I),pe(d,"RID",o),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Yr(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(Dc(P)))+"&"+l:this.m&&So(d,this.m,P)),jt(this.h,S),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",l),pe(d,"SID","null"),S.T=!0,qr(S,d,null)):qr(S,d,l),this.G=2}}else this.G==3&&(o?jc(this,o):this.i.length==0||te(this.h)||jc(this))};function jc(o,l){var d;l?d=l.l:d=o.U++;const m=St(o.I);pe(m,"SID",o.K),pe(m,"RID",d),pe(m,"AID",o.T),Yr(o,m),o.m&&o.o&&So(m,o.m,o.o),d=new lt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Bc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),jt(o.h,d),qr(d,m,l)}function Yr(o,l){o.H&&he(o.H,function(d,m){pe(l,m,d)}),o.l&&qt({},function(d,m){pe(l,m,d)})}function Bc(o,l,d){d=Math.min(o.i.length,d);var m=o.l?b(o.l.Na,o.l,o):null;e:{var S=o.i;let P=-1;for(;;){const U=["count="+d];P==-1?0<d?(P=S[0].g,U.push("ofs="+P)):P=0:U.push("ofs="+P);let de=!0;for(let De=0;De<d;De++){let oe=S[De].g;const Me=S[De].map;if(oe-=P,0>oe)P=Math.max(0,S[De].g-100),de=!1;else try{em(Me,U,"req"+oe+"_")}catch{m&&m(Me)}}if(de){m=U.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function qc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Se||Lt(),fn||(Se(),fn=!0),Tt.add(l,o),o.v=0}}function Co(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=kt(b(o.Fa,o),Gc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=kt(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),ls(this),zc(this))};function $o(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function zc(o){o.g=new lt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=St(o.qa);pe(l,"RID","rpc"),pe(l,"SID",o.K),pe(l,"AID",o.T),pe(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(l,"TO",o.ja),pe(l,"TYPE","xmlhttp"),Yr(o,l),o.m&&o.o&&So(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ss(St(l)),d.m=null,d.P=!0,ts(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ls(this),Co(this),Ce(19))};function ds(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Kc(o,l){var d=null;if(o.g==l){ds(o),$o(o),o.g=null;var m=2}else if(se(o.h,l))d=l.D,zr(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var S=o.B;m=Gn(),Ne(m,new Wn(m,d)),us(o)}else qc(o);else if(S=l.s,S==3||S==0&&0<l.X||!(m==1&&im(o,l)||m==2&&Co(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),S){case 1:Tn(o,5);break;case 4:Tn(o,10);break;case 3:Tn(o,6);break;default:Tn(o,2)}}}function Gc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Tn(o,l){if(o.j.info("Error code "+l),l==2){var d=b(o.fb,o),m=o.Xa;const S=!m;m=new be(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||rs(m,"https"),ss(m),S?Xp(m.toString(),d):Yp(m.toString(),d)}else Ce(2);o.G=0,o.l&&o.l.sa(l),Wc(o),Fc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function Wc(o){if(o.G=0,o.ka=[],o.l){const l=Kr(o.h);(l.length!=0||o.i.length!=0)&&(V(o.ka,l),V(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Hc(o,l,d){var m=d instanceof be?St(d):new be(d);if(m.g!="")l&&(m.g=l+"."+m.g),is(m,m.s);else{var S=c.location;m=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;var P=new be(null);m&&rs(P,m),l&&(P.g=l),S&&is(P,S),d&&(P.l=d),m=P}return d=o.D,l=o.ya,d&&l&&pe(m,d,l),pe(m,"VER",o.la),Yr(o,m),m}function Qc(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ve(new os({eb:d})):new ve(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jc(){}n=Jc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hs(){}hs.prototype.g=function(o,l){return new We(o,l)};function We(o,l){Re.call(this),this.g=new Uc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!q(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!q(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Jn(this)}N(We,Re),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Ro(this.g)},We.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=xr(o),o=d);l.i.push(new L(l.Ya++,o)),l.G==3&&us(l)},We.prototype.N=function(){this.g.l=null,delete this.j,Ro(this.g),delete this.g,We.aa.N.call(this)};function Xc(o){Or.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Xc,Or);function Yc(){Mr.call(this),this.status=1}N(Yc,Mr);function Jn(o){this.g=o}N(Jn,Jc),Jn.prototype.ua=function(){Ne(this.g,"a")},Jn.prototype.ta=function(o){Ne(this.g,new Xc(o))},Jn.prototype.sa=function(o){Ne(this.g,new Yc)},Jn.prototype.ra=function(){Ne(this.g,"b")},hs.prototype.createWebChannel=hs.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,gh=function(){return new hs},fh=function(){return Gn()},mh=ct,fa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hn.NO_ERROR=0,Hn.TIMEOUT=8,Hn.HTTP_ERROR=6,As=Hn,Yi.COMPLETE="complete",ph=Yi,Hi.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",Re.prototype.listen=Re.prototype.K,ei=Hi,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,hh=ve}).apply(typeof fs<"u"?fs:typeof self<"u"?self:typeof window<"u"?window:{});const Bl="@firebase/firestore",ql="4.8.0";class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");let Er="11.10.0";const Cn=new xa("@firebase/firestore");function er(){return Cn.logLevel}function F(n,...e){if(Cn.logLevel<=ne.DEBUG){const t=e.map(Ka);Cn.debug(`Firestore (${Er}): ${n}`,...t)}}function Vt(n,...e){if(Cn.logLevel<=ne.ERROR){const t=e.map(Ka);Cn.error(`Firestore (${Er}): ${n}`,...t)}}function cn(n,...e){if(Cn.logLevel<=ne.WARN){const t=e.map(Ka);Cn.warn(`Firestore (${Er}): ${n}`,...t)}}function Ka(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}function W(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,_h(n,r,t)}function _h(n,e,t){let r=`FIRESTORE (${Er}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Vt(r),new Error(r)}function ue(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||_h(e,i,r)}function X(n,e){return n}const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class rn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}class yh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class R1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class C1{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ue(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new rn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new rn,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new rn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string",31837,{l:r}),new yh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class $1{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class P1{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $1(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class zl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N1{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ue(this.o===void 0,3512);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new zl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ue(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new zl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function D1(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}function vh(){return new TextEncoder}class Ga{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=D1(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Z(n,e){return n<e?-1:n>e?1:0}function ga(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=vh(),a=x1(s.encode(Kl(n,t)),s.encode(Kl(e,t)));return a!==0?a:Z(r,i)}}t+=r>65535?2:1}return Z(n.length,e.length)}function Kl(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function x1(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Z(n[t],e[t]);return Z(n.length,e.length)}function hr(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}const Gl="__name__";class dt{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&W(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=dt.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Z(e.length,t.length)}static compareSegments(e,t){const r=dt.isNumericId(e),i=dt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?dt.extractNumericId(e).compare(dt.extractNumericId(t)):ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nn.fromString(e.substring(4,e.length-2))}}class _e extends dt{construct(e,t,r){return new _e(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new _e(t)}static emptyPath(){return new _e([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends dt{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gl}static keyField(){return new Ve([Gl])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(s(),i++)}if(s(),a)throw new B(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}class z{constructor(e){this.path=e}static fromPath(e){return new z(_e.fromString(e))}static fromName(e){return new z(_e.fromString(e).popFirst(5))}static empty(){return new z(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new _e(e.slice()))}}function O1(n,e,t){if(!t)throw new B(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function M1(n,e,t,r){if(e===!0&&r===!0)throw new B(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wl(n){if(!z.isDocumentKey(n))throw new B(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Wa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W(12329,{type:typeof n})}function pr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wa(n);throw new B(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function Di(n,e){if(!bh(n))throw new B(x.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new B(x.INVALID_ARGUMENT,t);return!0}const Hl=-62135596800,Ql=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ql);return new me(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ql}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Di(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:Ee("string",me._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new me(0,0))}static max(){return new J(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const yi=-1;function L1(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new me(t+1,0):new me(t,r));return new ln(i,z.empty(),e)}function U1(n){return new ln(n.readTime,n.key,yi)}class ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ln(J.min(),z.empty(),yi)}static max(){return new ln(J.max(),z.empty(),yi)}}function F1(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}const j1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class B1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}async function Ir(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==j1)throw n;F("LocalStore","Unexpectedly lost primary lease")}class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let i=0,s=0,a=!1;e.forEach((c=>{++i,c.next((()=>{++s,a&&s===i&&t()}),(u=>r(u)))})),a=!0,s===i&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((i=>i?D.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,i)=>{const s=e.length,a=new Array(s);let c=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((p=>{a[h]=p,++c,c===s&&r(a)}),(p=>i(p)))}}))}static doWhile(e,t){return new D(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function q1(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function kr(n){return n.name==="IndexedDbTransactionError"}class so{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}so.ue=-1;const Ha=-1;function oo(n){return n==null}function zs(n){return n===0&&1/n==-1/0}function z1(n){return typeof n=="number"&&Number.isInteger(n)&&!zs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}const wh="";function K1(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jl(e)),e=G1(n.get(t),e);return Jl(e)}function G1(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case wh:t+="";break;default:t+=s}}return t}function Jl(n){return n+wh+""}function Xl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Nn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}class ye{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ye(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gs(this.root,e,this.comparator,!0)}}class gs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??xe.RED,this.left=i??xe.EMPTY,this.right=s??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new xe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class Ae{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yl(this.data.getIterator())}getIteratorFrom(e){return new Yl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Yl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class st{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new st([])}unionWith(e){let t=new Ae(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new st(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}class Eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Eh("Invalid base64 string: "+s):s}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const W1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function un(n){if(ue(!!n,39018),typeof n=="string"){let e=0;const t=W1.exec(n);if(ue(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(n.seconds),nanos:we(n.nanos)}}function we(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function dn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}const Ih="server_timestamp",kh="__type__",Ah="__previous_value__",Sh="__local_write_time__";function Qa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[kh])===null||t===void 0?void 0:t.stringValue)===Ih}function ao(n){const e=n.mapValue.fields[Ah];return Qa(e)?ao(e):e}function vi(n){const e=un(n.mapValue.fields[Sh].timestampValue);return new me(e.seconds,e.nanos)}class H1{constructor(e,t,r,i,s,a,c,u,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Ks="(default)";class bi{constructor(e,t){this.projectId=e,this.database=t||Ks}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database===Ks}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}const Rh="__type__",Q1="__max__",_s={mapValue:{}},Ch="__vector__",Gs="value";function hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qa(n)?4:X1(n)?9007199254740991:J1(n)?10:11:W(28295,{value:n})}function bt(n,e){if(n===e)return!0;const t=hn(n);if(t!==hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vi(n).isEqual(vi(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=un(i.timestampValue),c=un(s.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return dn(i.bytesValue).isEqual(dn(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=we(i.doubleValue),c=we(s.doubleValue);return a===c?zs(a)===zs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return hr(n.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Xl(a)!==Xl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!bt(a[u],c[u])))return!1;return!0})(n,e);default:return W(52216,{left:n})}}function wi(n,e){return(n.values||[]).find((t=>bt(t,e)))!==void 0}function mr(n,e){if(n===e)return 0;const t=hn(n),r=hn(e);if(t!==r)return Z(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const c=we(s.integerValue||s.doubleValue),u=we(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Zl(n.timestampValue,e.timestampValue);case 4:return Zl(vi(n),vi(e));case 5:return ga(n.stringValue,e.stringValue);case 6:return(function(s,a){const c=dn(s),u=dn(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const c=s.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const p=Z(c[h],u[h]);if(p!==0)return p}return Z(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const c=Z(we(s.latitude),we(a.latitude));return c!==0?c:Z(we(s.longitude),we(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return eu(n.arrayValue,e.arrayValue);case 10:return(function(s,a){var c,u,h,p;const _=s.fields||{},b=a.fields||{},A=(c=_[Gs])===null||c===void 0?void 0:c.arrayValue,N=(u=b[Gs])===null||u===void 0?void 0:u.arrayValue,O=Z(((h=A?.values)===null||h===void 0?void 0:h.length)||0,((p=N?.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:eu(A,N)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===_s.mapValue&&a===_s.mapValue)return 0;if(s===_s.mapValue)return 1;if(a===_s.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let _=0;_<u.length&&_<p.length;++_){const b=ga(u[_],p[_]);if(b!==0)return b;const A=mr(c[u[_]],h[p[_]]);if(A!==0)return A}return Z(u.length,p.length)})(n.mapValue,e.mapValue);default:throw W(23264,{le:t})}}function Zl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=un(n),r=un(e),i=Z(t.seconds,r.seconds);return i!==0?i:Z(t.nanos,r.nanos)}function eu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=mr(t[i],r[i]);if(s)return s}return Z(t.length,r.length)}function fr(n){return _a(n)}function _a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=un(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return dn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=_a(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${_a(t.fields[a])}`;return i+"}"})(n.mapValue):W(61005,{value:n})}function Ss(n){switch(hn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ao(n);return e?16+Ss(e):16;case 5:return 2*n.stringValue.length;case 6:return dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Ss(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Nn(r.fields,((s,a)=>{i+=s.length+Ss(a)})),i})(n.mapValue);default:throw W(13486,{value:n})}}function ya(n){return!!n&&"integerValue"in n}function Ja(n){return!!n&&"arrayValue"in n}function tu(n){return!!n&&"nullValue"in n}function nu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rs(n){return!!n&&"mapValue"in n}function J1(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rh])===null||t===void 0?void 0:t.stringValue)===Ch}function ui(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Nn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ui(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return Object.assign({},n)}function X1(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Q1}class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=Ve.emptyPath(),r={},i=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=c.popLast()}a?r[c.lastSegment()]=ui(a):i.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Rs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Nn(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new Ze(ui(this.value))}}function $h(n){const e=[];return Nn(n.fields,((t,r)=>{const i=new Ve([t]);if(Rs(r)){const s=$h(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)})),new st(e)}class je{constructor(e,t,r,i,s,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=c}static newInvalidDocument(e){return new je(e,0,J.min(),J.min(),J.min(),Ze.empty(),0)}static newFoundDocument(e,t,r,i){return new je(e,1,t,J.min(),r,i,0)}static newNoDocument(e,t){return new je(e,2,t,J.min(),J.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,J.min(),J.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Ws{constructor(e,t){this.position=e,this.inclusive=t}}function ru(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=mr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function iu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!bt(n.position[t],e.position[t]))return!1;return!0}class Hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Y1(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}class Ph{}class ke extends Ph{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new eT(e,t,r):t==="array-contains"?new rT(e,r):t==="in"?new iT(e,r):t==="not-in"?new sT(e,r):t==="array-contains-any"?new oT(e,r):new ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new tT(e,r):new nT(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mr(t,this.value)):t!==null&&hn(this.value)===hn(t)&&this.matchesComparison(mr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class wt extends Ph{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new wt(e,t)}matches(e){return Nh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Nh(n){return n.op==="and"}function Dh(n){return Z1(n)&&Nh(n)}function Z1(n){for(const e of n.filters)if(e instanceof wt)return!1;return!0}function va(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+fr(n.value);if(Dh(n))return n.filters.map((e=>va(e))).join(",");{const e=n.filters.map((t=>va(t))).join(",");return`${n.op}(${e})`}}function xh(n,e){return n instanceof ke?(function(r,i){return i instanceof ke&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)})(n,e):n instanceof wt?(function(r,i){return i instanceof wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,c)=>s&&xh(a,i.filters[c])),!0):!1})(n,e):void W(19439)}function Vh(n){return n instanceof ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`})(n):n instanceof wt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vh).join(" ,")+"}"})(n):"Filter"}class eT extends ke{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class tT extends ke{constructor(e,t){super(e,"in",t),this.keys=Oh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class nT extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Oh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Oh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>z.fromName(r.referenceValue)))}class rT extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ja(t)&&wi(t.arrayValue,this.value)}}class iT extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wi(this.value.arrayValue,t)}}class sT extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wi(this.value.arrayValue,t)}}class oT extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ja(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>wi(this.value.arrayValue,r)))}}class aT{constructor(e,t=null,r=[],i=[],s=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=c,this.Pe=null}}function su(n,e=null,t=[],r=[],i=null,s=null,a=null){return new aT(n,e,t,r,i,s,a)}function Xa(n){const e=X(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>va(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>fr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>fr(r))).join(",")),e.Pe=t}return e.Pe}function Ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Y1(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!iu(n.startAt,e.startAt)&&iu(n.endAt,e.endAt)}function ba(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class co{constructor(e,t=null,r=[],i=[],s=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function cT(n,e,t,r,i,s,a,c){return new co(n,e,t,r,i,s,a,c)}function Za(n){return new co(n)}function ou(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lT(n){return n.collectionGroup!==null}function di(n){const e=X(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Ae(Ve.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Hs(s,r))})),t.has(Ve.keyField().canonicalString())||e.Te.push(new Hs(Ve.keyField(),r))}return e.Te}function mt(n){const e=X(n);return e.Ie||(e.Ie=uT(e,di(n))),e.Ie}function uT(n,e){if(n.limitType==="F")return su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Hs(i.field,s)}));const t=n.endAt?new Ws(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ws(n.startAt.position,n.startAt.inclusive):null;return su(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wa(n,e,t){return new co(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function lo(n,e){return Ya(mt(n),mt(e))&&n.limitType===e.limitType}function Mh(n){return`${Xa(mt(n))}|lt:${n.limitType}`}function tr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Vh(i))).join(", ")}]`),oo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>fr(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>fr(i))).join(",")),`Target(${r})`})(mt(n))}; limitType=${n.limitType})`}function uo(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of di(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,c,u){const h=ru(a,c,u);return a.inclusive?h<=0:h<0})(r.startAt,di(r),i)||r.endAt&&!(function(a,c,u){const h=ru(a,c,u);return a.inclusive?h>=0:h>0})(r.endAt,di(r),i))})(n,e)}function dT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lh(n){return(e,t)=>{let r=!1;for(const i of di(n)){const s=hT(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function hT(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):(function(s,a,c){const u=a.data.field(s),h=c.data.field(s);return u!==null&&h!==null?mr(u,h):W(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:n.dir})}}class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Nn(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return Th(this.inner)}size(){return this.innerSize}}const pT=new ye(z.comparator);function Ot(){return pT}const Uh=new ye(z.comparator);function ti(...n){let e=Uh;for(const t of n)e=e.insert(t.key,t);return e}function Fh(n){let e=Uh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function kn(){return hi()}function jh(){return hi()}function hi(){return new Dn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const mT=new ye(z.comparator),fT=new Ae(z.comparator);function re(...n){let e=fT;for(const t of n)e=e.add(t);return e}const gT=new Ae(Z);function _T(){return gT}function ec(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(e)?"-0":e}}function Bh(n){return{integerValue:""+n}}function qh(n,e){return z1(e)?Bh(e):ec(n,e)}class ho{constructor(){this._=void 0}}function yT(n,e,t){return n instanceof Ti?(function(i,s){const a={fields:{[kh]:{stringValue:Ih},[Sh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qa(s)&&(s=ao(s)),s&&(a.fields[Ah]=s),{mapValue:a}})(t,e):n instanceof gr?Kh(n,e):n instanceof Ei?Gh(n,e):(function(i,s){const a=zh(i,s),c=au(a)+au(i.Ee);return ya(a)&&ya(i.Ee)?Bh(c):ec(i.serializer,c)})(n,e)}function vT(n,e,t){return n instanceof gr?Kh(n,e):n instanceof Ei?Gh(n,e):t}function zh(n,e){return n instanceof Ii?(function(r){return ya(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class Ti extends ho{}class gr extends ho{constructor(e){super(),this.elements=e}}function Kh(n,e){const t=Wh(e);for(const r of n.elements)t.some((i=>bt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Ei extends ho{constructor(e){super(),this.elements=e}}function Gh(n,e){let t=Wh(e);for(const r of n.elements)t=t.filter((i=>!bt(i,r)));return{arrayValue:{values:t}}}class Ii extends ho{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function au(n){return we(n.integerValue||n.doubleValue)}function Wh(n){return Ja(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}class tc{constructor(e,t){this.field=e,this.transform=t}}function bT(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof gr&&i instanceof gr||r instanceof Ei&&i instanceof Ei?hr(r.elements,i.elements,bt):r instanceof Ii&&i instanceof Ii?bt(r.Ee,i.Ee):r instanceof Ti&&i instanceof Ti})(n.transform,e.transform)}class wT{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class po{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nc(n.key,ft.none()):new xi(n.key,n.data,ft.none());{const t=n.data,r=Ze.empty();let i=new Ae(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new xn(n.key,r,new st(i.toArray()),ft.none())}}function TT(n,e,t){n instanceof xi?(function(i,s,a){const c=i.value.clone(),u=lu(i.fieldTransforms,s,a.transformResults);c.setAll(u),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof xn?(function(i,s,a){if(!Cs(i.precondition,s))return void s.convertToUnknownDocument(a.version);const c=lu(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Qh(i)),u.setAll(c),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function pi(n,e,t,r){return n instanceof xi?(function(s,a,c,u){if(!Cs(s.precondition,a))return c;const h=s.value.clone(),p=uu(s.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof xn?(function(s,a,c,u){if(!Cs(s.precondition,a))return c;const h=uu(s.fieldTransforms,u,a),p=a.data;return p.setAll(Qh(s)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((_=>_.field)))})(n,e,t,r):(function(s,a,c){return Cs(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function ET(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=zh(r.transform,i||null);s!=null&&(t===null&&(t=Ze.empty()),t.set(r.field,s))}return t||null}function cu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hr(r,i,((s,a)=>bT(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xi extends po{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xn extends po{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Qh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function lu(n,e,t){const r=new Map;ue(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,c=e.data.field(s.field);r.set(s.field,vT(a,c,t[i]))}return r}function uu(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,yT(s,a,e))}return r}class nc extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IT extends po{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class kT{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&TT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=pi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=pi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=jh();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let c=this.applyToLocalView(a,s.mutatedFields);c=t.has(i.key)?null:c;const u=Hh(a,c);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(J.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),re())}isEqual(e){return this.batchId===e.batchId&&hr(this.mutations,e.mutations,((t,r)=>cu(t,r)))&&hr(this.baseMutations,e.baseMutations,((t,r)=>cu(t,r)))}}class rc{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ue(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return mT})();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new rc(e,t,r,i)}}class AT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}class ST{constructor(e,t){this.count=e,this.unchangedNames=t}}var Te,ie;function RT(n){switch(n){case x.OK:return W(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return W(15467,{code:n})}}function Jh(n){if(n===void 0)return Vt("GRPC error has no .code"),x.UNKNOWN;switch(n){case Te.OK:return x.OK;case Te.CANCELLED:return x.CANCELLED;case Te.UNKNOWN:return x.UNKNOWN;case Te.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Te.INTERNAL:return x.INTERNAL;case Te.UNAVAILABLE:return x.UNAVAILABLE;case Te.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Te.NOT_FOUND:return x.NOT_FOUND;case Te.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Te.ABORTED:return x.ABORTED;case Te.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Te.DATA_LOSS:return x.DATA_LOSS;default:return W(39323,{code:n})}}(ie=Te||(Te={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";const CT=new nn([4294967295,4294967295],0);function du(n){const e=vh().encode(n),t=new dh;return t.update(e),new Uint8Array(t.digest())}function hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new nn([t,r],0),new nn([i,s],0)]}class ic{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ni(`Invalid padding: ${t}`);if(r<0)throw new ni(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ni(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ni(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=nn.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(nn.fromNumber(r)));return i.compare(CT)===1&&(i=new nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=du(e),[r,i]=hu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ic(s,i,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=du(e),[r,i]=hu(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ni extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class mo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Vi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new mo(J.min(),i,new ye(Z),Ot(),re())}}class Vi{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vi(r,t,re(),re(),re())}}class $s{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Xh{constructor(e,t){this.targetId=e,this.De=t}}class Yh{constructor(e,t,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class pu{constructor(){this.ve=0,this.Ce=mu(),this.Fe=Oe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=re(),t=re(),r=re();return this.Ce.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}})),new Vi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=mu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ue(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class $T{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ot(),this.je=ys(),this.Je=ys(),this.He=new ye(Z)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:W(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(ba(s))if(r===0){const a=new z(s.path);this.Xe(t,a,je.newNoDocument(a,J.min()))}else ue(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,c;try{a=dn(r).toUint8Array()}catch(u){if(u instanceof Eh)return cn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ic(a,i,s)}catch(u){return cn(u instanceof ni?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,s,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((s,a)=>{const c=this.st(a);if(c){if(s.current&&ba(c.target)){const u=new z(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,je.newNoDocument(u,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}}));let r=re();this.Je.forEach(((s,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(s))})),this.ze.forEach(((s,a)=>a.setReadTime(e)));const i=new mo(e,t,this.He,this.ze,r);return this.ze=Ot(),this.je=ys(),this.Je=ys(),this.He=new ye(Z),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new pu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ae(Z),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ae(Z),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new pu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function ys(){return new ye(z.comparator)}function mu(){return new ye(z.comparator)}const PT={asc:"ASCENDING",desc:"DESCENDING"},NT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},DT={and:"AND",or:"OR"};class xT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ta(n,e){return n.useProto3Json||oo(e)?e:{value:e}}function Qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function VT(n,e){return Qs(n,e.toTimestamp())}function gt(n){return ue(!!n,49232),J.fromTimestamp((function(t){const r=un(t);return new me(r.seconds,r.nanos)})(n))}function sc(n,e){return Ea(n,e).canonicalString()}function Ea(n,e){const t=(function(i){return new _e(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ep(n){const e=_e.fromString(n);return ue(sp(e),10190,{key:e.toString()}),e}function Ia(n,e){return sc(n.databaseId,e.path)}function Wo(n,e){const t=ep(e);if(t.get(1)!==n.databaseId.projectId)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(np(t))}function tp(n,e){return sc(n.databaseId,e)}function OT(n){const e=ep(n);return e.length===4?_e.emptyPath():np(e)}function ka(n){return new _e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function np(n){return ue(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fu(n,e,t){return{name:Ia(n,e),fields:t.value.mapValue.fields}}function MT(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,p){return h.useProto3Json?(ue(p===void 0||typeof p=="string",58123),Oe.fromBase64String(p||"")):(ue(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Oe.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const p=h.code===void 0?x.UNKNOWN:Jh(h.code);return new B(p,h.message||"")})(a);t=new Yh(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wo(n,r.document.name),s=gt(r.document.updateTime),a=r.document.createTime?gt(r.document.createTime):J.min(),c=new Ze({mapValue:{fields:r.document.fields}}),u=je.newFoundDocument(i,s,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new $s(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wo(n,r.document),s=r.readTime?gt(r.readTime):J.min(),a=je.newNoDocument(i,s),c=r.removedTargetIds||[];t=new $s([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wo(n,r.document),s=r.removedTargetIds||[];t=new $s([],s,i,null)}else{if(!("filter"in e))return W(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new ST(i,s),c=r.targetId;t=new Xh(c,a)}}return t}function LT(n,e){let t;if(e instanceof xi)t={update:fu(n,e.key,e.value)};else if(e instanceof nc)t={delete:Ia(n,e.key)};else if(e instanceof xn)t={update:fu(n,e.key,e.data),updateMask:WT(e.fieldMask)};else{if(!(e instanceof IT))return W(16599,{Rt:e.type});t={verify:Ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,a){const c=a.transform;if(c instanceof Ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof gr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ii)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw W(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:VT(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)})(n,e.precondition)),t}function UT(n,e){return n&&n.length>0?(ue(e!==void 0,14353),n.map((t=>(function(i,s){let a=i.updateTime?gt(i.updateTime):gt(s);return a.isEqual(J.min())&&(a=gt(s)),new wT(a,i.transformResults||[])})(t,e)))):[]}function FT(n,e){return{documents:[tp(n,e.path)]}}function jT(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tp(n,i);const s=(function(h){if(h.length!==0)return ip(wt.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((p=>(function(b){return{field:nr(b.field),direction:zT(b.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ta(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:i}}function BT(n){let e=OT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ue(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];t.where&&(s=(function(_){const b=rp(_);return b instanceof wt&&Dh(b)?b.getFilters():[b]})(t.where));let a=[];t.orderBy&&(a=(function(_){return _.map((b=>(function(N){return new Hs(rr(N.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(b)))})(t.orderBy));let c=null;t.limit&&(c=(function(_){let b;return b=typeof _=="object"?_.value:_,oo(b)?null:b})(t.limit));let u=null;t.startAt&&(u=(function(_){const b=!!_.before,A=_.values||[];return new Ws(A,b)})(t.startAt));let h=null;return t.endAt&&(h=(function(_){const b=!_.before,A=_.values||[];return new Ws(A,b)})(t.endAt)),cT(e,i,a,s,c,"F",u,h)}function qT(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=rr(t.unaryFilter.field);return ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=rr(t.unaryFilter.field);return ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rr(t.unaryFilter.field);return ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(t.unaryFilter.field);return ke.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ke.create(rr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return wt.create(t.compositeFilter.filters.map((r=>rp(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}})(t.compositeFilter.op))})(n):W(30097,{filter:n})}function zT(n){return PT[n]}function KT(n){return NT[n]}function GT(n){return DT[n]}function nr(n){return{fieldPath:n.canonicalString()}}function rr(n){return Ve.fromServerFormat(n.fieldPath)}function ip(n){return n instanceof ke?(function(t){if(t.op==="=="){if(nu(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NAN"}};if(tu(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nu(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NAN"}};if(tu(t.value))return{unaryFilter:{field:nr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nr(t.field),op:KT(t.op),value:t.value}}})(n):n instanceof wt?(function(t){const r=t.getFilters().map((i=>ip(i)));return r.length===1?r[0]:{compositeFilter:{op:GT(t.op),filters:r}}})(n):W(54877,{filter:n})}function WT(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function sp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}class Xt{constructor(e,t,r,i,s=J.min(),a=J.min(),c=Oe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Xt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class HT{constructor(e){this.gt=e}}function QT(n){const e=BT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wa(e,e.limit,"L"):e}class JT{constructor(){this.Dn=new XT}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(ln.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class XT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(_e.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(_e.comparator)).toArray()}}const gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},op=41943040;class ze{static withCacheSize(e){return new ze(e,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}ze.DEFAULT_COLLECTION_PERCENTILE=10,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ze.DEFAULT=new ze(op,ze.DEFAULT_COLLECTION_PERCENTILE,ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ze.DISABLED=new ze(-1,0,0);class _r{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new _r(0)}static ur(){return new _r(-1)}}const _u="LruGarbageCollector",YT=1048576;function yu([n,e],[t,r]){const i=Z(n,t);return i===0?Z(e,r):i}class ZT{constructor(e){this.Tr=e,this.buffer=new Ae(yu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){F(_u,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){kr(t)?F(_u,"Ignoring IndexedDB error during garbage collection: ",t):await Ir(t)}await this.Rr(3e5)}))}}class tE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(so.ue);const r=new ZT(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(gu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,c,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((_=>(_>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),i=this.params.maximumSequenceNumbersToCollect):i=_,a=Date.now(),this.nthSequenceNumber(e,i)))).next((_=>(r=_,c=Date.now(),this.removeTargets(e,r,t)))).next((_=>(s=_,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((_=>(h=Date.now(),er()<=ne.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(c-a)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${_} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:_}))))}}function nE(n,e){return new tE(n,e)}class rE{constructor(){this.changes=new Dn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class iE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class sE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&pi(r.mutation,i,st.empty(),me.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,re()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=re()){const i=kn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=ti();return s.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=kn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,re())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,i){let s=Ot();const a=hi(),c=(function(){return hi()})();return t.forEach(((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof xn)?s=s.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),pi(p.mutation,h,p.mutation.getFieldMask(),me.now())):a.set(h.key,st.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,p)=>a.set(h,p))),t.forEach(((h,p)=>{var _;return c.set(h,new iE(p,(_=a.get(h))!==null&&_!==void 0?_:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=hi();let i=new ye(((a,c)=>a-c)),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let p=r.get(u)||st.empty();p=c.applyToLocalView(h,p),r.set(u,p);const _=(i.get(c.batchId)||re()).add(u);i=i.insert(c.batchId,_)}))})).next((()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,p=u.value,_=jh();p.forEach((b=>{if(!s.has(b)){const A=Hh(t.get(b),r.get(b));A!==null&&_.set(b,A),s=s.add(b)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(kn());let c=yi,u=s;return a.next((h=>D.forEach(h,((p,_)=>(c<_.largestBatchId&&(c=_.largestBatchId),s.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next((b=>{u=u.insert(p,b)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,re()))).next((p=>({batchId:c,changes:Fh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((r=>{let i=ti();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=ti();return this.indexManager.getCollectionParents(e,s).next((c=>D.forEach(c,(u=>{const h=(function(_,b){return new co(b,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((p=>{p.forEach(((_,b)=>{a=a.insert(_,b)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,je.newInvalidDocument(p)))}));let c=ti();return a.forEach(((u,h)=>{const p=s.get(u);p!==void 0&&pi(p.mutation,h,st.empty(),me.now()),uo(t,h)&&(c=c.insert(u,h))})),c}))}}class oE{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:gt(i.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:QT(i.bundledQuery),readTime:gt(i.readTime)}})(t)),D.resolve()}}class aE{constructor(){this.overlays=new ye(z.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=kn();return D.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.wt(e,t,s)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=kn(),s=t.length+1,a=new z(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ye(((h,p)=>h-p));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=kn(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=kn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,p)=>c.set(h,p))),!(c.size()>=i)););return D.resolve(c)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new AT(t,r));let s=this.kr.get(t);s===void 0&&(s=re(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}class cE{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}class oc{constructor(){this.qr=new Ae($e.Qr),this.$r=new Ae($e.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new z(new _e([])),r=new $e(t,e),i=new $e(t,e+1),s=[];return this.$r.forEachInRange([r,i],(a=>{this.Wr(a),s.push(a.key)})),s}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new z(new _e([])),r=new $e(t,e),i=new $e(t,e+1);let s=re();return this.$r.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new $e(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return z.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}class lE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ae($e.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new kT(s,t,r,i);this.mutationQueue.push(a);for(const c of i)this.Yr=this.Yr.add(new $e(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Ha:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),i=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],(a=>{const c=this.Zr(a.Hr);s.push(c)})),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(Z);return t.forEach((i=>{const s=new $e(i,0),a=new $e(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],(c=>{r=r.add(c.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const a=new $e(new z(s),0);let c=new Ae(Z);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.Hr)),!0)}),a),D.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ue(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(i=>{const s=new $e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new $e(t,0),i=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class uE{constructor(e){this.ni=e,this.docs=(function(){return new ye(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Ot();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():je.newInvalidDocument(i))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Ot();const a=t.path,c=new z(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||F1(U1(p),r)<=0||(i.has(p.key)||uo(t,p))&&(s=s.insert(p.key,p.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new dE(this)}getSize(e){return D.resolve(this.size)}}class dE extends rE{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}class hE{constructor(e){this.persistence=e,this.ii=new Dn((t=>Xa(t)),Ya),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.si=0,this.oi=new oc,this.targetCount=0,this._i=_r.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new _r(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),D.waitFor(s).next((()=>i))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}class ap{constructor(e,t){this.ai={},this.overlays={},this.ui=new so(0),this.ci=!1,this.ci=!0,this.li=new cE,this.referenceDelegate=e(this),this.hi=new hE(this),this.indexManager=new JT,this.remoteDocumentCache=(function(i){return new uE(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new HT(t),this.Ti=new oE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new lE(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const i=new pE(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class pE extends B1{constructor(e){super(),this.currentSequenceNumber=e}}class ac{constructor(e){this.persistence=e,this.Ai=new oc,this.Ri=null}static Vi(e){return new ac(e)}get mi(){if(this.Ri)return this.Ri;throw W(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.mi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const i=z.fromPath(r);return this.fi(e,i).next((s=>{s||t.removeEntry(i,J.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Js{constructor(e,t){this.persistence=e,this.gi=new Dn((r=>K1(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=nE(this,t)}static Vi(e,t){return new Js(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((s=>s?D.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,s.removeEntry(a,J.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ss(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return D.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class cc{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=re(),i=re();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new cc(e,t.fromCache,r,i)}}class mE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class fE{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return a0()?8:q1(Be())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ys(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new mE;return this.ws(e,t,a).next((c=>{if(s.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>s.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(er()<=ne.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(er()<=ne.DEBUG&&F("QueryEngine","Query:",tr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(er()<=ne.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):D.resolve())}ps(e,t){if(ou(t))return D.resolve(null);let r=mt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=wa(t,null,"F"),r=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=re(...s);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,wa(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,r,i){return ou(t)||i.isEqual(J.min())?D.resolve(null):this.gs.getDocuments(e,r).next((s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?D.resolve(null):(er()<=ne.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),tr(t)),this.vs(e,a,t,L1(i,yi)).next((c=>c)))}))}bs(e,t){let r=new Ae(Lh(e));return t.forEach(((i,s)=>{uo(e,s)&&(r=r.add(s))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return er()<=ne.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",tr(t)),this.gs.getDocumentsMatchingQuery(e,t,ln.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}const lc="LocalStore",gE=3e8;class _E{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new ye(Z),this.Ms=new Dn((s=>Xa(s)),Ya),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sE(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function yE(n,e,t,r){return new _E(n,e,t,r)}async function cp(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],c=[];let u=re();for(const h of i){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){c.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function vE(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,p){const _=h.batch,b=_.keys();let A=D.resolve();return b.forEach((N=>{A=A.next((()=>p.getEntry(u,N))).next((O=>{const V=h.docVersions.get(N);ue(V!==null,48541),O.version.compareTo(V)<0&&(_.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),p.addEntry(O)))}))})),A.next((()=>c.mutationQueue.removeMutationBatch(u,_)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=re();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function lp(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function bE(n,e){const t=X(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const c=[];e.targetChanges.forEach(((p,_)=>{const b=i.get(_);if(!b)return;c.push(t.hi.removeMatchingKeys(s,p.removedDocuments,_).next((()=>t.hi.addMatchingKeys(s,p.addedDocuments,_))));let A=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(_)!==null?A=A.withResumeToken(Oe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(_,A),(function(O,V,K){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=gE?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0})(b,A,p)&&c.push(t.hi.updateTargetData(s,A))}));let u=Ot(),h=re();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,p))})),c.push(wE(s,a,e.documentUpdates).next((p=>{u=p.Ls,h=p.ks}))),!r.isEqual(J.min())){const p=t.hi.getLastRemoteSnapshotVersion(s).next((_=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r)));c.push(p)}return D.waitFor(c).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Fs=i,s)))}function wE(n,e,t){let r=re(),i=re();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=Ot();return t.forEach(((c,u)=>{const h=s.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):F(lc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Ls:a,ks:i}}))}function TE(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ha),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function EE(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((s=>s?(i=s,D.resolve(i)):t.hi.allocateTargetId(r).next((a=>(i=new Xt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Aa(n,e,t){const r=X(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!kr(a))throw a;F(lc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function vu(n,e,t){const r=X(n);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,p){const _=X(u),b=_.Ms.get(p);return b!==void 0?D.resolve(_.Fs.get(b)):_.hi.getTargetData(h,p)})(r,a,mt(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{s=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:J.min(),t?s:re()))).next((c=>(IE(r,dT(e),c),{documents:c,qs:s})))))}function IE(n,e,t){let r=n.xs.get(e)||J.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.xs.set(e,r)}class bu{constructor(){this.activeTargetIds=_T()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kE{constructor(){this.Fo=new bu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new bu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class AE{xo(e){}shutdown(){}}const wu="ConnectivityMonitor";class Tu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){F(wu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){F(wu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}let vs=null;function Sa(){return vs===null?vs=(function(){return 268435456+Math.round(2147483648*Math.random())})():vs++,"0x"+vs.toString(16)}const Ho="RestConnection",SE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RE{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Ks?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=Sa(),c=this.Go(e,t.toUriEncodedString());F(Ho,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(c),p=br(h);return this.jo(e,c,u,r,p).then((_=>(F(Ho,`Received RPC '${e}' ${a}: `,_),_)),(_=>{throw cn(Ho,`RPC '${e}' ${a} failed with error: `,_,"url: ",c,"request:",r),_}))}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Er})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Go(e,t){const r=SE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}class CE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}const Ue="WebChannelConnection";class $E extends RE{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=Sa();return new Promise(((c,u)=>{const h=new hh;h.setWithCredentials(!0),h.listenOnce(ph.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case As.NO_ERROR:const _=h.getResponseJson();F(Ue,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),c(_);break;case As.TIMEOUT:F(Ue,`RPC '${e}' ${a} timed out`),u(new B(x.DEADLINE_EXCEEDED,"Request time out"));break;case As.HTTP_ERROR:const b=h.getStatus();if(F(Ue,`RPC '${e}' ${a} failed with status:`,b,"response text:",h.getResponseText()),b>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const N=A?.error;if(N&&N.status&&N.message){const O=(function(K){const q=K.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(q)>=0?q:x.UNKNOWN})(N.status);u(new B(O,N.message))}else u(new B(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(x.UNAVAILABLE,"Connection failed."));break;default:W(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{F(Ue,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(i);F(Ue,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",p,r,15)}))}P_(e,t,r){const i=Sa(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=gh(),c=fh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=s.join("");F(Ue,`Creating RPC '${e}' stream ${i}: ${p}`,u);const _=a.createWebChannel(p,u);this.T_(_);let b=!1,A=!1;const N=new CE({Ho:V=>{A?F(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,V):(b||(F(Ue,`Opening RPC '${e}' stream ${i} transport.`),_.open(),b=!0),F(Ue,`RPC '${e}' stream ${i} sending:`,V),_.send(V))},Yo:()=>_.close()}),O=(V,K,q)=>{V.listen(K,(Q=>{try{q(Q)}catch(ae){setTimeout((()=>{throw ae}),0)}}))};return O(_,ei.EventType.OPEN,(()=>{A||(F(Ue,`RPC '${e}' stream ${i} transport opened.`),N.s_())})),O(_,ei.EventType.CLOSE,(()=>{A||(A=!0,F(Ue,`RPC '${e}' stream ${i} transport closed`),N.__(),this.I_(_))})),O(_,ei.EventType.ERROR,(V=>{A||(A=!0,cn(Ue,`RPC '${e}' stream ${i} transport errored. Name:`,V.name,"Message:",V.message),N.__(new B(x.UNAVAILABLE,"The operation could not be completed")))})),O(_,ei.EventType.MESSAGE,(V=>{var K;if(!A){const q=V.data[0];ue(!!q,16349);const Q=q,ae=Q?.error||((K=Q[0])===null||K===void 0?void 0:K.error);if(ae){F(Ue,`RPC '${e}' stream ${i} received error:`,ae);const fe=ae.status;let he=(function(v){const T=Te[v];if(T!==void 0)return Jh(T)})(fe),k=ae.message;he===void 0&&(he=x.INTERNAL,k="Unknown error status: "+fe+" with message "+ae.message),A=!0,N.__(new B(he,k)),_.close()}else F(Ue,`RPC '${e}' stream ${i} received:`,q),N.a_(q)}})),O(c,mh.STAT_EVENT,(V=>{V.stat===fa.PROXY?F(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):V.stat===fa.NOPROXY&&F(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Qo(){return typeof document<"u"?document:null}function fo(n){return new xT(n,!0)}class up{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}const Eu="PersistentStream";class dp{constructor(e,t,r,i,s,a,c,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new up(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(Vt(t.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new B(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return F(Eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(F(Eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class PE extends dp{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=MT(this.serializer,e),r=(function(s){if(!("targetChange"in s))return J.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?J.min():a.readTime?gt(a.readTime):J.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=ka(this.serializer),t.addTarget=(function(s,a){let c;const u=a.target;if(c=ba(u)?{documents:FT(s,u)}:{query:jT(s,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Zh(s,a.resumeToken);const h=Ta(s,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(J.min())>0){c.readTime=Qs(s,a.snapshotVersion.toTimestamp());const h=Ta(s,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=qT(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=ka(this.serializer),t.removeTarget=e,this.k_(t)}}class NE extends dp{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ue(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ue(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=UT(e.writeResults,e.commitTime),r=gt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=ka(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>LT(this.serializer,r)))};this.k_(t)}}class DE{}class xE extends DE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Wo(e,Ea(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(x.UNKNOWN,s.toString())}))}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Ea(t,r),i,a,c,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new B(x.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class VE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Vt(t),this._a=!1):F("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}const $n="RemoteStore";class OE{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Vn(this)&&(F($n,"Restarting streams for network reachability change."),await(async function(u){const h=X(u);h.Ia.add(4),await Oi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await go(h)})(this))}))})),this.Aa=new VE(r,i)}}async function go(n){if(Vn(n))for(const e of n.da)await e(!0)}async function Oi(n){for(const e of n.da)await e(!1)}function hp(n,e){const t=X(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),pc(t)?hc(t):Ar(t).x_()&&dc(t,e))}function uc(n,e){const t=X(n),r=Ar(t);t.Ta.delete(e),r.x_()&&pp(t,e),t.Ta.size===0&&(r.x_()?r.B_():Vn(t)&&t.Aa.set("Unknown"))}function dc(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ar(n).H_(e)}function pp(n,e){n.Ra.$e(e),Ar(n).Y_(e)}function hc(n){n.Ra=new $T({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ar(n).start(),n.Aa.aa()}function pc(n){return Vn(n)&&!Ar(n).M_()&&n.Ta.size>0}function Vn(n){return X(n).Ia.size===0}function mp(n){n.Ra=void 0}async function ME(n){n.Aa.set("Online")}async function LE(n){n.Ta.forEach(((e,t)=>{dc(n,e)}))}async function UE(n,e){mp(n),pc(n)?(n.Aa.la(e),hc(n)):n.Aa.set("Unknown")}async function FE(n,e,t){if(n.Aa.set("Online"),e instanceof Yh&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const c of s.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,a),i.Ta.delete(c),i.Ra.removeTarget(c))})(n,e)}catch(r){F($n,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xs(n,r)}else if(e instanceof $s?n.Ra.Ye(e):e instanceof Xh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(J.min()))try{const r=await lp(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const c=s.Ra.Pt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.Ta.get(h);p&&s.Ta.set(h,p.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const p=s.Ta.get(u);if(!p)return;s.Ta.set(u,p.withResumeToken(Oe.EMPTY_BYTE_STRING,p.snapshotVersion)),pp(s,u);const _=new Xt(p.target,u,h,p.sequenceNumber);dc(s,_)})),s.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){F($n,"Failed to raise snapshot:",r),await Xs(n,r)}}async function Xs(n,e,t){if(!kr(e))throw e;n.Ia.add(1),await Oi(n),n.Aa.set("Offline"),t||(t=()=>lp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F($n,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await go(n)}))}function fp(n,e){return e().catch((t=>Xs(n,t,e)))}async function _o(n){const e=X(n),t=pn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ha;for(;jE(e);)try{const i=await TE(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,BE(e,i)}catch(i){await Xs(e,i)}gp(e)&&_p(e)}function jE(n){return Vn(n)&&n.Pa.length<10}function BE(n,e){n.Pa.push(e);const t=pn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function gp(n){return Vn(n)&&!pn(n).M_()&&n.Pa.length>0}function _p(n){pn(n).start()}async function qE(n){pn(n).na()}async function zE(n){const e=pn(n);for(const t of n.Pa)e.X_(t.mutations)}async function KE(n,e,t){const r=n.Pa.shift(),i=rc.from(r,e,t);await fp(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await _o(n)}async function GE(n,e){e&&pn(n).Z_&&await(async function(r,i){if((function(a){return RT(a)&&a!==x.ABORTED})(i.code)){const s=r.Pa.shift();pn(r).N_(),await fp(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await _o(r)}})(n,e),gp(n)&&_p(n)}async function Iu(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),F($n,"RemoteStore received new credentials");const r=Vn(t);t.Ia.add(3),await Oi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await go(t)}async function WE(n,e){const t=X(n);e?(t.Ia.delete(2),await go(t)):e||(t.Ia.add(2),await Oi(t),t.Aa.set("Unknown"))}function Ar(n){return n.Va||(n.Va=(function(t,r,i){const s=X(t);return s.ia(),new PE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:ME.bind(null,n),e_:LE.bind(null,n),n_:UE.bind(null,n),J_:FE.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),pc(n)?hc(n):n.Aa.set("Unknown")):(await n.Va.stop(),mp(n))}))),n.Va}function pn(n){return n.ma||(n.ma=(function(t,r,i){const s=X(t);return s.ia(),new NE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:qE.bind(null,n),n_:GE.bind(null,n),ea:zE.bind(null,n),ta:KE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await _o(n)):(await n.ma.stop(),n.Pa.length>0&&(F($n,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}class mc{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,c=new mc(e,t,a,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fc(n,e){if(Vt("AsyncQueue",`${e}: ${n}`),kr(n))return new B(x.UNAVAILABLE,`${e}: ${n}`);throw n}class cr{static emptySet(e){return new cr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=ti(),this.sortedSet=new ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}class ku{constructor(){this.fa=new ye(z.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):W(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class yr{constructor(e,t,r,i,s,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new yr(e,t,cr.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}class HE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class QE{constructor(){this.queries=Au(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=X(t),s=i.queries;i.queries=Au(),s.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new B(x.ABORTED,"Firestore shutting down"))}}function Au(){return new Dn((n=>Mh(n)),lo)}async function JE(n,e){const t=X(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new HE,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const c=fc(a,`Initialization of query '${tr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&gc(t)}async function XE(n,e){const t=X(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YE(n,e){const t=X(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const c of a.wa)c.Ca(i)&&(r=!0);a.ya=i}}r&&gc(t)}function ZE(n,e,t){const r=X(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function gc(n){n.Da.forEach((e=>{e.next()}))}var Ra,Su;(Su=Ra||(Ra={})).Fa="default",Su.Cache="cache";class eI{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ra.Cache}}class yp{constructor(e){this.key=e}}class vp{constructor(e){this.key=e}}class tI{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=re(),this.mutatedKeys=re(),this.Xa=Lh(e),this.eu=new cr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new ku,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((p,_)=>{const b=i.get(p),A=uo(this.query,_)?_:null,N=!!b&&this.mutatedKeys.has(b.key),O=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;b&&A?b.data.isEqual(A.data)?N!==O&&(r.track({type:3,doc:A}),V=!0):this.iu(b,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.Xa(A,u)>0||h&&this.Xa(A,h)<0)&&(c=!0)):!b&&A?(r.track({type:0,doc:A}),V=!0):b&&!A&&(r.track({type:1,doc:b}),V=!0,(u||h)&&(c=!0)),V&&(A?(a=a.add(A),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:c,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,_)=>(function(A,N){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{At:V})}};return O(A)-O(N)})(p.type,_.type)||this.Xa(p.doc,_.doc))),this.su(r),i=i!=null&&i;const c=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new yr(this.query,e.eu,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ku,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=re(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new vp(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new yp(r))})),t}uu(e){this.Ha=e.qs,this.Za=re();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return yr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const _c="SyncEngine";class nI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rI{constructor(e){this.key=e,this.lu=!1}}class iI{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Dn((c=>Mh(c)),lo),this.Tu=new Map,this.Iu=new Set,this.du=new ye(z.comparator),this.Eu=new Map,this.Au=new oc,this.Ru={},this.Vu=new Map,this.mu=_r.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function sI(n,e,t=!0){const r=kp(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await bp(r,e,t,!0),i}async function oI(n,e){const t=kp(n);await bp(t,e,!0,!1)}async function bp(n,e,t,r){const i=await EE(n.localStore,mt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let c;return r&&(c=await aI(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&hp(n.remoteStore,i),c}async function aI(n,e,t,r,i){n.gu=(_,b,A)=>(async function(O,V,K,q){let Q=V.view.nu(K);Q.Ds&&(Q=await vu(O.localStore,V.query,!1).then((({documents:k})=>V.view.nu(k,Q))));const ae=q&&q.targetChanges.get(V.targetId),fe=q&&q.targetMismatches.get(V.targetId)!=null,he=V.view.applyChanges(Q,O.isPrimaryClient,ae,fe);return Cu(O,V.targetId,he._u),he.snapshot})(n,_,b,A);const s=await vu(n.localStore,e,!0),a=new tI(e,s.qs),c=a.nu(s.documents),u=Vi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(c,n.isPrimaryClient,u);Cu(n,t,h._u);const p=new nI(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function cI(n,e,t){const r=X(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter((a=>!lo(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Aa(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&uc(r.remoteStore,i.targetId),Ca(r,i.targetId)})).catch(Ir)):(Ca(r,i.targetId),await Aa(r.localStore,i.targetId,!0))}async function lI(n,e){const t=X(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),uc(t.remoteStore,r.targetId))}async function uI(n,e,t){const r=_I(n);try{const i=await(function(a,c){const u=X(a),h=me.now(),p=c.reduce(((A,N)=>A.add(N.key)),re());let _,b;return u.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let N=Ot(),O=re();return u.Os.getEntries(A,p).next((V=>{N=V,N.forEach(((K,q)=>{q.isValidDocument()||(O=O.add(K))}))})).next((()=>u.localDocuments.getOverlayedDocuments(A,N))).next((V=>{_=V;const K=[];for(const q of c){const Q=ET(q,_.get(q.key).overlayedDocument);Q!=null&&K.push(new xn(q.key,Q,$h(Q.value.mapValue),ft.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,K,c)})).next((V=>{b=V;const K=V.applyToLocalDocumentSet(_,O);return u.documentOverlayCache.saveOverlays(A,V.batchId,K)}))})).then((()=>({batchId:b.batchId,changes:Fh(_)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new ye(Z)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h})(r,i.batchId,t),await Mi(r,i.changes),await _o(r.remoteStore)}catch(i){const s=fc(i,"Failed to persist write");t.reject(s)}}async function wp(n,e){const t=X(n);try{const r=await bE(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Eu.get(s);a&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?ue(a.lu,14607):i.removedDocuments.size>0&&(ue(a.lu,42227),a.lu=!1))})),await Mi(t,r,e)}catch(r){await Ir(r)}}function Ru(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((s,a)=>{const c=a.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(a,c){const u=X(a);u.onlineState=c;let h=!1;u.queries.forEach(((p,_)=>{for(const b of _.wa)b.va(c)&&(h=!0)})),h&&gc(u)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dI(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new ye(z.comparator);a=a.insert(s,je.newNoDocument(s,J.min()));const c=re().add(s),u=new mo(J.min(),new Map,new ye(Z),a,c);await wp(r,u),r.du=r.du.remove(s),r.Eu.delete(e),yc(r)}else await Aa(r.localStore,e,!1).then((()=>Ca(r,e,t))).catch(Ir)}async function hI(n,e){const t=X(n),r=e.batch.batchId;try{const i=await vE(t.localStore,e);Ep(t,r,null),Tp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mi(t,i)}catch(i){await Ir(i)}}async function pI(n,e,t){const r=X(n);try{const i=await(function(a,c){const u=X(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let p;return u.mutationQueue.lookupMutationBatch(h,c).next((_=>(ue(_!==null,37113),p=_.keys(),u.mutationQueue.removeMutationBatch(h,_)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p))).next((()=>u.localDocuments.getDocuments(h,p)))}))})(r.localStore,e);Ep(r,e,t),Tp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mi(r,i)}catch(i){await Ir(i)}}function Tp(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Ep(n,e,t){const r=X(n);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Ip(n,r)}))}function Ip(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(uc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),yc(n))}function Cu(n,e,t){for(const r of t)r instanceof yp?(n.Au.addReference(r.key,e),mI(n,r)):r instanceof vp?(F(_c,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Ip(n,r.key)):W(19791,{yu:r})}function mI(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(F(_c,"New document in limbo: "+t),n.Iu.add(r),yc(n))}function yc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new z(_e.fromString(e)),r=n.mu.next();n.Eu.set(r,new rI(t)),n.du=n.du.insert(t,r),hp(n.remoteStore,new Xt(mt(Za(t.path)),r,"TargetPurposeLimboResolution",so.ue))}}async function Mi(n,e,t){const r=X(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((h=>{var p;if((h||t)&&r.isPrimaryClient){const _=h?!h.fromCache:(p=t?.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(h){i.push(h);const _=cc.Es(u.targetId,h);s.push(_)}})))})),await Promise.all(a),r.hu.J_(i),await(async function(u,h){const p=X(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(_=>D.forEach(h,(b=>D.forEach(b.Is,(A=>p.persistence.referenceDelegate.addReference(_,b.targetId,A))).next((()=>D.forEach(b.ds,(A=>p.persistence.referenceDelegate.removeReference(_,b.targetId,A)))))))))}catch(_){if(!kr(_))throw _;F(lc,"Failed to update sequence numbers: "+_)}for(const _ of h){const b=_.targetId;if(!_.fromCache){const A=p.Fs.get(b),N=A.snapshotVersion,O=A.withLastLimboFreeSnapshotVersion(N);p.Fs=p.Fs.insert(b,O)}}})(r.localStore,s))}async function fI(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){F(_c,"User change. New user:",e.toKey());const r=await cp(t.localStore,e);t.currentUser=e,(function(s,a){s.Vu.forEach((c=>{c.forEach((u=>{u.reject(new B(x.CANCELLED,a))}))})),s.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mi(t,r.Bs)}}function gI(n,e){const t=X(n),r=t.Eu.get(e);if(r&&r.lu)return re().add(r.key);{let i=re();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const c=t.Pu.get(a);i=i.unionWith(c.view.tu)}return i}}function kp(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=wp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dI.bind(null,e),e.hu.J_=YE.bind(null,e.eventManager),e.hu.pu=ZE.bind(null,e.eventManager),e}function _I(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pI.bind(null,e),e}class Ys{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return yE(this.persistence,new fE,e.initialUser,this.serializer)}Du(e){return new ap(ac.Vi,this.serializer)}bu(e){return new kE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ys.provider={build:()=>new Ys};class yI extends Ys{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ue(this.persistence.referenceDelegate instanceof Js,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eE(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?ze.withCacheSize(this.cacheSizeBytes):ze.DEFAULT;return new ap((r=>Js.Vi(r,t)),this.serializer)}}class $a{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ru(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=fI.bind(null,this.syncEngine),await WE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new QE})()}createDatastore(e){const t=fo(e.databaseInfo.databaseId),r=(function(s){return new $E(s)})(e.databaseInfo);return(function(s,a,c,u){return new xE(s,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,c){return new OE(r,i,s,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ru(this.syncEngine,t,0)),(function(){return Tu.C()?new Tu:new AE})())}createSyncEngine(e,t){return(function(i,s,a,c,u,h,p){const _=new iI(i,s,a,c,u,h);return p&&(_.fu=!0),_})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const s=X(i);F($n,"RemoteStore shutting down."),s.Ia.add(5),await Oi(s),s.Ea.shutdown(),s.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$a.provider={build:()=>new $a};class vI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Vt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}const mn="FirestoreClient";class bI{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=Ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{F(mn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(F(mn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Jo(n,e){n.asyncQueue.verifyOperationInProgress(),F(mn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await cp(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{cn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{F("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{cn("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function $u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wI(n);F(mn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Iu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Iu(e.remoteStore,i))),n._onlineComponents=e}async function wI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(mn,"Using user provided OfflineComponentProvider");try{await Jo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===x.FAILED_PRECONDITION||i.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;cn("Error using user provided cache. Falling back to memory cache: "+t),await Jo(n,new Ys)}}else F(mn,"Using default OfflineComponentProvider"),await Jo(n,new yI(void 0));return n._offlineComponents}async function Ap(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(mn,"Using user provided OnlineComponentProvider"),await $u(n,n._uninitializedComponentsProvider._online)):(F(mn,"Using default OnlineComponentProvider"),await $u(n,new $a))),n._onlineComponents}function TI(n){return Ap(n).then((e=>e.syncEngine))}async function EI(n){const e=await Ap(n),t=e.eventManager;return t.onListen=sI.bind(null,e.syncEngine),t.onUnlisten=cI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lI.bind(null,e.syncEngine),t}function II(n,e,t={}){const r=new rn;return n.asyncQueue.enqueueAndForget((async()=>(function(s,a,c,u,h){const p=new vI({next:b=>{p.Ou(),a.enqueueAndForget((()=>XE(s,_)));const A=b.docs.has(c);!A&&b.fromCache?h.reject(new B(x.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&b.fromCache&&u&&u.source==="server"?h.reject(new B(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(b)},error:b=>h.reject(b)}),_=new eI(Za(c.path),p,{includeMetadataChanges:!0,ka:!0});return JE(s,_)})(await EI(n),n.asyncQueue,e,t,r))),r.promise}function Sp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}const Pu=new Map;const Rp="firestore.googleapis.com",Nu=!0;class Du{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rp,this.ssl=Nu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Nu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=op;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YT)throw new B(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}M1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vc{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Du({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Du(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new S1;switch(r.type){case"firstParty":return new P1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Pu.get(t);r&&(F("ComponentProvider","Removing Datastore"),Pu.delete(t),r.terminate())})(this),Promise.resolve()}}function kI(n,e,t,r={}){var i;n=pr(n,vc);const s=br(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;s&&(kd(`https://${u}`),Ad("Firestore",!0)),a.host!==Rp&&a.host!==u&&cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:r});if(!on(h,c)&&(n._setSettings(h),r.mockUserToken)){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=Fe.MOCK_USER;else{p=Yv(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new B(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Fe(b)}n._authCredentials=new R1(new yh(p,_))}}class bc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bc(this.firestore,e,this._query)}}class Pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Di(t,Pe._jsonSchema))return new Pe(e,r||null,new z(_e.fromString(t.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Ee("string",Pe._jsonSchemaVersion),referencePath:Ee("string")};class ki extends bc{constructor(e,t,r){super(e,t,Za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new z(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function at(n,e,...t){if(n=ot(n),arguments.length===1&&(e=Ga.newId()),O1("doc","path",e),n instanceof vc){const r=_e.fromString(e,...t);return Wl(r),new Pe(n,null,new z(r))}{if(!(n instanceof Pe||n instanceof ki))throw new B(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(_e.fromString(e,...t));return Wl(r),new Pe(n.firestore,n instanceof ki?n.converter:null,new z(r))}}const xu="AsyncQueue";class Vu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new up(this,"async_queue_retry"),this.oc=()=>{const r=Qo();r&&F(xu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Qo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Qo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new rn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!kr(e))throw e;F(xu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Vt("INTERNAL UNHANDLED ERROR: ",Ou(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=mc.createAndSchedule(this,e,t,r,(s=>this.lc(s)));return this.ec.push(i),i}ac(){this.tc&&W(47125,{hc:Ou(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ou(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class yo extends vc{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Vu,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vu(e),this._firestoreClient=void 0,await e}}}function AI(n,e){const t=typeof n=="object"?n:$d(),r=typeof n=="string"?n:Ks,i=Oa(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jv("firestore");s&&kI(i,...s)}return i}function Cp(n){if(n._terminated)throw new B(x.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SI(n),n._firestoreClient}function SI(n){var e,t,r;const i=n._freezeSettings(),s=(function(c,u,h,p){return new H1(c,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Sp(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new bI(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}})(n._componentsProvider))}class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(Oe.fromBase64String(e))}catch(t){throw new B(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Di(e,et._jsonSchema))return et.fromBase64String(e.bytes)}}et._jsonSchemaVersion="firestore/bytes/1.0",et._jsonSchema={type:Ee("string",et._jsonSchemaVersion),bytes:Ee("string")};class wc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class Li{constructor(e){this._methodName=e}}class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(Di(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:Ee("string",_t._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};class yt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Di(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new yt(e.vectorValues);throw new B(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:Ee("string",yt._jsonSchemaVersion),vectorValues:Ee("object")};const RI=/^__.*__$/;class CI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new xn(e,this.data,this.fieldMask,t,this.fieldTransforms):new xi(e,this.data,t,this.fieldTransforms)}}function $p(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ec:n})}}class vo{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new vo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if($p(this.Ec)&&RI.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class $I{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fo(e)}Dc(e,t,r,i=!1){return new vo({Ec:e,methodName:t,bc:r,path:Ve.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function PI(n){const e=n._freezeSettings(),t=fo(n._databaseId);return new $I(n._databaseId,!!e.ignoreUndefinedProperties,t)}function NI(n,e,t,r,i,s={}){const a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);Dp("Data must be an object, but it was:",a,r);const c=Pp(r,a);let u,h;if(s.merge)u=new st(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const _ of s.mergeFields){const b=xI(e,_,t);if(!a.contains(b))throw new B(x.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);OI(p,b)||p.push(b)}u=new st(p),h=a.fieldTransforms.filter((_=>u.covers(_.field)))}else u=null,h=a.fieldTransforms;return new CI(new Ze(c),u,h)}function DI(n,e,t){return new vo({Ec:3,bc:e.settings.bc,methodName:n._methodName,mc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Tc extends Li{_toFieldTransform(e){return new tc(e.path,new Ti)}isEqual(e){return e instanceof Tc}}class Ec extends Li{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=DI(this,e,!0),r=this.vc.map((s=>kc(s,t))),i=new gr(r);return new tc(e.path,i)}isEqual(e){return e instanceof Ec&&on(this.vc,e.vc)}}class Ic extends Li{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Ii(e.serializer,qh(e.serializer,this.Cc));return new tc(e.path,t)}isEqual(e){return e instanceof Ic&&this.Cc===e.Cc}}function kc(n,e){if(Np(n=ot(n)))return Dp("Unsupported field value:",e,n),Pp(n,e);if(n instanceof Li)return(function(r,i){if(!$p(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const s=[];let a=0;for(const c of r){let u=kc(c,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:Qs(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qs(i.serializer,s)}}if(r instanceof _t)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof et)return{bytesValue:Zh(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yt)return(function(a,c){return{mapValue:{fields:{[Rh]:{stringValue:Ch},[Gs]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return ec(c.serializer,h)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${Wa(r)}`)})(n,e)}function Pp(n,e){const t={};return Th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nn(n,((r,i)=>{const s=kc(i,e.Vc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Np(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof me||n instanceof _t||n instanceof et||n instanceof Pe||n instanceof Li||n instanceof yt)}function Dp(n,e,t){if(!Np(t)||!bh(t)){const r=Wa(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function xI(n,e,t){if((e=ot(e))instanceof wc)return e._internalPath;if(typeof e=="string")return xp(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const VI=new RegExp("[~\\*/\\[\\]]");function xp(n,e,t){if(e.search(VI)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new wc(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new B(x.INVALID_ARGUMENT,c+n+u)}function OI(n,e){return n.some((t=>t.isEqual(e)))}class Vp{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Op("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class MI extends Vp{data(){return super.data()}}function Op(n,e){return typeof e=="string"?xp(n,e):e instanceof wc?e._internalPath:e._delegate._internalPath}class LI{convertValue(e,t="none"){switch(hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(dn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Nn(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[Gs].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((a=>we(a.doubleValue)));return new yt(s)}convertGeoPoint(e){return new _t(we(e.latitude),we(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ao(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(vi(e));default:return null}}convertTimestamp(e){const t=un(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=_e.fromString(e);ue(sp(r),9688,{name:e});const i=new bi(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(t)||Vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}function UI(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class An extends Vp{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ps(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Op("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=An._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}An._jsonSchemaVersion="firestore/documentSnapshot/1.0",An._jsonSchema={type:Ee("string",An._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Ps extends An{data(e={}){return super.data(e)}}class mi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ri(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ps(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((c=>{const u=new Ps(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ri(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const u=new Ps(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ri(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:FI(c.type),doc:u,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ga.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:n})}}function Ui(n){n=pr(n,Pe);const e=pr(n.firestore,yo);return II(Cp(e),n._key).then((t=>BI(e,n,t)))}mi._jsonSchemaVersion="firestore/querySnapshot/1.0",mi._jsonSchema={type:Ee("string",mi._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class jI extends LI{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}function Pn(n,e,t){n=pr(n,Pe);const r=pr(n.firestore,yo),i=UI(n.converter,e,t);return Mp(r,[NI(PI(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ft.none())])}function Xo(n){return Mp(pr(n.firestore,yo),[new nc(n._key,ft.none())])}function Mp(n,e){return(function(r,i){const s=new rn;return r.asyncQueue.enqueueAndForget((async()=>uI(await TI(r),i,s))),s.promise})(Cp(n),e)}function BI(n,e,t){const r=t.docs.get(e._key),i=new jI(n);return new An(n,i,e._key,r,new ri(t.hasPendingWrites,t.fromCache),e.converter)}function Fi(){return new Tc("serverTimestamp")}function Mu(...n){return new Ec("arrayUnion",n)}function bs(n){return new Ic("increment",n)}(function(e,t=!0){(function(i){Er=i})(wr),dr(new Sn("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),c=new yo(new C1(r.getProvider("auth-internal")),new N1(a,r.getProvider("app-check-internal")),(function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(h.options.projectId,p)})(a,i),a);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),en(Bl,ql,e),en(Bl,ql,"esm2017")})();const Lp={apiKey:"AIzaSyDX1C1kdKW0_xD4WMWmui9ltUnG1WjO9mA",authDomain:"maths-adventure-f4d17.firebaseapp.com",projectId:"maths-adventure-f4d17",storageBucket:"maths-adventure-f4d17.firebasestorage.app",messagingSenderId:"3583493206",appId:"1:3583493206:web:a6d2d61e7e8665cf2127f7"},Ke=!Object.values(Lp).some(n=>String(n).startsWith("ここに"));let ii=null,tt=null;if(Ke){const n=Cd(Lp);ii=k1(n),tt=AI(n)}function Up(){return Ke}async function Sr(){return Ke?ii.currentUser?ii.currentUser:(await cw(ii),new Promise((n,e)=>{const t=mw(ii,r=>{t(),n(r)},r=>{t(),e(r)})})):null}async function qI(n,e){if(!Ke||!n||!e)return null;const t=await Ui(at(tt,"users",n,"players",e));return t.exists()?t.data():null}async function Ns(n,e,t){!Ke||!n||!e||await Pn(at(tt,"users",n,"players",e),{gems:Number(t?.gems??0),unlockedCards:Array.isArray(t?.unlockedCards)?t.unlockedCards:[],speedSetting:t?.speedSetting??"normal",totalExp:Number(t?.totalExp??0),partnerKey:t?.partnerKey??null,partnerStudy:t?.partnerStudy&&typeof t.partnerStudy=="object"?t.partnerStudy:{},updatedAt:Fi()},{merge:!0})}function zI(n=new Date){const e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(n),t=e.find(s=>s.type==="year")?.value,r=e.find(s=>s.type==="month")?.value,i=e.find(s=>s.type==="day")?.value;if(!t||!r||!i)throw new Error("学習日の取得に失敗しました。");return`${t}-${r}-${i}`}async function KI({playerId:n,studySeconds:e=0,totalQuestions:t=0,firstAttemptCorrectAnswers:r=0,unitName:i="",stageId:s="",stageLabel:a=""}={}){if(!Ke)return console.warn("Firebase未設定のため、学習記録を保存しませんでした。"),!1;const c=String(n??"").trim();if(!c)return console.warn("playerIdがないため、学習記録を保存しませんでした。"),!1;const u=Math.max(0,Math.floor(Number(e??0))),h=Math.max(0,Math.floor(Number(t??0))),p=Math.max(0,Math.min(h,Math.floor(Number(r??0)))),_=String(i??"").trim().slice(0,150),b=String(s??"").trim().slice(0,150),A=String(a??i??s??"").trim().slice(0,150),N=await Sr();if(!N?.uid)throw new Error("Firebaseユーザーを取得できませんでした。");const O=N.uid,V=zI(),K=at(tt,"users",O,"players",c,"learningDaily",V),q={studySeconds:bs(u),totalQuestions:bs(h),firstAttemptCorrectAnswers:bs(p),updatedAt:Fi()};return _&&(q.units=Mu(_)),b&&(q.stages=Mu(b),q.stagePlayCounts={[b]:bs(1)},q.stageLabels={[b]:A}),await Pn(K,q,{merge:!0}),console.log("学習記録を保存しました。",{dateKey:V,playerId:c,studySeconds:u,totalQuestions:h,firstAttemptCorrectAnswers:p,unitName:_,stageId:b,stageLabel:A}),!0}async function GI(n){if(!Ke||!n)return null;const e=await Ui(at(tt,"users",n));if(!e.exists())return null;const t=e.data();return t.legacyMigratedToPlayerId||!(t.gems!==void 0||t.unlockedCards!==void 0||t.totalExp!==void 0||t.partnerKey!==void 0||t.partnerStudy!==void 0)?null:{gems:Number(t.gems??0),unlockedCards:Array.isArray(t.unlockedCards)?t.unlockedCards:[],speedSetting:t.speedSetting??"normal",totalExp:Number(t.totalExp??0),partnerKey:t.partnerKey??null,partnerStudy:t.partnerStudy&&typeof t.partnerStudy=="object"?t.partnerStudy:{}}}async function WI(n,e){!Ke||!n||!e||await Pn(at(tt,"users",n),{legacyMigratedToPlayerId:e,legacyMigratedAt:Fi()},{merge:!0})}async function HI(n){if(!Ke)throw new Error("Firebase設定がまだ完了していません。");const e=String(Math.floor(1e5+Math.random()*9e5)),t=Date.now(),r=t+600*1e3;return n?.player?.state?(await Pn(at(tt,"transferCodes",e),{version:2,player:{playerId:typeof n.player.playerId=="string"?n.player.playerId:null,nickname:String(n.player.nickname??"プレイヤー").trim().slice(0,20),state:n.player.state},createdAtMs:t,expiresAtMs:r}),e):(await Pn(at(tt,"transferCodes",e),{gems:Number(n?.gems??0),unlockedCards:Array.isArray(n?.unlockedCards)?n.unlockedCards:[],speedSetting:n?.speedSetting??"normal",totalExp:Number(n?.totalExp??0),partnerKey:n?.partnerKey??null,partnerStudy:n?.partnerStudy&&typeof n.partnerStudy=="object"?n.partnerStudy:{},createdAtMs:t,expiresAtMs:r}),e)}async function QI(n){if(!Ke)throw new Error("Firebase設定がまだ完了していません。");const e=String(n??"").replace(/\D/g,"").slice(0,6);if(e.length!==6)throw new Error("6桁の引っ越しコードを入力してください。");const t=at(tt,"transferCodes",e),r=await Ui(t);if(!r.exists())throw new Error("コードが見つかりません。");const i=r.data();if(!i.expiresAtMs||Date.now()>i.expiresAtMs)throw await Xo(t),new Error("コードの有効期限が切れています。");if(i.version===2&&i.player?.state){const a={version:2,player:{playerId:typeof i.player.playerId=="string"?i.player.playerId:null,nickname:String(i.player.nickname??"プレイヤー").trim().slice(0,20),state:i.player.state}};return await Xo(t),a}const s={gems:Number(i.gems??0),unlockedCards:Array.isArray(i.unlockedCards)?i.unlockedCards:[],speedSetting:i.speedSetting??"normal",totalExp:Number(i.totalExp??0),partnerKey:i.partnerKey??null,partnerStudy:i.partnerStudy&&typeof i.partnerStudy=="object"?i.partnerStudy:{}};return await Xo(t),s}async function JI(n){if(!Ke||!n)return{email:"",reportMode:"weekly",emailVerified:!1};const e=await Sr();if(!e?.uid)throw new Error("Firebaseユーザーを取得できませんでした。");const t=at(tt,"users",e.uid,"players",n,"parentSettings","config"),r=await Ui(t);if(!r.exists())return{email:"",reportMode:"weekly",emailVerified:!1};const i=r.data(),s=["after_learning","weekly","off","after_learning_and_weekly"];return{email:typeof i.email=="string"?i.email:"",reportMode:s.includes(i.reportMode)?i.reportMode:"weekly",emailVerified:i.emailVerified===!0}}async function XI({playerId:n,email:e,reportMode:t}={}){if(!Ke)throw new Error("Firebase設定が完了していません。");const r=String(n??"").trim();if(!r)throw new Error("プレイヤーが選択されていません。");const i=String(e??"").trim().toLowerCase();if(!["after_learning","weekly","off","after_learning_and_weekly"].includes(t))throw new Error("通知方法が正しくありません。");if(t!=="off"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i))throw new Error("正しいメールアドレスを入力してください。");const a=await Sr();if(!a?.uid)throw new Error("Firebaseユーザーを取得できませんでした。");const c=at(tt,"users",a.uid,"players",r,"parentSettings","config"),u=await Ui(c),h=u.exists()?u.data():{},b=String(h.email??"").trim().toLowerCase()!==i?!1:h.emailVerified===!0;return await Pn(c,{email:i,reportMode:t,emailVerified:b,updatedAt:Fi()},{merge:!0}),{email:i,reportMode:t,emailVerified:b}}async function Lu(n){if(!Ke||!n)return!1;const e=await Sr();if(!e?.uid)throw new Error("Firebaseユーザーを取得できませんでした。");const t=at(tt,"users",e.uid,"players",n,"parentSettings","config"),r=new Date,i=new Date(r.getTime()+900*1e3);return await Pn(t,{lastLearningAt:r,reportDueAt:i,updatedAt:Fi()},{merge:!0}),console.log("学習レポート送信予定を更新しました。",{lastLearningAt:r,reportDueAt:i}),!0}async function YI({playerId:n,email:e}={}){if(!Ke)throw new Error("Firebase設定が完了していません。");const t=String(n??"").trim(),r=String(e??"").trim().toLowerCase();if(!t)throw new Error("プレイヤーが選択されていません。");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))throw new Error("正しいメールアドレスを入力してください。");const s=await Sr();if(!s)throw new Error("Firebaseユーザーを取得できませんでした。");const a=await s.getIdToken(),u=await fetch("https://asia-northeast1-maths-adventure-f4d17.cloudfunctions.net/requestParentEmailVerification",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({playerId:t,email:r})});let h=null;try{h=await u.json()}catch(p){console.error("確認メールAPIの応答を読み取れませんでした。",p)}if(!u.ok)throw new Error(h?.message||"確認メールを送信できませんでした。");return console.log("保護者メール確認メール送信結果",h),h}const Fp="maths_adventure_state_v1",jp="maths_adventure_profiles_v1",ZI={gems:0,unlockedCards:[],speedSetting:"normal",totalExp:0,partnerKey:null,partnerStudy:{}},Uu={activePlayerId:null,players:{}};let ut=null,Xe=()=>{};function ek(n){Xe=typeof n=="function"?n:()=>{}}function Bp(){return structuredClone(ZI)}function vt(n={}){return{gems:Number(n.gems??0),unlockedCards:Array.isArray(n.unlockedCards)?n.unlockedCards:[],speedSetting:n.speedSetting??"normal",totalExp:Number(n.totalExp??0),partnerKey:n.partnerKey??null,partnerStudy:n.partnerStudy&&typeof n.partnerStudy=="object"?n.partnerStudy:{}}}function Fu(n,e){const t=vt(n),r=vt(e),i=Number(t.gems??0)+t.unlockedCards.length*100+Number(t.totalExp??0),a=Number(r.gems??0)+r.unlockedCards.length*100+Number(r.totalExp??0)>i?r:t,c=[...new Set([...t.unlockedCards,...r.unlockedCards])],u=t.partnerKey?t.partnerKey:r.partnerKey??null,h={},p=new Set([...Object.keys(t.partnerStudy??{}),...Object.keys(r.partnerStudy??{})]);for(const _ of p)h[_]=Math.max(Number(t.partnerStudy?.[_]??0),Number(r.partnerStudy?.[_]??0));return vt({...a,unlockedCards:c,partnerKey:u,partnerStudy:h})}function qp(){return crypto?.randomUUID?`p_${crypto.randomUUID()}`:`p_${Date.now()}_${Math.random().toString(36).slice(2,10)}`}function Ac(n){return String(n??"").trim().replace(/\s+/g," ").slice(0,20)}function On(){try{const n=localStorage.getItem(jp);if(!n)return structuredClone(Uu);const e=JSON.parse(n);return{activePlayerId:typeof e.activePlayerId=="string"?e.activePlayerId:null,players:e.players&&typeof e.players=="object"?e.players:{}}}catch{return structuredClone(Uu)}}function vr(n){localStorage.setItem(jp,JSON.stringify(n))}function tk(){return!!localStorage.getItem(Fp)}function nk(){try{const n=localStorage.getItem(Fp);return n?vt(JSON.parse(n)):null}catch{return null}}function ju(){const n=On();return Object.values(n.players).sort((e,t)=>Number(t.lastPlayedAt??0)-Number(e.lastPlayedAt??0))}function Je(){const n=On();return n.activePlayerId?n.players[n.activePlayerId]??null:null}function zp(n,e=null){const t=Ac(n);if(!t)throw new Error("ニックネームを入力してください。");const r=On(),i=qp(),s={playerId:i,nickname:t,createdAt:Date.now(),lastPlayedAt:Date.now(),state:vt(e??Bp())};return r.players[i]=s,r.activePlayerId=i,vr(r),s}function rk(n){const e=nk();if(!e)throw new Error("引き継ぐ旧データがありません。");return zp(n,e)}function ik(n){const e=On(),t=e.players[n];if(!t)throw new Error("プレイヤーが見つかりません。");return t.lastPlayedAt=Date.now(),e.activePlayerId=n,vr(e),vt(t.state)}function sk(){const n=Je();return n?vt(n.state):Bp()}function Pa(n){const e=On(),t=e.activePlayerId;if(!t)return;const r=e.players[t];r&&(r.state=vt(n),r.lastPlayedAt=Date.now(),vr(e))}async function Bu(n){if(!Up()||(Xe("syncing"),ut=(await Sr())?.uid??null,!ut))return Xe("local"),n;const t=Je();if(!t)return Xe("local"),n;const r=t.playerId;if(!r)return Xe("local"),n;const i=await qI(ut,r);if(i){const a=Fu(n,i);return Pa(a),await Ns(ut,r,a),Xe("connected"),a}const s=await GI(ut);if(s){const a=Fu(n,s);return Pa(a),await Ns(ut,r,a),await WI(ut,r),Xe("connected"),a}return await Ns(ut,r,n),Xe("connected"),n}async function si(n){if(Pa(n),!ut)return;const t=Je()?.playerId??null;if(t)try{Xe("syncing"),await Ns(ut,t,n),Xe("connected")}catch(r){console.error(r),Xe("local")}}async function ok(n){const e=vt(n);return await si(e),e}function ak(n){const e=Ac(n);if(!e)throw new Error("新しいニックネームを入力してください。");const t=On(),r=t.activePlayerId;if(!r)throw new Error("プレイヤーが選ばれていません。");const i=t.players[r];if(!i)throw new Error("プレイヤーデータが見つかりません。");return i.nickname=e,i.lastPlayedAt=Date.now(),vr(t),i}function ck({playerId:n,nickname:e,state:t}={}){const r=Ac(e)||"プレイヤー",i=vt(t??{}),s=On(),a=typeof n=="string"&&n.trim()!==""?n.trim():null;if(a&&s.players[a]){const h=s.players[a];return h.nickname=r,h.state=i,h.lastPlayedAt=Date.now(),s.activePlayerId=a,vr(s),h}const c=a??qp(),u={playerId:c,nickname:r,createdAt:Date.now(),lastPlayedAt:Date.now(),state:i};return s.players[c]=u,s.activePlayerId=c,vr(s),u}const qu=[["UR",.08,1.7],["SR",.32,1.3],["N",.6,1]];function lk(n){let e=sk(),t="landing",r=null,i=null,s=[],a=0,c="",u=null,h=!1,p=!1,_=!1,b=null,A="local",N="",O="",V="",K=3,q=!1,Q="",ae=!0,fe=!1,he=null,k=null,g=null,v=null,T=!1,I="idle",R=!1,y="",ce="",ge={email:"",reportMode:"weekly",emailVerified:!1},Ge="",Se="";async function fn(){const w=Je();if(!w?.playerId){ge={email:"",reportMode:"weekly",emailVerified:!1};return}try{ge=await JI(w.playerId),Se=""}catch(E){console.error("保護者向けレポート設定を読み込めませんでした。",E),Se="学習レポート設定を読み込めませんでした。"}}let Tt=null,Lt=new Set,Mn=new Set,qe=!1;function Ie(){Tt=Date.now(),Lt=new Set,Mn=new Set,qe=!1}function Ln(){return!!i?.id}function gn(w){if(!w)return"";if(w.isBoss)return`WORLD${w.world}：ボス戦`;const E=String(w.unitLabel??w.unit??"").trim(),$=String(w.name??"").trim();return E&&$&&E!==$?`${E}：${$}`:$||E||`WORLD${w.world}`}function bo(){if(!Ln())return!1;const w=!Lt.has(a);return Lt.add(a),w}function Un(w){!Ln()||!w||Mn.add(a)}async function ji(){if(console.log("学習記録：保存処理を開始",{stageId:i?.id,stageName:i?.name,isBoss:i?.isBoss,startedAt:Tt,attemptedQuestions:Lt.size,firstAttemptCorrectAnswers:Mn.size}),!Ln()||qe||!Tt){console.log("学習記録：保存対象外",{shouldRecordLearning:Ln(),learningSessionSaved:qe,learningSessionStartedAt:Tt});return}const w=Je();if(!w?.playerId){console.warn("学習記録：アクティブプレイヤーが見つかりません。");return}const E=Math.max(1,Math.floor((Date.now()-Tt)/1e3)),$=Lt.size,C=Mn.size;if(!($<=0)){qe=!0;try{const M=gn(i);await KI({playerId:w.playerId,studySeconds:E,totalQuestions:$,firstAttemptCorrectAnswers:C,unitName:M,stageId:i?.id??"",stageLabel:M}),await Lu(w.playerId),console.log("学習記録 保存完了",{stageId:i?.id,studySeconds:E,totalQuestions:$,firstAttemptCorrectAnswers:C})}catch(M){qe=!1,console.error("学習記録の保存に失敗しました。",M)}}}const He=new Audio("/audio/title-bgm.mp3");He.loop=!0,He.volume=.35,ek(w=>{A=w,j()}),n.addEventListener("pointerup",jn),n.addEventListener("input",Fn),n.addEventListener("mousemove",ts),n.addEventListener("touchmove",ns,{passive:!1}),j(),Bu(e).then(w=>{e=w,j()}).catch(()=>{A="local",j()});function Fn(w){w.target.matches("[data-transfer-input]")&&(w.target.value=w.target.value.replace(/\D/g,"").slice(0,6)),w.target.matches("[data-nickname-input], [data-rename-input]")&&(w.target.value=w.target.value.slice(0,20))}async function jn(w){const E=w.target.closest("[data-action]");if(!E)return;const $=E.dataset.action;if($){if($==="landing-start"){ju().length>0?t="player-select":tk()?t="legacy-migrate":t="player-create",j();return}if($==="player-new"){y="",ce="",t="player-create",j();return}if($==="player-select"){try{const C=E.dataset.playerId;e=ik(C),y="",ce="";try{e=await Bu(e)}catch(M){console.warn("プレイヤーのクラウド同期に失敗しました。",M)}t="title",j()}catch(C){ce=C?.message??"プレイヤーを選べませんでした。",j()}return}if($==="player-create-submit"){const C=n.querySelector("[data-nickname-input]")?.value?.trim()??"";if(!C){ce="ニックネームを入力してください。",j();return}try{e=zp(C).state,y="",ce="",t="title",j()}catch(M){ce=M.message,j()}return}if($==="legacy-migrate-submit"){const C=n.querySelector("[data-nickname-input]")?.value?.trim()??"";if(!C){ce="ニックネームを入力してください。",j();return}try{e=rk(C).state,y="これまでの冒険データを引き継ぎました！",ce="",t="title",j()}catch(M){ce=M.message,j()}return}if($==="toggle-title-bgm"){To();return}if($==="player-rename-submit"){const C=n.querySelector("[data-rename-input]")?.value?.trim()??"";if(!C){ce="新しいニックネームを入力してください。",j();return}if(C.length>20){ce="ニックネームは20文字以内にしてください。",j();return}try{ak(C),y=`なまえを「${C}」にかえました！`,ce="",t="sync",j()}catch(M){ce=M?.message??"名前を変更できませんでした。",j()}return}if(!(T&&!["go","close-zoom","key","submit"].includes($))){if($==="go"){yn();const C=E.dataset.screen;C==="sync"&&await fn(),t=C,j();return}if($==="world"){r=Number(E.dataset.world),t="world",j();return}if($==="stage"){i=Og(E.dataset.id),Cr(),s=cl(i,10),s.forEach(M=>{zn(M)}),a=0,c="",u=null,h=!1,K=3,q=!1,Q="",v=null,I="start",Ie();const C=Je();C?.playerId&&Lu(C.playerId),await Vr(1200),t="game",Et();return}if($==="replay-flash"){_n(i)&&!v&&Et();return}if($==="key"){if(!fe)return;const C=E.dataset.value,M=s[a]??null;if((M?.keypad??i?.keypad??(i?.type?.startsWith("clock_")?"clock":"number"))==="clock"){if(C==="clear"){c="",j();return}if(C==="back"){c="",j();return}if(typeof C=="string"&&C.startsWith("clock-hour:")){const se=C.slice(11);/^(?:[1-9]|1[0-2])$/.test(se)&&(c=`${se}|`),j();return}if(typeof C=="string"&&C.startsWith("clock-minute:")){const se=C.slice(13),jt=["00","05","10","15","20","25","30","35","40","45","50","55"];c.includes("|")&&jt.includes(se)&&(c=`${c.split("|")[0]}|${se}`),j();return}return}if(C==="clear"){c="",j();return}if(C==="back"){c=c.slice(0,-1),j();return}if(M?.keypad==="expression"){if(!(["+","-","*","/","=","."].includes(C)||/^[0-9]$/.test(C))){j();return}if(c.length>=30){j();return}if(["+","-","*","/"].includes(C)){if(/[+\-*/]/.test(c)){j();return}if(c===""){j();return}}if(C==="="&&(c.includes("=")||!/[+\-*/]/.test(c))){j();return}if(c.includes("=")&&["+","-","*","/","="].includes(C)){j();return}c+=C,j();return}if(Array.isArray(M?.choices)&&typeof M?.answer=="string"&&/^[ABC]$/.test(M.answer)){/^[ABC]$/.test(C)&&(c=C),j();return}if(M?.kind==="fraction-add-same-denominator"||M?.kind==="fraction-subtract-same-denominator"){if(C==="/"){if(c===""||c.includes("/")){j();return}c+="/",j();return}/^[0-9]$/.test(C)&&(c+=C),j();return}c.length<20&&(c+=C),j();return}if($==="answer"){if(!fe||c==="")return;const C=s[a],M=bo(),L=typeof C?.answer=="string"&&/^[ABC]$/.test(C.answer),ee=ct(C);(C?.keypad==="expression"&&C?.expression?Or(c,C):L?c===C.answer:ee?Gn(c,C):Math.abs(Mr(c)-Number(C.answer))<1e-9)?(Un(M),c="",fe=!1,Q="",T=!0,e.totalExp=Number(e.totalExp??0)+10,v="correct",I="correct",Ft(),j(),qi(),si(e),Nr(),k=setTimeout(()=>{v=null,T=!1,I="idle",a++,a>=s.length?zi():Et()},1050)):(c="",K-=1,K>0?(Q="バリアが ひとつ こわれた！ もういちど やってみよう。",I="encourage",Et()):(q=!0,fe=!1,ae=!1,yn(),Q="",ji(),j()));return}if($==="open-chest"){if(p||_)return;h=!0,p=!0,_=!1,Re(),j(),clearTimeout(b);const C=u?.rarity==="UR"?2200:u?.rarity==="SR"?1750:1350;b=setTimeout(()=>{p=!1,_=!0,j(),Ne(u?.rarity)},C);return}if($==="retry-stage"){s=cl(i,10),a=0,c="",K=3,q=!1,Q="",v=null,Ie(),Et();return}if($==="zoom-card"){g={card:Zc(E.dataset.cardId),rarity:E.dataset.rarity},j();return}if($==="close-zoom"){g=null,j();return}if($==="choose-partner"){e.partnerKey=E.dataset.key,e.partnerStudy=e.partnerStudy??{},Xi(e.partnerKey),await si(e),N="パートナーに せっていしました！",j();return}if($==="remove-partner"){e.partnerKey=null,await si(e),j();return}if($==="parent-report-save"){const C=Je();if(!C?.playerId){Se="先にプレイヤーを選んでください。",Ge="",j();return}const M=n.querySelector("[data-parent-report-email]")?.value?.trim()??"",L=n.querySelector('input[name="parent-report-mode"]:checked')?.value??"weekly";try{ge=await XI({playerId:C.playerId,email:M,reportMode:L}),Ge="学習レポートの設定を保存しました。",Se=""}catch(ee){Ge="",Se=ee?.message??"設定を保存できませんでした。"}j();return}if($==="parent-report-verify"){const C=Je();if(!C?.playerId){Ge="",Se="先にプレイヤーを選んでください。",j();return}const M=String(ge.email??"").trim();if(!M){Ge="",Se="先にメールアドレスを保存してください。",j();return}Ge="確認メールを送信しています…",Se="",j();try{(await YI({playerId:C.playerId,email:M}))?.alreadyVerified===!0?(ge={...ge,emailVerified:!0},Ge="このメールアドレスは確認済みです。"):Ge="確認メールを送信しました。メール内の「メールアドレスを確認」を押してください。",Se=""}catch(L){console.error("確認メールを送信できませんでした。",L),Ge="",Se=L?.message??"確認メールを送信できませんでした。"}j();return}if($==="transfer-create"){try{const C=Je();if(!C)throw new Error("引っ越すプレイヤーが選ばれていません。");const M={version:2,player:{playerId:C.playerId,nickname:C.nickname??"プレイヤー",state:e}};V=await HI(M),N="",O=""}catch(C){V="",O=C?.message??"引っ越しコードを発行できませんでした。"}j();return}if($==="transfer-use"){const C=n.querySelector("[data-transfer-input]")?.value?.trim()??"";if(!/^\d{6}$/.test(C)){O="6桁の引っ越しコードを入力してください。",N="",j();return}try{const M=await QI(C);M?.version===2&&M?.player?.state?e=ck({playerId:M.player.playerId??null,nickname:M.player.nickname??"プレイヤー",state:M.player.state}).state:e=await ok(M),N=`「${importedPlayer.nickname}」のデータを引き継ぎました！`,O="",t="title"}catch(M){O=M?.message??"データを引き継げませんでした。",N=""}j();return}}}}function _n(w){return w?.presentation==="flash"}const Bn=new Set;function Rr(w){if(typeof w!="string"||w===""||Bn.has(w))return;const E=new Image;E.decoding="async";try{E.fetchPriority="high"}catch{}E.src=w,Bn.add(w)}function Cr(){const w=Wn();w&&Rr(Qe(w.card,w.rarity))}const $r=new Set;function qn(w){if(typeof w!="string"||w===""||$r.has(w))return;const E=new Image;E.decoding="async";try{E.fetchPriority="high"}catch{}E.src=w,$r.add(w)}function zn(w){w&&(Array.isArray(w.items)&&w.items.forEach(E=>{E?.image&&qn(E.image)}),Array.isArray(w.choices)&&w.choices.forEach(E=>{E?.image&&qn(E.image),Array.isArray(E?.moneyItems)&&E.moneyItems.forEach($=>{$?.image&&qn($.image)})}),[w.image,w.imageSrc,w.iconImage].forEach(E=>{typeof E=="string"&&qn(E)}))}function Bi(){zn(s[a]),zn(s[a+1]),zn(s[a+2])}function Et(){if(Pr(),Nr(),v=null,Bi(),!_n(i)){ae=!0,fe=!0,j();return}ae=!0,fe=!1,j(),he=setTimeout(()=>{ae=!1,fe=!0,j()},Dr())}function Pr(){he&&clearTimeout(he),he=null}function Nr(){k&&clearTimeout(k),k=null}function yn(){Pr(),Nr()}function Dr(){return 1500}function qi(){try{const w=window.AudioContext||window.webkitAudioContext;if(!w)return;const E=new w,$=E.createGain();$.connect(E.destination);const C=E.currentTime;$.gain.setValueAtTime(1e-4,C),$.gain.exponentialRampToValueAtTime(.16,C+.02),$.gain.exponentialRampToValueAtTime(1e-4,C+.5),[{frequency:523.25,start:0},{frequency:659.25,start:.1},{frequency:783.99,start:.2}].forEach(M=>{const L=E.createOscillator();L.type="sine",L.frequency.setValueAtTime(M.frequency,C+M.start),L.connect($),L.start(C+M.start),L.stop(C+M.start+.22)}),setTimeout(()=>E.close().catch(()=>{}),800)}catch{}}function Re(){try{const w=window.AudioContext||window.webkitAudioContext;if(!w)return;const E=new w,$=E.currentTime,C=E.createGain();C.connect(E.destination),C.gain.setValueAtTime(1e-4,$),C.gain.exponentialRampToValueAtTime(.22,$+.02),C.gain.exponentialRampToValueAtTime(1e-4,$+1.1),[180,240,330].forEach((ee,te)=>{const le=E.createOscillator(),se=E.createGain();le.type="triangle",le.frequency.setValueAtTime(ee,$+te*.08),se.gain.setValueAtTime(.12,$+te*.08),se.gain.exponentialRampToValueAtTime(1e-4,$+te*.08+.22),le.connect(se),se.connect(C),le.start($+te*.08),le.stop($+te*.08+.25)});const M=E.createOscillator(),L=E.createGain();M.type="sine",M.frequency.setValueAtTime(850,$+.34),M.frequency.exponentialRampToValueAtTime(1450,$+.7),L.gain.setValueAtTime(.08,$+.34),L.gain.exponentialRampToValueAtTime(1e-4,$+.8),M.connect(L),L.connect(C),M.start($+.34),M.stop($+.82),setTimeout(()=>{E.close().catch(()=>{})},1400)}catch(w){console.warn("宝箱サウンドを再生できませんでした",w)}}function Ne(w="N"){try{const E=window.AudioContext||window.webkitAudioContext;if(!E)return;const $=new E,C=$.currentTime,M=$.createGain();M.connect($.destination),M.gain.setValueAtTime(1e-4,C),M.gain.exponentialRampToValueAtTime(.18,C+.02),M.gain.exponentialRampToValueAtTime(1e-4,C+1.3);let L;w==="UR"?L=[[523.25,0],[659.25,.12],[783.99,.24],[1046.5,.38],[1318.5,.55]]:w==="SR"?L=[[523.25,0],[659.25,.14],[880,.3]]:L=[[523.25,0],[659.25,.16]],L.forEach(([ee,te])=>{const le=$.createOscillator(),se=$.createGain();le.type=w==="UR"?"triangle":"sine",le.frequency.setValueAtTime(ee,C+te),se.gain.setValueAtTime(w==="UR"?.11:.08,C+te),se.gain.exponentialRampToValueAtTime(1e-4,C+te+.42),le.connect(se),se.connect(M),le.start(C+te),le.stop(C+te+.45)}),setTimeout(()=>{$.close().catch(()=>{})},1800)}catch(E){console.warn("カード獲得音を再生できませんでした",E)}}function Kn(w){const E=Zr.filter(L=>L.world===w.world),$=E.filter(L=>L.role==="boss"),C=E.filter(L=>L.role!=="boss");if(!w.isBoss)return vn(C);const M=Math.random();return M<.4?vn($):M<.8?vn(C):vn(E)}function vn(w){return w[Math.floor(Math.random()*w.length)]}function zi(){yn();let w,E,$;if(i?.isBoss){const L=Zr.filter(se=>se.world===i.world),ee=L.filter(se=>se.role==="boss"),te=L.filter(se=>se.role!=="boss"),le=Math.random();if(le<.4){w=ee.length>0?ee[Math.floor(Math.random()*ee.length)]:L[Math.floor(Math.random()*L.length)];const se=Math.random();se<.6?(E="N",$=1):se<.9?(E="SR",$=1.3):(E="UR",$=1.7)}else le<.8?(w=te.length>0?te[Math.floor(Math.random()*te.length)]:L[Math.floor(Math.random()*L.length)],Math.random()<.8?(E="SR",$=1.3):(E="UR",$=1.7)):(w=L[Math.floor(Math.random()*L.length)],E="UR",$=1.7)}else{const L=Math.random();let ee=0,te=qu[2];for(const le of qu)if(ee+=le[1],L<=ee){te=le;break}w=Kn(i),E=te[0],$=te[2]}const C=`${w.id}_${E}`,M=!e.unlockedCards.includes(C);M&&e.unlockedCards.push(C),e.newCards=Array.isArray(e.newCards)?e.newCards:[],M&&!e.newCards.includes(C)&&e.newCards.push(C),e.gems+=i.rewardGems??5,u={card:w,rarity:E,factor:$,isNew:M},h=!1,p=!1,_=!1,b&&(clearTimeout(b),b=null),ji(),si(e),t="result",j()}function j(){if(t==="landing"){n.innerHTML=Wi();return}n.innerHTML=`
    <div class="app-shell">

      <header class="app-header">
        <h1 class="brand">⚔️ Maths-adventure</h1>

        <div class="header-status">
          <span class="sync-badge ${A}">
            ${A==="connected"?"☁️ 同期済み":A==="syncing"?"⏳ 同期中":"💾 ローカル"}
          </span>

          <strong>💎 ${e.gems}</strong>
        </div>
      </header>

      <main class="main">
        ${bn()}
      </main>

      <footer class="footer">
        WORLD学年別モジュール版
      </footer>

      ${qr()}

    </div>
  `}function bn(){return t==="player-select"?Ki():t==="player-create"?Gi():t==="legacy-migrate"?xr():t==="world"?Hi():t==="game"?wn():t==="result"?lt():t==="collection"?Br():t==="partner"?es():t==="sync"?Io():wo()}function Ki(){const w=ju(),E=Je();return`
    <section class="stack">

      <div class="toolbar">
        <button
          class="button secondary small"
          data-action="go"
          data-screen="landing"
        >
          ◀ トップへ
        </button>

        <h2>だれが冒険する？</h2>

        <span></span>
      </div>


      ${y?`
            <div class="notice">
              ${G(y)}
            </div>
          `:""}


      ${ce?`
            <div class="error">
              ${G(ce)}
            </div>
          `:""}


      <div class="player-grid">

        ${w.map($=>`
            <button
              class="player-card ${E?.playerId===$.playerId?"active":""}"
              data-action="player-select"
              data-player-id="${G($.playerId)}"
            >

              <div class="player-avatar">
                🧙
              </div>

              <strong>
                ${G($.nickname)}
              </strong>

              <small>
                💎 ${Number($.state?.gems??0)}
                ・
                🃏 ${$.state?.unlockedCards?.length??0}枚
              </small>

              ${E?.playerId===$.playerId?`
                    <span class="player-current">
                      いまのプレイヤー
                    </span>
                  `:""}

            </button>
          `).join("")}

      </div>


      <button
        class="button cyan"
        data-action="player-new"
      >
        ＋ あたらしいプレイヤー
      </button>

    </section>
  `}function Gi(){return`
    <section class="panel stack">

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="player-select"
        >
          ◀ もどる
        </button>

        <h2>
          あたらしい冒険
        </h2>

        <span></span>

      </div>


      <div class="hero">

        <div class="hero-icon">
          🧙‍♂️✨
        </div>

        <h2>
          ニックネームを決めよう！
        </h2>

        <p class="muted">
          本名じゃなくてOKだよ。
        </p>

      </div>


      <input
        class="input nickname-input"
        data-nickname-input
        maxlength="20"
        autocomplete="off"
        placeholder="ニックネーム"
      >


      ${ce?`
            <div class="error">
              ${G(ce)}
            </div>
          `:""}


      <button
        class="button cyan"
        data-action="player-create-submit"
      >
        この名前で冒険をはじめる
      </button>

    </section>
  `}function xr(){return`
    <section class="panel stack">

      <div class="hero">

        <div class="hero-icon">
          💾✨
        </div>

        <h2>
          これまでの冒険を見つけたよ！
        </h2>

        <p class="muted">
          今まで集めたカードやジェムを
          新しいプレイヤーデータへ引き継げます。
        </p>

      </div>


      <p>
        この冒険につける
        ニックネームを入力してください。
      </p>


      <input
        class="input nickname-input"
        data-nickname-input
        maxlength="20"
        autocomplete="off"
        placeholder="ニックネーム"
      >


      ${ce?`
            <div class="error">
              ${G(ce)}
            </div>
          `:""}


      <button
        class="button cyan"
        data-action="legacy-migrate-submit"
      >
        この名前で引き継ぐ
      </button>

    </section>
  `}function wo(){const w=Je();return`
    <section class="stack">

      <!-- 現在のプレイヤー -->
      <div class="panel player-banner">

  <div>
    <small>
      いま冒険しているプレイヤー
    </small>

    <strong>
      🧙 ${G(w?.nickname??"ゲスト")}
    </strong>
  </div>

  <div class="player-banner-actions">

    <button
      class="button secondary small"
      data-action="go"
      data-screen="player-select"
    >
      👤 きりかえる
    </button>

    <button
      class="button secondary small"
      data-action="go"
      data-screen="landing"
    >
      🏠 トップへ
    </button>

  </div>

</div>

      <!-- WORLD案内 -->
      <div class="panel hero">

        <div class="hero-icon">
          💎⚔️🐉
        </div>

        <h2>
          Maths Quest
        </h2>

        <p class="muted">
          WORLDを選んで算数の冒険へ出発しよう。
        </p>

      </div>


      <!-- WORLD一覧 -->
      <div class="world-grid">

        ${Yo.map(E=>`
            <button
              class="world-button ${E.available?"":"disabled"}"
              ${E.available?`data-action="world" data-world="${E.id}"`:"disabled"}
            >

              <strong>
                WORLD ${E.id}
              </strong>

              <span>
                ${E.icon} ${E.grade}
              </span>

              <small>
                ${E.title}
                <br>
                ${E.description}
              </small>

            </button>
          `).join("")}

      </div>


      <!-- 設定・図鑑 -->
      <div class="panel stack">

        <button
          class="button partner-button"
          data-action="go"
          data-screen="partner"
        >
          ⭐ パートナー
        </button>


        <button
          class="button secondary"
          data-action="go"
          data-screen="collection"
        >
          カード図鑑
        </button>


        <button
          class="button secondary"
          data-action="go"
          data-screen="sync"
        >
          引っ越しコード
        </button>

      </div>

    </section>
  `}function To(){if(R){He.pause(),R=!1;return}He.play().then(()=>{R=!0,j()}).catch(w=>{console.warn("BGMを再生できませんでした:",w)})}function Vr(w=1200){return!R||He.paused?Promise.resolve():new Promise(E=>{const $=He.volume,C=performance.now();function M(L){const ee=L-C,te=Math.min(ee/w,1);if(He.volume=$*(1-te),te<1){requestAnimationFrame(M);return}He.pause(),He.currentTime=0,He.volume=.35,R=!1,E()}requestAnimationFrame(M)})}function Wi(){return`
    <section class="landing-screen">

      <div class="landing-bg"></div>
      <div class="landing-vignette"></div>

      <!-- BGM -->
      <button
        class="landing-music"
        data-action="toggle-title-bgm"
        aria-label="BGM切り替え"
        title="BGM ON / OFF"
      >
        ${R?"🔊":"♪"}
      </button>


      <!-- 中央エリア -->
      <div class="landing-center">

        <!-- タイトルロゴ -->
        <div class="game-logo">

          <div class="game-logo-star">
            ✦
          </div>

          <div class="game-logo-inner">

            <span class="game-logo-maths">
              Maths-
            </span>

            <span class="game-logo-adventure">
              adventure
            </span>

          </div>

        </div>


        <p class="landing-catch">
          算数を、冒険に。
        </p>


        <!-- メインボタン -->
        <button
          class="landing-start-button"
          data-action="landing-start"
        >
          <span class="landing-play-icon">▶</span>
          <span>冒険をはじめる</span>
        </button>


        <!-- サブボタン -->
        <div class="landing-sub-buttons">

  <button
    class="landing-sub-button continue"
    data-action="landing-start"
  >
    👤 プレイヤーをえらぶ
  </button>

</div>

      </div>


      <!-- 下部 -->
      <div class="landing-bottom">

  <div class="landing-bottom-left">

    <button
      class="landing-settings"
      data-action="go"
      data-screen="sync"
    >
      ⚙ 引っ越し・設定
    </button>

    <a
      class="landing-contact"
      href="mailto:info.fukushi@allcare.co.jp?subject=${encodeURIComponent("【Maths-adventure】お問い合わせ")}&body=${encodeURIComponent(`Maths-adventureについてのお問い合わせ

【お問い合わせ内容】

`)}"
    >
      ✉ お問い合わせ
    </a>

  </div>

  <div class="landing-sync">
    ${A==="connected"?"☁️ データ同期済み":A==="syncing"?"⏳ 同期中":"💾 ローカルセーブ"}
  </div>

</div>


<div class="landing-creator">

  <img
    src="/images/fukushi-logo.png"
    alt="一般社団法人福祉でつながる会"
    class="landing-creator-logo"
  >

  <span>
    作成元：一般社団法人福祉でつながる会
  </span>

</div>
          
    </section>
  `}function Hi(){const w=Yo.find(C=>C.id===r),E=zu.filter(C=>C.world===r).sort((C,M)=>(C.sort??0)-(M.sort??0)),$=[...new Set(E.map(C=>C.unit))];return`
    <section class="panel">

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ WORLD
        </button>

        <h2>
          WORLD ${w.id}・${w.grade}
        </h2>

        <span></span>

      </div>


      ${$.map(C=>{const M=E.filter(L=>L.unit===C).sort((L,ee)=>(L.sort??0)-(ee.sort??0));return`
            <section class="stage-section">

              <h3>
                ${G(M[0].unitLabel)}
              </h3>


              <div class="stage-grid">

                ${M.map(L=>{const ee=L.name;return`
                        <button
                          class="
                            stage-button
                            stage-text-only
                            ${L.isBoss?"boss":""}
                          "
                          data-action="stage"
                          data-id="${G(L.id)}"
                        >

                          <span
                            class="stage-symbol"
                          >
                            ${L.isBoss?"👑":"⚔️"}
                          </span>


                          <span
                            class="stage-name"
                          >
                            ${G(ee)}
                          </span>

                        </button>
                      `}).join("")}

              </div>

            </section>
          `}).join("")}

    </section>
  `}function wn(){const w=s[a],E=_n(i),$=E?ae:!0;if(q)return`<section class="stack"><div class="panel hero game-over-panel"><div class="hero-icon">💥</div><h2>バリアがなくなった！</h2><p class="muted">${a} / ${s.length} 問まで進みました。</p></div><div class="life-display game-over-life"><span>💥</span><span>💥</span><span>💥</span></div><button class="button cyan" data-action="retry-stage">同じステージにもう一度挑戦</button><button class="button secondary" data-action="go" data-screen="world">ワールドへ戻る</button></section>`;const C=E?'data-action="replay-flash"':"";return`<section class="stack game-area">

  <!-- =====================================================
       全WORLD共通：単元タイトル
  ====================================================== -->

  <div class="game-unit-header">

    <div class="game-unit-title">
      ${G(i?.unitLabel??"")}・${G(i?.name??"")}
    </div>

  </div>


  <!-- =====================================================
       全WORLD共通：操作・進行状況
  ====================================================== -->

  <div class="toolbar game-toolbar">

    <button
      class="button secondary small"
      data-action="go"
      data-screen="world"
    >
      ◀ やめる
    </button>


    <div class="game-status">

      <div class="life-display">
  <span>${K>=1?"🛡️":"💥"}</span>
  <span>${K>=2?"🛡️":"💥"}</span>
  <span>${K>=3?"🛡️":"💥"}</span>
</div>

      <strong>
        ${a+1}/${s.length}
      </strong>

    </div>

  </div>
      ${Q?`<div class="wrong-notice">${Q}</div>`:""}
      <button
  class="question-card ${E?"flash-card":"persistent-card"} ${$?"showing":"hidden-question"}"
  ${C}
  ${E?"":'type="button"'}
>
  <div>

    <div class="question">
  ${$?jr(w):"？"}
</div>

  </div>
</button>
      <div class="partner-answer-zone">

  ${Yi()}

  <button
  class="partner-submit-button"
  data-action="answer"
>
  <span class="submit-answer-main">
    👣こたえの けってい
  </span>

  <span class="submit-answer-guide">
    このボタンを おしてね！
  </span>
</button>

</div>

<div class="answer-display">
  ${ct(w)?Qi(c):i?.type==="clock_24h"||i?.keypad==="clock"||i?.type?.startsWith("clock_")||c?It(c):fe?"こたえを えらんでね":"もんだいを みています"}
</div>

${Ji()}
      ${v==="correct"?'<div class="correct-feedback" aria-live="polite"><div class="correct-feedback-card"><svg class="red-pen-svg" viewBox="0 0 240 240" aria-hidden="true"><path class="red-pen-stroke" d="M190 49 C147 10 75 18 38 69 C1 120 29 194 96 211 C158 227 218 182 218 116 C218 84 206 62 190 49"/><path class="red-pen-check" d="M70 119 L101 151 L167 78"/></svg><strong>せいかい！</strong><span class="correct-exp">✨ +10 EXP</span></div></div>':""}
    </section>`}function Or(w,E){const $=E?.expression;if(!$)return!1;const C=At=>{const be=String(At??"");return be==="+"||be==="＋"?"+":be==="-"||be==="−"||be==="－"?"-":be==="*"||be==="×"?"*":be==="/"||be==="÷"?"/":be},L=String(w??"").replace(/[０-９]/g,At=>String.fromCharCode(At.charCodeAt(0)-65248)).replaceAll("＋","+").replaceAll("−","-").replaceAll("－","-").replaceAll("×","*").replaceAll("÷","/").replaceAll("＝","=").replaceAll("．",".").replace(/\s+/g,"").match(/^(\d+(?:\.\d+)?)([+\-*/])(\d+(?:\.\d+)?)=(\d+(?:\.\d+)?)$/);if(!L)return!1;const ee=Number(L[1]),te=C(L[2]),le=Number(L[3]),se=Number(L[4]),jt=Number($.left),zr=C($.operator),Kr=Number($.right),ko=Number($.result),Bt=(At,be)=>Number.isFinite(At)&&Number.isFinite(be)&&Math.abs(At-be)<1e-9;let qt;if(te==="+")qt=ee+le;else if(te==="-")qt=ee-le;else if(te==="*")qt=ee*le;else if(te==="/"){if(le===0)return!1;qt=ee/le}else return!1;return!Bt(qt,se)||te!==zr||!Bt(se,ko)?!1:!!(Bt(ee,jt)&&Bt(le,Kr)||$.commutative===!0&&Bt(ee,Kr)&&Bt(le,jt))}function Mr(w){const E=String(w).replace(/[^0-9.\-]/g,"");return E===""?NaN:Number(E)}function ct(w){const E=String(w?.kind??"");return E==="fraction-add-same-denominator"||E==="fraction-subtract-same-denominator"}function Lr(w){const E=String(w??""),$=E.split("/");return{denominator:$[0]??"",numerator:$.length>=2?$[1]:"",hasSeparator:E.includes("/")}}function Gn(w,E){const $=Lr(w);if(!$.hasSeparator||$.numerator===""||$.denominator==="")return!1;const C=Number($.numerator),M=Number($.denominator),L=Number(E?.answer),ee=Number(E?.denominator);return Number.isFinite(C)&&Number.isFinite(M)&&C===L&&M===ee}function Qi(w){const E=Lr(w);return`
    <div class="fraction-answer-input">


      <div class="fraction-answer-label">
        こたえ
      </div>


      <div class="fraction-answer-with-order">


        <div class="fraction-answer-value">


          <!-- 分子：② -->

          <div class="fraction-answer-row">

            <div class="fraction-answer-numerator">

              ${E.numerator!==""?G(E.numerator):"□"}

            </div>


            <div class="fraction-answer-order">
              ・・・・②
            </div>

          </div>


          <div class="fraction-answer-line">
          </div>


          <!-- 分母：① -->

          <div class="fraction-answer-row">

            <div class="fraction-answer-denominator">

              ${E.denominator!==""?G(E.denominator):"□"}

            </div>


            <div class="fraction-answer-order">
              ・・・・①
            </div>

          </div>


        </div>


      </div>


    </div>
  `}function It(w){const E=s[a]??null;if(E?.mode==="24h"){const C=String(w??"");return`
      <span
        class="
          clock-answer-value
          clock-24h-answer
        "
      >

        <span class="clock-answer-part">

          <strong>
            ${C!==""?G(C):"ーー"}
          </strong>

          <small>
            じ
          </small>

        </span>

      </span>
    `}if(E?.kind==="clock"&&E?.mode!=="24h"){const C=String(w??""),[M="",L=""]=C.split("|"),ee=M!==""?G(M):"ーー",te=L!==""?G(L):"ーー";return`
      <span class="clock-answer-value">

        <span class="clock-answer-part">

          <strong>
            ${ee}
          </strong>

          <small>
            じ
          </small>

        </span>


        <span class="clock-answer-part">

          <strong>
            ${te}
          </strong>

          <small>
            ふん
          </small>

        </span>

      </span>
    `}return G(String(w).replaceAll("morning","☀ あさ ").replaceAll("night","🌙 よる "))}function Ji(){const w=s[a]??null;return jv(i,{escapeHtml:G,inputEnabled:fe,input:c,question:w})}function Ce(){return e.unlockedCards.map(w=>{const E=w.lastIndexOf("_"),$=w.slice(0,E),C=w.slice(E+1),M=Zc($);return M?{key:w,card:M,rarity:C}:null}).filter(Boolean)}function Wn(){return Ce().find(w=>w.key===e.partnerKey)??null}function kt(w){if(!w)return null;const E=w.lastIndexOf("_");return E<=0?w:w.slice(0,E)}function Ut(w){if(!w)return 0;const E=e.partnerStudy??{};let $=0;return["N","SR","UR"].forEach(C=>{$+=Number(E[`${w}_${C}`]??0)}),$}function Xi(w){if(!w)return;e.partnerStudy=e.partnerStudy??{};const E=kt(w);E&&e.partnerStudy[E]===void 0&&(e.partnerStudy[E]=Ut(E))}function Ur(w){if(!w)return 0;const E=kt(w);if(!E)return 0;const $=e.partnerStudy?.[E];return $!==void 0?Number($??0):Ut(E)}function Ft(){if(!e.partnerKey)return;e.partnerStudy=e.partnerStudy??{},Xi(e.partnerKey);const w=kt(e.partnerKey);w&&(e.partnerStudy[w]=Number(e.partnerStudy[w]??0)+1)}function Fr(w){const E=Number(w??0);return E>=500?"伝説の相棒":E>=200?"冒険の盟友":E>=100?"たよれる相棒":E>=30?"なかよしパートナー":"はじめての相棒"}function Eo(w){const E=Number(w??0);return E<30?{title:"なかよしパートナー",target:30}:E<100?{title:"たよれる相棒",target:100}:E<200?{title:"冒険の盟友",target:200}:E<500?{title:"伝説の相棒",target:500}:null}function Hn(){return I==="correct"?"やったね！":I==="encourage"?"だいじょうぶ！ もういっかい！":I==="start"?"いっしょに がんばろう！":"みているよ！"}function Yi(){const w=Wn();if(!w)return`
      <div
        class="
          partner-companion
          empty
        "
      >

        <span>
          ⭐
        </span>

        <p>
          パートナーを えらぶと
          おうえんしてくれるよ！
        </p>

      </div>
    `;const E=Ur(w.key),$=Fr(E);return`
    <div
      class="
        partner-companion
        mood-${I}
        rarity-${w.rarity}
      "
    >

      <img
  src="${Qe(w.card,w.rarity)}"
  alt="${G(w.card.name)}"
  decoding="async"
  fetchpriority="high"
  loading="eager"
>

      <div>

        <small
          class="partner-title"
        >
          ⭐ ${G($)}
        </small>


        <strong>
          ${G(w.card.name)}
        </strong>


        <p>
          ${Hn()}
        </p>

      </div>

    </div>
  `}function jr(w){return $v(w,{escapeHtml:G})}function G(w){return String(w).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function lt(){const w=u?.rarity??"N";return u?.isNew,`
    <section class="stack">

      <div class="panel hero">

        <div class="hero-icon">
          🎉
        </div>

        <h2>
          クエストクリア！
        </h2>

        <p class="muted">
          ${h?p?"なにが でるかな……？":"カードをゲット！":"宝箱を開けて報酬を受け取ろう。"}
        </p>

      </div>


      ${h?p?`
              <div
                class="chest-opening-stage rarity-${w}"
              >

                <div class="chest-light"></div>
                <div class="chest-rays"></div>
                <div class="chest-sparkles"></div>

                <div class="opening-chest">
                  🎁
                </div>

                <strong class="chest-opening-text">
                  ${w==="UR"?"ま、まぶしい……！":w==="SR"?"すごい光だ……！":"なにが でるかな？"}
                </strong>

              </div>
            `:`
              <div class="card-reveal-stage rarity-${w}">
                ${Zi()}
              </div>
            `:`
            <button
              class="treasure-area"
              data-action="open-chest"
            >

              <div class="treasure-chest">
                🎁
              </div>

              <strong>
                タップして宝箱を開ける
              </strong>

            </button>
          `}


      ${_?`
            <button
              class="button cyan"
              data-action="go"
              data-screen="world"
            >
              ワールドへ戻る
            </button>

            <button
              class="button secondary"
              data-action="go"
              data-screen="collection"
            >
              図鑑を見る
            </button>
          `:""}

    </section>
  `}function Zi(){const w=Math.round(u.card.stats.hp*u.factor),E=Math.round(u.card.stats.atk*u.factor);return`
    <div class="reward-reveal">
      <p class="reward-label">
        ✨ ${u.rarity}カード獲得！
      </p>

      <article class="result-card rarity-${u.rarity}">

  ${u.isNew?'<div class="card-new-badge">NEW!</div>':""}

  <div class="card-shine"></div>
  <div class="holo-layer"></div>

  <img
  class="card-image"
  src="${Qe(u.card,u.rarity)}"
  alt="${G(u.card.name)}"
  decoding="async"
  fetchpriority="high"
>

${u.isNew?'<div class="new-badge">NEW!</div>':""}

        <div class="card-body">
          <p class="muted">
            ${u.rarity}・No.${String(u.card.number).padStart(3,"0")}
          </p>

          <h3 class="card-title">
            ${u.card.name}
          </h3>

          <p>
            ${u.card.description}
          </p>

          <div class="card-meta">
            <span>HP ${w}</span>
            <span>ATK ${E}</span>
          </div>
        </div>
      </article>
    </div>
  `}function es(){const w=Ce(),E=Wn(),$=E?Ur(E.key):0,C=E?Fr($):"",M=E?Eo($):null;return`
    <section class="stack">


      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ もどる
        </button>


        <h2>
          いっしょに べんきょうする パートナー
        </h2>


        <span></span>

      </div>


      <div class="panel partner-intro">

        ${E?`
              <div class="current-partner">

                <img
  src="${Qe(E.card,E.rarity)}"
  alt="${G(E.card.name)}"
  fetchpriority="high"
  decoding="async"
>

                <div>


                  <small>
                    いまの パートナー
                  </small>


                  <div class="partner-title-badge">
                    ⭐ ${G(C)}
                  </div>


                  <h3>
                    ${G(E.card.name)}
                  </h3>


                  <p>
                    いっしょに といた もんだい：
                    <strong>
                      ${$}
                    </strong>
                    もん
                  </p>


                  ${M?`
                        <p class="partner-next-title">

                          次の称号
                          「${G(M.title)}」まで

                          <strong>
                            ${Math.max(0,M.target-$)}
                          </strong>

                          もん！

                        </p>
                      `:`
                        <p class="partner-next-title max">
                          👑 最高の称号になりました！
                        </p>
                      `}


                  <button
                    class="button secondary small"
                    data-action="remove-partner"
                  >
                    はずす
                  </button>


                </div>

              </div>
            `:`
              <p>
                カードずかんで
                てにいれた モンスターから、
                すきな 1たいを えらべます。
              </p>
            `}

      </div>


      ${N?`
            <div class="notice">
              ${G(N)}
            </div>
          `:""}


      <div class="partner-grid">

        ${w.length?w.map(L=>{const ee=Ur(L.key),te=Fr(ee);return`
                    <article
                      class="
                        partner-choice
                        rarity-${L.rarity}

                        ${e.partnerKey===L.key?"selected":""}
                      "
                    >

                      <img
  src="${Qe(L.card,L.rarity)}"
  alt="${G(L.card.name)}"
  loading="lazy"
  decoding="async"
>

                      <div>

                        <small>
                          ${L.rarity}
                          ・No.${String(L.card.number).padStart(3,"0")}
                        </small>


                        <div class="partner-title-mini">
                          ⭐ ${G(te)}
                        </div>


                        <h3>
                          ${G(L.card.name)}
                        </h3>


                        <p>
                          ${ee}もん
                          いっしょに べんきょう
                        </p>


                        <button
                          class="
                            button
                            ${e.partnerKey===L.key?"secondary":"cyan"}
                          "

                          data-action="choose-partner"

                          data-key="${G(L.key)}"
                        >

                          ${e.partnerKey===L.key?"⭐ パートナーちゅう":"このこに する"}

                        </button>


                      </div>

                    </article>
                  `}).join(""):`
              <div class="panel empty-partners">

                <p>
                  まだ カードが ありません。
                </p>

                <p>
                  ステージを クリアして、
                  パートナーを みつけよう！
                </p>

              </div>
            `}

      </div>

    </section>
  `}function Br(){return`
    <section class="stack">
      <div class="toolbar">
        <button
          class="button secondary small"
          data-action="go"
          data-screen="title"
        >
          ◀ 戻る
        </button>

        <h2>カード図鑑</h2>

        <span>
          ${e.unlockedCards.length}/${Zr.length*3}
        </span>
      </div>

      <div class="collection-grid">
        ${Zr.flatMap(w=>["N","SR","UR"].map(E=>e.unlockedCards.includes(`${w.id}_${E}`)?`
                    <button
                      class="collection-card rarity-${E}"
                      data-action="zoom-card"
                      data-card-id="${w.id}"
                      data-rarity="${E}"
                    >
                      <div class="card-shine"></div>
                      <div class="holo-layer"></div>

                      <img
  class="card-image"
  src="${Qe(w,E)}"
  alt="${G(w.name)}"
  loading="lazy"
  decoding="async"
>

                      <div class="card-body">
                        <small>
                          ${E}・No.${String(w.number).padStart(3,"0")}
                        </small>

                        <h3 class="card-title">
                          ${w.name}
                        </h3>

                        <small>
                          タップで拡大 🔍
                        </small>
                      </div>
                    </button>
                  `:`
                    <div class="locked">
                      🔒
                      <br>
                      No.${String(w.number).padStart(3,"0")} ${E}
                    </div>
                  `)).join("")}
      </div>
    </section>
  `}function qr(){if(!g)return"";const w=g.card,E=g.rarity,$=E==="UR"?1.7:E==="SR"?1.3:1;return`
    <div class="zoom-overlay">
      <button
        class="zoom-close"
        data-action="close-zoom"
      >
        ✕ とじる
      </button>

      <div class="tilt-scene">
        <article
          class="zoom-card rarity-${E}"
          data-zoom-tilt
        >
          <div class="card-shine"></div>
          <div class="holo-layer"></div>

          <div class="zoom-card-header">
            <span>
              No.${String(w.number).padStart(3,"0")}
            </span>

            <strong>
              ${w.name}
            </strong>

            <span>
              ${E}
            </span>
          </div>

          <img
  class="zoom-card-image"
  src="${Qe(w,E)}"
  alt="${G(w.name)}"
  decoding="async"
  fetchpriority="high"
>

          <div class="zoom-card-body">
            <div class="card-meta">
              <span>
                HP ${Math.round(w.stats.hp*$)}
              </span>

              <span>
                ATK ${Math.round(w.stats.atk*$)}
              </span>
            </div>

            <p>
              ${w.description}
            </p>
          </div>
        </article>
      </div>

      <p class="zoom-guide">
        指でなぞるか、マウスを動かすとカードが傾いて光ります。
      </p>
    </div>
  `}function ts(w){if(!g)return;const E=n.querySelector("[data-zoom-tilt]");if(!E)return;const $=E.getBoundingClientRect(),C=w.clientX-$.left-$.width/2,M=w.clientY-$.top-$.height/2;E.style.transform=`rotateX(${-M/($.height/2)*16}deg) rotateY(${C/($.width/2)*16}deg) scale(1.03)`}function ns(w){if(!g||!w.touches.length)return;w.preventDefault();const E=w.touches[0],$=n.querySelector("[data-zoom-tilt]");if(!$)return;const C=$.getBoundingClientRect(),M=E.clientX-C.left-C.width/2,L=E.clientY-C.top-C.height/2;$.style.transform=`rotateX(${-L/(C.height/2)*16}deg) rotateY(${M/(C.width/2)*16}deg) scale(1.03)`}function Io(){const w=Je();return`
    <section class="stack transfer-screen">

      <!-- =========================
           ヘッダー
      ========================== -->

      <div class="toolbar">

        <button
          class="button secondary small"
          data-action="go"
          data-screen="landing"
        >
          ◀ トップへ
        </button>

        <h2>
          引っ越し・設定
        </h2>

        <span></span>

      </div>


      ${Up()?"":`
            <div class="notice">
              Firebase設定が未入力です。
              引っ越しコード機能は現在利用できません。
            </div>
          `}


      <!-- =========================
           プレイヤー設定
      ========================== -->

      ${w?`
            <section class="panel transfer-section">

              <div class="transfer-section-heading">

                <div class="transfer-section-icon">
                  👤
                </div>

                <div>
                  <h3>
                    プレイヤー設定
                  </h3>

                  <p class="muted">
                    今つかっている名前
                  </p>
                </div>

              </div>


              <div class="current-player-name">
                🧙
                <strong>
                  ${G(w.nickname??"プレイヤー")}
                </strong>
              </div>


              <div class="rename-player-form">

                <input
                  class="input nickname-input"
                  data-rename-input
                  maxlength="20"
                  autocomplete="off"
                  placeholder="新しいニックネーム"
                  value="${G(w.nickname??"")}"
                >

                <button
                  class="button secondary"
                  data-action="player-rename-submit"
                >
                  名前を変更する
                </button>

              </div>

            </section>
          `:`
            <section class="panel transfer-section">

              <p class="muted">
                プレイヤーを選ぶと、
                名前の変更ができます。
              </p>

            </section>
          `}

            ${y?`
            <div class="notice">
              ${G(y)}
            </div>
          `:""}


      ${ce?`
            <div class="error">
              ${G(ce)}
            </div>
          `:""}

            <!-- =========================
           保護者向け学習レポート
      ========================== -->

      ${w?`
            <section class="panel transfer-section">

              <div class="transfer-section-heading">

                <div class="transfer-section-icon">
                  📊
                </div>

                <div>

                  <h3>
                    保護者向け学習レポート
                  </h3>

                  <p class="muted">
                    学習結果をメールで受け取れます。
                  </p>

                </div>

              </div>


              <label>
                保護者メールアドレス
              </label>


              <input
                class="input"
                type="email"
                data-parent-report-email
                autocomplete="email"
                placeholder="parent@example.com"
                value="${G(ge.email??"")}"
              >

<div class="parent-report-option-title">
  受け取るレポートを選んでください
</div>


<div class="parent-report-options">


  <!-- 学習終了後 -->

  <label
    class="
      parent-report-option-card
      ${ge.reportMode==="after_learning"?"selected":""}
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="after_learning"
      ${ge.reportMode==="after_learning"?"checked":""}
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      ✉️
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          学習終了後に受け取る
        </strong>

        <span class="parent-report-recommend">
          おすすめ
        </span>

      </span>


      <small>
        最後の学習から約15分後に、
        その日の学習内容をメールでお届けします。
      </small>

    </span>


    <span class="parent-report-option-badge">
      学習後
    </span>

  </label>



  <!-- 1週間まとめ -->

  <label
    class="
      parent-report-option-card
      ${ge.reportMode==="weekly"?"selected":""}
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="weekly"
      ${ge.reportMode==="weekly"?"checked":""}
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      📅
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          1週間まとめて受け取る
        </strong>

      </span>


      <small>
        毎週日曜日に、
        1週間の学習内容をまとめてお届けします。
      </small>

    </span>


    <span class="parent-report-option-badge">
      毎週日曜
    </span>

  </label>



  <!-- 学習終了後＋週間 -->

  <label
    class="
      parent-report-option-card
      ${ge.reportMode==="after_learning_and_weekly"?"selected":""}
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="after_learning_and_weekly"
      ${ge.reportMode==="after_learning_and_weekly"?"checked":""}
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      📊
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          学習終了後＋1週間まとめ
        </strong>

      </span>


      <small>
        学習後のレポートと、
        毎週日曜日の週間レポートを
        両方受け取ります。
      </small>

    </span>


    <span class="parent-report-option-badge">
      両方
    </span>

  </label>



  <!-- 通知OFF -->

  <label
    class="
      parent-report-option-card
      ${ge.reportMode==="off"?"selected":""}
    "
  >

    <input
      type="radio"
      name="parent-report-mode"
      value="off"
      ${ge.reportMode==="off"?"checked":""}
    >


    <span class="parent-report-radio-mark">
    </span>


    <span class="parent-report-option-icon">
      🔕
    </span>


    <span class="parent-report-option-content">

      <span class="parent-report-option-heading">

        <strong>
          受け取らない
        </strong>

      </span>


      <small>
        保護者向け学習レポートの
        メール通知を停止します。
      </small>

    </span>


    <span class="parent-report-option-badge">
      OFF
    </span>

  </label>


</div>
              ${Ge?`
                    <div class="notice">
                      ${G(Ge)}
                    </div>
                  `:""}


              ${Se?`
                    <div class="error">
                      ${G(Se)}
                    </div>
                  `:""}


              <button
                class="button cyan"
                data-action="parent-report-save"
              >
                学習レポート設定を保存
              </button>


              ${ge.email?`
                    <div class="parent-report-verification">

                      ${ge.emailVerified?`
                          
    <div class="notice">
      ✅ メールアドレス確認済み
    </div>
  `:`
                            <div class="notice">
                              📩 メールアドレスはまだ確認されていません。
                            </div>

                            <button
                              class="button secondary"
                              data-action="parent-report-verify"
                            >
                              ✉️ 確認メールを送る
                            </button>

                            <p class="muted">
                              確認メールにある
                              「メールアドレスを確認」
                              を押してください。
                            </p>
                          `}

                    </div>
                  `:""}

            </section>
          `:""}

      <!-- =========================
           引っ越し説明
      ========================== -->

      <section class="panel transfer-guide">

        <div class="transfer-guide-title">

          <span class="transfer-guide-icon">
            📱
          </span>

          <div>
            <h3>
              引っ越しコードとは？
            </h3>

            <p>
  今までの冒険を、
  ほかの端末へ移すための
  6桁のコードです。
</p>

<p class="transfer-player-guide">
  👤 引っ越しコードは
  <strong>プレイヤー1人につき1つ</strong>
  発行します。
</p>

<p class="transfer-player-guide">
  プレイヤーが2人以上いるときは、
  それぞれのプレイヤーを選んで
  引っ越しコードを発行してください。
</p>
          </div>

        </div>


        <div class="transfer-data-list">

          <strong>
            引き継がれるもの
          </strong>

          <div class="transfer-data-items">

            <span>👤 なまえ</span>
            <span>🗺️ 学習の進み具合</span>
            <span>🃏 集めたカード</span>
            <span>💎 ジェム</span>
            <span>⭐ パートナー</span>

          </div>

        </div>

      </section>


      <!-- =========================
           2カラム
      ========================== -->

      <div class="transfer-columns">


        <!-- -------------------------
             この端末から
        -------------------------- -->

        <section class="panel transfer-box transfer-export">

          <div class="transfer-step-number">
            1
          </div>

          <div class="transfer-box-icon">
            📤
          </div>

          <h3>
            この端末から
            <br>
            引っ越す
          </h3>

          <p class="muted">
            今まで遊んでいた端末で
            こちらを使います。
          </p>


          ${w?`
                <div class="transfer-player-preview">

                  <small>
                    引っ越すプレイヤー
                  </small>

                  <strong>
                    🧙 ${G(w.nickname??"プレイヤー")}
                  </strong>

                </div>
              `:`
                <div class="notice">
                  先にプレイヤーを
                  選んでください。
                </div>
              `}


          <button
            class="button transfer-create-button"
            data-action="transfer-create"
            ${w?"":"disabled"}
          >
            🔑 6桁コードを発行する
          </button>

                    ${V?`
                <div class="transfer-issued-code">

                  <small>
                    あなたの引っ越しコード
                  </small>

                  <strong>
                    ${G(V)}
                  </strong>

                  <p>
                    このコードを、
                    新しい端末の
                    「6桁の引っ越しコード」
                    入力画面に入力してね。
                  </p>

                  <p class="transfer-code-expire">
                    ⏰ このコードは
                    10分間だけ使えます。
                  </p>

                </div>
              `:""}

          <p class="transfer-small-note">
            発行したコードを、
            新しい端末で入力してください。
          </p>

        </section>


        <!-- -------------------------
             この端末へ
        -------------------------- -->

        <section class="panel transfer-box transfer-import">

          <div class="transfer-step-number">
            2
          </div>

          <div class="transfer-box-icon">
            📥
          </div>

          <h3>
            この端末へ
            <br>
            引き継ぐ
          </h3>

          <p class="muted">
            新しく使う端末で
            こちらを使います。
          </p>


          <label
            class="transfer-code-label"
            for="transfer-code-input"
          >
            6桁の引っ越しコード
          </label>


          <input
            id="transfer-code-input"
            class="input transfer-code-input"
            data-transfer-input
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="6"
            autocomplete="one-time-code"
            placeholder="123456"
          >


          <button
            class="button cyan transfer-use-button"
            data-action="transfer-use"
          >
            📲 データを引き継ぐ
          </button>


          <p class="transfer-small-note">
            引き継ぎが完了すると、
            引っ越し元の名前も
            一緒に復元されます。
          </p>

        </section>

      </div>


      <!-- =========================
           メッセージ
      ========================== -->

      ${N?`
            <div class="sync-code transfer-message">
              ${G(N)}
            </div>
          `:""}


      ${O?`
            <div class="error transfer-error">
              ${G(O)}
            </div>
          `:""}


      <!-- =========================
           注意事項
      ========================== -->

      <section class="panel transfer-notes">

        <h3>
          ⚠️ 引っ越しするときの注意
        </h3>

        <ul>
          <li>
            引っ越しコードは、
            ほかの人に教えないでください。
          </li>

          <li>
            新しい端末では
            「この端末へ引き継ぐ」から
            コードを入力します。
          </li>

          <li>
            名前・カード・ジェム・
            学習の進み具合などが
            引き継がれます。
          </li>

          <li>
            引っ越しが終わったら、
            名前やカードが正しいか
            確認してください。
          </li>

          <li>
  プレイヤーが2人以上いる場合は、
  1人ずつ引っ越しコードを発行して
  新しい端末へ引き継いでください。
</li>

<li>
  別のプレイヤーを引っ越しても、
  すでに引き継いだプレイヤーの
  データは消えません。
</li>

<li>
  同じプレイヤーをもう一度
  引っ越した場合は、
  そのプレイヤーのデータが
  新しい内容に更新されます。
</li>
        </ul>

      </section>

    </section>
  `}const Qe=(w,E)=>w?.images?.[E]??w?.images?.N??w?.image??""}lk(document.querySelector("#app"));
