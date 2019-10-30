import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BackArrow from "./../../assets/icons/back-arrow";

const Button = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const GoBackButton = ({ history }) => {
  return (
    <Button onClick={history.goBack}>
      <BackArrow />
    </Button>
  );
};

export default withRouter(GoBackButton);
