import AboutMe from "@/components/AboutMe";
import Greeting from "@/components/Greeting";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Wow from "@/components/Wow";
import Container from "@/components/layout/Container";

export const metadata = {
	title: "Jiří Šimeček's personal portfolio website.",
	description:
		"The most important information about me summed up, including my personality and coding experience.",
};

export default function Home() {
	return (
		<>
			<Container>
				<Hero />
				<Greeting />
				<Skills />
			</Container>
			<AboutMe />
			<Wow />
		</>
	);
}
