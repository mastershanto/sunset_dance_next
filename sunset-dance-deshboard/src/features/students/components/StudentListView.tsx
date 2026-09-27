"use client";

import React, { useState } from "react";
import { Student, DanceStyle } from "../types/student.types";
import { StudentCard } from "./StudentCard";
import { StudentStats } from "./StudentStats";

interface StudentListViewProps {
  initialStudents: Student[];
}

const CATEGORIES: ("All" | DanceStyle)[] = [
  "All",
  "Contemporary",
  "Hip-Hop",
  "Ballet",
  "Salsa",
  "Jazz",
];

export function StudentListView({ initialStudents }: StudentListViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<"All" | DanceStyle>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudents = initialStudents.filter((student) => {
    const matchesCategory =
      selectedCategory === "All" || student.danceStyle === selectedCategory;
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCount = initialStudents.filter((s) => s.status === "Active").length;
  const avgAttendance = Math.round(
    initialStudents.reduce((acc, curr) => acc + curr.attendanceRate, 0) /
      initialStudents.length
  );

  return (
    <div className="space-y-8">
      {/* Top Banner & Stats */}
      <StudentStats
        totalStudents={initialStudents.length}
        activeCount={activeCount}
        averageAttendance={avgAttendance}
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search dancer or role..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 sm:w-64"
          />
        </div>
      </div>

      {/* Student Cards Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            No dancers found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-amber-600 hover:underline dark:text-amber-400"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
