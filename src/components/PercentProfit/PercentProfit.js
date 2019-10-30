import React from "react";
import styled from "styled-components";

const Value = styled.div`
  display: flex;
  align-items: center;
  color: ${p => (p.isPositive ? p.theme.caribbeanGreen : p.theme.vividTangerine)};
  font-size: ${p => (p.size ? `${p.size}px` : "12px")};
`;

const PercentProfit = ({ value }) => {
  const isPositive = value > 0 || value === 0;
  return <Value isPositive={isPositive}>{`${isPositive ? "+" : "-"} ${Math.abs(value)}%`}</Value>;
};

export default PercentProfit;
