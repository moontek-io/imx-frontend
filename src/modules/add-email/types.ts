export type Steps = "email" | "otp" | "done";

export type StepComponentProps = {
  onUpdateStep: (step: Steps) => void;
};
