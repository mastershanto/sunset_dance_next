import React from "react";
import {
  PaymentsDashboardView,
  PaymentMockDataSource,
  PaymentRepositoryImpl,
  GetPaymentsUseCase,
} from "@/features/payments";

export const metadata = {
  title: "Payments & Invoices | Sunset Dance Dashboard",
  description: "Track student tuition, payment gateways, and accounting ledgers",
};

export default async function PaymentsPage() {
  const dataSource = new PaymentMockDataSource();
  const repository = new PaymentRepositoryImpl(dataSource);
  const getPaymentsUseCase = new GetPaymentsUseCase(repository);
  const initialPayments = await getPaymentsUseCase.execute();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Tuition & Payments
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Monitor academy revenue, reconcile student tuition invoices, and review payment methods
        </p>
      </div>

      {/* Clean Architecture Payments View Component */}
      <PaymentsDashboardView initialPayments={initialPayments} />
    </div>
  );
}
