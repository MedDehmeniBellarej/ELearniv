"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCard = ({ course: { id, user, image, title, slug }, lang }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-courses-box style-2">
				<div className="courses-image">
					<Link
						href={`/${lang}/learning/course/${slug}/${id}`}
						className="d-block image"
					>
						<Image
							width={599}
							height={750}
							src={image}
							alt={title}
						/>
					</Link>

					<div className="video_box">
						<div className="d-table">
							<div className="d-table-cell">
								<Link
									href={`/${lang}/learning/course/${slug}/${id}`}
								>
									<i className="bx bx-play"></i>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="courses-content">
					<h3>
						<Link href={`/${lang}/learning/course/${slug}/${id}`}>
							{title}
						</Link>
					</h3>

					<div className="course-author d-flex align-items-center">
						<span>{`${user.name}`}</span>
					</div>

					<p>Start Course</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
