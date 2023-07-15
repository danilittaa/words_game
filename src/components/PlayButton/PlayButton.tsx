import { FC, useEffect, useState } from "react";
import "./PlayButton.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hook";
import { createAnonymousUser } from "store/userSlice";

const PlayButton: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const navigate = useNavigate();

  const [isStarted, setIsStarted] = useState<boolean>(false);

  const handleOnClick = () => {
    if (!user.email) {
      dispatch(createAnonymousUser());
    }
    setIsStarted(true);
  };

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        navigate("/battle");
      }, 300);
    }
  }, [isStarted]);
  return (
    <div className="play-btn pointer">
      <div className="play-btn__polygon" onClick={handleOnClick}>
        <img src="/images/buttons/Polygon.png" alt="" />
      </div>
    </div>
  );
};

export default PlayButton;
