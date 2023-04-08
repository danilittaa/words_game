import React from "react";
import "./App.scss";
import NavMenu from "./components/NavMenu";
import "react-material-symbols/dist/rounded.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Rating from "./pages/Rating";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavMenu />
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/star" element={<Rating />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
