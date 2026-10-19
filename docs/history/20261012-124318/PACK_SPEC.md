# Maths-adventure Pack specification

## Install a pack
1. Unzip the pack.
2. Copy its folder into `src/content/packs/`.
3. Copy public assets supplied by the pack into `public/packs/<pack-id>/`.
4. Run `npm run build` and deploy the new build.

A pack is detected at build time by Vite. No central registry or `app.js` edit is required.

## Required structure
```
src/content/packs/world5/
  manifest.js
  worlds/
  stages/
  cards/
  generators/   # optional
  renderers/    # optional
  keypads/      # optional
public/packs/world5/
  images/
  backgrounds/
```

Every world, stage and card id must be globally unique. New generators must declare `types`; renderers must declare `kind`; keypads must declare `id`.

## Save compatibility
The existing local-storage key `maths_adventure_state_v1` is unchanged. Do not rename or delete existing save fields. Add defaults for new fields in `src/core/storage.js`.
