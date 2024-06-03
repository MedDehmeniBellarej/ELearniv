"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import Input from "../FormHelpers/Input";
import CategorySelect from "../FormHelpers/CategorySelect";
import SetPrice from "../FormHelpers/SetPrice";
import ImageUpload from "../FormHelpers/ImageUpload";
import AccessTime from "../FormHelpers/AccessTime";
import RTEControl from "@/utils/RTEControl";

const CourseUpdateForm = ({ course }) => {
	const [isLoading, setIsLoading] = useState(false);
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
			category: "",
			title: "",
			overview: "",
			regular_price: "",
			before_price: "",
			lessons: "",
			duration: "",
			image: "",
			access_time: "",
			requirements: "",
			what_you_will_learn: "",
			who_is_this_course_for: "",
		},
	});

	useEffect(() => {
		setValue("title", course.title);
		setValue("category", course.catId);
		setValue("overview", course.overview);
		setValue("regular_price", course.regular_price);
		setValue("before_price", course.before_price);
		setValue("lessons", course.lessons);
		setValue("duration", course.duration);
		setValue("image", course.image);
		setValue("access_time", course.access_time);
		setValue("requirements", course.requirements);
		setValue("what_you_will_learn", course.what_you_will_learn);
		setValue("who_is_this_course_for", course.who_is_this_course_for);
	}, [course]);

	const regular_price = watch("regular_price");
	const before_price = watch("before_price");
	const category = watch("category");
	const access_time = watch("access_time");
	const image = watch("image");

	const onUpdate = async (data) => {
		if (!data.image) {
			toast.error("Please drop image 750x500 before submitting.");
			setIsLoading(false);
			return;
		}

		axios
			.post(`/api/course/${course.id}/edit`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.push("/instructor/courses");
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onUpdate)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Course Title"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<CategorySelect
						value={category}
						onChange={(value) => setCustomValue("category", value)}
						label="Category"
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Lessons"
						id="lessons"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Duration"
						id="duration"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Regular Price"
						id="regular_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={regular_price}
						onChange={(newValue) =>
							setValue("regular_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Before Price"
						id="before_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={before_price}
						onChange={(newValue) =>
							setValue("before_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<AccessTime
						value={access_time}
						onChange={(value) =>
							setCustomValue("access_time", value)
						}
						label="Access Time"
					/>
				</div>

				<div className="col-md-6">
					<ImageUpload
						onChange={(value) => setCustomValue("image", value)}
						value={image}
					/>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Overview
						</label>
						<Controller
							name="overview"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={RTEControl}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Requirements
						</label>
						<Controller
							name="requirements"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={RTEControl}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label className="form-label fw-semibold">
							What you will learn
						</label>
						<Controller
							name="what_you_will_learn"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={RTEControl}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>

				<div className="col-md-12">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Who is this course for
						</label>
						<Controller
							name="who_is_this_course_for"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={RTEControl}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>

				<div className="col-12">
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>
						Update Course <span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseUpdateForm;
