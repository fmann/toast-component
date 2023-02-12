import React from "react";

function useKeyDownListener(key, keyDownCallback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        keyDownCallback();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, keyDownCallback]);

  return key;
}

export default useKeyDownListener;
