import React from "react";
import useKeyDownListener from "../../hooks/useKeyDownListener.js";
import { Slice } from "../../types";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState<Slice[]>([]);

  const createToast = function (variant: variant, message: string) {
    const newToasts = [
      ...toasts,
      { variant, message, id: crypto.randomUUID() },
    ];
    setToasts(newToasts);
  };

  const destroyToast = function (myid: string) {
    const newToasts = toasts.filter((toast) => myid !== toast.id);
    setToasts(newToasts);
  };

  useKeyDownListener("Escape", () => setToasts([]));

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        createToast,
        destroyToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
