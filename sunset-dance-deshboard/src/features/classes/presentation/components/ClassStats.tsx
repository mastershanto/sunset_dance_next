import React from "react";

interface ClassStatsProps {
  totalClasses: number;
  inProgressCount: number;
  totalEnrolled: number;
}

export function ClassStats({
  totalClasses,
  inProgressCount,
  totalEnrolled,
}: ClassStatsProps) {
  const stats = [
    {
      label: "Scheduled Classes",
      value: totalClasses,
      subtext: "Across 3 dance studios",
      change: "+2 new",
      color: "from-orange-500 to-amber-500",
    },
    {
      label: "Live In Studio",
      value: inProgressCount,
      subtext: "Currently running sessions",
      change: "Active Now",
      color: "from-emerald-500 to-teal-500",
    },
    {
      label: "Total Dancers Booked",
      value: totalEnrolled,
      subtext: "Capacity filled 84%",
      change: "+18%",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {stat.label}
            </span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {stat.change}
            </span>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              {stat.value}
            </span>
          </div>

          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            {stat.subtext}
          </p>

          <div
            className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color}`}
          />
        </div>
      ))}
    </div>
  );
}
