import "./Rating.scss";
import Level from "../../components/Level";
import Achievements from "../../components/Achievements";
import AllPlayers from "../../components/TopPlayers";
import NavMenu from "components/NavMenu/NavMenu";
import { useContext, useEffect } from "react";
import Context from "context";

const Rating = () => {
  const { setSelectedPage } = useContext(Context);
  useEffect(() => {
    setSelectedPage(2);
  }, []);
  return (
    <NavMenu>
      <div className="rating">
        <Level isInRating={true} />
        <Achievements />
        <AllPlayers />
      </div>
    </NavMenu>
  );
};

export default Rating;
