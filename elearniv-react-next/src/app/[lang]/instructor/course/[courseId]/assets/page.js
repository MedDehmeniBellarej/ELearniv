import { getSingleCourse } from "@/actions/instructor/getSingleCourse";
import PageNavigation from "@/components/Instructor/PageNavigation";
import Asset from "./Asset";

const Page = async ({ params: { courseId, lang } }) => {
	const { course, course_assets } = await getSingleCourse(courseId);
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<PageNavigation
						courseId={courseId}
						{...course}
						lang={lang}
					/>
					<Asset {...course} assets={course_assets} />
				</div>
			</div>
		</>
	);
};

export default Page;
