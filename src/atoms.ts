import { atom } from "recoil";

export const weatherState = atom({
  key: "WeatherInfo",
  default: [100],
});

export const navState = atom({
  key: "NavigateRouter",
  default: 0,
});

export const timerState = atom({
  key: "TimerStartTime",
  default: 0,
});

export const timerRunningState = atom({
  key: "TimerIsRunning",
  default: false,
});
