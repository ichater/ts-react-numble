import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderCluster = styled.div`
  width: 25%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NumbleHeading = styled.h1`
  font-family: "Courier New", Courier, monospace;
  color: rgb(65, 65, 65);
  font-size: 2.5rem;
`;

export const HeaderSideBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 3em;
`;

export const InformationWrapper = styled.div`
  cursor: pointer;
`;

export const GameRulesBoxBackground = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const GameRulesBox = styled.div`
  width: 500px;
  background: white;
  position: absolute;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-top: 3rem;
`;

export const InformationHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid grey;
`;

export const InformationHeader = styled.h3`
  width: 50%;
  font-family: "Courier New", Courier, monospace;
`;

export const InformationSubHeader = styled.h3`
  text-align: justify;
  font-family: "Courier New", Courier, monospace;
`;

export const InformationParagraph = styled.p`
  font-family: "Courier New", Courier, monospace;
  text-align: justify;
  font-weight: 400;
  line-height: 1.5;
  font-size: 0.8rem;
`;

export const InformationLi = styled.li`
  text-align: justify;
  margin-left: 3rem;
  font-family: "Courier New", Courier, monospace;
  line-height: 1.5;
  font-size: 0.8rem;
`;

export const SampleAnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SampleAnswer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NumbleCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  background-color: ${(props) => props.color};
  color: white;
  margin: 0.25rem;
`;
