import { PaymentEntity } from "../../domain/entities/payment.entity";
import { IPaymentRepository } from "../../domain/repositories/payment.repository.interface";
import { PaymentMockDataSource } from "../datasources/payment.mock.datasource";

export class PaymentRepositoryImpl implements IPaymentRepository {
  constructor(private readonly dataSource: PaymentMockDataSource) {}

  async getAllPayments(): Promise<PaymentEntity[]> {
    return await this.dataSource.getPayments();
  }

  async getPaymentById(id: string): Promise<PaymentEntity | null> {
    return await this.dataSource.getPaymentById(id);
  }
}
