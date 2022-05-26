import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/theme";
import { Routes, Route } from "react-router-dom";
// import ConnectWallet from "./modules/connect-wallet";
import MyGlobalStyle from "./styles/GlobalStyles";
import PrimaryLayout from "./components/layouts/primary";
import Home from "./modules/home";
import ConnectWallet from "modules/connect-wallet";
import NoMatch from "modules/no-match";
import Discord from "modules/discord/Discord";
import RequireAuth from "components/RequireAuth";
import AddEmail from "modules/add-email/AddEmail";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="connect" element={<ConnectWallet />} />
          <Route
            path="discord"
            element={
              <RequireAuth>
                <Discord />
              </RequireAuth>
            }
          />
          <Route
            path="discord/:id"
            element={
              <RequireAuth>
                <Discord />
              </RequireAuth>
            }
          />
          <Route
            path="add-email"
            element={
              <RequireAuth>
                <AddEmail/>
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {/* <PrimaryLayout>
        <Home />
      </PrimaryLayout> */}
      <MyGlobalStyle />
    </ThemeProvider>
  );
}

export default App;
