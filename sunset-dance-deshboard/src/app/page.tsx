import { StudentListView, MOCK_STUDENTS } from "@/features/students";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-950">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 font-bold text-white shadow-md shadow-orange-500/20">
              SD
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Sunset Dance
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Academy Management Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
              Autumn 2026 Batch
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Page Title & Intro */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Dancers & Student Roster
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Monitor dancer performance, attendance rates, and active dance disciplines.
          </p>
        </div>

        {/* Feature Component (Vertical Slice) */}
        <StudentListView initialStudents={MOCK_STUDENTS} />
      </main>
    </div>
  );
}
