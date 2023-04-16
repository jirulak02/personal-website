import Container from "@/components/layout/Container";

export const metadata = {
	title: "My life",
	description:
		"A short look into my life, education and programming journey. It is made in a visual, dynamic string like way.",
};

export default function MyLife() {
	return (
		<Container>
			<h1>MyLife Page</h1>
			<div className="mb-20"></div>
		</Container>
	);
}
