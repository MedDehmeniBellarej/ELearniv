import { myLearning } from "@/actions/myLearning";
import PageBanner from "@/components/Shared/PageBanner";
import Content from "./Content";

const page = async ({ params: { lang } }) => {
	const { enrolments } = await myLearning();
	return (
		<>
			<PageBanner
				pageTitle="My Purchases"
				homePageUrl="/"
				homePageText="Home"
				activePageText="My Purchases"
				lang={lang}
			/>

			<Content enrolments={enrolments} lang={lang} />
		</>
	);
};

export default page;
