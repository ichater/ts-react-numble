import { createContext, SetStateAction, useState, useEffect } from "react";
import { attemptsArray } from "../utils/AttemptsArray";
import {
  AcceptedInputs,
  CellColor,
  Cell,
  EquasionObject,
} from "../Types/Types";
import {
  defaultEquasionObject,
  randomEquasionObject,
  validEquasion,
} from "../utils/EquasionGenerator";
import { determineGreenYellowBlack } from "../utils/EquasionValidator";
import { keysArray } from "../utils/KeysArray";

type GameContextProps = {
  activeCell: number;
  setActiveCell: React.Dispatch<React.SetStateAction<number>>;
  keys: Cell[];
  attemptsArray: Cell[][];
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
  const [attemptsState, setAttemptsState] = useState<Cell[][]>(attemptsArray);
  const [equasionObject, setEquasionOject] = useState<EquasionObject>(
    defaultEquasionObject
  );
  const [gameWon, setGameWon] = useState<boolean>(false);

  const [keys, setKeys] = useState<Cell[]>(keysArray);

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

        setKeys((keyArr) => {
          keyArr.forEach((key) => {
            attemptsState[activeRow].forEach((cell) => {
              if (key.content !== cell.content) return;
              if (
                cell.color === CellColor.green ||
                key.color === CellColor.green
              )
                return (key.color = CellColor.green);
              if (
                cell.color === CellColor.yellow ||
                key.color === CellColor.yellow
              )
                return (key.color = CellColor.yellow);
              if (
                cell.color === CellColor.black ||
                key.color === CellColor.black
              )
                return (key.color = CellColor.black);
            });
          });
          return [...keyArr];
        });
      }
    }
  };

  const updateAddAttemptState = (value: any) => {
    if (gameWon) return;
    const keyInputs = keys.map((key) => key.content);
    if (keyInputs.includes(value) && activeCell <= 6) {
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
