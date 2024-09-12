import * as react_jsx_runtime from 'react/jsx-runtime';

interface ToastProps {
    id: string;
    message: string;
    duration: number;
    type?: "success" | "info" | "warning" | "error";
    animationIn?: "fade" | "pop" | "slide" | "bounce";
    animationOut?: "fade" | "pop" | "slide" | "bounce";
}

type ComponentProps = "top-left" | "top-right" | "bottom-left" | "bottom-right";
declare const useToast: (position?: ComponentProps) => {
    triggerToast: (toastProps: Omit<ToastProps, "id">) => void;
    toastComponent: react_jsx_runtime.JSX.Element;
};

export { useToast as default };
