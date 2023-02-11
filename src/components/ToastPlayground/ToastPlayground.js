import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const [toasts, setToasts] = React.useState([]);

  const submitHandler = function (e) {
    e.preventDefault();
    const newToasts = [
      ...toasts,
      { variant, message, id: crypto.randomUUID() },
    ];
    setToasts(newToasts);
    setVariant("notice");
    setMessage("");
  };

  const destroyToast = function (myid) {
    const newToasts = toasts.filter((toast) => myid !== toast.id);
    setToasts(newToasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf
        toasts={toasts}
        setToasts={setToasts}
        destroyToast={destroyToast}
      />
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
              {VARIANT_OPTIONS.map((opt) => (
                <label key={opt} htmlFor={`variant-${opt}`}>
                  <input
                    id={`variant-${opt}`}
                    type="radio"
                    name="variant"
                    value={opt}
                    onChange={(e) => setVariant(e.target.value)}
                    checked={opt == variant}
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
