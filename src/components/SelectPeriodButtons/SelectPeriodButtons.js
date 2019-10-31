import React from "react";
import styled from "styled-components";
import periods from "./../../constants/timePeriods";

const timePeriods = [
  { name: "Day", value: periods.DAY },
  { name: "Week", value: periods.WEEK },
  { name: "Month", value: periods.MONTH }
];

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 34px;
`;

const Button = styled.div`
  display: flex;
  background-color: ${p => (p.isActive ? "rgba(159, 160, 165, 0.1)" : "tranceparent")};
  border-radius: 5px;
  font-size: 12px;
  padding: 5px 20px; 
  color: ${p => (p.isActive ? p.theme.white : p.theme.santasGray)};
`;

const SelectPeriodButtons = ({ selectedPeriod }) => {
  return (
    <Wrapper>
      {timePeriods.map(p => (
        <Button key={p.value} isActive={p.value === selectedPeriod}>
          {p.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default SelectPeriodButtons;
