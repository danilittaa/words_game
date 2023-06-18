import { FC, useContext, useEffect } from "react";
import Level from "../../components/Level";
import PlayButton from "../../components/PlayButton";
import Players from "../../components/Players";

import "./MainPage.scss";
import RecentWords from "../../components/RecentWords";
import NavMenu from "components/NavMenu/NavMenu";
import Context from "context";

const MainPage: FC = () => {
  const { setSelectedPage } = useContext(Context);
  useEffect(() => {
    setSelectedPage(0);
  }, []);
  return (
    <NavMenu>
      <div className="main-page">
        <Level />
        <PlayButton />
        <Players />
        <RecentWords />
      </div>
    </NavMenu>
  );
};

export default MainPage;
