import React from "react";

export function SharedFooter() {
  return (
    <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
      <p>© {new Date().getFullYear()} Sunset Dance Studio. All rights reserved.</p>
    </footer>
  );
}
