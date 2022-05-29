import { createGlobalStyle } from "styled-components";
import { myTheme } from "./theme";
const styled = { createGlobalStyle };
const MyGlobalStyle = styled.createGlobalStyle`
  body {
    margin: 0;
    font-family: ${myTheme.font.primary};
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${myTheme.font.secondary};
    font-weight: 700;
  }
  button {
    font-family: ${myTheme.font.secondary};
  }
  .font-secondary{
    font-family: ${myTheme.font.secondary};
  }
`;
export default MyGlobalStyle;
