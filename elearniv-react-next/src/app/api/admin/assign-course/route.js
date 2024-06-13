import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json(
      {
        message: "Unauthorized user.",
      },
      { status: 401 }
    );
  }

  const { courseId, assignedUserId } = await request.json();

  if (!courseId || !assignedUserId) {
    return NextResponse.json(
      {
        message: "courseId and assignedUserId are required.",
      },
      { status: 400 }
    );
  }

  try {
    // Check if the user is already assigned to the course
    const existingAssignment = await prisma.enrolment.findFirst({
      where: {
        userId: assignedUserId,
        courseId: courseId,
      },
    });

    if (existingAssignment) {
      return NextResponse.json(
        {
          alreadyAssigned: true,
          message: "User is already assigned to this course.",
        },
        { status: 200 }
      );
    }

    // Assign the course to the user
    await prisma.enrolment.create({
      data: {
        userId: assignedUserId,
        courseId: courseId,
        order_number: generateOrderNumber(),
        price: 0, // assuming the assignment is free, adjust as needed
        paymentId: null,
        payment_via: "Admin",
        payment_status: "PAID",
        status: "PAID",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Course assigned successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error assigning course:", error);
    return NextResponse.json(
      {
        message: "Error assigning course.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

function generateOrderNumber() {
  return `ORD-${Math.floor(Math.random() * 10000)}`;
}
