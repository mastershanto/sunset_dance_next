import React from "react";
import { StudentEntity } from "../../domain/entities/student.entity";

interface StudentCardProps {
  student: StudentEntity;
}

const styleColorMap: Record<string, string> = {
  Ballet: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  "Hip-Hop": "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  Salsa: "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-800",
  Contemporary: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  Jazz: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
};

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/90">
      {/* Background Accent Glow on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/10 to-orange-500/0 blur-2xl transition-all group-hover:scale-150 group-hover:from-amber-500/20" />

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative h-13 w-13 overflow-hidden rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800">
            <img
              src={student.avatar}
              alt={student.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {student.name}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {student.role}
            </p>
          </div>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            student.status === "Active"
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              student.status === "Active" ? "bg-emerald-500" : "bg-zinc-400"
            }`}
          />
          {student.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-lg border px-2.5 py-0.5 text-xs font-medium ${
            styleColorMap[student.danceStyle] || "bg-zinc-100 text-zinc-700"
          }`}
        >
          {student.danceStyle}
        </span>
        <span className="rounded-lg bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
          {student.level}
        </span>
      </div>

      <div className="mt-5 space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-zinc-500 dark:text-zinc-400">Attendance</span>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            {student.attendanceRate}%
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500"
            style={{ width: `${student.attendanceRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}
