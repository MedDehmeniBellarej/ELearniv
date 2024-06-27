import { NextResponse } from 'next/server';
import prisma from '@/libs/prismadb';
import { getCurrentUser } from '@/actions/getCurrentUser';

export async function GET(req, { params }) {
  const { courseId } = params;

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.redirect('/');
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(courseId) },
      include: {
        videos: {
          orderBy: { short_id: 'asc' },
        },
        reviews: {
          orderBy: { id: 'desc' },
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
        discussions: {
          orderBy: { id: 'desc' },
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (!course) {
      return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }

    return NextResponse.json({ course }, { status: 200 });
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
