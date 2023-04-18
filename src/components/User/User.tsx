import React, { FC } from "react";
import "./User.scss";

interface UserProps {
  type: "enemy" | "you";
}

const User: FC<UserProps> = ({ type }) => {
  return (
    <div className={`user ${type === "enemy" ? "user__enemy" : "user__you"}`}>
      {type === "enemy" ? (
        <>
          <div className="user__photo"></div>{" "}
        </>
      ) : (
        <div className="user__hints"></div>
      )}
      <div>
        <div className="user__username">Username</div>
        <div className="user__health">
          <div className="user__health__inner"></div>
          <div className="user__health__min user__health__num">1</div>
          <div className="user__health__max user__health__num">10</div>
        </div>
      </div>
    </div>
  );
};

export default User;
