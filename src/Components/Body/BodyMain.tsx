import AttemptsRow from "./AttemptsRow";
import { AttemptColumns, BodyMainWrapper } from "./Styles/Styles";

const attemptsArr = [1, 2, 3, 4, 5, 6];

function BodyMain() {
  return (
    <BodyMainWrapper>
      {attemptsArr.map((attempt) => (
        <AttemptColumns>
          <AttemptsRow />
        </AttemptColumns>
      ))}
    </BodyMainWrapper>
  );
}

export default BodyMain;
