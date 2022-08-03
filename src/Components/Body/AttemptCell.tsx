import React, { useContext, useRef, useEffect } from "react";
import { GameContext, AcceptedInputs } from "../../Context/GameContext";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  isActive: boolean;
  value: AcceptedInputs;
};

function AttemptCell({ isActive, value }: AttemptsCellProps) {
  const { updateAttemptState } = useContext(GameContext);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (isActive) {
      ref.current?.focus?.();
    }
  }, [isActive]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = event.target.value.replace(/[^0-9-+*/]/gi, "");
    result && updateAttemptState(result as any);
  };

  return (
    <div>
      <Cell
        onChange={handleChange}
        value={value}
        maxLength={1}
        disabled={!isActive}
        autoFocus={isActive}
        ref={ref as any}
      />
    </div>
  );
}

export default AttemptCell;
