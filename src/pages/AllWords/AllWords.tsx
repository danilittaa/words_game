import AllWordsComponent from "components/AllWordsComponent/AllWordsComponent";
import NavMenu from "components/NavMenu/NavMenu";
import Context from "context";
import { useContext, useEffect } from "react";

const AllWords = () => {
  const { setSelectedPage } = useContext(Context);
  useEffect(() => {
    setSelectedPage(3);
  }, []);
  return (
    <NavMenu>
      <AllWordsComponent />
    </NavMenu>
  );
};

export default AllWords;
