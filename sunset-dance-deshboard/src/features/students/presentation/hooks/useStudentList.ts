"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { StudentEntity, DanceStyle } from "../../domain/entities/student.entity";
import { GetStudentsUseCase } from "../../domain/usecases/get-students.usecase";
import { StudentRepositoryImpl } from "../../data/repositories/student.repository.impl";
import { StudentMockDataSource } from "../../data/datasources/student.mock.datasource";

export const DANCE_CATEGORIES: ("All" | DanceStyle)[] = [
  "All",
  "Contemporary",
  "Hip-Hop",
  "Ballet",
  "Salsa",
  "Jazz",
];

// Dependency Injection Factory for GetStudentsUseCase
function createGetStudentsUseCase(): GetStudentsUseCase {
  const dataSource = new StudentMockDataSource();
  const repository = new StudentRepositoryImpl(dataSource);
  return new GetStudentsUseCase(repository);
}

/**
 * ViewModel Hook (Presentation Layer).
 * Coordinates UI state with Domain Use Case.
 * Similar to a Flutter ChangeNotifier / Bloc or C# ViewModel.
 */
export function useStudentList(initialStudents?: StudentEntity[]) {
  const [students, setStudents] = useState<StudentEntity[]>(initialStudents || []);
  const [isLoading, setIsLoading] = useState<boolean>(!initialStudents);
  const [error, setError] = useState<string | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<"All" | DanceStyle>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchStudents = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const useCase = createGetStudentsUseCase();
      const result = await useCase.execute();
      setStudents(result);
    } catch (err: any) {
      setError(err?.message || "Failed to load dancers.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!initialStudents || initialStudents.length === 0) {
      fetchStudents();
    }
  }, [fetchStudents, initialStudents]);

  // Pure computed state (Derived state)
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesCategory =
        selectedCategory === "All" || student.danceStyle === selectedCategory;
      const matchesSearch =
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.role.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [students, selectedCategory, searchQuery]);

  const activeCount = useMemo(
    () => students.filter((s) => s.status === "Active").length,
    [students]
  );

  const averageAttendance = useMemo(() => {
    if (students.length === 0) return 0;
    const total = students.reduce((sum, s) => sum + s.attendanceRate, 0);
    return Math.round(total / students.length);
  }, [students]);

  const clearFilters = useCallback(() => {
    setSelectedCategory("All");
    setSearchQuery("");
  }, []);

  return {
    students: filteredStudents,
    rawTotalCount: students.length,
    activeCount,
    averageAttendance,
    isLoading,
    error,
    categories: DANCE_CATEGORIES,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    clearFilters,
    reload: fetchStudents,
  };
}
