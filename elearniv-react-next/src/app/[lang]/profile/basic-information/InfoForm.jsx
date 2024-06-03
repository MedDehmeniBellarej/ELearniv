"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "@/components/FormHelpers/Input";

const InfoForm = ({ currentUser }) => {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isLoading, isValid },
	} = useForm({
		defaultValues: {
			name: "",
			gender: "",
			designation: "",
			bio: "",
			location: "",
			phone: "",
			website: "",
			twitter: "",
			facebook: "",
			linkedin: "",
			youtube: "",
		},
	});

	useEffect(() => {
		setValue("name", currentUser.name);
		setValue("gender", currentUser.gender);
		setValue("designation", currentUser.profile?.designation || "");
		setValue("bio", currentUser.profile?.bio || "");
		setValue("location", currentUser.profile?.location || "");
		setValue("phone", currentUser.profile?.phone || "");
		setValue("website", currentUser.profile?.website || "");
		setValue("twitter", currentUser.profile?.twitter || "");
		setValue("facebook", currentUser.profile?.facebook || "");
		setValue("linkedin", currentUser.profile?.linkedin || "");
		setValue("youtube", currentUser.profile?.youtube || "");
	}, [currentUser]);

	const onSubmit = async (data) => {
		const response = await axios.post("/api/users/update", data);
		console.log(response.data);
		toast.success(response.data.message);
	};
	return (
		<div className="basic-profile-information-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-md-6">
						<Input
							label="Name"
							id="name"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>

						<Input
							label="Biography"
							id="bio"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Gender"
							id="gender"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
					</div>

					<div className="col-md-6">
						<Input
							label="Phone"
							id="phone"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Website URL"
							id="website"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Twitter"
							id="twitter"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Facebook"
							id="facebook"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Linkedin"
							id="linkedin"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
						<Input
							label="Youtube"
							id="youtube"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
					</div>

					<div className="col-12">
						<button
							type="submit"
							className="btn default-btn"
							disabled={!isValid}
						>
							<i className="flaticon-right-arrow"></i>
							Update <span></span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default InfoForm;
