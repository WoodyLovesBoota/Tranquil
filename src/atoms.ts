import { atom } from "recoil";

export const weatherState = atom({
  key: "WeatherInfo",
  default: [100],
});

export const navState = atom({
  key: "NavigateRouter",
  default: 0,
});
