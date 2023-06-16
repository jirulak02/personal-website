import HobbiesList from "@/components/HobbiesPage/HobbiesList";
import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Title from "@/components/ui/Title";

export const metadata = {
	title: "Hobbies",
	description:
		"Showcase of my personal hobbies and interests with my biggest achievement in that field.",
};

export default function Hobbies() {
	return (
		<>
			<ScrollUp />
			<Title title="<Hobbies>" />
			<Container>
				<HobbiesList />
				<div className="mt-12 md:mt-20 mb-4 text-center">
					<h1 className="font-normal">{"</Hobbies>"}</h1>
				</div>
			</Container>
		</>
	);
}
