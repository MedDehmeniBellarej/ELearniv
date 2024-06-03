import { getSingleCourse } from "@/actions/instructor/getSingleCourse";
import PageNavigation from "@/components/Instructor/PageNavigation";
import UploadVideoForm from "@/components/Instructor/UploadVideoForm";

const Page = async ({ params: { courseId, lang } }) => {
	const { course } = await getSingleCourse(courseId);
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<PageNavigation
						courseId={courseId}
						{...course}
						lang={lang}
					/>

					<div className="create-course-form">
						<UploadVideoForm course={course} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
