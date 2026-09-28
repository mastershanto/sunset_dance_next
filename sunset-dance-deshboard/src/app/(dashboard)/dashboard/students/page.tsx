import React from "react";
import { StudentDashboardView } from "@/features/students";

export const metadata = {
  title: "Students Directory | Sunset Dance Dashboard",
  description: "Manage dance students, attendance, and category enrollments",
};

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Students Management
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          View enrolled dancers, monitor attendance, and filter by skill level
        </p>
      </div>

      {/* Clean Architecture Students View Component */}
      <StudentDashboardView />
    </div>
  );
}
