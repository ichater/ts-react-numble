import styled from "styled-components";
import { CellColor } from "../../../Types/Types";

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

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border: 1px solid ${(props) => props.color};
  margin: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => (props.color === CellColor.plain ? "black" : "white")};
  background-color: ${(props) => props.color};
  :hover {
    background-color: ${(props) => {
      if (props.color === CellColor.plain) return "rgb(108, 117, 125)";
      if (props.color === CellColor.green) return "#28a7465e";
      if (props.color === CellColor.yellow) return "#ffc1076b";
    }};
    cursor: pointer;
    color: white;
  }
`;

export const WonCellWrapper = styled.div`
  display: flex;
  width: 300px;
  margin: auto;
`;

export const WonCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border: 1px solid ${(props) => props.color};
  margin: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  text-align: center;
  color: white;
  background-color: #dc3545;
  :hover {
    cursor: pointer;
    background-color: #bd4242;
  }
`;
