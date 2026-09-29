import { DanceClassEntity } from "../../domain/entities/dance-class.entity";
import { IClassRepository } from "../../domain/repositories/class.repository.interface";
import { ClassMockDataSource } from "../datasources/class.mock.datasource";

export class ClassRepositoryImpl implements IClassRepository {
  constructor(private readonly dataSource: ClassMockDataSource) {}

  async getAllClasses(): Promise<DanceClassEntity[]> {
    return await this.dataSource.getClasses();
  }

  async getClassById(id: string): Promise<DanceClassEntity | null> {
    return await this.dataSource.getClassById(id);
  }
}
