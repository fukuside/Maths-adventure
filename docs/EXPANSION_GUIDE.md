# Maths-Adventure 拡張ガイド

## 現在の教材構成

標準教材は src/content/packs/builtin/ にあります。worlds/、stages/、cards/ を使用します。旧 src/content/worlds/・cards/・stages_old/ は履歴としてアプリ外へ退避済みです。

## 標準WORLDを拡張する

1. src/content/packs/builtin/worlds/ の対象WORLD定義を確認する。
2. src/content/packs/builtin/stages/ にステージ定義を追加する。
3. src/content/packs/builtin/cards/ に必要な報酬カードを追加する。
4. カード定義に対応する画像を public/pictures/monsters/ に配置する。
5. 内容が揃ってからWORLDの available を設定する。
6. npm run build を実行し、画面と保存動作を確認する。

## 新しい教材パック

src/content/packs/<pack-id>/ に manifest.js と教材を追加します。構造は [PACK_SPEC.md](PACK_SPEC.md) を参照してください。
WORLD・ステージ・カードのIDは全パックで重複を避けます。既存のIDは変更しません。
パックの自動登録はビルド時に行われます。新しい画面やコース選択の追加には、別途アプリ側の変更が必要です。

## 問題形式

既存形式を使う場合はステージ定義で指定します。新しい共通形式は src/questions/generators/、src/renderers/、src/keypads/ に追加します。パック専用の形式はパック配下の generators/、renderers/、keypads/ に配置できます。

## セーブ互換性

保存キー maths_adventure_state_v1 と maths_adventure_profiles_v1 を維持します。保存項目・既存教材ID・Firebaseの保存先は変更せず、新しい項目には後方互換の初期値を設けます。
