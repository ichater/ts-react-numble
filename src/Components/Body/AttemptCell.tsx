import { useContext, useState } from "react";
import { GameContext } from "../../Context/GameContext";
import { Cell } from "./Styles/Styles";

type AttemptsCellProps = {
  isActive: boolean;
};

function AttemptCell({ isActive }: AttemptsCellProps) {
  const [message, setMessage] = useState("");
  const { activeCell } = useContext(GameContext);

  const handleChange = (event: any) => {
    const result = event.target.value.replace(/[^0-9-+*/]/gi, "");

    setMessage(result);
  };

  return (
    <div>
      <Cell
        onChange={handleChange}
        value={message}
        maxLength={1}
        disabled={!isActive}
      />
    </div>
  );
}

export default AttemptCell;
