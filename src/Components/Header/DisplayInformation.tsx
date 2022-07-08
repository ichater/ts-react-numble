import React, { Dispatch, SetStateAction } from "react";
import {
  GameRulesBox,
  GameRulesBoxBackground,
  InformationHeader,
  InformationHeaderWrapper,
  InformationLi,
  InformationParagraph,
  InformationSubHeader,
  NumbleCell,
  SampleAnswer,
  SampleAnswerWrapper,
} from "./Styles/Styles";
import { AiOutlineClose } from "react-icons/ai";
import { DARK, SUCCESS, WARNING } from "../../CSS/GlobalStyles";

type Props = {
  setDisplayInformation: Dispatch<SetStateAction<boolean>>;
  displayInformation: boolean;
};

function DisplayInformation({
  setDisplayInformation,
  displayInformation,
}: Props) {
  return (
    <GameRulesBoxBackground>
      <GameRulesBox>
        <InformationHeaderWrapper>
          <InformationHeader>How to Play Numble?</InformationHeader>
          <AiOutlineClose
            style={{ cursor: "pointer", margin: "0 0 auto auto" }}
            onClick={() => {
              setDisplayInformation(!displayInformation);
            }}
          />
        </InformationHeaderWrapper>
        <InformationParagraph>
          You get 6 tries to guess the hidden equation! You get one hint, the
          value!
        </InformationParagraph>
        <InformationParagraph>
          All your guesses need to equate to the value to be accepted.
        </InformationParagraph>
        <SampleAnswerWrapper>
          <SampleAnswer>
            <NumbleCell color={SUCCESS}>2</NumbleCell>
            <NumbleCell color={DARK}>+</NumbleCell>
            <NumbleCell color={DARK}>3</NumbleCell>
            <NumbleCell color={DARK}>-</NumbleCell>
            <NumbleCell color={DARK}>0</NumbleCell>
            <NumbleCell color={DARK}>*</NumbleCell>
            <NumbleCell color={DARK}>1</NumbleCell>
          </SampleAnswer>
          <InformationParagraph> = 5</InformationParagraph>
        </SampleAnswerWrapper>
        <InformationParagraph>
          The number 2 is in the correct place!
        </InformationParagraph>
        <SampleAnswerWrapper>
          <SampleAnswer>
            <NumbleCell color={DARK}>3</NumbleCell>
            <NumbleCell color={DARK}>*</NumbleCell>
            <NumbleCell color={DARK}>2</NumbleCell>
            <NumbleCell color={DARK}>/</NumbleCell>
            <NumbleCell color={DARK}>1</NumbleCell>
            <NumbleCell color={WARNING}>+</NumbleCell>
            <NumbleCell color={DARK}>0</NumbleCell>
          </SampleAnswer>
          <InformationParagraph> = 6</InformationParagraph>
        </SampleAnswerWrapper>
        <InformationParagraph>
          The addition sign "+" exists in the equation but in a different place.
        </InformationParagraph>
        <SampleAnswerWrapper>
          <SampleAnswer>
            <NumbleCell color={SUCCESS}>2</NumbleCell>
            <NumbleCell color={SUCCESS}>*</NumbleCell>
            <NumbleCell color={SUCCESS}>5</NumbleCell>
            <NumbleCell color={SUCCESS}>-</NumbleCell>
            <NumbleCell color={SUCCESS}>1</NumbleCell>
            <NumbleCell color={DARK}>/</NumbleCell>
            <NumbleCell color={SUCCESS}>1</NumbleCell>
          </SampleAnswer>
          <InformationParagraph> = 5</InformationParagraph>
        </SampleAnswerWrapper>
        <InformationParagraph>
          The division sign "/" does not exist in the equation.
        </InformationParagraph>
        <InformationSubHeader>Rules</InformationSubHeader>
        <InformationLi>
          The equation follows the DMAS order of operations.
        </InformationLi>
        <InformationLi>
          Leading 0s are not allowed e.g. 1 will be accepted but 01 won't be.
        </InformationLi>
      </GameRulesBox>
    </GameRulesBoxBackground>
  );
}

export default DisplayInformation;
