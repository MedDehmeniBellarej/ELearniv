"use client";

import Image from "next/image";
import React from "react";

const CourseVideos = ({
	id: videoId,
	title,
	thumb_Image,
	short_id,
	onDelete,
}) => {
	return (
		<div className="col-lg-3 col-md-6">
			<div className="card">
				<span className="badge text-bg-primary">
					Number (Ascending): {short_id}
				</span>
				<Image
					src={thumb_Image ? thumb_Image : ""}
					className="card-img-top"
					width={750}
					height={500}
					alt="thumb"
				/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>

					<button
						onClick={() => onDelete(videoId)}
						className="btn btn-danger btn-sm"
					>
						Delete{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseVideos;
