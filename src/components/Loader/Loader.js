import React from "react";
import RingLoader from "react-spinners/RingLoader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;

const Loader = ({ size = 60, color = "#ffffff" }) => {
  return (
    <Wrapper>
      <RingLoader sizeUnit={"px"} size={size} color={color} />
    </Wrapper>
  );
};

export default Loader;
