import { useContext } from "react";
import { GameContext } from "../../Context/GameContext";

import BodyMain from "./BodyMain";
import GameWon from "./GameWon";
import { BodyWrapper } from "./Styles/Styles";

const Body = () => {
  const { gameWon, equasionObject } = useContext(GameContext);
  return (
    <>
      <p>{equasionObject.equasionArray.join(" ")}</p>
      <BodyWrapper>
        <BodyMain />
      </BodyWrapper>
      {gameWon && <GameWon />}
    </>
  );
};

export default Body;
