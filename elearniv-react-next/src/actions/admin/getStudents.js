import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

// Function to get all students Role "USER"
export async function getStudents() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const students = await prisma.user.findMany({
			where: {
				role: 'USER',
			},
			include: {
				profile: true,
			},
		});

		return { students };
	} catch (error) {
		console.error("Error fetching students:", error);
		return { error: "Error fetching students" };
	}
}

