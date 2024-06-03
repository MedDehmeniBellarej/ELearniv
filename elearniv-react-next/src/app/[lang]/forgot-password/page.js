import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "Forgot Password | eLearniv - React Next.js Learning Management System",
};

const page = ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Forgot Password"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Forgot Password"
				lang={lang}
			/>

			<ForgotPasswordForm />
		</>
	);
};

export default page;
