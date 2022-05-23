import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { register } from "assets/helpers/http";
import { showError, showMsg } from "assets/helpers/utils";
import { ActionButton } from "components/buttons";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { ReactComponent as Arrow } from "../../assets/arrow-right.svg";

require("dotenv").config();

const SetupImx = () => {
  // initialise Immutable X Link SDK
  const link = new Link(process.env.REACT_APP_ROPSTEN_LINK_URL);

  // general
  const [wallet, setWallet] = useState("undefined");
  const [client, setClient] = useState<ImmutableXClient>(Object);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    buildIMX();
  }, []);

  // initialise an Immutable X Client to interact with apis more easily
  async function buildIMX() {
    const publicApiUrl: string = process.env.REACT_APP_ROPSTEN_ENV_URL ?? "";
    setClient(await ImmutableXClient.build({ publicApiUrl }));
  }

  // register and/or setup a user
  async function linkSetup(): Promise<void> {
    setLoading(true);
    const res = await link.setup({});
    setLoading(false);
    setWallet(res.address);
    register({
      wallet_address: res.address,
      eth_network: res.ethNetwork,
      imx_token: res.starkPublicKey,
    })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          showMsg(res.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        showError(
          err?.response?.data?.message || err?.message || err?.toString()
        );
      });
    // console.log(res);
    // console.log(client);
    // console.log(wallet);
  }
  return (
    <>
      <ActionButton
        onClick={linkSetup}
        variant="primary"
        size="lg"
        className="mt-4"
        disabled={loading}
      >
        Connect wallet
        {loading ? <Spinner animation="grow" /> : <Arrow />}
      </ActionButton>
      {/* <div>Active wallet: {wallet}</div> */}
    </>
  );
};

export default SetupImx;
