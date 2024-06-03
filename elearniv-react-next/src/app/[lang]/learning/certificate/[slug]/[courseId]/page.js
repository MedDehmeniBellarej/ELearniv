import { getCurrentUser } from "@/actions/getCurrentUser";
import { courseCertificate } from "@/actions/myLearning";
import React from "react";
import Content from "../../Content";

const page = async ({ params }) => {
	const currentUser = await getCurrentUser();
	const { course } = await courseCertificate(params);

	return <Content currentUser={currentUser} {...course} />;
};

export default page;
