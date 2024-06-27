import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { sendNewDiscussionEmail } from "@/libs/mailer";

export async function POST(request, { params }) {
  const { courseId } = params;

  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        {
          message: "Unauthorized user.",
        },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { comment } = body;

    // Validate if the body fields are not empty
    if (!comment) {
      return NextResponse.json(
        {
          message: "Comment is required.",
        },
        { status: 400 }
      );
    }

    const discussion = await prisma.discussion.create({
      data: {
        comment,
        userId: currentUser.id,
        courseId: parseInt(courseId),
      },
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    // Fetch course users to send email notifications
    const courseUsers = await prisma.enrolment.findMany({
      where: { courseId: parseInt(courseId) },
      include: {
        user: true,
      },
    });

    const recipients = courseUsers
      .map((enrolment) => enrolment.user.email)
      .filter((email) => email !== currentUser.email);

    if (recipients.length > 0) {
      await sendNewDiscussionEmail(recipients, discussion);
    }

    return NextResponse.json(discussion, { status: 200 });
  } catch (error) {
    console.error("Error creating discussion:", error);
    return NextResponse.json(
      {
        message: "An error occurred.",
      },
      { status: 500 }
    );
  }
}
