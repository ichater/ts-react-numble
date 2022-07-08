import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AnswerWrapper = styled.div`
  width: 30%;
`;

export const BodyMainWrapper = styled.div`
  flex-grow: 4;
`;

export const AttemptColumns = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttemptsRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Cell = styled.input`
  height: 4rem;
  width: 4rem;
  border: 1px solid black;
  margin: 0.5rem;
  border-radius: 5px;
  font-size: 3rem;
  text-align: center;
`;
