import { StudentDTO } from "../dtos/student.dto";

/**
 * Interface for Student Data Source.
 * Can be implemented by MockDataSource, RestApiDataSource, SupabaseDataSource, etc.
 */
export interface IStudentDataSource {
  fetchStudents(): Promise<StudentDTO[]>;
  fetchStudentById(id: string): Promise<StudentDTO | null>;
}
