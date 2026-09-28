import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Heading({ title, subtitle, className }: HeadingProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
