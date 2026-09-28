export type DanceStyle = "Ballet" | "Hip-Hop" | "Salsa" | "Contemporary" | "Jazz";
export type StudentLevel = "Beginner" | "Intermediate" | "Advanced";
export type StudentStatus = "Active" | "On-Leave";

/**
 * Domain Entity representing a Student/Dancer in Sunset Dance Academy.
 * Pure business logic model independent of external libraries or frameworks.
 */
export interface StudentEntity {
  id: string;
  name: string;
  role: string;
  avatar: string;
  danceStyle: DanceStyle;
  level: StudentLevel;
  attendanceRate: number; // 0 to 100
  joinedDate: string;
  status: StudentStatus;
}
