import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import rouletteItemState from "../atoms/Roulette";

const Input = () => {
  const items = useRecoilValue(rouletteItemState);
  const lastItem = items.slice(-1)[0];

  const [item, setInput] = React.useState("");
  const setItem = useSetRecoilState(rouletteItemState);

  const handleTextChage = (e) => setInput(e.target.value);

  const handleEnter = (e) => {
    if (e.keyCode === 13 && item !== "") {
      setItem((t) => {
        return [
          ...t,
          { key: lastItem ? lastItem.key + 1 : 1, text: item, done: false },
        ];
      });
      setInput("");
    }
  };

  return (
    <div className="panel-block">
      <input
        className="input"
        type="text"
        maxLength={100}
        value={item}
        placeholder="Enter or add"
        onChange={handleTextChage}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

export default Input;
