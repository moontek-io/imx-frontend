import React from "react";
import styled from "styled-components";
import { Image, Spinner } from "react-bootstrap";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { ActionButton } from "components/buttons";
import nfticon from "assets/NFT.svg";
import { redeemNft } from "helpers/http/apis";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
`;

function ClaimNft() {
  const [state, setState] = React.useState({
    data: null,
    loading: false,
    error: null,
  });
  const onClaimNft = () => {
    setState((prev) => ({ ...prev, error: null, loading: true }));
    redeemNft()
      .then((res) => {
        setState({ error: null, data: res, loading: false });
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        setState({
          error: err?.response?.data?.message || err.toString(),
          data: null,
          loading: false,
        });
      });
  };
  return (
    <Wrapper>
      <GlassCard>
        <figure className="discord-img">
          <Image fluid width="188" src={nfticon} alt="Discord" />
        </figure>
        <h1 className="text-uppercase">Claim your NFT</h1>
        {!!state.error && <div className="text-danger">{state.error}</div>}
        <ActionButton
          variant="primary"
          size="lg"
          className="mt-4"
          disabled={state.loading}
          onClick={onClaimNft}
          arrow={false}
        >
          Claim now
          {state.loading ? <Spinner animation="grow" /> : <Arrow />}
        </ActionButton>
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default ClaimNft;
