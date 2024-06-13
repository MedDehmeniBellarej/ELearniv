import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";


// Function to check if a user is assigned to a course
export async function isUserAssigned(userId, courseId) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        redirect("/");
    }

    try {
        const enrolment = await prisma.enrolment.findFirst({
            where: {
                userId: userId,
                courseId: courseId,
            },
        });

        return { isAssigned: !!enrolment };
    } catch (error) {
        console.error("Error checking enrolment:", error);
        return { error: "Error checking enrolment" };
    }
}

// Function to get the count of users enrolled in courses
export async function getUsersEnrolledCount() {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        redirect("/");
    }

    try {
        const count = await prisma.enrolment.count({
            distinct: ['userId'],
        });

        return { count };
    } catch (error) {
        console.error("Error fetching enrolled users count:", error);
        return { error: "Error fetching enrolled users count" };
    }
}