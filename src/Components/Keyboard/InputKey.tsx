import React from "react";
import { InputKeyStyle } from "./styles/styles";

type InputKeyProps = {
  operator: string;
};

const InputKey = ({ operator }: InputKeyProps): JSX.Element => {
  return <InputKeyStyle>{operator}</InputKeyStyle>;
};
export default InputKey;
