"use client";
import React from "react";
import { useCartStore } from "@/store/cart";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { useRouter } from "next/navigation";

const BuyCourseBtn = ({
	currentUser,
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
	lang,
}) => {
	const { add: handleAddToCart, cart } = useCartStore();
	const { discount } = couponCode((state) => state);
	const router = useRouter();

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
		user: user.name,
	};

	return (
		<>
			{cart.map((item) => item.id).includes(id) ? (
				<button className="default-btn" disabled={true}>
					<i className="flaticon-shopping-cart"></i> Buy Now
					<span></span>
				</button>
			) : (
				<button
					className="default-btn"
					onClick={() => {
						handleAddToCart(item);
						router.push(`/${lang}/checkout`);
					}}
				>
					<i className="flaticon-shopping-cart"></i> Buy Now
					<span></span>
				</button>
			)}
		</>
	);
};

export default BuyCourseBtn;
