"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";

const ConfirmEmail = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isValid, isLoading },
	} = useForm({
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data) => {
		try {
			const url = `/api/users/send-confirmation-email`;
			const response = await axios.post(url, data);
			toast.success(response.data.message, {
				style: {
					border: "1px solid #4BB543",
					padding: "16px",
					color: "#4BB543",
				},
				iconTheme: {
					primary: "#4BB543",
					secondary: "#FFFAEE",
				},
			});
			router.push("/auth");
		} catch (err) {
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message, {
				style: {
					border: "1px solid #ff0033",
					padding: "16px",
					color: "#ff0033",
				},
				iconTheme: {
					primary: "#ff0033",
					secondary: "#FFFAEE",
				},
			});
		}
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
										disabled={isLoading}
										register={register}
										errors={errors}
										required
									/>

									<motion.button
										type="submit"
										disabled={!isValid}
										whileTap={{ scale: 0.9 }}
									>
										Send Confirmation Email
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

export default ConfirmEmail;
