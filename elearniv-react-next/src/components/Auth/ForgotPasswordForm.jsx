"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ForgotPasswordForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isLoading, isValid },
	} = useForm({
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data) => {
		await axios
			.post("/api/register", data)
			.then((response) => {
				toast.success("Registration success! Please login.");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			});
	};
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="login-form">
								<p>Please enter Email address.</p>

								<form onSubmit={handleSubmit(onSubmit)}>
									<Input
										label="Email"
										id="email"
										type="email"
										disabled={isLoading}
										register={register}
										errors={errors}
										required
									/>

									<motion.button
										type="submit"
										whileTap={{ scale: 0.9 }}
										disabled={!isValid}
									>
										Reset
									</motion.button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgotPasswordForm;
