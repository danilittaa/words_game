import { useEffect, useState } from "react";
import "./Players.scss";
import PlayersItem from "./PlayersItem";
import { axiosWithoutAuth } from "axiosConfig";

const Players = () => {
  const [bestPlayers, setBestPlayers] = useState<BestPlayer[]>([]);
  const fetchBestPlayers = async () => {
    try {
      const response = await axiosWithoutAuth.get("/users/best-players/", {
        params: { page_size: 5 },
      });
      const data = response.data as BestPlayerPage;
      setBestPlayers(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBestPlayers();
  }, []);
  return (
    <div className="players">
      <p className="players__title">Best Players</p>
      {bestPlayers.map((player) => (
        <PlayersItem username={player.username} exp={player.exp} />
      ))}
    </div>
  );
};

export default Players;
