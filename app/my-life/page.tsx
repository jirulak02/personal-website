import Story from "@/components/MyLifePage/Story";
import ScrollUp from "@/components/layout/ScrollUp";
export const metadata = {
	title: "My life",
	description:
		"A short look into my life, education and programming journey. It is made in a visual, dynamic string like way.",
};

export default function MyLife() {
	return (
		<>
			<ScrollUp />
			<Story />
		</>
	);
}
