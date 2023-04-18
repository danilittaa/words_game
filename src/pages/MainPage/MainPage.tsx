import React, { FC } from "react";
import Level from "../../components/Level";
import PlayButton from "../../components/PlayButton";
import Players from "../../components/Players";

import "./MainPage.scss";
import RecentWords from "../../components/RecentWords";

interface MainPagePropps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainPage: FC<MainPagePropps> = ({ setIsStarted }) => {
  return (
    <div>
      <Level />
      <PlayButton setIsStarted={setIsStarted} />
      <Players />
      <RecentWords />
    </div>
  );
};

export default MainPage;
