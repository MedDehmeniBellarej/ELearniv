import { getCurrentUser } from "@/actions/getCurrentUser";
import { getSingleCourse } from "@/actions/getSingleCourse";
import PageBanner from "@/components/Shared/PageBanner";
import CoursesDetailsContent from "@/components/SingleCourses/CoursesDetailsContent";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";

export async function generateMetadata({ params }) {
	const { course } = await getSingleCourse(params);
	return {
		title: course.title,
		description: stripHtmlAndTruncate(course.overview, 50),
		openGraph: {
			images: [course.image],
		},
	};
}

const page = async ({ params }) => {
	const { lang } = params;
	const { course } = await getSingleCourse(params);
	const currentUser = await getCurrentUser();

	// console.log(course);
	return (
		<>
			<PageBanner
				pageTitle={course.title}
				homePageUrl="/"
				homePageText="Home"
				activePageText={course.title}
				lang={lang}
			/>

			<CoursesDetailsContent
				currentUser={currentUser}
				course={course}
				lang={lang}
			/>
		</>
	);
};

export default page;
