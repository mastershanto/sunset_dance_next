"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  CreditCard,
  Settings,
  LogOut,
  Sparkles,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Students", href: "/dashboard/students", icon: Users },
  { label: "Classes & Schedule", href: "/dashboard/classes", icon: CalendarDays },
  { label: "Payments", href: "/dashboard/payments", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Website (Probashi)", href: "/dashboard/website", icon: Globe },
];

export function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md flex flex-col justify-between h-screen sticky top-0">
      <div>
        {/* Brand / Logo */}
        <div className="h-16 flex items-center gap-3 px-6 border-b border-zinc-100 dark:border-zinc-800/80">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-rose-600 flex items-center justify-center text-white shadow-md shadow-orange-500/25">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-zinc-900 dark:text-zinc-50">
              Sunset Dance
            </h1>
            <p className="text-[11px] font-medium text-orange-600 dark:text-orange-400 uppercase tracking-wider">
              Admin Portal
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-1.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-zinc-500")} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User / Logout */}
      <div className="p-4 border-t border-zinc-100 dark:border-zinc-800/80">
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
