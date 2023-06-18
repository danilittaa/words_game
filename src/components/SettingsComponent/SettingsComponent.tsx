import { useAppDispatch, useAppSelector } from "hook";
import "./Settings.scss";
import { useState } from "react";
import SignIn from "components/Sign/SignIn/SignIn";
import SignUp from "components/Sign/SignUp/SignUp";
import { axiosWithAuth } from "axiosConfig";
import { deleteLocalStorage, fetchMe, logOut } from "store/userSlice";

const SettingsComponent = () => {
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [isSignVisible, setIsSignVisible] = useState<boolean>(false);
  const [isLogIn, setIsLogIn] = useState<boolean>(true);
  const isAuth = !!user.email;
  const onCloseClick = () => {
    setIsSignVisible(false);
  };

  const logOutClick = async () => {
    try {
      await axiosWithAuth.post("/auth/blacklist/", {
        refresh: localStorage.getItem("refreshToken"),
      });
      dispatch(logOut);
      deleteLocalStorage();
      dispatch(fetchMe());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="settings">
      <img
        src="images/buttons/sound.png"
        alt="sound"
        className="settings__sound pointer"
      />
      <div className="settings__exit">
        <p className="settings__exit__name">
          {isAuth ? user.username : "sign in ->"}
        </p>
        <img
          src={`images/buttons/${isAuth ? "exit" : "enter"}.png`}
          alt={`${isAuth ? "exit" : "enter"}`}
          className="pointer"
          onClick={() => (isAuth ? logOutClick() : setIsSignVisible(true))}
        />
      </div>
      {!isSignVisible && (
        <div className="settings__lang">
          <p className="settings__lang__name">Ukrainian</p>
          <div className="settings__lang__flag">
            <img src="/images/buttons/left.png" className="pointer" />
            <img
              src="/images/flags/ukraine.jpeg"
              alt="ukraine flag"
              className="settings__lang__flag__img"
            />
            <img src="/images/buttons/right.png" className="pointer" />
          </div>
        </div>
      )}
      {isSignVisible ? (
        isLogIn ? (
          <SignIn
            onCloseClick={onCloseClick}
            onRegisterClick={() => setIsLogIn(false)}
          />
        ) : (
          <SignUp
            onCloseClick={onCloseClick}
            onLoginClick={() => setIsLogIn(true)}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default SettingsComponent;
