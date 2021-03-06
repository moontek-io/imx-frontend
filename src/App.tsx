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
import ClaimNft from "modules/claim-nft/ClaimNft";
import InviteFriend from "modules/invite-friend/InviteFriend";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="connect" element={<ConnectWallet />} />
          <Route path="connect/:referralCode" element={<ConnectWallet />} />
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
                <AddEmail />
              </RequireAuth>
            }
          />
          <Route
            path="claim-nft"
            element={
              <RequireAuth>
                <ClaimNft />
              </RequireAuth>
            }
          />
          <Route
            path="invite"
            element={
              <RequireAuth>
                <InviteFriend />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <MyGlobalStyle />
    </ThemeProvider>
  );
}

export default App;
