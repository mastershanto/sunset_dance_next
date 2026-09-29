import React from "react";
import { ProbashiWebsiteView } from "@/features/probashi-website";

export const metadata = {
  title: "Probashi Hotels & Resorts Limited | Live Website View",
  description: "Luxury residential and riverside resort projects with modern amenities",
};

export default function ProbashiWebsitePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Live Website View
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Integrated high-fidelity implementation of Probashi Hotels &amp; Resorts Limited
          </p>
        </div>

        <a
          href="https://probashihnr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md shadow-amber-500/20"
        >
          Open probashihnr.com ↗
        </a>
      </div>

      {/* Render the full fidelity Probashi Hotels & Resorts Website */}
      <ProbashiWebsiteView />
    </div>
  );
}
