"use client";

import CourseVideos from "@/components/Instructor/CourseVideos";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Videos = ({ videos }) => {
	const router = useRouter();
	const handleDelete = async (videoId) => {
		try {
			const url = `/api/course/${videoId}/video`;
			const response = await axios.delete(url);
			toast.success(response.data.message);
			router.refresh();
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<div className="row gap-0 row-gap-3">
			{videos.length > 0
				? videos.map((video) => (
						<CourseVideos
							key={video.id}
							{...video}
							onDelete={() => handleDelete(video.id)}
						/>
				  ))
				: "Empty"}
		</div>
	);
};

export default Videos;
