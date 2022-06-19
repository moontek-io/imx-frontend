import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  if (error.response?.status === 401) {
    Cookies.remove("token");
    toast.error("Session expired. Please login again.");
    setTimeout(() => {
      window.location.replace("/connect");
    }, 1000);
  }
  return Promise.reject(error);
};

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.response.use(onResponse, onResponseError);

export const setToken = (token: string) => {
  apiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
};
