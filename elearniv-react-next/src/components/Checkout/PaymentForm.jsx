"use client";

import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";

const PaymentForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { cart, removeAll } = useCartStore();
	const stripe = useStripe();
	const elements = useElements();
	const router = useRouter();

	const onSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();
		const cardElement = elements?.getElement("card");

		try {
			if (!stripe || !cardElement) return null;
			await stripe.createToken(cardElement, {
				card: {
					address_zip: "", // Set address_zip to null to exclude the postal code
				},
			});

			const { data } = await axios.post(
				"/api/checkout/create-payment-intent",
				{
					data: { cart },
				}
			);
			const clientSecret = data.client_secret;
			const { error, paymentIntent } = await stripe?.confirmCardPayment(
				clientSecret,
				{
					payment_method: { card: cardElement },
				}
			);

			if (error) {
				await axios.delete("/api/checkout/finished-payment", {
					data: { payment_id: data.id },
				});
				toast.error(error.message);
				return;
			} else if (paymentIntent.status === "succeeded") {
				const response = await axios.post(
					"/api/checkout/finished-payment",
					{
						data: {
							paymentIntent,
						},
					}
				);

				// console.log(response);

				toast.success(response.data.message);
				removeAll();
				router.push("/learning/my-courses");
				setIsLoading(false);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const cardElementOptions = {
		classess: "",
		hidePostalCode: true,
	};

	return (
		<div className="order-details">
			<div className="payment-box">
				<form onSubmit={onSubmit} className="">
					<CardElement options={cardElementOptions} />
					<br />
					<button
						className={`default-btn ${
							cart.length === 0 && "cursor-not-allowed"
						}
                            ${isLoading && "cursor-not-allowed"}`}
						disabled={cart.length === 0}
					>
						<i className="flaticon-shopping-cart"></i>{" "}
						{isLoading ? "Please wait..." : "Pay Now"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default PaymentForm;
