import { getCurrentUser } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{
				message: "Unauthorized user.",
			},
			{ status: 401 }
		);
	}

	const {
		data: { cart },
	} = await request.json();

	if (cart.length === 0) {
		return NextResponse.json(
			{
				message: "Your cart is empty.",
			},
			{ status: 400 }
		);
	}

	// Filter out free courses
	const freeCourses = cart.filter(course => course.regular_price === 0);

	if (freeCourses.length === 0) {
		return NextResponse.json(
			{
				message: "No free courses in the cart.",
			},
			{ status: 400 }
		);
	}

	try {
		for (const course of freeCourses) {
			await prisma.enrolment.create({
				data: {
					userId: currentUser.id,
					courseId: course.id,
					order_number: generateOrderNumber(),
					price: 0,
					paymentId: null,
					payment_via: "Free",
					payment_status: "PAID",
					status: "PAID",
				},
			});
		}
		console.log("Successfully enrolled in free courses.");

		return NextResponse.json(
			{
				message: "Successfully enrolled in free courses.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error enrolling in free courses:", error);
		return NextResponse.json(
			{
				message: "Error enrolling in free courses.",
				error: error.message,
			},
			{ status: 500 }
		);
	}
}

function generateOrderNumber() {
	return `ORD-${Math.floor(Math.random() * 10000)}`;
}
