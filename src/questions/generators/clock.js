import { randomInt as r, formatElapsed } from "../helpers.js";
export default {
  types: ["clock_read", "clock_elapsed"],
  build(stage) {
    if (stage.type === "clock_read") {
      const minutes = stage.minuteChoices ?? [0];
      const hour = r(1, 12), minute = minutes[r(0, minutes.length - 1)];
      return { kind:"clock", mode:"read", prompt: minute === 0 ? "この とけいは なんじ？" : "この とけいは なんじ なんぷん？", hour, minute, answer:hour*100+minute, uniqueKey:`read-${hour}-${minute}` };
    }
    const minutes = stage.minuteChoices ?? [0];
    const elapsed = stage.elapsedChoices ?? [60,120];
    const hour=r(1,12), minute=minutes[r(0,minutes.length-1)], elapsedMinutes=elapsed[r(0,elapsed.length-1)];
    const total=(hour%12)*60+minute+elapsedMinutes;
    const answerHour=Math.floor(total/60)%12||12, answerMinute=total%60;
    return { kind:"clock", mode:"elapsed", prompt:`${formatElapsed(elapsedMinutes)}ごは なんじ なんぷん？`, hour, minute, elapsedMinutes, answer:answerHour*100+answerMinute, uniqueKey:`elapsed-${hour}-${minute}-${elapsedMinutes}` };
  }
};
