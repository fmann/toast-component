import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, destroyToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map((toast: Toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            key={toast.id}
            id={toast.id}
            variant={toast.variant}
            message={toast.message}
            destroyToast={destroyToast}
          />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
