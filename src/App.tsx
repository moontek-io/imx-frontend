import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/theme";
// import ConnectWallet from "./modules/connect-wallet";
import MyGlobalStyle from "./styles/GlobalStyles";
import PrimaryLayout from "./components/layouts/primary";
import Home from "./modules/home";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <PrimaryLayout>
        <Home />
      </PrimaryLayout>
      <MyGlobalStyle />
    </ThemeProvider>
  );
}

export default App;
