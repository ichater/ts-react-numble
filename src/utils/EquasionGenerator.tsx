import React from "react";
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

export const sevenArr = [1, 2, 3, 4, 5, 6, 7];

// Takes array of 7 elements and returns equasion array
export const randomEquasionArray = (arr: number[]): string[] =>
  arr.map((_, i) => (i % 2 === 0 ? randomIntToString(9) : getRandomOperator()));

// Takes in the array and checks if answer is an int returning boolean
const answerIsInt = (equasion: string[]): boolean => {
  const answer = eval(equasion.join(""));
  return answer % 1 === 0;
};

// Takes in array and returns true if dividing by zero
const isDividingByZero = (equasion: string[]): boolean =>
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
    : { equasionArray: equasionArr, answer: eval(equasionArr.join("")) };
};

export const defaultEquasionObject: EquasionObject = {
  equasionArray: ["1", "+", "2", "/", "2", "*", "7"],
  answer: 8,
};
