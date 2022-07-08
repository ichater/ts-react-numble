import { useContext } from "react";
import Answer from "./Answer";
import BodyMain from "./BodyMain";
import { BodyWrapper } from "./Styles/Styles";
import { GameContext } from "../../Context/GameContext";

const Body = () => {
  return (
    <BodyWrapper>
      <BodyMain />
      <Answer />
    </BodyWrapper>
  );
};

export default Body;
