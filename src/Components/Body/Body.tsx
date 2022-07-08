import Answer from "./Answer";
import BodyMain from "./BodyMain";
import { BodyWrapper } from "./Styles/Styles";

const Body = () => {
  return (
    <BodyWrapper>
      <BodyMain />
      <Answer />
    </BodyWrapper>
  );
};

export default Body;
