import React, {
  useState,
  CSSProperties,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Toast from "../(components)/toast";
import ToastProps from "../types/toastType";

type ComponentProps = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const useToast = (position: ComponentProps = "top-left") => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const toastTimers = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    if (toastTimers.current[id]) {
      clearTimeout(toastTimers.current[id]);
      delete toastTimers.current[id];
    }
  }, []);

  const triggerToast = useCallback(
    (toastProps: Omit<ToastProps, "id">) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast = { ...toastProps, id };
      setToasts((prevToasts) => [...prevToasts, newToast]);

      toastTimers.current[id] = setTimeout(() => {
        removeToast(id);
      }, toastProps.duration);
    },
    [removeToast]
  );

  useEffect(() => {
    return () => {
      Object.values(toastTimers.current).forEach(clearTimeout);
    };
  }, []);

  const positionStyles: CSSProperties = {
    position: "fixed",
    [position.split("-")[0] as "top" | "bottom"]: 20,
    [position.split("-")[1] as "left" | "right"]: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: position.includes("right") ? "flex-end" : "flex-start",
    zIndex: 9999,
  };

  const toastComponent = (
    <div style={positionStyles}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={removeToast}
          animationIn={toast.animationIn}
          duration={toast.duration}
          animationOut={toast.animationOut}
        />
      ))}
    </div>
  );

  return {
    triggerToast,
    toastComponent,
  };
};

export default useToast;
