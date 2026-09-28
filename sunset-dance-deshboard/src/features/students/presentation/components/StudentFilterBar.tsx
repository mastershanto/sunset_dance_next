import React from "react";
import { DanceStyle } from "../../domain/entities/student.entity";

interface StudentFilterBarProps {
  categories: ("All" | DanceStyle)[];
  selectedCategory: "All" | DanceStyle;
  onSelectCategory: (category: "All" | DanceStyle) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function StudentFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: StudentFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
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
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 sm:w-64"
        />
      </div>
    </div>
  );
}
