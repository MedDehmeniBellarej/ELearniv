import React from "react";
import Link from "next/link";
import Table from "./Table";
import AdminSideNav from "@/components/Layout/AdminSideNav";
import { getCurrentUser ,  } from "@/actions/getCurrentUser";
import { getCoursesAdmin } from "@/actions/admin/getCoursesAdmin";
import { getStudents } from "@/actions/admin/getStudents";
import { getAssigne } from "@/actions/admin/getAssigne";

const Page = async ({ params: { lang } }) => {
	const currentUser = await getCurrentUser();
	const { courses } = await getCoursesAdmin();
	const { students } = await getStudents();
	const {assigne} = await getAssigne();
	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<AdminSideNav
								currentUser={currentUser}
								lang={lang}
							/>
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
								<ul className="nav-style1">
									<li>
										<Link href={`/${lang}/admin/courses/`}>
											Courses
										</Link>
									</li>
									<li>
										<Link
											href={`/${lang}/admin/courses/new-arrival/`}
											
										>
											New Arrival
										</Link>
									</li>
									<li>
										<Link
											href={`/${lang}/admin/courses/assigned-courses/`}
                                            className="active"
										>
											Assigned Courses
										</Link>
									</li>
								</ul>

								<Table students={students} courses={courses} lang={lang} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
