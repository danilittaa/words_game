import SettingsComponent from "components/SettingsComponent";
import NavMenu from "components/NavMenu/NavMenu";
import { FC, useContext, useEffect } from "react";
import Context from "context";

const Settings: FC = () => {
  const { setSelectedPage } = useContext(Context);
  useEffect(() => {
    setSelectedPage(1);
  }, []);
  return (
    <NavMenu>
      <SettingsComponent />
    </NavMenu>
  );
};

export default Settings;
