import React from "react";
import styled from "styled-components";
import Currency from "../Currency/Currency";
import Text from "../Text/Text";
import PercentProfit from "../PercentProfit/PercentProfit";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 190px;
  height: 110px;
  border-radius: 5px;
  padding: 0 34px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const SelectedCurrency = props => {
  const { coin } = props;
  const { name, fullName, amount, profitPercent } = coin;
  return (
    <Wrapper>
      <Currency curr={name} fullName={fullName} large/>
      <Col>
        <Text.Tertiary size={17}>{amount}</Text.Tertiary>
        <PercentProfit value={profitPercent} />
      </Col>
    </Wrapper>
  );
};

export default SelectedCurrency;
