import Title from "@/components/ui/Title";
import { Children } from "../layout";
import Container from "@/components/layout/Container";

export default function HobbiesLayout({ children }: Children) {
	return (
		<>
			<Title title="<Hobbies>" />
			<Container>
				{children}
				<div className="mt-12 md:mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Hobbies>"}</h1>
				</div>
			</Container>
		</>
	);
}
