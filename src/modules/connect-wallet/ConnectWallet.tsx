import { Image } from "react-bootstrap";
import styled from "styled-components";
import SetupImx from "./SetupImx";
import wallet from "assets/nft-wallet.png";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { useParams } from "react-router-dom";

const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
  p {
    font-size: 1.375rem;
  }
`;
function ConnectWallet() {
  const { referralCode } = useParams();
  return (
    <Wrapper>
      <GlassCard>
        <figure>
          <Image fluid width="188" src={wallet} alt="IMX Logo" />
        </figure>
        <h1 className="text-uppercase">
          Connect your crypto wallet. your bounty will be yours at last.
        </h1>
        <SetupImx referral={referralCode} />
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default ConnectWallet;
