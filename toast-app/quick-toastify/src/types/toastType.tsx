export default interface ToastProps {
  id: string;
  message: string;
  duration: number;
  type?: "success" | "info" | "warning" | "error";
  animationIn?: "fade" | "pop" | "slide" | "bounce";
  animationOut?: "fade" | "pop" | "slide" | "bounce";
}
