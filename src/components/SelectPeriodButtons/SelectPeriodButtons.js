import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import periods from "./../../constants/timePeriods";
import { setPeriod } from "./../../actions/UIActions";

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

const SelectPeriodButtons = ({ selectedPeriod, onSetPeriod }) => {
  return (
    <Wrapper>
      {timePeriods.map(p => (
        <Button
          key={p.value}
          isActive={p.value === selectedPeriod}
          onClick={() => {
            onSetPeriod(p.value);
          }}
        >
          {p.name}
        </Button>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ ui }) => {
  return {
    selectedPeriod: ui.selectedPeriod
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetPeriod: period => dispatch(setPeriod(period))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPeriodButtons);
