import { MaterialSymbol } from "react-material-symbols";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "context";
import { navMenuItemType } from "types/types";

interface NavMenuItemProps {
  url: navMenuItemType;
  id: number;
}

const NavMenuItem: React.FC<NavMenuItemProps> = ({ url, id }) => {
  const { selectedPage } = useContext(Context);
  return (
    <Link to={`/${url}`}>
      <MaterialSymbol
        icon={url || "home"}
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
