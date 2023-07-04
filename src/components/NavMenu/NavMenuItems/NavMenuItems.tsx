import { FC, useContext, useState } from "react";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavMenuItems: FC = ({}) => {
  const navMenuItemUrl: Array<navMenuItemType> = [
    "",
    "settings",
    "star",
    "book",
  ];

  return (
    <>
      {navMenuItemUrl.map((item, index) => (
        <NavMenuItem url={item} key={index} id={index} />
      ))}
    </>
  );
};

export default NavMenuItems;
