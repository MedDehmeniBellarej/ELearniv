import PageBanner from "@/components/Shared/PageBanner";
import PolicyContent from "./PolicyContent";

export const metadata = {
	title: "Privacy Policy | StudyGrove - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Privacy Policy"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Privacy Policy"
				lang={lang}
			/>

			<PolicyContent />
		</>
	);
};

export default page;
