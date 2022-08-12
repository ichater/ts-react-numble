import React, { useEffect, useContext } from "react";
import Keys from "./Keys";
import { KeyboardAreaWrapper } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";

function Keyboard() {
  const { keys, updateAddAttemptState, updateDeleteAttemptState } =
    useContext(GameContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        return updateDeleteAttemptState();
      }
      const result = keys.filter((e) => e === event.key).length > 0;
      result && updateAddAttemptState(event.key as any);
    };

    window.addEventListener("keypress", handleKeyDown);

    return () => window.removeEventListener("keypress", handleKeyDown);
  }, [keys, updateAddAttemptState, updateDeleteAttemptState]);

  return (
    <KeyboardAreaWrapper>
      <Keys />
    </KeyboardAreaWrapper>
  );
}

export default Keyboard;
