import { StudentEntity } from "../../domain/entities/student.entity";
import { IStudentRepository } from "../../domain/repositories/student.repository.interface";
import { IStudentDataSource } from "../datasources/student.datasource.interface";
import { mapStudentDTOToEntity } from "../dtos/student.dto";

/**
 * Concrete implementation of IStudentRepository.
 * Bridges the data source to domain entities.
 */
export class StudentRepositoryImpl implements IStudentRepository {
  constructor(private readonly dataSource: IStudentDataSource) {}

  async getAllStudents(): Promise<StudentEntity[]> {
    const rawDtos = await this.dataSource.fetchStudents();
    return rawDtos.map(mapStudentDTOToEntity);
  }

  async getStudentById(id: string): Promise<StudentEntity | null> {
    const rawDto = await this.dataSource.fetchStudentById(id);
    if (!rawDto) return null;
    return mapStudentDTOToEntity(rawDto);
  }
}
