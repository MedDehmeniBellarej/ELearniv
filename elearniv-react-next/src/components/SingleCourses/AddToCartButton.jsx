"use client";

import React from "react";
import { useCartStore } from "@/store/cart";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";

const AddToCartButton = ({
	id,
	title,
	slug,
	regular_price,
	before_price,
	duration,
	lessons,
	access_time,
	image,
	user,
}) => {
	const { add: handleAddToCart, cart } = useCartStore();
	const { discount } = couponCode((state) => state);

	const item = {
		id,
		title,
		slug,
		regular_price: discount
			? calculateDiscount(discount, regular_price)
			: regular_price,
		before_price,
		duration,
		lessons,
		access_time,
		image,
		user,
	};
	return (
		<div className="btn-box">
			{cart.map((item) => item.id).includes(id) ? (
				<button className="default-btn w-100" disabled={true}>
					<i className="flaticon-shopping-cart"></i> Add to Cart{" "}
					<span></span>
				</button>
			) : (
				<button
					className="default-btn w-100"
					onClick={() => handleAddToCart(item)}
				>
					<i className="flaticon-shopping-cart"></i> Add to Cart{" "}
					<span></span>
				</button>
			)}
		</div>
	);
};

export default AddToCartButton;
