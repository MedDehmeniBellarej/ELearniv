"use client";

import VideoList from "@/components/Learning/VideoList";
import React, { useState, useEffect } from "react";
import StickyBox from "react-sticky-box";
import { playerData } from "@/hooks/useVideoSrc";
import ProgressManager from "@/components/Learning/ProgressManager";

const Sidebar = ({ id: courseId, title, slug, videos }) => {
	const setVideoSRC = playerData((state) => state.setVideoSRC);
	useEffect(() => {
		setVideoSRC(videos[0].video_url, videos[0].id);
	}, [videos]);
	const handleSrcChange = (src, videoId) => {
		setVideoSRC(src, videoId);
	};
	return (
		<div className="col-lg-3 col-md-4">
			<StickyBox offsetTop={20} offsetBottom={20}>
				<div className="video-sidebar">
					<ProgressManager
						videos_count={videos.length}
						courseId={courseId}
						slug={slug}
					/>

					<div className="course-video-list">
						<h4 className="title mb-3">{title}</h4>
						<ul>
							{videos.length > 0 &&
								videos.map((video) => (
									<VideoList
										key={video.id}
										{...video}
										onSrc={() =>
											handleSrcChange(
												video.video_url,
												video.id
											)
										}
									/>
								))}
						</ul>
					</div>
				</div>
			</StickyBox>
		</div>
	);
};

export default Sidebar;
