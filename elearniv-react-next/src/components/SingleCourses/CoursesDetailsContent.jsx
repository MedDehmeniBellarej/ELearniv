"use client";

import React from "react";
import Link from "next/link";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";
import dateFormat from "@/utils/dateFormat";
import BuyCourseBtn from "./BuyCourseBtn";
import Image from "next/image";
import CourseOverview from "./Course/CourseOverview";
import CourseVideo from "./Course/CourseVideo";
import WhatYouWillLearn from "./Course/WhatYouWillLearn";
import Requirements from "./Course/Requirements";
import WhoIsThisCourseFor from "./Course/WhoIsThisCourseFor";
import InstructorProfile from "./Course/InstructorProfile";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";

const CoursesDetailsContent = ({ currentUser, course, lang }) => {
	const { discount } = couponCode((state) => state);

	const {
		slug,
		image,
		overview,
		what_you_will_learn,
		who_is_this_course_for,
		requirements,
		regular_price,
		updated_at,
		category,
		user,
		enrolments,
	} = course;

	return (
		<>
			<div className="courses-details-area ptb-100">
				<div className="container">
					<div className="courses-details-header">
						<div className="row align-items-center">
							<div className="col-lg-8 col-md-12">
								<div className="courses-title">
									<p>
										{stripHtmlAndTruncate(overview, 28)}...
									</p>
								</div>
								<div className="courses-meta">
									<ul>
										<li>
											<i className="bx bx-folder-open"></i>
											<span>Category</span>
											{category && (
												<Link href={`#`}>
													{category.name}
												</Link>
											)}
										</li>
										<li>
											<i className="bx bx-group"></i>
											<span>Students Enrolled</span>
											<Link href="#">
												{enrolments &&
													enrolments.length}
											</Link>
										</li>
										<li>
											<i className="bx bx-calendar"></i>
											<span>Last Updated</span>
											<Link href="#">
												{dateFormat(updated_at)}
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-12">
								<div className="courses-price">
									<div className="price">
										$
										{discount
											? calculateDiscount(
													discount,
													regular_price
											  )
											: regular_price}
									</div>

									<BuyCourseBtn
										currentUser={currentUser}
										{...course}
										lang={lang}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-image-style-two text-center">
								<Image
									src={image}
									width={599}
									height={750}
									alt="image"
								/>
							</div>

							<div className="courses-details-desc-style-two">
								<CourseOverview overview={overview} />

								<div className="mb-4">
									<h3>Course Video</h3>
									{slug && (
										<CourseVideo
											currentUser={currentUser}
											course={course}
										/>
									)}
								</div>

								<WhatYouWillLearn
									what_you_will_learn={what_you_will_learn}
								/>

								<Requirements requirements={requirements} />

								<WhoIsThisCourseFor
									who_is_this_course_for={
										who_is_this_course_for
									}
								/>

								<InstructorProfile instructor={user} />
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesDetailsSidebar {...course} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsContent;
