import { useEffect, useState } from "react";
import "./TopPlayers.scss";
import PlayersItem from "components/Players/PlayersItem";
import { axiosWithoutAuth } from "axiosConfig";

const AllPlayers = () => {
  const [allPlayers, setAllPlayers] = useState<BestPlayer[]>([]);

  const fetchPlayers = async () => {
    try {
      const response = await axiosWithoutAuth.get("/users/best-players/", {
        params: { page: 1, page_size: 1000 },
      });
      const data = response.data as BestPlayerPage;
      setAllPlayers((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPlayers();
  }, []);
  return (
    <div className="all-players">
      <p className="all-players__title">Top Players</p>
      <div className="all-players__players">
        {allPlayers.map((player) => (
          <PlayersItem
            username={player.username}
            exp={player.exp}
            key={player.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;
