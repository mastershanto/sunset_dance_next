import { PaymentEntity } from "../entities/payment.entity";
import { IPaymentRepository } from "../repositories/payment.repository.interface";

export class GetPaymentsUseCase {
  constructor(private readonly paymentRepository: IPaymentRepository) {}

  async execute(): Promise<PaymentEntity[]> {
    return await this.paymentRepository.getAllPayments();
  }
}
