"use client";

import Pagination from "@etchteam/next-pagination";
import CourseCard from "../Shared/CourseCard";
import ShortingDropdown from "./ShortingDropdown";

const CoursesList = ({
	currentUser,
	courses,
	totalCourses,
	totalPages,
	lang,
}) => {
	return (
		<>
			<div className="courses-area courses-section pt-50 pb-100">
				<div className="container">
					<ShortingDropdown />
					<div className="row">
						<>
							{courses &&
								courses.map((course) => (
									<CourseCard
										key={course.id}
										currentUser={currentUser}
										{...course}
										lang={lang}
									/>
								))}
							{totalCourses > 9 && (
								<div className="col-lg-12 col-md-12">
									<div className="pagination-area text-center">
										<Pagination
											sizes={[1]}
											total={totalPages}
										/>
									</div>
								</div>
							)}
						</>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesList;
