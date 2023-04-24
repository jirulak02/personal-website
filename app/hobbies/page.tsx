import HobbiesList from "@/components/HobbiesPage/HobbiesList";
import ScrollUp from "@/components/layout/ScrollUp";

export const metadata = {
	title: "Hobbies",
	description:
		"Showcase of my personal hobbies and interests with my biggest achievement in that field.",
};

export default function Hobbies() {
	return (
		<>
			<ScrollUp />
			<HobbiesList />
		</>
	);
}
