import { Nunito_Sans } from "next/font/google";
import "../../app/styles/bootstrap.min.css";
import "../../app/styles/animate.min.css";
import "../../app/styles/boxicons.min.css";
import "../../app/styles/flaticon.css";
import "next-cloudinary/dist/cld-video-player.css";
import "../../app/styles/dashboard.css";
import "../../app/styles/nprogress.css";
import "swiper/css";
import "swiper/css/bundle";
import "../../app/styles/see-demo-account.css";
import "../../app/styles/style.css";
import "../../app/styles/responsive.css";
import "../../app/styles/rtl.css";
import TosterProvider from "@/providers/TosterProvider";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import LanguageSwitcher from "@/components/Layout/LanguageSwitcher";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getDictionary } from "./dictionaries";

const nunito = Nunito_Sans({
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
});

export const metadata = {
	metadataBase: new URL("https://elearniv-app-routing.envytheme.com"),
	alternates: {
		canonical: "/",
	},
	title: {
		template: "%s | eLearniv - React Next.js Learning Management System",
		default: "eLearniv",
	},
	keywords: [
		"Online coding courses",
		"Programming tutorials",
		"Learn Python online",
		"Digital marketing classes",
		"Web development training",
		"SEO best practices",
		"Graphic design workshops",
		"Data science online courses",
		"Online learning platform",
		"Expert-led instruction",
	],
	description:
		"Explore a world of knowledge with our online tutorial platform. Master coding languages, delve into effective marketing strategies, and elevate your skills in diverse courses. Join expert-led sessions for practical learning. Enroll now for a brighter future!",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	openGraph: {
		title: "eLearniv | Unlock Your Potential with Expert-Led Online Courses | Learn Coding, Marketing, and More!",
		url: "https://elearniv-app-routing.envytheme.com",
		images: [
			"https://res.cloudinary.com/dev-empty/image/upload/v1707717581/znronmo1rj2gexfrmnmy.jpg",
		],
		locale: "en_US",
		type: "website",
	},
};

export default async function RootLayout({ children, params: { lang } }) {
	const dict = await getDictionary(lang);
	const currentUser = await getCurrentUser();
	return (
		<html lang={lang}>
			<body className={nunito.className} suppressHydrationWarning={true}>
				<TosterProvider />
				<Navbar currentUser={currentUser} lang={lang} {...dict} />
				<LanguageSwitcher lang={lang} />
				{children}
				<Footer lang={lang} {...dict} />
			</body>
		</html>
	);
}
