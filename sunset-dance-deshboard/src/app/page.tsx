import {
  StudentDashboardView,
  GetStudentsUseCase,
  StudentRepositoryImpl,
  StudentMockDataSource,
} from "@/features/students";

/**
 * Server Component (Root Page Route).
 * Executes Use Case directly on the server for instant SSR and SEO,
 * then hydrates the Presentation View.
 */
export default async function Home() {
  // Dependency Injection on Server
  const dataSource = new StudentMockDataSource();
  const repository = new StudentRepositoryImpl(dataSource);
  const getStudentsUseCase = new GetStudentsUseCase(repository);
  const initialStudents = await getStudentsUseCase.execute();

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
              Clean Architecture + Next.js
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
            Dancers & Student Roster
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Enterprise Clean Architecture (Domain, Data, Presentation) in Feature-First Next.js.
          </p>
        </div>

        {/* Feature Presentation View with Initial SSR Data */}
        <StudentDashboardView initialStudents={initialStudents} />
      </main>
    </div>
  );
}
