import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, password } = body;

		if (name == "") {
			return NextResponse.json(
				{
					message: "Name is required!",
				},
				{ status: 404 }
			);
		} else if (email == "") {
			return NextResponse.json(
				{
					message: "Email is required!",
				},
				{ status: 404 }
			);
		} else if (password == "") {
			return NextResponse.json(
				{
					message: "Password is required!",
				},
				{ status: 404 }
			);
		}

		const existingUser = await prisma.user.findUnique({
			where: { email: email },
		});

		if (existingUser) {
			return NextResponse.json(
				{ message: "Email already exist!" },
				{ status: 404 }
			);
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				hashedPassword,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
