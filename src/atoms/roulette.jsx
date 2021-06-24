import { atom } from "recoil";

const APP_KEY = "appRouletteList";

const appState = localStorage.getItem(APP_KEY);

export const rouletteState = atom({
  key: "rouletteItems",
  default: appState ? JSON.parse(APP_KEY) : [],
});
