import GroupProjects from "@/components/ProjectsPage/GroupProjects";
import OtherProjects from "@/components/ProjectsPage/OtherProjects";
import SoloProjects from "@/components/ProjectsPage/SoloProjects";

export const metadata = {
	title: "Projects",
	description:
		"A portfolio of the 3 best solo and 3 best group coding projects that I have been a part of.",
};

export default function Projects() {
	return (
		<>
			<SoloProjects />
			<GroupProjects />
			<OtherProjects />
		</>
	);
}
