import { Operator, EquasionObject } from "../Types/Types";

const randomIntToString = (max: number): string =>
  Math.floor(Math.random() * max).toString();

// Generates a random operator.
function getRandomOperator(): Operator {
  const operator = () => {
    switch (Math.floor(Math.random() * 4)) {
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

export const dividedIsInt = (equasion: string[]): boolean => {
  if (equasion.includes("/")) {
    const newArr: ("good" | "bad")[] = equasion.map((item, index) => {
      if (item === "/") {
        return answerIsInt([
          equasion[index - 1],
          equasion[index],
          equasion[index + 1],
        ])
          ? "good"
          : "bad";
      } else {
        return "good";
      }
    });
    return !newArr.includes("bad");
  }
  return true;
};

export const validEquasion = (equasionArr: string[]): EquasionObject => {
  if (!answerIsInt(equasionArr) || !dividedIsInt(equasionArr)) {
    return validEquasion(randomEquasionArray(sevenArr));
  }

  return { equasionArray: equasionArr, answer: sum(equasionArr.join(""))() };
};

export const randomEquasionObject = validEquasion(
  randomEquasionArray(sevenArr)
);

export const defaultEquasionObject: EquasionObject = {
  equasionArray: ["1", "+", "2", "/", "2", "*", "7"],
  answer: 8,
};
