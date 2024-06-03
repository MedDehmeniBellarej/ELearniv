import ContactForm from "@/components/ContactUs/ContactForm";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import GoogleMap from "@/components/ContactUs/GoogleMap";
import PageBanner from "@/components/Shared/PageBanner";

export const metadata = {
	title: "Contact | eLearniv - React Next.js Learning Management System",
};

const page = ({ params: { lang } }) => {
	return (
		<>
			<PageBanner
				pageTitle="Contact Us"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Contact Us"
				lang={lang}
			/>

			<div className="contact-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<ContactInfo />
						</div>

						<div className="col-lg-6 col-md-12">
							<ContactForm />
						</div>
					</div>
				</div>
			</div>

			<GoogleMap />
		</>
	);
};

export default page;
