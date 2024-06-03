"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PageNavigation = ({ courseId, title, lang }) => {
	const pathname = usePathname();

	return (
		<>
			<h2 className="fw-bold mb-4">Title: {title}</h2>

			<ul className="nav-style1">
				<li>
					<Link href={`/${lang}/instructor/courses/`}>Courses</Link>
				</li>
				<li>
					<Link href={`/${lang}/instructor/course/create/`}>
						Create Course
					</Link>
				</li>
				<li>
					<Link
						href={`/${lang}/instructor/course/${courseId}/edit`}
						className={
							pathname ==
							`/${lang}/instructor/course/${courseId}/edit`
								? "active"
								: null
						}
					>
						Edit Course
					</Link>
				</li>
				<li>
					<Link
						href={`/${lang}/instructor/course/${courseId}/upload`}
						className={
							pathname ==
							`/${lang}/instructor/course/${courseId}/upload`
								? "active"
								: null
						}
					>
						Upload Video
					</Link>
				</li>

				<li>
					<Link
						href={`/instructor/course/${courseId}/videos`}
						className={
							pathname ==
							`/${lang}/instructor/course/${courseId}/videos`
								? "active"
								: null
						}
					>
						Videos
					</Link>
				</li>
				<li>
					<Link
						href={`/instructor/course/${courseId}/assets`}
						className={
							pathname ==
							`/${lang}/instructor/course/${courseId}/assets`
								? "active"
								: null
						}
					>
						Assets
					</Link>
				</li>
			</ul>
		</>
	);
};

export default PageNavigation;
