import PageBanner from "@/components/Shared/PageBanner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import FaqContent from "./FaqContent";
import { getDictionary } from "../dictionaries";

export const metadata = {
	title: "FAQ's | eLearniv - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	const dict = await getDictionary(lang);

	return (
		<>
			<PageBanner
				pageTitle="Frequently Asked Questions"
				homePageUrl="/"
				homePageText="Home"
				activePageText="FAQ's"
				lang={lang}
			/>
			<FaqContent />
			<SubscribeForm {...dict} />
		</>
	);
};

export default page;
