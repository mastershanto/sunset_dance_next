import React from "react";
import { SettingsDashboardView } from "@/features/settings";

export const metadata = {
  title: "Settings & Configuration | Sunset Dance Dashboard",
  description: "Configure Sunset Dance studio rules, notifications, and security",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Studio Settings
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Customize your dance academy preferences, billing notifications, and security policies
        </p>
      </div>

      {/* Clean Architecture Settings View Component */}
      <SettingsDashboardView />
    </div>
  );
}
