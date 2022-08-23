import { Operator, EquasionObject } from "../Types/Types";

const randomIntToString = (max: number): string =>
  Math.floor(Math.random() * max).toString();

// Generates a random operator.
function getRandomOperator(): Operator {
  const operator = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return "+";
      case 1:
        return "-";
      case 2:
        return "/";
      case 3:
        return "*";
      default:
        return "+";
    }
  };
  return operator();
}

const sevenArr = [1, 2, 3, 4, 5, 6, 7];

// Takes array of 7 elements and returns equasion array
export const randomEquasionArray = (arr: number[]): string[] =>
  arr.map((_, i) =>
    i % 2 === 0 ? randomIntToString(10) : getRandomOperator()
  );

// Better than eval()
export const sum = (equasion: string) => new Function(`return ${equasion}`);

// Takes in the array and checks if answer is an int returning boolean
export const answerIsInt = (equasion: string[]): boolean => {
  const answer = sum(equasion.join(""))();
  return answer % 1 === 0;
};

// Takes in array and returns true if dividing by zero
export const isDividingByZero = (equasion: string[]): boolean =>
  equasion
    .map((item, index) =>
      item === "0" && equasion[index - 1] === "/" ? "Bad" : "Good"
    )
    .includes("Bad");

export const validEquasion = (equasionArr: string[]): EquasionObject => {
  if (!answerIsInt(equasionArr)) {
    return validEquasion(randomEquasionArray(sevenArr));
  }

  return isDividingByZero(equasionArr)
    ? validEquasion(randomEquasionArray(sevenArr))
    : { equasionArray: equasionArr, answer: sum(equasionArr.join(""))() };
};

export const randomEquasionObject = validEquasion(
  randomEquasionArray(sevenArr)
);

export const defaultEquasionObject: EquasionObject = {
  equasionArray: ["1", "+", "2", "/", "2", "*", "7"],
  answer: 8,
};
