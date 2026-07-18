const coreModules = import.meta.glob("./generators/*.js", { eager: true, import: "default" });
const packModules = import.meta.glob("../content/packs/*/generators/**/*.js", { eager: true, import: "default" });
const generators = new Map();
for (const [path, definition] of Object.entries({ ...coreModules, ...packModules })) {
  if (!definition || !Array.isArray(definition.types) || typeof definition.build !== "function") throw new Error(`Question generator is invalid: ${path}`);
  for (const type of definition.types) {
    if (generators.has(type)) throw new Error(`Question type is duplicated: ${type}`);
    generators.set(type, definition.build);
  }
}
export function getQuestionGenerator(type) { return generators.get(type); }
export function registeredQuestionTypes() { return [...generators.keys()].sort(); }
