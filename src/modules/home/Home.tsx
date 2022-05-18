import { ActionButton } from "components/buttons";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow-right.svg";

const HomeWrapper = styled.section`
  max-width: 675px;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 3.75rem;
  }
  p {
    font-size: 1.375rem;
  }
`;
function Home() {
  return (
    <HomeWrapper>
      <h1 className="text-uppercase">The main title goes here</h1>
      <p className="mt-2">
        Subtext Goes here lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Rhoncus non, diam sit etiam. Mi morbi egestas varius.
      </p>
      <ActionButton variant="primary" size="lg" className="mt-4">
        Join now
        <Arrow />
      </ActionButton>
    </HomeWrapper>
  );
}

export default Home;
