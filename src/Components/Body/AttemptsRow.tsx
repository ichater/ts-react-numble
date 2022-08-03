import { useContext } from "react";
import { GameContext, AcceptedInputs } from "../../Context/GameContext";
import AttemptCell from "./AttemptCell";
import { AttemptsRowWrapper } from "./Styles/Styles";

type AttemptsRowProps = {
  cellArr: AcceptedInputs[];
  isActiveRow: boolean;
};

function AttemptsRow({ cellArr, isActiveRow }: AttemptsRowProps) {
  const { activeCell } = useContext(GameContext);
  return (
    <AttemptsRowWrapper>
      {cellArr.map((value, index) => {
        return (
          <AttemptCell
            key={index}
            isActive={isActiveRow && index === activeCell}
            value={value}
          />
        );
      })}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
