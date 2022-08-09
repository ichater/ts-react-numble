import React from "react";
import { AcceptedInputs } from "../../Types/Types";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  value: AcceptedInputs;
};

function AttemptCell({ value }: AttemptsCellProps) {
  return (
    <div>
      <Cell>{value}</Cell>
    </div>
  );
}

export default AttemptCell;
