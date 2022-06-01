export type Steps = "email" | "otp" | "done";

export type StepComponentProps = {
  onUpdateStep: (step: Steps) => void;
  updateState: (data: { verification_token?: string }) => void;
  state: {
    verification_token: string | null;
  };
};

export type UserType = {
  created_at: string;
  discord_member_id: string;
  eth_network: string;
  id: string;
  imx_token: string;
  is_confirmed: boolean;
  user_email_id: string;
  wallet_address: string;
};
