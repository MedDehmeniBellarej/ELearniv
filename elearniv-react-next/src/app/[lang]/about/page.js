import AboutUs from "@/components/AboutUs/AboutUs";
import CourseAdvisor from "@/components/Shared/CourseAdvisor";
import PageBanner from "@/components/Shared/PageBanner";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";
import Partner from "@/components/eLearningSchool/Partner";
import { getPartners } from "@/actions/admin/getPartners";
import { getDictionary } from "../dictionaries";

export const metadata = {
	title: "About | eLearniv - React Next.js Learning Management System",
};

const page = async ({ params: { lang } }) => {
	const dict = await getDictionary(lang);
	const { partners } = await getPartners();

	return (
		<>
			<PageBanner
				pageTitle="About Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="About Us"
				lang={lang}
			/>

			<AboutUs />

			<FeedbackSliderWithFunFacts {...dict} />

			<Features {...dict} />

			<CourseAdvisor />

			<Partner partners={partners} />

			<SubscribeForm {...dict} />
		</>
	);
};

export default page;
