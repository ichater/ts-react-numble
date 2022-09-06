import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { Cell } from "../../Types/Types";
import AttemptCell from "./AttemptCell";
import { Answer, AttemptsRowWrapper } from "./Styles/Styles";

type AttemptsRowProps = {
  cellArr: Cell[];
  isActiveRow: boolean;
};

function AttemptsRow({ cellArr, isActiveRow }: AttemptsRowProps) {
  const { equasionObject } = useContext(GameContext);
  return (
    <AttemptsRowWrapper>
      {cellArr.map((value, index) => {
        return <AttemptCell key={index} value={value} />;
      })}
      {isActiveRow && <Answer> &nbsp; = &nbsp;{equasionObject.answer}</Answer>}
    </AttemptsRowWrapper>
  );
}

export default AttemptsRow;
