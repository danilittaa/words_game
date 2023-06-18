import "./Achievements.scss";
import AchievementsItem from "./AchievementsItem";

const Achievements = () => {
  return (
    <div className="achievements">
      {1 === 1 ? (
        <img
          src="/images/additional/comingsoon.png"
          className="achievements__img"
          alt="meow"
        />
      ) : (
        <>
          <p className="achievements__title">Achievements</p>
          <AchievementsItem />
          <AchievementsItem />
          <AchievementsItem />
          <AchievementsItem />
          <AchievementsItem />
        </>
      )}
    </div>
  );
};

export default Achievements;
