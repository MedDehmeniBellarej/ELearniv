"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
// import Cart from "./Cart";
import SearchForm from "./SearchForm";
import Image from "next/image";
import Cart from "./Cart";

const Navbar = ({
	currentUser,
	lang,
	homepage: {
		home,
		courses,
		about,
		contact,
		searchCourses,
		empty,
		total,
		gotocheckout,
		loginRegister,
	},
}) => {
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link className="navbar-brand" href={`/${lang}`}>
								<Image
									src="/images/logo.png"
									width={120}
									height={40}
									alt="logo"
								/>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm
									searchCourses={searchCourses}
									lang={lang}
								/>

								<ul className="navbar-nav">
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href={`/${lang}`}
											className="nav-link"
										>
											{home}
										</Link>
									</motion.li>

									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href={`/${lang}/courses`}
											className="nav-link"
										>
											{courses}
										</Link>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href={`/${lang}/about`}
											className="nav-link"
										>
											{about}
										</Link>
									</motion.li>
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href={`/${lang}/contact`}
											className="nav-link"
										>
											{contact}
										</Link>
									</motion.li>
								</ul>
							</div>

							<div className="others-option d-flex align-items-center">
								<Cart
									lang={lang}
									empty={empty}
									total={total}
									gotocheckout={gotocheckout}
								/>

								<div className="option-item">
									{currentUser ? (
										<ProfileDropdown
											currentUser={currentUser}
											lang={lang}
										/>
									) : (
										<Link
											href={`/${lang}/auth`}
											className="default-btn"
										>
											<i className="flaticon-user"></i>{" "}
											{loginRegister} <span></span>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
