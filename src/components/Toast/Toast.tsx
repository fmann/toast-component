import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import { ToastContext } from "../ToastProvider";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

type Props = {
  variant: Variant;
  message: string;
  id: string;
};

function Toast({ variant, message, id }: Props) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { destroyToast } = React.useContext(ToastContext);

  return (
    <div key={id} className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {message}
      </p>
      <button
        className={styles.closeButton}
        onClick={(e) => destroyToast(id)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default React.memo(Toast);
