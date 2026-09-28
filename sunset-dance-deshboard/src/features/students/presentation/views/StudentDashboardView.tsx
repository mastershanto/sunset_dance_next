"use client";

import React from "react";
import { StudentEntity } from "../../domain/entities/student.entity";
import { useStudentList } from "../hooks/useStudentList";
import { StudentStats } from "../components/StudentStats";
import { StudentFilterBar } from "../components/StudentFilterBar";
import { StudentCard } from "../components/StudentCard";

interface StudentDashboardViewProps {
  initialStudents?: StudentEntity[];
}

export function StudentDashboardView({ initialStudents }: StudentDashboardViewProps) {
  const {
    students,
    rawTotalCount,
    activeCount,
    averageAttendance,
    isLoading,
    error,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    clearFilters,
    reload,
  } = useStudentList(initialStudents);

  return (
    <div className="space-y-8">
      {/* Top Banner & Stats */}
      <StudentStats
        totalStudents={rawTotalCount}
        activeCount={activeCount}
        averageAttendance={averageAttendance}
      />

      {/* Filter and Search Bar */}
      <StudentFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              className="h-48 animate-pulse rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800/40"
            />
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/50 dark:bg-red-950/20">
          <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={reload}
            className="mt-3 rounded-lg bg-red-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Success / Students Grid */}
      {!isLoading && !error && students.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && students.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            No dancers found matching your criteria.
          </p>
          <button
            onClick={clearFilters}
            className="mt-3 text-xs font-semibold text-amber-600 hover:underline dark:text-amber-400"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
