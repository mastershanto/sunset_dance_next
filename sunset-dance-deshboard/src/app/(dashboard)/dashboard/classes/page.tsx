import React from "react";
import {
  ClassesDashboardView,
  ClassMockDataSource,
  ClassRepositoryImpl,
  GetClassesUseCase,
} from "@/features/classes";

export const metadata = {
  title: "Classes & Schedule | Sunset Dance Dashboard",
  description: "Manage dance class schedules, studios, and instructors",
};

export default async function ClassesPage() {
  const dataSource = new ClassMockDataSource();
  const repository = new ClassRepositoryImpl(dataSource);
  const getClassesUseCase = new GetClassesUseCase(repository);
  const initialClasses = await getClassesUseCase.execute();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Classes & Schedule
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Explore studio rooms, manage ongoing dance sessions, and review instructor assignments
        </p>
      </div>

      {/* Clean Architecture Classes View Component */}
      <ClassesDashboardView initialClasses={initialClasses} />
    </div>
  );
}
