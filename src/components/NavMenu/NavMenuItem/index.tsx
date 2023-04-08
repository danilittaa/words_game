import React from "react";
import { MaterialSymbol } from "react-material-symbols";
import { INavMenuItem } from "types";
import { Link } from "react-router-dom";

interface NavMenuItemProps {
  url: INavMenuItem;
  id: number;
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({
  url,
  id,
  selectedPage,
  setSelectedPage,
}) => {
  return (
    <Link to={`/${url}`} onClick={() => setSelectedPage(id)}>
      <MaterialSymbol
        icon={url}
        size={47}
        grade={-25}
        color="#53268D"
        className="nav-menu__item"
        fill={id === selectedPage}
      />
    </Link>
  );
};

export default NavMenuItem;
