"use client";

import React, { useState, useMemo } from "react";
import { Search, DollarSign, Download, Filter } from "lucide-react";
import { PaymentEntity, PaymentStatus } from "../../domain/entities/payment.entity";
import { PaymentCard } from "../components/PaymentCard";
import { PaymentStats } from "../components/PaymentStats";

interface PaymentsDashboardViewProps {
  initialPayments: PaymentEntity[];
}

export function PaymentsDashboardView({ initialPayments }: PaymentsDashboardViewProps) {
  const [payments] = useState<PaymentEntity[]>(initialPayments);
  const [selectedStatus, setSelectedStatus] = useState<"All" | PaymentStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPayments = useMemo(() => {
    return payments.filter((item) => {
      const matchesStatus =
        selectedStatus === "All" || item.status === selectedStatus;
      const matchesSearch =
        item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.danceStyle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [payments, selectedStatus, searchQuery]);

  const totalRevenue = useMemo(
    () => payments.filter((p) => p.status === "Completed").reduce((sum, p) => sum + p.amount, 0),
    [payments]
  );
  const completedCount = useMemo(
    () => payments.filter((p) => p.status === "Completed").length,
    [payments]
  );
  const pendingCount = useMemo(
    () => payments.filter((p) => p.status === "Pending").length,
    [payments]
  );

  return (
    <div className="space-y-8">
      {/* Top Banner & Stats */}
      <PaymentStats
        totalRevenue={totalRevenue}
        completedCount={completedCount}
        pendingCount={pendingCount}
      />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Status Filters */}
        <div className="flex flex-wrap gap-2">
          {(["All", "Completed", "Pending"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                selectedStatus === status
                  ? "bg-orange-500 text-white shadow-sm shadow-orange-500/30"
                  : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:border dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Search & Export */}
        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search invoice or student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-zinc-200 bg-white py-1.5 pl-9 pr-4 text-xs text-zinc-900 placeholder-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100"
            />
          </div>

          <button
            onClick={() => alert("Exporting transactions as CSV...")}
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Transaction List */}
      {filteredPayments.length > 0 ? (
        <div className="space-y-3">
          {filteredPayments.map((payment) => (
            <PaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-800">
          <DollarSign className="w-8 h-8 text-zinc-400 mb-2" />
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            No transaction records found matching your filters.
          </p>
          <button
            onClick={() => {
              setSelectedStatus("All");
              setSearchQuery("");
            }}
            className="mt-3 text-xs font-semibold text-orange-600 hover:underline dark:text-orange-400"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
