import GroupProjects from "@/components/ProjectsPage/GroupProjects";
import OtherProjects from "@/components/ProjectsPage/OtherProjects";
import SoloProjects from "@/components/ProjectsPage/SoloProjects";
import Container from "@/components/layout/Container";
import Title from "@/components/ui/Title";

export const metadata = {
	title: "Projects",
	description:
		"A portfolio of the 3 best solo and 3 best group coding projects that I have been a part of.",
};

export default function Projects() {
	return (
		<>
			<Title title="<Projects>" />
			<Container>
				<SoloProjects />
				<GroupProjects />
				<OtherProjects />
				<div className="mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Projects>"}</h1>
				</div>
			</Container>
		</>
	);
}
