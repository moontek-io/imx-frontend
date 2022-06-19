import { ActionButton } from "components/buttons";
import GlassCard from "components/GlassCard";
import { useAuth } from "contexts/auth-context";
import siteData from "data/siteData";
import styled from "styled-components";

const HomeWrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
  p {
    font-size: 1.375rem;
  }
`;
function Home() {
  const { onNextStep } = useAuth();
  return (
    <HomeWrapper>
      <GlassCard>
        <h1 className="text-uppercase">{siteData.title}</h1>
        <p className="mt-2">{siteData.description}</p>

        <ActionButton
          variant="primary"
          size="lg"
          className="mt-4"
          onClick={onNextStep}
        >
          Join now
        </ActionButton>
      </GlassCard>
    </HomeWrapper>
  );
}

export default Home;
