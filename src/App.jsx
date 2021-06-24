import "./App.css";
import Roulette from "./components/roulette.jsx";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <div className="App is-fluid container">
        <Roulette />
      </div>
    </RecoilRoot>
  );
};

export default App;
