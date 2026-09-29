"use client";

import React, { useState, useMemo } from "react";
import { Search, Sparkles } from "lucide-react";
import { DanceClassEntity, ClassDanceStyle } from "../../domain/entities/dance-class.entity";
import { ClassCard } from "../components/ClassCard";
import { ClassStats } from "../components/ClassStats";

interface ClassesDashboardViewProps {
  initialClasses: DanceClassEntity[];
}

const CATEGORIES: Array<"All" | ClassDanceStyle> = [
  "All",
  "Contemporary",
  "Hip-Hop",
  "Ballet",
  "Salsa",
  "Jazz",
];

export function ClassesDashboardView({ initialClasses }: ClassesDashboardViewProps) {
  const [classes] = useState<DanceClassEntity[]>(initialClasses);
  const [selectedCategory, setSelectedCategory] = useState<"All" | ClassDanceStyle>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClasses = useMemo(() => {
    return classes.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.danceStyle === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.studioRoom.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [classes, selectedCategory, searchQuery]);

  const inProgressCount = useMemo(
    () => classes.filter((c) => c.status === "In-Progress").length,
    [classes]
  );
  const totalEnrolled = useMemo(
    () => classes.reduce((sum, c) => sum + c.enrolled, 0),
    [classes]
  );

  return (
    <div className="space-y-8">
      {/* Top Banner & Stats */}
      <ClassStats
        totalClasses={classes.length}
        inProgressCount={inProgressCount}
        totalEnrolled={totalEnrolled}
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                  : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            placeholder="Search class or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border border-zinc-200 bg-white py-1.5 pl-9 pr-4 text-xs text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100"
          />
        </div>
      </div>

      {/* Classes Grid */}
      {filteredClasses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredClasses.map((danceClass) => (
            <ClassCard key={danceClass.id} danceClass={danceClass} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-800">
          <Sparkles className="w-8 h-8 text-zinc-400 mb-2" />
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            No classes found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-orange-600 hover:underline dark:text-orange-400"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
