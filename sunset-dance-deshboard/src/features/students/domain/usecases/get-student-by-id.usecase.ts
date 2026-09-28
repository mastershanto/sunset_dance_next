import { StudentEntity } from "../entities/student.entity";
import { IStudentRepository } from "../repositories/student.repository.interface";

/**
 * Use Case: Get a student by unique ID.
 */
export class GetStudentByIdUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(id: string): Promise<StudentEntity | null> {
    if (!id || id.trim().length === 0) {
      throw new Error("Student ID is required.");
    }
    return await this.studentRepository.getStudentById(id);
  }
}
