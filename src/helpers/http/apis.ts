import { apiClient } from "./client";

export const register = (data: {
  wallet_address: string;
  eth_network: string;
  imx_token: string;
}) => {
  return new Promise<{
    message: string;
    token: string;
  }>((resolve, reject) => {
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const linkDiscord = (token: string) => {
  return apiClient
    .post("/link-discord", { discordToken: token })
    .then((response) => response.data);
};

export const sendVerificationEmail = (email: string) => {
  return apiClient
    .post(`/send-verification-email?email=${email}`)
    .then((response) => response.data);
};

export const verifyEmail = (payload: {
  verificationToken: string;
  otp: string;
}) => {
  return apiClient
    .post(`/verify-email`, payload)
    .then((response) => response.data);
};

export const getProfile = () => {
  return apiClient.get(`/get-profile`).then((response) => response.data);
};
