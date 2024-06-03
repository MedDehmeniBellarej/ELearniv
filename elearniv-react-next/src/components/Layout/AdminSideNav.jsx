"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";
import StickyBox from "react-sticky-box";
import { motion } from "framer-motion";

const AdminSideNav = ({ currentUser, lang = "en" }) => {
	const isAdmin = currentUser && currentUser.role === "ADMIN";
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!isAdmin) {
			router.push("/");
		}
	}, [currentUser]);

	// Sidebar Nav
	const [isActiveSidebarNav, setActiveSidebarNav] = useState("false");
	const handleToggleSidebarNav = () => {
		setActiveSidebarNav(!isActiveSidebarNav);
	};

	return (
		<>
			{/* For mobile device */}
			<div className="text-end d-md-none">
				<div
					className="sidebar-menu-button"
					onClick={handleToggleSidebarNav}
				>
					Sidebar Menu
				</div>
			</div>

			<div
				className={`side-nav-wrapper ${
					isActiveSidebarNav ? "" : "active"
				}`}
			>
				<StickyBox
					className="sticky-box"
					offsetTop={50}
					offsetBottom={20}
				>
					{/* Close button */}
					<div
						className="close d-md-none"
						onClick={handleToggleSidebarNav}
					>
						<i className="bx bx-x"></i>
					</div>

					{/* Nav */}
					<div className="side-nav">
						<ul>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/`}
									className={
										pathname == `/${lang}/admin`
											? "active"
											: null
									}
								>
									Dashboard
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/courses/`}
									className={
										pathname == `/${lang}/admin/courses`
											? "active"
											: null
									}
								>
									Courses
								</Link>
							</motion.li>

							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/students/`}
									className={
										pathname == `/${lang}/admin/students`
											? "active"
											: null
									}
								>
									Students
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/partners/`}
									className={
										pathname == `/${lang}/admin/partners`
											? "active"
											: null
									}
								>
									Partners
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/testimonials/`}
									className={
										pathname ==
										`/${lang}/admin/testimonials`
											? "active"
											: null
									}
								>
									Testimonials
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/categories/`}
									className={
										pathname == `/${lang}/admin/categories`
											? "active"
											: null
									}
								>
									Categories
								</Link>
							</motion.li>
							<motion.li
								whileHover={{
									scale: 1.05,
								}}
								whileTap={{ scale: 0.9 }}
								transition={{
									type: "spring",
									stiffness: 400,
									damping: 10,
								}}
							>
								<Link
									href={`/${lang}/admin/coupons/`}
									className={
										pathname == `/${lang}/admin/coupons`
											? "active"
											: null
									}
								>
									Coupons
								</Link>
							</motion.li>
						</ul>
					</div>
				</StickyBox>
			</div>
		</>
	);
};

export default AdminSideNav;
