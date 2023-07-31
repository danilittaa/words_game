import { FC, useContext, useEffect } from "react";
import Level from "components/Level";
import PlayButton from "components/PlayButton";
import Players from "components/Players";
import RecentWords from "components/RecentWords";
import NavMenu from "components/NavMenu";
import Context from "context";
import { useAppDispatch } from "hook";
import { fetchMe } from "store/userSlice";

const MainPage: FC = () => {
  const { setSelectedPage } = useContext(Context);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setSelectedPage(0);
    dispatch(fetchMe());
  }, []);
  return (
    <NavMenu>
      <div className="main-page">
        <Level />
        <PlayButton />
        <Players />
        <RecentWords />
      </div>
    </NavMenu>
  );
};

export default MainPage;
