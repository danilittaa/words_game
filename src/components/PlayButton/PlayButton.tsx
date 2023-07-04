import React, { FC } from "react";
import "./PlayButton.scss";
import { Link } from "react-router-dom";
import { useAppDispatch } from "hook";
import { createAnonymousUser } from "store/userSlice";

const PlayButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Link to="/" className="play-btn pointer">
      <div
        className="play-btn__polygon"
        onClick={() => dispatch(createAnonymousUser())}
      >
        <img src="/images/buttons/Polygon.png" alt="" />
      </div>
    </Link>
  );
};

export default PlayButton;
