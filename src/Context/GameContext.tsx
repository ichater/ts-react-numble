import { createContext, SetStateAction, useState } from "react";

export type AcceptedInputs =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "+"
  | "-"
  | "*"
  | "/"
  | "";

type GameContextProps = {
  activeCell: number;
  setActiveCell: React.Dispatch<React.SetStateAction<number>>;
  keys: string[];
  attemptsArray: AcceptedInputs[][];
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
  updateAttemptState: (value: AcceptedInputs) => void;
};

export const GameContext = createContext<GameContextProps>({
  activeCell: 0,
  setActiveCell: () => {},
  keys: [],
  attemptsArray: [[""]],
  activeRow: 0,
  setActiveRow: () => {},
  updateAttemptState: () => {},
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const attemptsArray: AcceptedInputs[][] = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];
  const [activeCell, setActiveCell] = useState(0);
  const [activeRow, setActiveRow] = useState(0);
  const [attemptsState, setAttemptsState] =
    useState<AcceptedInputs[][]>(attemptsArray);

  const updateAttemptState = (value: any) => {
    setActiveCell((cell) => cell + 1);
    setAttemptsState((attemptArr) => {
      attemptArr[activeRow][activeCell] = value;
      return attemptArr;
    });
  };

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
        updateAttemptState,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
