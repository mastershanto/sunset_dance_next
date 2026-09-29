export type ClassDanceStyle = "Ballet" | "Hip-Hop" | "Salsa" | "Contemporary" | "Jazz";
export type ClassStatus = "Scheduled" | "In-Progress" | "Completed";

export interface DanceClassEntity {
  id: string;
  title: string;
  danceStyle: ClassDanceStyle;
  instructor: string;
  instructorAvatar: string;
  scheduleTime: string; // e.g. "Mon, Wed • 05:30 PM"
  durationMinutes: number;
  studioRoom: string; // e.g. "Studio A (Mirrored)"
  enrolled: number;
  capacity: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  status: ClassStatus;
}
