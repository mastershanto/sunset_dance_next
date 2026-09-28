import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm transition hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {title}
        </p>
        <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {value}
        </h3>
        {change && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              isPositive
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
                : "bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400"
            )}
          >
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
