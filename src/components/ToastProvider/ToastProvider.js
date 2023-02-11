import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = function (variant, message) {
    const newToasts = [
      ...toasts,
      { variant, message, id: crypto.randomUUID() },
    ];
    setToasts(newToasts);
  };

  const destroyToast = function (myid) {
    const newToasts = toasts.filter((toast) => myid !== toast.id);
    setToasts(newToasts);
  };

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        setToasts([]);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
