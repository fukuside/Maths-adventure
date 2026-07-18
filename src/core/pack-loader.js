const manifestModules = import.meta.glob("../content/packs/*/manifest.js", { eager: true, import: "default" });

function validateManifest(manifest, path) {
  if (!manifest || typeof manifest !== "object") throw new Error(`Pack manifest is invalid: ${path}`);
  if (!manifest.id || !manifest.version || !manifest.type) throw new Error(`Pack manifest requires id, version and type: ${path}`);
  return Object.freeze({ ...manifest, enabled: manifest.enabled !== false, sourcePath: path });
}

export const packs = Object.entries(manifestModules)
  .map(([path, manifest]) => validateManifest(manifest, path))
  .filter(pack => pack.enabled)
  .sort((a, b) => a.id.localeCompare(b.id));

export const packMap = new Map(packs.map(pack => [pack.id, pack]));
export const getPack = id => packMap.get(String(id));
