import React from "react";
import { Clock, MapPin, Users, Calendar } from "lucide-react";
import { DanceClassEntity } from "../../domain/entities/dance-class.entity";

interface ClassCardProps {
  danceClass: DanceClassEntity;
}

const styleColorMap: Record<string, string> = {
  Ballet: "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  "Hip-Hop": "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  Salsa: "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-800",
  Contemporary: "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  Jazz: "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
};

export function ClassCard({ danceClass }: ClassCardProps) {
  const percentage = Math.round((danceClass.enrolled / danceClass.capacity) * 100);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/90">
      {/* Background Accent Glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500/10 to-rose-500/0 blur-2xl transition-all group-hover:scale-150 group-hover:from-orange-500/20" />

      {/* Header: Title and Status */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <span
            className={`inline-block rounded-lg border px-2.5 py-0.5 text-xs font-medium mb-2 ${
              styleColorMap[danceClass.danceStyle] || "bg-zinc-100 text-zinc-700"
            }`}
          >
            {danceClass.danceStyle} • {danceClass.level}
          </span>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-base leading-snug">
            {danceClass.title}
          </h3>
        </div>

        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium shrink-0 ${
            danceClass.status === "In-Progress"
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
              : danceClass.status === "Scheduled"
              ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              danceClass.status === "In-Progress"
                ? "bg-emerald-500 animate-pulse"
                : danceClass.status === "Scheduled"
                ? "bg-blue-500"
                : "bg-zinc-400"
            }`}
          />
          {danceClass.status}
        </span>
      </div>

      {/* Instructor info */}
      <div className="mt-4 flex items-center gap-3">
        <img
          src={danceClass.instructorAvatar}
          alt={danceClass.instructor}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-zinc-100 dark:ring-zinc-800"
        />
        <div>
          <p className="text-xs text-zinc-400 font-medium">Instructor</p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {danceClass.instructor}
          </p>
        </div>
      </div>

      {/* Class Logistics */}
      <div className="mt-4 space-y-2 text-xs text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-orange-500" />
          <span>{danceClass.scheduleTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-orange-500" />
          <span>{danceClass.durationMinutes} mins per session</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          <span>{danceClass.studioRoom}</span>
        </div>
      </div>

      {/* Capacity & Progress */}
      <div className="mt-5 space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
            <Users className="w-3.5 h-3.5" /> Enrolled Capacity
          </span>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            {danceClass.enrolled} / {danceClass.capacity} ({percentage}%)
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
