"use client";

import Image from "next/image";
import React from "react";
import userImg from "../../../../public/images/avatar.jpg";

const InstructorProfile = ({ instructor }) => {
	const { name, image, profile } = instructor;
	// console.log(instructor);
	return (
		<>
			<h3>Meet Your Instructors</h3>
			<div className="courses-author">
				<div className="author-profile-header"></div>
				<div className="author-profile">
					<div className="author-profile-title">
						<Image
							src={image ? image : userImg}
							width={200}
							height={200}
							className="shadow-sm rounded-circle"
							alt={name}
						/>
						<div className="author-profile-title-details">
							<div className="author-profile-details">
								<h4>{name}</h4>
								<span className="d-block">Teacher</span>
							</div>
						</div>
					</div>
					{profile && profile.bio}
				</div>
			</div>
		</>
	);
};

export default InstructorProfile;
