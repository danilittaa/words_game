import { FC } from "react";
import "./Level.scss";
import { useAppSelector } from "hook";

interface LevelProps {
  isInRating?: boolean;
}
const Level: FC<LevelProps> = ({ isInRating }) => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <div className={`level ${isInRating ? "rating-level" : ""}`}>
      <div className="level__back-rectangle level__back">
        <div className="level__front-rectangle level__front">
          {user.username}
        </div>
      </div>
      <div className="level__back-ellipse level__back">
        <div className="level__front-ellipse level__front">
          {Math.round(user.exp / 100)}
        </div>
      </div>
      <div className="level__points">lvl {user.exp}/100</div>
    </div>
  );
};

export default Level;
