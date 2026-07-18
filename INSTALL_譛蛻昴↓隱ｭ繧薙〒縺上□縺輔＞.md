# Maths-adventure Core v2.0 差し替えパッチ

このZIPは、既存の `maths-adventure-v1.4` 全体を置き換えるものではありません。
画像・Firebase設定・既存UI・カード画像などはそのまま残し、Core + Pack構造に必要な主要ファイルだけを差し替えます。

## 適用方法

1. 念のため、現在の `maths-adventure-v1.4` フォルダーをコピーしてバックアップしてください。
2. このZIPを展開します。
3. 展開したフォルダーの中身を、既存の `maths-adventure-v1.4` のルートへコピーしてください。
4. 「同じ名前のファイルがあります」と表示された場合は、上書きを選択してください。
5. `src/content/packs/` が新しく追加されていることを確認してください。
6. 既存の `src/content/worlds/`、`src/content/stages/`、`src/content/cards/` は削除しなくても構いません。Core v2.0 の registry は `src/content/packs/` を読み込むため、旧フォルダーは参照されません。
7. ターミナルで次を実行してください。

```bash
npm install
npm run build
npm run dev
```

## 主な差し替え箇所

- `src/core/pack-loader.js` 新規
- `src/core/registry.js` 差し替え
- `src/keypads/registry.js` 差し替え
- `src/questions/registry.js` 差し替え
- `src/renderers/registry.js` 差し替え
- `src/content/packs/` 新規追加（WORLD1〜4をPack化）
- `PACK_SPEC.md` 新規
- `DEVELOPER_GUIDE.md` 新規
- `EXPANSION_GUIDE.md` 更新
- `package.json` / `package-lock.json` Core v2.0表記へ更新

## 今後のWORLD追加

今後は新しいWorld Packを `src/content/packs/` 配下へ追加する方式を基本にします。
WORLD5の追加時は、本体全体を差し替えるのではなく、World Pack 5 のファイルセットを追加する形にできます。
