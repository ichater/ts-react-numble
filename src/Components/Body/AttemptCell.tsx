import React, { useContext, useRef, useEffect } from "react";
import { GameContext } from "../../Context/GameContext";
import { AcceptedInputs } from "../../Types/Types";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  isActive: boolean;
  value: AcceptedInputs;
};

function AttemptCell({ isActive, value }: AttemptsCellProps) {
  const { keys, updateAttemptState } = useContext(GameContext);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (isActive) {
      ref.current?.focus?.();
    }
  }, [isActive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = keys.filter((e) => e === event.target.value).length > 0;
    result && updateAttemptState(event.target.value as any, false);
  };

  const setKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.key === "Backspace") {
      updateAttemptState("", true);
    }
  };

  return (
    <div>
      <Cell
        onChange={handleChange}
        value={value}
        maxLength={2}
        disabled={!isActive}
        autoFocus={isActive}
        ref={ref as any}
        onKeyDown={(e: React.KeyboardEvent) => setKeyDown(e)}
      />
    </div>
  );
}

export default AttemptCell;
