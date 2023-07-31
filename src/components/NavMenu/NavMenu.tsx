import { FC } from "react";
import "./NavMenu.scss";
import NavMenuItems from "./NavMenuItems/NavMenuItems";

interface NavMenuItemProps {
  children: React.ReactNode;
}

const NavMenu: FC<NavMenuItemProps> = ({ children }) => {
  return (
    <div className="nav-menu">
      <NavMenuItems />
      {children}
    </div>
  );
};

export default NavMenu;
