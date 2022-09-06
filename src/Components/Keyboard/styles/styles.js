import styled from "styled-components";

export const KeyboardAreaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
`;

export const KeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: fit-content;
`;

export const InputKeyStyle = styled.button`
  height: 3rem;
  width: 3rem;
  border: 1px solid rgb(108, 117, 125);
  margin: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  text-align: center;
  /* background-color: rgb(108, 117, 125); */
  background-color: ${(props) => props.color};
  color: white;
  :hover {
    background-color: #343a40;
    cursor: pointer;
  }
`;

export const EnterKey = styled(InputKeyStyle)`
  width: fit-content;
  height: fit-content;
  padding: 0.25rem 3rem;
  font-size: 1rem;
  background-color: rgb(108, 117, 125);
`;
