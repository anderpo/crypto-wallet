import React from "react";
import styled from "styled-components";
import Text from "./../Text/Text";

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.white};
`;

const Fullname = styled(Text)`
  font-size: ${p => (p.large ? "9px" : "6px")};
  color: ${p => p.theme.spunPearl};
`;

const Currency = ({ curr, fullName, large = false }) => {
  const iconSize = large ? 32 : 26;
  return (
    <Row>
      <Col>
        <i className={`cc ${curr}`} style={{ fontSize: `${iconSize}px` }} />
      </Col>
      <Col style={{ marginLeft: large ? "15px" : "10px" }}>
        <Text size={large ? 16 : 11}>{curr.toUpperCase()}</Text>
        <Fullname large>{fullName}</Fullname>
      </Col>
    </Row>
  );
};

export default Currency;
