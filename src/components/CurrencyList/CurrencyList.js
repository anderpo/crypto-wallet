import React from "react";
import CurrencyItem from "./CurrencyItem";
import Wrapper from "./Wrapper";
import uuid from "uuid";

const MOCK_CURRENCY = [
  { fullName: "Bitcoin", name: "BTC", price: 1234 },
  { fullName: "Ethereum", name: "ETH", price: 4223 },
  { fullName: "Ripple", name: "XRP", price: 5624 }
];

const CurrencyList = () => {
  return (
    <Wrapper>
      {MOCK_CURRENCY.map(c => (
        <CurrencyItem key={uuid()} currency={c} />
      ))}
    </Wrapper>
  );
};

export default CurrencyList;
