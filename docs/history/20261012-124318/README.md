# Mathsーadventure WORLD学年別版

## WORLD構成

- WORLD 1（1年生）：足し算・引き算
- WORLD 2（2年生）：時刻・お金
- WORLD 3（3年生）：掛け算・割り算
- WORLD 4（4年生）：小数・分数
- WORLD 5（5年生）：Coming Soon
- WORLD 6（6年生）：Coming Soon

## モンスター番号

WORLD1から順番に001〜062を割り当てています。

- 001〜007：足し算
- 008〜014：引き算
- 015〜021：時刻
- 022〜028：お金
- 029〜041：掛け算（既存12体＋ボス）
- 042〜048：割り算
- 049〜055：小数
- 056〜062：分数

## 既存掛け算画像の新番号

既存の掛け算モンスターはWORLD3へ移動するため、以下の番号になります。

- ウォータポン：029
- ツインバード：030
- ファイアサウルス：031
- クローバータートル：032
- スターウルフ：033
- シックススピーカー：034
- レインボードラゴン：035
- オクトパル：036
- シャインペガサス：037
- マッシブ・ゴーレム：038
- ライトニング・ファング：039
- ディバイン・フェニックス：040
- 九九キング・ゴールド：041

詳しくは `掛け算画像_番号変更一覧.txt` を確認してください。

## 画像配置

各モンスターに次の3画像を用意します。

```text
public/pictures/monsters/001-plus-rabbit/
├─ n.png
├─ sr.png
└─ ur.png
```

現在はゲーム動作確認用のプレースホルダーPNGが入っています。
完成画像を同じファイル名で上書きしてください。

アップロード済みのウォータポンN画像は、新番号に合わせて次へ配置済みです。

```text
public/pictures/monsters/029-waterpon/n.png
```

## 起動

```bash
npm install
npm run dev
```

## Firebase

`src/core/firebase.js` の設定値をFirebaseコンソールの値へ置き換え、
Authenticationの匿名認証とFirestoreを有効にしてください。

## 追加方式

- WORLD追加：`src/content/worlds/`
- ステージ追加：`src/content/stages/world番号/`
- カード追加：`src/content/cards/`
- 画像追加：`public/pictures/monsters/`

通常の追加では `index.html` を編集しません。


## 復元機能
- 1.5秒フラッシュ表示後に「？」へ切替
- 問題タップで再表示
- 宝箱タップ後にカード公開
- 図鑑カードの拡大・傾き・光演出
- ステージ選択ではモンスター非表示
- 単元内モンスターからランダム排出
- 掛け算1〜6の段は029〜034、7〜12の段は035〜040、ボスは041


## ライフ機能
- ステージ開始時はバリア2個。
- 間違えると1個減り、同じ問題を再表示して再挑戦。
- 2回間違えるとゲームオーバー。報酬はありません。


## WORLD2 リニューアル

- お金問題は硬貨・紙幣のゲーム用画像を表示します。
- 時計問題はSVGアナログ時計を表示します。
- 時刻入力は、3時なら `3`、3時30分なら `330` と入力します。
- 既存のライフ、宝箱、カード図鑑、Firestore処理は維持しています。


## 問題表示方式

- WORLD2の「時刻」「お金」はフラッシュせず、問題を常時表示します。
- ステージ設定の `presentation: "persistent"` で常時表示、未指定または `"flash"` でフラッシュ表示になります。
- 正解時は赤ペン風の「○」アニメーションを表示してから次の問題へ進みます。


## Ver1.1 追加仕様

- WORLD2のお金・時計は常時表示です。
- 新しい非フラッシュ問題はステージ設定に `presentation: "persistent"` を指定します。
- 正解時は赤ペン風の丸・チェック・「せいかい！」・`+10 EXP`・短い効果音が再生されます。
- EXPはローカル保存、クラウド保存、引っ越しコードの対象です。


## Ver1.2 additions
- Adaptive keypads: clock, money, fraction, decimal, and number
- Hiragana-first prompts for lower grades
- High-contrast question text
- Partner selection from unlocked cards only
- Partner cheers, jump/nod reactions, and shared study-count records
- Partner data is included in local/Firestore state

## Ver1.3 1画面完結レイアウト

- PCは問題と入力を左右配置
- スマホは画面高さに応じて時計・お金・パッドを自動縮小
- 時計数字の二重表示を修正
- パートナー表示をコンパクト化
- 問題画面ではフッターを非表示


## Ver1.4 拡張構造

問題生成・表示・キーパッドを自動登録型のモジュールへ分離しました。詳しくは `EXPANSION_GUIDE.md` を参照してください。
