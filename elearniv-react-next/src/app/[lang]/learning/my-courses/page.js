import { myLearning } from "@/actions/myLearning";
import Link from "next/link";
import CourseCard from "./CourseCard";

const page = async ({ params: { lang } }) => {
	const { enrolments } = await myLearning();
	// console.log(enrolments);
	return (
		<div className="ptb-100">
			<div className="container">
				<h2 className="fw-bold mb-4">My Learning</h2>

				<ul className="nav-style1">
					<li>
						<Link
							href={`/${lang}/learning/my-courses/`}
							className="active"
						>
							All Courses
						</Link>
					</li>
					<li>
						<Link href={`/${lang}/learning/wishlist/`}>
							Wishlist
						</Link>
					</li>
				</ul>

				<div className="row">
					{enrolments.map((enrol) => (
						<CourseCard key={enrol.id} {...enrol} lang={lang} />
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
