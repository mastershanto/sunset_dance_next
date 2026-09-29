import { PaymentEntity } from "../../domain/entities/payment.entity";

export class PaymentMockDataSource {
  private payments: PaymentEntity[] = [
    {
      id: "pay-101",
      invoiceNumber: "INV-2026-001",
      studentName: "Maya Roy",
      studentAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Contemporary",
      amount: 280,
      currency: "USD",
      method: "Credit Card",
      status: "Completed",
      date: "2026-09-24",
    },
    {
      id: "pay-102",
      invoiceNumber: "INV-2026-002",
      studentName: "Ryan Carter",
      studentAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Hip-Hop",
      amount: 195,
      currency: "USD",
      method: "Apple Pay",
      status: "Completed",
      date: "2026-09-22",
    },
    {
      id: "pay-103",
      invoiceNumber: "INV-2026-003",
      studentName: "Elena Rostova",
      studentAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Ballet",
      amount: 320,
      currency: "USD",
      method: "PayPal",
      status: "Completed",
      date: "2026-09-20",
    },
    {
      id: "pay-104",
      invoiceNumber: "INV-2026-004",
      studentName: "Carlos Mendez",
      studentAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Salsa",
      amount: 150,
      currency: "USD",
      method: "Bank Transfer",
      status: "Pending",
      date: "2026-09-18",
    },
    {
      id: "pay-105",
      invoiceNumber: "INV-2026-005",
      studentName: "Anika Sharma",
      studentAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Jazz",
      amount: 180,
      currency: "USD",
      method: "Credit Card",
      status: "Pending",
      date: "2026-09-15",
    },
    {
      id: "pay-106",
      invoiceNumber: "INV-2026-006",
      studentName: "Liam Bennett",
      studentAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      danceStyle: "Hip-Hop",
      amount: 210,
      currency: "USD",
      method: "Apple Pay",
      status: "Completed",
      date: "2026-09-12",
    },
  ];

  async getPayments(): Promise<PaymentEntity[]> {
    return [...this.payments];
  }

  async getPaymentById(id: string): Promise<PaymentEntity | null> {
    const found = this.payments.find((p) => p.id === id);
    return found ? { ...found } : null;
  }
}
