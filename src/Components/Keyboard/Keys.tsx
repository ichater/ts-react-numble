import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import InputKey from "./InputKey";
import { EnterKey, KeyboardWrapper } from "./styles/styles";

function Keys(): JSX.Element {
  const { keys, handleSubmit } = useContext(GameContext);
  return (
    <div>
      <KeyboardWrapper>
        {keys.map((key) => (
          <InputKey operator={key} key={key} />
        ))}
      </KeyboardWrapper>
      <EnterKey onClick={() => handleSubmit()}>Enter</EnterKey>
    </div>
  );
}

export default Keys;
