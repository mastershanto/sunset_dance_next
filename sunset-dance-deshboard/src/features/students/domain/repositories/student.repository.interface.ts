import { StudentEntity } from "../entities/student.entity";

/**
 * Domain Repository Interface (Contract/Port).
 * Decouples domain logic from Data/Infrastructure layer.
 * Similar to C# interface or Dart abstract class in Clean Architecture.
 */
export interface IStudentRepository {
  getAllStudents(): Promise<StudentEntity[]>;
  getStudentById(id: string): Promise<StudentEntity | null>;
}
