import { createContext, useState } from "react";

type GameContextProps = {
  activeCell: boolean;
  setActiveCell: React.Dispatch<React.SetStateAction<boolean>>;
  keys: string[];
};

export const GameContext = createContext<GameContextProps>({
  activeCell: false,
  setActiveCell: () => {},
  keys: [],
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "<-",
  ];
  const [activeCell, setActiveCell] = useState(true);

  return (
    <GameContext.Provider value={{ activeCell, setActiveCell, keys }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
