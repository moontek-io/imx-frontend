export type Steps = "email" | "otp" | "done";

export type StepComponentProps = {
  onUpdateStep: (step: Steps) => void;
  updateState: (data: { verification_token?: string }) => void;
  state: {
    verification_token: string | null;
  };
};
