import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

// Function to get the count of users enrolled in courses
export async function getAssigne(courseId) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        redirect("/");
    }

    try {
        const assignedStudents = await prisma.enrolment.findMany({
            where: {
                courseId: courseId,
            },
            include: {
                user: {
                    include: {
                        profile: true, // Assuming user profile information is needed
                    },
                },
            },
        });

        return { assignedStudents };
    } catch (error) {
        console.error("Error fetching assigned students:", error);
        return { error: "Error fetching assigned students" };
    }
}