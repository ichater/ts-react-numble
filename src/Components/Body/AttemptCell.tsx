import React from "react";
import { Cell as CellType } from "../../Types/Types";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  value: CellType;
};

function AttemptCell({ value }: AttemptsCellProps) {
  return (
    <div>
      <Cell color={value.color}>{value.content}</Cell>
    </div>
  );
}

export default AttemptCell;
