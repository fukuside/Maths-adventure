# Maths-Adventure

このフォルダーが現在の開発先です。旧教材と過去パッチは親フォルダーの archive/、元素材は assets-source/、配布ZIPは releases/、QR・チラシは promotion/ に保管しています。

## 起動とビルド

```sh
npm ci
npm run dev
npm run build
```

## フォルダーの役割

| 場所 | 用途 |
|---|---|
| src/main.js | アプリの起動 |
| src/core/ | 画面・保存・Firebase・教材読み込み |
| src/content/packs/builtin/ | 現在の標準教材 |
| src/content/packs/<pack-id>/ | 追加教材パック |
| src/questions/ | 問題生成 |
| src/renderers/ | 問題表示 |
| src/keypads/ | 回答入力 |
| public/ | アプリが使用する画像・音声 |
| functions/ | Firebaseサーバー機能 |
| docs/ | 開発資料・番号一覧 |
| docs/history/ | 整理前の説明書 |
| dist/ | ビルド成果物（直接編集しない） |
| node_modules/ | 依存ライブラリー（直接編集しない） |

## 教材を追加する

教材の追加方法は [拡張ガイド](docs/EXPANSION_GUIDE.md)、[パック仕様](docs/PACK_SPEC.md)、[開発ガイド](docs/DEVELOPER_GUIDE.md) を参照してください。
標準モンスター画像は public/pictures/monsters/ に置き、カード定義の画像パスとファイル名・大文字小文字を一致させます。
[モンスター番号一覧](docs/モンスター番号一覧.csv) と [掛け算画像の番号変更履歴](docs/掛け算画像_番号変更一覧.txt) は資料として残しています。現行定義の正本は src/content/packs/ です。

## 保存互換性

既存の保存キー maths_adventure_state_v1 と maths_adventure_profiles_v1、教材・カードID、Firebaseの保存先は維持してください。公開URLの変更はブラウザー保存の引き継ぎに影響します。
ローカルのファイルバックアップに、ブラウザーやクラウドの利用者データは含まれません。

## 整理記録

2026年10月12日：旧教材・過去パッチをアプリ外へ退避し、資料を docs/ に集約しました。整理前の説明書は docs/history/ に保存しています。幼児／小学生のコース分離は今後の変更です。
