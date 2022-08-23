import { useContext } from "react";
import { GameContext } from "../../Context/GameContext";
import Answer from "./Answer";
import BodyMain from "./BodyMain";
import GameWon from "./GameWon";
import { BodyWrapper } from "./Styles/Styles";

const Body = () => {
  const { gameWon } = useContext(GameContext);
  return (
    <>
      <BodyWrapper>
        <BodyMain />
        <Answer />
      </BodyWrapper>
      {gameWon && <GameWon />}
    </>
  );
};

export default Body;
