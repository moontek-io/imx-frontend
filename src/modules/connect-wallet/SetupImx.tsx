import { Link, ImmutableXClient } from "@imtbl/imx-sdk";
import { ActionButton } from "components/buttons";
import { useEffect, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-right.svg";

require("dotenv").config();

const SetupImx = () => {
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
    console.log(client);
    console.log(wallet);
  }
  return (
    <>
      <ActionButton
        onClick={linkSetup}
        variant="primary"
        size="lg"
        className="mt-4"
      >
        Connect wallet
        <Arrow />
      </ActionButton>
      {/* <div>Active wallet: {wallet}</div> */}
    </>
  );
};

export default SetupImx;
