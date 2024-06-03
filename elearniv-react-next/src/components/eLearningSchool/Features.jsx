"use client";

import React from "react";

const Features = ({ homepage: { feature } }) => {
	return (
		<>
			<div className="features-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">{feature.subTitle}</span>
						<h2>{feature.heading}</h2>
						<p>{feature.helpText}</p>
					</div>

					<div className="row justify-content-center">
						{feature.features.map((fte) => (
							<div
								className="col-lg-4 col-sm-6 col-md-6"
								key={fte.id}
							>
								<div className="single-features-box">
									<div className="icon">
										<i className={`${fte.icon}`}></i>
									</div>
									<h3>{fte.title}</h3>
									<p>{fte.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
