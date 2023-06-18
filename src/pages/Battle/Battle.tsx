import BattleComponent from "components/BattleComponent/BattleComponent";
import LevelResult from "components/LevelResult/LevelResult";
import User from "components/User/User";
import React, { useEffect, useState } from "react";
import "./Battle.scss";

const Battle = () => {
  const [isFinished, setIsFinished] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setIsFinished(!isFinished);
    }, 4000);
  }, []);
  return (
    <div className="battle-page">
      <User type="enemy" />
      <User type="you" />
      <div className="battle__all-time">2:01</div>
      {isFinished ? <LevelResult /> : <BattleComponent />}
    </div>
  );
};

export default Battle;
