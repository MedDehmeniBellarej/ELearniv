"use client";

import dateFormat from "@/utils/dateFormat";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Content = ({ enrolments, lang }) => {
	return (
		<>
			<div className="checkout-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						{enrolments.length > 0
							? enrolments.map((enrol) => (
									<div
										className="col-lg-9 col-md-12"
										key={enrol.id}
									>
										<div className="shopping-cart">
											<div className="shopping-cart-list">
												<div className="row align-items-center">
													<div className="col-lg-3">
														<Link
															href={`/${lang}/learning/course/${enrol.course.slug}`}
															className="d-block image"
														>
															<Image
																src={
																	enrol.course
																		.image
																}
																width={599}
																height={700}
																alt="image"
															/>
														</Link>
													</div>

													<div className="col-lg-5">
														<div className="content">
															<h3>
																<Link
																	href={`/${lang}/learning/course/${enrol.course.slug}`}
																>
																	{
																		enrol
																			.course
																			.title
																	}
																</Link>
															</h3>

															<p className="fs-14 mb-2">
																By{" "}
																{
																	enrol.course
																		.user
																		.name
																}
															</p>

															<ul className="list">
																<li>
																	{
																		enrol
																			.course
																			.duration
																	}
																</li>
																<li>
																	{
																		enrol
																			.course
																			.lessons
																	}
																</li>
																<li>
																	{
																		enrol
																			.course
																			.access_time
																	}
																</li>
															</ul>
														</div>
													</div>

													<div className="col-lg-4 col-6">
														<div className="price text-end">
															<span className="fw-bolder fs-16">
																${enrol.price}
															</span>{" "}
															<span className="fw-bolder fs-16 d-inline-block ms-4">
																{dateFormat(
																	enrol.created_at
																)}
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  ))
							: "Empty"}
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
