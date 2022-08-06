import React from "react";
import { useState } from "react";
import {
  HeaderWrapper,
  NumbleHeading,
  HeaderCluster,
  HeaderSideBar,
} from "./Styles/Styles";
import { AiOutlineTable, AiOutlineInfoCircle } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import Information from "./Information";
import DisplayInformation from "./DisplayInformation";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const [displayInformation, setDisplayInformation] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderCluster>
        <Information
          setDisplayInformation={setDisplayInformation}
          displayInformation={displayInformation}
        />
        <NumbleHeading>{title}</NumbleHeading>
        <HeaderSideBar>
          <AiOutlineTable />
          <FiMoon />
        </HeaderSideBar>
      </HeaderCluster>
      {displayInformation && (
        <DisplayInformation
          setDisplayInformation={setDisplayInformation}
          displayInformation={displayInformation}
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
