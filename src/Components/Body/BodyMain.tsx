import AttemptsRow from "./AttemptsRow";
import {
  AttemptColumns,
  AttemptsColumnsWrapper,
  BodyMainWrapper,
} from "./Styles/Styles";

const attemptsArr = [1, 2, 3, 4, 5, 6];

function BodyMain() {
  return (
    <BodyMainWrapper>
      <AttemptsColumnsWrapper>
        {attemptsArr.map((attempt) => (
          <AttemptColumns>
            <AttemptsRow />
          </AttemptColumns>
        ))}
      </AttemptsColumnsWrapper>
    </BodyMainWrapper>
  );
}

export default BodyMain;
