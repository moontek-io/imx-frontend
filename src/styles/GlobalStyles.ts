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
  .font-secondary {
    font-family: ${myTheme.font.secondary};
  }

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(0.9);
    }
    40% {
      transform: scale(1.05);
    }
    60% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes blurAnimation {
    0% {
      backdrop-filter: blur(4px);
    }
    10% {
      backdrop-filter: blur(6px) brightness(1.02);
    }
    30% {
      backdrop-filter: blur(10px) brightness(1.05);
    }
    50% {
      backdrop-filter: blur(7px) brightness(1.04);
    }
    57% {
      backdrop-filter: blur(6px);
    }
    64% {
      backdrop-filter: blur(5px);
    }
    100% {
      backdrop-filter: blur(4px);
    }
  }
  @keyframes background {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 0 -10px;
    }
    100% {
      background-position: 0 0;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export default MyGlobalStyle;
