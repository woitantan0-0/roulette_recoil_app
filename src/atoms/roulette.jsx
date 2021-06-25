import { atom } from "recoil";

const APP_KEY = "appRouletteList";

const appState = localStorage.getItem(APP_KEY);

export const rouletteItemState = atom({
  key: "rouletteItems",
  default: appState ? JSON.parse(appState) : [],
});

export const rouletteNumState = atom({
  key: "rouletteNum",
  default: "?",
});

export default rouletteItemState;
