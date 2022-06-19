import React from "react";
import successCheckMark from "assets/success.svg";
import { Image } from "react-bootstrap";
import { ActionButton } from "components/buttons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/auth-context";
const SuccessWrapper = styled.div`
  .success-description {
    text-align: center;
    font-family: ${(props) => props.theme.font.secondary};
    font-size: 1.25;
    font-weight: 500;
  }
`;
function Success() {
  const { onNextStep } = useAuth();
  return (
    <SuccessWrapper>
      <figure>
        <Image fluid width="120" src={successCheckMark} alt="success" />
      </figure>
      <h1 className="text-uppercase">Email verified</h1>
      <p className="success-description">
        Your email successfully verified! Please click continue to Claim your
        NFT
      </p>

      <ActionButton
        variant="primary"
        size="lg"
        className="mt-4"
        onClick={onNextStep}
      >
        Continue
      </ActionButton>
    </SuccessWrapper>
  );
}

export default Success;
