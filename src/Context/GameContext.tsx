import { createContext, SetStateAction, useState, useEffect } from "react";
import { attemptsArray } from "../utils/AttemptsArray";
import { AcceptedInputs, EquasionObject } from "../Types/Types";
import {
  defaultEquasionObject,
  randomEquasionObject,
} from "../utils/EquasionGenerator";

type GameContextProps = {
  activeCell: number;
  setActiveCell: React.Dispatch<React.SetStateAction<number>>;
  keys: string[];
  attemptsArray: AcceptedInputs[][];
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
  updateAttemptState: (value: AcceptedInputs) => void;
  equasionObject: EquasionObject;
};

export const GameContext = createContext<GameContextProps>({
  activeCell: 0,
  setActiveCell: () => {},
  keys: [],
  attemptsArray: [[""]],
  activeRow: 0,
  setActiveRow: () => {},
  updateAttemptState: () => {},
  equasionObject: defaultEquasionObject,
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [activeCell, setActiveCell] = useState<number>(0);
  const [activeRow, setActiveRow] = useState<number>(0);
  const [attemptsState, setAttemptsState] =
    useState<AcceptedInputs[][]>(attemptsArray);
  const [equasionObject, setEquasionOject] = useState<EquasionObject>(
    defaultEquasionObject
  );

  const updateAttemptState = (value: any) => {
    setActiveCell((cell) => cell + 1);
    setAttemptsState((attemptArr) => {
      attemptArr[activeRow][activeCell] = value;
      return attemptArr;
    });
  };

  useEffect(() => {
    return setEquasionOject(randomEquasionObject);
  }, []);

  const keys: AcceptedInputs[] = [
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
        equasionObject,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
