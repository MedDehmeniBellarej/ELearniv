"use client";

import React from "react";
import { playerData } from "@/hooks/useVideoSrc";

const VideoList = ({ id, title, short_id, video_url, video_length, onSrc }) => {
	const { videoId } = playerData((state) => state);

	return (
		<li
			style={{ cursor: "pointer" }}
			onClick={() => onSrc(video_url, id)}
			className={videoId && videoId === id ? "active" : null}
		>
			{short_id}. {title}
			<span className="d-block text-muted fs-13 mt-1">
				<i className="bx bx-play-circle"></i> {video_length}
			</span>
		</li>
	);
};

export default VideoList;
