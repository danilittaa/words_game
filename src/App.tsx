import React, { useState } from "react";
import "./App.scss";
import NavMenu from "./components/NavMenu";
import "react-material-symbols/dist/rounded.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Rating from "./pages/Rating";
import AllWords from "pages/AllWords/AllWords";
import Loading from "pages/Loading/Loading";
import Results from "pages/Results/Results";
import Battle from "pages/Battle/Battle";
import Level from "components/Level/Level";
import BattleComponent from "components/BattleComponent/BattleComponent";
import LevelResult from "components/LevelResult/LevelResult";

const App: React.FC = () => {
  const [isStared, setIsStarted] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <div className="app">
        {!isStared && <NavMenu />}
        <Routes>
          <Route
            path="home"
            element={<MainPage setIsStarted={setIsStarted} />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="star" element={<Rating />} />
          <Route path="book" element={<AllWords />} />
          <Route path="loading" element={<Loading />} />
          <Route
            path="results"
            element={<Results setIsStarted={setIsStarted} />}
          />
          <Route path="battle" element={<Battle />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
