import { StudentEntity } from "../entities/student.entity";
import { IStudentRepository } from "../repositories/student.repository.interface";

/**
 * Use Case: Get all students.
 * Encapsulates the specific business flow for fetching students.
 */
export class GetStudentsUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(): Promise<StudentEntity[]> {
    return await this.studentRepository.getAllStudents();
  }
}
