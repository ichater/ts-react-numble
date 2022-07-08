import AttemptCell from "./AttemptCell";
import {
  AttemptColumns,
  AttemptsRowWrapper,
  BodyMainWrapper,
} from "./Styles/Styles";

const CellsArr = [1, 2, 3, 4, 5, 6];

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
