"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import ImageUpload from "../FormHelpers/ImageUpload";

const UploadAssetForm = ({ courseId }) => {
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
			lecture_name: "",
			asset_zip: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		if (!data.asset_zip) {
			toast.error("Please upload zip.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/course/${courseId}/asset`, data)
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

	const asset_zip = watch("asset_zip");

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-12">
					<Input
						label="Lecture"
						id="lecture_name"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-12">
					<ImageUpload
						onChange={(value) => setCustomValue("asset_zip", value)}
						value={asset_zip}
						label="Select Asset/File"
					/>
				</div>

				<div className="col-12">
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>
						Upload Asset <span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default UploadAssetForm;
