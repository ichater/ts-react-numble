import { CellColor, Cell } from "../Types/Types";
import {
  determineGreenYellowBlack,
  extractEquasionFromAttempt,
  isCorrectAnswer,
} from "./EquasionValidator";

describe("equasionValiidator", () => {
  describe("extractEquasionFromAttempt", () => {
    it("returns the content from thee equasion array", () => {
      const currentArr: Cell[] = [
        { content: "1", color: CellColor.plain },
        { content: "+", color: CellColor.plain },
        { content: "1", color: CellColor.plain },
      ];
      expect(extractEquasionFromAttempt(currentArr)).toEqual(["1", "+", "1"]);
    });
  });
  describe("isCorrectAnswer", () => {
    it("retturns true if the answers are the same", () => {
      const attempt = ["1", "+", "3"];
      const answer = ["8", "/", "2"];
      expect(isCorrectAnswer(attempt, answer)).toBeTruthy();
    });
    it("retturns false if the answers are not the same", () => {
      const attempt = ["1", "+", "3"];
      const answer = ["8", "/", "4"];
      expect(isCorrectAnswer(attempt, answer)).toBeFalsy();
    });
  });
  describe("determineGreenYellowBlack", () => {
    it("returns all black if no answers are in thee array", () => {
      const attempt = ["1", "+", "3"];
      const answer = ["8", "/", "4"];

      expect(determineGreenYellowBlack(attempt, answer)).toEqual([
        CellColor.black,
        CellColor.black,
        CellColor.black,
      ]);
    });
    it("returns some yellow if the attempt has the correct elements in thhee wrong place", () => {
      const attempt = ["1", "+", "3"];
      const answer = ["3", "+", "1"];

      expect(determineGreenYellowBlack(attempt, answer)).toEqual([
        CellColor.yellow,
        CellColor.green,
        CellColor.yellow,
      ]);
    });

    it("returns all green if the attemptt and answer are the same", () => {
      const attempt = ["1", "+", "3"];
      const answer = ["1", "+", "3"];

      expect(determineGreenYellowBlack(attempt, answer)).toEqual([
        CellColor.green,
        CellColor.green,
        CellColor.green,
      ]);
    });
    it("returns a mixture of green, yellow and black if some answers are correct,some are in thee wrong place and some are not preseent", () => {
      const attempt = ["1", "-", "2", "/", "2", "+", "0"];
      const answer = ["1", "+", "3", "-", "4", "-", "0"];

      expect(determineGreenYellowBlack(attempt, answer)).toEqual([
        CellColor.green,
        CellColor.yellow,
        CellColor.black,
        CellColor.black,
        CellColor.black,
        CellColor.yellow,
        CellColor.green,
      ]);
    });
  });
});
