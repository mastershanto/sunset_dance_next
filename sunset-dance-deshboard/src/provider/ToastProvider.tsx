"use client";

import React, { useEffect, useState } from "react";
import { toast, ToastMessage } from "@/lib/toast";
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from "lucide-react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    return toast.subscribe((newToast) => {
      setToasts((prev) => [...prev, newToast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, newToast.duration || 3000);
    });
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (type: ToastMessage["type"]) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case "error":
        return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <>
      {children}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl transition-all duration-300 animate-in slide-in-from-bottom-2"
          >
            <div className="flex items-center gap-3">
              {getIcon(t.type)}
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {t.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
