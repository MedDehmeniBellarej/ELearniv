import { getCurrentUser } from "@/actions/getCurrentUser";
import Link from "next/link";
import InfoForm from "./InfoForm";

export const metadata = {
	title: "Basic Profile Info | eLearniv - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Profile & Settings</h2>

					<ul className="nav-style1">
						<li>
							<Link
								href={`/${lang}/profile/basic-information`}
								className="active"
							>
								Profile
							</Link>
						</li>
						<li>
							<Link href={`/${lang}/profile/photo`}>
								Profile Picture
							</Link>
						</li>
					</ul>

					<InfoForm currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default page;
