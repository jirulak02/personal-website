import Title from "@/components/ui/Title";
import { Children } from "../layout";
import Container from "@/components/layout/Container";

export default function ContactLayout({ children }: Children) {
	return (
		<>
			<Title title="<Contact>" />
			<Container>
				{children}
				<div className="mb-4 text-center absolute w-full bottom-16">
					<h1 className="font-normal">{"</Contact>"}</h1>
				</div>
			</Container>
		</>
	);
}
