import { createContext, SetStateAction, useState } from "react";

type GameContextProps = {
  activeCell: boolean;
  setActiveCell: React.Dispatch<React.SetStateAction<boolean>>;
  keys: string[];
  attemptsArray: number[][];
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
};

export const GameContext = createContext<GameContextProps>({
  activeCell: false,
  setActiveCell: () => {},
  keys: [],
  attemptsArray: [[1]],
  activeRow: 0,
  setActiveRow: () => {},
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const attemptsArray: number[][] = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7],
  ];
  const [activeCell, setActiveCell] = useState(false);
  const [activeRow, setActiveRow] = useState(0);
  const [attemptsState, setAttemptsState] = useState<number[][]>(attemptsArray);

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

  const EQUASION = ["9", "*", "6", "-", "3", "+", "5"];

  console.log(eval(EQUASION.join("")));

  return (
    <GameContext.Provider
      value={{
        activeCell,
        setActiveCell,
        activeRow,
        setActiveRow,
        keys,
        attemptsArray: attemptsState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
