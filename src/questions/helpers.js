export const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

export function moneyItem(value) {
  return { value, image: `/images/money/${value}yen.png` };
}

export function formatElapsed(minutes) {
  if (minutes % 60 === 0) return `${minutes / 60}時間`;
  if (minutes > 60) return `${Math.floor(minutes / 60)}時間${minutes % 60}分`;
  return `${minutes}分`;
}
