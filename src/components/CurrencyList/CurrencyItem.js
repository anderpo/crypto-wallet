import React from "react";
import styled from "styled-components";
import Currency from "./../Currency/Currency";
import Text from "./../Text/Text";
import Dollar from "./../../assets/icons/dollar";
import theme from "./../../styles/MainTheme";
import Profit from "./Profit";

const Wrapper = styled.div`
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

const CurrencyItem = ({ currency }) => {
  const { name, fullName } = currency;
  return (
    <Wrapper>
      <Row style={{ paddingBottom: "15px" }}>
        <Col>
          <Currency curr={name} fullName={fullName} />
        </Col>
        <Col style={{ alignItems: "flex-end" }}>
          <Text.Tertiary size={15}>0.5624226123</Text.Tertiary>
          <Row>
            <Dollar width={12} height={18} fill={theme.spunPearl} />
            <Text.Secondary size={12}>1,42422.32</Text.Secondary>
          </Row>
        </Col>
      </Row>
      <HR />
      <Row style={{ paddingTop: "15px" }}>
        <Col>
          <Row>
            <Dollar width={12} height={18} />
            <Text.Tertiary size={12}>6,4535.34</Text.Tertiary>
          </Row>
          <Text.Secondary size={12}>Price</Text.Secondary>
        </Col>
        <Col style={{ alignItems: "flex-end" }}>
          <Profit value={2.75} profit>
            2.75
          </Profit>
          <Text.Secondary size={12}>Profit / Loss</Text.Secondary>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default CurrencyItem;
