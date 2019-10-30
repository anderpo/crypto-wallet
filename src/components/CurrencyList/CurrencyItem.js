import React from "react";
import {Link as DefaulLink} from 'react-router-dom';
import styled from "styled-components";
import Currency from "./../Currency/Currency";
import Text from "./../Text/Text";
import Dollar from "./../../assets/icons/dollar";
import theme from "./../../styles/MainTheme";
import Profit from "./Profit";

const Link = styled(DefaulLink)`
  width: 100%;
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 15px;
  background-color: rgba(159, 160, 165, 0.1);
`;

const HR = styled.div`
  height: 1px;
  background-color: rgba(159, 160, 165, 0.1);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CurrencyItem = ({ currency, myCoin }) => {
  const { name, fullName, price } = currency;
  const { amount, profit, profitPercent } = myCoin;
  return (
    <Link to="/currency-rate">
      <Row style={{ paddingBottom: "15px" }}>
        <Col>
          <Currency curr={name} fullName={fullName} />
        </Col>
        <Col style={{ alignItems: "flex-end" }}>
          <Text.Tertiary size={15}>{amount}</Text.Tertiary>
          <Row>
            <Dollar width={12} height={18} fill={theme.spunPearl} />
            <Text.Secondary size={12}>{profit}</Text.Secondary>
          </Row>
        </Col>
      </Row>
      <HR />
      <Row style={{ paddingTop: "15px" }}>
        <Col>
          <Row>
            <Dollar width={12} height={18} />
            <Text.Tertiary size={12}>{price.USD}</Text.Tertiary>
          </Row>
          <Text.Secondary size={12}>Price</Text.Secondary>
        </Col>
        <Col style={{ alignItems: "flex-end" }}>
          <Profit value={profitPercent} profit={profitPercent > 0 || profitPercent === 0} />
          <Text.Secondary size={12}>Profit / Loss</Text.Secondary>
        </Col>
      </Row>
    </Link>
  );
};

export default CurrencyItem;
