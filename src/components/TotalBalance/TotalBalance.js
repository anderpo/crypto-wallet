import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Dollar from "./../../assets/icons/dollar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Balance = styled.div`
  margin: 15px 0 25px 0;
  display: flex;

`;

const TotalBalance = () => {
  return (
    <Wrapper>
      <Text.Primary size={10}>Your total balance</Text.Primary>
      <Balance>
        <Dollar />
        <Text.Tertiary size={30}>1,632.95</Text.Tertiary>
      </Balance>
    </Wrapper>
  );
};

export default TotalBalance;
