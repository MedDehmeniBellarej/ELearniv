import PageBanner from "@/components/Shared/PageBanner";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Authentication | eLearniv - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}/`);
	}
	return (
		<>
			<PageBanner
				pageTitle="Authentication"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Authentication"
				lang={lang}
			/>

			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<LoginForm lang={lang} />
						</div>

						<div className="col-lg-6 col-md-12">
							<RegisterForm lang={lang} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
