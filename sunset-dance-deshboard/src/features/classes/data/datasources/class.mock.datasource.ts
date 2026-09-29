import { DanceClassEntity } from "../../domain/entities/dance-class.entity";

export class ClassMockDataSource {
  private classes: DanceClassEntity[] = [
    {
      id: "cls-1",
      title: "Contemporary Choreography Flow",
      danceStyle: "Contemporary",
      instructor: "Elena Rostova",
      instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Mon, Wed • 05:30 PM",
      durationMinutes: 90,
      studioRoom: "Studio A (Main Mirror)",
      enrolled: 18,
      capacity: 20,
      level: "Intermediate",
      status: "In-Progress",
    },
    {
      id: "cls-2",
      title: "Urban Hip-Hop & Freestyle Masterclass",
      danceStyle: "Hip-Hop",
      instructor: "Ryan Carter",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Tue, Thu • 06:00 PM",
      durationMinutes: 75,
      studioRoom: "Studio B (Soundstage)",
      enrolled: 24,
      capacity: 25,
      level: "Advanced",
      status: "Scheduled",
    },
    {
      id: "cls-3",
      title: "Classical Ballet Pointe & Technique",
      danceStyle: "Ballet",
      instructor: "Maya Roy",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Mon, Fri • 04:00 PM",
      durationMinutes: 90,
      studioRoom: "Studio C (Barre Hall)",
      enrolled: 12,
      capacity: 15,
      level: "Advanced",
      status: "Scheduled",
    },
    {
      id: "cls-4",
      title: "Sensual Latin Salsa & Bachata",
      danceStyle: "Salsa",
      instructor: "Carlos Mendez",
      instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Wed, Sat • 07:00 PM",
      durationMinutes: 60,
      studioRoom: "Studio A (Main Mirror)",
      enrolled: 16,
      capacity: 16,
      level: "Intermediate",
      status: "Scheduled",
    },
    {
      id: "cls-5",
      title: "Broadway Jazz & Stage Performance",
      danceStyle: "Jazz",
      instructor: "Anika Sharma",
      instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Tue, Sat • 11:00 AM",
      durationMinutes: 75,
      studioRoom: "Studio B (Soundstage)",
      enrolled: 14,
      capacity: 20,
      level: "Beginner",
      status: "Completed",
    },
    {
      id: "cls-6",
      title: "Beginner Rhythm & Street Grooves",
      danceStyle: "Hip-Hop",
      instructor: "Liam Bennett",
      instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      scheduleTime: "Sun • 03:00 PM",
      durationMinutes: 60,
      studioRoom: "Studio C (Barre Hall)",
      enrolled: 10,
      capacity: 15,
      level: "Beginner",
      status: "Scheduled",
    },
  ];

  async getClasses(): Promise<DanceClassEntity[]> {
    return [...this.classes];
  }

  async getClassById(id: string): Promise<DanceClassEntity | null> {
    const found = this.classes.find((c) => c.id === id);
    return found ? { ...found } : null;
  }
}
