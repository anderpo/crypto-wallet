import styled from "styled-components";

const Text = styled.p`
  font-size: ${p => p.size ? `${p.size}px` : '14px'};
`;

Text.Primary = styled(Text)`
  color: ${p => p.theme.santasGray};
`;

Text.Secondary = styled(Text)`
  color: ${p => p.theme.spunPearl};
`;

Text.Tertiary = styled(Text)`
  color: ${p => p.theme.white};
`;

export default Text;
