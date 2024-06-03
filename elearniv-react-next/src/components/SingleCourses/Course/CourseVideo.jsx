"use client";

import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

const CourseVideo = ({ currentUser, course }) => {
	const [toggler, setToggler] = useState(false);
	const [preview, setPreview] = useState("");

	const videos = course.videos;
	return (
		<>
			<div className="courses-curriculum">
				<ul>
					{videos &&
						videos.map((v) => (
							<li key={v.id}>
								<div className="d-flex justify-content-between align-items-center">
									<span className="courses-name">
										{v.title}
									</span>
									<div className="courses-meta">
										<span className="duration">
											{v.video_length}
										</span>
										{v.is_preview ? (
											<span
												className="status"
												onClick={() => {
													setPreview(v.video_url);
													setToggler(!toggler);
												}}
											>
												preview
											</span>
										) : (
											<span
												className="status locked"
												title="Premium"
											>
												<i className="flaticon-password"></i>
											</span>
										)}
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>

			{preview && <FsLightbox toggler={toggler} sources={[preview]} />}
		</>
	);
};

export default CourseVideo;
