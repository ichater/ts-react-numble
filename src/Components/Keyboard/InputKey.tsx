import React, { useContext } from "react";
import { InputKeyStyle } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";

type InputKeyProps = {
  operator: string;
};

const InputKey = ({ operator }: InputKeyProps): JSX.Element => {
  const { updateAttemptState } = useContext(GameContext);
  const handleChange = (event: string) =>
    event === "<-"
      ? updateAttemptState("", true)
      : updateAttemptState(event as any, false);

  return (
    <InputKeyStyle onClick={() => handleChange(operator)}>
      {operator}
    </InputKeyStyle>
  );
};
export default InputKey;
