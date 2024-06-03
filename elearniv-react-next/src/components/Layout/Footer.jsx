"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = ({
	lang,
	homepage: {
		home,
		about,
		contact,
		courses,
		faq,
		terms,
		privacy,
		explore,
		address,
	},
}) => {
	const currentYear = new Date().getFullYear();
	return (
		<>
			<footer className="footer-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<Link href={`/${lang}/`} className="logo">
									<Image
										src="/images/logo2.png"
										width={120}
										height={40}
										alt="logo"
									/>
								</Link>

								<p>
									Working to bring significant changes in
									online-based learning by doing extensive
									research for course curriculum preparation,
									student engagements, and looking forward to
									the flexible education!
								</p>

								<ul className="social-link">
									<li>
										<a
											href="https://www.facebook.com/"
											className="d-block"
											target="_blank"
											rel="noreferrer"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.twitter.com/"
											className="d-block"
											target="_blank"
											rel="noreferrer"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/"
											className="d-block"
											target="_blank"
											rel="noreferrer"
										>
											<i className="bx bxl-instagram"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.linkedin.com/"
											className="d-block"
											target="_blank"
											rel="noreferrer"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-2 col-md-6 col-sm-6 offset-lg-1">
							<div className="single-footer-widget">
								<h3>{explore}</h3>
								<ul className="footer-links-list">
									<li>
										<Link href={`/${lang}/`}>{home}</Link>
									</li>
									<li>
										<Link href={`/${lang}/about-us`}>
											{about}
										</Link>
									</li>
									<li>
										<Link href={`/${lang}/courses`}>
											{courses}
										</Link>
									</li>
									<li>
										<Link href={`/${lang}/contact`}>
											{contact}
										</Link>
									</li>
									<li>
										<Link href={`/${lang}/faq`}>{faq}</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="single-footer-widget">
								<h3>{address}</h3>
								<ul className="footer-contact-info">
									<li>
										<i className="bx bx-map"></i>
										2750 Quadra Street Golden Victoria Road,
										New York, USA
									</li>
									<li>
										<i className="bx bx-phone-call"></i>
										<a href="tel:+44587154756">
											+1 (123) 456 7890
										</a>
									</li>
									<li>
										<i className="bx bx-envelope"></i>
										<a href="mailto:hello@elearniv.com">
											hello@eLearniv.com
										</a>
									</li>
									<li>
										<i className="bx bxs-inbox"></i>
										<a href="tel:+557854578964">
											+55 785 4578964
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="footer-bottom-area">
						<div className="row align-items-center">
							<div className="col-lg-6 col-md-6">
								<p>
									<i className="bx bx-copyright"></i>
									{currentYear} eLearniv is Proudly Powered by{" "}
									<a
										target="_blank"
										href="https://envytheme.com/"
										rel="noreferrer"
									>
										EnvyTheme
									</a>
								</p>
							</div>

							<div className="col-lg-6 col-md-6">
								<ul>
									<li>
										<Link href={`/${lang}/privacy-policy`}>
											{privacy}
										</Link>
									</li>
									<li>
										<Link
											href={`/${lang}/terms-conditions`}
										>
											{terms}
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="lines">
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
