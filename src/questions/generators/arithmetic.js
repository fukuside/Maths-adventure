import { randomInt as r } from "../helpers.js";
export default {
  types: ["addition", "subtraction"],
  build(stage) {
    if (stage.type === "addition") {
      const a = r(0, stage.max), b = r(0, stage.max - a);
      return { label: `${a} ＋ ${b}`, answer: a + b };
    }
    const a = r(0, stage.max), b = r(0, a);
    return { label: `${a} − ${b}`, answer: a - b };
  }
};
