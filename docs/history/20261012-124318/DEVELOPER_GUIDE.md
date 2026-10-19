# Maths-adventure Core v2.0

WORLD1-4 are bundled as `src/content/packs/builtin`. Future content must be added as a separate pack under `src/content/packs/<pack-id>`.

The Core automatically discovers manifests, worlds, stages, cards, question generators, renderers and keypads with `import.meta.glob`. Pack installation therefore requires copying files and rebuilding, not editing Core source files.

Commands:
```bash
npm install
npm run dev
npm run build
```

Firebase settings remain in `src/core/firebase.js`. Existing save data remains compatible.
