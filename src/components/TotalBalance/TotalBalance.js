import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";
import Dollar from "./../../assets/icons/dollar";
import TotalProfit from "./TotalProfit";

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

const Period = styled(Text.Primary)`
  font-size: 13px;
`;

const TotalBalance = ({ balance, profit }) => {
  return (
    <Wrapper>
      <Text.Primary size={10}>Your total balance</Text.Primary>
      <Balance>
        <Dollar />
        <Text.Tertiary size={30}>{balance}</Text.Tertiary>
      </Balance>
      <Period>24h Changes</Period>
      <TotalProfit value={profit} />
    </Wrapper>
  );
};

export default TotalBalance;
