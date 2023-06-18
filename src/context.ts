import { createContext } from "react";

interface ContextProps {
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<ContextProps>({
  selectedPage: 0,
  setSelectedPage: () => {},
});

export default Context;
