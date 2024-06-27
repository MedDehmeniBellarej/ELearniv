"use client";

import React from "react";
import DiscussionForm from "./DiscussionForm";
import { generateStars, ratingLabel } from "@/utils/generateStars";

const CourseDiscussion = ({ courseId, discussions }) => {
  return (
    <div className="courses-details-desc-style-two">
      <div className="row justify-content-center">
        <DiscussionForm courseId={courseId} />

        <div className="courses-review-comments mb-4">
          <h4>{discussions ? discussions.length : 0} discussions</h4>

          {discussions &&
            discussions.map((discussions) => (
              <div key={discussions.id} className="user-review">
                <img
                  src={
                    discussions.user.image
                      ? discussions.user.image
                      : "/images/avatar.jpg"
                  }
                  alt="image"
                />

                <div className="review-rating">
                  <span className="d-inline-block">
                    {discussions.user.name}
                  </span>
                </div>

                <span className="d-block sub-comment">
                  {ratingLabel(discussions.rating)}
                </span>
                <p>{discussions.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDiscussion;
