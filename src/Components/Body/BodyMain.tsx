import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";

import AttemptsRow from "./AttemptsRow";
import {
  AttemptColumns,
  AttemptsColumnsWrapper,
  BodyMainWrapper,
} from "./Styles/Styles";

function BodyMain(): JSX.Element {
  const { attemptsArray, activeRow } = useContext(GameContext);

  return (
    <BodyMainWrapper>
      <AttemptsColumnsWrapper>
        {attemptsArray.map((arr, index) => (
          <AttemptColumns key={index}>
            <AttemptsRow cellArr={arr} isActiveRow={index === activeRow} />
          </AttemptColumns>
        ))}
      </AttemptsColumnsWrapper>
    </BodyMainWrapper>
  );
}

export default BodyMain;
