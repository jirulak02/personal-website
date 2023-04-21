import HobbiesList from "@/components/HobbiesPage/HobbiesList";
import Container from "@/components/layout/Container";
import Title from "@/components/ui/Title";

export const metadata = {
	title: "Hobbies",
	description:
		"A showcase of my personal hobbies and interests with a touch of my biggest achievement in that field.",
};

export default function Hobbies() {
	return (
		<>
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
