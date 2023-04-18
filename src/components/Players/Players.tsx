import React from "react";
import "./Players.scss";
import PlayersItem from "./PlayersItem";

const Players = () => {
  return (
    <div className="players">
      <p className="players__title">Best Players</p>
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
    </div>
  );
};

export default Players;
