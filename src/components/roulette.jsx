import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import rouletteItemState from "../atoms/Roulette";
import RouletteItem from "./rouletteItem";
import Input from "./input";
import RouletteField from "./rouletteField";

const APP_KEY = "appRouletteList";

const Roulette = () => {
  const rouletteItems = useRecoilValue(rouletteItemState);
  const setItem = useSetRecoilState(rouletteItemState);

  React.useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(rouletteItems));
  }, [rouletteItems]);

  const handleListClearClick = () => {
    setItem([]);
  };

  return (
    <div className="panel">
      <div className="panel-heading">✡️ React × Recoil Roulette ✡️</div>
      <Input />
      {rouletteItems.map((item) => (
        <RouletteItem key={item.key} rouletteItem={item} />
      ))}
      <div className="clear-field">
        <button className="delete-btn" onClick={handleListClearClick}>
          Roulette List Clear
        </button>
      </div>
      <div className="panel-heading">✡️ Roulette Start ✡️</div>
      <RouletteField />
    </div>
  );
};

export default Roulette;
