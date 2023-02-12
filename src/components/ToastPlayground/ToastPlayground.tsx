import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS: Variant[] = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState<Variant>("notice");
  const [message, setMessage] = React.useState<string>("");
  const { createToast } = React.useContext(ToastContext);

  const submitHandler = function (e: Event) {
    e.preventDefault();
    createToast(variant, message);
    setVariant("notice");
    setMessage("");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form onSubmit={submitHandler}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((opt: Variant) => (
                <label key={opt} htmlFor={`variant-${opt}`}>
                  <input
                    id={`variant-${opt}`}
                    type="radio"
                    name="variant"
                    value={opt}
                    onChange={(e) => setVariant(e.target.value)}
                    checked={opt === variant}
                  />
                  {opt}
                </label>
              ))}

              {/* TODO Other Variant radio buttons here */}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
