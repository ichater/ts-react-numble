export type Operator = "+" | "-" | "*" | "/";

export type AcceptedInputs =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "+"
  | "-"
  | "*"
  | "/"
  | ""
  | "<-";

export interface EquasionObject {
  equasionArray: string[];
  answer: number;
}

// export type CellColor = "black" | "yellow" | "plain" | "green";

export enum KeyColor {
  plain = "rgb(108,117,125)",
  yellow = "#ffc107",
  black = "black",
  green = "#28a745",
}

export enum CellColor {
  plain = "",
  dark = "rgb(108,117,125)",
  yellow = "#ffc107",
  black = "black",
  green = "#28a745",
}
export interface Cell {
  content: AcceptedInputs;
  color: CellColor;
}
