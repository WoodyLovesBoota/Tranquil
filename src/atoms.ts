import { atom } from "recoil";

export const weatherState = atom({
  key: "WeatherInfo",
  default: "default",
});
