import toast from "react-hot-toast";

export const showMsg = (msg: string) => {
  toast.dismiss();
  toast.success(msg);
};
export const showError = (msg: string) => {
  toast.dismiss();
  toast.error(msg);
};

export function hasValidEmail(email: string) {
  const regxPat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regxPat.test(email);
}

export const getErrorMessage = (err: any): string => {
  return err?.response?.data.message || err?.message || err?.toString();
};
