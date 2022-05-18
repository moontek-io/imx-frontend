import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { useEffect, useState } from "react";
require("dotenv").config();

const ConnectWallet = () => {
  // initialise Immutable X Link SDK
  const link = new Link(process.env.REACT_APP_ROPSTEN_LINK_URL);

  // general
  const [wallet, setWallet] = useState("undefined");
  const [client, setClient] = useState<ImmutableXClient>(Object);

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
    const res = await link.setup({});
    setWallet(res.address);
  }
  return (
    <>
      <button onClick={linkSetup}>Setup</button>
      <div>Active wallet: {wallet}</div>
    </>
  );
};

export default ConnectWallet;
