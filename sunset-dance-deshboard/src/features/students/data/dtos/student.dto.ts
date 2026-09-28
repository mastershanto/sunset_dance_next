import { StudentEntity } from "../../domain/entities/student.entity";

/**
 * Data Transfer Object (DTO) for Student data.
 * Represents the shape of raw data coming from an API, Supabase, or Database.
 */
export interface StudentDTO {
  id: string;
  full_name: string;
  performance_role: string;
  profile_image_url: string;
  dance_category: string;
  skill_level: string;
  attendance_percentage: number;
  enrolled_at: string;
  is_active: boolean;
}

/**
 * Mapper function to transform raw DTO into Domain Entity.
 * Shields the application's domain logic from external data schema changes.
 */
export function mapStudentDTOToEntity(dto: StudentDTO): StudentEntity {
  return {
    id: dto.id,
    name: dto.full_name,
    role: dto.performance_role,
    avatar: dto.profile_image_url,
    danceStyle: dto.dance_category as any,
    level: dto.skill_level as any,
    attendanceRate: dto.attendance_percentage,
    joinedDate: dto.enrolled_at,
    status: dto.is_active ? "Active" : "On-Leave",
  };
}
