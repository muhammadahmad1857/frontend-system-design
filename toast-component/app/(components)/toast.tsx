"use client";

import React, { ReactNode } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from "react-icons/ai";

// Define the ToastProps interface for component props
interface ToastProps {
  type?: "info" | "success" | "warning" | "error";
  message: string;
  onClose?: () => void;
}

// Define the IconType interface to accept ReactNode
interface IconType {
  success: ReactNode;
  info: ReactNode;
  warning: ReactNode;
  error: ReactNode;
}

// Define the icons object with the appropriate types
const icons: IconType = {
  success: <AiOutlineCheckCircle />,
  info: <AiOutlineInfoCircle />,
  warning: <AiOutlineWarning />,
  error: <AiOutlineCloseCircle />,
};

// Define the ColorType interface for colors
interface ColorType {
  success: string;
  info: string;
  warning: string;
  error: string;
}

// Define the iconColors object with color values
const iconColors: ColorType = {
  success: "#4caf50",
  info: "#2196f3",
  warning: "#ff9800",
  error: "#f44336",
};

// Define the Toast component
const Toast = ({ type = "info", message, onClose = () => {} }: ToastProps) => {
  const backgroundColor = iconColors[type];

  return (
    <div
      className={`flex items-center  text-white p-4 m-3 rounded-md shadow-md `}
      style={{ backgroundColor }} // Tailwind Doesn't support dynamic bg so I use style attribute
    >
      {/* Icon */}
      <div className="mr-3">{icons[type]}</div>

      {/* Message */}
      <span className="">{message}</span>

      {/* Close button */}
      <button
        onClick={() => onClose()}
        className="ml-2 flex items-center cursor-pointer"
      >
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toast;
