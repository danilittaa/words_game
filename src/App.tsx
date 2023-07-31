import { useEffect, useState } from "react";
import "react-material-symbols/dist/rounded.css";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Rating from "./pages/Rating";
import AllWords from "pages/AllWords";
import Battle from "pages/Battle";
import Contex from "./context";
import { useAppDispatch } from "hook";
import { fetchMe } from "store/userSlice";
import "./App.scss";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState(0);
  const [randomNum, setRandomNum] = useState<number>(1);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMe());
    setRandomNum(Math.floor(Math.random() * 5) + 1);
  }, []);
  return (
    <Contex.Provider value={{ selectedPage, setSelectedPage }}>
      <BrowserRouter>
        <div
          className="app"
          style={{
            backgroundImage: `url("../images/backgrounds/background${randomNum}.png")`,
          }}
        >
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path="star" element={<Rating />} />
            <Route path="book" element={<AllWords />} />
            <Route path="battle" element={<Battle />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Contex.Provider>
  );
};

export default App;
