import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const destroyToast = function (myid) {
    const newToasts = toasts.filter((toast) => myid !== toast.id);
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        destroyToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
