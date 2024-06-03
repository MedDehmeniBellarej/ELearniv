import React from "react";
import Link from "next/link";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/dist/server/api-utils";

const Page = async ({ params: { lang } }) => {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Create the Course</h2>

					<ul className="nav-style1">
						<li>
							<Link href={`/${lang}/instructor/courses/`}>
								Courses
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/instructor/course/create/`}
								className="active"
							>
								Create a Course
							</Link>
						</li>
					</ul>

					<div className="create-course-form">
						<CourseCreateForm lang={lang} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
