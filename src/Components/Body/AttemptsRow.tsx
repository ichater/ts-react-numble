import { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { AcceptedInputs } from "../../Types/Types";
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
        return <AttemptCell key={index} value={value} />;
      })}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
