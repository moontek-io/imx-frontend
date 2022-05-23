import toast from "react-hot-toast";

export const showMsg = (msg: string) => {
  toast.success(msg);
};
export const showError = (msg: string) => {
  toast.error(msg);
};
