"use client";

import React, { useState } from "react";
import {
  Building2,
  Bell,
  ShieldCheck,
  CreditCard,
  Save,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/common/Button";

export function SettingsDashboardView() {
  const [academyName, setAcademyName] = useState("Sunset Dance Academy");
  const [academyEmail, setAcademyEmail] = useState("admin@sunsetdance.com");
  const [phone, setPhone] = useState("+1 (555) 234-8900");
  const [timezone, setTimezone] = useState("America/New_York (EST)");
  const [currency, setCurrency] = useState("USD ($)");
  const [autoEmailReceipts, setAutoEmailReceipts] = useState(true);
  const [smsReminders, setSmsReminders] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-8 max-w-4xl">
      {/* Success Notification Alert */}
      {saved && (
        <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-700 dark:text-emerald-400">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="text-sm font-semibold">
            Settings have been successfully updated and applied!
          </p>
        </div>
      )}

      {/* Academy General Profile Section */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Academy Profile & General Details
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Configure your studio brand, public contact information, and operating timezone
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Academy Name
            </label>
            <input
              type="text"
              value={academyName}
              onChange={(e) => setAcademyName(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Official Contact Email
            </label>
            <input
              type="email"
              value={academyEmail}
              onChange={(e) => setAcademyEmail(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Studio Phone Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Studio Timezone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 focus:border-orange-500 focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-800/60 dark:text-zinc-100"
            >
              <option value="America/New_York (EST)">America/New_York (EST)</option>
              <option value="America/Los_Angeles (PST)">America/Los_Angeles (PST)</option>
              <option value="Europe/London (GMT)">Europe/London (GMT)</option>
              <option value="Asia/Dhaka (BST)">Asia/Dhaka (BST)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Notifications and Automations */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Notification & Communication
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Control automatic emails, tuition alerts, and class schedule notifications
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Automated Tuition Receipt Emails
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Send a branded PDF receipt automatically after payment confirmation
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAutoEmailReceipts(!autoEmailReceipts)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoEmailReceipts ? "bg-orange-500" : "bg-zinc-300 dark:bg-zinc-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoEmailReceipts ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
            <div>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Class Schedule Change SMS
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Alert students via SMS when class time or studio hall is changed
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSmsReminders(!smsReminders)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                smsReminders ? "bg-orange-500" : "bg-zinc-300 dark:bg-zinc-700"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  smsReminders ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Security & Access */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/90 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Admin Security & Access Controls
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Manage multi-factor authentication and role session permissions
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              Two-Factor Authentication (2FA)
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Require an authenticator code when logging into the admin portal
            </p>
          </div>
          <button
            type="button"
            onClick={() => setTwoFactorAuth(!twoFactorAuth)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              twoFactorAuth ? "bg-orange-500" : "bg-zinc-300 dark:bg-zinc-700"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                twoFactorAuth ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Form Submission Button */}
      <div className="flex justify-end gap-3">
        <Button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 inline-flex items-center gap-2 px-6"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>
    </form>
  );
}
