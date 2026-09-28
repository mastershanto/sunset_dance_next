import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export function SharedNavbar() {
  return (
    <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-600 flex items-center justify-center text-white shadow-sm">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="font-bold text-base text-zinc-900 dark:text-zinc-50 tracking-tight">
          Sunset Dance
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Sign In
        </Link>
        <Link
          href="/dashboard"
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-rose-600 rounded-xl hover:opacity-95 shadow-sm"
        >
          Go to Dashboard
        </Link>
      </div>
    </header>
  );
}
