import React from "react";
import { CellState } from "../../Types/Types";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  value: CellState;
};

function AttemptCell({ value }: AttemptsCellProps) {
  return (
    <div>
      <Cell color={value.color}>{value.content}</Cell>
    </div>
  );
}

export default AttemptCell;
