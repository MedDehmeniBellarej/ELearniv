"use client";

import React from "react";
import Link from "next/link";

const InstructorHeader = ({ lang }) => {
	return (
		<div className="instructor-header ptb-100">
			<div className="container">
				<div className="instructor-header-content box-shadow border rounded-3">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="">
								<h4>Jump Into Course Creation</h4>
							</div>
						</div>
						<div className="col-md-6">
							<div className="text-end">
								<Link
									href={`/${lang}/instructor/course/create`}
									className="default-btn"
								>
									<i className="flaticon-user"></i> Create
									Your Course <span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InstructorHeader;
