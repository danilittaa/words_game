import { FC } from "react";
import "./User.scss";

interface UserProps {
  type: "enemy" | "you";
  username: string;
  health: number;
}

const User: FC<UserProps> = ({ type, username, health }) => {
  console.log("healht", health);

  return (
    <div className={`user ${type === "enemy" ? "user__enemy" : "user__you"}`}>
      {type === "enemy" ? (
        <>
          <img
            className="user__photo"
            src="/images/additional/opponent.jpg"
          ></img>
        </>
      ) : (
        <div className="user__hints"></div>
      )}
      <div>
        <div className="user__username">{username}</div>
        <div className="user__health">
          <div
            className="user__health__inner"
            style={{ width: health * 10 + "%" }}
          ></div>
          <div className="user__health__min user__health__num">1</div>
          <div className="user__health__max user__health__num">10</div>
        </div>
      </div>
    </div>
  );
};

export default User;
