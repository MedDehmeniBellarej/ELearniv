"use client";

import CourseAsset from "@/components/Learning/CourseAsset";
import CourseFeedback from "@/components/Learning/CourseFeedback";
import CourseOverview from "@/components/Learning/CourseOverview";
import CourseDiscussion from "@/components/Learning/CourseDiscussion";
import CourseChatChannelComponent from "@/components/Learning/CourseChatChannel"
import React, { useState } from "react";

const Content = ({ id, overview, reviews , discussions}) => {
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
				<li>
					<div
						onClick={(e) => {
							e.preventDefault();
							setTab("discussion");
						}}
						className={tab == "discussion" ? "active" : ""}
					>
						discussion
					</div>
				</li>
				<li>
                    <div
                        onClick={(e) => {
                         e.preventDefault();
                          setTab("chat");
                        }}
                       className={tab == "chat" ? "active" : ""}
                    >
                       Chat
                    </div>
                </li>
				
			</ul>

			{tab == "asset" ? (
				<CourseAsset courseId={id} />
			) : tab == "feedback" ? (
				<CourseFeedback courseId={id} reviews={reviews} />
			) : tab === "discussion" ? (
				<CourseDiscussion courseId={id} discussions={discussions} />
			) : tab === "chat" ? (
				<CourseChatChannelComponent channelId={`course-${id}`} /> // Pass the course ID as the channel ID
			) : (
				<CourseOverview overview={overview} />
			)}
		</>
	);
};

export default Content;
