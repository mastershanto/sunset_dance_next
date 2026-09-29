import React from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export function TopBanner() {
  return (
    <div className="bg-zinc-900 text-zinc-300 px-6 py-2.5 flex flex-wrap items-center justify-between text-xs border-b border-zinc-800 gap-2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-zinc-400">
          <MapPin className="w-3.5 h-3.5 text-amber-500" />
          House # 11, Block # D, Aftabnagar, Dhaka-1212
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-zinc-400">
          <Phone className="w-3.5 h-3.5 text-amber-500" />
          01635-603092
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://probashihnr.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500 text-amber-400 hover:text-zinc-950 px-3 py-1 rounded-full font-medium transition-all"
        >
          <span>Visit Live URL</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
