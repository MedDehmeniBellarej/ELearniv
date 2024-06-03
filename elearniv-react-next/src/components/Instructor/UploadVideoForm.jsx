"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import ImageUpload from "../FormHelpers/ImageUpload";
import VideoUpload from "../FormHelpers/VideoUpload";

const UploadVideoForm = ({ course }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			group_name: "",
			title: "",
			thumb_Image: "",
			video: "",
			is_preview: "",
			short_id: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		if (!data.video) {
			toast.error("Please upload video.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/course/${course.id}/video`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
				reset();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const video = watch("video");
	const thumb_Image = watch("thumb_Image");

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row align-items-center">
				<div className="col-md-6">
					<Input
						label="Video Group Title"
						id="group_name"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="col-md-6">
					<Input
						label="Video Title"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="col-md-6">
					<ImageUpload
						onChange={(value) =>
							setCustomValue("thumb_Image", value)
						}
						value={thumb_Image}
						label="Video thumbnail"
					/>
				</div>
				<div className="col-md-6">
					<VideoUpload
						onChange={(value) => setCustomValue("video", value)}
						value={video}
						label="Video "
					/>
				</div>

				<div className="col-md-6">
					<Input
						type="number"
						label="Video Serial Number"
						id="short_id"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<Controller
							name="is_preview"
							control={control}
							defaultValue={false} // Set the default value of your checkbox
							render={({ field }) => (
								<input
									className="form-check-input"
									id="flexCheck"
									type="checkbox"
									{...field}
								/>
							)}
						/>{" "}
						<label className="form-check-label" for="flexCheck">
							Is Preview?
						</label>
					</div>
				</div>

				<div className="col-12">
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>
						Upload Video <span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default UploadVideoForm;
