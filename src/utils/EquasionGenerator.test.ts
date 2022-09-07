import {
  answerIsInt,
  dividedIsInt,
  randomEquasionArray,
  validEquasion,
} from "./EquasionGenerator";

describe("Equasion Generator", () => {
  describe("randomEquasionArray", () => {
    it("even index to be a number", () => {
      expect(typeof parseInt(randomEquasionArray([0, 1, 2])[0])).toBe("number");
    });
  });
  describe("answerIsInt", () => {
    it("1 + 1 in array is truthy", () => {
      expect(answerIsInt(["1", "+", "1"])).toBeTruthy();
    });
    it("Equasion that leads to a decimal is falsey", () => {
      expect(answerIsInt(["9", "/", "5"])).toBeFalsy();
    });
  });

  describe("validEquasion", () => {
    it("9 / 3 has an answer of 3 and the same equasion array is spat back outt", () => {
      expect(validEquasion(["9", "/", "3"]).answer).toEqual(3);
      expect(validEquasion(["9", "/", "3"]).equasionArray).toEqual([
        "9",
        "/",
        "3",
      ]);
    });
    it("an equasion that divides by zero will not be parsed", () => {
      expect(validEquasion(["9", "/", "0"]).equasionArray).not.toEqual([
        "9",
        "/",
        "0",
      ]);
    });
    it("an equasion thats answer is a decimal wont be parsed", () => {
      expect(validEquasion(["5", "/", "2"]).answer).not.toEqual(2.5);
      expect(validEquasion(["5", "/", "2"]).equasionArray).not.toEqual([
        "5",
        "/",
        "2",
      ]);
    });
  });

  describe("dividedIsInt", () => {
    it("divided not in equasion returns true", () => {
      expect(dividedIsInt(["9", "*", "3"])).toBeTruthy();
    });
    it("divided is in equasion and answer is int returns true", () => {
      expect(dividedIsInt(["9", "/", "3"])).toBeTruthy();
    });
    it("divided is in equasion and answer is not int returns false", () => {
      expect(dividedIsInt(["9", "/", "2"])).toBeFalsy();
    });
    it("dividing by zero returns false", () => {
      expect(dividedIsInt(["9", "/", "0"])).toBeFalsy();
    });
  });
});
