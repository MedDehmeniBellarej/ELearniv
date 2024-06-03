"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ViewAllCourses = ({
	lang,
	homepage: {
		distanceLearning: { subTitle, heading, helpText },
		reviewMyWishlist,
	},
}) => {
	return (
		<>
			<div className="view-all-courses-area ptb-100 bg-F6F1ED">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-content">
								<span className="sub-title">{subTitle}</span>
								<h2>{heading}</h2>
								<p>{helpText}</p>

								<Link
									href={`/${lang}/learning/wishlist/`}
									className="default-btn"
								>
									<i className="flaticon-agenda"></i>{" "}
									{reviewMyWishlist} <span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-image">
								<Image
									src="/images/man-with-laptop.png"
									width={770}
									height={582}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="shape1">
					<Image
						src="/images/shape1.png"
						width={118}
						height={59}
						alt="image"
					/>
				</div>
				<div className="shape9">
					<Image
						src="/images/shape8.svg"
						width={22}
						height={22}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default ViewAllCourses;
