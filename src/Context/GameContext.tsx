import { createContext, useState } from "react";

type GameContextProps = {
  activeCell: boolean;
  setActiveCell: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GameContext = createContext<GameContextProps>({
  activeCell: false,
  setActiveCell: () => {},
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [activeCell, setActiveCell] = useState(true);

  return (
    <GameContext.Provider value={{ activeCell, setActiveCell }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
