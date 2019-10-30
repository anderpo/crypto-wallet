import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CurrencyItem from "./CurrencyItem";
import uuid from "uuid";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  overflow-x: scroll;
  display: flex;
  flex-wrap: no-wrap;
`;

const CurrencyCarousel = ({ coins, selectedCurrency }) => {
  const renderMessage = () => {
    return <Text.Tertiary>Rate exchange is not found. Please, repeat later.</Text.Tertiary>;
  };

  return (
    <Wrapper>
      {!coins.length
        ? renderMessage()
        : coins.map(c => (
            <CurrencyItem
              key={uuid()}
              coin={c}
              selected={selectedCurrency === c.name}
              carouselMode
            />
          ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ ui }) => {
  return {
    selectedCurrency: ui.selectedCurrency
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyCarousel);
