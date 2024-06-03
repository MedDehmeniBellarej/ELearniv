"use client";

import React from "react";

const CourseAssets = ({ id: assetId, lecture_name, asset_zip, onDelete }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="card">
				<i
					className="bx bx-file"
					style={{ textAlign: "center", fontSize: "100px" }}
				></i>
				{/* {lecture_file} */}
				<div className="card-body">
					<h5 className="card-title">{lecture_name}</h5>

					<button
						className="btn btn-success me-3"
						onClick={() => window.open(asset_zip)}
					>
						Download <i className="bx bx-down-arrow-circle"></i>
					</button>

					<button
						onClick={() => onDelete(assetId)}
						className="btn btn-danger"
					>
						Delete <i className="bx bx-trash"></i>{" "}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CourseAssets;
