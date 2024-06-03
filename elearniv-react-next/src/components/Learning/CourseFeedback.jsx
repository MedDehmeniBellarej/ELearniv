"use client";

import React from "react";
import FeedbackForm from "./FeedbackForm";
import { generateStars, ratingLabel } from "@/utils/generateStars";

const CourseFeedback = ({ courseId, reviews }) => {
	return (
		<div className="courses-details-desc-style-two">
			<div className="row justify-content-center">
				<FeedbackForm courseId={courseId} />

				<div className="courses-review-comments mb-4">
					<h4>{reviews ? reviews.length : 0} Reviews</h4>

					{reviews &&
						reviews.map((review) => (
							<div key={review.id} className="user-review">
								<img
									src={
										review.user.image
											? review.user.image
											: "/images/user2.jpg"
									}
									alt="image"
								/>

								<div className="review-rating">
									<div className="review-stars">
										{generateStars(review.rating)}
									</div>

									<span className="d-inline-block">
										{review.user.name}
									</span>
								</div>

								<span className="d-block sub-comment">
									{ratingLabel(review.rating)}
								</span>
								<p>{review.comment}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default CourseFeedback;
