import React, { FC } from "react";
import "./PlayButton.scss";
import { Link } from "react-router-dom";

interface PlayButtonProps {
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlayButton: FC<PlayButtonProps> = ({ setIsStarted }) => {
  return (
    <Link
      to="/loading"
      className="play-btn pointer"
      onClick={() => setIsStarted((prev) => true)}
    >
      <div className="play-btn__polygon">
        <img src="/images/buttons/Polygon.png" alt="" />
      </div>
    </Link>
  );
};

export default PlayButton;
