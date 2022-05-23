export const register = (data: {
  wallet_address: string;
  eth_network: string;
  imx_token: string;
}) => {
  return new Promise((resolve, reject) => {
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

