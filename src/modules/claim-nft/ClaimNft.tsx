import styled from "styled-components";
import { Image } from "react-bootstrap";
import GlassCard from "components/GlassCard";
import BottomNavigation from "components/BottomNavigation";
import { ActionButton } from "components/buttons";
import nfticon from "assets/NFT.svg";


const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
`;

function ClaimNft() {
  return (
    <Wrapper>
      <GlassCard>
        <figure className="discord-img">
          <Image fluid width="188" src={nfticon} alt="Discord" />
        </figure>
        <h1 className="text-uppercase">Claim your NFT</h1>

        <ActionButton variant="primary" size="lg" className="mt-4">
          Claim now
        </ActionButton>
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default ClaimNft;
