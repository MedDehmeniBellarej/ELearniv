import { getSingleCourse } from "@/actions/instructor/getSingleCourse";
import PageNavigation from "@/components/Instructor/PageNavigation";
import Videos from "./Videos";

const Page = async ({ params: { courseId, lang } }) => {
	const { course_videos } = await getSingleCourse(courseId);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<PageNavigation
						courseId={courseId}
						activeClassname="Videos"
						lang={lang}
					/>

					<div className="create-course-form">
						<Videos videos={course_videos} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
