import Link from "next/link";

import { getCurrentUser } from "@/actions/getCurrentUser";
import { getMyFavourites } from "@/actions/getMyFavourites";
import CourseCard from "@/components/Shared/CourseCard";

const page = async ({ params: { lang } }) => {
	const currentUser = await getCurrentUser();
	const { favourites } = await getMyFavourites();
	return (
		<div className="ptb-100">
			<div className="container">
				<h2 className="fw-bold mb-4">My Learning</h2>

				<ul className="nav-style1">
					<li>
						<Link href={`/${lang}/learning/my-courses/`}>
							All Courses
						</Link>
					</li>
					<li>
						<Link
							href={`/${lang}/learning/wishlist/`}
							className="active"
						>
							Wishlist
						</Link>
					</li>
				</ul>

				<div className="row">
					{favourites.length > 0 ? (
						favourites.map((fav) => (
							<CourseCard
								key={fav.id}
								{...fav.course}
								currentUser={currentUser}
								lang={lang}
							/>
						))
					) : (
						<h3>Empty</h3>
					)}
				</div>
			</div>
		</div>
	);
};

export default page;
