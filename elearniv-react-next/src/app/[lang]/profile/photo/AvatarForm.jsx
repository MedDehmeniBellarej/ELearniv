"use client";

import ImageUpload from "@/components/FormHelpers/ImageUpload";
import Image from "next/image";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

const AvatarForm = ({ currentUser }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			image: "",
		},
	});

	useEffect(() => {
		setValue("image", currentUser.image);
	}, [currentUser]);

	const image = watch("image");
	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	const onSubmit = async (data) => {
		if (!data.image) {
			toast.error("Please drop image 200x200 before submitting.");
			setIsLoading(false);
			return;
		}
		const response = await axios.post("/api/users/photo", data);
		toast.success(response.data.message);
		router.refresh();
	};
	return (
		<>
			<div className="basic-profile-information-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label className="form-label fw-semibold">
									Profile Image
								</label>
								<ImageUpload
									onChange={(value) =>
										setCustomValue("image", value)
									}
									value={image}
									label="200x200"
								/>

								<div className="mt-3">
									<Image
										src={
											currentUser.image
												? currentUser.image
												: "/images/avatar.jpg"
										}
										width={200}
										height={200}
										alt="image"
										className="img-thumbnail mw-200px"
									/>
								</div>
							</div>
						</div>

						<div className="col-12">
							<button className="btn default-btn" type="submit">
								<i className="flaticon-right-arrow"></i>
								Update <span></span>
								<span></span>{" "}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default AvatarForm;
