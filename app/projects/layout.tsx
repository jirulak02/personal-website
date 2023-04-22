import Title from "@/components/ui/Title";
import { Children } from "../layout";
import Container from "@/components/layout/Container";

export default function ProjectsLayout({ children }: Children) {
	return (
		<>
			<Title title="<Projects>" />
			<Container>
				{children}
				<div className="mt-12 md:mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Projects>"}</h1>
				</div>
			</Container>
		</>
	);
}
