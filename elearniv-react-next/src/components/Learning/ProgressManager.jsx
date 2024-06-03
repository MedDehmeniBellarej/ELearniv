"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { progressFloat } from "@/utils/progressFloat";
import { playerData } from "@/hooks/useVideoSrc";

const ProgressManager = ({ courseId, videos_count, slug }) => {
	const videoSRC = playerData((state) => state.videoSRC);
	const [pro, setPro] = useState(0);
	const router = useRouter();

	useEffect(() => {
		const fetchProgrss = async () => {
			const url = `/api/progress/${courseId}`;
			const response = await axios.get(url);
			setPro(response.data.length);
		};

		fetchProgrss();
	}, [courseId, videoSRC]);

	return (
		<div className="mb-3">
			<p className="mb-2">
				Your progress{" "}
				<strong>
					{pro} of {videos_count} complete
				</strong>
				.{" "}
				{progressFloat(pro, videos_count) == 100 ? (
					<span
						onClick={() =>
							router.push(
								`/learning/certificate/${slug}/${courseId}`
							)
						}
						style={{
							textDecoration: "underline",
							color: "blue",
							fontWeight: "800",
							cursor: "pointer",
						}}
					>
						Get certificate
					</span>
				) : (
					<span
						style={{
							textDecoration: "underline",
							color: "blue",
							fontWeight: "800",
							cursor: "pointer",
						}}
					>
						Get certificate after complete
					</span>
				)}
			</p>

			<div className="progress">
				<div
					className="progress-bar bg-1cab94"
					role="progressbar"
					aria-label="Example with label"
					style={{
						width: `${progressFloat(pro, videos_count)}%`,
					}}
					aria-valuenow={`${progressFloat(pro, videos_count)}`}
					aria-valuemin="0"
					aria-valuemax="100"
				>
					{progressFloat(pro, videos_count)}%
				</div>
			</div>
		</div>
	);
};

export default ProgressManager;
