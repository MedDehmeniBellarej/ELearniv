import { myLearningPlay } from "@/actions/myLearning";
import Sidebar from "../../Sidebar";
import Player from "@/components/Learning/Player";
import Content from "../../Content";
import { getCurrentUser } from "@/actions/getCurrentUser";

const page = async ({ params }) => {
	const { course } = await myLearningPlay(params);
	const currentUser = await getCurrentUser();
	const user = {
		id: String(currentUser.id),
		name: currentUser.name,
		image: currentUser.image // Replace with actual user image URL
	  };
	console.log(user);
    //console.log(course);
	//console.log(course.discussions.user);
	// const { reviewsAndAssets } = await courseReviewsAndAssets(params);

	return (
		<div className="mt-5 pb-5 video-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-9 col-md-8">
						<div className="video-content">
							<Player {...course} />

							<br />
							<Content {...course} currentUser={currentUser} />
						</div>
					</div>

					<Sidebar {...course} />
				</div>
			</div>
		</div>
	);
};

export default page;
