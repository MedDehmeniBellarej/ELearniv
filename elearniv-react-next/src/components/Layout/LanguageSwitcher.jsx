"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const LanguageSwitcher = ({ lang }) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("q");

	function switchLocale(locale) {
		const currentLocale = pathname.split("/")[1]; // Extract current language code
		const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
		const queryString = query
			? `?${new URLSearchParams({ q: query }).toString()}`
			: ""; // Check if query exists
		router.push(`${newPath}${queryString}`, undefined, { shallow: true });
	}
	return (
		<div className="language-switcher">
			<button
				className={lang === "en" ? "active" : null}
				onClick={() => switchLocale("en")}
			>
				EN
			</button>
			<button
				className={lang === "ar" ? "active" : null}
				onClick={() => switchLocale("ar")}
			>
				AR
			</button>
			<button
				className={lang === "de" ? "active" : null}
				onClick={() => switchLocale("de")}
			>
				DE
			</button>
		</div>
	);
};

export default LanguageSwitcher;
