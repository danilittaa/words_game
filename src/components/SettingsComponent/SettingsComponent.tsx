import React from "react";
import "./Settings.scss";

const SettingsComponent = () => {
  return (
    <div className="settings">
      <img
        src="images/buttons/sound.png"
        alt="sound"
        className="settings__sound pointer"
      />
      <div className="settings__exit">
        <p className="settings__exit__name">dana</p>
        <img src="images/buttons/exit.png" alt="exit" className="pointer" />
      </div>
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
    </div>
  );
};

export default SettingsComponent;
