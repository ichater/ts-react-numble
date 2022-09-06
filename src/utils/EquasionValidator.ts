import { Cell, CellColor } from "../Types/Types";
import { validEquasion } from "./EquasionGenerator";

export const extractEquasionFromAttempt = (currentRow: Cell[]): string[] =>
  currentRow.map((e) => e.content);

export const isCorrectAnswer = (answer: string[], attempt: string[]): boolean =>
  validEquasion(answer).answer === validEquasion(attempt).answer;

export const determineGreenYellowBlack = (
  answer: string[],
  attempt: string[]
): CellColor[] => {
  const isGreen = answer.map((val, index) =>
    val === attempt[index] ? CellColor.green : "not green"
  );
  const nonGreenIndexes = isGreen
    .map((val, index) => (val === "not green" ? index : null))
    .filter((e) => typeof e === "number");

  const nonGreenInAnswer = answer.filter((_, index) =>
    nonGreenIndexes.includes(index)
  );
  const nonGreenInAttempt = attempt.filter((_, index) =>
    nonGreenIndexes.includes(index)
  );

  const yellowAndBlack = nonGreenInAnswer.map((val) => {
    if (nonGreenInAttempt.includes(val)) {
      const yellow = CellColor.yellow;
      nonGreenInAttempt.splice(
        nonGreenInAttempt.findIndex((e) => e === val),
        1
      );
      return yellow;
    } else {
      return CellColor.black;
    }
  });

  return isGreen.map((val) => {
    if (val !== CellColor.green) {
      const yellowOrBlack = yellowAndBlack.slice(0, 1)[0];
      yellowAndBlack.shift();
      return yellowOrBlack;
    } else {
      return val;
    }
  });
};
