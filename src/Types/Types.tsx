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

export enum CellColor {
  plain = "",
  yellow = "#ffc107",
  black = "black",
  green = "#28a745",
}

export interface CellState {
  content: AcceptedInputs;
  color: CellColor;
}
