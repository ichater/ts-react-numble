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
  updateAttemptState: (value: AcceptedInputs, isBackspace: boolean) => void;
  equasionObject: EquasionObject;
  handleSubmit: () => void;
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
  handleSubmit: () => {},
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [activeCell, setActiveCell] = useState<number>(0);
  const [activeRow, setActiveRow] = useState<number>(0);
  const [attemptsState, setAttemptsState] =
    useState<AcceptedInputs[][]>(attemptsArray);
  const [equasionObject, setEquasionOject] = useState<EquasionObject>(
    defaultEquasionObject
  );

  const handleSubmit = () => {
    if (activeCell === attemptsState[activeRow].length) {
      setActiveCell(0);
      setActiveRow((row) => row + 1);
    }
  };

  const updateAttemptState = (value: any, isBackSpace: boolean) => {
    if (activeCell - 1 >= 0 && isBackSpace) {
      // If BackSpace is pressed
      setActiveCell((cell) => cell - 1);
      setAttemptsState((attemptArr) => {
        attemptArr[activeRow][activeCell - 1] = "";
        return attemptArr;
      });
    }
    // Other possibilities
    if (keys.includes(value) && activeCell <= 6) {
      setActiveCell((cell) => cell + 1);
      setAttemptsState((attemptArr) => {
        attemptArr[activeRow][activeCell] = value;
        return attemptArr;
      });
    }
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
        handleSubmit,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
