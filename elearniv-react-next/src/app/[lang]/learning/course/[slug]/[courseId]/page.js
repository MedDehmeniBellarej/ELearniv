import { myLearningPlay } from "@/actions/myLearning";
import Sidebar from "../../Sidebar";
import Player from "@/components/Learning/Player";
import Content from "../../Content";

const page = async ({ params }) => {
	const { course } = await myLearningPlay(params);
	// console.log(course);
	// const { reviewsAndAssets } = await courseReviewsAndAssets(params);

	return (
		<div className="mt-5 pb-5 video-area">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-9 col-md-8">
						<div className="video-content">
							<Player {...course} />

							<br />
							<Content {...course} />
						</div>
					</div>

					<Sidebar {...course} />
				</div>
			</div>
		</div>
	);
};

export default page;
