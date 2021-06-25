import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { rouletteItemState, rouletteNumState } from "../atoms/Roulette";

const RouletteField = () => {
  const items = useRecoilValue(rouletteItemState);
  const setItem = useSetRecoilState(rouletteItemState);
  const num = useRecoilValue(rouletteNumState);
  const setRouletteNum = useSetRecoilState(rouletteNumState);

  const handleClickStart = () => {
    const rouletteItems = items.filter((item) => item.done === false);
    if (rouletteItems.length > 0) {
      const randomItem =
        rouletteItems[Math.floor(Math.random() * rouletteItems.length)];
      setRouletteNum(randomItem.key);
      const newItems = items.map((item) => {
        if (item.key === randomItem.key) {
          return { key: item.key, text: item.text, done: true };
        } else {
          return item;
        }
      });
      setItem(newItems);
    } else {
      const newItems = items.map((item) => {
        return { key: item.key, text: item.text, done: false };
      });
      setItem(newItems);
      setRouletteNum("?");
    }
  };

  const handleClickReset = () => {
    const newItems = items.map((item) => {
      return { key: item.key, text: item.text, done: false };
    });
    setItem(newItems);
    setRouletteNum("?");
  };

  return (
    <label className="panel-roulette-block">
      <div className="roulette-field">
        <div className="roulette">{num}</div>
        <div className="roulette-buttons">
          <button onClick={handleClickStart}>Start</button>
          <button onClick={handleClickReset}>Reset</button>
        </div>
      </div>
    </label>
  );
};

export default RouletteField;
