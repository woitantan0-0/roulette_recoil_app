import React from "react";
import { useRecoilValue } from "recoil";
import { rouletteState } from "../atoms/roulette";
import { RouletteItem } from "./rouletteItem";

const APP_KEY = "appRouletteList";

const Roulette = () => {
  const rouletteItems = useRecoilValue(rouletteState);

  React.useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(rouletteItems));
  }, [rouletteItems]);

  return (
    <div className="panel">
      <div className="panel-heading">✡️ React × Recoil Todo</div>
      {/* {rouletteItems.map((item) => (
        <RouletteItem key={item.key} rouletteItem={item} />
      ))} */}
      <div className="panel-block">{rouletteItems.length} items</div>
    </div>
  );
};

export default Roulette;
