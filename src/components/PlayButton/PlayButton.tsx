import { FC, useEffect, useState } from "react";
import "./PlayButton.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "hook";
import { createAnonymousUser } from "store/userSlice";
import useSound from "use-sound";

const PlayButton: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.user);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [play] = useSound(
    user.preferences.sound_effects ? "/sounds/button-click.wav" : ""
  );
  const handleOnClick = () => {
    play();
    if (!localStorage.getItem("accessToken")) {
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
    <div className="play-btn pointer" onClick={handleOnClick}>
      <div className="play-btn__polygon">
        <img src="/images/buttons/Polygon.png" alt="" />
      </div>
    </div>
  );
};

export default PlayButton;
