import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
        <Loader2 className="w-6 h-6 text-orange-500 absolute animate-pulse" />
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Loading Sunset Dance Portal...
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Fetching latest studio data and metrics
        </p>
      </div>
    </div>
  );
}
