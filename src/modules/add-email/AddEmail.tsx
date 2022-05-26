import GlassCard from "components/GlassCard";
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
function AddEmail() {
  return (
    <HomeWrapper>
      <GlassCard>
        <h1 className="text-uppercase">Add email to continue</h1>
        <p className="mt-2">
          Please enter your email address. To continue to the next page. Verify
          it by clicking the link sent to <br /> your email to claim more
          rewards.
        </p>
      </GlassCard>
    </HomeWrapper>
  );
}

export default AddEmail;
