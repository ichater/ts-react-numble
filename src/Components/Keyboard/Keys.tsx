import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import InputKey from "./InputKey";
import { EnterKey, KeyboardWrapper } from "./styles/styles";

function Keys(): JSX.Element {
  const { keys } = useContext(GameContext);
  return (
    <div>
      <KeyboardWrapper>
        {keys.map((key) => (
          <InputKey operator={key} key={key} />
        ))}
      </KeyboardWrapper>
      <EnterKey>Enter</EnterKey>
    </div>
  );
}

export default Keys;
