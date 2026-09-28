"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Users, Calendar, DollarSign, Activity, ArrowRight, Plus } from "lucide-react";
import { Heading } from "@/components/common/Heading";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/common/Button";
import { dashboardApi, DashboardStats, ActivityItem } from "@/hooks/api/dashboard-api";

export default function DashboardOverviewPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, actData] = await Promise.all([
          dashboardApi.getStats(),
          dashboardApi.getRecentActivities(),
        ]);
        setStats(statsData);
        setActivities(actData);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Heading
          title="Studio Dashboard"
          subtitle="Real-time performance metrics and recent studio activities"
        />
        <div className="flex items-center gap-3">
          <Link href="/dashboard/students">
            <Button variant="outline" size="sm">
              <Users className="w-4 h-4" />
              Manage Students
            </Button>
          </Link>
          <Button size="sm">
            <Plus className="w-4 h-4" />
            Create Class
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Students"
          value={isLoading ? "..." : (stats?.totalStudents ?? 342)}
          change="+12% this month"
          icon={<Users className="w-5 h-5" />}
        />
        <StatCard
          title="Active Classes"
          value={isLoading ? "..." : (stats?.activeClasses ?? 28)}
          change="+4 new"
          icon={<Calendar className="w-5 h-5" />}
        />
        <StatCard
          title="Monthly Revenue"
          value={isLoading ? "..." : `$${(stats?.totalRevenue ?? 54200).toLocaleString()}`}
          change="+18.2%"
          icon={<DollarSign className="w-5 h-5" />}
        />
        <StatCard
          title="Avg Attendance"
          value={isLoading ? "..." : `${stats?.attendanceRate ?? 94.6}%`}
          change="+2.4%"
          icon={<Activity className="w-5 h-5" />}
        />
      </div>

      {/* Secondary Section: Quick Links & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Recent Studio Activities
            </h3>
            <span className="text-xs text-orange-600 font-medium">Live Feed</span>
          </div>

          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {activities.map((item) => (
              <div key={item.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs text-zinc-400 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shortcut Banner to Student Feature */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/20 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md">
              Clean Architecture
            </span>
            <h3 className="text-xl font-bold">Students Directory</h3>
            <p className="text-sm text-white/80">
              Browse enrolled dancers, filter by skill levels, monitor attendance, and view student profiles.
            </p>
          </div>

          <div className="pt-6">
            <Link href="/dashboard/students">
              <Button
                variant="secondary"
                className="w-full bg-white text-orange-600 hover:bg-white/90"
              >
                Open Student Directory
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
