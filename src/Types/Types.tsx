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
