import React from "react";
import { Download, CreditCard, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { PaymentEntity } from "../../domain/entities/payment.entity";

interface PaymentCardProps {
  payment: PaymentEntity;
}

export function PaymentCard({ payment }: PaymentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/90">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Left: Student info and invoice */}
        <div className="flex items-center gap-3.5">
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800 shrink-0">
            <img
              src={payment.studentAvatar}
              alt={payment.studentName}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                {payment.studentName}
              </h3>
              <span className="text-[11px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded">
                {payment.invoiceNumber}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {payment.danceStyle} • {payment.date}
            </p>
          </div>
        </div>

        {/* Right: Payment Method, Amount, Status & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-5">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <CreditCard className="w-3.5 h-3.5 text-zinc-400" />
            <span>{payment.method}</span>
          </div>

          <div className="text-right">
            <div className="text-base font-extrabold text-zinc-900 dark:text-zinc-100">
              ${payment.amount.toFixed(2)}
            </div>
            <div className="text-[11px] text-zinc-400">{payment.currency}</div>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
              payment.status === "Completed"
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400"
                : payment.status === "Pending"
                ? "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400"
                : "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400"
            }`}
          >
            {payment.status === "Completed" ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : payment.status === "Pending" ? (
              <Clock className="w-3.5 h-3.5 animate-pulse" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5" />
            )}
            {payment.status}
          </span>

          <button
            title="Download Invoice"
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
