"use client";

import CourseAsset from "@/components/Learning/CourseAsset";
import CourseFeedback from "@/components/Learning/CourseFeedback";
import CourseOverview from "@/components/Learning/CourseOverview";
import React, { useState } from "react";

const Content = ({ id, overview, reviews }) => {
	const [tab, setTab] = useState("overview");

	return (
		<>
			<ul className="nav-style1">
				<li>
					<div
						className={tab == "overview" ? "active" : ""}
						onClick={(e) => {
							e.preventDefault();
							setTab("overview");
						}}
					>
						Overview
					</div>
				</li>
				<li>
					<div
						onClick={(e) => {
							e.preventDefault();
							setTab("asset");
						}}
						className={tab == "asset" ? "active" : ""}
					>
						Assets
					</div>
				</li>
				<li>
					<div
						onClick={(e) => {
							e.preventDefault();
							setTab("feedback");
						}}
						className={tab == "feedback" ? "active" : ""}
					>
						Leave a feedback
					</div>
				</li>
			</ul>

			{tab == "asset" ? (
				<CourseAsset courseId={id} />
			) : tab == "feedback" ? (
				<CourseFeedback courseId={id} reviews={reviews} />
			) : (
				<CourseOverview overview={overview} />
			)}
		</>
	);
};

export default Content;
