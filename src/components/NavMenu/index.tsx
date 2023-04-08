import React, { useState } from "react";
import "./NavMenu.scss";
import NavMenuItem from "./NavMenuItem";
import { INavMenuItem } from "../../types";

const NavMenu: React.FC = () => {
  const navMenuItemUrl: Array<INavMenuItem> = [
    "home",
    "settings",
    "star",
    "book",
  ];
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div className="nav-menu">
      {navMenuItemUrl.map((item, index) => (
        <NavMenuItem
          url={item}
          key={index}
          id={index}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};

export default NavMenu;
