import React from "react";
import styled from "styled-components";
import Currency from "./../Currency/Currency";
import Text from "./../Text/Text";
import PercentProfit from "./../PercentProfit/PercentProfit";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 190px;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(159, 160, 165, 0.1);
  margin: 0 4px;
  padding: 8px;

  &:first-child {
    margin: 0 4px 0 15px;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CurrencyItem = ({ coin = {}, carouselMode = false }) => {
  const { name, fullName, amount, profitPercent } = coin;
  return (
    <Wrapper>
      <Currency curr={name} fullName={fullName} />
      <Col>
        <Text.Tertiary size={15}>{amount}</Text.Tertiary>
        <PercentProfit value={profitPercent} />
      </Col>
    </Wrapper>
  );
};

export default CurrencyItem;
