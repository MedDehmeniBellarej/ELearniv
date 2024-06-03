"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CheckoutList = ({
	id,
	image,
	title,
	user,
	slug,
	before_price,
	regular_price,
	lessons,
	duration,
	access_time,
	onRemove,
	lang,
}) => {
	return (
		<>
			<div className="col-lg-3">
				<Link
					href={`/${lang}/course/${slug}`}
					className="d-block image"
				>
					<Image width={599} height={750} src={image} alt={title} />
				</Link>
			</div>
			<div className="col-lg-5">
				<div className="content">
					<h3>
						<Link href={`/${lang}/course/${slug}`}>{title}</Link>
					</h3>

					<p className="fs-14 mb-2">{user}</p>

					<ul className="list">
						<li>{duration}</li>
						<li>{lessons} lectures</li>
						<li>{access_time}</li>
					</ul>
				</div>
			</div>
			<div className="col-lg-2 col-6">
				<div className="action-button">
					<button
						onClick={() => onRemove(id)}
						className="btn btn-danger remove"
					>
						<i className="bx bx-trash"></i>
					</button>
				</div>
			</div>
			<div className="col-lg-2 col-6">
				<div className="price text-end">
					<span className="fw-bolder fs-16 me-2 d-inline-block">
						${regular_price}
					</span>
					{before_price > 0 && (
						<span>
							<del className="fs-14 text-muted">
								${before_price}
							</del>
						</span>
					)}
				</div>
			</div>
			<div className="col-lg-12">
				<hr />
			</div>
		</>
	);
};

export default CheckoutList;
