import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts, destroyToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
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
