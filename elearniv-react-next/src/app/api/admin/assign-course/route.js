import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function PATCH(request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.json(
      {
        message: "Unauthorized user.",
      },
      { status: 401 }
    );
  }

  const { courseId, assignedUserId, action } = await request.json();

  if (!courseId || !assignedUserId) {
    return NextResponse.json(
      {
        message: "courseId and assignedUserId are required.",
      },
      { status: 400 }
    );
  }

  
  try {
    console.log(" dd " ,courseId, assignedUserId, action);
    if (action === 'assign') {
    
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
    } else if (action === 'unassign') {
      // Unassign the course from the user
      await prisma.enrolment.deleteMany({
        where: {
          userId: assignedUserId,
          courseId: courseId,
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Course unassigned successfully.",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error assigning/unassigning course:", error);
    return NextResponse.json(
      {
        message: "Error assigning/unassigning course.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

function generateOrderNumber() {
  return `ORD-${Math.floor(Math.random() * 10000)}`;
}
