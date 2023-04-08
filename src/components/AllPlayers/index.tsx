import React from "react";
import "./AllPlayers.scss";
import PlayersItem from "../Players/PlayersItem";

const AllPlayers = () => {
  return (
    <div className="all-players">
      <p className="all-players__title">All Players</p>
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
      <PlayersItem />
    </div>
  );
};

export default AllPlayers;
