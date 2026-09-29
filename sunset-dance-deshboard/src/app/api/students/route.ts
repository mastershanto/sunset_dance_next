import { NextResponse } from "next/server";
import {
  StudentMockDataSource,
  StudentRepositoryImpl,
  GetStudentsUseCase,
} from "@/features/students";

// Initialize Clean Architecture dependencies
const dataSource = new StudentMockDataSource();
const repository = new StudentRepositoryImpl(dataSource);
const getStudentsUseCase = new GetStudentsUseCase(repository);

/**
 * GET /api/students
 * Returns the list of enrolled dancers/students
 */
export async function GET() {
  try {
    const students = await getStudentsUseCase.execute();
    return NextResponse.json({
      success: true,
      data: students,
      count: students.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch students",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/students
 * Handles creating or adding a new student entry
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required fields",
        },
        { status: 400 }
      );
    }

    // Example response for added student
    const newStudent = {
      id: `std-${Date.now()}`,
      name: body.name,
      email: body.email,
      danceStyle: body.danceStyle || "Contemporary",
      attendanceRate: 100,
      status: "Active",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Student registered successfully",
        data: newStudent,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process student registration",
        error: error instanceof Error ? error.message : "Invalid payload",
      },
      { status: 400 }
    );
  }
}
