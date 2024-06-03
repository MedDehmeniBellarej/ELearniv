"use client";

import CourseAssets from "@/components/Instructor/CourseAssets";
import UploadAssetForm from "@/components/Instructor/UploadAssetForm";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Asset = ({ id, assets }) => {
	const router = useRouter();
	const confirmDelete = async (assetId) => {
		try {
			const url = `/api/course/${assetId}/asset`;
			const response = await axios.delete(url);
			toast.success(response.data.message);
			router.refresh();
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
	return (
		<>
			<div className="create-course-form">
				<UploadAssetForm courseId={id} />
			</div>
			<div className="row justify-content-center  gap-0 row-gap-3">
				{assets.length > 0
					? assets.map((asset) => (
							<CourseAssets
								key={asset.id}
								{...asset}
								onDelete={() => confirmDelete(asset.id)}
							/>
					  ))
					: "Empty"}
			</div>
		</>
	);
};

export default Asset;
