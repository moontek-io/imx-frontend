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
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
`;

function ClaimNft() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    data: null,
    loading: false,
    error: null,
  });
  const onClaimNft = () => {
    setState((prev) => ({ ...prev, error: null, loading: true }));
    const promise = redeemNft()
      .then((res) => {
        if (res.status) {
          setState({ error: null, data: res, loading: false });
          navigate("/invite");
        } else {
          setState({ error: res.message, data: null, loading: false });
          throw new Error(res.message);
        }
      })
      .catch((err) => {
        setState({
          error: err?.response?.data?.message || err.toString(),
          data: null,
          loading: false,
        });
      });
    toast.promise(promise, {
      loading: "Redeeming NFT...",
      success: "NFT redeemed successfully!",
      error: (error) =>
        `Error redeeming NFT: ${
          error?.response.data?.message || error.toString()
        }`,
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
