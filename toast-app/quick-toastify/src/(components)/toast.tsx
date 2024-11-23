import React, { ReactNode, useEffect, useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind first
import "./toast.css"; // Then import your custom CSS
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from "react-icons/ai";

interface ToastProps {
  id: string;
  type?: "info" | "success" | "warning" | "error";
  message: string;
  onClose: (id: string) => void;
  animationIn?: "fade" | "pop" | "slide" | "bounce";
  animationOut?: "fade" | "pop" | "slide" | "bounce";
  duration?: number;
}

interface IconType {
  success: ReactNode;
  info: ReactNode;
  warning: ReactNode;
  error: ReactNode;
}

const icons: IconType = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

interface ColorType {
  success: string;
  info: string;
  warning: string;
  error: string;
}

const colors: ColorType = {
  success: "#4caf50",
  info: "#2196f3",
  warning: "#ff9800",
  error: "#f44336",
};

const Toast: React.FC<ToastProps> = ({
  id,
  type = "info",
  message,
  onClose,
  animationIn = "fade ",
  animationOut = "fade",
  duration = 3000, // Duration for auto-close
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const backgroundColor = colors[type];
  const animationDuration = 400; // Duration for the animations (ms)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => onClose(id), animationDuration); // Wait for the close animation to finish before removing the toast
    }, duration - animationDuration); // Start closing animation just before the total duration ends

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, id, onClose, animationDuration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(id), animationDuration); // Trigger close animation
  };

  const getAnimationClass = () => {
    if (isClosing) {
      switch (animationOut) {
        case "pop":
          return "animate-pop-out";
        case "slide":
          return "animate-slide-out";
        case "bounce":
          return "animate-bounce-out";
        default:
          return "animate-fade-out";
      }
    } else {
      switch (animationIn) {
        case "pop":
          return "animate-pop-in";
        case "slide":
          return "animate-slide-in";
        case "bounce":
          return "animate-bounce-in";

        default:
          return "animate-fade-in";
      }
    }
  };

  return (
    <div
      className={`toast flex items-center text-white p-4 mb-3 rounded-md shadow-md ${getAnimationClass()}`}
      style={{ backgroundColor, animationDuration: `${animationDuration}ms` }}
    >
      <div className="mr-3">{icons[type]}</div>
      <span className="flex-grow">{message}</span>
      <button
        onClick={handleClose}
        className="ml-2 flex items-center cursor-pointer"
      >
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toast;