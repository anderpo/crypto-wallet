import React from "react";
import styled from "styled-components";
import Dollar from "./../../assets/icons/dollar";
import theme from "./../../styles/MainTheme";
import Arrow from "./../../assets/icons/up-arrow";

const Value = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: ${p => (p.profit ? p.theme.caribbeanGreen : p.theme.vividTangerine)};
  font-size: 14px;
`;

const TotalProfit = ({ profit, value }) => {
  return (
    <Value profit={profit}>
      +
      <Dollar fill={profit ? theme.caribbeanGreen : theme.vividTangerine} />
      {value}
      <Arrow fill={profit ? theme.caribbeanGreen : theme.vividTangerine} />
    </Value>
  );
};

export default TotalProfit;
