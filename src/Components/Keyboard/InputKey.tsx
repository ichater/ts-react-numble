import React, { useContext } from "react";
import { InputKeyStyle } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";
import { CellColor } from "../../Types/Types";

type InputKeyProps = {
  operator: string;
  color: CellColor;
};

const InputKey = ({ operator, color }: InputKeyProps): JSX.Element => {
  const { updateAddAttemptState, updateDeleteAttemptState } =
    useContext(GameContext);

  const handleChange = (event: string) => {
    console.log(event);
    event === "<-"
      ? updateDeleteAttemptState()
      : updateAddAttemptState(event as any);
  };
  return (
    <InputKeyStyle color={color} onClick={() => handleChange(operator)}>
      {operator}
    </InputKeyStyle>
  );
};
export default InputKey;
