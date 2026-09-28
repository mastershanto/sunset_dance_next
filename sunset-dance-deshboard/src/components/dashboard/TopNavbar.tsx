"use client";

import React from "react";
import { Bell, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export function TopNavbar() {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
      {/* Search Bar */}
      <div className="relative w-72">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder="Search students, classes..."
          className="w-full pl-9 pr-4 py-1.5 text-sm bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-xl text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition">
          <Bell className="w-5 h-5" />
          <span className="w-2 h-2 rounded-full bg-orange-500 absolute top-2 right-2 ring-2 ring-white dark:ring-zinc-950" />
        </button>

        {/* User Badge */}
        <div className="flex items-center gap-3 pl-3 border-l border-zinc-200 dark:border-zinc-800">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-semibold flex items-center justify-center text-xs">
            {user?.name ? user.name[0].toUpperCase() : "A"}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 leading-none">
              {user?.name || "Administrator"}
            </p>
            <p className="text-[11px] text-zinc-400 mt-1 leading-none">
              {user?.email || "admin@sunsetdance.com"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
