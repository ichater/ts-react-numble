import AttemptCell from "./AttemptCell";
import { AttemptsRowWrapper } from "./Styles/Styles";

const CellsArr = [1, 2, 3, 4, 5, 6, 7];

function AttemptsRow() {
  return (
    <AttemptsRowWrapper>
      {CellsArr.map((cellArr) => {
        return <AttemptCell />;
      })}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
