import React from "react";
import styled from "styled-components";
import theme from "./../../styles/MainTheme";

const Value = styled.div`
  display: flex;
  align-items: center;
  color: ${p => (p.profit ? p.theme.caribbeanGreen : p.theme.vividTangerine)};
  font-size: ${p => (p.size ? `${p.size}px` : "12px")};
`;

const Profit = ({ profit, value }) => {
  return <Value profit={profit}>{`${profit ? "+" : "-"} ${Math.abs(value)}%`}</Value>;
};

export default Profit;
