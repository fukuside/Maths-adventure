const coreModules = import.meta.glob("./*.js", { eager: true, import: "default" });
const packModules = import.meta.glob("../content/packs/*/renderers/**/*.js", { eager: true, import: "default" });
const renderers = new Map();
for (const [path, item] of Object.entries({ ...coreModules, ...packModules })) {
  if (!item?.kind || typeof item.render !== "function") continue;
  if (renderers.has(item.kind)) throw new Error(`Renderer kind is duplicated: ${item.kind} (${path})`);
  renderers.set(item.kind, item.render);
}
export function renderQuestionByKind(question, context) {
  const renderer = renderers.get(question?.kind ?? "text") ?? renderers.get("text");
  return renderer(question, context);
}
