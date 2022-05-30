import React, { useState } from "react";
import { ActionButton } from "components/buttons";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { getErrorMessage } from "helpers/utils";
import { verifyEmail } from "helpers/http/apis";
import toast from "react-hot-toast";
import { StepComponentProps } from "./types";

const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  .form-control {
    padding: 22px 28px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(21px);
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: 1.25rem;
    border-radius: 0.75rem;
  }
  .row {
    --bs-gutter-y: 1.5rem;
  }
`;

function OtpForm({ onUpdateStep, state }: StepComponentProps) {
  const [otp, setOtp] = useState<string>("");
  const onOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.verification_token) return;
    const promise = verifyEmail({
      verificationToken: state.verification_token,
      otp,
    });
    toast.promise(promise, {
      loading: "Verifying email...",
      success: (res) => {
        onUpdateStep("done");
        return res.message;
      },
      error: getErrorMessage,
    });
  };
  const onOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };
  return (
    <FormWrapper onSubmit={onOtpSubmit} noValidate>
      <div className="row">
        <div className="col-md-7">
          <Form.Control
            type="text"
            placeholder="Enter code"
            className="h-100"
            value={otp}
            onChange={onOtpChange}
          />
        </div>
        <div className="col-md-5">
          <ActionButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={otp.length < 1}
            className="px-2 w-100 d-flex justify-content-center align-items-center"
          >
            Verify
          </ActionButton>
        </div>
      </div>
    </FormWrapper>
  );
}

export default OtpForm;
