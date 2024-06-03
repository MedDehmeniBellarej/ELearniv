import { getMyCourses } from "@/actions/instructor/getMyCourses";
import CoursesCard from "@/components/Instructor/CoursesCard";
import InstructorHeader from "@/components/Instructor/InstructorHeader";

const Page = async ({ params: { lang } }) => {
	const { courses } = await getMyCourses();
	// console.log(courses);
	return (
		<>
			{/* Instructor header */}
			<InstructorHeader lang={lang} />
			{/* End Instructor header */}

			<div className="pb-100">
				<div className="container">
					<h3 className="mb-5 text-center">My Courses</h3>

					<div className="row justify-content-center">
						{courses.length > 0 ? (
							courses.map((course) => (
								<CoursesCard
									key={course.id}
									{...course}
									lang={lang}
								/>
							))
						) : (
							<h3>Empty</h3>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
