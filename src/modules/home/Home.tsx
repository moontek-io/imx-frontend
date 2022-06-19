import { ActionButton } from "components/buttons";
import GlassCard from "components/GlassCard";
import siteData from "data/siteData";
import { Link } from "react-router-dom";
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
  return (
    <HomeWrapper>
      <GlassCard>
        <h1 className="text-uppercase">{siteData.title}</h1>
        <p className="mt-2">{siteData.description}</p>
        <Link to="/connect">
          <ActionButton variant="primary" size="lg" className="mt-4">
            Join now
          </ActionButton>
        </Link>
      </GlassCard>
    </HomeWrapper>
  );
}

export default Home;
