import { getPartners } from "@/actions/admin/getPartners";
import { getTestimonials } from "@/actions/admin/getTestimonials";
import { getBannerCourses, getHomepageCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";
import SubscribeForm from "@/components/Shared/SubscribeForm";
import AboutUs from "@/components/eLearningSchool/AboutUs";
import AffordableCertification from "@/components/eLearningSchool/AffordableCertification";
import Banner from "@/components/eLearningSchool/Banner";
import Features from "@/components/eLearningSchool/Features";
import FeedbackSliderWithFunFacts from "@/components/eLearningSchool/FeedbackSliderWithFunFacts";
import GetInstantCourses from "@/components/eLearningSchool/GetInstantCourses";
import Partner from "@/components/eLearningSchool/Partner";
import PopularCourses from "@/components/eLearningSchool/PopularCourses";
import ViewAllCourses from "@/components/eLearningSchool/ViewAllCourses";
import { getDictionary } from "./dictionaries";

export const metadata = {
	title: "Home | eLearniv - React Next.js Learning Management System",
};

export default async function Page({ params: { lang } }) {
	const dict = await getDictionary(lang);
	const { courses } = await getBannerCourses();
	const { home_courses } = await getHomepageCourses();
	const currentUser = await getCurrentUser();
	const { partners } = await getPartners();
	const { testimonials } = await getTestimonials();
	// console.log(courses);
	return (
		<>
			<Banner
				currentUser={currentUser}
				courses={courses}
				{...dict}
				lang={lang}
			/>
			<Features {...dict} />
			<AboutUs lang={lang} {...dict} />
			<PopularCourses
				currentUser={currentUser}
				courses={home_courses}
				lang={lang}
				{...dict}
			/>
			<FeedbackSliderWithFunFacts testimonials={testimonials} {...dict} />
			<GetInstantCourses
				currentUser={currentUser}
				lang={lang}
				{...dict}
			/>
			<ViewAllCourses lang={lang} {...dict} />
			<Partner partners={partners} />
			<AffordableCertification {...dict} />
			<SubscribeForm {...dict} />
		</>
	);
}
