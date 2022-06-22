import { useEffect, useMemo, useState } from "react";
import GlassCard from "components/GlassCard";
import styled from "styled-components";
import EmailForm from "./EmailForm";
import OtpForm from "./OtpForm";
import Success from "./Success";
import type { Steps } from "./types";
import BottomNavigation from "components/BottomNavigation";
import { useAuth } from "contexts/auth-context";
const Wrapper = styled.section`
  text-align: center;
  h1 {
    font-size: 3.25rem;
  }
  p {
    font-size: 1.375rem;
  }
`;

const Components = {
  email: EmailForm,
  otp: OtpForm,
  done: Success,
};
function AddEmail() {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<Steps>("email");

  useEffect(() => {
    if (user?.is_confirmed) {
      setCurrentStep("done");
    }
  }, [user]);

  const [state, setState] = useState<{
    verification_token: string | null;
  }>({
    verification_token: null,
  });
  const updateState = (updates: { verification_token?: string }) => {
    setState((prev) => ({ ...prev, ...updates }));
  };
  const StepComponent = useMemo(() => Components[currentStep], [currentStep]);
  const onUpdateStep = (step: Steps) => setCurrentStep(step);
  return (
    <Wrapper>
      <GlassCard>
        {currentStep === "email" && (
          <>
            <h1 className="text-uppercase">Verify your email</h1>
            <p className="m-auto mt-2 " style={{ maxWidth: 780 }}>
              Subtext Goes here lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Rhoncus non, diam sit etiam. Mi morbi egestas
              varius
            </p>
          </>
        )}
        {currentStep === "otp" && (
          <>
            <h1 className="text-uppercase">Enter OTP</h1>
            <p className="text-center">
              Pleaes enter 6 digit OTP sent to your email.
            </p>
          </>
        )}
        <StepComponent
          onUpdateStep={onUpdateStep}
          updateState={updateState}
          state={state}
        />
      </GlassCard>
      <BottomNavigation />
    </Wrapper>
  );
}

export default AddEmail;
