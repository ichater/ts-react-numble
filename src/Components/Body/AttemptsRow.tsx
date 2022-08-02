import AttemptCell from "./AttemptCell";
import { AttemptsRowWrapper } from "./Styles/Styles";

type AttemptsRowProps = {
  cellArr: number[];
  isActiveRow: boolean;
};

function AttemptsRow({ cellArr, isActiveRow }: AttemptsRowProps) {
  return (
    <AttemptsRowWrapper>
      {cellArr.map((cell, index) => {
        return <AttemptCell key={index} isActive={isActiveRow} />;
      })}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
