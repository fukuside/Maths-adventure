import { packs } from "./pack-loader.js";

const worldModules = import.meta.glob("../content/packs/*/worlds/**/*.js", { eager: true, import: "default" });
const stageModules = import.meta.glob("../content/packs/*/stages/**/*.js", { eager: true, import: "default" });
const cardModules = import.meta.glob("../content/packs/*/cards/**/*.js", { eager: true, import: "default" });

function packIdFromPath(path) {
  const match = path.match(/\/packs\/([^/]+)\//);
  return match?.[1] ?? "unknown";
}

function normalize(modules, type) {
  const values = Object.entries(modules).map(([path, item]) => {
    if (!item || typeof item !== "object" || item.id === undefined) throw new Error(`${type} definition is invalid: ${path}`);
    return Object.freeze({ ...item, packId: item.packId ?? packIdFromPath(path) });
  });
  const ids = new Map();

for (const [path, item] of Object.entries(modules)) {
  const key = String(item.id);

  if (ids.has(key)) {
    console.error("DUPLICATED ID:", key);
    console.error("FIRST FILE:", ids.get(key));
    console.error("SECOND FILE:", path);

    throw new Error(
      `${type} id is duplicated: ${key}`
    );
  }

  ids.set(key, path);
}
  return values.sort((a,b)=>(a.world??0)-(b.world??0) || (a.sort??a.number??0)-(b.sort??b.number??0));
}

export { packs };
export const worlds = normalize(worldModules, "world");
export const stages = normalize(stageModules, "stage");
export const cards = normalize(cardModules, "card");
export const worldMap = new Map(worlds.map(x=>[String(x.id),x]));
export const stageMap = new Map(stages.map(x=>[String(x.id),x]));
export const cardMap = new Map(cards.map(x=>[String(x.id),x]));
export const getWorld = id => worldMap.get(String(id));
export const getStage = id => stageMap.get(String(id));
export const getCard = id => cardMap.get(String(id));
