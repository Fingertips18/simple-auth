import { Toaster } from "sonner";

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <Toaster richColors position="top-center" pauseWhenPageIsHidden />
    </>
  );
};

export default ToastProvider;
