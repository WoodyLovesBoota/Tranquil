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

export const isAmState = atom({
  key: "IsAmNow",
  default: false,
});

export const tempState = atom({
  key: "TemperatureInfo",
  default: 15,
});

export const todoState = atom<string[]>({
  key: "TodoList",
  default: [],
});
