import { DanceClassEntity } from "../entities/dance-class.entity";
import { IClassRepository } from "../repositories/class.repository.interface";

export class GetClassesUseCase {
  constructor(private readonly classRepository: IClassRepository) {}

  async execute(): Promise<DanceClassEntity[]> {
    return await this.classRepository.getAllClasses();
  }
}
