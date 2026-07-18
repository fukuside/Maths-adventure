import { randomInt as r, moneyItem, shuffle } from "../helpers.js";
export default {
  types: ["money_sum"],
  build(stage) {
    const allowed=stage.denominations??[1,5,10,50,100,500];
    const count=r(stage.minItems??2,stage.maxItems??4), items=[];
    const bills=allowed.filter(v=>v>=1000), coins=allowed.filter(v=>v<1000);
    if (bills.length && Math.random()<(stage.billChance??0.65)) items.push(moneyItem(bills[r(0,bills.length-1)]));
    while(items.length<count){ const pool=coins.length?coins:allowed; items.push(moneyItem(pool[r(0,pool.length-1)])); }
    return { kind:"money", prompt:"ぜんぶで いくら？", items:shuffle(items), answer:items.reduce((s,x)=>s+x.value,0), uniqueKey:items.map(x=>x.value).sort((a,b)=>a-b).join("-") };
  }
};
