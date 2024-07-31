// Update your baseUrl here
const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://StudyGrove.sane.agency"
		: "http://localhost:3000";

export default baseUrl;
