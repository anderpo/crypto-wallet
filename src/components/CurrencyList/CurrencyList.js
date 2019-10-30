import React from "react";
import CurrencyItem from "./CurrencyItem";
import Wrapper from "./Wrapper";
import uuid from "uuid";
import Text from "./../Text/Text";
import Loader from "../Loader/Loader";

const CurrencyList = ({ list = [], loading }) => {
  if (loading) return <Loader />;

  const renderMessage = () => {
    return <Text.Tertiary>Rate exchange is not found. Please, repeat later.</Text.Tertiary>;
  };

  return (
    <Wrapper>
      {!list.length ? renderMessage() : list.map(c => <CurrencyItem key={uuid()} currency={c} />)}
    </Wrapper>
  );
};

export default CurrencyList;
