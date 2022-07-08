import React from "react";
import Keys from "./Keys";
import { KeyboardAreaWrapper, KeyboardWrapper } from "./styles/styles";

function Keyboard() {
  return (
    <KeyboardAreaWrapper>
      <Keys />
    </KeyboardAreaWrapper>
  );
}

export default Keyboard;
