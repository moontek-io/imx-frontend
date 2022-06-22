import React from "react";
import styled from "styled-components";
import { Image, Spinner } from "react-bootstrap";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { ActionButton } from "components/buttons";
import nfticon from "assets/NFT.svg";
import { redeemNft } from "helpers/http/apis";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import toast from "react-hot-toast";
import { useAuth } from "contexts/auth-context";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
`;

function ClaimNft() {
  const { onNextStep } = useAuth();
  const [state, setState] = React.useState({
    data: null,
    loading: false,
    error: null,
  });
  const onClaimNft = () => {
    setState((prev) => ({ ...prev, error: null, loading: true }));
    const promise = redeemNft();
    toast.promise(promise, {
      loading: "Redeeming NFT...",
      success: (res) => {
        if (res.status) {
          setState({ error: null, data: res, loading: false });
          onNextStep();
        } else {
          setState({ error: res.message, data: null, loading: false });
          onNextStep();
        }
        return res.message;
      },
      error: (error) => {
        onNextStep();
        setState({
          error: error?.response?.data?.message || error.toString(),
          data: null,
          loading: false,
        });
        return `Error redeeming NFT: ${
          error?.response.data?.message || error.toString()
        }`;
      },
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
