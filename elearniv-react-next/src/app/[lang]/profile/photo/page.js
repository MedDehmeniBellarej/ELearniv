import { getCurrentUser } from "@/actions/getCurrentUser";
import Link from "next/link";
import AvatarForm from "./AvatarForm";

export const metadata = {
	title: "Profile Photo | eLearniv - React Next.js Learning Management System",
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
							<Link href={`/${lang}/profile/basic-information`}>
								Profile
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/profile/photo`}
								className="active"
							>
								Profile Picture
							</Link>
						</li>
					</ul>

					<AvatarForm currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default page;
