"use client";

import React, { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import StickyBox from "react-sticky-box";
import SocialShareBtns from "./SocialShareBtns";
import axios from "axios";
import toast from "react-hot-toast";
import { couponCode } from "@/store/coupon";
import { calculateDiscount } from "@/utils/calculateDiscount";

const CoursesDetailsSidebar = ({
	id,
	title,
	slug,
	image,
	before_price,
	regular_price,
	duration,
	lessons,
	access_time,
	user,
}) => {
	const { setCouponCode, discount } = couponCode((state) => state);

	const [apply, setApplyCoupon] = useState(false);
	const [coupon, setCoupon] = useState({ coupon: "" });

	const handleCoupon = async (e) => {
		e.preventDefault();
		try {
			const data = { coupon };

			const response = await axios.post(`/api/coupons`, data);
			if (response.data.discount)
				setCouponCode(response.data.discount.discount);

			toast.success(response.data.message);
		} catch (err) {
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message);
		}
	};

	return (
		<>
			<StickyBox className="sticky-box" offsetTop={100} offsetBottom={20}>
				<div className="courses-sidebar-sticky">
					<div className="courses-sidebar-information">
						<ul className="info">
							<li className="price">
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-tag"></i> Price
									</span>
									$
									{discount
										? calculateDiscount(
												discount,
												regular_price
										  )
										: regular_price}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-teacher"></i>{" "}
										Instructor
									</span>
									{user.name}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-time"></i>{" "}
										Duration
									</span>
									{duration}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-distance-learning"></i>{" "}
										Lessons
									</span>
									{lessons}
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-web"></i>{" "}
										Enrolled
									</span>
									255 students
								</div>
							</li>
							<li>
								<div className="d-flex justify-content-between align-items-center">
									<span>
										<i className="flaticon-lock"></i> Access
									</span>
									{access_time}
								</div>
							</li>
						</ul>

						<div className="coupon">
							<h4 onClick={() => setApplyCoupon(!apply)}>
								Apply Coupon
							</h4>
							{apply && (
								<form onSubmit={handleCoupon}>
									<input
										type="text"
										className="input-search"
										placeholder="Enter Coupon"
										name="search"
										value={coupon.coupon}
										onChange={(e) =>
											setCoupon(e.target.value)
										}
									/>
									<button type="submit">
										<b>Apply</b>
									</button>
								</form>
							)}
						</div>

						<AddToCartButton
							id={id}
							title={title}
							slug={slug}
							before_price={before_price}
							regular_price={regular_price}
							duration={duration}
							lessons={lessons}
							access_time={access_time}
							image={image}
							user={user.name}
						/>

						<SocialShareBtns />
					</div>
				</div>
			</StickyBox>
		</>
	);
};

export default CoursesDetailsSidebar;
