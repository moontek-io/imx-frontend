import React, { useState } from "react";
import { ActionButton } from "components/buttons";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { getErrorMessage, hasValidEmail, showError } from "helpers/utils";
import { sendVerificationEmail } from "helpers/http/apis";
import { ReactComponent as Arrow } from "assets/arrow-right.svg";
import toast from "react-hot-toast";
import { StepComponentProps } from "./types";

const FormWrapper = styled.form`
  width: 100%;
  max-width: 750px;
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

function EmailForm({ onUpdateStep }: StepComponentProps) {
  const [email, setEmail] = useState<string>("");
  const onEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasValidEmail(email)) {
      showError("Email is not valid");
      return false;
    }
    const promise = sendVerificationEmail(email);
    toast.promise(promise, {
      loading: "Sending verification email...",
      success: (res) => {
        onUpdateStep("otp");
        return res.message;
      },
      error: getErrorMessage,
    });
  };
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <FormWrapper onSubmit={onEmailSubmit} noValidate>
      <div className="row">
        <div className="col-md-8">
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="h-100"
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <div className="col-md-4">
          <ActionButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={email.length < 1}
          > Add Email
          </ActionButton>
        </div>
      </div>
    </FormWrapper>
  );
}

export default EmailForm;
