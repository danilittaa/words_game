import React from "react";
import "./Achievements.scss";
import AchievementsItem from "./AchievementsItem";

const Achievements = () => {
  return (
    <div className="achievements">
      <p className="achievements__title">Achievements</p>
      <AchievementsItem />
      <AchievementsItem />
      <AchievementsItem />
      <AchievementsItem />
      <AchievementsItem />
    </div>
  );
};

export default Achievements;
