const drawings = {
  apple: '<path d="M31 24C8 10 7 47 24 56c5 3 7 0 8 0s5 3 10 0c18-10 18-46-8-32" fill="#ef5350"/><path d="M32 24v-9" stroke="#704329" stroke-width="4"/><path d="M34 17q0-13 17-9-3 13-17 9" fill="#2e9d56"/>',
  star: '<path d="m32 6 8 17 19 3-14 14 3 19-16-9-16 9 3-19L5 26l19-3Z" fill="#ffc83d" stroke="#9b6500" stroke-width="2"/>',
  ball: '<circle cx="32" cy="32" r="25" fill="#5cb9fb" stroke="#155a9b" stroke-width="3"/><path d="M8 25q24 12 48 0M20 10q24 22 0 44" fill="none" stroke="#fff" stroke-width="4"/>',
  flower: '<g fill="#ee7cbd" stroke="#af347c" stroke-width="2"><circle cx="32" cy="16" r="11"/><circle cx="48" cy="29" r="11"/><circle cx="42" cy="47" r="11"/><circle cx="22" cy="47" r="11"/><circle cx="16" cy="29" r="11"/></g><circle cx="32" cy="32" r="11" fill="#ffda50"/>',
  fish: '<path d="M13 32 3 18v28Zm0 0q22-31 47 0-25 31-47 0" fill="#f59742" stroke="#955322" stroke-width="2"/><circle cx="46" cy="27" r="3" fill="#252525"/>',
  leaf: '<path d="M8 54Q0 8 55 8q0 49-47 46" fill="#52b960" stroke="#246d32" stroke-width="3"/><path d="m10 52 36-33" stroke="#e6ffce" stroke-width="4"/>'
};
export const symbolNames = { apple: "りんご", star: "ほし", ball: "ボール", flower: "はな", fish: "さかな", leaf: "はっぱ" };
export function symbolSvg(symbol) {
  return `<svg class="k-symbol" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${drawings[symbol] ?? drawings.apple}</svg>`;
}
