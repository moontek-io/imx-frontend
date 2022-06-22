import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { showError, showMsg } from "helpers/utils";
import { ActionButton } from "components/buttons";
import { useEffect, useRef, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../assets/arrow-right.svg";
import { register } from "helpers/http/apis";
import { useAuth } from "contexts/auth-context";

require("dotenv").config();

const SetupImx = ({ referral }: { referral?: string }) => {
  const { authorize, isAuthenticated, onNextStep } = useAuth();
  const link = new Link(process.env.REACT_APP_ROPSTEN_LINK_URL);
  // const [client, setClient] = useState<ImmutableXClient>();
  const client = useRef<ImmutableXClient>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    buildIMX();
  }, []);

  // initialise an Immutable X Client to interact with apis more easily
  async function buildIMX() {
    const publicApiUrl: string = process.env.REACT_APP_ROPSTEN_ENV_URL ?? "";
    client.current = await ImmutableXClient.build({ publicApiUrl });
  }

  // register and/or setup a user
  async function linkSetup(): Promise<void> {
    setLoading(true);
    try {
      const res = await link.setup({});
      setLoading(false);
      const payload = {
        wallet_address: res.address,
        eth_network: res.ethNetwork,
        imx_token: res.starkPublicKey,
        referral_code: referral || "",
      };
      register(payload)
        .then((res) => {
          if (res.token) {
            // localStorage.setItem("token", res.token);
            authorize(res.token);
            showMsg(res.message);
          }
        })
        .catch((err) => {
          setLoading(false);
          showError(
            err?.response?.data?.message || err?.message || err?.toString()
          );
        });
    } catch (e) {
      let message;
      setLoading(false);
      if (e instanceof Error) message = e.message;
      else message = String(e);
      showError(message);
    }
  }
  return (
    <>
      {isAuthenticated ? (
        <ActionButton
          variant="primary"
          size="lg"
          className="mt-4"
          disabled={loading}
          onClick={onNextStep}
        >
          Wallet connected
        </ActionButton>
      ) : (
        <ActionButton
          onClick={linkSetup}
          variant="primary"
          size="lg"
          className="mt-4"
          disabled={loading}
          arrow={false}
        >
          Connect wallet
          {loading ? <Spinner animation="grow" /> : <Arrow />}
        </ActionButton>
      )}
    </>
  );
};

export default SetupImx;
