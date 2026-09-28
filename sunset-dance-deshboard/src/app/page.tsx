import Link from "next/link";
import { SharedNavbar } from "@/components/shared/Navbar";
import { SharedFooter } from "@/components/shared/Footer";
import { Button } from "@/components/common/Button";
import { LayoutDashboard, LogIn, Sparkles, Users } from "lucide-react";
import {
  StudentDashboardView,
  GetStudentsUseCase,
  StudentRepositoryImpl,
  StudentMockDataSource,
} from "@/features/students";

export default async function Home() {
  const dataSource = new StudentMockDataSource();
  const repository = new StudentRepositoryImpl(dataSource);
  const getStudentsUseCase = new GetStudentsUseCase(repository);
  const initialStudents = await getStudentsUseCase.execute();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 font-sans">
      <SharedNavbar />

      <main className="flex-1 mx-auto max-w-7xl px-6 py-10 w-full space-y-10">
        {/* Hero Section with Quick Navigation */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 text-white shadow-xl shadow-orange-500/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Sunset Dance Academy Management
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enterprise Dashboard & Student Portal
            </h1>
            <p className="text-white/85 text-sm sm:text-base">
              Explore your live admin portal, monitor studio metrics, manage enrolled dancers, and track daily attendance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link href="/dashboard">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-orange-600 hover:bg-white/95 shadow-md"
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Open Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Embedded Clean Architecture Students Preview */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Dancers & Student Roster
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                Live Clean Architecture vertical slice (Domain, Data, Presentation).
              </p>
            </div>
            <Link href="/dashboard/students">
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4" />
                View in Full Dashboard
              </Button>
            </Link>
          </div>

          <StudentDashboardView initialStudents={initialStudents} />
        </div>
      </main>

      <SharedFooter />
    </div>
  );
}
