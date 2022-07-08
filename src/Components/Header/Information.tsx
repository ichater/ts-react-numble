import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { InformationWrapper } from "./Styles/Styles";

type Props = {
  setDisplayInformation: Dispatch<SetStateAction<boolean>>;
  displayInformation: boolean;
};

const Information = ({ setDisplayInformation, displayInformation }: Props) => {
  return (
    <InformationWrapper>
      <AiOutlineInfoCircle
        onClick={() => {
          setDisplayInformation(!displayInformation);
        }}
      />{" "}
    </InformationWrapper>
  );
};

export default Information;
