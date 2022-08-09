import React from "react";
import { AcceptedInputs, CellState } from "../Types/Types";
import { validEquasion } from "./EquasionGenerator";

const extractEquasionFromAttempt = (
  currentRow: CellState[]
): AcceptedInputs[] => currentRow.map((e) => e.content);

const isCorrectAnswer = (answer: string[], attempt: string[]): boolean =>
  validEquasion(answer).answer === validEquasion(attempt).answer;

const isCorrectEquasion = (
  answerArray: string[],
  attemptArray: string[]
): boolean =>
  answerArray.length === attemptArray.length &&
  answerArray.every((val, index) => val === attemptArray[index]);

const isGreenYellowBlack = (
  attemptArray: string[],
  answerArray: string[]
): string[] => {
  return attemptArray.map((val, index) => {
    if (val === answerArray[index]) {
      return "green";
    } else {
      return answerArray.includes(val) ? "yellow" : "black";
    }
  });
};
