import prisma from "@/libs/prismadb";

export async function getSingleCourse(params) {
	const { slug } = params;

	try {
		const course = await prisma.course.findUnique({
			where: { slug: slug },
			include: {
				user: {
					include: {
						profile: true,
					},
				},
				videos: true,
				category: true,
				enrolments: {
					select: {
						id: true,
					},
				},
				// reviews: {
				// 	orderBy: {
				// 		created_at: "desc",
				// 	},
				// 	include: {
				// 		user: {
				// 			select: {
				// 				name: true,
				// 				image: true,
				// 			},
				// 		},
				// 	},
				// },
			},
		});

		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
