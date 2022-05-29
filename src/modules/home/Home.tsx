import { ActionButton } from "components/buttons";
import GlassCard from "components/GlassCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow-right.svg";

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
        <h1 className="text-uppercase">The main title goes here</h1>
        <p className="mt-2">
          Subtext Goes here lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit. Rhoncus non, diam sit etiam. Mi morbi egestas varius.
        </p>
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
