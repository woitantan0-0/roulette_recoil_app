import React from "react";

const RouletteItem = ({ rouletteItem }) => {
  return (
    <label className="panel-block todoItem">
      <span>{rouletteItem.key}</span>
      <span className={rouletteItem.done ? "has-text-grey-light" : ""}>
        {rouletteItem.text}
      </span>
    </label>
  );
};

export default RouletteItem;
