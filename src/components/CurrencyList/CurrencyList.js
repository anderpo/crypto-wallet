import React from "react";
import CurrencyItem from "./CurrencyItem";
import Wrapper from "./Wrapper";
import uuid from "uuid";
import Text from "./../Text/Text";
import Loader from "../Loader/Loader";

const CurrencyList = ({ listRateExchange = [], myCoins, loading }) => {
  if (loading) return <Loader />;

  const renderMessage = () => {
    return <Text.Tertiary>Rate exchange is not found. Please, repeat later.</Text.Tertiary>;
  };

  return (
    <Wrapper>
      {!listRateExchange.length
        ? renderMessage()
        : listRateExchange.map(c => (
            <CurrencyItem
              key={uuid()}
              myCoin={myCoins.find(mc => mc.name === c.name)}
              currency={c}
            />
          ))}
    </Wrapper>
  );
};

export default CurrencyList;
