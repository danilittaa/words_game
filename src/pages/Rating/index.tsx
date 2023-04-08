import React from "react";
import "./Rating.scss";
import Level from "../../components/Level";
import Achievements from "../../components/Achievements";
import AllPlayers from "../../components/AllPlayers";

const Rating = () => {
  return (
    <div className="rating">
      <Level />
      <Achievements />
      <AllPlayers />
    </div>
  );
};

export default Rating;
