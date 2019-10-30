import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Currency from "./../Currency/Currency";
import Text from "./../Text/Text";
import PercentProfit from "./../PercentProfit/PercentProfit";
import { setCurrency } from "./../../actions/UIActions";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 190px;
  height: 100%;
  border-radius: 5px;
  margin: 0 4px;
  padding: 8px;
  border: ${p => (p.selected ? "none" : "1px solid rgba(159, 160, 165, 0.1)")};
  background-color: ${p => (p.selected ? "rgba(159, 160, 165, 0.1)" : "transparent")};

  &:first-child {
    margin: 0 4px 0 15px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const CurrencyItem = props => {
  const { coin, onSetCurrency, selected, carouselMode = false } = props;
  const { name, fullName, amount, profitPercent } = coin;
  return (
    <Wrapper
      onClick={() => {
        onSetCurrency(name);
      }}
      selected={selected}
    >
      <Currency curr={name} fullName={fullName} />
      <Col>
        <Text.Tertiary size={15}>{amount}</Text.Tertiary>
        <PercentProfit value={profitPercent} />
      </Col>
    </Wrapper>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrency: selected => dispatch(setCurrency(selected))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyItem);
