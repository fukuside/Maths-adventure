# Maths-adventure 拡張ガイド

## WORLDを追加する
1. `src/content/worlds/world-5.js` の `available` を `true` にする。
2. `src/content/stages/world5/` にステージ定義を追加する。
3. `src/content/cards/` に報酬カード定義を追加する。
4. `public/images/cards/` に画像を追加する。

## 既存の問題形式を使う場合
ステージファイルの追加だけで動作します。`app.js` の修正は不要です。

## 新しい問題形式を追加する場合
- 問題生成: `src/questions/generators/<name>.js`
- 問題表示: `src/renderers/<kind>.js`
- 入力パッド: `src/keypads/<keypad>.js`

各フォルダーは `import.meta.glob` で自動登録されます。中央の一覧ファイルを書き換える必要はありません。

## セーブ互換性
既存キー `maths_adventure_state_v1` を維持しています。新しい保存項目は `storage.js` の既定値と読み込み処理へ後方互換の初期値を追加してください。既存項目の名前変更・削除は避けてください。

## リリース確認
```bash
npm install
npm run build
```
