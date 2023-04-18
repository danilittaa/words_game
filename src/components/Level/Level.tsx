import React from "react";
import "./Level.scss";
const Level = () => {
  return (
    <div className="level">
      <div className="level__back-rectangle level__back">
        <div className="level__front-rectangle level__front">dana</div>
      </div>
      <div className="level__back-ellipse level__back">
        <div className="level__front-ellipse level__front">1</div>
      </div>
      <div className="level__points">lvl 0/100</div>
    </div>
  );
};

export default Level;
