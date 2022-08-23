import { CellState } from "../../Types/Types";
import AttemptCell from "./AttemptCell";
import { AttemptsRowWrapper } from "./Styles/Styles";

type AttemptsRowProps = {
  cellArr: CellState[];
  isActiveRow: boolean;
};

function AttemptsRow({ cellArr }: AttemptsRowProps) {
  return (
    <AttemptsRowWrapper>
      {cellArr.map((value, index) => {
        return <AttemptCell key={index} value={value} />;
      })}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
