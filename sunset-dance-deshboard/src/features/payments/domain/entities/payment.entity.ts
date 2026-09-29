export type PaymentStatus = "Completed" | "Pending" | "Failed";
export type PaymentMethod = "Credit Card" | "Apple Pay" | "PayPal" | "Bank Transfer";

export interface PaymentEntity {
  id: string;
  invoiceNumber: string;
  studentName: string;
  studentAvatar: string;
  danceStyle: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  date: string;
}
