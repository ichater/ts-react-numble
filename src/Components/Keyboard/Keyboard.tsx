import React, { useEffect, useContext } from "react";
import Keys from "./Keys";
import { KeyboardAreaWrapper } from "./styles/styles";
import { GameContext } from "../../Context/GameContext";

function Keyboard() {
  const {
    keys,
    updateAddAttemptState,
    updateDeleteAttemptState,
    handleSubmit,
    gameWon,
  } = useContext(GameContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") updateDeleteAttemptState();
      if (event.key === "Enter") handleSubmit();
      const result = keys.filter((e) => e.content === event.key).length > 0;
      result && updateAddAttemptState(event.key as any);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys, updateAddAttemptState, updateDeleteAttemptState]);

  return (
    <>
      {!gameWon && (
        <KeyboardAreaWrapper>
          <Keys />
        </KeyboardAreaWrapper>
      )}
    </>
  );
}

export default Keyboard;
