import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        console.log("Unauthorized user");
        return NextResponse.json(
            { message: "Unauthorized user." },
            { status: 401 }
        );
    }

    const { courseId } = params;

    if (!courseId) {
        console.log("Course ID is required");
        return NextResponse.json(
            { message: "Course ID is required." },
            { status: 400 }
        );
    }

    try {
        const assignedStudents = await prisma.enrolment.findMany({
            where: { courseId: parseInt(courseId) },
            select: { userId: true },
        });

        console.log("Assigned students fetched successfully:", assignedStudents);
        return NextResponse.json({ assignedStudents });
    } catch (error) {
        console.error("Error fetching assigned students:", error);
        return NextResponse.json(
            { message: "Error fetching assigned students." },
            { status: 500 }
        );
    }
}

