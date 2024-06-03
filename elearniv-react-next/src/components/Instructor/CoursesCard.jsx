"use client";

import React from "react";
import Link from "next/link";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";

const CoursesCard = ({
	id,
	title,
	slug,
	overview,
	image,
	regular_price,
	before_price,
	lessons,
	user,
	enrolments = [],
	lang,
}) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-courses-box">
				<div className="courses-image">
					<Link
						href={`/${lang}/course/${slug}`}
						className="d-block image"
					>
						<img
							src={image ? image : "/images/courses/courses1.jpg"}
							alt="image"
						/>
					</Link>

					<div className="dropdown action-dropdown">
						<div className="icon">
							<i className="bx bx-dots-vertical-rounded"></i>
						</div>
						<ul className="dropdown-menu">
							<li>
								<Link
									href={`/${lang}/instructor/course/${id}/edit`}
									className="dropdown-item"
								>
									{" "}
									<i className="bx bx-edit"></i> Edit Course
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/instructor/course/${id}/upload`}
									className="dropdown-item"
								>
									<i className="bx bx-cloud-upload"></i>{" "}
									Upload Video
								</Link>
							</li>
							<li>
								<Link
									href={`/${lang}/instructor/course/${id}/assets`}
									className="dropdown-item"
								>
									<i className="bx bxs-file-plus"></i> Assets
								</Link>
							</li>
							<li>
								<button type="button" className="dropdown-item">
									<i className="bx bxs-trash"></i> Delete{" "}
								</button>
							</li>
						</ul>
					</div>

					<>
						{before_price > 0 && (
							<div className="price shadow discount-price">
								<del>${before_price}</del>
							</div>
						)}
						<div className="price shadow">
							${regular_price > 0 ? regular_price : "Free"}
						</div>
					</>
				</div>
				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<img
							src={user.image ? user.image : "/images/user1.jpg"}
							className="rounded-circle"
							alt={user.name}
						/>
						<span>{`${user.name}`}</span>
					</div>

					<h3>
						<Link href={`/${lang}/course/${slug}`}>{title}</Link>
					</h3>

					<p>{stripHtmlAndTruncate(overview, 20)}...</p>
					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						<li>
							<i className="flaticon-agenda"></i> {lessons}{" "}
							Lessons
						</li>
						<li>
							<i className="flaticon-people"></i>{" "}
							{enrolments.length} Students
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;
