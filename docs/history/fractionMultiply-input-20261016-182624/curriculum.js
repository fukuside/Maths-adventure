import {seniorFraction} from '../../../../core/senior-fraction.js';
import {seniorStory} from '../../../../core/senior-story.js';
import {fractionWork} from '../../../../core/fraction-work.js';
import {decimalMultiplyDivideQuestion} from '../../../../core/written-decimal-muldiv.js';
import {divideGridQuestion} from '../../../../core/written-divide-grid.js';
import {writtenQuestion} from '../../../../core/written-question.js';
import {geometryModels,geometryQuestion} from '../../../../core/geometry-question.js';
import {largeNumberQuestion} from '../../../../core/large-number-question.js';
const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[r(0, a.length - 1)];
const clean = n => Number(n.toFixed(6));
const gcd = (a,b) => b ? gcd(b,a%b) : a;
const fraction = (n,d) => { const g=gcd(n,d); return `${n/g}/${d/g}`; };
const models = {
  frequency: () => {const values=[0,10,20,30,39,...Array.from({length:10},()=>r(0,39))],counts=Array.from({length:4},(_,i)=>values.filter(v=>v>=i*10&&v<(i+1)*10).length),target=r(0,3),chart=Math.random()<.5;return ['読書した時間を調べました。'+target*10+'分以上'+(target+1)*10+'分未満の人は何人？',counts[target],'「以上」はその数をふくみ、「未満」はその数をふくまないよ。10分は10分以上20分未満に入るよ。',chart?{histogram:counts,records:values}:{table:[['時間（分）','人数'],...counts.map((n,i)=>[i*10+'以上'+(i+1)*10+'未満',n])],records:values}];},
  number20: () => { const b=r(0,10); return [`10と${b}をあわせた数は？`,10+b,'十のまとまりと、ばらの数をあわせよう。']; },
  number100: () => { const a=r(1,9),b=r(0,9); return [`10が${a}こ、1が${b}こ。いくつ？`,a*10+b,'10のまとまりを数えてから、1の数をたそう。']; },
  order: () => { const a=r(2,95); return [`${a}の次の数は？`,a+1,'数は1ずつふえるよ。']; },
  compareLength: () => { const a=r(2,12),b=r(2,12); return [`同じ大きさのブロックを、赤のリボンには${a}こ、青には${b}こ並べました。長いほうには何こ並んでいますか？`,Math.max(a,b),'同じものを並べると、数の多いほうが長いよ。']; },
  shapeCount: () => { const a=r(1,6),b=r(1,6); return [`三角の積み木が${a}こ、四角の積み木が${b}こ。三角の積み木は何こ？`,a,'形に注目してなかまを数えよう。']; },
  pictureData: () => { const a=r(1,9),b=r(1,9); return [`好きなくだもの調べ：りんご ${a}人、みかん ${b}人。あわせて何人？`,a+b,'それぞれの人数をあわせよう。',{table:[['くだもの','人数'],['りんご',a],['みかん',b]]}]; },
  large2: () => { const a=r(1,9),b=r(0,9),c=r(0,9),d=r(0,9); return [`千が${a}こ、百が${b}こ、十が${c}こ、一が${d}こ。いくつ？`,a*1000+b*100+c*10+d,'同じ位の数をまとめよう。']; },
  writtenAdd: () => { const a=r(100,499),b=r(100,499); return [`${a}＋${b}はいくつ？`,a+b,'一の位から、同じ位どうしをたそう。繰り上がりも忘れずに。']; },
  writtenSubtract: () => { const a=r(400,999),b=r(100,399); return [`${a}−${b}はいくつ？`,a-b,'位をそろえ、一の位からひこう。必要なら上の位から借りよう。']; },
  length2: () => { const a=r(1,8),b=r(1,9); return [`${a}cm ${b}mmは何mm？`,a*10+b,'1cm＝10mm。']; },
  capacity: () => { const a=r(1,8),b=r(1,9); return [`${a}L ${b}dLは何dL？`,a*10+b,'1L＝10dL。']; },
  half2: () => { const a=r(2,15)*2; return [`同じ大きさの折り紙${a}まいを、2人で半分ずつ分けます。1人は何まい？`,a/2,'半分は、同じ大きさに2つに分けた1つ分だよ。']; },
  rectangle2: () => { const a=r(2,12),b=r(2,12); return [`長方形を${a}こ、三角形を${b}こ並べました。長方形の角を全部あわせると何こ？`,a*4,'長方形の角は4つ。']; },
  large3: () => { const a=r(1,9),b=r(1,99); return [`一万が${a}こ、百が${b}こ。あわせていくつ？`,a*10000+b*100,'一万のまとまりと百のまとまりをあわせよう。']; },
  writtenMultiply: () => { const a=r(12,99),b=r(2,9); return [`${a}×${b}はいくつ？`,a*b,'一の位、十の位の順にかけよう。']; },
  remainder: () => { const d=r(2,9),q=r(2,9),m=r(1,d-1); return [`${d*q+m}÷${d}のあまりは？`,m,'あまりは、わる数より小さくなるよ。']; },
  length3: () => { const a=r(1,9),b=r(1,9)*100; return [`${a}km ${b}mは何m？`,a*1000+b,'1km＝1000m。']; },
  weight: () => { const a=r(1,9),b=r(1,9)*100; return [`${a}kg ${b}gは何g？`,a*1000+b,'1kg＝1000g。']; },
  seconds: () => { const a=r(1,8),b=r(1,59); return [`${a}分${b}秒は何秒？`,a*60+b,'1分＝60秒。']; },
  circle: () => { const a=r(2,25); return [`半径${a}cmの円の直径は何cm？`,a*2,'直径は半径の2倍。']; },
  triangle3: () => { const a=r(2,15); return [`3つの辺が同じ長さの正三角形です。1つの辺が${a}cmです。3つの辺の長さを全部たすと、何cm？`,a*3,'正三角形の3つの辺は同じ長さ。同じ長さを3回たそう。']; },
  barData: () => { const a=r(2,20),b=r(2,20),c=r(2,20); return [`図書室で借りた本：月曜${a}冊、火曜${b}冊、水曜${c}冊。いちばん多い日は何冊？`,Math.max(a,b,c),'棒の高さは冊数を表すよ。',{bars:[['月',a],['火',b],['水',c]]}]; },
  boxEquation: () => { const a=r(2,50),b=r(2,50); return [`□＋${a}＝${a+b}。□はいくつ？`,b,'たした数をひくと、もとの数がわかるよ。']; },
  fractionCompare3: () => { const d=r(4,12),low=r(1,d-2),high=r(low+1,d-1),reverse=r(0,1),a=reverse?high:low,b=reverse?low:high; return [`${a}/${d}と${b}/${d}を比べます。大きいほうの分子はいくつ？`,Math.max(a,b),'分母が同じなら、分子が大きいほうが大きいよ。']; },
  large4: () => { const a=r(1,9),b=r(1,9); return [`${a}億${b}千万は、何千万？`,a*10+b,'1億＝10千万。']; },
  rounding: () => { const a=r(101,999); return [`${a}を十の位までの概数にします。四捨五入すると？`,Math.round(a/10)*10,'一の位が5以上なら切り上げ、4以下なら切り捨て。']; },
  writtenDivide: () => { const a=r(11,39),b=r(11,39); return [`${a*b}÷${a}はいくつ？`,b,'何十がいくつ入るか見当をつけて、商を考えよう。']; },
  decimalPlaces4: () => { const a=r(1,9),b=r(1,9),c=r(1,9); return [`${a}.${b}${c}の100分の1の位の数字は？`,c,'小数点の右から2つ目が100分の1の位。']; },
  decimalIntMultiply: () => { const a=r(11,89),b=r(2,9); return [`${(a/10).toFixed(1)}×${b}はいくつ？`,clean(a*b/10),'整数として計算してから、小数点の位置を考えよう。']; },
  decimalIntDivide: () => { const a=r(2,9),b=r(11,39); return [`${(a*b/10).toFixed(1)}÷${a}はいくつ？`,clean(b/10),'小数点の位置をそろえてわろう。']; },
  mixedFraction4: () => {const d=r(3,12),whole=r(1,5),n=r(1,d-1),improper=whole*d+n,mode=r(0,4);if(mode>=3){const otherWhole=r(1,5),otherN=r(1,d-1),other=otherWhole*d+otherN,subtract=mode===4,left=subtract?Math.max(improper,other):improper,right=subtract?Math.min(improper,other):other,show=v=>Math.floor(v/d)+'と'+(v%d)+'/'+d,op=subtract?'−':'＋',result=subtract?left-right:left+right;return [show(left)+op+show(right)+'。答えを分母'+d+'の分数で表すと、分子はいくつ？',result,'まず整数の部分も分母'+d+'の分数に直そう。同じ分母のまま、分子どうしを'+(subtract?'ひこう。':'たそう。'),{table:[['計算する式','答え（分母はそのまま）'],[show(left)+op+show(right),'□/'+d]],mixedOperation:{left,right,denominator:d,subtract}}];}if(mode===0)return [whole+'と'+n+'/'+d+'を、分母'+d+'の仮分数にします。分子はいくつ？',improper,'整数1は'+d+'/'+d+'。整数部分を同じ分母の分数に直して、分子をたそう。',{table:[['帯分数','仮分数'],[whole+'と'+n+'/'+d,'□/'+d]]}];if(mode===1)return [improper+'/'+d+'を帯分数にします。整数の部分はいくつ？',whole,'分子を分母でわろう。商が整数の部分、あまりが分子になるよ。',{table:[['仮分数','帯分数'],[improper+'/'+d,'□と'+n+'/'+d]]}];return [improper+'/'+d+'を帯分数にします。整数は'+whole+'です。残った分数の分子はいくつ？',n,'整数'+whole+'の分は分子で'+(whole*d)+'。もとの分子から引くと、残りの分子がわかるよ。',{table:[['仮分数','帯分数'],[improper+'/'+d,whole+'と□/'+d]]}];},
  angle: () => { const a=r(1,17)*5; return [`直角90°を2つの角に分けました。片方が${a}°なら、もう片方は何度？`,90-a,'2つの角をあわせると90°だよ。']; },
  areaRectangle: () => { const a=r(2,20),b=r(2,20); return [`たて${a}cm、横${b}cmの長方形。面積は何cm²？`,a*b,'長方形の面積＝たて×横。',{rectangle:[a,b]}]; },
  lineData: () => { const a=r(5,24),b=r(a+1,35); return [`気温が朝${a}℃から昼${b}℃へ上がりました。何℃上がった？`,b-a,'あとからの気温から、はじめの気温をひこう。',{table:[['時間','気温'],['朝',`${a}℃`],['昼',`${b}℃`]]}]; },
  orderOperations: () => { const a=r(2,12),b=r(2,9),c=r(2,9); return [`${a}＋${b}×${c}はいくつ？`,a+b*c,'かけ算を先に計算しよう。']; },
  decimalMultiply5: () => { const a=r(11,49),b=r(11,49); return [`${(a/10).toFixed(1)}×${(b/10).toFixed(1)}はいくつ？`,clean(a*b/100),'積の小数点の位置に気をつけよう。']; },
  decimalDivide5: () => { const a=r(2,9),b=r(11,49); return [`${clean(a*b/100)}÷${a/10}はいくつ？`,clean(b/10),'わる数とわられる数を同じ倍にして、わる数を整数にしよう。']; },
  multiple: () => { const a=r(2,12),b=r(2,12); return [`${a}と${b}の最小公倍数は？`,a*b/gcd(a,b),'2つの数に共通する倍数のうち、いちばん小さい数。']; },
  divisor: () => { const a=r(2,12),b=r(2,12),c=r(2,5); return [`${a*c}と${b*c}の最大公約数は？`,gcd(a*c,b*c),'2つの数に共通する約数のうち、いちばん大きい数。']; },
  reduce: () => { const n=r(1,8),d=r(n+1,12),c=r(2,6); return [`${n*c}/${d*c}を約分すると？`,fraction(n,d),'分子と分母を、同じ数でわろう。']; },
  fractionAdd5: () => { const a=r(2,12),b=r(2,12); return [`1/${a}＋1/${b}を計算し、約分すると？`,fraction(a+b,a*b),'分母をそろえてからたそう。']; },
  fractionSub5: () => { const a=r(2,8),b=r(a+1,15); return [`1/${a}−1/${b}を計算し、約分すると？`,fraction(b-a,a*b),'通分してから分子をひこう。']; },
  percent: () => { const total=r(2,20)*10,p=r(1,9)*10; return [`${total}人の${p}％は何人？`,total*p/100,'百分率を100でわって、小数の割合にしよう。']; },
  ratio5: () => { const total=r(2,20)*10,p=r(1,9); return [`全部${total}こ、そのうち${total*p/10}こが赤です。赤の割合を小数で表すと？`,p/10,'割合＝比べる量÷もとにする量。']; },
  unitAmount: () => { const a=r(2,12),b=r(2,12); return [`${a}m²の畑で${a*b}kgとれました。1m²あたり何kg？`,b,'とれた量÷面積で、1m²あたりの量を求めよう。']; },
  speed: () => { const a=r(2,8),b=r(20,90); return [`${a}時間で${a*b}km進みました。時速何km？`,b,'速さ＝道のり÷時間。']; },
  average: () => { const a=r(10,40),b=r(1,9); return [`3日間の読書は${a-b}ページ、${a}ページ、${a+b}ページ。1日平均何ページ？`,a,'合計を、日数でわろう。',{table:[['日','ページ'],['1日目',a-b],['2日目',a],['3日目',a+b]]}]; },
  triangleArea: () => { const a=r(2,12)*2,b=r(2,15); return [`底辺${a}cm、高さ${b}cmの三角形。面積は何cm²？`,a*b/2,'三角形の面積＝底辺×高さ÷2。',{triangle:[a,b]}]; },
  parallelogramArea: () => { const a=r(2,20),b=r(2,20); return [`底辺${a}cm、高さ${b}cmの平行四辺形。面積は何cm²？`,a*b,'底辺×高さ。ななめの辺の長さとは区別しよう。']; },
  trapezoidArea: () => { const a=r(2,10)*2,b=r(11,20)*2,h=r(2,12); return [`上底${a}cm、下底${b}cm、高さ${h}cmの台形。面積は何cm²？`,(a+b)*h/2,'台形の面積＝（上底＋下底）×高さ÷2。']; },
  rhombusArea: () => { const a=r(2,10)*2,b=r(2,15); return [`2本の対角線が${a}cmと${b}cmのひし形。面積は何cm²？`,a*b/2,'ひし形の面積＝対角線×対角線÷2。']; },
  volume5: () => { const a=r(2,12),b=r(2,12),c=r(2,12); return [`たて${a}cm、横${b}cm、高さ${c}cmの直方体。体積は何cm³？`,a*b*c,'直方体の体積＝たて×横×高さ。']; },
  circumference: () => { const a=r(2,20); return [`直径${a}cmの円。円周率を3.14として、円周は何cm？`,clean(a*3.14),'円周＝直径×円周率。']; },
  congruent: () => { const a=r(2,20),b=r(2,20); return [`合同な2つの三角形があります。対応する辺ABは${a}cm、別の辺BCは${b}cmです。ABに対応する辺は何cm？`,a,'合同な図形では、対応する辺の長さと角の大きさが等しいよ。']; },
  percentData: () => { const a=r(1,8)*10,b=100-a,total=r(1,9)*100,pie=Math.random()<.5; return ['好きな遊びを調べた'+(pie?'円グラフ':'帯グラフ')+'です。調べた人は'+total+'人。外遊びが好きな人は何人？',total*a/100,'グラフ全体が100％。外遊びの割合を読んで、全体の人数にかけよう。',pie?{pie:[['外遊び',a],['室内遊び',b]]}:{band:[['外遊び',a],['室内遊び',b]]}]; },
  fractionTimesInt: () => { const a=r(1,8),b=r(a+1,12),c=r(2,9); return [`${a}/${b}×${c}を計算し、約分すると？`,fraction(a*c,b),'分子に整数をかけよう。']; },
  fractionDivideInt: () => { const a=r(1,8),b=r(a+1,12),c=r(2,9); return [`${a}/${b}÷${c}を計算し、約分すると？`,fraction(a,b*c),'整数を逆数の分数にしてかけよう。']; },
  fractionMultiply: () => { const a=r(1,8),b=r(a+1,12),c=r(1,8),d=r(c+1,12); return [`${a}/${b}×${c}/${d}を計算し、約分すると？`,fraction(a*c,b*d),'分子どうし、分母どうしをかけよう。']; },
  fractionDivide: () => { const a=r(1,8),b=r(a+1,12),c=r(1,8),d=r(c+1,12); return [`${a}/${b}÷${c}/${d}を計算し、約分すると？`,fraction(a*d,b*c),'わる分数を逆数にしてかけよう。']; },
  fractionDecimal: () => { const a=r(1,9),b=r(1,9); return [`${a}/10＋${(b/10).toFixed(1)}を計算し、小数で答えると？`,clean((a+b)/10),'分数と小数のどちらかにそろえよう。']; },
  ratio6: () => { const a=r(2,8),b=r(2,8),c=r(2,12); return [`赤と青の数の比は${a}：${b}。赤が${a*c}こなら、青は何こ？`,b*c,'比の両方を同じ倍にしよう。']; },
  proportion: () => { const a=r(2,15),b=r(4,12); if(Math.random()<.5){const x=r(1,6);return ['比例のグラフです。xが'+x+'のとき、yはいくつ？',a*x,'点から左へたどって、yの目もりを読もう。',{relationGraph:{points:Array.from({length:7},(_,i)=>[i,a*i]),xStep:1,yStep:a,xMax:6,yMax:6*a,targetX:x}}];}return ['表のxとyは比例しています。xが'+b+'のとき、？に入るyの数は？',a*b,'xが何倍になると、yも同じ倍になるよ。',{table:[['x',1,2,3,b],['y',a,2*a,3*a,'？']]}]; },
  inverse: () => { const a=r(2,8),b=r(2,8),total=6*a*b; if(Math.random()<.5){const factors=[1,2,3,6],factor=factors[r(0,3)];return ['反比例のグラフです。xが'+(a*factor)+'のとき、yはいくつ？',6*b/factor,'点から左へたどって、yの目もりを読もう。',{relationGraph:{points:factors.map(f=>[a*f,6*b/f]),xStep:a,yStep:b,xMax:6*a,yMax:6*b,targetX:a*factor,pointsOnly:true}}];}return ['表のxとyは反比例しています。xが'+(3*a)+'のとき、？に入るyの数は？',2*b,'xが2倍、3倍になると、yは半分、3分の1。xとyの積も調べよう。',{table:[['x',a,2*a,3*a,6*a],['y',6*b,3*b,'？',b]]}]; },
  letter: () => { const a=r(2,15),b=r(2,15),c=r(1,20); return [`x＝${a}のとき、${b}×x＋${c}はいくつ？`,a*b+c,'文字に数をあてはめて計算しよう。']; },
  circleArea: () => { const a=r(2,20); return [`半径${a}cmの円。円周率を3.14として、面積は何cm²？`,clean(a*a*3.14),'円の面積＝半径×半径×円周率。']; },
  scale: () => { const a=r(2,20),b=r(2,10); return [`元の図の辺は${a}cmです。${b}倍の拡大図で、対応する辺は何cm？`,a*b,'対応する辺の長さを、同じ倍にしよう。']; },
  symmetry: () => { const a=r(1,20); return [`線対称な図形です。点Aは対称の軸から${a}cm離れています。対応する点Bも、軸から何cm離れていますか？`,a,'対応する2点は、対称の軸から同じ距離にあるよ。']; },
  prismVolume: () => { const a=r(2,30),b=r(2,20); return [`角柱の底面積は${a}cm²、高さは${b}cm。体積は何cm³？`,a*b,'角柱・円柱の体積＝底面積×高さ。']; },
  cylinderVolume: () => { const a=r(2,10),b=r(2,20); return [`半径${a}cm、高さ${b}cmの円柱。円周率を3.14として、体積は何cm³？`,clean(a*a*3.14*b),'円柱の底面積は円の面積。底面積×高さで求めよう。']; },
  combinations: () => { if(Math.random()<.5){const n=r(3,9);return ['1から'+n+'までのカードから2まい選び、ならべて2けたの整数を作ります。同じカードは2回使えません。何通りできますか？',n*(n-1),'十の位を1つ決めると、一の位には残りのカードを使える。十の位を順番に変えて整理しよう。',{table:[['十の位','一の位に使えるカード'],...Array.from({length:n},(_,i)=>[i+1,Array.from({length:n},(_,j)=>j+1).filter(v=>v!==i+1).join('、')])]}];} const a=r(2,7),b=r(2,7);return ['上着'+a+'種類とズボン'+b+'種類から1つずつ選びます。組み合わせは全部で何通り？',a*b,'上着を1つずつ順番に決めて、ズボンの組み合わせをもれなく数えよう。',{table:[['上着','合わせられるズボン'],...Array.from({length:a},(_,i)=>['上着'+(i+1),Array.from({length:b},(_,j)=>j+1).join('、')])]}]; },
  median: () => {const n=pick([5,6]),values=Array.from({length:n},()=>r(10,50)),ordered=[...values].sort((a,b)=>a-b),middle=Math.floor(n/2),answer=n%2?ordered[middle]:(ordered[middle-1]+ordered[middle])/2;return ['記録は'+values.join('、')+'です。小さい順に並べたときの中央値はいくつ？',answer,n%2?'小さい順に並べて、真ん中の記録を探そう。':'小さい順に並べて、真ん中の2つの記録の平均を求めよう。',{table:[['番号',...values.map((_,i)=>i+1)],['記録',...values]]}];},
  mode: () => {const start=r(1,30),target=r(0,3),values=Array.from({length:4},(_,i)=>start+i),counts=values.map((_,i)=>i===target?r(6,9):r(1,5));return ['表は記録と、その記録になった人数です。最頻値（いちばん多く現れる記録）はいくつ？',values[target],'人数が最も多い行を見つけ、その行の「記録」を答えよう。人数そのものではないよ。',{table:[['記録','人数'],...values.map((v,i)=>[v,counts[i]])]}];}
};

export const curriculumModels = models;
export default {
  types: [...new Set([...Object.keys(models),...geometryModels])].map(x => `curriculum_${x}`),
  build(stage) {
    const model = stage.type.replace('curriculum_','');
    if(model==='multiple')return seniorStory(model,stage.questionIndex);
    if(model==='divisor')return seniorStory(model,stage.questionIndex);
    if(model==='percent')return seniorStory(model,stage.questionIndex);
    if(model==='ratio5')return seniorStory(model,stage.questionIndex);
    if(model==='unitAmount')return seniorStory(model,stage.questionIndex);
    if(model==='speed')return seniorStory(model,stage.questionIndex);
    if(model==='ratio6')return seniorStory(model,stage.questionIndex);
    if(model==='letter')return seniorStory(model,stage.questionIndex);
    if(model==='fractionDecimal')return seniorStory(model,stage.questionIndex);
    if(model==='reduce')return seniorFraction(model);
    if(model==='fractionTimesInt')return seniorFraction(model);
    if(model==='fractionDivideInt')return seniorFraction(model);
    if(model==='average')return seniorStory(model,stage.questionIndex);
    if(['fractionAdd5','fractionSub5'].includes(model))return fractionWork(model);
    if(model==='rectangle2'){const angles=[60,90,120];for(let i=2;i>0;i--){const j=r(0,i);[angles[i],angles[j]]=[angles[j],angles[i]];}const choices=angles.map((angle,i)=>({id:'ABC'[i],label:'この角',angle,rotation:r(0,3)*90}));return {kind:'curriculum-choice',prompt:'紙のかどと ぴったり かさなる「直角」は どれ？',visual:{rightAngle:true},choices,answer:choices.find(c=>c.angle===90).id,keypad:'choice',uniqueKey:'right-angle:'+JSON.stringify(choices),solution:'直角'};}
    if(['writtenAdd','writtenSubtract','writtenMultiply'].includes(model))return writtenQuestion(model);
    if(['decimalIntMultiply','decimalIntDivide'].includes(model))return decimalMultiplyDivideQuestion(model);
    if(model==='writtenDivide')return divideGridQuestion();
    if(stage.id==='e4-large4'){const section=(stage.questionIndex??0)%3;if(section<2)return largeNumberQuestion(section===0?4:5);const [prompt,result,guide]=models.rounding();return {kind:'text',prompt,answer:result,solution:String(result),guide,keypad:'keyboard',uniqueKey:'number4-round:'+prompt};}
    if(geometryModels.includes(model))return geometryQuestion(model,stage.questionIndex);
    if (/^large[234]$/.test(model)) return largeNumberQuestion(Number(model.at(-1)));
    if (!models[model]) throw new Error(`Unknown curriculum model: ${model}`);
    const [prompt, result, guide, visual] = models[model]();
    if (['orderOperations','lineData','fractionCompare3','proportion','inverse','percentData','combinations','median','mode','frequency','mixedFraction4'].includes(model)) return {kind:'curriculum-choice',prompt,guide,visual,answer:result,keypad:model==='median'?'decimal':'number',answerMode:'numeric',uniqueKey:model+':'+prompt+':'+JSON.stringify(visual??null),solution:String(result)};
    const correct = typeof result === 'number' ? String(clean(result)) : result;
    const wrongs = typeof result === 'number'
      ? [String(clean(result + (Number.isInteger(result) ? 1 : .1))),String(clean(result + (Number.isInteger(result) ? 2 : .2)))]
      : (() => { const [n,d]=result.split('/').map(Number); return [fraction(n+1,d),fraction(n+2,d)]; })();
    const values = [correct, ...wrongs];
    for(let i=2;i>0;i--){const j=r(0,i);[values[i],values[j]]=[values[j],values[i]];}
    const choices=values.map((label,i)=>({id:'ABC'[i],label}));
    return {kind:'curriculum-choice',prompt,guide,visual,choices,answer:choices.find(x=>x.label===correct).id,
      keypad:'choice',uniqueKey:`${model}:${prompt}`, solution:correct};
  }
};
