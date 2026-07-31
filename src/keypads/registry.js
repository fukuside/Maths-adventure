const coreModules = import.meta.glob(
  "./*.js",
  {
    eager: true,
    import: "default"
  }
);

const packModules = import.meta.glob(
  "../content/packs/*/keypads/**/*.js",
  {
    eager: true,
    import: "default"
  }
);

const keypads = new Map();

for (
  const [path, item]
  of Object.entries({
    ...coreModules,
    ...packModules
  })
) {
  if (
    !item?.id ||
    typeof item.keys !== "function"
  ) {
    continue;
  }

  if (keypads.has(item.id)) {
    throw new Error(
      `Keypad id is duplicated: ${item.id} (${path})`
    );
  }

  keypads.set(item.id, item);
}


/* =========================================
   ステージから使用するキーパッドを判定
========================================= */

export function inferKeypadType(stage) {
  if (stage?.keypad) {
    return stage.keypad;
  }

  if (stage?.type?.startsWith("clock_")) {
    return "clock";
  }

  if (stage?.type === "money_sum") {
    return "money";
  }

  if (stage?.type?.startsWith("fraction_")) {
    return "fraction";
  }

  if (stage?.type?.startsWith("decimal_")) {
    return "decimal";
  }

  return "number";
}


/* =========================================
   キーパッドを描画
========================================= */

export function renderKeypadForStage(
  stage,
  {
    escapeHtml,
    inputEnabled,
    input = ""
  }
) {
  const type = inferKeypadType(stage);

  const def =
    keypads.get(type) ??
    keypads.get("number");

  if (!def) {
    return "";
  }

  const button = (
    value,
    label = value,
    cls = ""
  ) => `
    <button
      class="key ${cls}"
      data-action="key"
      data-value="${escapeHtml(value)}"
      type="button"
    >
      ${escapeHtml(label)}
    </button>
  `;

  const keys = def.keys(
    button,
    {
      input,
      stage
    }
  );

  return `
    <div
      class="
        keypad
        keypad-${type}
        ${inputEnabled ? "" : "keypad-disabled"}
      "
    >
      ${keys.join("")}
    </div>
  `;
}