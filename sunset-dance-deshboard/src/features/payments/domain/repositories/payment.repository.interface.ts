import { PaymentEntity } from "../entities/payment.entity";

export interface IPaymentRepository {
  getAllPayments(): Promise<PaymentEntity[]>;
  getPaymentById(id: string): Promise<PaymentEntity | null>;
}
