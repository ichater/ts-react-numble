import React, { useEffect, useContext } from "react";
import Keys from "./Keys";
import { KeyboardAreaWrapper } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";

function Keyboard() {
  const { keys, updateAttemptState } = useContext(GameContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        return updateAttemptState("", true);
      }
      const result = keys.filter((e) => e === event.key).length > 0;
      result && updateAttemptState(event.key as any, false);
    };

    document.addEventListener("keypress", handleKeyDown);

    return () => document.removeEventListener("keypress", handleKeyDown);
  }, [keys, updateAttemptState]);

  return (
    <KeyboardAreaWrapper>
      <Keys />
    </KeyboardAreaWrapper>
  );
}

export default Keyboard;
