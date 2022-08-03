import React, { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import { AnswerWrapper, Equals } from "./Styles/Styles";

function Answer() {
  const { equasionObject } = useContext(GameContext);
  return (
    <AnswerWrapper>
      <div>
        <p>{equasionObject.equasionArray.join(" ")}</p>
        <Equals>{equasionObject.answer}</Equals>
      </div>
    </AnswerWrapper>
  );
}

export default Answer;
