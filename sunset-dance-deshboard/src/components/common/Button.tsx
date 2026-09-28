import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variants = {
      primary:
        "bg-gradient-to-r from-orange-500 to-rose-600 text-white hover:opacity-95 focus:ring-orange-500 shadow-sm shadow-orange-500/20",
      secondary:
        "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 focus:ring-zinc-500",
      outline:
        "border border-zinc-300 bg-transparent hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 focus:ring-zinc-400",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-500 shadow-sm shadow-rose-600/20",
      ghost:
        "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 focus:ring-zinc-400",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
