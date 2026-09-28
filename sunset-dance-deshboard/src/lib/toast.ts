export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastMessage {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
}

type ToastListener = (toast: ToastMessage) => void;

class ToastManager {
  private listeners: Set<ToastListener> = new Set();

  subscribe(listener: ToastListener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  show(message: string, type: ToastType = "info", duration = 3000) {
    const toast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      message,
      duration,
    };
    this.listeners.forEach((listener) => listener(toast));
  }

  success(message: string, duration?: number) {
    this.show(message, "success", duration);
  }

  error(message: string, duration?: number) {
    this.show(message, "error", duration);
  }

  warning(message: string, duration?: number) {
    this.show(message, "warning", duration);
  }

  info(message: string, duration?: number) {
    this.show(message, "info", duration);
  }
}

export const toast = new ToastManager();
