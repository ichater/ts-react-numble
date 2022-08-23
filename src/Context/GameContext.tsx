import { createContext, SetStateAction, useState, useEffect } from "react";
import { attemptsArray } from "../utils/AttemptsArray";
import {
  AcceptedInputs,
  CellColor,
  CellState,
  EquasionObject,
} from "../Types/Types";
import {
  defaultEquasionObject,
  randomEquasionObject,
  validEquasion,
} from "../utils/EquasionGenerator";
import { determineGreenYellowBlack } from "../utils/EquasionValidator";

type GameContextProps = {
  activeCell: number;
  setActiveCell: React.Dispatch<React.SetStateAction<number>>;
  keys: string[];
  attemptsArray: CellState[][];
  activeRow: number;
  setActiveRow: React.Dispatch<SetStateAction<number>>;
  updateAddAttemptState: (value: AcceptedInputs) => void;
  updateDeleteAttemptState: () => void;
  equasionObject: EquasionObject;
  handleSubmit: () => void;
  gameWon: boolean;
};

export const GameContext = createContext<GameContextProps>({
  activeCell: 0,
  setActiveCell: () => {},
  keys: [],
  attemptsArray: [[{ content: "", color: CellColor.plain }]],
  activeRow: 0,
  setActiveRow: () => {},
  updateAddAttemptState: () => {},
  updateDeleteAttemptState: () => {},
  equasionObject: defaultEquasionObject,
  handleSubmit: () => {},
  gameWon: false,
});

const GameContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [activeCell, setActiveCell] = useState<number>(0);
  const [activeRow, setActiveRow] = useState<number>(0);
  const [attemptsState, setAttemptsState] =
    useState<CellState[][]>(attemptsArray);
  const [equasionObject, setEquasionOject] = useState<EquasionObject>(
    defaultEquasionObject
  );
  const [gameWon, setGameWon] = useState<boolean>(false);

  const handleSubmit = () => {
    const attemptArray = attemptsState[activeRow].map((i) => i.content);

    if (
      activeCell === attemptsState[activeRow].length &&
      validEquasion(attemptArray).answer === equasionObject.answer
    ) {
      const greenBlackYellow = determineGreenYellowBlack(
        attemptArray,
        equasionObject.equasionArray
      );

      const validatedRow = attemptsState[activeRow].map((value, index) => ({
        ...value,
        color: greenBlackYellow[index],
      }));

      if (attemptArray.toString() === equasionObject.equasionArray.toString()) {
        setAttemptsState((attemptsState) => {
          attemptsState[activeRow] = validatedRow;
          return [...attemptsState];
        });
        setGameWon(true);
      } else {
        setAttemptsState((attemptsState) => {
          attemptsState[activeRow] = validatedRow;
          return [...attemptsState];
        });
        setActiveCell(0);
        setActiveRow((row) => row + 1);
      }
    }
  };

  const updateAddAttemptState = (value: any) => {
    if (gameWon) return;
    if (keys.includes(value) && activeCell <= 6) {
      setActiveCell((cell) => cell + 1);
      setAttemptsState((attemptArr) => {
        attemptArr[activeRow][activeCell].content = value;
        return [...attemptArr];
      });
    }
  };

  const updateDeleteAttemptState = () => {
    if (gameWon) return;
    if (activeCell - 1 >= 0) {
      setActiveCell((cell) => cell - 1);
      setAttemptsState((attemptArr) => {
        attemptArr[activeRow][activeCell - 1].content = "";
        return [...attemptArr];
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
        updateAddAttemptState,
        updateDeleteAttemptState,
        equasionObject,
        handleSubmit,
        gameWon,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
