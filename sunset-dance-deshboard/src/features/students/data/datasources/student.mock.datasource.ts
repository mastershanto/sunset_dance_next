import { IStudentDataSource } from "./student.datasource.interface";
import { StudentDTO } from "../dtos/student.dto";

const RAW_MOCK_STUDENTS: StudentDTO[] = [
  {
    id: "std-001",
    full_name: "Maya Roy",
    performance_role: "Lead Soloist",
    profile_image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    dance_category: "Contemporary",
    skill_level: "Advanced",
    attendance_percentage: 98,
    enrolled_at: "Jan 2024",
    is_active: true,
  },
  {
    id: "std-002",
    full_name: "Ryan Carter",
    performance_role: "Street Crew",
    profile_image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    dance_category: "Hip-Hop",
    skill_level: "Intermediate",
    attendance_percentage: 92,
    enrolled_at: "Mar 2024",
    is_active: true,
  },
  {
    id: "std-003",
    full_name: "Elena Rostova",
    performance_role: "Ensemble Artist",
    profile_image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    dance_category: "Ballet",
    skill_level: "Advanced",
    attendance_percentage: 95,
    enrolled_at: "Nov 2023",
    is_active: true,
  },
  {
    id: "std-004",
    full_name: "Carlos Mendez",
    performance_role: "Couples Lead",
    profile_image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    dance_category: "Salsa",
    skill_level: "Intermediate",
    attendance_percentage: 88,
    enrolled_at: "Feb 2024",
    is_active: true,
  },
  {
    id: "std-005",
    full_name: "Anika Sharma",
    performance_role: "Cadet Trainee",
    profile_image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    dance_category: "Jazz",
    skill_level: "Beginner",
    attendance_percentage: 84,
    enrolled_at: "Aug 2024",
    is_active: true,
  },
  {
    id: "std-006",
    full_name: "Liam Bennett",
    performance_role: "Junior Dancer",
    profile_image_url: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    dance_category: "Hip-Hop",
    skill_level: "Beginner",
    attendance_percentage: 78,
    enrolled_at: "Jul 2024",
    is_active: false,
  },
];

export class StudentMockDataSource implements IStudentDataSource {
  async fetchStudents(): Promise<StudentDTO[]> {
    // Simulate real async network latency
    return new Promise((resolve) => {
      setTimeout(() => resolve([...RAW_MOCK_STUDENTS]), 150);
    });
  }

  async fetchStudentById(id: string): Promise<StudentDTO | null> {
    const student = RAW_MOCK_STUDENTS.find((s) => s.id === id);
    return student || null;
  }
}
