import styled from "styled-components";

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AnswerWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

export const Equals = styled.div`
  margin-left: 3rem;
  font-family: "Courier New", Courier, monospace;
  font-size: 4rem;
`;

export const BodyMainWrapper = styled.div`
  padding-top: 2rem;
  flex-grow: 4;
  display: flex;
  justify-content: right;
`;

export const AttemptsColumnsWrapper = styled.div`
  width: min-content;
`;

export const AttemptColumns = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttemptsRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10rem;
`;

export const Cell = styled.input`
  height: 3rem;
  width: 3rem;
  border: 1px solid rgb(108, 117, 125);
  margin: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  text-align: center;
  :hover {
    background-color: rgb(108, 117, 125);
    cursor: pointer;
    color: white;
  }
`;
