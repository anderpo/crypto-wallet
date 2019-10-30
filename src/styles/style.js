import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${p => (p.font ? p.font : "sans-serif")};
    text-decoration: none;
  }
`;

export default GlobalStyle;
