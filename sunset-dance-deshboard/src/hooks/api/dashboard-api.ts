import { axiosSecure } from "@/lib/axiosSecure";

export interface DashboardStats {
  totalStudents: number;
  activeClasses: number;
  totalRevenue: number;
  attendanceRate: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  time: string;
  type: "enrollment" | "payment" | "class";
}

export const dashboardApi = {
  getStats: async (): Promise<DashboardStats> => {
    try {
      const res = await axiosSecure.get<DashboardStats>("/dashboard/stats");
      return res.data;
    } catch {
      // Fallback sample data for development
      return {
        totalStudents: 342,
        activeClasses: 28,
        totalRevenue: 54200,
        attendanceRate: 94.6,
      };
    }
  },

  getRecentActivities: async (): Promise<ActivityItem[]> => {
    try {
      const res = await axiosSecure.get<ActivityItem[]>("/dashboard/activities");
      return res.data;
    } catch {
      return [
        {
          id: "1",
          title: "New student registered in Salsa Beginners",
          time: "10 mins ago",
          type: "enrollment",
        },
        {
          id: "2",
          title: "Payment received for Monthly Pass #4092",
          time: "1 hour ago",
          type: "payment",
        },
        {
          id: "3",
          title: "Evening Tango Masterclass completed",
          time: "3 hours ago",
          type: "class",
        },
      ];
    }
  },
};
