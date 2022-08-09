import React, { useContext } from "react";
import { InputKeyStyle } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";

type InputKeyProps = {
  operator: string;
};

const InputKey = ({ operator }: InputKeyProps): JSX.Element => {
  const { updateAddAttemptState, updateDeleteAttemptState } =
    useContext(GameContext);
  const handleChange = (event: string) =>
    event === "<-"
      ? updateDeleteAttemptState()
      : updateAddAttemptState(event as any);

  return (
    <InputKeyStyle onClick={() => handleChange(operator)}>
      {operator}
    </InputKeyStyle>
  );
};
export default InputKey;
