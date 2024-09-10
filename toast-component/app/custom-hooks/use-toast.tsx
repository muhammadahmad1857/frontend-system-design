"use client";
import React, { useState, CSSProperties, useCallback } from "react";
import Toast from "../(components)/toast";

type ComponentProps = "top-left" | "top-right" | "bottom-left" | "bottom-right";
// Interface for toast props
interface ToastProps {
  message: string;
  duration: number;
  type?: "success" | "info" | "warning" | "error";
}

const useToast = (position: ComponentProps = "top-left") => {
  const [toast, setToast] = useState<ToastProps | null>(null);
  let timer: any;

  const triggerToast = useCallback((toastProps: ToastProps) => {
    clearTimeout(timer);
    setToast(toastProps);
    timer = setTimeout(() => {
      setToast(null);
    }, toastProps.duration);
  }, []);

  // Define styles based on position
  const positionStyles: CSSProperties = {
    position: "fixed",
    [position.split("-")[0] as "top" | "bottom"]: 20,
    [position.split("-")[1] as "left" | "right"]: 20,
  };

  const toastComponent = toast ? (
    <div style={positionStyles}>
      <Toast {...toast} />
    </div>
  ) : null;

  return {
    triggerToast,
    toastComponent,
  };
};

export default useToast;
