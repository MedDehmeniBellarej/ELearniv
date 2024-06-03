import PageBanner from "@/components/Shared/PageBanner";
import TermsContent from "./TermsContent";

export const metadata = {
	title: "Terms & Condition | eLearniv - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Terms & Conditions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Terms & Conditions"
				lang={lang}
			/>

			<TermsContent />
		</>
	);
};

export default page;
