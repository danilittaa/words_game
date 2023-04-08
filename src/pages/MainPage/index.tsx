import React from "react";
import Level from "../../components/Level";
import PlayButton from "../../components/PlayButton";
import Players from "../../components/Players";

import "./MainPage.scss";
import RecentWords from "../../components/RecentWords";

const MainPage = () => {
  return (
    <div>
      <Level />
      <PlayButton />
      <Players />
      <RecentWords />
    </div>
  );
};

export default MainPage;
