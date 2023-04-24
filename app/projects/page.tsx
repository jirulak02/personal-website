import GroupProjects from "@/components/ProjectsPage/GroupProjects";
import OtherProjects from "@/components/ProjectsPage/OtherProjects";
import SoloProjects from "@/components/ProjectsPage/SoloProjects";
import ScrollUp from "@/components/layout/ScrollUp";

export const metadata = {
	title: "Projects",
	description:
		"A portfolio of the best solo and best group coding projects that I have been a part of.",
};

export default function Projects() {
	return (
		<>
			<ScrollUp />
			<SoloProjects />
			<GroupProjects />
			<OtherProjects />
		</>
	);
}
