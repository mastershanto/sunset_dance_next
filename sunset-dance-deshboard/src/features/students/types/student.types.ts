export type DanceStyle = "Ballet" | "Hip-Hop" | "Salsa" | "Contemporary" | "Jazz";

export interface Student {
  id: string;
  name: string;
  role: string;
  avatar: string;
  danceStyle: DanceStyle;
  level: "Beginner" | "Intermediate" | "Advanced";
  attendanceRate: number; // e.g., 95%
  joinedDate: string;
  status: "Active" | "On-Leave";
}
